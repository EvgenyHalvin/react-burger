import { BaseSyntheticEvent, ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import {
  EmailInput,
  PasswordInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

import Medium from '../typography/medium';
import Default from '../typography/default';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 480px;
`;

const TitleWrap = styled.div`
  margin: 0 auto 24px;
  color: #F2F2F3;
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
  width: 128px;
`;

const HelpInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
`;

const HelpInfoRow = styled.div`
  display: flex;
  margin: auto;
  color: #F2F2F3;
  margin-bottom: 16px;
`;

const HelpInfoGap = styled.div`
  width: 8px;
`;

const HelpInfoLink = styled(Link)`
  text-decoration: none;
  color: #4c4cff;
`;

const Login = () => {
  const [signInData, setSignInData] = useState<{
    email?: string;
    password?: string;
  }>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value }: { name: string; value: string } = e.target;
    setSignInData({ ...signInData, [name]: value });
  };

  const onSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <TitleWrap>
        <Medium>Вход</Medium>
      </TitleWrap>
      <Form>
        <InputWrapper>
          <EmailInput
            name="email"
            value={signInData.email || ''}
            onChange={handleChange}
          />
        </InputWrapper>
        <InputWrapper>
          <PasswordInput
            name="password"
            value={signInData.password || ''}
            onChange={handleChange}
          />
        </InputWrapper>

        <ButtonWrapper>
          <Button onClick={onSubmit} type="primary" size="medium">
            Войти
          </Button>
        </ButtonWrapper>
      </Form>

      <HelpInfoWrapper>
        <HelpInfoRow>
          <Default>Вы — новый пользователь?</Default>

          <HelpInfoGap />

          <HelpInfoLink to="/register">
            <Default>Зарегистрироваться</Default>
          </HelpInfoLink>
        </HelpInfoRow>

        <HelpInfoRow>
          <Default>Забыли пароль?</Default>

          <HelpInfoGap />

          <HelpInfoLink to="/forgot-password">
            <Default>Восстановить пароль</Default>
          </HelpInfoLink>
        </HelpInfoRow>
      </HelpInfoWrapper>
    </Wrapper>
  );
};

export default Login;
