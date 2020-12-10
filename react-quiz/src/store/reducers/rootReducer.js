import { combineReducers } from 'redux';
import authReducer from './authReducer';
import createTestReducer from './createTestReducer';
import quizReducer from './quizReducer';

export default combineReducers({
  quiz: quizReducer,
  create: createTestReducer,
  auth: authReducer,
});
