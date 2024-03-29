// import { useEffect, useState } from 'react';
import { useLoaderData, json } from 'react-router-dom';

import EventsList from '../EventsList';

function EventsPage() {
  
  const data = useLoaderData();
  const events = data.events

  return (
    <EventsList events={events}/>
  );
}

export default EventsPage;

export const loader =  async () => {
  const response = await fetch('http://localhost:8080/events/')

  if (!response.ok) {
    return json({message: 'Could not fetch events'}, {status: 500})
  } else {
    return response
  }
}
