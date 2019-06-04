import React from 'react';
import { deleteItem } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton = () => {
    this.props.deleteItem(this.props.id);
  }

  render() {
    return(
      <tr>
        <td>
        {this.props.title}
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