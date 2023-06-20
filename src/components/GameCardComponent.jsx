import Card from 'react-bootstrap/Card';
import React ,{useEffect, useRef} from 'react';
import Rating from "../assets/star.png";    
import { Link } from 'react-router-dom';
import {motion} from "framer-motion"

function GameCardComponent({imgSrc,title,id}) {
  const ref=useRef();
  useEffect(()=>{
    console.log(ref.current.offsetLeft+" "+ref.current.offsetTop)
  },{})
  return (
      <motion.div layout ref={ref} initial={{x:-1900}} animate={{ x: 0 }}
      transition={{ delay: 0.2 }}  >
    <Card>
    <Card.Img variant="top" width={150} height={150} src={imgSrc} />
    <Card.Body>
      <Card.Title>{title} </Card.Title>
    </Card.Body>
    <div className='footer'>
        <Link to={`/game/${id}`}>
                  see more...
                </Link>
    </div>
  </Card>
  </motion.div>
  );
}

export default GameCardComponent;