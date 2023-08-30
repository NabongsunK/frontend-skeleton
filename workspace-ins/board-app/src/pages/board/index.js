import BreadCrumbs from "../../components/layout/BreadCrumbs";
import SideBar from "./SideBar";

import axios from 'axios';
import { useEffect, useState } from "react";
import { Outlet } from "react-router";

import { useDispatch, useSelector } from "react-redux";
import { listArticle } from "../../store/boardSlice";


axios.defaults.baseURL = 'http://localhost:30443/api/boards';

const Board = function(){
  const itemList = useSelector(state => state.boardStore.itemList);
  const dispatch = useDispatch();

  const getList = async function(){
    try{
      const res = await axios.get('/');      
      dispatch(listArticle({list: res.data}));
    }catch(err){
      console.error(err);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <main id="main">
      <BreadCrumbs title="게시판" />
      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <Outlet itemList={itemList} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Board;