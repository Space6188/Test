import axios from 'axios';

class userService {
  getUsers() {
    return axios
      .get('https://hp-api.onrender.com/api/characters')
      .then(res => res.data);
  }

  getSingleUser(id: string) {
    return axios
      .get(`https://hp-api.onrender.com/api/character/${id}`)
      .then(res => res.data);
  }
}
export default new userService();
