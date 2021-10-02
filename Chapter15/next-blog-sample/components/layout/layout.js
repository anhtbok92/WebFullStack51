import { Fragment } from "react";
import MainNavigation from "./main-navigation";
const Layout = (props) => {
    console.log('layout');
    return (
        <Fragment>
            <MainNavigation />
            <main>{props.children}</main>
        </Fragment>
    )
}

export default Layout;