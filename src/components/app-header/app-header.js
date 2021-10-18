import React from 'react';
import appHeaderStyles from './app-header.module.css';

import NavBar from '../nav-bar/nav-bar';
import Profile from '../profile/profile';

import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeader() {
  return (
    <header className={appHeaderStyles.appHeaderWrap}>
      <section className={appHeaderStyles.appHeader}>
        <NavBar />
        <Logo />
        <Profile />
      </section>
    </header>
  )
}

export default AppHeader;