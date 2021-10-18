/* REACT */
import React from "react";
/* REDUX */
import { useSelector } from "react-redux";
/* COMPONENTS */
import PokemonCard from "./PokemonCard";

const Dashboard = () => {
    /* REDUX STATE */
    const data = useSelector((state) => state.pokemonList);

    return (
        <div className="dashboard-container">
            {data.pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.id} data={pokemon} />
            ))}
        </div>
    );
};

export default Dashboard;
