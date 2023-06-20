import React, { Fragment, useContext, useEffect, useState } from "react";

import { AppContext } from "../context/AppContext";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { GameContext } from "../context/GameContext";
import { data } from "../localData";
import { AnimatePresence ,motion} from "framer-motion";


const HomePage = () => {
    const userState = useContext(AppContext);
    console.log(userState.isLoggedIn);
  const { results } = data;
  const [games, setGames] = useState(results);
  // console.log(state);

  useEffect(() => {
    async function fetchGames() {
      const response = await fetch(
        "https://api.rawg.io/api/games?key=a5b29b5f071041f4b51a4a9d6f7f4475&page=1&page_size=30"
      );
      if (response.ok) {
        const data = await response.json();
        setGames(data.results);
      }
    }
    // fetchGames()
  }, []);

  return (
    <GameContext.Provider value={{ games, setGames }}>
      <Fragment>
        <NavBar />
        <AnimatePresence>
        <Outlet />
        </AnimatePresence>
      </Fragment>
    </GameContext.Provider>
  );
};

export default HomePage;
