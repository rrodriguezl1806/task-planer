import React from 'react';
import { render } from 'react-dom';

import App from './app/app';
import './index.sass';

const appRoot = document.getElementById('root');
render(<App/>, appRoot);
