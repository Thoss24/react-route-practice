import { Outlet } from "react-router-dom";
import EventNavigation from "../EventNavigation";
import classes from './EventsRoot.module.css';

const EventsRoot = () => {
    return (
        <div className={classes.events}>
        <EventNavigation />
        <main>
          <Outlet />
        </main>
      </div>
    )
};

export default EventsRoot;