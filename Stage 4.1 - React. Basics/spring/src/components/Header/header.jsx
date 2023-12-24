import "./header.scss"
import logo from "./icons/springio-ar21.svg"
import themeSwithcerIcon from "./icons/theme-switcher-sun.svg"
export default function Header(props){

    return (
        <header className="header-container">
              <nav className="top-nav">
              <div className="top-nav-container">
                    <div className="header-logo">
                        <a className="header-logo-link">
                           <img alt="spring logo" src={logo}/>
                        </a>
                    </div>
                    <div className="header-nav-menu">
                        <div className="header-nav">
                            <div className="header-nav-item">
                                <span className="header-nav-item-link">
                                    Why Spring
                                </span>
                                <ul className="header-nav-item-dropdown">
                                    <li>Overview</li>
                                    <li>Microservices</li>
                                    <li>Reactive</li>
                                    <li>Even Driven</li>
                                    <li>Cloud</li>
                                    <li>Web Applications</li>
                                    <li>Serverless</li>
                                    <li>Batch</li>
                                </ul>
                            </div>
                            <div className="header-nav-item">
                                <span className="header-item-link">
                                    Learn
                                </span>
                                <ul className="header-nav-item-dropdown">
                                    <li>Overview</li>
                                    <li>Quickstart</li>
                                    <li>Guides</li>
                                    <li>Blog</li>
                                </ul>
                            </div>
                            <div className="header-nav-item">
                                <span className="header-item-link">
                                    Projects
                                </span>
                                <ul className="header-nav-item-dropdown">
                                    <li>Overview</li>
                                    <li>Spring Boot</li>
                                    <li>Spring Framework</li>
                                    <li>Spring Cloud</li>
                                    <li>Spring Cloud Data Flow</li>
                                    <li>Spring Data</li>
                                    <li>Spring Integration</li>
                                    <li>Spring Batch</li>
                                    <li>Spring Security</li>
                                    <li>View all projects</li>
                                    <li></li>
                                    <li>DEVELOPMENT TOOLS</li>
                                    <li>Spring Tools 4</li>
                                    <li>Spring intializr</li>
                                </ul>
                            </div>
                            <div className="header-nav-item">
                                <span className="header-item-link">
                                    Academy
                                </span>
                                <ul className="header-nav-item-dropdown">
                                    <li>Courses</li>
                                    <li>Get Certified</li>
                                </ul>
                            </div>
                            <div className="header-nav-item">
                                <span className="header-item-link">
                                    Solutions
                                </span>
                                <ul className="header-nav-item-dropdown">
                                    <li>Overview</li>
                                    <li>Spring Runtime</li>
                                    <li>Spring Consulting</li>
                                    <li>Spring Academy For Teams</li>
                                    <li>Spring Advisories</li>
                                </ul>
                            </div>
                            <div className="header-nav-item">
                                <span className="header-item-link">
                                    Community
                                </span>
                                <ul className="header-nav-item-dropdown">
                                    <li>Overview</li>
                                    <li>Events</li>
                                    <li>Team</li>
                                </ul>
                            </div>
                        </div>
                        <div className="theme-switcher">
                            <label className="theme-switcher-container">
                                <input className="theme-switcher-handle" type="checkbox"/>
                                <span className="theme-switcher-image-circle">
                                    <img className="theme-switcher-image"  alt="theme switcher icon" src={themeSwithcerIcon}/>
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
              </nav>
        </header>
    )

}