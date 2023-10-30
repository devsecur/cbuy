'use client';
import { combineReducers } from 'redux';
import counterReducer from './features/counter/counterslice'

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;