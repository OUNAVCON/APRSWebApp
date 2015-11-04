import React from 'react';
import Axios from 'axios';
import Title from './Title.jsx';
import Weather from './Weather.jsx';

export default class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <Title
          title="APRS"
          subtitle="Automatic Packet Reporting System"
          callsign={this.props.callsign}
        />
       <div className="container-fluid">
       <div className="row">
       <div className="col-md-2">
       <Weather></Weather>
       </div>
       </div>
       </div>
       
      </div>
    );
  }

};

