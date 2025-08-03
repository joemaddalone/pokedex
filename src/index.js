import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import 'poke-i18n'; // initializate i18n
import './util/no-focus-event';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
