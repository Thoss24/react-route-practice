import { json, useRouteLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import classes from './EventDetailPage.module.css';

const EventDetailPage = () => {

    const data = useRouteLoaderData('event-detail');

    console.log(data)

    return (
        <div className={classes['event-detail']}>
        <h1>{data.event.title}</h1>
        <img src={data.event.image} alt=""/>
        <h2>{data.event.date}</h2>
        <button><Link to={".."} relative="route">Back</Link></button>
        <button><Link to={":id/edit"}>Edit</Link></button>
        </div>
    )
};

export default EventDetailPage

export const loader = async ({request, params}) => { // params contains object with route parameters

    const id = params.id;

    console.log(id)


    const response = await fetch('http://localhost:8080/events/' + id)

    if (!response.ok) {
        return json({message: 'Could not find event'}, {status: 500})
    } else {
        return response
    }
}