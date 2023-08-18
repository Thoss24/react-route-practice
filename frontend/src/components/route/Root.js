import MainNavigation from "../MainNavigation";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <Fragment>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
        </Fragment>
    )
};

export default Root;