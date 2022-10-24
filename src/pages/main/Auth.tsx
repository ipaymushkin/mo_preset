import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Typography, TextField, Button } from '@mui/material';

interface Props {
  lastName: string;
  middleName: string;
  firstName: string;
  setMeta: (name: string, value: string) => void;
  setIsAuth: (value: boolean) => void;
}

const Auth: FC<Props> = ({ lastName, middleName, firstName, setMeta, setIsAuth }) => {
  return (
    <Wrapper>
      <Typography component='h1' variant='h4'>
        Тестирование
      </Typography>
      <TextField
        label='Фамилия'
        variant='outlined'
        fullWidth
        value={lastName}
        onChange={(e) => setMeta('lastName', e.target.value)}
        required
      />
      <TextField
        label='Имя'
        variant='outlined'
        fullWidth
        value={firstName}
        onChange={(e) => setMeta('firstName', e.target.value)}
        required
      />
      <TextField
        label='Отчество'
        variant='outlined'
        fullWidth
        value={middleName}
        onChange={(e) => setMeta('middleName', e.target.value)}
      />
      <Button
        variant='contained'
        disabled={!firstName || !lastName}
        onClick={() => setIsAuth(true)}
      >
        Начать тестирование
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;

  > div {
    margin-top: 20px;
  }

  > button {
    margin-top: 40px;
  }
`;

export default Auth;
