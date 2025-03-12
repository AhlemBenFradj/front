import { FC, Fragment,useEffect } from 'react';
import BacktoTop from '../layouts/layoutcomponents/backtotop';
import LandingPage from '../components/landingpage/landingpage';
import Landingswitcher from './layoutcomponents/landingswitcher';
import { Provider } from 'react-redux';
import store from '../common/redux/store';

export const Landing = () =>{

  document.querySelector("body")?.classList.add('landing-page' ,'horizontalmenu');

  useEffect(() => {
    document.querySelector("body")?.classList.remove("layout-boxed");

  }, []);

  return(
    <Fragment>
         <Provider store={store}>
    <Landingswitcher/>
<LandingPage/>
   <BacktoTop />
   </Provider>
  </Fragment>
  )
  };

export default Landing;
