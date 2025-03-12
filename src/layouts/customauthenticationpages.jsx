import React, { Fragment, useEffect } from 'react';
import Switcher from '../layouts/layoutcomponents/switcher';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../common/redux/store';

function CustomAuthenticationPages() {

    useEffect(() => {
        document.querySelector("body")?.classList.add("ltr", "bg-primary-transparent", "error-page1", "main-body", "error-3");
    }, [])

    return (
        <Fragment>
            <Provider store={store}>
            <Switcher />
            <div className="page justify-content-center overflow-hidden">
                <Outlet />
            </div>
            </Provider>
        </Fragment>
    )
}
export default CustomAuthenticationPages;
