import "./header.scss"
import "./header-mobile.scss"
import { MenuData } from "../../api/db.js"

import HeaderDesktop from "./HeaderDesktop/headerDesktop.jsx"

export default function Header(props){

    return (
        <header className="header-container">
                <HeaderDesktop menuData={MenuData}></HeaderDesktop>
              <nav className="top-nav-mobile">
                <div className="nav-mobile-container">
                    <a className="logo-container">
                        <img alt="logo" src="./icons/springio-ar21.svg"/>
                    </a>
                </div>
                <div className="nav-burger-icon-container" id="open-mobile-menu">
                    <img alt="burger-menu" src="./icons/burger.svg"/>
                </div>
                <div className="mobile-menu" id="mobile-menu">
                    <div className="close-mobile-menu" id="close-mobile-menu">
                        <img alt="close" src="./icons/cross.svg"/>
                    </div>
                    <div className="mobile-menu-container">
                        <div className="mobile-menu-item">
                            <div className="menu-header-container">
                                <h2>Why Spring</h2>
                            </div>
                            <ul className="menu-body">
                                <li>dwdw</li>
                                <li>dwedw</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>  
        </header>
    )

}