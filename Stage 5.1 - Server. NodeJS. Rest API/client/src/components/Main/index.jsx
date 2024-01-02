import React from "react";
import { useState } from "react";

import { useGetProjectsListQuery } from "../../redux/slices/projects.query.js";
import Loader from "../Loader/index.jsx";
import MainHeader from "../MainHeader/index.jsx";
import Projects from "../Projects/index.jsx";

import "./main.scss";

export default function Main() {
  const [searchState, setSearchState] = useState("");
  const { data, isLoading } = useGetProjectsListQuery(searchState);
  const searchHandler = (searchState) => {
    setSearchState(searchState);
  };

  return (
    <main className="main-projects">
      <MainHeader searchHandler={searchHandler}></MainHeader>
      {isLoading ? (
        <Loader />
      ) : (
        <Projects
          cardsData={data.CardsData}
          searchState={searchState}></Projects>
      )}
    </main>
  );
}
