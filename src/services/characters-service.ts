import axios from 'axios';
import { axiosClient } from './http-client';

async function fetchCharacters() {
  try {
    const response = await axiosClient.get('/api/superheroes');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
    } else {
      console.error('Unexpected error:', error);
    }

    throw new Error('Failed to fetch data.');
  }
}

export const fetchCharacterBySlug = async (slug: string) => {
  try {
    const response = await axiosClient.get(`/api/superheroes/${slug}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
    } else {
      console.error('Unexpected error:', error);
    }

    throw new Error('Failed to fetch data.');
  }
};

export const CharactersService = {
  fetchCharacters,
  fetchCharacterBySlug,
};
