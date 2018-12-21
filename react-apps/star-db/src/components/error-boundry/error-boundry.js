//    компонент-обертка который решает отрисовать что-то полученное или вернуть ошибку

import React, { Component } from 'react';

import ErrorIndicator from '../error-indicator/error-indicator';

export default class ErrorBoundry extends Component {

  state = {
    hasError: false   //  нету ошибки по умолчанию
  };

  componentDidCatch() {   //    поменять значение state при ошибке
    this.setState({
      hasError: true
    });
  }

  render() {

    if (this.state.hasError) {    //  возвратить заготовленный компонент с ошибкой
      return <ErrorIndicator />
    }

    return this.props.children;   //    ожидаем получить один или несколько компонентов и вернуть их в том же виде, в котором и получили
  }
}
