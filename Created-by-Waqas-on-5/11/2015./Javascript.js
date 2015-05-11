/**
 * Created by Waqas on 5/11/2015.
 */
var app = angular.module("myapp",[]);
app.controller("HelloWorld",function($scope)
{
    $scope.name="WAQAS";
})

app.controller('MyController',function($scope){
    $scope.author = {
        'name' : 'Waqas',
        'title' : 'ABC',
        'batch' : '2010-11'
    }
});
