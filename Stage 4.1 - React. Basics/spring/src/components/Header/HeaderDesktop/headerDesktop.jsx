import logo from "./icons/springio-ar21.svg"
import themeSwithcerIcon from "./icons/theme-switcher-sun.svg"

import HeaderNavItem from "./HeaderNavItem/headerNavItem.jsx"
export default function HeaderDesktop(props){
    return (
        <nav className="top-nav">
            <div className="top-nav-container">
                <div className="header-logo">
                    <a className="header-logo-link">
                        <img alt="spring logo" src={logo}/>
                    </a>
                </div>
                <div className="header-nav-menu">
                    <div className="header-nav">
                        {props.menuData.map((item,key)=>{
                            return <HeaderNavItem key={key} header={item.header} sub={item.sub}></HeaderNavItem>
                        })}
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
    )
}