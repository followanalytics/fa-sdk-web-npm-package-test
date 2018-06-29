import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './Button.css';
import FollowAnalytics from 'followanalytics';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {active: true};
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    FollowAnalytics.logEvent("Hello from App");
    this.setState(prevState => ({active: false}));
    setTimeout(() => {
      this.setState({active: true});
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="event-button">
          <p>
            <button
              className="large green button"
              onClick={this.onClickHandler}
              disabled={!this.state.active}
            >
              {this.state.active ? 'Log event Hello from App' : 'Clicked me!'}
            </button>
          </p>
        </div>
        <div className="install-notes">
          <p>
            Example app of how you can use FollowAnalytics Web SDK as a Node Module.
          </p>
          <h4>How to Install</h4>
          <p>You can install the package using <code>npm install followanalytics</code>.</p>
          <h4>Using it</h4>
          <p>
            Inside your initial file, <code>index.js</code> for this app, add:<br/>
            <code>let FollowAnalytics = require("followanalytics")</code>.
            Then, right after, initialize the FollowAnalytics SDK. Here's an example:
          </p>
          <pre>
            <code>
              <span>FollowAnalytics.initialize(&#123;</span>
              <span className="tab">FAID: 'YOUR_API_KEY_HERE',</span>
              <span className="tab">userId: '',</span>
              <span className="tab">isVerbose: false,</span>
              <span className="tab">sessionTimeout: 10,</span>
              <span className="tab">bundleId: 'YOUR_BUNDLE_ID_HERE',</span>
              <span className="tab">geolocationEnabled: false,</span>
              <span className="tab">optInAnalyticsDefault: true,</span>
              <span className="tab">analyticsScope: FollowAnalytics.AnalyticsScope.FULL,</span>
              <span className="tab">onDataWalletPolicyChange: dataWalletPolicyChange,</span>
              <span className="tab">isDataWalletEnabled: true,</span>
              &#125;);
            </code>
          </pre>
        </div>
      </div>
    );
  }
}

export default App;
