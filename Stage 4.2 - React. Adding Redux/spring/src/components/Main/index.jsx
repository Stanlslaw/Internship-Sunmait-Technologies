import React from "react"
import { useMemo, useState } from "react"

import { CardsData } from "../../api/db.js"
import MainHeader from "../MainHeader/index.jsx"
import Projects from "../Projects/index.jsx"

import "./main.scss"

export default function Main(){
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