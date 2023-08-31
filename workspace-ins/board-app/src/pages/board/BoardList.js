import Pagination from "../../components/common/Pagination";
import BoardListEntry from "./BoardListEntry";
import {useSelector} from 'react-redux';
import SideBar from "./SideBar";
import { useEffect } from "react";

const BoardList = function(){
  const itemList = useSelector(state => state.boardStore.itemList);

  console.log('itemList', itemList);
  const list = itemList.map(item => {
    return <BoardListEntry key={item.id} item={item} />;
  });

  useEffect(() => {
    console.log('BoardList 업데이트됨');
    return ()=>console.log('BoardList 제거됨');
  });

  return (
    <>      
      <div className="col-lg-8 entries">
        {list}
        <Pagination />
      </div>
      <div className="col-lg-4">
        <SideBar />
      </div>
    </>
  );
};

export default BoardList;