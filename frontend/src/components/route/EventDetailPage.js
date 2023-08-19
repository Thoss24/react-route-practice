import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import classes from './EventDetailPage.module.css';

const EventDetailPage = () => {

    const param = useParams();

    return (
        <div className={classes['event-detail']}>
        <h1>{param.id}</h1>
        <button><Link to={".."} relative="route">Back</Link></button>
        </div>
    )
};

export default EventDetailPage