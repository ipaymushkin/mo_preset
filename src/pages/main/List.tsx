import React, { FC, useCallback, useState } from 'react';
import styled from '@emotion/styled';
import {
  Step,
  StepLabel,
  Stepper,
  StepContent,
  Box,
  Button,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import { questions, Item } from './meta';

interface Props {
  setAnswer: (value: number, step: number) => void;
  meta: any;
}

const List: FC<Props> = ({ setAnswer, meta }) => {
  const { answers } = meta;
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = useCallback(() => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }, []);

  const handleBack = useCallback(() => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }, []);

  const onSend = useCallback(() => {
    console.log('отправить результат', meta);
  }, [meta]);

  const handleAnswer = useCallback(
    (value: string) => {
      setAnswer(Number(value), activeStep);
    },
    [activeStep],
  );

  return (
    <Wrapper>
      <Stepper activeStep={activeStep} orientation='vertical'>
        {questions.map((step: Item, idx) => {
          const value = answers[activeStep];
          const isEnd = idx === questions.length - 1;
          return (
            <Step key={`step-${idx}`}>
              <StepLabel>{step.title}</StepLabel>
              <StepContent>
                <Box sx={{ mb: 2 }}>
                  <FormControl>
                    <RadioGroup
                      name='controlled-radio-buttons-group'
                      value={value}
                      onChange={(e) => handleAnswer(e.target.value)}
                    >
                      {step.options.map((option, index) => (
                        <FormControlLabel
                          key={`option-${idx}-${index}`}
                          value={index}
                          control={<Radio />}
                          label={option.title}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Button disabled={idx === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                    Назад
                  </Button>
                  <Button
                    variant='contained'
                    onClick={isEnd ? onSend : handleNext}
                    sx={{ mt: 1, mr: 1 }}
                    disabled={value === undefined}
                  >
                    {isEnd ? 'Отправить результат' : 'Далее'}
                  </Button>
                </Box>
              </StepContent>
            </Step>
          );
        })}
      </Stepper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex: 1 1 auto;
  padding: 20px;
`;

export default List;
