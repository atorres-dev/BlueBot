import React from 'react';
import './App.css';

class App extends React.Component<
  any,
  { isOneCloudBotActive: boolean, isAccessBotActive: boolean }
> {
  constructor(props: any) {
    super(props)
    this.state = {
      isOneCloudBotActive: false,
      isAccessBotActive: false
    }
  }

  returnToMain = () => {
    this.setState({
      isAccessBotActive: false,
      isOneCloudBotActive: false
    })
  }

  onOneCloudBotClick = () => {
    this.setState({
      isOneCloudBotActive: true
    })
  }

  onRaveAccessBotClick = () => {
    this.setState({
      isAccessBotActive: true
    })
  }

  render() {
    if (this.state.isOneCloudBotActive) {
      return (
        <div>
          <iframe src={`https://webchat.botframework.com/embed/OneCloudBot?s=${process.env.REACT_APP_ONE_CLOUD_KEY}`} style={{ minWidth: '400px', width: '100%', minHeight: '500px' }} />
          <button onClick={this.returnToMain}>Return</button>
        </div>
      )
    }

    if (this.state.isAccessBotActive) {
      return (
        <div>
          <iframe src={`https://webchat.botframework.com/embed/RaveAccessBot?s=${process.env.REACT_APP_RAVE_ACCESS_KEY}`} style={{ minWidth: '400px', width: '100%', minHeight: '500px' }} />
          <button onClick={this.returnToMain}>Return</button>
        </div>
      )
    }

    return (
      <div className="container">
        <div className="jumbotron jumbotron-fluid" style={{ backgroundColor: "#D2D2D2", borderRadius: '.3rem', marginTop: "15px" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-sm-10">
                <h2 className="display-6">Choose an issue type.</h2>
                <p className="lead">Use this site to raise critical alerts, file bugs, request tool access, or report security issues</p>
              </div>
              <div className="col-md-2 col-sm-2 align-self-center">
                <div className="card-text">
                  <button className="btn btn-dark btn-lg">Check Issue Status</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="container-fluid">
          <div className="row justify-content-around">
            <div className="col-md-5 col-sm-5" style={{ marginBottom: '50px' }}>
              <div className="card" style={{ width: '100%', height: '100%' }}>
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal" style={{ textAlign: "center" }}>Report a Bug</h4>
                </div>
                <div className="card-block" style={{ paddingLeft: "15px", marginBottom: "48px", paddingRight: "15px" }}>
                  <p className="card-text">
                    <ul>
                      <li>Anyone can submit an issue </li>
                      <li>Report a tool bug or error</li>
                      <li>Please include details and/or repro steps to ensure speedy resolution.</li>
                    </ul>
                  </p>
                </div>
                <div className="row justify-content-around align-items-center">
                  <button className="col-5 btn btn-primary">Report a Bug</button>
                  {/* this is where the new button */}
                  <button className="col-5 btn alert-primary" onClick={this.onOneCloudBotClick}>OneCloud Bot</button>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-sm-5" style={{ marginBottom: "50px" }}>
              <div className="card" style={{ width: '100%', height: '100%' }}>
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal" style={{ textAlign: 'center' }}>Access & Provisioning</h4>
                </div>
                <div className="card-block" style={{ paddingLeft: '15px', paddingRight: '15px', marginBottom: "48px" }}>
                  <p className="card-text">
                    <ul>
                      <li>Submit requests for tools Access & Provisioning here  </li>
                      <li><b>NOTE:</b> Access requests may take up to 7 days to fulfill </li>
                      <li>Password Reset Escalations</li>
                      <li>Admin Role Elevation</li>
                    </ul>
                  </p>
                </div>
                <div className="row justify-content-around align-items-center">
                  <button className="col-5 btn btn-success">Request Access</button>
                  <button className="col-5 btn alert-success" onClick={this.onRaveAccessBotClick}>RAVE Access Bot</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-around">
            <div className="col-md-5 col-sm-5" style={{ marginBottom: "50px" }}>
              <div className="card" style={{ width: '100%', height: '100%' }}>
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal" style={{ textAlign: 'center' }}>Critical Alert</h4>
                </div>
                <div className="card-block" style={{ paddingLeft: '15px', marginBottom: '48px', paddingRight: '15px' }}>
                  <p className="card-text">
                    <ul>
                      <li>Requires a Microsoft.com Account (FTE or V-dash)</li>
                      <li>Pages the on-call engineer 24 hours a day</li>
                      <li>Should only be used for issues that are causing site-wide work stoppage.</li>
                    </ul>
                  </p>
                </div>
                <div className="row justify-content-around">
                  <button className="col-11 btn btn-secondary">Raise an Alert</button>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-sm-5" style={{ marginBottom: "50px" }}>
              <div className="card" style={{ width: '100%', height: '100%' }}>
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal" style={{ textAlign: 'center' }}>Govern & Protect</h4>
                </div>
                <div className="card-block" style={{
                  paddingBottom: '6px',
                  paddingLeft: '15px',
                  paddingRight: '15px',
                  paddingTop: '10px'
                }}>
                  <span style={{
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    textAlign: 'center'
                  }}
                  >
                    <img src="./AmpProLogos_NoType.png" style={{ height: '80px' }} />
                  </span>
                  <p className="card-text">
                    <ul>
                      <li>Submit your Security, Compliance, PII, and Fraud issues here.</li>
                    </ul>
                  </p>
                </div>
                <div className="row justify-content-around">
                  <button className="col-11 btn btn-warning" style={{ color: '#ffff' }}>Submit an Issue</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
