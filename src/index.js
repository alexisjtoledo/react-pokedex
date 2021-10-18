/* REACT */
import React from "react";
import ReactDOM from "react-dom";
/* COMPONENTS */
import App from "./App";
/* REDUX */
import { Provider } from "react-redux";
import { store } from "./redux/index";
import { getPokemons } from "./redux/action-creators/index";
/* STYLES */
import "./styles/main.sass";

// Calls the API before rendering in order to feed the Redux state
store.dispatch(getPokemons());

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root"),
);
