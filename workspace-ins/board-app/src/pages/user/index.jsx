import { useState } from "react";
import { Outlet } from 'react-router';
import BreadCrumbs from "../../components/layout/BreadCrumbs";

const User = function(){
  const [pageTitle, setPageTitle] = useState('');
  return (
    <main id="main">
      <BreadCrumbs title={pageTitle} />

      <section id="blog" className="blog">
        <div className="container">

          <div className="row">
            <Outlet context={{setPageTitle}} />
          </div>

        </div>
      </section>

    </main>
  );
};

export default User;