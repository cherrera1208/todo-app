import React from 'react';
import Auth from './components/isAuth.jsx';
import Login from './components/login.jsx';
import AuthContext from './context/auth.js';
import ToDo from './components/todo.jsx';
import SettingsProvider from './context/setting.js';
import './styles/app.css';

export default class App extends React.Component {
  render() {
    return (
      <SettingsProvider>
        <AuthContext>
        <Login />

        <Auth>
          <div>Any valid user can see this</div>
        </Auth>

        <Auth capability="create">
          <div>Users with create access can see this</div>
        </Auth>

        <Auth capability="update">
          <div>Users with update access can see this</div>
        </Auth>

        <Auth capability="delete">
          <div>Users with delete access can see this</div>
        </Auth>

        <Auth capability="read">
          <ToDo></ToDo>
        </Auth>

      </AuthContext>
        <ToDo />
      </SettingsProvider>
    );
  }
}