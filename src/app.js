import React from 'react';

import ToDo from './components/todo/todo-connected.js';

import './app.scss';

export default class App extends React.Component {
  render() {
    return (
      <>
        <ToDo />
      </>
    );
  }
}
