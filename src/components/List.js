import React from 'react';
import ListItems from './ListItems';


class List extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [
          {text: "carrots", details: "good for you", id: 1},
          {text: "tater tots", details: "not really good for you", id: 2},
          {text: "arsenic", details: "definitely not good for you", id: 3}
      ], text: '', details: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>
          <h3>Things</h3>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="text">
              What do you need?
            </label>
            <input
              id="text"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <label htmlFor="details">
              Details
            </label>
            <textarea
              id="details"
              onChange={this.handleChange}
              value={this.state.details}
            />
            <button>
              Add #{this.state.items.length + 1}
            </button>
          </form>
          <ListItems items={this.state.items} viewDetails={this.viewDetails} deleteItem={this.deleteItem} />
        </div>
      );
    }

    viewDetails = (id) => {
        console.log(id);
    }

    deleteItem = (id) => {
        const items = this.state.items.filter(item => {
            return item.id !== id
        });
        this.setState({
            items: items
        });
    }
  
    handleChange = (e) => {
      this.setState({ [e.target.id]: e.target.value });
    }
  
    handleSubmit = (e) => {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = {
        text: this.state.text,
        details: this.state.details,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: '',
        details: ''
      }));
    }
}

export default List;