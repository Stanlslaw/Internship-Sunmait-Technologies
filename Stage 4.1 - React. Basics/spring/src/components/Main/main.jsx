import "./main.scss"
import { useMemo, useState } from "react"
import Projects from "./Projects/projects.jsx"
import MainHeader from "./MainHeader/mainHeader.jsx"
import { CardsData } from "../../api/db.js"

export default function Main(props){
    const [searchState,setSearchState] = useState("");
    const DataHandler=(data,search)=>{
        return data.filter(el=>{
            return  el.cardHeader.toLowerCase().includes(search.toLowerCase())
        })
    }
    const filteredCardsData=useMemo(()=>{
        return  DataHandler(CardsData,searchState)
    },[searchState,CardsData])
    const searchHandler=(searchState)=>{
        setSearchState(searchState);
    }
   
    return (
        <main className="main-projects">
            <MainHeader searchHandler={searchHandler}></MainHeader>
            <Projects cardsData={filteredCardsData} searchState={searchState}></Projects>
        </main>
    )
}