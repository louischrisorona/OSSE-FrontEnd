import axios from 'axios';
const BASE_URL = 'http://localhost:5000';

export function index() {
  axios.get(`${BASE_URL}/registration`).then((response) => {
    console.log(response.data);
  });
}

export const create = async (body) => {
  try {
    const response = await axios.post(`${BASE_URL}/registration`, body);
    if (response.status === 200) {
      console.log('bob', response.success);
    }
  } catch (error) {
    console.error(`Error during registration request: “, error`);
  }
};
export function show(id) {
  axios.get(`${BASE_URL}/${id}`).then((response) => {
    if (response.data.id === id) console.log(response.data);
  });
}

export function update(id, body) {
  axios.put(`${BASE_URL}/${id}`, body).then((response) => {
    console.log(response.data);
  });
}

export function destroy(id) {
  axios.delete(`${BASE_URL}/${id}`).then((response) => {
    console.log(response.data);
  });
}
