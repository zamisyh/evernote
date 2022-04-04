
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//Firebase config
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import {
  ReactReduxFirebaseProvider,
  getFirebase
} from 'react-redux-firebase'
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore'
import firebase from 'firebase/app'
import config from './config/firebase'

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk.withExtraArgument({
    getFirebase,
    getFirestore
  })),
  reduxFirestore(config, firebase)
)
)

const rrfProps = {
  firebase,
  config: config,
  dispatch: store.dispatch,
  createFirestoreInstance
}


ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps} >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();