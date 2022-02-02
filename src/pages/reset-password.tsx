import { BaseSyntheticEvent, ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import {
  Input,
  PasswordInput,
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
  width: 167px;
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

const ResetPassword = () => {
  const [resetData, setResetData] = useState<{
    newPassword?: string;
    verifyCode?: string;
  }>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value }: { name: string; value: string } = e.target;
    setResetData({ ...resetData, [name]: value });
  };

  const onSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();

    api.resetPassword(resetData).then((res) => console.log(res));
  };

  return (
    <Wrapper>
      <TitleWrap>
        <Medium>Восстановление пароля</Medium>
      </TitleWrap>
      <Form>
        <InputWrapper>
          <PasswordInput
            name="newPassword"
            value={resetData.newPassword || ''}
            onChange={handleChange}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            placeholder="Введите код из письма"
            type="text"
            name="verifyCode"
            value={resetData.verifyCode || ''}
            onChange={handleChange}
          />
        </InputWrapper>

        <ButtonWrapper>
          <Button onClick={onSubmit} type="primary" size="medium">
            Сохранить
          </Button>
        </ButtonWrapper>
      </Form>

      <HelpInfoWrapper>
        <HelpInfoRow>
          <Default>Вспомнили пароль?</Default>

          <HelpInfoGap />

          <HelpInfoLink to="/login">
            <Default>Войти</Default>
          </HelpInfoLink>
        </HelpInfoRow>
      </HelpInfoWrapper>
    </Wrapper>
  );
};

export default ResetPassword;
