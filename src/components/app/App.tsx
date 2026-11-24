import { Article } from '../article/article';
import { useState } from 'react';
import type { CSSProperties } from 'react';
import type { ArticleSettings } from '@/types/settings';
import { DEFAULT_SETTING } from '@/constants/settings';
import styles from './App.module.scss'
import clsx from 'clsx';

export const App = (): React.JSX.Element => {
  // форма настроек и статья — это два соседних компонента внутри App
  // общее состояние хранится у их ближайшего общего родителя — тут
  // articleState — это текущие применённые настройки, которые
  // пользователь видит на основной странице.
  const [articleState, setArticleState] =
    useState<ArticleSettings>(DEFAULT_SETTING);
  return (
    <main
      className={clsx(styles.main)}
      style={ // данные из articleState записываем в объект style под именами CSS-переменных
        {
          '--font-family': articleState.fontFamily.value,
          '--font-size': '${articleState.fontSize}px', // !! в стейте у нас number. поэтому добавляем px
          '--font-color': articleState.fontColor,
          '--container-width': '${articleState.containerWidth}px', // !! в стейте у нас number. поэтому добавляем px
          '--bg-color': articleState.bgColor,
        } as CSSProperties // тут у нас кастомные имена. чтобы TypeScript не ругался
      }
    >
      <Article />
    </main>
  );
};