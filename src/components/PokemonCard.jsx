/* REACT */
import React from "react";

const PokemonCard = ({ data }) => {
    const { id, name, weight, height, abilities, sprites, types } = data;



    return (
        <div className="card">
            <div className="card-header">
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

                <button className="card-action-btn" >More details</button>
            </div>
        </div>
    );
};

export default PokemonCard;
