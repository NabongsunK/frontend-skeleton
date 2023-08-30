import { Link, useParams } from "react-router-dom";
import CommentList from "./CommentList";
import SideBar from "./SideBar";

import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { currentArticle } from "../../store/boardSlice";
import { useEffect } from "react";

axios.defaults.baseURL = 'http://localhost:30443/api/boards';

const BoardDetail = function(){
  const {id} = useParams();
  const item = useSelector(state => state.boardStore.currentItem);
  const dispatch = useDispatch();

  const getDetail = async function(){
    try{
      const res = await axios(`/${id}`);
      dispatch(currentArticle({article: res.data}));
    }catch(err){
      console.error(err);
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <>

      <div className="col-lg-8 entries">
        <article className="entry entry-single">
          <div className="entry-img">
            <img src="assets/img/blog/blog-1.jpg" alt="" className="img-fluid" />
          </div>
          <h2 className="entry-title">
            <Link to="blog-single.html">Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia</Link>
          </h2>
          <div className="entry-meta">
            <ul>
              <li className="d-flex align-items-center"><i className="bi bi-person"></i> <Link to="blog-single.html">John Doe</Link></li>
              <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <Link to="blog-single.html"><time dateTime="2020-01-01">Jan 1, 2020</time></Link></li>
              <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <Link to="blog-single.html">12 Comments</Link></li>
            </ul>
          </div>
          <div className="entry-content">
            <p>
              Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
              Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.
            </p>

            <p>
              Sit repellat hic cupiditate hic ut nemo. Quis nihil sunt non reiciendis. Sequi in accusamus harum vel aspernatur. Excepturi numquam nihil cumque odio. Et voluptate cupiditate.
            </p>

            <blockquote>
              <p>
                Et vero doloremque tempore voluptatem ratione vel aut. Deleniti sunt animi aut. Aut eos aliquam doloribus minus autem quos.
              </p>
            </blockquote>

            <p>
              Sed quo laboriosam qui architecto. Occaecati repellendus omnis dicta inventore tempore provident voluptas mollitia aliquid. Id repellendus quia. Asperiores nihil magni dicta est suscipit perspiciatis. Voluptate ex rerum assumenda dolores nihil quaerat.
              Dolor porro tempora et quibusdam voluptas. Beatae aut at ad qui tempore corrupti velit quisquam rerum. Omnis dolorum exercitationem harum qui qui blanditiis neque.
              Iusto autem itaque. Repudiandae hic quae aspernatur ea neque qui. Architecto voluptatem magni. Vel magnam quod et tempora deleniti error rerum nihil tempora.
            </p>

            <h3>Et quae iure vel ut odit alias.</h3>
            <p>
              Officiis animi maxime nulla quo et harum eum quis a. Sit hic in qui quos fugit ut rerum atque. Optio provident dolores atque voluptatem rem excepturi molestiae qui. Voluptatem laborum omnis ullam quibusdam perspiciatis nulla nostrum. Voluptatum est libero eum nesciunt aliquid qui.
              Quia et suscipit non sequi. Maxime sed odit. Beatae nesciunt nesciunt accusamus quia aut ratione aspernatur dolor. Sint harum eveniet dicta exercitationem minima. Exercitationem omnis asperiores natus aperiam dolor consequatur id ex sed. Quibusdam rerum dolores sint consequatur quidem ea.
              Beatae minima sunt libero soluta sapiente in rem assumenda. Et qui odit voluptatem. Cum quibusdam voluptatem voluptatem accusamus mollitia aut atque aut.
            </p>
            <img src="assets/img/blog/blog-inside-post.jpg" className="img-fluid" alt="" />

            <h3>Ut repellat blanditiis est dolore sunt dolorum quae.</h3>
            <p>
              Rerum ea est assumenda pariatur quasi et quam. Facilis nam porro amet nostrum. In assumenda quia quae a id praesentium. Quos deleniti libero sed occaecati aut porro autem. Consectetur sed excepturi sint non placeat quia repellat incidunt labore. Autem facilis hic dolorum dolores vel.
              Consectetur quasi id et optio praesentium aut asperiores eaque aut. Explicabo omnis quibusdam esse. Ex libero illum iusto totam et ut aut blanditiis. Veritatis numquam ut illum ut a quam vitae.
            </p>
            <p>
              Alias quia non aliquid. Eos et ea velit. Voluptatem maxime enim omnis ipsa voluptas incidunt. Nulla sit eaque mollitia nisi asperiores est veniam.
            </p>

          </div>
          <div className="entry-footer">
            <i className="bi bi-folder"></i>
            <ul className="cats">
              <li><Link to="#">Business</Link></li>
            </ul>

            <i className="bi bi-tags"></i>
            <ul className="tags">
              <li><Link to="#">Creative</Link></li>
              <li><Link to="#">Tips</Link></li>
              <li><Link to="#">Marketing</Link></li>
            </ul>
          </div>
        </article>

        <div className="blog-author d-flex align-items-center">
          <img src="assets/img/blog/blog-author.jpg" className="rounded-circle float-left" alt="" />
          <div>
            <h4>Jane Smith</h4>
            <div className="social-links">
              <Link to="https://twitters.com/#"><i className="bi bi-twitter"></i></Link>
              <Link to="https://facebook.com/#"><i className="bi bi-facebook"></i></Link>
              <Link to="https://instagram.com/#"><i className="biu bi-instagram"></i></Link>
            </div>
            <p>
              Itaque quidem optio quia voluptatibus dolorem dolor. Modi eum sed possimus accusantium. Quas repellat voluptatem officia numquam sint aspernatur voluptas. Esse et accusantium ut unde voluptas.
            </p>
          </div>
        </div>

        <CommentList />
      </div>
      <div className="col-lg-4">
        <SideBar />
      </div>

    </>
  );
};

export default BoardDetail;