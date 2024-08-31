import axios from 'axios';
import { type AuthResponse } from '@/types/types.ts';

type SpotifySearchParams = {
  token: AuthResponse['access_token'];
  query: string;
  types: string[];
};

export const searchSpotify = async ({ token, query, types }: SpotifySearchParams) => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/search`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    params: {
      q: query,
      type: types.join(','),
      limit: 10
    }
  });

  return response.data;
};

export const getArtist = async (token: AuthResponse['access_token'], id: string) => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/artists/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
};

export const getArtistAlbums = async (token: AuthResponse['access_token'], id: string) => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/artists/${id}/albums`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
};

export const getArtistTopTracks = async (token: AuthResponse['access_token'], id: string) => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/artists/${id}/top-tracks`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
};

export const getAlbum = async (token: AuthResponse['access_token'], id: string) => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/albums/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
};
