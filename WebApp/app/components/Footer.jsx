import React from 'react';

export default class Footer extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-2">
                    Footer
                </div>
                <div className="col-md-1 col-md-offset-9">
                   <span className="glyphicon glyphicon-transfer" aria-hidden="true"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

