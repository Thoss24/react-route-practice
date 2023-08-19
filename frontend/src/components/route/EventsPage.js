// import { useEffect, useState } from 'react';

import EventsList from '../EventsList';

function EventsPage() {
  
  return (
    <EventsList />
  );
}

export default EventsPage;

export const loader =  async () => {
  const response = await fetch('http://localhost:8080/events')

  if (!response.ok) {

  } else {
    const data = await response.json()
    return data.events
  }
}
