//import React from 'react';
//import ReactDOM from 'react-dom';

const getResource = async (url) => {
  const res = await fetch(url);   // говорит, что будет ждать, пока результат промиса не станет доступным. вызов вернет promise

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}` +
    `, recieved ${res.status}`)
  }

  const  body = await res.json();   // будет ждать, пока не получит тело. вызов вернет promise
  return body;
};

getResource('https://swapi.co/api/people/1dsffdd/')
  .then((body) => {
    console.log(body);
  })
  .catch((err) => {
    console.error('Could not fetch', err);
  });