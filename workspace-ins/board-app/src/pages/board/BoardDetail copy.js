import SideBar from "./SideBar";
import { currentArticle } from '../../redux/boardSlice';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';
import React, { useEffect } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";
import moment from 'moment';
import CommentList from "./CommentList";

const BoardDetail = function (props) {
  const { setPageTitle } = useOutletContext();
  useEffect(() => {
    setPageTitle(props.title);
    getDetail();
  }, []);

  const { id } = useParams();
  const dispatch = useDispatch();
  const item = useSelector(state => state.boardStore.currentItem);

  const getDetail = async function () {
    console.log('getDetail');
    const res = await axios.get(`/boards/${id}?delay=1000`);
    dispatch(currentArticle({ article: res.data }));
  };

  return (
    <>
      <div className="col-lg-8 entries">

        <article className="entry entry-single">

          <div className="entry-img">
            <img src="/assets/img/blog/blog-1.jpg" alt="" className="img-fluid" />
          </div>

          <h2 className="entry-title">
            <Link to="blog-single.html">{item.title}</Link>
          </h2>

          <div className="entry-meta">
            <ul>
              <li className="d-flex align-items-center">
                <i className="bi bi-person"></i>
                <Link to="blog-single.html">{item.userName}</Link>
              </li>
              <li className="d-flex align-items-center">
                <i className="bi bi-clock"></i>
                <Link to="blog-single.html">
                  <time dateTime={moment(item.updatedAt).format('YYYY-MM-DD')}>{moment(item.updatedAt).format('YYYY-MM-DD')}</time>
                </Link>
              </li>
              <li className="d-flex align-items-center">
                <i className="bi bi-chat-dots"></i>
                <Link to="blog-single.html">{item.viewCount} Views</Link>
              </li>
            </ul>
          </div>

          <div className="entry-content">
            <p>{item.content}</p>
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
          <img src={`/assets/img/${item.userProfileImage}`} className="rounded-circle float-left" alt="" />
          <div>
            <h4>{item.userName}</h4>
            <div className="social-links">
              <Link to="https://twitters.com/#"><i className="bi bi-twitter"></i></Link>
              <Link to="https://facebook.com/#"><i className="bi bi-facebook"></i></Link>
              <Link to="https://instagram.com/#"><i className="biu bi-instagram"></i></Link>
            </div>
            <p>{item.userEmail}</p>
          </div>
        </div>

        <CommentList comments={item.comments} />

      </div>

      <div className="col-lg-4">
        <SideBar />
      </div>
    </>

  );
};
export default BoardDetail;