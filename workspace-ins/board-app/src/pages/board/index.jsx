import { useState } from "react";
import { Outlet } from "react-router";

import BreadCrumb from "../../components/layout/BreadCrumbs";

const Board = function(){
  const [pageTitle, setPageTitle] = useState('');


  return (
    <main id="main">
      <BreadCrumb title={pageTitle} />
      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <Outlet context={{setPageTitle}} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Board;

