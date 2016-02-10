import React, {Component, PropTypes} from 'react';
import List from './List';

// Only pass the cards that have a particular status to the particular lists.

class KanbanBoard extends Component {
  render() {
    return (
      <div className="app">
        <List id="todo" title="To Do" taskCallbacks={this.props.taskCallbacks}
        cardCallbacks={this.props.cardCallbacks}
        cards={
          this.props.cards.filter((card) => card.status === "todo")
        } />

        <List id="in-progress" title="In Progress" taskCallbacks={this.props.taskCallbacks}
        cardCallbacks={this.props.cardCallbacks}
        cards={
          this.props.cards.filter((card) => card.status === "in-progress")
        } />

        <List id="done" title="Done" taskCallbacks={this.props.taskCallbacks}
        cardCallbacks={this.props.cardCallbacks}
        cards={
          this.props.cards.filter((card) => card.status === "done")
        } />

      </div>
    );
  }
};

KanbanBoard.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  taskCallbacks: PropTypes.object,
  cardCallbacks: PropTypes.object
};

export default KanbanBoard;
