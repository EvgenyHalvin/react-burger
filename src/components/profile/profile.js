import { useHistory } from 'react-router-dom';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import profileStyles from './profile.module.css';

function Profile() {
  const history = useHistory();

  const visitProfile = () => {
    history.push('/profile');
  };

  return (
    <div className={profileStyles.profile} onClick={visitProfile}>
      <ProfileIcon type="secondary" />
      <p className="text text_type_main-default">Личный кабинет</p>
    </div>
  );
}

export default Profile;
