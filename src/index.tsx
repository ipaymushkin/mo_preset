import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Routes from './routes';
import { Router } from 'react-router-dom';
import { history } from './routes/history';
import { Global, css } from '@emotion/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <>
    <Global
      styles={css`
        * {
          box-sizing: border-box;
        }

        html,
        body,
        #root {
          padding: 0;
          margin: 0;
          height: 100%;
        }
        html {
          background-color: rgba(0, 19, 92, 0.03);
          overflow-x: hidden;
        }

        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-track {
        }

        ::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.12);
          border-radius: 20px;
        }
      `}
    />
    <Router history={history}>
      <Routes />
    </Router>
    <ToastContainer position='bottom-center' theme='dark' />
  </>,
);
