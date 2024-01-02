import React from "react"

import { MenuData } from "../../api/db.js"
import HeaderDesktop from "../HeaderDesktop/index.jsx"
import HeaderMobile from "../HeaderMobile/index.jsx"

import "./header.scss"

export default function Header(){

    return (
        <header className="header-container">
                <HeaderDesktop menuData={MenuData}></HeaderDesktop>
                <HeaderMobile menuData={MenuData}></HeaderMobile>
        </header>
    )

}