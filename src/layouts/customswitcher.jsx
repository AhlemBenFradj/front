import React, { Fragment, useEffect } from 'react'
import Sidebar from '../layouts/layoutcomponents/sidebar';
import Rightside from '../layouts/layoutcomponents/rightside';
import { Outlet } from 'react-router-dom';
import Footer from '../layouts/layoutcomponents/footer';
import BacktoTop from '../layouts/layoutcomponents/backtotop';
import { Provider } from 'react-redux';
import store from '../common/redux/store';
import SwitcherHeader from '../layouts/layoutcomponents/switcherheader';


export const RightSideBarclose = () => {
    //rightsidebar close function
    document.querySelector(".sidebar-right").classList.remove("sidebar-open");
};


function CustomSwitcher() {

    //custompage-layout  custom-classes removing 

    useEffect(() => {
        document.querySelector("body")?.classList.remove("ltr", "bg-primary-transparent", "error-page1", "main-body", "error-2");

    }, []);

    return (
        <Fragment>
            <Provider store={store}>
                <div className='horizontalMenucontainer'>
                    <div className="page custom-index">
                        <SwitcherHeader />
                        <div className="sticky" style={{ paddingTop: "-63px" }}>
                            <Sidebar />
                        </div>
                        <div className="jumps-prevent" style={{ paddingTop: "63px" }}></div>
                        <div className="main-content app-content">
                            <div className="main-container container-fluid" onClick={() => RightSideBarclose()}>
                                <div className='side-app'>
                                    <Outlet />
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                  
                    <Rightside />
                    <BacktoTop />
                </div>
            </Provider>
        </Fragment>
    )
}

export default CustomSwitcher
