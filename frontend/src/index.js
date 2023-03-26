// Starting point of our react application
// This is the parent file, everything else is called by this
import React from "react";
import ReactDOM from "react-dom/client";
import "./css/App.css";
import App from "./App";
import { Provider } from "react-redux";
import cmsReducer from "./store/reducers/cms";
import lightboxReducer from "./store/reducers/lightbox";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

// Setting up our Redux store.
// This is where all of our apps state variables are stored.
// All data from Strapi is loaded into the redux store
const rootReducer = combineReducers({
  cms: cmsReducer,
  lightbox: lightboxReducer,
});
const store = configureStore({ reducer: rootReducer });

// Render our application into public/index.html at the #root component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
