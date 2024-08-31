import { type ChangeEvent, useState } from 'react';
import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { type SelectChangeEvent } from '@mui/material';
import { debounce } from '@/utils/debounce.ts';
import { searchSpotify } from '@/services/spotify.ts';
import { useSpotifyToken } from '@/hooks/useSpotifyAuth.ts';
import { type SpotifySearchTypes } from '@/types/types.ts';

export const useSpotifySearch = () => {
  const [query, setQuery] = useState<string>('');
  const [types, setTypes] = useState<string[]>(['album']);
  const { data: token } = useSpotifyToken();

  const handleSearch = debounce((newQuery: string) => {
    setQuery(newQuery);
  }, 500);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    handleSearch(e.target.value);
  };

  const handleTypeChange = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value as string[];
    setTypes(value);
  };

  const onQueryFunc: UseQueryResult<SpotifySearchTypes> = useQuery({
    queryKey: ['spotifySearch', query, types],
    queryFn: () => {
      if (token) {
        return searchSpotify({ token, query, types });
      } else {
        throw new Error('Token is undefined');
      }
    },
    enabled: !!query && types.length > 0
  });

  return { onInputChange, onQueryFunc, handleTypeChange, types };
};
