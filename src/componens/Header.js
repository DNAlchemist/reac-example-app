import React, { Component } from 'react';
import HeaderMenu from './HeaderMenu';


// TODO: Нужно получить статус авторизации
export default class Header extends Component {
  render() {
    return (
        <HeaderMenu authStatus={Math.random() >= 0.5} />
    );
  }
}
