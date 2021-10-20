import React from 'react';
import appHeaderStyles from './app-header.module.css';
import PropTypes from 'prop-types';

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

AppHeader.propTypes = {
  Logo: PropTypes.element
}

export default AppHeader;