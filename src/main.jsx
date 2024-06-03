import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

// import PropTypes from 'prop-types';

// Do Proptypes validation this way:

// Component.propTypes = {
//   item1: PropTypes.type,
//   item2: PropTypes.type,
//   }
