import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate=useNavigate()
    const [mail,setMail]=useState();
    const [password,setPassword]=useState();
    const [validated,setValidated]=useState();

    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(e.target.email.value);
        // console.log(e.target.password.value);
        navigate('/games')
    }
    
  return (
    <div className="container login">
        <div className="login-card">
        <Form onSubmit={handleSubmit} validated>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label >
          Email
        </Form.Label>
        <Col>
          <Form.Control required defaultValue="email@example.com" value={mail} onChange={e=>{
            setMail(e.target.value);
          }}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label  >
          Password
        </Form.Label>
        <Col >
          <Form.Control required type="password" placeholder="Password" value={password} onChange={e=>{
            setPassword(e.target.value);
          }}/>
        </Col>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Button type='submit' variant='dark'>log in </Button>
        </Form.Group>
    </Form>
        </div>
    </div>
  )
}

export default LoginPage