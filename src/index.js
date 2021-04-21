import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import NavbarC from './Component/ClassComponents/Navbar';
import App from './Component/ClassComponents/App'
import {reducer} from "./reducer/reducer"
import {Provider} from "react-redux"
import { Container,Jumbotron} from 'react-bootstrap';
import {createStore} from "redux"
const store = createStore
(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )



ReactDOM.render(
  <Provider store={store}>
  <Container fluid className="container">
    <NavbarC />
    <Jumbotron className="jumbotrom">
        <App/>
   </Jumbotron>
</Container>
</Provider>
  ,
  document.getElementById('root')
);


