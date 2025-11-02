import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer, Bounce } from 'react-toastify';

import { Provider } from 'react-redux'
// import { store } from './Class 7/redux/store.js';
import { cartStore } from './Class 4/cart-redux/store/cartStore.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={cartStore}>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </Provider>
  </StrictMode>,
)
