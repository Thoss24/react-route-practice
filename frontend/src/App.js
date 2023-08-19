// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EventsPage from "./components/route/EventsPage";
import EditEventPage from "./components/route/EditEventPage";
import NewEventPage from "./components/route/NewEventPage";
import EventDetailPage from "./components/route/EventDetailPage";
import Error from "./components/route/Error";
import HomePage from "./components/route/HomePage";
import Root from "./components/route/Root";
import EventsRoot from "./components/route/EventsRoot";
import { loader } from "./components/route/EventsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: loader
          },
          {
            path: ":id",
            element: <EventDetailPage />,
          },
          {
            path: "new-event",
            element: <NewEventPage />,
          },
          {
            path: ":id/edit",
            element: <EditEventPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
