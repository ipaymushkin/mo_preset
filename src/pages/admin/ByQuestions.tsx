// @ts-nocheck
import { Card, CardContent, Typography, ButtonGroup, IconButton } from '@mui/material';
import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { questions } from '../main/meta';
import { groupBy } from 'lodash';
import styled from '@emotion/styled';
import Highcharts from 'highcharts';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartIcon from '@mui/icons-material/PieChart';

interface Props {
  meta: any;
}

interface QuestionProps {
  idx: number;
  title: string;
  details: any;
  options: number[];
}

const Question: FC<QuestionProps> = ({ idx, title, details, options }) => {
  const [chartType, setChartType] = useState('column');
  const ref = useRef<any>();

  useEffect(() => {
    const data = Object.keys(details.answers).map((key) => {
      const isRightAnswer = Number(key) === details.rightIndex;
      return {
        name: `${options[key].title}${isRightAnswer ? ` (Правильный ответ)` : ''}`,
        y: details.answers[key].length,
      };
    });
    Highcharts.chart(ref.current, {
      chart: {
        type: chartType,
      },
      title: {
        text: '',
      },
      subtitle: {
        text: '',
      },
      credits: {
        enabled: false,
      },
      accessibility: {
        announceNewData: {
          enabled: true,
        },
      },
      xAxis: {
        type: 'category',
      },
      yAxis: {
        title: {
          text: 'Количество ответов',
        },
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y}',
          },
        },
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.y}',
          },
        },
      },
      tooltip: {
        headerFormat: '',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>',
      },
      series: [
        {
          name: 'Ответы',
          colorByPoint: true,
          data,
        },
      ],
    });
  }, [details, chartType]);

  return (
    <Card sx={{ marginTop: '10px' }}>
      <CardContent>
        <CardHeader>
          <Typography variant='h6' component='div'>
            Вопрос №{idx + 1}. {title}
          </Typography>
          <ButtonsWrapper>
            <ButtonGroup variant='contained'>
              <IconButton color='primary' onClick={() => setChartType('column')}>
                <BarChartIcon />
              </IconButton>
              <IconButton color='primary' onClick={() => setChartType('pie')}>
                <PieChartIcon />
              </IconButton>
            </ButtonGroup>
          </ButtonsWrapper>
        </CardHeader>
        <ChartContainer ref={ref} />
      </CardContent>
    </Card>
  );
};

const ButtonsWrapper = styled.div`
  display: flex;
`;

const CardHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const ByQuestions: FC<Props> = ({ meta: metaProps }) => {
  const meta = useMemo(() => {
    return questions.map((el, idx) => {
      return {
        ...el,
        answers: groupBy(metaProps.map((el: any) => el.answers[idx])),
      };
    });
  }, [metaProps]);

  return (
    <>
      {questions.map((el, idx) => {
        return <Question key={`question-${idx}`} idx={idx} {...el} details={meta[idx]} />;
      })}
    </>
  );
};

export default ByQuestions;
