import React from 'react'
import {connect} from "react-redux"
import { Button,Table } from 'react-bootstrap';
// import {useSelector,useDispatch} from "react-redux"

function List(props) {
    // const people= useSelector(state => state.people)
    // const dispatch = useDispatch()
    
    return (
        <div>
        {props.people.map((person)=>{
        return(
        <div key={person.id} className="item" >
        <Table striped bordered hover>
            <tbody>
                <tr>
                    <td><h5>{person.name}</h5></td>
                    <td><Button variant="danger"  onClick={()=>props.deletePerson(person.id)} >Remove</Button></td>
                </tr>
            </tbody>
        </Table>
        </div>
    )
    })}
        </div>
    )
}

const mapStateToProps = state =>{
  return {
      people : state.people,

  }
}
const mapDispatchToProps = dispatch =>{
    return{
        deletePerson : (person)=>{dispatch({type:"REMOVE_ITEM",payload:person})}
}
}

// 
export default connect(mapStateToProps,mapDispatchToProps)(List)
