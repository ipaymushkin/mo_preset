export type Item = {
  title: string;
  options: { title: string }[];
  rightIndex: number;
};

export const questions: Item[] = [
  {
    title: 'Манипулятор "мышь" - это устройство ...',
    options: [
      {
        title: 'ввода информации',
      },
      {
        title: 'вывода информации',
      },
      {
        title: 'считывание информации',
      },
      {
        title: 'для подключения принтера к компьютеру',
      },
    ],
    rightIndex: 0,
  },
  {
    title: 'Какие из устройств предназначены для вывода информации?',
    options: [
      {
        title: 'сканер',
      },
      {
        title: 'принтер',
      },
      {
        title: 'клавиатура',
      },
      {
        title: 'процессор',
      },
    ],
    rightIndex: 1,
  },
  {
    title: 'Чтобы открыть папку, нужно навести курсор мыши на эту папку и выполнить ...',
    options: [
      {
        title: 'щелчок левой кнопкой мыши',
      },
      {
        title: 'щелчок правой кнопкой мыши',
      },
      {
        title: 'двойной щелчок левой кнопкой мыши',
      },
      {
        title: 'двойной щелчок правой кнопкой мыши',
      },
    ],
    rightIndex: 2,
  },
  {
    title: 'Какое из устройств компьютера не относится к основным?',
    options: [
      {
        title: 'системный блок',
      },
      {
        title: 'клавиатура',
      },
      {
        title: 'монитор',
      },
      {
        title: 'принтер',
      },
    ],
    rightIndex: 3,
  },
  {
    title: 'Устройством ввода является ...',
    options: [
      {
        title: 'сканер',
      },
      {
        title: 'принтер',
      },
      {
        title: 'монитор',
      },
      {
        title: 'наушники',
      },
    ],
    rightIndex: 0,
  },
  {
    title: 'Microsoft Word - это ...',
    options: [
      {
        title: 'графический редактор',
      },
      {
        title: 'текстовый редактор',
      },
      {
        title: 'редактор таблиц',
      },
    ],
    rightIndex: 1,
  },
  {
    title: 'Для подготовки презентаций используется ...',
    options: [
      {
        title: 'Access',
      },
      {
        title: 'Excel',
      },
      {
        title: 'Word',
      },
      {
        title: 'PowerPoint',
      },
    ],
    rightIndex: 3,
  },
  {
    title: 'Как называется одна страница презентации?',
    options: [
      {
        title: 'сайт',
      },
      {
        title: 'слайд',
      },
      {
        title: 'макет',
      },
    ],
    rightIndex: 1,
  },
  {
    title:
      'Каким образом нужно завершить ввод строки текста, чтобы со следующей строки начать новый абзац?',
    options: [
      {
        title: 'нажать клавишу Enter',
      },
      {
        title: 'нажать клавишу Esc',
      },
      {
        title: 'нажать комбинацию клавиш Shift+Esc',
      },
    ],
    rightIndex: 0,
  },
  {
    title: 'Текстовый редактор это программа, предназначенная для ...',
    options: [
      {
        title: 'обработки графической информации',
      },
      {
        title: 'обработки видеоинформации',
      },
      {
        title: 'обработки текстовой информации',
      },
      {
        title: 'работы с музыкальными записями',
      },
    ],
    rightIndex: 2,
  },
  {
    title: 'С помощью какой комбинации клавиш можно выделить всё?',
    options: [
      {
        title: 'Ctrl+V',
      },
      {
        title: 'Ctrl+A',
      },
      {
        title: 'Ctrl+C',
      },
      {
        title: 'Ctrl+X',
      },
    ],
    rightIndex: 1,
  },
  {
    title: 'С помощью какой комбинации клавиш можно скопировать?',
    options: [
      {
        title: 'Ctrl+V',
      },
      {
        title: 'Ctrl+A',
      },
      {
        title: 'Ctrl+C',
      },
      {
        title: 'Ctrl+X',
      },
    ],
    rightIndex: 2,
  },
  {
    title: 'Какая клавиша переводит клавиатуру в режим печати заглавных букв?',
    options: [
      {
        title: 'Page Up',
      },
      {
        title: 'Enter',
      },
      {
        title: 'Tab',
      },
      {
        title: 'Caps Lock',
      },
    ],
    rightIndex: 3,
  },
  {
    title: 'С помощью какой комбинации клавиш можно дать компьютеру команду "вставить"?',
    options: [
      {
        title: 'Ctrl+V',
      },
      {
        title: 'Ctrl+A',
      },
      {
        title: 'Ctrl+C',
      },
      {
        title: 'Ctrl+X',
      },
    ],
    rightIndex: 0,
  },
  {
    title: 'Каким образом можно удалить файл?',
    options: [
      {
        title:
          'Правой кнопкой мыши открыть контекстное меню файла, нажать “Переименовать”, дать файлу имя “Удалить”',
      },
      {
        title: 'Выбрать файл левой кнопкой мыши, нажать клавишу Del',
      },
      {
        title: 'Открыть файл, стереть все содержащиеся в нём данные, сохранить изменения',
      },
      {
        title: 'Правой кнопкой мыши открыть контекстное меню, нажать “Вырезать”',
      },
    ],
    rightIndex: 1,
  },
  {
    title: 'Как переименовать файл или папку?',
    options: [
      {
        title: 'кликнуть два раза по названию файла (папки)',
      },
      {
        title: 'нажать на кнопку Del',
      },
      {
        title: 'при помощи меню правой кнопки — ПЕРЕИМЕНОВАТЬ',
      },
    ],
    rightIndex: 2,
  },
  {
    title: 'Каким образом слова с грамматическими ошибками выделяются в документе?',
    options: [
      {
        title: 'подчёркиванием красной линией',
      },
      {
        title: 'анимацией',
      },
      {
        title: 'подчеркиванием зеленой линией',
      },
    ],
    rightIndex: 0,
  },
  {
    title: 'Как создать папку на рабочем столе?',
    options: [
      {
        title: 'кликнуть на кнопку пуск, затем выбрать «Папка» в подменю создать',
      },
      {
        title:
          'кликнуть на рабочем столе левой клавишей мыши, затем выбрать «Папка» в подменю создать',
      },
      {
        title:
          'кликнуть на рабочем столе правой клавишей мыши, затем выбрать «Папка» в подменю создать',
      },
    ],
    rightIndex: 2,
  },
  {
    title: 'Какое расширение имеют документы WORD?',
    options: [
      {
        title: 'dos/dosx',
      },
      {
        title: 'doc/docx',
      },
      {
        title: 'dop/dopx',
      },
    ],
    rightIndex: 1,
  },
  {
    title: 'Что такое "ПК"?',
    options: [
      {
        title: 'Программный код',
      },
      {
        title: 'Пиктограмма карикатуры',
      },
      {
        title: 'Персональный компьютер',
      },
      {
        title: 'Первичный ключ',
      },
    ],
    rightIndex: 2,
  },
  {
    title: 'Какая комбинация горячих клавиш клавиатуры позволяет переключать язык ввода?',
    options: [
      {
        title: 'Клавиша Windows + E',
      },
      {
        title: 'Клавиша F1 + Shift',
      },
      {
        title: 'Клавиши Ctrl + Shift или Alt + Shift',
      },
      {
        title: 'Клавиша Tab',
      },
    ],
    rightIndex: 2,
  },
  {
    title: 'Двойной щелчок левой кнопкой мыши используется для ...',
    options: [
      {
        title: 'Закрытия окна или папки',
      },
      {
        title: 'Открытия папки или файла',
      },
      {
        title: 'Для выбора пункта в контексном меню',
      },
    ],
    rightIndex: 1,
  },
  {
    title: 'Где хранятся удаленные файлы?',
    options: [
      {
        title: 'Корзина',
      },
      {
        title: 'Мои документы',
      },
      {
        title: 'Мои рисунки',
      },
    ],
    rightIndex: 0,
  },
  {
    title: 'Принтер — это ...',
    options: [
      {
        title: 'устройство для вывода информации на бумагу',
      },
      {
        title: 'устройство для долговременного хранения информации',
      },
      {
        title: 'устройство для записи информации на диск',
      },
    ],
    rightIndex: 0,
  },
  {
    title: 'Блокнот — это ...',
    options: [
      {
        title: 'простейший графический редактор',
      },
      {
        title: 'простейший тестовый редактор',
      },
      {
        title: 'программа для печати документа',
      },
    ],
    rightIndex: 1,
  },
];
