import { type SvgIconProps } from '@mui/material';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { LinkWithIcon } from '@/components/ui/LinkWithIcon/LinkWithIcon.tsx';

import './styles.scss';

export const Sidebar = () => {
  const configIcon: SvgIconProps = { width: 24, height: 24 };
  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        <ul className="sidebar__list">
          <LinkWithIcon to="/" icon={<LibraryMusicOutlinedIcon {...configIcon} />}>
            Library
          </LinkWithIcon>
          <LinkWithIcon to="/favorites" icon={<FavoriteBorderOutlinedIcon {...configIcon} />}>
            Favorites
          </LinkWithIcon>
        </ul>
      </nav>
    </aside>
  );
};
