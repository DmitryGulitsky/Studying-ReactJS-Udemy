export default class SwapiService {    // асинхронный источник данных
  async getResource(url) {
    const res = await fetch(url);   // говорит, что будет ждать, пока результат промиса не станет доступным. вызов вернет promise

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, recieved ${res.status}`)
    }

    const  body = await res.json();   // будет ждать, пока не получит тело. вызов вернет promise
    return body;
  }

  async getAllPeople() {
    const res = await this.getResource(`https://swapi.co/api/people/`);
    return res.results;   // возвращаем поле results
  }

  getPerson(id) {
    return this.getResource(`https://swapi.co/api/people/${id}`)
  }

  async getAllPlanets() {
    const res = await this.getResource(`https://swapi.co/api/planets/`);
    return res.results;   // возвращаем поле results
  }

  getPlanet(id) {
    return this.getResource(`https://swapi.co/api/planets/${id}`)
  }

  async getAllStarships() {
    const res = await this.getResource(`https://swapi.co/api/starships/`);
    return res.results;   // возвращаем поле results
  }

  getStarship(id) {
    return this.getResource(`https://swapi.co/api/starships/${id}`)
  }
}

const swapi = new SwapiService();

swapi.getPerson(3).then((p) => {

  console.log(p.name)

});