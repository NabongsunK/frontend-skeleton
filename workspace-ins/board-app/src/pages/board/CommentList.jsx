import { useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import useCustomAxios from '../../hooks/useCustomAxios';
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from 'react-infinite-scroller';

import CommentDetail from "./CommentDetail";
import CommentNew from "./CommentNew";

const CommentList = function(){

  const axios = useCustomAxios();
  const { id } = useParams();

  const fetchCommentList = (page) => {
    console.log('getCommentList', page);
    // return axios.get(`/boards/${id}/comments`, {params: {page}});
    return axios.get(`/boards/${id}/comments?delay=2000`, {params: {page}});
  };

  const { isLoading, data, error, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['boards', id, 'comments'],
    queryFn: ({ pageParam = 1 }) => fetchCommentList(pageParam),
    // select: data => ({
    //   pages: data.pages.data,
    //   pageParams: data.pageParams,
    // }),
    // select: data => {
    //   console.log(data);
    //   return {
    //     pagesaa: data.pages[0].data,
    //     pageParamsaa: data.pageParams,
    //   }
    // },
    // 마지막 페이지와 전체 페이지 배열을 받아서 queryFn에 전달할 pageParam 값을 리턴
    // false를 리턴하면 더이상 queryFn이 호출되지 않고 무한 스크롤 종료
    // lastPage: 최근 요청으로 서버에서 받은 객체(res.data)
    getNextPageParam: (lastPage, allPages) => {
      console.log('lastPage.data.page', lastPage.data.page, 'allPages', allPages);
      const totalPage = lastPage.data.totalPage;
      const nextPage = allPages.length < totalPage ? allPages.length + 1 : false;
      return nextPage;
    },
    suspense: true,
    refetchOnWindowFocus: false,  // default true
  });

  console.log({ isLoading, data, error, fetchNextPage, hasNextPage });

  // const { isLoading, data, error } = useQuery({
  //   queryKey: ['boards', id, 'comments'],
  //   queryFn: getCommentList,
  //   suspense: true,
  //   refetchOnWindowFocus: false,  // default true
  // });

  // Array.prototype.flatMap() from ES2019
  // 2차원 배열을 1차원 배열로
  const list = data.pages.flatMap(page => {
    return page.data.list.map(comment => {
      return <CommentDetail key={comment.id} comment={comment} />;
    });
  });

  console.log(list);
  
  // Array.prototype.at() from ES2022
  // 배열의 뒤부터 요소 접근(-1: 마지막 요소, -2: 마지막 요소 이전 요소)
  const hasNext = data.pages.at(-1).data.page < data.pages.at(-1).data.totalPage;

  // const next = function(p){
  //   console.log('get next page', p);
  // };



  return (
    <div className="blog-comments">

      <CommentNew />

      <h4 className="comments-count">{data.pages[0].data.count} Comments</h4>

      <InfiniteScroll pageStart={1} loadMore={fetchNextPage} hasMore={hasNext} loader={<div key={0}>로딩중...</div>}>
        {list}
      </InfiniteScroll>
      
      

    </div>
  );
};

export default CommentList;