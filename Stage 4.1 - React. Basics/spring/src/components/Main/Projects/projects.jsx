import "./projects.scss"
import Card from "./Card/card.jsx"


export default function Projects(props){
    return (
        <section className="projects">
            <div className="projects-container">
                <div className="projects-list">
                {props.cardsData.length!==0
                ?
                    props.cardsData.map(data=>{
                        return <Card header={data.cardHeader} description={data.cardDescription} image={data.cardImage}/>
                    })
                :
                    <h2 style={{textAlign: "center",width:"100%",fontFamily:"'Open Sans',sans-serif"}}>No results</h2>
                }
                </div>
            </div>
         </section>
    )
}