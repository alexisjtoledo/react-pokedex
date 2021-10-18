/* REACT */
import React, { useEffect, useState } from "react";
/* REDUX */
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux/index";

const PokemonCard = ({ data }) => {

    /* REDUX ACTION */
    const dispatch = useDispatch();
    const { uploadPokemon } =
        bindActionCreators(actionCreators, dispatch);

    /* PARAMS */
    const { id, name, weight, height, abilities, sprites, types } = data;

    /* LOCAL STATE */
    const [primaryColor, setPrimaryColor] = useState('');
    const [secondaryColor, setSecondaryColor] = useState('');

    /**
     * Returns a color value according to the type/s of each Pokemon
     * @param {String} type Type of Pokemon
     * @return {String} HEX color value
     */
    const getColor = (type) => {
        switch (type) {
            case 'bug':
                return '#3C9950'
            case 'dark':
                return '#595978'
            case 'dragon':
                return '#62CAD9'
            case 'electric':
                return '#E2BF2D'
            case 'fairy':
                return '#E91368'
            case 'fighting':
                return '#EF6239'
            case 'fire':
                return '#FD4B5A'
            case 'flying':
                return '#94B2C7'
            case 'ghost':
                return '#906791'
            case 'grass':
                return '#27CB50'
            case 'ground':
                return '#6E491F'
            case 'ice':
                return '#86D2F5'
            case 'normal':
                return '#CA98A6'
            case 'poison':
                return '#9B69DA'
            case 'psychic':
                return '#F71D92'
            case 'rock':
                return '#8B3E22'
            case 'steel':
                return '#43BD94'
            case 'water':
                return '#85A8FB'
            default:
                return '#E2E8E7'
        }
    }

    /**
     * Gets the type/s from the params
     * Sets the color/s for the background color/gradient
     */
    const getPokemonTypes = () => {
        let primaryType, secondaryType
        if (types.length === 1) {
            primaryType = types[0].type.name
            secondaryType = types[0].type.name
        } else {
            const [first, second] = types;
            primaryType = first.type.name
            secondaryType = second.type.name
        }
        setPrimaryColor(getColor(primaryType));
        setSecondaryColor(getColor(secondaryType));
    }

    useEffect(() => {
        getPokemonTypes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="card">
            <div className="card-header" style={{background: `linear-gradient(45deg, ${primaryColor}, ${secondaryColor})`}}>
                    <span className="card-id"><span>&#35;</span>{id}</span>
                <img
                    src={sprites.other.['official-artwork'].front_default}
                    alt={`${name}'s official artwork`}
                    className='card-img'
                />
            </div>

            <div className="card-body">

                <h1 className="card-title">{name}</h1>

                <div className="card-size">
                    <div className="card-weight"><i className="fas fa-weight-hanging"></i> {(weight/10)}Kg.</div>
                    <div className="card-height"><i className="fas fa-arrows-alt-v"></i> {(height/10)}m.</div>
                </div>

                <h3 className='card-text'>Abilities:</h3>
                <div className="card-abilities">
                    {abilities.map((ability, i) => (
                        <div className="abilitie-pill" key={i}>{ability.ability.name}</div>
                    ))}
                </div>

                <button
                    className="card-action-btn"
                    onClick={() => {uploadPokemon({...data, primaryColor: primaryColor, secondaryColor: secondaryColor})}} 
                >
                    More details
                </button>
            </div>
        </div>
    );
};

export default PokemonCard;
