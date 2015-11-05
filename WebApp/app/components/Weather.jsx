import React from 'react';
import Axios from 'axios';
import OpenWeatherMap from '../openWeatherMap';

export default class Title extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
          {this.state.currentWeather.main ? this.getWeatherView() : <span> data is unavailable</span>}
          {this.state.weatherUpDate}
          </div>
        </div>
      </div>
    );
  }


  state = {
    currentWeather: {},
    weatherUpDate: "hello"
  }

  componentDidMount = () => {
    var self = this;
    this.getCurrentWeatherData();
    this.timer =  setInterval(this.getCurrentWeatherData.bind(this), 300000);
  }

  componentWillUnmount = () =>{
    clearInterval(this.timer);
    console.log("Module Unmounted");
  }

  getWeatherView(){
    return <div>
      {this.state.currentWeather.main.temp}
       <img src = {this.createIconUrl(this.state.currentWeather.weather[0].icon)}>
        </img>
      </div>;
  }

  createUrlLatLong(){
 // url: 'http://api.openweathermap.org/data/2.5/forecast/city?' //'http://api.openweathermap.org/data/2.5/forecast/city?id={this.cityId}&APPID={this.key}'
  return OpenWeatherMap.urlLatLong + 'lat=' + OpenWeatherMap.baseLattitude  + '&lon='+ OpenWeatherMap.baseLongitude + '&units=' + OpenWeatherMap.units + '&APPID='+ OpenWeatherMap.key;
  }

  createUrlCityId(){
  	 // url: 'http://api.openweathermap.org/data/2.5/forecast/city?' //'http://api.openweathermap.org/data/2.5/forecast/city?id={this.cityId}&APPID={this.key}'
	return OpenWeatherMap.urlCityId + 'id=' + OpenWeatherMap.cityId + '&units=' + OpenWeatherMap.units + '&APPID='+ OpenWeatherMap.key;
  }

  createIconUrl(icon){
  	return OpenWeatherMap.iconUrl + icon + '.png';
  }

  getCurrentWeatherData(){
   Axios.get(this.createUrlLatLong(), {
      params: {
      },
      headers: {
      }
    })
    .then((response) => {
      console.log(response.data);
        var d = new Date();
         this.setState({
            currentWeather: response.data,
            weatherUpDate: d.toLocaleString()
         });
      return response.data;
    })
    .catch((response) => {
      console.error(response);
    });
  }



};
