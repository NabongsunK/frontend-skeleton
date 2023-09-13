import { Link } from "react-router-dom";

const BreadCrumbs = function({ title }){
  return (
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center">
          <h2>{title}</h2>
          <ol>
            <li><Link to="/">Home</Link></li>
            <li>{title}</li>
          </ol>
        </div>

      </div>
    </section>
  );
};

export default BreadCrumbs;