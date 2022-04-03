import { firebaseReducer } from "react-redux-firebase";
import { combineReducers } from "redux";
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { firestoreReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

export default rootReducer;