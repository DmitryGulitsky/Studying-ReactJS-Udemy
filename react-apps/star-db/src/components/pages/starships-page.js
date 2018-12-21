import React from 'react';
import { StarshipList } from '../sw-components';
import { withRouter } from 'react-router-dom';

const StarshipsPage = ({ history }) => {

  return (
    <StarshipList
      onItemSelected={(id) => history.push(id)} />    // метод history.push - добавляете новый элемент в историю браузера
  );
};

export default withRouter(StarshipsPage);   // withRouter передаст 3 компонента match, location, history