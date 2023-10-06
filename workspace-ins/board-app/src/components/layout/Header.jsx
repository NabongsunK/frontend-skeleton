import { Link, NavLink, useNavigate } from "react-router-dom";
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { userState } from '../../recoil/user/atoms';
import modal from '../../utils/modal';

const Header = function(){
  const user = useRecoilValue(userState);
  const resetUser = useResetRecoilState(userState);
  console.log('user', user);
  const navigate = useNavigate();

  const handleLogout = () => {
    // window.localStorage.removeItem('accessToken');
    // window.localStorage.removeItem('refreshToken');

    // userState 초기화
    resetUser(userState);
    modal.show({
      body: '로그아웃 되었습니다.',
      // next: () => navigate('/')
    });
  };
  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center">
  
        <h1 className="logo me-auto"><Link to="index.html">Sailor {process.env.REACT_APP_ENV_FILE}</Link></h1>

        <nav id="navbar" className="navbar">
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
  
            <li className="dropdown"><NavLink to="/about"><span>About</span> <i className="bi bi-chevron-down"></i></NavLink>
              <ul>
                <li><NavLink to="about.html">About</NavLink></li>
                <li><NavLink to="team.html">Team</NavLink></li>
                <li><NavLink to="testimonials.html">Testimonials</NavLink></li>
  
                <li className="dropdown"><NavLink to="/dd1"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></NavLink>
                  <ul>
                    <li><NavLink to="/dd1">Deep Drop Down 1</NavLink></li>
                    <li><NavLink to="/dd2">Deep Drop Down 2</NavLink></li>
                    <li><NavLink to="/dd3">Deep Drop Down 3</NavLink></li>
                    <li><NavLink to="/dd4">Deep Drop Down 4</NavLink></li>
                    <li><NavLink to="/dd5">Deep Drop Down 5</NavLink></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><NavLink to="services.html">Services</NavLink></li>
            <li><NavLink to="portfolio.html">Portfolio</NavLink></li>            
            <li><NavLink to="/boards">게시판</NavLink></li>
            
  
            {
              user ?
                <>
                  <li><NavLink to={`users/${user.id}`}>{user.name}</NavLink></li>
                  <li><Link onClick={handleLogout}>로그아웃</Link></li>
                </>
              :
                <>
                  <li><NavLink to="/users/login">로그인</NavLink></li>
                  <li><NavLink to="/users/new" className="getstarted">회원가입</NavLink></li>
                </>
            }
            
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
  
      </div>
    </header>
  );
};

export default Header;