import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'

import './Index.css'
import Store from './Store/Store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
     <App/>
     </Provider>
  </React.StrictMode>,
)
