import { NavLink, type NavLinkProps } from 'react-router-dom';
import { type PropsWithChildren, type ReactNode } from 'react';
import './styles.scss';

type LinkWithIconProps = PropsWithChildren & {
  icon: ReactNode;
  to: NavLinkProps['to'];
};

export const LinkWithIcon = ({ icon, to, children }: LinkWithIconProps) => (
  <li>
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? 'link-with-icon link-with-icon--active' : 'link-with-icon'
      }>
      {icon}
      {children}
    </NavLink>
  </li>
);
