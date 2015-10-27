import React from 'react';
import Container from './Container.jsx';
import OpenWeatherMap from '../openWeatherMap';

const OPENWEATHER_MAP_URL = 'https://mashape-community-urban-dictionary.p.mashape.com/define';

export default class App extends React.Component {
  render() {
    return <Container url={OPENWEATHER_MAP_URL} openWeahterKey={OpenWeatherMap.key}/>;
  }
};
