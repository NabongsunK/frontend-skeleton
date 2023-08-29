import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center">
    
          <h1 className="logo me-auto"><Link to="index.html">Sailor</Link></h1>
          
          
    
          <nav id="navbar" className="navbar">
            <ul>
              <li><Link to="index.html" className="active">Home</Link></li>
    
              <li className="dropdown"><Link to="#"><span>About</span> <i className="bi bi-chevron-down"></i></Link>
                <ul>
                  <li><Link to="about.html">About</Link></li>
                  <li><Link to="team.html">Team</Link></li>
                  <li><Link to="testimonials.html">Testimonials</Link></li>
    
                  <li className="dropdown"><Link to="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></Link>
                    <ul>
                      <li><Link to="#">Deep Drop Down 1</Link></li>
                      <li><Link to="#">Deep Drop Down 2</Link></li>
                      <li><Link to="#">Deep Drop Down 3</Link></li>
                      <li><Link to="#">Deep Drop Down 4</Link></li>
                      <li><Link to="#">Deep Drop Down 5</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><Link to="services.html">Services</Link></li>
              <li><Link to="portfolio.html">Portfolio</Link></li>
              <li><Link to="pricing.html">Pricing</Link></li>
              <li><Link to="blog.html">Blog</Link></li>
    
              <li><Link to="contact.html">Contact</Link></li>
              <li><Link to="index.html" className="getstarted">Get Started</Link></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
    
        </div>
      </header>
    
      <section id="hero">
        <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">
    
          <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>
    
          <div className="carousel-inner" role="listbox">
    
            
            <div className="carousel-item active" style={{'backgroundImage': 'url(assets/img/slide/slide-1.jpg)'}}>
              <div className="carousel-container">
                <div className="container">
                  <h2 className="animate__animated animate__fadeInDown">Welcome to <span>Sailor</span></h2>
                  <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                  <Link to="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</Link>
                </div>
              </div>
            </div>
    
            
            <div className="carousel-item" style={{'backgroundImage': 'url(assets/img/slide/slide-2.jpg)'}}>
              <div className="carousel-container">
                <div className="container">
                  <h2 className="animate__animated animate__fadeInDown">Lorem Ipsum Dolor</h2>
                  <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                  <Link to="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</Link>
                </div>
              </div>
            </div>
    
            
            <div className="carousel-item" style={{'backgroundImage': 'url(assets/img/slide/slide-3.jpg)'}}>
              <div className="carousel-container">
                <div className="container">
                  <h2 className="animate__animated animate__fadeInDown">Sequi ea ut et est quaerat</h2>
                  <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                  <Link to="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</Link>
                </div>
              </div>
            </div>
    
          </div>
    
          <Link className="carousel-control-prev" to="#heroCarousel" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
          </Link>
    
          <Link className="carousel-control-next" to="#heroCarousel" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
          </Link>
    
        </div>
      </section>
    
      <main id="main">
    
        
        <section id="about" className="about">
          <div className="container">
    
            <div className="row content">
              <div className="col-lg-6">
                <h2>Eum ipsam laborum deleniti velitena</h2>
                <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assum perenda sruen jonee trave</h3>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0">
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </p>
                <ul>
                  <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequa</li>
                  <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
                  <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</li>
                </ul>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
              </div>
            </div>
    
          </div>
        </section>
    
        
        <section id="clients" className="clients section-bg">
          <div className="container">
    
            <div className="row">
    
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="assets/img/clients/client-1.png" className="img-fluid" alt="" />
              </div>
    
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="assets/img/clients/client-2.png" className="img-fluid" alt="" />
              </div>
    
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="assets/img/clients/client-3.png" className="img-fluid" alt="" />
              </div>
    
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="assets/img/clients/client-4.png" className="img-fluid" alt="" />
              </div>
    
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="assets/img/clients/client-5.png" className="img-fluid" alt="" />
              </div>
    
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="assets/img/clients/client-6.png" className="img-fluid" alt="" />
              </div>
    
            </div>
    
          </div>
        </section>
    
        
        <section id="services" className="services">
          <div className="container">
    
            <div className="row">
              <div className="col-md-6">
                <div className="icon-box">
                  <i className="bi bi-briefcase"></i>
                  <h4><Link to="#">Lorem Ipsum</Link></h4>
                  <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </div>
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <div className="icon-box">
                  <i className="bi bi-card-checklist"></i>
                  <h4><Link to="#">Dolor Sitema</Link></h4>
                  <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                </div>
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <div className="icon-box">
                  <i className="bi bi-bar-chart"></i>
                  <h4><Link to="#">Sed ut perspiciatis</Link></h4>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                </div>
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <div className="icon-box">
                  <i className="bi bi-binoculars"></i>
                  <h4><Link to="#">Nemo Enim</Link></h4>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <div className="icon-box">
                  <i className="bi bi-brightness-high"></i>
                  <h4><Link to="#">Magni Dolore</Link></h4>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                </div>
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <div className="icon-box">
                  <i className="bi bi-calendar4-week"></i>
                  <h4><Link to="#">Eiusmod Tempor</Link></h4>
                  <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                </div>
              </div>
            </div>
    
          </div>
        </section>
    
        
        <section id="portfolio" className="portfolio">
          <div className="container">
    
            <div className="row">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">All</li>
                  <li data-filter=".filter-app">App</li>
                  <li data-filter=".filter-card">Card</li>
                  <li data-filter=".filter-web">Web</li>
                </ul>
              </div>
            </div>
    
            <div className="row portfolio-container">
    
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>App 1</h4>
                    <p>App</p>
                    <div className="portfolio-links">
                      <Link to="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></Link>
                      <Link to="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Web 3</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <Link to="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></Link>
                      <Link to="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>App 2</h4>
                    <p>App</p>
                    <div className="portfolio-links">
                      <Link to="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></Link>
                      <Link to="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Card 2</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <Link to="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></Link>
                      <Link to="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Web 2</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <Link to="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus"></i></Link>
                      <Link to="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>App 3</h4>
                    <p>App</p>
                    <div className="portfolio-links">
                      <Link to="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></Link>
                      <Link to="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Card 1</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <Link to="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus"></i></Link>
                      <Link to="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Card 3</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <Link to="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus"></i></Link>
                      <Link to="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Web 3</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <Link to="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></Link>
                      <Link to="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
    
            </div>
    
          </div>
        </section>
    
      </main>
    
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
    
              <div className="col-lg-3 col-md-6">
                <div className="footer-info">
                  <h3>Sailor</h3>
                  <p>
                    A108 Adam Street <br />
                    NY 535022, USA<br /><br />
                    <strong>Phone:</strong> +1 5589 55488 55<br />
                    <strong>Email:</strong> info@example.com<br />
                  </p>
                  <div className="social-links mt-3">
                    <Link to="#" className="twitter"><i className="bx bxl-twitter"></i></Link>
                    <Link to="#" className="facebook"><i className="bx bxl-facebook"></i></Link>
                    <Link to="#" className="instagram"><i className="bx bxl-instagram"></i></Link>
                    <Link to="#" className="google-plus"><i className="bx bxl-skype"></i></Link>
                    <Link to="#" className="linkedin"><i className="bx bxl-linkedin"></i></Link>
                  </div>
                </div>
              </div>
    
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <Link to="#">Home</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link to="#">About us</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link to="#">Services</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link to="#">Terms of service</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link to="#">Privacy policy</Link></li>
                </ul>
              </div>
    
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <Link to="#">Web Design</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link to="#">Web Development</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link to="#">Product Management</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link to="#">Marketing</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link to="#">Graphic Design</Link></li>
                </ul>
              </div>
    
              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Our Newsletter</h4>
                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                <form action="" method="post">
                  <input type="email" name="email" /><input type="submit" value="Subscribe" />
                </form>
    
              </div>
    
            </div>
          </div>
        </div>
    
        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong><span>Sailor</span></strong>. All Rights Reserved
          </div>
          <div className="credits">          
            Designed by <Link to="https://bootstrapmade.com/">BootstrapMade</Link>
          </div>
        </div>
      </footer>
    </>    
  );
}

export default Home;
