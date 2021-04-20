import React from 'react'
import { Button,Table } from 'react-bootstrap';
import {useSelector,useDispatch} from "react-redux"

function List() {
    const people= useSelector(state => state.people)
    const dispatch = useDispatch()
    console.log(people)
    return (
        <div>
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
        </div>
    )
}

export default List
