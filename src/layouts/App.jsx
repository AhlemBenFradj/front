import React, { Fragment, useEffect } from 'react'
import Header from '../layouts/layoutcomponents/header';
import Switcher from '../layouts/layoutcomponents/switcher';
import Sidebar from '../layouts/layoutcomponents/sidebar';
import Rightside from '../layouts/layoutcomponents/rightside';
import { Outlet } from 'react-router-dom';
import Footer from '../layouts/layoutcomponents/footer';
import BacktoTop from '../layouts/layoutcomponents/backtotop';
import { Provider } from 'react-redux';
import store from '../common/redux/store';

export const RightSideBarclose = () => {

  //rightsidebar close function
  document.querySelector(".sidebar-right").classList.remove("sidebar-open");

  //SwitcherMenu close function
  document.querySelector(".demo_changer").classList.remove("active");
  document.querySelector(".demo_changer").style.right = "-270px";

  if(document.querySelector(".card.search-result") != null){
    document.querySelector(".card.search-result").classList.add("d-none")
  } 
};

function App() {

  document.querySelector("body")?.classList.remove('landing-page' ,'horizontalmenu');

  const SideMenuIconclose = () => {
    document.querySelector(".app")?.classList.remove("sidenav-toggled");
  }

  useEffect(() => {
    document.querySelector("body")?.classList.remove("ltr", "bg-primary-transparent", "error-page1", "main-body", "error-2");

  }, []);

  return (
    <Fragment>
      <Provider store={store}>
      <div className='horizontalMenucontainer'>
        <div className="page">
        <Switcher />
          <Header />
          <div className="sticky" style={{ paddingTop: "-63px" }}>
            <Sidebar />
          </div>
          <div className="jumps-prevent" style={{ paddingTop: "63px" }}></div>
          <div className="main-content app-content" onClick={() => {RightSideBarclose(); SideMenuIconclose()}}>
            <div className="main-container container-fluid" >
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

export default App;
