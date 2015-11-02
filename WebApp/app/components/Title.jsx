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
          <div className="col-md-12">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-2">
                     {this.props.title}
                </div>
                <div className="col-md-1 col-md-offset-9">
                    {this.props.callsign}
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  {this.props.subtitle}
                </div>
              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
    );
  }
};

