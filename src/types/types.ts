export type AuthResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
};

export type SpotifySearchTypes = {
  albums: SpotifySearchResponse<SpotifyItemAlbum>;
  artists: SpotifySearchResponse<SpotifyItemArtist>;
};

export type SpotifySearchResponse<T> = {
  href: string;
  items: T[];
  limit: number;
  next: string;
  offset: number;
  previous: string | null;
  total: number;
};

export type SpotifyItemArtist = {
  external_urls: SpotifyExternalUrls;
  followers: SpotifyFollowers;
  genres: string[];
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
};

export type SpotifyExternalUrls = {
  spotify: string;
};

export type SpotifyFollowers = {
  href: string;
  total: number;
};

export type SpotifyImage = {
  height: number;
  url: string;
  width: number;
};

export type SpotifyItemAlbum = {
  album_type: string;
  artists: SpotifyArtist[];
  available_markets: string[];
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
};

export type SpotifyArtist = {
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
};
