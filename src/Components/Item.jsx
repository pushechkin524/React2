import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


const Item = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
            {props.description}
        </Card.Text>
        <Card.Text>
            {props.price}
        </Card.Text>
        <Button variant="primary"></Button>
      </Card.Body>
    </Card>
  )
}

export default Item