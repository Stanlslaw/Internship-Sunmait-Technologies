import React from "react"
import { useMemo, useState } from "react"

import burgerIcon from "../../assets/icons//burger.svg"
import crossIcon from "../../assets/icons/cross.svg"
import logo from "../../assets/icons/springio-ar21.svg"
import MobileMenuItem from "../MobileMenutem/index.jsx"

import "./header-mobile.scss"
import "./mobile-menu.scss"

export default function HeaderMobile({menuData}){
    const [IsOpen,setIsOpen] = useState(false);
    const menuItems = useMemo(()=>{
        return menuData.map((item,key)=>{
            return <MobileMenuItem key={key} header={item.header} sub={item.sub}></MobileMenuItem>
        })
    },[menuData])
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
                {menuItems}
            </div>
        </div>}
    </nav>  
    )
}