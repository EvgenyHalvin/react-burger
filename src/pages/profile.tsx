import { BaseSyntheticEvent, ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useHistory, useLocation } from 'react-router-dom';

import Default from '../typography/default';
import InactiveColor from 'typography/inactive-color';
import Medium from '../typography/medium';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 120px auto;
  width: 100%;
  max-width: 1240px;
  padding: 0 20px;
  justify-content: space-between;
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
`;

const NavLink = styled(Link)<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 64px;
  text-decoration: none;
  transition: color .15s;
  color: ${({ isActive }) => (isActive ? '#f2f2f3' : '#8585ad')};
  &:hover {
    color: #f2f2f3;
  }
`;

const AddInfo = styled.div`
  margin-top: 80px;
  width: 100%;
  color: #8585ad;
  opacity: 0.4;
`;

const EmptyPlace = styled.div`
  width: 320px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 320px;
`;

const InputWrapper = styled.div`
  margin-bottom: 24px;
`;

const ButtonWrapper = styled.div`
  margin: auto;
  width: 167px;
`;

const Cancel = styled.button`
  display: flex;
  align-items: center;
  margin-right: 28px;
  color: #4c4cff;
  border: none;
  background: none;
  outline: none;
  padding: 16px 8px;
  cursor: pointer;
`;

const Buttons = styled.div`
  display: flex;
  margin-left: auto;
  margin-top: 24px;
`;

const Profile = () => {
  const [userData, setUserData] = useState<{
    userName?: string;
    login?: string;
    password?: string;
  }>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value }: { name: string; value: string } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const onSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
  };

  const history = useHistory();
  const { pathname } = useLocation();

  const isMatchPath = (path: string) => {
    return pathname === path;
  };

  return (
    <Wrapper>
      <Navigation>
        <NavLink to="/profile" isActive={isMatchPath('/profile')}>
          <Medium>Профиль</Medium>
        </NavLink>

        <NavLink to="/profile/orders" isActive={isMatchPath('/profile/orders')}>
          <Medium>История заказов</Medium>
        </NavLink>

        <NavLink
          to="/profile/orders/"
          isActive={isMatchPath('/profile/orders/')}
        >
          <Medium>Выход</Medium>
        </NavLink>

        <AddInfo>
          <InactiveColor>
            В этом разделе вы можете изменить свои персональные данные
          </InactiveColor>
        </AddInfo>
      </Navigation>

      <Form>
        <InputWrapper>
          <Input
            placeholder="Имя"
            type="text"
            name="userName"
            value={userData.userName || ''}
            onChange={handleChange}
          />
        </InputWrapper>
        <InputWrapper>
          <EmailInput
            name="email"
            value={userData.login || ''}
            onChange={handleChange}
          />
        </InputWrapper>
        <InputWrapper>
          <PasswordInput
            name="password"
            value={userData.password || ''}
            onChange={handleChange}
          />
        </InputWrapper>

        <Buttons>
          <Cancel onClick={() => {}}>
            <Default>Отмена</Default>
          </Cancel>

          <ButtonWrapper>
            <Button onClick={onSubmit} type="primary" size="medium">
              Сохранить
            </Button>
          </ButtonWrapper>
        </Buttons>
      </Form>

      <EmptyPlace />
    </Wrapper>
  );
};

export default Profile;
