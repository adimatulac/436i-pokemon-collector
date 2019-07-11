import { connect } from 'react-redux';
import { addPokemon } from '../actions';
import InputForm from '../components/InputForm';

const mapDispatchToProps = (dispatch) => {
    return {
        onAddPokemon: pokemon => {
            dispatch(addPokemon(pokemon));
        }
    };
};

export default connect(null, mapDispatchToProps)(InputForm);