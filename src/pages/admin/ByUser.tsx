import React, { FC, useState } from 'react';
import styled from '@emotion/styled';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import { questions } from '../main/meta';

interface Props {
  meta: any;
}

const ByUser: FC<Props> = ({ meta }) => {
  const [selectedId, setSelectedId] = useState(meta[0]?._id);

  if (!selectedId) return null;
  const selected = meta.find((el: any) => el._id === selectedId);
  return (
    <Container>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Пользователь</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={selectedId}
          label='Пользователь'
          onChange={(e) => setSelectedId(e.target.value)}
        >
          {meta.map((el: any) => (
            <MenuItem key={el._id} value={el._id}>
              {`${el.lastName} ${el.firstName} ${el.middleName}`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Wrapper>
        {questions.map((el, idx) => {
          console.log(el, selected);
          return (
            <Card
              key={`card-${idx}`}
              sx={{
                background:
                  el.rightIndex === selected.answers[idx]
                    ? 'rgba(0, 255, 0, 0.1)'
                    : 'rgba(255, 0, 0, 0.1)',
              }}
            >
              <CardContent>
                <Typography component='div'>
                  Вопрос №{idx + 1}. <b>{el.title}</b>
                </Typography>
                <Typography component='div'>
                  Правильный ответ: <b>{el.options[el.rightIndex].title}</b>
                </Typography>
                <Typography component='div'>
                  Ответ пользователя: <b>{el.options[selected.answers[idx]].title}</b>
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    margin-top: 20px;
  }
`;

export default ByUser;
