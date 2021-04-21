import React, { Component } from 'react'
import {connect} from 'react-redux'
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
