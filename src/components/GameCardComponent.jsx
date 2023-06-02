import Card from 'react-bootstrap/Card';
import React from 'react';
import Rating from "../assets/star.png";    
import { Link } from 'react-router-dom';

function GameCardComponent({imgSrc,title,id}) {
  return (
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
  );
}

export default GameCardComponent;