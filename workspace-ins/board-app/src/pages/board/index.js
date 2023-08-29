import BreadCrumbs from "../../components/layout/BreadCrumbs";
import SideBar from "./SideBar";
import BoardList from "./BoardList";

const Board = function(){

  const itemList = [
    {id: 1, title: '안녕하세요.', content: '반가워요.', userName: '김철수', updatedAt: '2023-09-23', viewCount: 10},
    {id: 2, filePath: 'blog-1.jpg', title: '하이.', content: '나도 반가워.', userName: '이영희', updatedAt: '2023-07-23', viewCount: 8}
  ];
  return (
    <main id="main">

      <BreadCrumbs title="게시판" />

      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">

          <div className="row">
            <div className="col-lg-8 entries">
              <BoardList itemList={itemList} />
            </div>
            <div className="col-lg-4">
              <SideBar />
            </div>
          </div>

        </div>
      </section>

    </main>
  );

};

export default Board;