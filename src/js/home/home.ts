// Defines the Home module
namespace Demo.Home {
    let module: ng.IModule = angular.module('demo.home', []);

    module.controller('HomeController', Demo.Home.HomeController);
    module.service('CarDataService', Demo.Home.CarDataService);
}