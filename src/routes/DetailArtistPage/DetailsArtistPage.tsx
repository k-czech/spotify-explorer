import { useParams } from 'react-router-dom';
import { Section } from '@/components/layouts/Section.tsx';
import { useSpotifyArtist } from '@/hooks/useSpotifyArtist.ts';
import { Button } from '@/components/ui/Button/Button.tsx';

const DetailsArtistPage = () => {
  const { id } = useParams();
  const {
    onArtistQueryFunc: { data, isLoading }
  } = useSpotifyArtist(String(id));
  console.log(data, isLoading);
  return (
    <Section>
      <div className="artist-item artist-item--large">
        <div className="artist-item__image artist-item__image--large">
          {data?.images.length && data.images.length > 0 && data?.images[0].url ? (
            <img src={data?.images[0].url} alt={data?.name} />
          ) : (
            <div className="artist-item__image-placeholder artist-item__image-placeholder--large">
              <p>{data?.name[0]}</p>
            </div>
          )}
        </div>
        <div className="artist-item__info artist-item__info--large">
          <span className="artist-item__type artist-item__type--large">
            {data?.type === 'artist' ? 'Artysta' : null}
          </span>
          <h1 className="artist-item__name artist-item__name--large">{data?.name}</h1>
          <p className="artist-item__genres artist-item__genres--large">
            {data?.genres.join(', ')}
          </p>
          <div className="artist-item__buttons artist-item__buttons--large">
            <Button variant="outlined" buttonType="spotify-button">
              <a href={data?.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                Play
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default DetailsArtistPage;
