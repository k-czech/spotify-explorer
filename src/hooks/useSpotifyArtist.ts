import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { useSpotifyToken } from '@/hooks/useSpotifyAuth.ts';
import type { SpotifyItemArtist } from '@/types/types.ts';
import { getArtist } from '@/services/spotify.ts';

export const useSpotifyArtist = (artistId: string) => {
  const { data: token } = useSpotifyToken();

  const onArtistQueryFunc: UseQueryResult<SpotifyItemArtist> = useQuery({
    queryKey: ['spotifyArtist', artistId],
    queryFn: () => {
      if (token) {
        return getArtist(token, artistId);
      } else {
        throw new Error('Token is undefined');
      }
    },
    enabled: !!artistId
  });

  return { onArtistQueryFunc };
};
