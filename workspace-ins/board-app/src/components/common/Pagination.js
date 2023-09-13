import { Link } from "react-router-dom";

const Pagination = function(){
  return (
    <div className="blog-pagination">
      <ul className="justify-content-center">
        <li><Link to="#">1</Link></li>
        <li className="active"><Link to="#">2</Link></li>
        <li><Link to="#">3</Link></li>
      </ul>
    </div>
  );
};

export default Pagination;