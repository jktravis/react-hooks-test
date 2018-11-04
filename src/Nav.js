import React from 'react';
import { Link } from 'react-router-dom';

import routes from './routes';

function Nav() {
  return (
    <nav>
      <ul>
        {routes.map(route => (
          <li key={route.to}>
            <Link to={route.to}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;