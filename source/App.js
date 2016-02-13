import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import KanbanBoardContainer from './KanbanBoardContainer';
import KanbanBoard from './KanbanBoard';
import EditCard from './EditCard';
import NewCard from './NewCard';

// Each card in the cardList represent one card in UI.
// It can either be in To Do, In Progress, or Done board
// which is determined by the card's status.
let cardsList = [
  {
      id: 1,
      title: "Read a Book",
      description: "I should read the whole book",
      color: "#BD8D31",
      status: "in-progress",
      tasks: []
  },
  {
      id: 2,
      title: "Write some code",
      description: "The repo for this project can be found at [github](https://github.com/bidhan-a/reboard).",
      color: "#3A7E28",
      status: "todo",
      tasks: [
        {
          id: 1,
          name: "ContactList Example",
          done: true
        },
        {
          id: 2,
          name: "Kanban Example",
          done: false
        },
        {
          id: 3,
          name: "My own experiments",
          done: false
        }
      ]
   },
  ];

// Pass the cardsList to KanbanBoard component.
// React.render(<KanbanBoard cards={cardsList} />, document.getElementById('root'));
// render(<KanbanBoardContainer />, document.getElementById('root'));
render((
  <Router history={browserHistory}>
    <Route component={KanbanBoardContainer}>
      <Route path="/" component={KanbanBoard}>
        <Route path="new" component={NewCard} />
        <Route path="edit/:card_id" component={EditCard} />
      </Route>
    </Route>
  </Router>
), document.getElementById('root'));
