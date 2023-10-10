import SideBar from "./SideBar";
import Pagination from "../../components/common/Pagination";
import BoardListEntry from "./BoardListEntry";
import { Link, useOutletContext, useHistory, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from '@tanstack/react-query';
import queryString from 'query-string';
import useCustomAxios from '../../hooks/useCustomAxios';

const BoardList = function (props) {
  const queryClient = useQueryClient();
  const location = useLocation();
  const axios = useCustomAxios();
  const {setPageTitle} = useOutletContext();
  const parsedQS = queryString.parse(location.search);
  const page = parsedQS.page = parsedQS.page ? Number(parsedQS.page) : 1;

  const fetchBoardList = () => {
    return axios.get(`/boards?delay=1000`, {params: parsedQS});
  };

  const {isLoading, data, error} = useQuery({
    queryKey: ['boards', parsedQS], // 쿼리키를 파라미터마다 지정(검색어, 페이지 등)
    queryFn: fetchBoardList,
    staleTime: 1000*2,
    // suspense: true,
    refetchOnWindowFocus: 'always',
  });
  console.log({isLoading, data, error});
  // const list = data && data.data.map(item => {

  let totalPage = 1;
  let list = [];
  if(data){
    totalPage = data.data.totalPage;
    list = data.data.list.map(item => {  // ES2020 Optional Chaining
      return <BoardListEntry key={item.id} item={item} />
    });
  }

  useEffect(() => {
    setPageTitle(props.title);
  }, []);
  
  useEffect(() => {
    console.log(page, totalPage);
    if(page < totalPage){
      parsedQS.page = page + 1;

      queryClient.prefetchQuery({
        queryKey: ['boards', parsedQS],
        queryFn: fetchBoardList,
      });
    }
  }, [page, totalPage, queryClient]);

  useEffect(() => {
    console.log('BoardList 마운트');
    return ()=>console.log('BoardList 언마운트');
  });

  return (
    <>
      { isLoading && 
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div> 
      }
      { error && <p>{error.message}</p>}
      { data && 
        <>
          <div className="col-lg-8 entries">
            <div>
              <Link to={`/boards/new`} className="btn btn-primary ms-2 mb-3">글쓰기</Link>
            </div>

            {list}
            
            <Pagination totalPage={totalPage} current={page} />

          </div>
          <div className="col-lg-4">
            <SideBar />
          </div>
        </>
      }
    </>
  );
};

export default BoardList;