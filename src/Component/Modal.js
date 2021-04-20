import React, { useEffect }  from 'react'
import { Alert } from 'react-bootstrap';
import {useSelector,useDispatch} from "react-redux"

function Modal() {
    const modalContent = useSelector(state=>state.modalContent)
    const variant = useSelector(state=>state.variant)
    
    const dispatch = useDispatch()
    useEffect(()=>{
  setTimeout(()=>{
    dispatch({type:'CLOSED_MODAL'})
  }
  ,3000)
})
    return (
        <div>
            <Alert variant={variant}>
                <center>
                    <h6>{modalContent} </h6>
            </center>
      </Alert>
        </div>
    )
}

export default Modal
