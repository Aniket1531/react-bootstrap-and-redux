import React, { Component } from 'react'
// import {connect} from "react-redux"
import { Button,Table } from 'react-bootstrap';
// import {useSelector,useDispatch} from "react-redux"



export class List extends Component {
    
    render() {
        return (
        <div>
        {this.props.people.map((person)=>{
        return(
        <div key={person.id} className="item" >
        <Table striped bordered hover>
            <tbody>
                <tr>
                    <td><h5>{person.name}</h5></td>
                    <td><Button variant="danger" onClick={()=>this.props.deletePerson(person.id)}  >Remove</Button></td>
                </tr>
            </tbody>
        </Table>
        </div>
    )
    })}
        </div>
    )
    }
}
export default List
