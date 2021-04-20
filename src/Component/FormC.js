import React,{useState} from 'react'
import { Form,Button } from 'react-bootstrap';
import {useSelector,useDispatch} from "react-redux"
import Modal from "./Modal"


function FormC() {
    const [name,setName] = useState("")
    const isModalOpen = useSelector(state=>state.isModalOpen)
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
        <div>
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
        </div>
    )
}

export default FormC
