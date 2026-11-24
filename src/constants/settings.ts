import type { OptionItem, ArticleSettings } from '@/types/settings';

export const FONT_OPTIONS: OptionItem[] = [ // наполняем реальными данными по шрифтам
  { title: 'Open Sans', value: 'Open Sans' },
  { title: 'Ubuntu', value: 'Ubuntu' },
  { title: 'Cormorant Garamond', value: 'Cormorant Garamond' },
  { title: 'Days One', value: 'Days One' },
  { title: 'Merriweather', value: 'Merriweather' },
];

export const BASIC_COLORS: OptionItem[] = [ // наполняем реальными данными по цветам
  { title: 'Черный', value: '#000000', className: 'black', },
  { title: 'Белый', value: '#FFFFFF', className: 'white', },
  { title: 'Серый', value: '#808080', className: 'gray', },
  { title: 'Розовый', value: '#FFC0CB', className: 'pink', },
  { title: 'Ярко-розовый', value: '#FD24AF', className: 'fuchsia', },
  { title: 'Красный', value: '#FF0000', className: 'red', },
  { title: 'Жёлтый', value: '#FFFF00', className: 'yellow', },
  { title: 'Зелёный', value: '#008000', className: 'green', },
  { title: 'Голубой', value: '#6FC1FD', className: 'light-blue', },
  { title: 'Фиолетовый', value: '#800080', className: 'purple', },
  { title: 'Синий', value: '#0000FF', className: 'blue', },
];

export const DAFAULT_SETTING: ArticleSettings = { // создаем деволтное состояние шрифта и цветов страницы
  fontFamily: FONT_OPTIONS[0],
  fontSize: 18,
  containerWidth: 1000,
  fontColor: BASIC_COLORS[0].value,
  bgColor: BASIC_COLORS[1].value,
};