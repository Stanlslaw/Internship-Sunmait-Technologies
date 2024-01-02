import React from "react"

export default function HeaderNavItem({header,sub}){
    return(
        <div className="header-nav-item">
        <span className="header-nav-item-link">
           {header}
        </span>
        <ul className="header-nav-item-dropdown">
          {sub.map((item,key)=>{
            return <li key={key}>{item}</li>
          })}
        </ul>
         </div>
    )
}