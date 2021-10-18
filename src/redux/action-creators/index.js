import { FETCH_POKEMONS } from "../actions";

export const fetchPokemons = (newPokemon) => {
    return (dispatch) => {
        dispatch({
            type: FETCH_POKEMONS,
            payload: newPokemon,
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
