import { combineReducers } from 'redux';
import createTestReducer from './createTestReducer';
import quizReducer from './quizReducer';

export default combineReducers({
  quiz: quizReducer,
  create: createTestReducer,
});
