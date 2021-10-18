import { FETCH_POKEMONS } from "../actions/index";

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
        default:
            return state;
    }
};

export default pokemonReducer;
