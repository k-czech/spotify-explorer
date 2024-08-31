import { Link } from 'react-router-dom';
import { type SpotifyItemArtist } from '@/types/types.ts';
import { Button } from '@/components/ui/Button/Button.tsx';

import './styles.scss';
import { FollowButton } from '@/components/ui/FollowButton/FollowButton.tsx';

type ArtistItemProps = {
  artist: SpotifyItemArtist | null;
};

export const ArtistItem = ({ artist }: ArtistItemProps) => {
  return (
    <div className="artist-item">
      <FollowButton className="artist-item__follow-button" />
      <div className="artist-item__content">
        <div className="artist-item__info-container">
          <div className="artist-item__image">
            {artist?.images.length && artist.images.length > 0 && artist?.images[0].url ? (
              <img src={artist?.images[0].url} alt={artist?.name} />
            ) : (
              <div className="artist-item__image-placeholder">
                <p>{artist?.name[0]}</p>
              </div>
            )}
          </div>
          <div className="artist-item__info">
            <h3 className="artist-item__name">{artist?.name}</h3>
            <p className="artist-item__type">{artist?.type}</p>
          </div>
        </div>
        <div className="artist-item__stats">
          <div className="artist-item__popularity-container">
            <h3 className="artist-item__title">Popularity:</h3>
            <div className="artist-item__popularity">
              <div
                className="artist-item__popularity-bar"
                style={{ width: `${artist?.popularity}%` }}
              />
            </div>
          </div>
          <div className="artist-item__genres-container">
            {artist?.genres && artist.genres.length > 0 && (
              <div className="artist-item__genres">
                <h3 className="artist-item__title">Genres:</h3>
                <p>{artist?.genres.join(', ')}</p>
              </div>
            )}
            {artist?.followers.total && (
              <div className="artist-item__followers">
                <h3 className="artist-item__title">Followers:</h3>
                <p>{artist?.followers.total}</p>
              </div>
            )}
          </div>
        </div>
        <div className="artist-item__buttons">
          <Button variant="outlined">
            <Link to={`/artist/${artist?.id}`}>View Artist</Link>
          </Button>
          <Button variant="outlined" buttonType="spotify-button" formTarget="_blank">
            <a href={artist?.external_urls.spotify} target="_blank" rel="noopener noreferrer">
              Spotify
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};
