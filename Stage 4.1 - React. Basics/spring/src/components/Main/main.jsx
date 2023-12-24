import "./main.scss"
import { useState } from "react"
import Projects from "./Projects/projects.jsx"
import MainHeader from "./MainHeader/mainHeader.jsx"
import { CardsData } from "../../api/db.js"

export default function Main(props){
    const [searchState,setSearchState] = useState("");
    const searchHandler=(searchState)=>{
        setSearchState(searchState);
    }
    const DataHandler=(data,search)=>{
        return data.filter(el=>{
            return  el.cardHeader.toLowerCase().includes(search.toLowerCase())
        })
    }
    return (
        <main className="main-projects">
            <MainHeader searchHandler={searchHandler}></MainHeader>
            <Projects cardsData={DataHandler(CardsData,searchState)} searchState={searchState}></Projects>
        </main>
    )
}