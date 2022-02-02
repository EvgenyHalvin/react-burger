import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { useHistory } from 'react-router-dom';

import appHeaderStyles from './app-header.module.css';
import PropTypes from 'prop-types';

import NavBar from '../nav-bar/nav-bar';
import Profile from '../profile/profile';

function AppHeader() {
  return (
    <header className={appHeaderStyles.appHeaderWrap}>
      <section className={appHeaderStyles.appHeader}>
        <NavBar />
        <Logo />
        <Profile />
      </section>
    </header>
  );
}

AppHeader.propTypes = {
  Logo: PropTypes.element,
};

export default AppHeader;
