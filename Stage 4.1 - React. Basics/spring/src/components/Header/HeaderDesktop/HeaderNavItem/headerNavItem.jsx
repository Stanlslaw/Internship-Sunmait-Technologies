

export default function HeaderNavItem(props){
    return(
        <div className="header-nav-item">
        <span className="header-nav-item-link">
           {props.header}
        </span>
        <ul className="header-nav-item-dropdown">
          {props.sub.map((item,key)=>{
            return <li key={key}>{item}</li>
          })}
        </ul>
         </div>
    )
}