import {
    FETCH_POKEMONS,
    FILTER_POKEMONS,
    CHANGE_PAGE,
    CHANGE_POKEMONS_PER_PAGE,
} from "../actions";

export const fetchPokemons = (newPokemon) => {
    return (dispatch) => {
        dispatch({
            type: FETCH_POKEMONS,
            payload: newPokemon,
        });
    };
};

export const filterPokemons = (newList) => {
    return (dispatch) => {
        dispatch({
            type: FILTER_POKEMONS,
            payload: newList,
        });
    };
};

export const changePage = (newPage) => {
    return (dispatch) => {
        dispatch({
            type: CHANGE_PAGE,
            payload: newPage,
        });
    };
};

export const changeAmountPerPage = (newAmount) => {
    return (dispatch) => {
        dispatch({
            type: CHANGE_POKEMONS_PER_PAGE,
            payload: newAmount,
        });
    };
};

export const getPokemons = () => {
    return async (dispatch) => {
        try {
            const numberOfPokemon = 152;
            for (let i = 1; i < numberOfPokemon; i++) {
                const res = await fetch(
                    `https://pokeapi.co/api/v2/pokemon/${i}`,
                );
                const pokemon = await res.json();
                await dispatch(fetchPokemons(pokemon));
            }
        } catch (e) {
            console.log(e);
        }
    };
};
