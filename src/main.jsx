import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// If you're using React Router, you would need to update it like:
// import { BrowserRouter } from 'react-router-dom'
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter basename="/portfolio">
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
