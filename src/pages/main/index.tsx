import React, { FC, useCallback, useState } from 'react';
import List from './List';
import Auth from './Auth';

const MainPage: FC = () => {
  const [meta, setMeta] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    answers: [],
  });

  const handleMeta = useCallback((name: string, value: string) => {
    setMeta((state) => ({
      ...state,
      [name]: value,
    }));
  }, []);

  const handleAnswer = useCallback((value: number, step: number) => {
    setMeta((state) => {
      const newAnswers = [...state.answers];
      // @ts-ignore
      newAnswers[step] = value;
      return {
        ...state,
        answers: newAnswers,
      };
    });
  }, []);

  const [isAuth, setIsAuth] = useState(false);

  if (isAuth) return <List setAnswer={handleAnswer} meta={meta} />;
  return (
    <Auth
      firstName={meta.firstName}
      lastName={meta.lastName}
      middleName={meta.middleName}
      setMeta={handleMeta}
      setIsAuth={setIsAuth}
    />
  );
};

export default MainPage;
