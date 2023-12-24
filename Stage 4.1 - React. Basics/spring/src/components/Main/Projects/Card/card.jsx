import "./card.scss"

export default function Card(props){

    return ( 
    <article className="project-card">
        <a className="card-container">
            <div className="card-image-container">
                 <img alt="car-logo" src={props.image}/>
            </div>
            <h1 className="card-h">
                {props.header}
            </h1>
            <p className="card-desc">
                {props.description}
            </p>
        </a>
    </article>)
}