import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import { getAuthToken } from '@/services/auth.ts';

export const useSpotifyToken = () => {
  return useQuery({
    queryKey: ['spotifyToken'],
    queryFn: async () => {
      const token = Cookies.get('access_token');
      const expiryTime = parseInt(Cookies.get('access_token_expiry') || '0', 10);
      const currentTime = new Date().getTime();
      if (token && expiryTime > currentTime) {
        return token;
      } else {
        return await getAuthToken();
      }
    },
    staleTime: 55 * 60 * 1000,
    initialData: () => Cookies.get('access_token')
  });
};

export const useRefreshSpotifyToken = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: getAuthToken,
    onSuccess: (newToken) => {
      queryClient.setQueryData(['spotifyToken'], newToken);
    }
  });
};
