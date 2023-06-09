import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./assets/styles/index.css"
import { MantineProvider } from '@mantine/core'
import {Notifications} from "@mantine/notifications"
const root = ReactDOM.createRoot(document.getElementById('root'));


const queryClient = new QueryClient()


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
      <Notifications></Notifications>
      <QueryClientProvider client={queryClient}>
      <App />
      </QueryClientProvider>
    </MantineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
