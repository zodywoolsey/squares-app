cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-connectivity-monitor.connectivity",
      "file": "plugins/cordova-connectivity-monitor/www/connectivity.js",
      "pluginId": "cordova-connectivity-monitor",
      "clobbers": [
        "window.connectivity"
      ]
    },
    {
      "id": "cordova-admob.AdMobAds",
      "file": "plugins/cordova-admob/www/admob.js",
      "pluginId": "cordova-admob",
      "clobbers": [
        "window.admob",
        "window.tappx"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-connectivity-monitor": "1.2.2",
    "cordova-play-services-version-adapter": "1.0.2",
    "cordova-libgoogleadmobads": "7.13.1",
    "cordova-admob": "5.1.0",
    "cordova-plugin-whitelist": "1.3.4"
  };
});