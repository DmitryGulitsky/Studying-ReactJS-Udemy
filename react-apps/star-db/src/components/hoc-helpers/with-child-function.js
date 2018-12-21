import React from 'react';

const withChildFunction = (fn) => (Wrapped) => {    // функция компонента высшего порядка. fn - функция props-children. Wrapped - сам компонент
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  };
};

export default withChildFunction;