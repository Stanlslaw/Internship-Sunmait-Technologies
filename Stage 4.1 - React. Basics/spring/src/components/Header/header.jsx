import "./header.scss"

import { MenuData } from "../../api/db.js"

import HeaderDesktop from "./HeaderDesktop/headerDesktop.jsx"
import HeaderMobile from "./HeaderMobile/headerMobile.jsx"

export default function Header(props){

    return (
        <header className="header-container">
                <HeaderDesktop menuData={MenuData}></HeaderDesktop>
                <HeaderMobile menuData={MenuData}></HeaderMobile>
        </header>
    )

}