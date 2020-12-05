import axios from 'axios';
import { firebaseUrl } from '../helpers';

export default axios.create({
  baseURL: firebaseUrl,
});
