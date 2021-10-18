/* REACT */
import React, { Fragment } from "react";
/* REDUX */
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux/index";

const PokemonDetails = () => {
    
    /* REDUX ACTIONS */
    const dispatch = useDispatch();
    const { uploadPokemon } =
        bindActionCreators(actionCreators, dispatch);
    
    /* REDUX STATE */
    const data = useSelector((state) => state.pokemonList.openedPokemon);

    return (
        <div className='details-container'>
            {/* HEADER */}
            <div className="details-img-container" style={{background: `linear-gradient(45deg, ${data.primaryColor}, ${data.secondaryColor})`}}>
                <div className="details-id">
                    <span>&#35;</span>{data.id}
                </div>
                <img 
                    src={data.sprites.other.['official-artwork'].front_default}
                    alt={`${data.name}'s official artwork`}
                    className='details-img'
                />
                <h1 className="details-name">{data.name}</h1>
                <div className="details-size">
                    <div className="details-weight"><i className="fas fa-weight-hanging"></i> {(data.weight/10)}Kg.</div>
                    <div className="details-height"><i className="fas fa-arrows-alt-v"></i> {(data.height/10)}m.</div>
                </div>
                <button 
                    onClick={() => {uploadPokemon(null)}} 
                    className='details-close-btn'
                >
                    CLOSE POKEMON
                </button>
            </div>
            {/* BODY */}
            <div className="details-main-panel">
                <div className="details-pill-container">
                    <h2 className='details-label'>Type of Pokemon:</h2>
                    {
                        data.types.map(
                            (type, i) => <div key={i} className="details-pill">{type.type.name}</div>
                        )
                    }
                </div>
                <h2 className='details-label'>Statistics:</h2>
                <h2 className='details-label secondary'>Base experience: <span>{data.base_experience}</span></h2>
                <div className="details-stats-container">
                    {
                        data.stats.map(
                            (stat, i) => <Fragment key={i}>
                                    <h2 className='details-label secondary'>{stat.stat.name}</h2>
                                    <div className="statistic">
                                        <div className="stat-background"></div>
                                        <div className="stat-active" style={{ width: `${0.198*stat.base_stat}vw` }}></div>
                                    </div>
                                </Fragment>
                        )
                    }
                </div>
                <div className="details-pill-container">
                    <h2 className='details-label'>Abilities:</h2>
                    {
                        data.abilities.map(
                            (ability, i) => <div key={i} className="details-pill">{ability.ability.name}</div>
                        )
                    }
                </div>
                <div className="details-pill-container">
                    <h2 className='details-label'>Moves:</h2>
                    {
                        data.moves.map(
                            (move, i) => <div key={i} className="details-pill">{move.move.name}</div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default PokemonDetails;