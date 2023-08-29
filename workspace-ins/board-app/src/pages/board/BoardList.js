import Pagination from "../../components/common/Pagination";
import BoardListEntry from "./BoardListEntry";

const BoardList = function({ itemList }){
  const list = itemList.map(item => {
    return <BoardListEntry item={item} />;
  });
  return (
    <>
      {list}
      <Pagination />
    </>
  );
};

export default BoardList;