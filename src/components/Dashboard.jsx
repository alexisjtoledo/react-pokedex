/* REACT */
import React from "react";
/* REDUX */
import { useSelector } from "react-redux";
/* COMPONENTS */
import PokemonCard from "./PokemonCard";
import PokemonDetails from "./PokemonDetails";

const Dashboard = () => {
    /* REDUX STATE */
    const data = useSelector((state) => state.pokemonList);

    /* PAGINATION */
    const lastPokemonIndex = data.currentPage * data.pokemonsPerPage;
    const firstPokemonIndex = lastPokemonIndex - data.pokemonsPerPage;
    const currentPagePokemons = data.isMobile
        ? data.filteredPokemons // Shows all pokemons if the device is in Portrait mode
        : data.filteredPokemons.slice(firstPokemonIndex, lastPokemonIndex); // Shows pagination if the device is in Landscape mode

    return (
        <div className="dashboard-container">
            {data.openedPokemon !== null ? (
                <PokemonDetails />
            ) : (
                currentPagePokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.id} data={pokemon} />
                ))
            )}
        </div>
    );
};

export default Dashboard;
