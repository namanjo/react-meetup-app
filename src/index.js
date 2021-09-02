import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

import { MeetupProvider } from './store/contextData';


ReactDOM.render(
    <MeetupProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </MeetupProvider>,
    document.getElementById('root')
);
