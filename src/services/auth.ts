import axios, { type AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import { type AuthResponse } from '@/types/types.ts';

export const getAuthToken = async () => {
  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');
  params.append('client_id', import.meta.env.VITE_API_CLIENT_ID);
  params.append('client_secret', import.meta.env.VITE_API_CLIENT_SECRET);

  const response: AxiosResponse<AuthResponse> = await axios.post(
    import.meta.env.VITE_API_AUTH_URL,
    params,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  );

  const { access_token, expires_in } = response.data;

  const expiryTime = new Date().getTime() + expires_in * 1000;
  Cookies.set('access_token', access_token, {
    expires: new Date(expiryTime),
    sameSite: 'lax',
    secure: true
  });
  Cookies.set('access_token_expiry', expiryTime.toString());

  return access_token;
};
