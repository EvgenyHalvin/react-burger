import React from 'react';
import navBarStyles from './nav-bar.module.css';

import { BurgerIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function NavBar() {
  return (
    <nav className={navBarStyles.menu}>
      <div className={navBarStyles.link}>
        <BurgerIcon type="primary" />
        <p className="text text_type_main-default">Конструктор</p>
      </div>
      <div className={navBarStyles.link}>
        <ListIcon type="secondary" />
        <p className="text text_type_main-default text_color_inactive">Лента заказов</p>
      </div>
    </nav>
  )
}

export default NavBar;