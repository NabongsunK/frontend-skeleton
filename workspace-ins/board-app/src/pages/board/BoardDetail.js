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
            {item.filePath?<img src={`assets/img/blog/${item.filePath}`} alt="" className="img-fluid" />:''}
          </div>
          <h2 className="entry-title">
            <Link to="blog-single.html">{item.title}</Link>
          </h2>
          <div className="entry-meta">
            <ul>
              <li className="d-flex align-items-center"><i className="bi bi-person"></i> <Link to="blog-single.html">{item.name}</Link></li>
              <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <Link to="blog-single.html"><time dateTime={item.updatedAt}>{item.updatedAt}</time></Link></li>
              <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <Link to="blog-single.html">12 Comments</Link></li>
            </ul>
          </div>
          <div className="entry-content">{item.content}</div>
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
          <img src="/assets/img/blog/blog-author.jpg" className="rounded-circle float-left" alt="" />
          <div>
            <h4>{item.name}</h4>
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