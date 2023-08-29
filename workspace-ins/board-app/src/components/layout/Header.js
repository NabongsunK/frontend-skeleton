import { Link, NavLink } from "react-router-dom";

const Header = function(){
  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto"><Link to="/">Sailor</Link></h1>
        <nav id="navbar" className="navbar">
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li className="dropdown"><NavLink to="/about"><span>About</span> <i className="bi bi-chevron-down"></i></NavLink>
              <ul>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/team">Team</NavLink></li>
                <li><NavLink to="/testimonials">Testimonials</NavLink></li>
                <li className="dropdown"><NavLink to="/ddd"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></NavLink>
                  <ul>
                    <li><NavLink to="/ddd1">Deep Drop Down 1</NavLink></li>
                    <li><NavLink to="/ddd2">Deep Drop Down 2</NavLink></li>
                    <li><NavLink to="/ddd3">Deep Drop Down 3</NavLink></li>
                    <li><NavLink to="/ddd4">Deep Drop Down 4</NavLink></li>
                    <li><NavLink to="/ddd5">Deep Drop Down 5</NavLink></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/portfolio">Portfolio</NavLink></li>
            <li><NavLink to="/pricing">Pricing</NavLink></li>
            <li><NavLink to="/boards">게시판</NavLink></li>

            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/" className="getstarted">Get Started</NavLink></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;