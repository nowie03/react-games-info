import React, { useState, useEffect, useContext } from "react";
import GameCardComponent from "../components/GameCardComponent";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { GameContext } from "../context/GameContext";
import{motion} from 'framer-motion'


const GameGalleryComponent = () => {
  const { games, setGames } = useContext(GameContext);
  console.log(games);

  const [searchFilter, setSearchFilter] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:5000/games");
      if (response.ok) {
        const data = await response.json();
        setGames(data);
      }
    }
  }, []);

  return (
    <div>
      <div className="container mt-3">
        <div className="search-container mb-3">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchFilter}
              onChange={(e) => {
                setSearchFilter(e.target.value);
              }}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </div>
        <motion.div layout className="game-container">
          {games.map((game, index) => {
            console.log(game.name.toLowerCase()+" "+searchFilter+" "+ game.name.toLowerCase().includes(searchFilter))
            return game.name.toLowerCase().includes(searchFilter) &&(
             
              <GameCardComponent
                key={index}
                imgSrc={game.background_image}
                title={game.name}
                id={game.id}
              />
              
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default GameGalleryComponent;
