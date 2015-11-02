import React from 'react';
import Container from './Container.jsx';
import OpenWeatherMap from '../openWeatherMap';
import UserConfig from '../userConfig';


const OPENWEATHER_MAP_URL = 'https://mashape-community-urban-dictionary.p.mashape.com/define';
//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}

export default class App extends React.Component {
  render() {
    return <Container url={OpenWeatherMap.url} openWeahterKey={OpenWeatherMap.key} callsign={UserConfig.callsign}/>;
  }
};
