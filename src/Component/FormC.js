import React,{useState} from 'react'
import {connect} from 'react-redux'
import { Form,Button } from 'react-bootstrap';
// import {useSelector,useDispatch} from "react-redux"
import Modal from "./Modal"


function FormC(props) {
    const [name,setName] = useState("")
    // const isModalOpen = useSelector(state=>state.isModalOpen)
    // const dispatch = useDispatch()
  
  const handleAdd = (e) =>{
    e.preventDefault()
    if(name){
      const  newItem = {id : new Date().getTime().toString(),name}
      props.addPerson(newItem)
      // dispatch({type:'ADD_ITEM',payload:newItem})
      setName('')
    }
    else{
      props.noValue()
    }
  }
 
    return (
        <div>
        {props.isModalOpen && <Modal/>}
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

const mapStateToProps = state =>{
  return {
      isModalOpen : state.isModalOpen,

  }
}

const mapDispatchToProps = dispatch =>{

  return {
    addPerson : (newItem)=> dispatch({type:'ADD_ITEM',payload:newItem}),
    noValue : ()=> dispatch({type:'NO_VALUE'})
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(FormC)
