import { Link } from "react-router-dom";

const BoardListEntry = function({ item }){
  return (
    <article className="entry">

      <div className="entry-img">
        {item.filePath?<img src={`assets/img/blog/${item.filePath}`} alt="" className="img-fluid" />:''}        
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
              <time dateTime={item.updatedAt}>{item.updatedAt}</time>
            </Link>
          </li>
          <li className="d-flex align-items-center">
            <i className="bi bi-chat-dots"></i>
            <Link to="blog-single.html">{item.viewCount} Views</Link>
          </li>
        </ul>
      </div>

      <div className="entry-content">
        <p>{item.content}</p>
        <div className="read-more">
          <Link to={`/boards/${item.id}`}>Read More</Link>
        </div>
      </div>

    </article>
  );
};

export default BoardListEntry;