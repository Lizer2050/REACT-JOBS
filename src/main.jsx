import React from 'react'
import ReactDOM from 'react-dom/client' // Library that allows you to import to the DOM
import App from './App.jsx'
import './index.css'


// SERVES AS AN ENTRY POINT AND MOUNTS YOUR REACT APPLICATION ON THE DOM
// The app is mounted on specific DOM element, usually a <div> with an id="root" inside index.html.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
   <App /> 
  </React.StrictMode>,
)
