import React from "react"

import "./searchProjectInput.scss"

export default function SearchProjectInput({searchHandler}){
    const projectNameHandler=(text)=>{
        searchHandler(text)
    }
    const debounce=(func, ms)=> {
        let timeout;
        return function() {
          clearTimeout(timeout);
          timeout = setTimeout(() => func.apply(this, arguments), ms);
        };
      }
    return (
        <div className="main-search-input-container">
            <input onChange={debounce((e)=>projectNameHandler(e.target.value),300)}  type="text" maxLength="24" className="main-header-search-input"  placeholder="Введите тему проекта"/> 
        </div>
    )
}