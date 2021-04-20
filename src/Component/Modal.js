import React, { useEffect }  from 'react'
import { Alert } from 'react-bootstrap';
import {connect} from "react-redux"

function Modal(props) {
    // const modalContent = useSelector(state=>state.modalContent)
    // const variant = useSelector(state=>state.variant)
    
    // const dispatch = useDispatch()
    useEffect(()=>{
  setTimeout(()=>{
    props.closeModal()
    
  }
  ,3000)
})
    return (
        <div>
            <Alert variant={props.variant}>
                <center>
                    <h6>{props.modalContent} </h6>
            </center>
      </Alert>
        </div>
    )
}

const mapStateToProps = state =>{
  return {
      modalContent : state.modalContent,
      variant : state.variant

  }
}

const mapDispatchToProps = dispatch =>{

  return {
    
    closeModal : ()=> dispatch({type:'CLOSED_MODAL'})

}
}

export default connect(mapStateToProps,mapDispatchToProps)(Modal)
