import { Link } from "react-router-dom";

// 브레드크럼(빵부스러기로 표시한 길, 헨젤과 그레텔): 유저의 현재 위치를 표시
const BreadCrumb = function(props){
  return (
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center">
          <h2>{props.title}</h2>
          <ol>
            <li><Link to="/">Home</Link></li>
            <li>{props.title}</li>
          </ol>
        </div>

      </div>
    </section>
  );
};

export default BreadCrumb;