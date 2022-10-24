export type Item = {
  title: string;
  options: { title: string }[];
  rightIndex: number;
};

export const questions: Item[] = [
  {
    title: 'Первый вопрос',
    options: [
      {
        title: 'Да',
      },
      {
        title: 'Нет',
      },
      {
        title: 'Не знаю',
      },
    ],
    rightIndex: 0,
  },
  {
    title: 'Второй вопрос',
    options: [
      {
        title: 'Да',
      },
      {
        title: 'Нет',
      },
      {
        title: 'Не знаю',
      },
    ],
    rightIndex: 1,
  },
  {
    title: 'Третий вопрос',
    options: [
      {
        title: 'Да',
      },
      {
        title: 'Нет',
      },
      {
        title: 'Не знаю',
      },
    ],
    rightIndex: 2,
  },
];
