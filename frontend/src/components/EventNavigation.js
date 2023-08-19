import { NavLink } from "react-router-dom";
import classes from './EventsNavigation.module.css';

const EventNavigation = () => {

    return (
        <main>
            <nav>
            <ul>
               <li><NavLink to={'/events'} >All Events</NavLink></li>
               <li><NavLink to={'/events/new-event'}>New Event</NavLink></li>
            </ul>
            </nav>
        </main>
    )
};

export default EventNavigation;