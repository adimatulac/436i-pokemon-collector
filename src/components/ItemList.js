import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';

class ItemList extends React.Component {
    render() {
        return(
            <table>
                <tbody>
                {this.props.items.map(item => 
                    <Item key={item.id}
                    {...item}
                    />
                )}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return {
        items: state.items
    };
}

export default connect(mapStateToProps)(ItemList);