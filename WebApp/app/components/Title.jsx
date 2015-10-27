import React from 'react';

export default class Title extends React.Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    subtitle: React.PropTypes.string,
    callsign: React.PropTypes.string
  }
  render() {
    return (
    <div className="jumbotron">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                <h4>{this.props.title}</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  {this.props.subtitle}
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-1 col-md-offset-11">
            {this.props.callsign}
          </div>

        </div>
      </div>
    </div>
    );
  }
};

