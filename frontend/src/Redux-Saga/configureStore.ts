import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from 'redux-logger';
import appReducer from './pages/App.ts'
import createSagaMiddleware from 'redux-saga'
import actionRunner from './runner/Runner.ts'
const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  employees: appReducer,
});

const store = createStore(rootReducer,
  applyMiddleware(sagaMiddleware,logger));


sagaMiddleware.run(actionRunner);

export default store;