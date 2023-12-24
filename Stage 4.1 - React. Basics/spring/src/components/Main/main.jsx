import "./main.scss"
import Card from "./Card/card.jsx"
import { CardsData } from "../../api/db"

export default function Main(props){
    return (
        <main className="main-projects">
            <header className="main-header">
                <div className="main-header-container">
                    <h1 className="main-header-h">
                        Projects
                    </h1>
                    <p className="main-header-desc">
                        From configuration to security, web apps to big
                        data—whatever the infrastructure needs of 
                        your application may be, there is a Spring Project 
                        to help you build it. Start small and 
                        use just what you need—Spring is modular by design.
                    </p>
                    <div className="main-search-input-container">
                        <input type="text" maxlength="24" className="main-header-search-input" id="search-projects-cards" placeholder="Введите тему проекта"/> 
                    </div>

                </div>
            </header>
            <section className="projects">
                <div className="projects-container">
                    <div className="projects-list">
                        {CardsData.map(data=>{
                            return <Card header={data.cardHeader} description={data.cardDescription} image={data.cardImage}/>
                        })}
                    </div>
                </div>
            </section>
        </main>
    )
}