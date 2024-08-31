import { useParams } from 'react-router-dom';
import { Section } from '@/components/layouts/Section.tsx';

const DetailsAlbumPage = () => {
  const { id } = useParams();
  return <Section>{id}</Section>;
};

export default DetailsAlbumPage;
