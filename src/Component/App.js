import React, { useState } from 'react';
import { Form,Button,Table } from 'react-bootstrap';
import Modal from './Modal'

import {useSelector,useDispatch} from "react-redux"


function App() {
  const [name,setName] = useState("")
  // const [state,dispatch]=useReducer(reducer,defaultState)
  const people= useSelector(state => state.people)
  const isModalOpen= useSelector(state => state.isModalOpen)
  const dispatch = useDispatch()
  
  
  const handleAdd = (e) =>{
    e.preventDefault()
    if(name){
      const  newItem = {id : new Date().getTime().toString(),name}
      dispatch({type:'ADD_ITEM',payload:newItem})
      setName('')
    }
    else{
      dispatch({type:'NO_VALUE'})
    }
  }
 
    
  
  return (
    
      <section>
         {isModalOpen && <Modal/>}
        <Form onSubmit={handleAdd}> 
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control  placeholder="Add Name" value={name} onChange={(e)=>{setName(e.target.value)}} />
  </Form.Group>
  <Button variant="primary" type="submit">
    Add People
  </Button>
</Form>
{people.map((person)=>{
      return(
        <div key={person.id} className="item" >

         <Table striped bordered hover>
  <tbody>
    <tr>
      <td><h5>{person.name}</h5></td>
      <td><Button variant="danger"  onClick={()=>{dispatch({type:"REMOVE_ITEM",payload:person.id})}} >Remove</Button></td>
    </tr>
  </tbody>
</Table>
        </div>
      )
    })}
        
      </section>
    
    )
}

export default App
