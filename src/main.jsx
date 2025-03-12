import React, { Fragment, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './Init';
import App from './layouts/App'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.scss';
import Loader from './layouts/layoutcomponents/loader';
import CustomSwitcher from './layouts/customswitcher';
import { RouterData } from './common/routingdata';
const Landing = lazy(() => import("./layouts/landing"));

const LandingPage = lazy(() => import('./components/landingpage/landingpage'));

 
const SignIn = lazy(() => import('./components/pages/custompages/signin/signin'));
const SignUp = lazy(() => import('./components/pages/custompages/signup/signup'));
const ForgotPassword = lazy(() => import('./components/pages/custompages/forgotpassword/forgotpassword'));
const ResetPassword = lazy(() => import('./components/pages/custompages/resetpassword/resetpassword'));
const LockScreen = lazy(() => import('./components/pages/custompages/lockscreen/lockscreen'));
const UnderConstruction = lazy(() => import('./components/pages/custompages/underconstruction/underconstruction'));
const Error404 = lazy(() => import('./components/pages/custompages/error404/error404'));
const Error500 = lazy(() => import('./components/pages/custompages/error500/error500'));

const CustomAuthenticationPages = lazy(() => import('./layouts/customauthenticationpages'));

const FirebaseAuth = lazy(() => import('./layouts/firebase/firebaseauthentication/firebaseauth'));

const FirebaseSignIn = lazy(() => import('./layouts/firebase/firebaseauthentication/firebasesignIn'));

const FirebaseSignUp = lazy(() => import('./layouts/firebase/firebaseauthentication/firebasesignup'));





ReactDOM.createRoot(document.getElementById('root')).render(
  <Fragment>

    <BrowserRouter>
      <React.Suspense fallback={<Loader />}>
        <Routes>

          {/* Firebase Authentication Routes */}
          <Route path={`${import.meta.env.BASE_URL}/`} element={<FirebaseAuth />}>
            <Route index element={<FirebaseSignIn />} />
            <Route path={`${import.meta.env.BASE_URL}FirebaseAuthentication/FirebaseSignIn`} element={<FirebaseSignIn />} />
            <Route path={`${import.meta.env.BASE_URL}FirebaseAuthentication/FirebaseSignUp`} element={<FirebaseSignUp />} />
          </Route>

          {/* components Routes */}

          {RouterData.map((idx) => (
            <Route path={`${import.meta.env.BASE_URL}`} element={<App />} key={Math.random()}>
              <Route path={idx.path} element={idx.element} />
            </Route>
          ))};

          {/* Landing */}
          <Route path="/" element={<Landing />}>
            <Route path={`${import.meta.env.BASE_URL}landingpage`} element={<LandingPage />} />
          </Route>

         

          {/* Custom Authentication Pages */}
          <Route path="/" element={<CustomAuthenticationPages />}>
            <Route path={`${import.meta.env.BASE_URL}pages/custompages/signin`} element={<SignIn />} />
            <Route path={`${import.meta.env.BASE_URL}pages/custompages/signup`} element={<SignUp />} />
            <Route path={`${import.meta.env.BASE_URL}pages/custompages/forgotpassword`} element={<ForgotPassword />} />
            <Route path={`${import.meta.env.BASE_URL}pages/custompages/resetpassword`} element={<ResetPassword />} />
            <Route path={`${import.meta.env.BASE_URL}pages/custompages/lockscreen`} element={<LockScreen />} />
            <Route path={`${import.meta.env.BASE_URL}pages/custompages/underconstruction`} element={<UnderConstruction />} />
            <Route path={`${import.meta.env.BASE_URL}pages/custompages/error404`} element={<Error404 />} />
            <Route path={`${import.meta.env.BASE_URL}pages/custompages/error500`} element={<Error500 />} />
            <Route path={`${import.meta.env.BASE_URL}*`} element={<Error500 />} />
          </Route>
        </Routes>



      </React.Suspense>
    </BrowserRouter>
  </Fragment>
)
