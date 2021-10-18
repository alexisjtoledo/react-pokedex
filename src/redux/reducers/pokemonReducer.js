import { FETCH_POKEMONS, FILTER_POKEMONS, CHANGE_PAGE } from "../actions/index";

const initialState = {
    pokemons: [],
    filteredPokemons: [],
    totalAmount: 151,
    pokemonsPerPage: 20,
    currentPage: 1,
    openedPokemon: null,
    isMobile: false,
};

const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POKEMONS:
            return {
                ...state,
                pokemons: [...state.pokemons, action.payload],
                filteredPokemons: [...state.pokemons, action.payload],
            };
        case FILTER_POKEMONS:
            return {
                ...state,
                filteredPokemons: action.payload,
            };
        case CHANGE_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };
        default:
            return state;
    }
};

export default pokemonReducer;
