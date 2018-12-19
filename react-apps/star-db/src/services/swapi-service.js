// создаем API клиент.
// Асинхронный источник данных, внутри которого инкапсулированы все особенности работы с данными,
// которые можно изменять или тестировать не изменяя остальные части приложения

export default class SwapiService {

  _apiBase = 'https://swapi.co/api';    // переменная для сокращения url дынных
  _imageBase = 'https://starwars-visualguide.com/assets/img';    // переменная для сокращения url картинок

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);  // res - получаем ответ сервера. await - будем ждать пока результат promise, полученного от fetch не будет доступен

    if (!res.ok) {    // проверяем, если с сервера пришла ошибка 404( res.ок===true при кодах 200-299), но получили валидный ответ
      throw new Error(`Could not fetch ${url}` +  // выводим ошибку в консоль
        `, received ${res.status}`)
    }
    return await res.json();    // возвращамем json, но тогда, когда он будет полностью получен
  };

  getAllPeople = async () => {
    const res = await this.getResource(`/people/`);
    return res.results    // поле results полученного JSON содержит массив объектов с характеристиками персонажей
      .map(this._transformPerson)   //
      .slice(0, 5);
  };

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  };

  getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`);
    return res.results
      .map(this._transformPlanet)
      .slice(0, 5);
  };

  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  };

  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);
    return res.results
      .map(this._transformStarship)
      .slice(0, 5);
  };

  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}/`);
    return this._transformStarship(starship);
  };

  getPersonImage = ({id}) => {
    return `${this._imageBase}/characters/${id}.jpg`
  };

  getStarshipImage = ({id}) => {
    return `${this._imageBase}/starships/${id}.jpg`
  };

  getPlanetImage = ({id}) => {
    return `${this._imageBase}/planets/${id}.jpg`
  };

  _extractId = (item) => {    // данные о планете не содержат id. Поэтому извлекаем его из url
    const idRegExp = /\/([0-9]*)\/$/;   //  достаем любое количество цифр между слэшами в конце строки
    return item.url.match(idRegExp)[1];
  };

  _transformPlanet = (planet) => {    // трансформация данных API в подходящий формат обозначений
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    };
  };

  _transformStarship = (starship) => {    // трансформация данных API в подходящий формат обозначений
    return {
      id: this._extractId(starship),    // искусственно добавляем id, который не дает API
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity
    }
  };

  _transformPerson = (person) => {    // трансформация данных API в подходящий формат обозначений
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    }
  }
}
