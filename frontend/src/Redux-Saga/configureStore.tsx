import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from 'redux-logger';
import appReducer from './pages/App.tsx'


const rootReducer = combineReducers({
  employees: appReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;