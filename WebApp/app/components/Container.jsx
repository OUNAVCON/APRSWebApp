import React from 'react';
import Axios from 'axios';
import Title from './Title.jsx';

export default class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <Title
          title="APRS"
          subtitle="Automatic Packet Reporting System"
          callsign='KD8MNV'
        />

       
      </div>
    );
  }
  state = {
    listings: []
  }
 

  translate = (text) => {
    Axios.get(this.props.url, {
      params: {
        term: text
      },
      headers: {
        'X-Mashape-Key': this.props.openWeatherKey
      }
    })
    .then((response) => {
      this.setState({
        listings: response.data.list
      });
    })
    .catch((response) => {
      console.error(response);
    });
  }


};

