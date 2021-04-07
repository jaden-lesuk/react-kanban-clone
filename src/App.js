import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './flux/store';
import 'bootstrap/dist/css/bootstrap.min.css';

import Kanban from './components/Kanban';

import {Container} from 'react-bootstrap'

class App extends Component {
  render(){
    return(
      <Provider store={store}>
        <Container fluid>
          <div>REACT KANBAN</div>
          <Kanban />
        </Container>
      </Provider>
    )
  }
}

export default App;
