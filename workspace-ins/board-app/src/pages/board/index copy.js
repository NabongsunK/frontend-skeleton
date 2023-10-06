import BreadCrumb from "../../components/layout/BreadCrumbs";
import { listArticle } from '../../redux/boardSlice';
import { useDispatch } from 'react-redux';

import useAxios from 'axios-hooks';
import { Outlet } from "react-router";
import { useState } from "react";

import Loading from '../../components/common/Loading';

const Board = function(){
  const [pageTitle, setPageTitle] = useState('');
  const dispatch = useDispatch();
  const [{ data, loading, error }] = useAxios('/boards?delay=1000');

  if(data){
    dispatch(listArticle({list: data}));
  }

  return (
    <main id="main">
      <BreadCrumb title={pageTitle} />
      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
        { loading && <Loading /> }
        { error && <p>{error.response.data && error.response.data.error.message}</p>}
        { data && 
          <div className="row">
            <Outlet context={{setPageTitle}} />
          </div>
        }
        </div>
      </section>
    </main>
  );
};

export default Board;

