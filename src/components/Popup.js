import React from 'react';

class Popup extends React.Component {
    render() {
      return (
        <div className="popup">
            {/* <h4>{this.props.text}</h4> */}
          <a href={"http://pokemondb.net/pokedex/" + this.props.text}>
            <img src={"https://img.pokemondb.net/sprites/black-white/anim/normal/" + this.props.text + ".gif"} alt={this.props.text}/>
            </a>
            {/* <button onClick={this.props.closePopup}>close</button> */}
        </div>
      );
    }
}

export default Popup;
