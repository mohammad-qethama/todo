import React from 'react';

import ToDo from './components/todo/todo-connected.js';
import SettingsPage from './components/todo/settings.js';
import SettingContextProvider from './context/todo/settings-context.js';
import './app.scss';

export default class App extends React.Component {
  render() {
    return (
      <>
        <SettingContextProvider>
          <ToDo />
          <SettingsPage/>
        </SettingContextProvider>

      </>
    );
  }
}
