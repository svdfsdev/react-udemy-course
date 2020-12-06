import axios from 'axios';

export default axios.create({
  baseURL: 'https://react-quiz-dedc2-default-rtdb.firebaseio.com/',
});
