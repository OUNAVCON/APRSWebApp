import React from 'react';
import Container from './Container.jsx';
import OpenWeatherMap from '../openWeatherMap';
import UserConfig from '../userConfig';


const OPENWEATHER_MAP_URL = 'https://mashape-community-urban-dictionary.p.mashape.com/define';
//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}

export default class App extends React.Component {



  render() {
    return <Container url={this.createURL()} openWeahterKey={OpenWeatherMap.key} callsign={UserConfig.callsign}/>;
  };

  createURL(){
  	 // url: 'http://api.openweathermap.org/data/2.5/forecast/city?' //'http://api.openweathermap.org/data/2.5/forecast/city?id={this.cityId}&APPID={this.key}'
	return  url = OpenWeatherMap.url + 'id=' + OpenWeatherMap.cityId + '&APPID='+ OpenWeatherMap.key;

  };


};
