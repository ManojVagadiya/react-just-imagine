import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import App from  './App.js'
import './index.css';

ReactDOM.render(
    <GoogleOAuthProvider clientId="429060689352-2df83u025p7oqp5b72q5mdqj57d5gsno.apps.googleusercontent.com">
    <Router>
        <App />
    </Router>,
    </GoogleOAuthProvider>,
    document.getElementById('root')
);

