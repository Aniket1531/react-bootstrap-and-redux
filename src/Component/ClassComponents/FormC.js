import React, { Component } from 'react'

import { Form,Button } from 'react-bootstrap';
// import {useSelector,useDispatch} from "react-redux"
import Modal from "./Modal"


class FormC extends Component {
    
   constructor(props){
    super(props)
      
      this.state  = {
        name : ""
      }

    }
    
    handleAdd = (e) =>{

    e.preventDefault()
    console.log("this.name",this.name)
    const name = this.state.name
    if(name){
      const  newItem = {id : new Date().getTime().toString(),name}
      this.props.addPerson(newItem)
      // dispatch({type:'ADD_ITEM',payload:newItem})
      this.setState({name : ""})
    }
    else{
      this.props.noValue()
    }
  }


  render() {

    return (
      <div>
        <div>
        {this.props.isModalOpen && <Modal/>}
        <Form onSubmit={this.handleAdd} > 
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control  placeholder="Add Name" value={this.state.name} onChange={(e)=>{this.setState({name : e.target.value})}} />
        </Form.Group>
        <Button variant="primary" type="submit">
        Add People
        </Button>
        </Form>
        
        </div>
      </div>
    )
  }
}


export default FormC
