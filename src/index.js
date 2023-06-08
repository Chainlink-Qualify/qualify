import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./assets/styles/index.css"
import { MantineProvider } from '@mantine/core'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        fontFamily: "sans-serif",
        primaryColor: "violet",
        colors: {
          violet: ['#f2ebf7', '#d8c0e6', '#c5a2da', '#ab77c9', '#8134af', '#752f9f', '#471d60', '#36164a']
        }

      }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
