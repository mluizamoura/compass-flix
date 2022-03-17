import axios from 'axios';
import {Alert} from 'react-native';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export async function getMovie(page) {
  try {
    const {data} = await api.get(
      `movie/popular?api_key=c3dc5cb91b1c309207a60a76c5742842&language=pt-BR&page=${page}`,
    );
    return data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function getDetails(id) {
  try {
    const {data} = await api.get(
      `movie/${id}?api_key=c3dc5cb91b1c309207a60a76c5742842&language=pt-BR`,
    );
    return data;
  } catch (error) {
    console.warn(error);
  }
}

export async function getCredits(id) {
  try {
    const {data} = await api.get(
      `movie/${id}/credits?api_key=c3dc5cb91b1c309207a60a76c5742842&language=pt-BR`,
    );
    return data;
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
    console.log('getRequestToken');
  }
}

export async function approveRequestToken(tolken) {
  try {
    const {data} = await axios.get(
      `https://www.themoviedb.org/authenticate/${tolken}`,
    );
    return data;
  } catch (error) {
    console.log(error);
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
    if (error.response.data.status_message.includes('You must provide')) {
      Alert.alert('Usuário inválido', 'Campo não preenchido.');
    } else {
      Alert.alert('Usuário inválido', 'Nome ou senha inválidos.');
    }
    return error.response.data.success;
  }
}

export async function getIdAccessToken(token) {
  try {
    const {data} = await api.post(
      'authentication/session/new?api_key=c3dc5cb91b1c309207a60a76c5742842',
      token,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return data.session_id;
  } catch (error) {
    console.log(error);
  }
}

export async function getAccountDetails(seesionId) {
  try {
    const {data} = await api.get(
      `account?api_key=c3dc5cb91b1c309207a60a76c5742842&session_id=${seesionId}`,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getChangeMovies(dateStart) {
  try {
    const {data} = await api.get(
      `movie/changes?api_key=c3dc5cb91b1c309207a60a76c5742842&start_date=${dateStart}&page=1`,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default api;
