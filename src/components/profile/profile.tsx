import React from 'react';
import profileStyles from './profile.module.css';

import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function Profile() {
  return(
    <div className={profileStyles.profile}>
      <ProfileIcon type="secondary" />
      <p className="text text_type_main-default text_color_inactive">Личный кабинет</p>
    </div>
  )
}

export default Profile;