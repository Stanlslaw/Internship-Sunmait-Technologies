import crossIcon from "./icons/cross.svg"
import logo from "./icons/springio-ar21.svg"
import burgerIcon from "./icons/burger.svg"
import "./header-mobile.scss"
import "./mobile-menu.scss"
import MobileMenuItem from "./MobileMenutem/mobileMenuItem.jsx"
import { useState } from "react"

export default function HeaderMobile(props){
    const [IsOpen,setIsOpen] = useState(false);

    const MenuIsOpenHandler = ()=>{
        setIsOpen(!IsOpen);
    }
    return(
        <nav className="top-nav-mobile">
        <div className="nav-mobile-container">
            <a className="logo-container">
                <img alt="logo" src={logo}/>
            </a>
        </div>
        <div onClick={MenuIsOpenHandler} className="nav-burger-icon-container" id="open-mobile-menu">
            <img alt="burger-menu" src={burgerIcon}/>
        </div>
        {IsOpen
        &&
        <div className="mobile-menu">
            <div className="close-mobile-menu" id="close-mobile-menu">
                <img onClick={MenuIsOpenHandler} alt="close" src={crossIcon}/>
            </div>
            <div className="mobile-menu-container">
                {props.menuData.map((item,key)=>{
                    return <MobileMenuItem key={key} header={item.header} sub={item.sub}></MobileMenuItem>
                })}
            </div>
        </div>}
    </nav>  
    )
}