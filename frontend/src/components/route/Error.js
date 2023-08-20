import ErrorContent from "../ErrorContent";
import { useRouteError } from "react-router-dom";
import { Fragment } from "react";
import MainNavigation from "../MainNavigation";

const Error = () => {
  const error = useRouteError();

  let title = "An error occurred";
  let message = "Something went wrong";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not found";
    message = "Could not find resource or page";
  }

  return (
    <Fragment>
        <MainNavigation />
      <ErrorContent title={title} message={message}></ErrorContent>
    </Fragment>
  );
};

export default Error;
