import { combineReducers } from "redux";
import pokemonReducer from "./pokemonReducer";

const reducers = combineReducers({
    pokemonList: pokemonReducer,
});

export default reducers;
