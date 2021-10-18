/* REACT */
import React, { useState } from "react";
/* REDUX */
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux/index";

const Navigation = ({ bottom }) => {
    return (
        <div className="nav-container">
            {bottom ? <BottomNav /> : <TopNav />}
        </div>
    );
};

const TopNav = () => {
    /* REDUX ACTIONS */
    const dispatch = useDispatch();

    const { filterPokemons } = bindActionCreators(actionCreators, dispatch);

    /* REDUX STATE */
    const data = useSelector((state) => state.pokemonList);

    /* LOCAL STATE */
    const [searchValue, setSearchValue] = useState("");

    /**
     * Filters the full array of pokemons according to the search string.
     * @param {String} value from input.
     */
    const filterList = (value) => {
        setSearchValue(value);
        let normalizedValue = value.toLowerCase();
        const filteredResults = data.pokemons.filter((pokemon) => {
            return pokemon.name.indexOf(normalizedValue) > -1;
        });
        filterPokemons(filteredResults);
    };

    return (
        <div className="nav-container">
            <span className="input-container">
                <div className="search-icon">
                    <i className="fas fa-search"></i>
                </div>
                <input
                    type="text"
                    className="top-input"
                    placeholder="Search"
                    value={searchValue}
                    onChange={(e) => {
                        filterList(e.target.value);
                    }}
                />
                <div
                    className="top-input-clear-btn"
                    onClick={() => filterList("")}
                >
                    <i className="fas fa-times-circle"></i>
                </div>
            </span>
            <span className="nav-label">Sort:&nbsp;</span>
            <select className="top-selector">
                <option value="id">Number</option>
                <option value="name">Name</option>
                <option value="height">Height</option>
                <option value="weight">Weight</option>
            </select>
        </div>
    );
};

const BottomNav = () => {
    return (
        <div className="nav-container">
            <div className="bottom-button-container">
                <button className="nav-btn left">
                    <i className="fas fa-caret-left"></i>
                </button>
                <button className="nav-btn">#</button>
                <button className="nav-btn right">
                    <i className="fas fa-caret-right"></i>
                </button>
            </div>

            <span className="nav-label">Show&nbsp;</span>
            <div className="bottom-button-container">
                <button className="nav-btn left">10</button>
                <button className="nav-btn">20</button>
                <button className="nav-btn right">50</button>
            </div>
            <span className="nav-label">&nbsp;per page.</span>
        </div>
    );
};

export default Navigation;
