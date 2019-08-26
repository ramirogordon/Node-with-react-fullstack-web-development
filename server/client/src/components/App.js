import { Provider} from 'react-redux';
import React from 'react';
import store from '../store';

const App = () => {
    return (
        <Provider store={store}>
            <div>
                Hi there!
            </div>
        </Provider>
    );
}

export default App;