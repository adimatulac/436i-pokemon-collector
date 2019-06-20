import React from 'react';
import { deleteItem } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Popup from './Popup';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.handleButton = this.handleButton.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
    this.state = {
      showPopup: false
    };
  }

  handleButton = () => {
    this.props.deleteItem(this.props.id);
  }

  togglePopup = () => {
    // console.log(this.props.details);
    console.log(this.state);
    this.setState({
      showPopup: !this.state.showPopup
    });
    console.log(this.state);
  }

  render() {
    return(
      <tr>
        <td>
          <span className="name-link" onClick={this.togglePopup}>{this.props.title}</span>
        </td>
        <td>
          {this.props.details}
        </td>
        <td>
        <button className="btn btn-danger fix-padding" onClick={this.handleButton}>delete</button>
        </td>
        <td>
        {this.state.showPopup ? (<Popup text={this.props.details} closePopup={this.togglePopup} />) : null}
        </td>
      </tr>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({deleteItem}, dispatch);
}

export default connect(() => {return {}}, mapDispatchToProps)(Item);