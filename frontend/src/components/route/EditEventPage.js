import EventForm from '../EventForm';
import { useRouteLoaderData } from 'react-router-dom';

const EditEventPage = () => {

    const data = useRouteLoaderData('event-detail');

    return (
        <EventForm event={data.event}></EventForm>
    )
};

export default EditEventPage;