import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button/Button.tsx';
import { FollowButton } from '@/components/ui/FollowButton/FollowButton.tsx';
import type { SpotifyItemAlbum } from '@/types/types.ts';

type AlbumItemProps = {
  album: SpotifyItemAlbum | null;
};

export const AlbumItem = ({ album }: AlbumItemProps) => {
  return (
    <div className="album-item">
      <div className="album-item__content">
        <div className="album-item__image">
          {album?.images.length && album?.images.length > 0 && album?.images[0].url ? (
            <img src={album?.images[0].url} alt={album?.name} />
          ) : (
            <div className="artist-item__image-placeholder">
              <p>{album?.name[0]}</p>
            </div>
          )}
        </div>
        <div className="album-item__info-container">
          <div className="album-item__info">
            <p className="album-item__type">{album?.type}</p>
            <h3 className="album-item__name">{album?.name}</h3>
          </div>
          <div className="album-item__stats">
            {album?.artists &&
              album?.artists.length > 0 &&
              album?.artists.map((artist) => (
                <p key={artist.id} className="album-item__artist">
                  {artist.name}
                </p>
              ))}
            <p className="album-item__release-date">{album?.release_date}</p>
            <p className="album-item__total-tracks">{album?.total_tracks} total tracks</p>
          </div>
        </div>
      </div>
      <div className="album-item__buttons">
        <Button variant="outlined">
          <Link to={`/album/${album?.id}`}>View Album</Link>
        </Button>
        <div className="album-item__buttons-container">
          <Button variant="outlined" buttonType="spotify-button" formTarget="_blank">
            <a href={album?.external_urls.spotify} target="_blank" rel="noopener noreferrer">
              Spotify
            </a>
          </Button>
          <FollowButton />
        </div>
      </div>
    </div>
  );
};
