import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FirebaseLogin from './pages/FirebaseLogin';
import TwitterApp from './apps/Twitter';
import IndexPage from './pages/IndexPage';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={FirebaseLogin} />
                <Route path="/apps/Twitter" component={TwitterApp} />
                <Route path="/indexpage" component={IndexPage} />
            </Switch>
        </Router>
    );
}

export default App; 