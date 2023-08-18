import classes from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';

function MainNavigation() {

  const isActive = ({isActive}) => {
    return isActive ? classes.active : undefined
  };

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to={'home'} className={isActive}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'events'} className={isActive}>Events</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
