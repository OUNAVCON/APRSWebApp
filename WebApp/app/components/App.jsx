import React from 'react';
import Container from './Container.jsx';
import OpenWeatherMap from '../openWeatherMap';
import UserConfig from '../userConfig';

export default class App extends React.Component {



  render() {
    return <Container callsign={UserConfig.callsign}/>;
  };



};
