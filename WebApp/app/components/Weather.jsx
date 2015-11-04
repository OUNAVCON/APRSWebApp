import React from 'react';
import Axios from 'axios';
import OpenWeatherMap from '../openWeatherMap';

export default class Title extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
{this.currentWeather.main.temp}
          </div>
        </div>
      </div>
    );
  }


  componentDidMount = () => {
   this.getCurrentWeatherData();
  }

  state = {
    currentWeather: {}
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
      this.setState({
         currentWeather: response.data
      });
      console.log(response.data);
    })
    .catch((response) => {
      console.error(response);
    });
  }



};
