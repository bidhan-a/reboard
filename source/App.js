import React from 'react';
import KanbanBoard from './KanbanBoard';

// Each card in the cardList represent one card in UI.
// It can either be in To Do, In Progress, or Done board
// which is determined by the card's status.
let cardsList = [
  {
      id: 1,
      title: "Read the Book",
      description: "I should read the whole book",
      status: "in-progress",
      tasks: []
  },
  {
      id: 2,
      title: "Write some code",
      description: "Code along with the samples in the book",
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
React.render(<KanbanBoard cards={cardsList} />, document.getElementById('root'));
