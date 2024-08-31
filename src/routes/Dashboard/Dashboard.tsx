import { Checkbox, ListItemText, MenuItem, OutlinedInput, Select } from '@mui/material';
import { Section } from '@/components/layouts/Section.tsx';
import { SearchForm } from '@/components/forms/SearchForm.tsx';
import { useSpotifySearch } from '@/hooks/useSpotifySearch.ts';
import { ArtistItem } from '@/components/ui/ArtistItem/ArtistItem.tsx';
import { SkeletonArtistList } from '@/components/layouts/SkeletonArtistList.tsx';

import '@/components/ui/AlbumItem/styles.scss';
import { AlbumItem } from '@/components/ui/AlbumItem/AlbumItem.tsx';

const Dashboard = () => {
  const {
    handleTypeChange,
    types,
    onInputChange,
    onQueryFunc: { data, isLoading }
  } = useSpotifySearch();
  return (
    <Section>
      <SearchForm onSubmit={(e) => e.preventDefault()} onChange={onInputChange} label="Search">
        <Select
          multiple
          value={types}
          onChange={handleTypeChange}
          input={<OutlinedInput label="Typy" />}
          renderValue={(selected) => selected.join(', ')}
          fullWidth>
          <MenuItem value="album">
            <Checkbox checked={types.indexOf('album') > -1} />
            <ListItemText primary="Album" />
          </MenuItem>
          <MenuItem value="artist">
            <Checkbox checked={types.indexOf('artist') > -1} />
            <ListItemText primary="Artysta" />
          </MenuItem>
        </Select>
      </SearchForm>
      <>
        {isLoading && (
          <div className="search-wrapper">
            {[...new Array(10)].map((_, index) => (
              <SkeletonArtistList key={index} />
            ))}
          </div>
        )}
        {data && data?.artists?.items.length > 0 && (
          <>
            <h3>Artysta</h3>
            <div className="search-wrapper">
              {data?.artists.items.map((artist) => <ArtistItem key={artist.id} artist={artist} />)}
            </div>
          </>
        )}
        {data && data?.albums?.items.length > 0 && (
          <>
            <h3>Albumy</h3>
            <div className="search-wrapper">
              {data?.albums.items.map((album) => <AlbumItem key={album.id} album={album} />)}
            </div>
          </>
        )}
      </>
    </Section>
  );
};

export default Dashboard;
