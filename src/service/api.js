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

export async function getRequestToken() {
  try {
    const {data} = await api.get(
      'authentication/token/new?api_key=c3dc5cb91b1c309207a60a76c5742842',
    );
    return data.request_token;
  } catch (error) {
    console.warn('getRequestToken');
  }
}

export async function approveRequestToken(tolken) {
  try {
    const {data} = await axios.get(
      `https://www.themoviedb.org/authenticate/${tolken}`,
    );
    return data;
  } catch (error) {
    console.warn(error);
  }
}

export async function validateToken(body) {
  try {
    const {data} = await api.post(
      'authentication/token/validate_with_login?api_key=c3dc5cb91b1c309207a60a76c5742842',
      body,
      {
        headers: {
          Authorization: `Bearer ${body}`,
          'Content-Type': 'application/json;charset=utf-8',
        },
      },
    );
    return data.success;
  } catch (error) {
    console.warn(error);
  }
}

export async function getAccessToken(token) {
  try {
    await api.post(
      'authentication/session/new?api_key=c3dc5cb91b1c309207a60a76c5742842',
      token,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  } catch (error) {
    console.warn(error);
  }
}

export default api;
