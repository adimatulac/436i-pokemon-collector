import React from 'react';
import { connect } from 'react-redux';
import Pokemon from '../components/Pokemon';
import { deletePokemon } from '../actions';

function PokemonList({ pokemon, onDelete }) {

    if (pokemon.length === 0) {
        return (
            <div className="card text-white bg-danger mb-3">
                <div className="card-body">
                    <h5 className="card-title">Uh-oh!</h5>
                    <p className="card-text">No Pokemon in records – go catch some!</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="row justify-content-center">
                {pokemon.map(p => {
                    return (
                        <div className="col-auto mb-3" key={ p.id }>
                            <div className="card h-100 pokemon-card" key={ p.id }>
                                <Pokemon poke={ p } onDelete={ onDelete } key={ p.id } />
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return  {
        pokemon: state.pokemon
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: id => {
            dispatch(deletePokemon(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);