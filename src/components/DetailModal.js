import React from 'react';

class DetailModal extends React.Component {
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <h1>{this.props.details}</h1>
          <button onClick={this.props.closeModal}>close me</button>
          </div>
        </div>
      );
    }
  }

  export default DetailModal;