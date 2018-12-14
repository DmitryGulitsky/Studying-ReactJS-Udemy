import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {

  state = {
    label: ''
  };

  onLabelChange = (e) => {    // передаем event
    this.setState({
      label: e.target.value     // извлекаем текущее значение поля
    });
  };

  onSubmit = (e) => {
    e.preventDefault();   // этот метод говорит, что при событии event метод по умолчанию выполнять не нужно. Чтобы при отправке формы не перезагружалась страница
    this.props.onItemAdded(this.state.label);   // передаем значение из поля ввода
    this.setState({   // Очищаем после ввода после нажатия submit. Так как используется setState, то вызывается функция render()
      label: ''
    })
  };

  render() {  // onSubmit - событие отправки формы. Отлавливаем момент, когда пользователь отправляет форму (кликает мышью или жмет enter)
    return (
      <form className="item-add-form d-flex"
            onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onLabelChange}   // onChange() - событие для получения текущего значения инпута используем событие onChange и вызываем функцию
          placeholder="What needs to be done"
          value={this.state.label}
        />
        <button
          className="btn btn-outline-secondary"
          >
          Add Item
        </button>
      </form>
    )
  }
}