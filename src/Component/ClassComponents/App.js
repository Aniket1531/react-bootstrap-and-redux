import React,{Component} from 'react';
import FormC from "./FormC"
import {connect} from 'react-redux'
import List from './List'

class App extends Component {
  render(){
     return (
    
      <section>
        <FormC isModalOpen={this.props.isModalOpen} addPerson={this.props.addPerson} noValue={this.props.noValue} />
        <List people ={this.props.people}  deletePerson={this.props.deletePerson}   />
      </section>
    
    )
  }

}

const mapStateToProps = (state) =>{

  return {
      isModalOpen : state.isModalOpen,                
      people : state.people
  }
}

const mapDispatchToProps = (dispatch) =>{

  return {
    addPerson : (newItem)=> dispatch({type:'ADD_ITEM',payload:newItem}),
    noValue : ()=> dispatch({type:'NO_VALUE'}),
    deletePerson : (person)=>{dispatch({type:"REMOVE_ITEM",payload:person})}
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(App)
