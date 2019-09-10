import { BrowserRouter as Router, Route} from 'react-router-dom';
import React, { Component } from 'react';
import Header from './Header';
import store from '../store';
import { Provider } from 'react-redux';

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>Survey New</h2>;
const Landing = () => <h2>Landing</h2>;

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className='container'>
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
}

export default App;