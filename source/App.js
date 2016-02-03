import React, {Component} from 'react';

class Hello extends Component {
  render() {
    var place = "World"
    return (
      <h1>Hello {place}!</h1>
    );
  }
}

// Parent Component
class GroceryList extends Component {
  render() {
    return (
      <ul>
        <ListItem quantity="2">Bread</ListItem>
        <ListItem quantity="10">Eggs</ListItem>
        <ListItem quantity="2">Milk</ListItem>
      </ul>
    );
  }
}

// Child Component
class ListItem extends Component {
  render() {
    return (
      <li>
        {this.props.quantity} x {this.props.children}
      </li>
    );
  }
}

// React.render(<Hello />, document.getElementById('root'));
React.render(<GroceryList />, document.getElementById('root'));
