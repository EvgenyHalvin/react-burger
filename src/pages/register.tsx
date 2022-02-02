import { BaseSyntheticEvent, ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import {
  EmailInput,
  PasswordInput,
  Input,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

import Medium from '../typography/medium';
import Default from '../typography/default';

import api from 'utils/api';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 480px;
`;

const TitleWrap = styled.div`
  margin: 0 auto 24px;
  color: #f2f2f3;
`;

const Form = styled.form`
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  margin-bottom: 24px;
`;

const ButtonWrapper = styled.div`
  margin: auto;
  width: 253px;
`;

const HelpInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
`;

const HelpInfoRow = styled.div`
  display: flex;
  margin: auto;
  color: #f2f2f3;
  margin-bottom: 16px;
`;

const HelpInfoGap = styled.div`
  width: 8px;
`;

const HelpInfoLink = styled(Link)`
  text-decoration: none;
  color: #4c4cff;
`;

const Register = () => {
  const [signUpData, setSignUpData] = useState<{
    email?: string;
    password?: string;
    userName?: string;
  }>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value }: { name: string; value: string } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const onSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();

    api.registerUser(signUpData).then((res) => console.log(res));
  };

  return (
    <Wrapper>
      <TitleWrap>
        <Medium>Регистрация</Medium>
      </TitleWrap>
      <Form>
        <InputWrapper>
          <Input
            type="text"
            placeholder="Имя"
            name="userName"
            value={signUpData.userName || ''}
            onChange={handleChange}
          />
        </InputWrapper>
        <InputWrapper>
          <EmailInput
            name="email"
            value={signUpData.email || ''}
            onChange={handleChange}
          />
        </InputWrapper>
        <InputWrapper>
          <PasswordInput
            name="password"
            value={signUpData.password || ''}
            onChange={handleChange}
          />
        </InputWrapper>

        <ButtonWrapper>
          <Button onClick={onSubmit} type="primary" size="medium">
            Зарегистрироваться
          </Button>
        </ButtonWrapper>
      </Form>

      <HelpInfoWrapper>
        <HelpInfoRow>
          <Default>Уже зарегистрированы?</Default>

          <HelpInfoGap />

          <HelpInfoLink to="/login">
            <Default>Войти</Default>
          </HelpInfoLink>
        </HelpInfoRow>
      </HelpInfoWrapper>
    </Wrapper>
  );
};

export default Register;
