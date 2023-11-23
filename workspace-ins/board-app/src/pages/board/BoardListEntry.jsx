import { Link } from 'react-router-dom';

import moment from 'moment';

const Entry = function ({ item }) {
  return (
    <article className="entry">
      <div className="entry-img">
        {item.filePath ? (
          <img
            src={`assets/img/blog/${item.filePath}`}
            alt=""
            className="img-fluid"
          />
        ) : (
          ''
        )}
      </div>

      <h2 className="entry-title">
        <Link to={`/boards/${item.id}`}>{item.title}</Link>
      </h2>

      <div className="entry-meta">
        <ul>
          <li className="d-flex align-items-center">
            <i className="bi bi-person"></i>
            <Link to={`/boards/${item.id}`}>{item.userName}</Link>
          </li>
          <li className="d-flex align-items-center">
            <i className="bi bi-clock"></i>
            <Link to={`/boards/${item.id}`}>
              <time
                dateTime={moment(item.updatedAt).format('YYYY-MM-DD HH:mm:ss')}
              >
                {moment(item.updatedAt).format('YYYY-MM-DD HH:mm:ss')}
              </time>
            </Link>
          </li>
          <li className="d-flex align-items-center">
            <i className="bi bi-chat-dots"></i>
            <Link to={`/boards/${item.id}`}>{item.view} Views</Link>
          </li>
        </ul>
      </div>

      <div className="entry-content">
        <p>{item.content.substring(0, 100)}</p>
        <div className="read-more">
          <Link to={`/boards/${item.id}`}>Read More</Link>
        </div>
      </div>
    </article>
  );
};

export default Entry;
