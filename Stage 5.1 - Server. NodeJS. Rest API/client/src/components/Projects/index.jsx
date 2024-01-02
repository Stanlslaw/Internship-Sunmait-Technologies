import React from "react"

import Card from "../Card/index.jsx"

import "./projects.scss"


export default function Projects({cardsData}){
    return (
        <section className="projects">
            <div className="projects-container">
                <div className="projects-list">
                {cardsData.length!==0
                ?
                    cardsData.map((data,key)=>{
                        return <Card key={key} header={data.cardHeader} description={data.cardDescription} image={data.cardImage}/>
                    })
                :
                    <h2 style={{textAlign: "center",width:"100%",fontFamily:"'Open Sans',sans-serif"}}>No results</h2>
                }
                </div>
            </div>
         </section>
    )
}