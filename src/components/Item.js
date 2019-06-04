import React from 'react';
import { deleteItem } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import DetailModal from './DetailModal';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.handleButton = this.handleButton.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  handleButton = () => {
    this.props.deleteItem(this.props.id);
  }

  handleModal = () => {
    console.log(this.props.details);
  }

  render() {
    return(
      <tr>
        <td>
          <span onClick={this.handleModal}>{this.props.title}</span>
        </td>
        <td>
          {this.props.details}
        </td>
        <td>
        <button onClick={this.handleButton}>delete</button>
        </td>
      </tr>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({deleteItem}, dispatch);
}

export default connect(() => {return {}}, mapDispatchToProps)(Item);