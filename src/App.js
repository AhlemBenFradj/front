import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FirebaseLogin from './pages/FirebaseLogin';
import TwitterApp from './apps/Twitter';
import FacebookApp from './apps/Facebook';
import InstagramApp from './apps/Instagram';
import Details from './apps/details';

import IndexPage from './pages/IndexPage';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={FirebaseLogin} />
                <Route path="/apps/Twitter" component={TwitterApp} />
                <Route path="/apps/Facebook" component={FacebookApp} />
                <Route path="/apps/Instagram" component={InstagramApp} />
                <Route path="/indexpage" component={IndexPage} />
                <Route path="/details" component={Details} />

            </Switch>
        </Router>
    );
}

export default App; 