export type OptionItem = { // базовый тип одной опции шрифта, цвета для будущего выпадающего списка
  title: string; // название для пользователя
  value: string; // значение для CSS-свойства
  className?: string; // необязательное. для стилизации на этапе оформления
};

export type ArticleSettings = {
  fontFamily: OptionItem; // раним целый объект, чтобы Select сразу знал и title, и value
  fontSize: number; // размер шрифта в пикселях
  containerWidth: number; // ширина контейнера статьи в пикселях
  fontColor: string; // цвет текста в формате HEX - не OptItem а просто '#000000'
  bgColor: string; // цвет фона страницы в формате HEX - не OptItem а просто '#000000'
}