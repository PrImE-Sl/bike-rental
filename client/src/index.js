import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import reportWebVitals from './reportWebVitals'
import { mainReducer } from './redux/mainReducer'

const store = createStore(
  mainReducer,
  compose(applyMiddleware(thunk))
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)


reportWebVitals();
