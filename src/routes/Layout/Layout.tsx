import { Link, Outlet } from 'react-router-dom';
import '@/global.scss';

const Layout = () => {
  return (
    <div>
      <aside>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <Outlet />
    </div>
  );
};

export default Layout;
