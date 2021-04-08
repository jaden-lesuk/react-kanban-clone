import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './flux/store';
import 'bootstrap/dist/css/bootstrap.min.css';

import Kanban from './components/Kanban';

import {Container} from 'react-bootstrap'

class App extends Component {
  render(){
    return(
      // Adds the redux store across all encapsulated components
      <Provider store={store}>
        <div style={styles.mainContentStyle}>
          <Container fluid>
            <h3><strong>Kanban Clone</strong></h3>
            <Kanban />
          </Container>
        </div>
      </Provider>
    )
  }
}


const styles = {
  mainContentStyle: {
    paddingLeft: 0,
    paddingRight: 0,
    minHeight: '100vh',
    background: '#ECECEC'
  },

  
}

export default App;
