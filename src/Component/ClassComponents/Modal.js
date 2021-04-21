import React, {Component }  from 'react'
import { Alert } from 'react-bootstrap';
import {connect} from "react-redux"



export class Modal extends Component {

  componentDidMount(){
    
  setTimeout(()=>{
    this.props.closeModal() 
  }
  ,3000)

  }
  render() {
    return (
        <div>
            <Alert variant={this.props.variant}>
                <center>
                    <h6>{this.props.modalContent} </h6>
            </center>
      </Alert>
        </div>
    )
  }
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
