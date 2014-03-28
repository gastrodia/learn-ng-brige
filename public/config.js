require.config({
  baseUrl: "/",
  shim: {
    angular: {
      exports: "angular"
    },
    "ng-grid": {
      deps: [
        "angular",
        "jquery"
      ]
    },
    jquery: {
      exports: "jquery"
    }
  },
  paths: {
    "ng-grid": "components/ng-grid/build/ng-grid.min",
    json3: "components/json3/lib/json3.min",
    "jquery-ui": "components/jquery-ui/ui/jquery-ui",
    jquery: "components/jquery/jquery",
    bootstrap: "components/bootstrap/dist/js/bootstrap",
    angular: "components/angular/angular",
    requirejs: "components/requirejs/require",
    "angular-route": "components/angular-route/angular-route",
    "angular-resource": "components/angular-resource/angular-resource"
  }
});



