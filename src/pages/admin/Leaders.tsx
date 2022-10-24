import React, { FC, useMemo } from 'react';
import { questions } from '../main/meta';
import { groupBy } from 'lodash';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

interface Props {
  meta: any;
}

const Leaders: FC<Props> = ({ meta: metaProps }) => {
  const meta = useMemo(() => {
    const newMeta = metaProps.map((el: any) => {
      let rightAnswers = 0;
      el.answers.forEach((answer: number, idx: number) => {
        const rightIndex = questions[idx].rightIndex;
        if (rightIndex === answer) rightAnswers += 1;
      });
      return {
        ...el,
        rightAnswers,
      };
    });
    return Object.values(groupBy(newMeta, 'rightAnswers')).reverse();
  }, [metaProps]);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Место</TableCell>
            <TableCell>ФИО</TableCell>
            <TableCell>Количество правильных ответов</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {meta.map((group, idx) => {
            return group.map((row) => {
              return (
                <TableRow key={row._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component='th' scope='row'>
                    {idx + 1}
                  </TableCell>
                  <TableCell>{`${row.lastName} ${row.firstName} ${row.middleName}`}</TableCell>
                  <TableCell>{row.rightAnswers}</TableCell>
                </TableRow>
              );
            });
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Leaders;
