import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './flux/store';
import 'bootstrap/dist/css/bootstrap.min.css';

import Kanban from './components/Kanban';



class App extends Component {
  render(){
    return(
      <Provider store={store}>
        <div>"React Kanban"</div>
        <Kanban />
      </Provider>
    )
  }
}

export default App;
