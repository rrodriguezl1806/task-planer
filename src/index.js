import React from 'react';
import { render } from 'react-dom';

// import App from './app/app';
import Routers from './app/router';

const appRoot = document.getElementById('root');
render(<Routers/>, appRoot);
