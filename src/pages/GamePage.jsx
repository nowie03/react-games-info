import React, { Fragment, useContext } from "react";
import { GameContext } from "../context/GameContext";
import { useParams } from "react-router-dom";
import playstation from "../assets/playstation.png";
import xbox from "../assets/xbox.png";
import pc from "../assets/computer.png";
import linux from "../assets/linux.png";
import nitendo from "../assets/joystick.png";
import android from "../assets/android.png";
import mac from "../assets/apple-logo.png";
import { motion } from "framer-motion";

const GamePage = () => {
  const { id } = useParams();

  const { games, setGames } = useContext(GameContext);
  const game = games.find((game) => game.id === parseInt(id));
  console.log(game);

  const getIcon = (name) => {
    switch (name.toLowerCase()) {
      case "playstation":
        return playstation;
      case "xbox":
        return xbox;
      case "pc":
        return pc;
      case "linux":
        return linux;
      case "android":
        return android;
      case "apple macintosh":
        return mac;
      case "nintendo":
        return nitendo;
      default:
        return pc;
    }
  };

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <motion.div initial={{ width: 0 ,opacity:0}} animate={{ width: "100%",opacity:1 }} transition={{ ease: "easeIn", duration: 0.5 }}>
      <div className="image-container">
        <div className="row">
          <img
            src={game.background_image}
            alt="image"
            srcSet=""
            className="image-main"
          />
        </div>
        <div className="row mt-3">
          <h2>{game.name}</h2>
        </div>
        <div className="row">
          <motion.div className="col-xs-12 col-md-6 game-info">
            <p>Rating: {game.rating}</p>
            <p>Meta critic: {game.metacritic}</p>
            <p>Genre: {game.esrb_rating.name}</p>
          </motion.div>
          <div className="col-xs-12 col-md-6 game-info">
            <p>Released on: {game.released}</p>
            <p>Added by: {game.added} users</p>
            <p>Reviews: {game.reviews_count}</p>
          </div>
        </div>
        <h3>Screenshots</h3>
        <div className="screenshots">
          {game.short_screenshots.map((screenshot, index) => {
            return <motion.img key={`img-${index}`} whileHover={{
              scale: 1.3,
              transition: { duration: 0.2 },
            }} src={screenshot.image} alt="screenshot" />;
          })}
        </div>
        <h3>Available on</h3>
        <div className="available-on d-flex justify-content-center">
          {game.parent_platforms.map(({ platform }, index) => {
            return (
              <div className="platform-card m-3">
                <motion.img
                key={`icon-${index}`}
                whileHover={
                  {
                    scale: 1.3,
                    transition: { duration: 0.2 },
                  }
                }
                  src={getIcon(platform.name)}
                  alt=""
                  srcset=""
                  width={30}
                />
                <p key={index}>{platform.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default GamePage;
