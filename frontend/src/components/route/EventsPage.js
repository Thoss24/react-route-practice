import { Link } from "react-router-dom";
import classes from './EventsPage.module.css'

const EventsPage = () => {
  const DUMMY_EVENTS = [
    {
      id: "e1",
      title: "event 1",
    },
    {
      id: "e2",
      title: "event 2",
    },
    {
      id: "e3",
      title: "event 3",
    },
  ];

  return (
    <div className={classes.events}>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventsPage;
