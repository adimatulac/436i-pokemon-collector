import React from 'react';

const ListItems = ({items, viewDetails, deleteItem}) => {
    return (
      <ul>
        {items.map(item => (
          <li key={item.id} onClick={() => {viewDetails(item.details)}}>{item.text}: {item.details}
            <button onClick={() => {deleteItem(item.id)}}>Delete</button>
          </li>
        ))}
      </ul>
    );
}

export default ListItems;