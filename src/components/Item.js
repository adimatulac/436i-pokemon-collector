import React from 'react';

const Item = () => {
    return (
          {items.map(item => (
            <li key={item.id} onClick={() => {viewDetails(item.details)}}>{item.text}: {item.details}
              <button onClick={() => {deleteItem(item.id)}}>Delete</button>
            </li>
          ))}
      );
}

export default Item;