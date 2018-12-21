// Контекст позволяет не указывать явно во всех элементах иерархии родителя и child-ов

import React from 'react';

const {
  Provider : SwapiServiceProvider,    // переименуем для удобства
  Consumer : SwapiServiceConsumer
} = React.createContext();    // можно передать consumer по умолчанию, если будет отсутсвовать компонент. но в нашем приложении не требуется

export {
  SwapiServiceProvider,
  SwapiServiceConsumer
};
