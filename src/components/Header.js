import React from 'react';
import logo from '../assets/pokemon-logo.png';

class Header extends React.Component {
    render() {
        return(
            <div>
                <img src={logo} alt="pokemon logo" width={"35%"}/>
                <h4>
                    Generation 1
                </h4>
            </div>
        )
    }
}

export default Header;