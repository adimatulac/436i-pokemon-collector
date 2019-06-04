import React from 'react';
import logo from '../assets/pokemon-logo.png';

class Header extends React.Component {
    render() {
        return(
            <div className="container header">
                <img src={logo} alt="pokemon logo" width={"80%"}/>
                <h4>
                    Sprites
                </h4>
                <h6>
                    (up to generation 6)
                </h6>
            </div>
        )
    }
}

export default Header;