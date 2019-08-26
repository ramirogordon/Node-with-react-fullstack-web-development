import { Provider} from 'react-redux';
import React from 'react';
import store from '../store';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Header';

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>Survey New</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <Router>
                    <div>
                        <Header />
                        <Route exact path='/' component={Landing} />
                        <Route exact path='/survery' component={Dashboard} />
                        <Route path='/survery/new' component={SurveyNew} />
                    </div>
                </Router>
            </div>
        </Provider>
    );
}

export default App;