import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import devtools from 'redux-devtools';
const logger = createLogger();

const middlewares = [thunk];

export default function configureStore (initialState = {}, debug = __DEV__)  {
  const createStoreWithMiddleware = applyMiddleware(...middlewares);

  const store = (debug ?
    compose(createStoreWithMiddleware, applyMiddleware(logger))
    : createStoreWithMiddleware
  )(createStore)(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}