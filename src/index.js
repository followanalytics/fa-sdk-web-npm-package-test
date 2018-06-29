import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let FollowAnalytics = require("followanalytics");

FollowAnalytics.initialize({
  FAID: 'YOUR_API_KEY_HERE',
  userId: '',
  isVerbose: false,
  sessionTimeout: 10,
  bundleId: 'YOUR_BUNDLE_ID_HERE',
  geolocationEnabled: false,
  optInAnalyticsDefault: true,
  analyticsScope: FollowAnalytics.AnalyticsScope.FULL,
  onDataWalletPolicyChange: dataWalletPolicyChange,
  isDataWalletEnabled: true,
});

function dataWalletPolicyChange(policy) {
  console.warn("Data Policy Privacy changed");
  console.warn(policy);
}

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
