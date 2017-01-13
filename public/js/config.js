/**
 * Created by admin on 2017/1/12.
 */
/**
 * Created by admin on 2016/11/22.
 */
//模块的声明
var pressureTest = angular.module("pressureTest", ['ng', 'ui.router']);

//配置路由词典
pressureTest.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('attack_m', {url:"/attack_m",templateUrl: 'template/attack_m.html',controller:"attackCtrl"})
    .state('task_m', {url:"/task_m",templateUrl: 'template/task_m.html',controller:"taskCtrl"})
    .state("web_c",{url:"/web_c",templateUrl:"template/web_c.html",controller:"webCtrl"})
    .state("userInfo_s",{url:"/userInfo_s",templateUrl:"template/userInfo_s.html",controller:"userInfoCtrl"})
  $urlRouterProvider.otherwise('attack_m');
});

//声明一个父控制器
/*pressureTest.controller("pressureCtrl",function($scope,$http,$interval,$location) {

});*/




