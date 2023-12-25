import { useState } from "react"


export default function MobileMenuItem(props){
    const [IsOpen,setIsOpen] = useState(false);
    
    const MenuItemIsOpenHandler = ()=>{
        setIsOpen(!IsOpen);
    }
    return(
        <div className="mobile-menu-item">
            <div className="menu-header-container" onClick={MenuItemIsOpenHandler}>
                <h2 
                style={
                    IsOpen?
                    {"--arrow-rotate":"135deg"}
                    :
                    {"--arrow-rotate":"-45deg"}}>
                    {props.header}
                </h2>
            </div>
            <ul className="menu-body" 
            style={
                IsOpen
                ?
                {display:"block"}
                :
                {display:"none"}}>
                {props.sub.map(item=>{
                    return <li>{item}</li>
                })}
            </ul>
        </div>
    )
}