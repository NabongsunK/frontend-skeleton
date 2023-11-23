import React, { useEffect } from 'react';
import { Link, useOutletContext, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useCustomAxios from '../../hooks/useCustomAxios';
import moment from 'moment';

import SideBar from './SideBar';
import CommentList from './CommentList';

const BoardDetail = function (props) {
  const axios = useCustomAxios();
  const { setPageTitle } = useOutletContext();
  const { id } = useParams();
  const { data, error } = useQuery(
    ['boards', id],
    () => axios.get(`/boards/${id}?delay=900`),
    {
      suspense: true,
      refetchOnWindowFocus: false, // default true
      retry: 2, // default 3
      staleTime: 1000 * 5, // default 0. fresh에서 stale 상태로 변경되는데 걸리는 시간. fresh 상태에서는 네트워크 fetch가 일어나지 않음
      cacheTime: 1000 * 10, // default 5분. 쿼리 인스턴스가 새롭게 마운트되면 캐시 시간내에선 fetch가 실행되고 값을 가져오는 동안에 캐시 데이터를 보여줌
    },
  );

  let item;
  console.log(data, error);
  if (data) {
    item = data.data;
  }

  useEffect(() => {
    setPageTitle(props.title);
  }, []);

  return (
    <>
      {error && <p>{error.message}</p>}

      {data && (
        <>
          <div className="col-lg-8 entries">
            <article className="entry entry-single">
              <div className="entry-img">
                <img
                  src="/assets/img/blog/blog-1.jpg"
                  alt=""
                  className="img-fluid"
                />
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
                      <time
                        dateTime={moment(item.updatedAt).format(
                          'YYYY-MM-DD HH:mm:ss',
                        )}
                      >
                        {moment(item.updatedAt).format('YYYY-MM-DD HH:mm:ss')}
                      </time>
                    </Link>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-chat-dots"></i>
                    <Link to="blog-single.html">{item.view} Views</Link>
                  </li>
                </ul>
              </div>
              <div className="entry-content">
                <p>{item.content}</p>
              </div>
              <div className="entry-content">
                <a
                  href={`${process.env.REACT_APP_UPLOAD_SERVER}/${item.attachFile}`}
                  download
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.attachFileName}
                </a>
              </div>
              <div className="entry-footer">
                <i className="bi bi-folder"></i>
                <ul className="cats">
                  <li>
                    <Link to="#">Business</Link>
                  </li>
                </ul>
                <i className="bi bi-tags"></i>
                <ul className="tags">
                  <li>
                    <Link to="#">Creative</Link>
                  </li>
                  <li>
                    <Link to="#">Tips</Link>
                  </li>
                  <li>
                    <Link to="#">Marketing</Link>
                  </li>
                </ul>
              </div>
            </article>
            <div className="blog-author d-flex align-items-center">
              <img
                src={`/assets/img/${item.userProfileImage}`}
                className="rounded-circle float-left"
                alt=""
              />
              <div>
                <h4>{item.userName}</h4>
                <div className="social-links">
                  <Link to="https://twitters.com/#">
                    <i className="bi bi-twitter"></i>
                  </Link>
                  <Link to="https://facebook.com/#">
                    <i className="bi bi-facebook"></i>
                  </Link>
                  <Link to="https://instagram.com/#">
                    <i className="biu bi-instagram"></i>
                  </Link>
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
      )}
    </>
  );
};
export default BoardDetail;
