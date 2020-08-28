import React, { Component } from 'react';
import './homepage.css';

export class HomePage extends Component {
  render() {
    return (
      <div>
        {/* Wrapper */}
        <div id="wrapper" className="bg-white">
          <header className="header header-horizontal header bg-grey uk-light">
            <div className="container">
              <nav uk-navbar className="uk-navbar">
                <div className="uk-navbar-left">
                  <span className="mmenu-trigger">
                    <button
                      className="hamburger hamburger--collapse"
                      type="button"
                    >
                      <span className="hamburger-box">
                        <span className="hamburger-inner" />
                      </span>
                    </button>
                  </span>
                  <a href="dashboard.html" className="logo">
                    <img
                      src="http://demo.foxthemes.net/courseplusv3.3/assets/images/logo-dark.svg"
                      alt=""
                    />
                    <span> Courseplus</span>
                  </a>
                  <nav id="navigation">
                    <ul id="responsive">
                      <li>
                        <a href="#">Home</a>{' '}
                      </li>
                      <li>
                        <a href="#">Explore</a>
                        <ul className="dropdown-nav nav-large nav-courses">
                          <li>
                            <a href="course-card.html#">
                              <i
                                className="icon-brand-js-square"
                                style={{ color: '#f7df1e' }}
                              />{' '}
                              JavaScript
                            </a>
                          </li>
                          <li>
                            <a href="course-card.html">
                              <i
                                className="icon-brand-node-js"
                                style={{ color: 'green' }}
                              />{' '}
                              NodeJS{' '}
                            </a>
                          </li>
                          <li>
                            <a href="course-card.html">
                              <i
                                className="icon-brand-angular"
                                style={{ color: '#dd0031' }}
                              />{' '}
                              Angular{' '}
                            </a>
                          </li>
                          <li>
                            <a href="course-card.html">
                              <i
                                className="icon-brand-css3-alt"
                                style={{ color: 'blue' }}
                              />{' '}
                              CSS{' '}
                            </a>
                          </li>
                          <li>
                            <a href="course-card.html">
                              <i
                                className="icon-brand-html5"
                                style={{ color: '#f0653f' }}
                              />{' '}
                              HTML5{' '}
                            </a>
                          </li>
                          <li>
                            <a href="course-card.html">
                              <i
                                className="icon-brand-react"
                                style={{ color: '#67fcef' }}
                              />{' '}
                              React{' '}
                            </a>
                          </li>
                          <li>
                            <a href="course-card.html">
                              <i
                                className="icon-brand-vuejs"
                                style={{ color: 'green' }}
                              />{' '}
                              Vue JS{' '}
                            </a>
                          </li>
                          <li>
                            <a href="course-card.html">
                              <i
                                className="icon-brand-python"
                                style={{ color: '#b1b172' }}
                              />{' '}
                              Python{' '}
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="course-path.html" className="nav-active">
                          Track
                        </a>{' '}
                      </li>
                      <li>
                        <a href="book.html">Book</a>{' '}
                      </li>
                      <li>
                        <a href="blog-1.html">Blog</a>{' '}
                      </li>
                      <li>
                        <a href="#">Pages</a>
                        <ul className="dropdown-nav">
                          <li>
                            <a href="page-pricing.html">Pricing</a>{' '}
                          </li>
                          <li>
                            <a href="page-Privacy.html">Privacy</a>
                          </li>
                          <li>
                            <a href="page-term.html">Terms</a>
                          </li>
                          <li>
                            <a href="page-contact.html">Contact</a>
                          </li>
                          <li>
                            <a href="#">Account</a>
                            <ul className="dropdown-nav">
                              <li>
                                <a href="page-login.html">login</a>
                              </li>
                              <li>
                                <a href="page-register.html">register</a>
                              </li>
                              <li>
                                <a href="page-simple-login.html">
                                  Simple login
                                </a>
                              </li>
                              <li>
                                <a href="page-simple-register.html">
                                  Simple register
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Development</a>
                            <ul className="dropdown-nav">
                              <li>
                                <a href="page-elements.html">Elements</a>
                              </li>
                              <li>
                                <a href="page-components.html">Components</a>
                              </li>
                              <li>
                                <a href="page-icons.html">Icons</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                  {/* Main Navigation / End */}
                </div>
                <div className="uk-navbar-right">
                  <div className="header-widget">
                    <div className="searchbox uk-visible@s">
                      <input
                        className="uk-search-input"
                        type="search"
                        placeholder="Search..."
                      />
                      <button className="btn-searchbox"> </button>
                    </div>
                    <div
                      uk-dropdown="pos: top;mode:click;animation: uk-animation-slide-bottom-small"
                      className="dropdown-search"
                    >
                      <div
                        className="erh BR9 MIw"
                        style={{
                          top: '-27px',
                          position: 'absolute',
                          left: '24px',
                          fill: 'currentColor',
                          height: '24px',
                          pointerEvents: 'none',
                          color: '#f5f5f5',
                        }}
                      >
                        <svg width={22} height={22}>
                          <path d="M0 24 L12 12 L24 24" />
                        </svg>
                      </div>
                      <ul className="dropdown-search-list">
                        <li className="list-title">Recent Searches</li>
                        <li>
                          <a href="course-intro.html">
                            Ultimate Web Designer And Developer Course
                          </a>
                        </li>
                        <li>
                          <a href="course-intro.html">
                            The Complete Ruby on Rails Developer Course{' '}
                          </a>
                        </li>
                        <li>
                          <a href="course-intro.html">
                            Bootstrap 4 From Scratch With 5 Real Projects{' '}
                          </a>
                        </li>
                        <li>
                          {' '}
                          <a href="course-intro.html">
                            The Complete 2020 Web Development Bootcamp{' '}
                          </a>
                        </li>
                        <li className="menu-divider"></li>
                        <li>
                          <a href="course-intro.html">
                            Bootstrap 4 From Scratch With 5 Real Projects{' '}
                          </a>
                        </li>
                        <li>
                          {' '}
                          <a href="course-intro.html">
                            The Complete 2020 Web Development Bootcamp{' '}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <span
                      className="icon-feather-x icon-small uk-hidden@s"
                      uk-toggle="target: .header-widget ; cls: is-active"
                    >
                      {' '}
                    </span>
                    <a
                      href="#"
                      className="header-widget-icon"
                      uk-tooltip="title: My Courses ; pos: bottom ;offset:21"
                    >
                      <i className="uil-youtube-alt" />
                    </a>
                    <div
                      uk-dropdown="pos: top;mode:click;animation: uk-animation-slide-bottom-small"
                      className="dropdown-notifications my-courses-dropdown"
                    >
                      <div className="dropdown-notifications-headline">
                        <h4>Your Courses</h4>
                        <a href="#">
                          <i
                            className="icon-feather-settings"
                            uk-tooltip="title: Notifications settings ; pos: left"
                          />
                        </a>
                      </div>
                      <div
                        className="dropdown-notifications-content"
                        data-simplebar
                      >
                        <ul>
                          <li className="notifications-not-read">
                            <a href="course-intro.html">
                              <span className="notification-image">
                                <img
                                  src="../assets/images/course/1.png"
                                  alt=""
                                />{' '}
                              </span>
                              <span className="notification-text">
                                <span className="course-title">
                                  Ultimate Web Designer &amp; Web Developer
                                </span>
                                <span className="course-number">6/35 </span>
                                <span className="course-progressbar">
                                  <span
                                    className="course-progressbar-filler"
                                    style={{ width: '95%' }}
                                  />
                                </span>
                              </span>
                              <span className="btn-option">
                                <i className="icon-feather-more-vertical" />
                              </span>
                              <div
                                className="dropdown-option-nav"
                                uk-dropdown="pos: bottom-right ;mode : hover"
                              >
                                <ul>
                                  <li>
                                    <span>
                                      <i className="icon-material-outline-dashboard" />
                                      Course Dashboard
                                    </span>
                                  </li>
                                  <li>
                                    <span>
                                      <i className="icon-feather-video" />
                                      Resume Course
                                    </span>
                                  </li>
                                  <li>
                                    <span>
                                      <i className="icon-feather-x" />
                                      Remove Course
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="course-intro.html">
                              <span className="notification-image">
                                <img
                                  src="../assets/images/course/3.png"
                                  alt=""
                                />{' '}
                              </span>
                              <span className="notification-text">
                                <span className="course-title">
                                  The Complete JavaScript Course Build Real
                                  Projects !
                                </span>
                                <span className="course-number">6/35 </span>
                                <span className="course-progressbar">
                                  <span
                                    className="course-progressbar-filler"
                                    style={{ width: '95%' }}
                                  />
                                </span>
                              </span>
                              {/* option menu */}
                              <span className="btn-option">
                                <i className="icon-feather-more-vertical" />
                              </span>
                              <div
                                className="dropdown-option-nav"
                                uk-dropdown="pos: bottom-right ;mode : hover"
                              >
                                <ul>
                                  <li>
                                    <span>
                                      <i className="icon-material-outline-dashboard" />
                                      Course Dashboard
                                    </span>
                                  </li>
                                  <li>
                                    <span>
                                      <i className="icon-feather-video" />
                                      Resume Course
                                    </span>
                                  </li>
                                  <li>
                                    <span>
                                      <i className="icon-feather-x" />
                                      Remove Course
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="course-intro.html">
                              <span className="notification-image">
                                <img
                                  src="../assets/images/course/2.png"
                                  alt=""
                                />{' '}
                              </span>
                              <span className="notification-text">
                                <span className="course-title">
                                  Learn Angular Fundamentals From The Beginning
                                </span>
                                <span className="course-number">6/35 </span>
                                <span className="course-progressbar">
                                  <span
                                    className="course-progressbar-filler"
                                    style={{ width: '95%' }}
                                  />
                                </span>
                              </span>
                              <span className="btn-option">
                                <i className="icon-feather-more-vertical" />
                              </span>
                              <div
                                className="dropdown-option-nav"
                                uk-dropdown="pos: bottom-right ;mode : hover"
                              >
                                <ul>
                                  <li>
                                    <span>
                                      <i className="icon-material-outline-dashboard" />
                                      Course Dashboard
                                    </span>
                                  </li>
                                  <li>
                                    <span>
                                      <i className="icon-feather-video" />
                                      Resume Course
                                    </span>
                                  </li>
                                  <li>
                                    <span>
                                      <i className="icon-feather-x" />
                                      Remove Course
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="course-intro.html">
                              <span className="notification-image">
                                <img
                                  src="../assets/images/course/1.png"
                                  alt=""
                                />{' '}
                              </span>
                              <span className="notification-text">
                                <span className="course-title">
                                  Ultimate Web Designer &amp; Web Developer
                                </span>
                                <span className="course-number">6/35 </span>
                                <span className="course-progressbar">
                                  <span
                                    className="course-progressbar-filler"
                                    style={{ width: '95%' }}
                                  />
                                </span>
                              </span>
                              <span className="btn-option">
                                <i className="icon-feather-more-vertical" />
                              </span>
                              <div
                                className="dropdown-option-nav"
                                uk-dropdown="pos: top-right ;mode : hover"
                              >
                                <ul>
                                  <li>
                                    <span>
                                      <i className="icon-material-outline-dashboard" />
                                      Course Dashboard
                                    </span>
                                  </li>
                                  <li>
                                    <span>
                                      <i className="icon-feather-video" />
                                      Resume Course
                                    </span>
                                  </li>
                                  <li>
                                    <span>
                                      <i className="icon-feather-x" />
                                      Remove Course
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="dropdown-notifications-footer">
                        <a href="#"> sell all</a>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="header-widget-icon"
                      uk-tooltip="title: Notificiation ; pos: bottom ;offset:21"
                    >
                      <i className="uil-bell" />
                      <span>4</span>
                    </a>
                    <div
                      uk-dropdown="pos: top-right;mode:click ; animation: uk-animation-slide-bottom-small"
                      className="dropdown-notifications"
                    >
                      <div className="dropdown-notifications-headline">
                        <h4>Notifications </h4>
                        <a href="#">
                          <i
                            className="icon-feather-settings"
                            uk-tooltip="title: Notifications settings ; pos: left"
                          />
                        </a>
                      </div>
                      <div
                        className="dropdown-notifications-content"
                        data-simplebar
                      >
                        <ul>
                          <li className="notifications-not-read">
                            <a href="#">
                              <span className="notification-icon btn btn-soft-danger disabled">
                                <i className="icon-feather-thumbs-up" />
                              </span>
                              <span className="notification-text">
                                <strong>Adrian Mohani</strong> Like Your Comment
                                On Course
                                <span className="text-primary">
                                  Javascript Introduction{' '}
                                </span>
                                <br />{' '}
                                <span className="time-ago"> 9 hours ago </span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="notification-icon btn btn-soft-primary disabled">
                                <i className="icon-feather-message-circle" />
                              </span>
                              <span className="notification-text">
                                <strong>Stella Johnson</strong> Replay Your
                                Comments in
                                <span className="text-primary">
                                  Programming for Games
                                </span>
                                <br />{' '}
                                <span className="time-ago"> 12 hours ago </span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="notification-icon btn btn-soft-success disabled">
                                <i className="icon-feather-star" />
                              </span>
                              <span className="notification-text">
                                <strong>Alex Dolgove</strong> Added New Review
                                In Course
                                <span className="text-primary">
                                  Full Stack PHP Developer
                                </span>
                                <br />{' '}
                                <span className="time-ago"> 19 hours ago </span>
                              </span>
                            </a>
                          </li>
                          <li className="notifications-not-read">
                            <a href="#">
                              <span className="notification-icon btn btn-soft-danger disabled">
                                <i className="icon-feather-share-2" />
                              </span>
                              <span className="notification-text">
                                <strong>Jonathan Madano</strong> Shared Your
                                Discussion On Course
                                <span className="text-primary">
                                  Css Flex Box{' '}
                                </span>
                                <br />{' '}
                                <span className="time-ago"> Yesterday </span>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="header-widget-icon"
                      uk-tooltip="title: Message ; pos: bottom ;offset:21"
                    >
                      <i className="uil-envelope-alt" />
                      <span>1</span>
                    </a>
                    <div
                      uk-dropdown=" pos: top-right;mode:click"
                      className="dropdown-notifications"
                    >
                      <div className="dropdown-notifications-headline">
                        <h4>Messages</h4>
                        <a href="#">
                          <i
                            className="icon-feather-settings"
                            uk-tooltip="title: Message settings ; pos: left"
                          />
                        </a>
                      </div>
                      <div
                        className="dropdown-notifications-content"
                        data-simplebar
                      >
                        <ul>
                          <li className="notifications-not-read">
                            <a href="#">
                              <span className="notification-avatar">
                                <img
                                  src="../assets/images/avatars/avatar-2.jpg"
                                  alt=""
                                />
                              </span>
                              <div className="notification-text notification-msg-text">
                                <strong>Jonathan Madano</strong>
                                <p>
                                  Okay.. Thanks for The Answer I will be waiting
                                  for your...
                                </p>
                                <span className="time-ago"> 2 hours ago </span>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="notification-avatar">
                                <img
                                  src="../assets/images/avatars/avatar-3.jpg"
                                  alt=""
                                />
                              </span>
                              <div className="notification-text notification-msg-text">
                                <strong>Stella Johnson</strong>
                                <p>
                                  {' '}
                                  Alex will explain you how to keep the HTML
                                  structure and all that...
                                </p>
                                <span className="time-ago"> 7 hours ago </span>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="notification-avatar">
                                <img
                                  src="../assets/images/avatars/avatar-1.jpg"
                                  alt=""
                                />
                              </span>
                              <div className="notification-text notification-msg-text">
                                <strong>Alex Dolgove</strong>
                                <p>
                                  {' '}
                                  Alia Joseph just joined Messenger! Be the
                                  first to send a welcome message..
                                </p>
                                <span className="time-ago"> 19 hours ago </span>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="notification-avatar">
                                <img
                                  src="../assets/images/avatars/avatar-4.jpg"
                                  alt=""
                                />
                              </span>
                              <div className="notification-text notification-msg-text">
                                <strong>Adrian Mohani</strong>
                                <p>
                                  {' '}
                                  Okay.. Thanks for The Answer I will be waiting
                                  for your...
                                </p>
                                <span className="time-ago"> Yesterday </span>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="dropdown-notifications-footer">
                        <a href="#">
                          {' '}
                          sell all{' '}
                          <i className="icon-line-awesome-long-arrow-right" />{' '}
                        </a>
                      </div>
                    </div>
                    <a href="#" className="header-widget-icon profile-icon">
                      <img
                        src="../assets/images/avatars/avatar-2.jpg"
                        alt=""
                        className="header-profile-icon"
                      />
                    </a>
                    <div
                      uk-dropdown="pos: top-right ;mode:click"
                      className="dropdown-notifications small"
                    >
                      <a href="profile-1.html">
                        <div className="dropdown-user-details">
                          <div className="dropdown-user-avatar">
                            <img
                              src="../assets/images/avatars/avatar-2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="dropdown-user-name">
                            Richard Ali <span>Students</span>
                          </div>
                        </div>
                      </a>
                      <ul className="dropdown-user-menu">
                        <li>
                          <a href="#">
                            <i className="icon-material-outline-dashboard" />{' '}
                            Dashboard
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon-feather-bookmark" /> Bookmark{' '}
                          </a>
                        </li>
                        <li>
                          <a href="profile-edit.html">
                            <i className="icon-feather-settings" /> Account
                            Settings
                          </a>
                        </li>
                        <li>
                          <a href="#" style={{ color: '#62d76b' }}>
                            <i className="icon-feather-star" /> Upgrade To
                            Premium
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            id="night-mode"
                            className="btn-night-mode"
                          >
                            <i className="icon-feather-moon" /> Night mode
                            <span className="btn-night-mode-switch">
                              <span className="uk-switch-button" />
                            </span>
                          </a>
                        </li>
                        <li className="menu-divider"></li>
                        <li>
                          <a href="#">
                            <i className="icon-feather-help-circle" /> Help
                          </a>
                        </li>
                        <li>
                          <a href="page-login.html">
                            <i className="icon-feather-log-out" /> Sing Out
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <a
                    className="uk-navbar-toggle uk-hidden@s"
                    uk-toggle="target: .nav-overlay; animation: uk-animation-fade"
                    href="#"
                  >
                    <i className="uil-search icon-small" />
                  </a>
                  <a
                    href="#"
                    className="uil-user icon-small uk-hidden@s"
                    uk-toggle="target: .header-widget ; cls: is-active"
                  ></a>
                </div>
              </nav>
            </div>
          </header>
          {/* overlay seach on mobile*/}
          <div
            className="nav-overlay uk-navbar-left uk-position-relative uk-flex-1 bg-grey uk-light p-2"
            hidden
            style={{ zIndex: 10000 }}
          >
            <div
              className="uk-navbar-item uk-width-expand"
              style={{ minHeight: '60px' }}
            >
              <form className="uk-search uk-search-navbar uk-width-1-1">
                <input
                  className="uk-search-input"
                  type="search"
                  placeholder="Search..."
                  autofocus
                />
              </form>
            </div>
            <a
              className="uk-navbar-toggle"
              uk-close
              uk-toggle="target: .nav-overlay; animation: uk-animation-fade"
              href="#"
            />
          </div>
          <div className="page-content">
            <div
              className="home-hero"
              data-src="../assets/images/home-hero.png"
              uk-img
            >
              <div className="uk-width-1-1" style={{ textAlign: 'initial' }}>
                <div className="page-content-inner uk-position-z-index">
                  <h1>
                    Learn HTML , CSS , iphone <br /> Apps &amp; More
                  </h1>
                  <h4 className="my-lg-4">
                    {' '}
                    Learn how to build websites &amp; apps <br /> write a code
                    or start a business
                  </h4>
                  <a href="#" className="btn btn-default">
                    Free trailer{' '}
                  </a>
                </div>
              </div>
            </div>
        
            <div className="section">
              <div className="page-content-inner">
                <div className="section-small text-md-left text-center">
                  <div className="uk-child-width-1-2@m uk-gird-large uk-flex-middle uk-grid">
                    <div className="uk-first-column">
                      <img src="./assets/images/feature.png" alt="" />
                    </div>
                    <div>
                      <h2>
                        Learn to code anytime <br /> and everywhere{' '}
                      </h2>
                      <p>
                        {' '}
                        Get started with just your name and your email adress .
                        It’s as simple <br /> as that -- no payments or credit
                        card information required.{' '}
                      </p>
                      <a href="#" className="btn btn-soft-light">
                        {' '}
                        Get started{' '}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="section-small delimiter-top">
              <div className="container-small">
                <div className="text-center mb-5">
                  <h3> Check out our newest </h3>
                  <h5>
                    {' '}
                    With our growing catalog of over 30 Nanodegree programs from
                    beginner to advanced
                  </h5>
                </div>
                <div
                  className="course-grid-slider mt-lg-5"
                  uk-slider="finite: true"
                >
                  <div className="uk-slider-container pb-3">
                    <ul className="uk-slider-items uk-child-width-1-2@s uk-child-width-1-3@m uk-grid">
                      <li>
                        <a href="course-intro.html">
                          <div className="course-card">
                            <div className="course-card-thumbnail ">
                              <img src="../assets/images/course/2.png" />
                              <span className="play-button-trigger" />
                            </div>
                            <div className="course-card-body">
                              <div className="course-card-info">
                                <div>
                                  <span className="catagroy">Angular</span>
                                </div>
                                <div>
                                  <i className="icon-feather-bookmark icon-small" />
                                </div>
                              </div>
                              <h4>Learn Angular Fundamentals </h4>
                              <p>
                                {' '}
                                Learn how to build and launch React web
                                applications using ..{' '}
                              </p>
                              <div className="course-card-footer">
                                <h5>
                                  {' '}
                                  <i className="icon-feather-film" /> 12
                                  Lectures{' '}
                                </h5>
                                <h5>
                                  {' '}
                                  <i className="icon-feather-clock" /> 64 Hours{' '}
                                </h5>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="course-intro.html">
                          <div className="course-card">
                            <div className="course-card-thumbnail ">
                              <img src="../assets/images/course/3.png" />
                              <span className="play-button-trigger" />
                            </div>
                            <div className="course-card-body">
                              <div className="course-card-info">
                                <div>
                                  <span className="catagroy">JavaScript</span>
                                </div>
                                <div>
                                  <i className="icon-feather-bookmark icon-small" />
                                </div>
                              </div>
                              <h4>The Complete JavaScript </h4>
                              <p>
                                {' '}
                                JavaScript is how you build interactivity on the
                                web page...{' '}
                              </p>
                              <div className="course-card-footer">
                                <h5>
                                  {' '}
                                  <i className="icon-feather-film" /> 14
                                  Lectures{' '}
                                </h5>
                                <h5>
                                  {' '}
                                  <i className="icon-feather-clock" /> 55 Hours{' '}
                                </h5>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="course-intro.html">
                          <div className="course-card">
                            <div className="course-card-thumbnail ">
                              <img src="../assets/images/course/1.png" />
                              <span className="play-button-trigger" />
                            </div>
                            <div className="course-card-body">
                              <div className="course-card-info">
                                <div>
                                  <span className="catagroy">HTML</span>
                                </div>
                                <div>
                                  <i className="icon-feather-bookmark icon-small" />
                                </div>
                              </div>
                              <h4>Ultimate Web Developer Course </h4>
                              <p>
                                {' '}
                                HTML is the building blocks of the web. It gives
                                pages structure ..
                              </p>
                              <div className="course-card-footer">
                                <h5>
                                  {' '}
                                  <i className="icon-feather-film" /> 33
                                  Lectures{' '}
                                </h5>
                                <h5>
                                  {' '}
                                  <i className="icon-feather-clock" /> 26 Hours{' '}
                                </h5>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="course-intro.html">
                          <div className="course-card">
                            <div className="course-card-thumbnail ">
                              <img src="../assets/images/course/5.png" />
                              <span className="play-button-trigger" />
                            </div>
                            <div className="course-card-body">
                              <div className="course-card-info">
                                <div>
                                  <span className="catagroy">HTML</span>
                                </div>
                                <div>
                                  <i className="icon-feather-bookmark icon-small" />
                                </div>
                              </div>
                              <h4>Ultimate Web Developer Course </h4>
                              <p>
                                {' '}
                                HTML is the building blocks of the web. It gives
                                pages structure ..
                              </p>
                              <div className="course-card-footer">
                                <h5>
                                  {' '}
                                  <i className="icon-feather-film" /> 34
                                  Lectures{' '}
                                </h5>
                                <h5>
                                  {' '}
                                  <i className="icon-feather-clock" /> 54 Hours{' '}
                                </h5>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                    <a
                      className="uk-position-center-left uk-position-small uk-hidden-hover slidenav-prev"
                      href="#"
                      uk-slider-item="previous"
                    />
                    <a
                      className="uk-position-center-right uk-position-small uk-hidden-hover slidenav-next"
                      href="#"
                      uk-slider-item="next"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <a
                    href="#"
                    className="btn btn-soft-light btn-small btn-circle"
                  >
                    {' '}
                    View More Courses
                  </a>
                </div>
              </div>
            </div> */}

            <div className="section bg-white">
              <div className="container-small">
                <h2 className="text-center my-lg-6">
                  {' '}
                  Try Courseplus free for 14 days{' '}
                </h2>
                <form
                  className="uk-grid-small d-flex align-items-end uk-grid"
                  uk-grid
                >
                  <div className="uk-width-1-3@s">
                    <div className="uk-form-label">Email </div>
                    <input
                      className="uk-input"
                      type="text"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="uk-width-1-3@s">
                    <div className="uk-form-label">Password </div>
                    <input
                      className="uk-input"
                      type="password"
                      placeholder="******"
                    />
                  </div>
                  <div className="uk-width-1-3@s">
                    <button className="btn  btn-light btn-lg">
                      {' '}
                      Start free trailer{' '}
                    </button>
                  </div>
                  <div className="uk-width-1-1@s uk-grid-margin uk-first-column">
                    <label>
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          id="customCheck1"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck1"
                        >
                          <span className="checkmark uk-text-small">
                            {' '}
                            I agree to the{' '}
                          </span>
                          <a
                            href="pages-terms.html"
                            target="_blank"
                            className="uk-text-bold uk-text-small uk-link-reset"
                          >
                            Terms and Conditions{' '}
                          </a>
                        </label>
                      </div>
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* footer
        ================================================== */}
          <div className="footer">
            <div className="container">
              <div className="uk-grid">
                <div className="uk-width-1-3@m">
                  <a href="home.html" className="uk-logo">
                    {/* logo icon */}
                    <i className="uil-graduation-hat"> </i>
                    Courseplus
                  </a>
                  <p className="footer-description">
                    {' '}
                    Launch your site in style with Courseplus, Create rich
                    layouts A unique and beautiful collection of UI elements
                    that are all flexible and modular.
                  </p>
                </div>
                <div className="uk-width-expand@s uk-width-1-2">
                  <div className="footer-links pl-lg-8">
                    <h5>Explore </h5>
                    <ul>
                      <li>
                        <a href="course-card.html"> Courses </a>
                      </li>
                      <li>
                        <a href="course-path.html"> Track </a>
                      </li>
                      <li>
                        <a href="blog-card.html"> Blog </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="uk-width-expand@s uk-width-1-2">
                  <div className="footer-links pl-lg-8">
                    <h5> Account </h5>
                    <ul>
                      <li>
                        <a href="profile-1.html"> Profile </a>
                      </li>
                      <li>
                        <a href="#"> Settings </a>
                      </li>
                      <li>
                        <a href="#"> Projects </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="uk-width-expand@s uk-width-1-2">
                  <div className="footer-links pl-lg-8">
                    <h5> Resources</h5>
                    <ul>
                      <li>
                        <a href="#"> Contact </a>
                      </li>
                      <li>
                        <a href="page-Privacy.html"> Privacy Policy </a>
                      </li>
                      <li>
                        <a href="page-term.html"> Terms of Use </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <hr />
              <div className="uk-grid-collapse" uk-grid>
                <div className="uk-width-expand@s uk-first-column">
                  <p>
                    © 2020 <strong>Courseplus</strong>. All Rights Reserved.{' '}
                  </p>
                </div>
                <div className="uk-width-auto@s">
                  <nav className="footer-nav-icon">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="icon-brand-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-brand-dribbble" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-brand-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-brand-twitter" />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
