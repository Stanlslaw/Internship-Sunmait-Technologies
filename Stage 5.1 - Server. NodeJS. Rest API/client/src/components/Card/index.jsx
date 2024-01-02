import React from "react"

import "./card.scss"
export default function Card({header,description,image}){

    return ( 
    <article className="project-card">
        <a className="card-container">
            <div className="card-image-container">
                 <img alt="car-logo" src={image}/>
            </div>
            <h1 className="card-h">
                {header}
            </h1>
            <p className="card-desc">
                {description}
            </p>
        </a>
    </article>)
}