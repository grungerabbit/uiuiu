var $scope,$location,reframe=angular.module("reframe",[]);reframe.controller("editor",function(e){e.chapel="on the hill",e.wanted="",e.why="",e.affected=[];var n=function(e){this.name=e,this.wish=""};e.addAffected=function(){e.namePerson.length>0&&(e.affected.push(new n(e.namePerson)),e.namePerson="")}});