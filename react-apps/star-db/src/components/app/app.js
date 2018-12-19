import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';

import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage,
  LoginPage,
  SecretPage
} from '../pages';
import {SwapiServiceProvider} from '../swapi-service-context';

import './app.css';

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {StarshipDetails} from "../sw-components/details";

export default class App extends Component {

  state = {
    swapiService: new SwapiService(), //  создаем объект с методами вызова данных с сервера
    isLoggedIn: false   // задаем значение, что пользователь не авторизован
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    })
  };

  onServiceChange = () => {
    this.setState(({swapiService}) => {
      const Service = swapiService instanceof SwapiService ?
        DummySwapiService : SwapiService;
      return {
        swapiService: new Service()
      };
    });
  };

  render() {

    const {isLoggedIn} = this.state;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange}/>
              <RandomPlanet/>

              <Switch>
                <Route path="/"
                       render={() => <h2>Welcome to StarDB</h2>}
                       exact/>
                <Route path="/people/:id?" component={PeoplePage}/>
                <Route path="/planets" component={PlanetsPage}/>
                <Route path="/starships/"
                       component={StarshipsPage}
                       exact/>
                <Route path="/starships/:id"
                       render={({match}) => {
                         const {id} = match.params;
                         console.log(match);
                         return <StarshipDetails itemId={id}/>
                       }}/>
                <Route
                  path="/login"
                  render={() => (
                    <LoginPage
                      isLoggedIn={isLoggedIn}
                      onLogin={this.onLogin}/>
                  )}/>
                <Route
                  path="/secret"
                  render={() => (
                    <SecretPage
                      isLoggedIn={isLoggedIn}/>
                  )}/>
                <Route render={() => <h2>Page not found</h2>} />
              </Switch>

            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
