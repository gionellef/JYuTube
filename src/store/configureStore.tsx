import { applyMiddleware, compose, createStore } from 'redux';

import createSagaMiddleware from 'redux-saga';

import reducer from './reducers';
import rootSaga from './sagas';

export function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  
  const composeEnhancers = (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

  const store = createStore(reducer, composeEnhancers(
    applyMiddleware(sagaMiddleware)
  ));
  sagaMiddleware.run(rootSaga);
  return store;
}