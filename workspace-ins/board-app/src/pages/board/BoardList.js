import Pagination from "../../components/common/Pagination";
import BoardListEntry from "./BoardListEntry";
import {useSelector} from 'react-redux';

const BoardList = function(){
  const itemList = useSelector(state => state.boardStore.itemList);

  const list = itemList.map(item => {
    return <BoardListEntry key={item.id} item={item} />;
  });
  return (
    <>
      {list}
      <Pagination />
    </>
  );
};

export default BoardList;