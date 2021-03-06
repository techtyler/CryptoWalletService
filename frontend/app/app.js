/* Libs */
require("angular/angular");
require("angular-route/angular-route");
require("angular-resource/angular-resource");

/* Globals */
_ = require("lodash");
_urlPrefixes = {
  API: "api/",
  TEMPLATES: "static/app/"
};

/* Components */
require("./components/home/home");
require("./components/wallet/wallet");

/* App Dependencies */
angular.module("cws", [
  "Home", // this is our component
  "Wallet", // also ours
  "ngResource",
  "ngRoute"

]);

/* Config Vars */
var routesConfig = require("./routes");

/* App Config */
angular.module("cws").config(routesConfig);