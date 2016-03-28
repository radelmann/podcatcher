import React, {Component} from 'react';
import configureStore from './store';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { syncReduxAndRouter } from 'redux-simple-router';
import { createHistory } from 'history';
import Routes from './routes';
import styles from './styles/root';
import { getPodcasts } from './action-creators/podcasts';

const store = configureStore({});
const history = createHistory();

syncReduxAndRouter(history, store);

class Root extends Component {
  componentDidMount() {
    store.dispatch(getPodcasts());
  }

  render() {
    return (
      <div className={styles.root} >
         <Provider store={store}>
           <Router history={history}>
             { Routes }
           </Router>
         </Provider>
       </div>
    );
  }
}

export default Root;