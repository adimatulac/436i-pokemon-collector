import React from 'react';

export default ({ poke: { id, name, species, type }, onDelete }) => {
    return (
        <div className="card-body">
            <div className="container" id="card-img">
                <img className="card-img-top" id="poke-shrink" src={"https://img.pokemondb.net/sprites/black-white/anim/normal/" + species + ".gif"} alt={ species } />
            </div>
            <h6 className="card-title">name: <span className="card-text p-unbolded">{ name }</span></h6>
            <h6 className="card-title">species: <span className="card-text p-unbolded">{ species }</span></h6>
            <h6 className="card-title">type: <span className="card-text p-unbolded">{ type }</span></h6>
            <button className="btn btn-danger card-btn" type="button" onClick={() => onDelete(id)}>delete</button>
        </div>
    );
};