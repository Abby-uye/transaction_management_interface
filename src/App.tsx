import React from 'react';
import './App.css';

// import CreateAnAccount from "./components/CreateAnAccount";
 import store from './features/reduxUtils/stores';
 import { Provider } from 'react-redux';
import {useRoutes} from "react-router-dom";
import {Route} from "./features/Route/Route";

function App() {
  return (

     <Provider store={store}>
         {useRoutes(Route)}
     </Provider>

  );
}

export default App;
