import {reducersType} from '../utils/redux/reducers';

class selectorService {
  getAllUsers = (store: reducersType) => store.users;
  getAttempts = (store: reducersType) => store.attempts;
}
export default new selectorService();
