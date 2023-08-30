import BreadCrumbs from "../../components/layout/BreadCrumbs";
import SideBar from "./SideBar";

import axios from 'axios';
import { useEffect, useState } from "react";
import { Outlet } from "react-router";
axios.defaults.baseURL = 'http://localhost:30443/api/boards';

const Board = function(){
  let [itemList, setItemList] = useState([]);
  const getList = async function(){
    try{
      const res = await axios.get('/');      
      setItemList(res.data);
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
            <div className="col-lg-8 entries">
              <Outlet itemList={itemList} />
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