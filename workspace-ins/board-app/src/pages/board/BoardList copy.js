import SideBar from "./SideBar";
import { useSelector } from 'react-redux';
import Pagination from "../../components/common/Pagination";
import BoardListEntry from "./BoardListEntry";
import { Link, useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import useAxios from 'axios-hooks';

const BoardList = function (props) {
  const {setPageTitle} = useOutletContext();

  const [{ data, loading, error }] = useAxios('/boards?delay=1000');
  
  const itemList = useSelector(state => state.boardStore.itemList);
  const list = itemList.map(item => {
    return <BoardListEntry key={item.id} item={item} />
  });

  useEffect(() => {
    setPageTitle(props.title);
  }, []);

  return (
    <>
      <div className="col-lg-8 entries">
        {list}
        <div>
          <Link to={`/boards/new`} className="btn btn-primary ms-2">글쓰기</Link>
        </div>
        <Pagination />
      </div>
      <div className="col-lg-4">
        <SideBar />
      </div>
    </>
  );
};

export default BoardList;