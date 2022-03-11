import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export async function getMovie() {
  try {
    const {data} = await api.get(
      'movie/popular?api_key=c3dc5cb91b1c309207a60a76c5742842&language=pt-BR&page=1',
    );
    return data.results;
  } catch (error) {
    console.warn(error);
  }
}

export async function getTolken() {
  try {
    const {data} = await api.get(
      'authentication/token/new?api_key=c3dc5cb91b1c309207a60a76c5742842',
    );
    return data.token;
  } catch (error) {
    console.warn(error);
  }
}

export default api;
