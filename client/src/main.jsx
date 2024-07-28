import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { AppProvider} from '../store/Auth.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
<ToastContainer


/>
{/* Same as */}
    <App />

  {/* <React.StrictMode> */}
  {/* </React.StrictMode> */}
  </AppProvider>
)
