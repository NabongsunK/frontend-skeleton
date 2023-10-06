import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { useEffect } from "react";


const Pagination = function({totalPage, current=1}){
  const location = useLocation();
  let pageList = [];

  const parsedQS = queryString.parse(location.search);

  useEffect(()=>{
    console.log('Pagination 마운트.');
  });

  for(let page=1; page<=totalPage; page++){
    parsedQS.page = page;
    let search = queryString.stringify(parsedQS);
    pageList.push(<li key={page} className={current==page?'active':''} ><Link to={`/boards?${search}`}>{page}</Link></li>);
  }
  return (
    <div className="blog-pagination">
      <ul className="justify-content-center">
        {pageList}
      </ul>
    </div>
  );
};

export default Pagination;