---
title: thesis writer
subtitle: a thesis writer written instead of writing a thesis
reference: thesis
layout: project
customJS:
- lib: angular
- lib: moment
- file: thesis.js
---

<style>
@import url(http://fonts.googleapis.com/css?family=Crimson+Text:400,400italic,700);
body {
    font: 1em 'Crimson Text';
    text-align: left;
}
::selection {
    background-color: yellow;
}
.project {
	width: 70%;
	margin: auto;
	font-size: 110%;
}
#clear {
	background: yellow;
	border: 10px solid black;
	font: 1em 'Crimson Text';
	padding: 0.05em 0.5em;
	font-weight: bold;
	display: block;
}
h1 {
    font-size: 2em;
    font-weight: bold;
}
h2 {
    font-size: 1.75em;
}
input {
	border: 1px solid black;
	padding: 0.25em;
	font: 1em 'Monaco';
	display: block;
	width: 100%;
}
.picture-frame, .exporter {
	border: 1px solid black;
	width: 100%;
	height: 5em;
	padding: 0.25em;
	font: 1em 'Monaco';
}
.exporter {
	height: 15em;
}
input:focus, textarea:focus {
	outline: none;
	border: 1px solid #cc00cc;
}
.pf--done {
	position: relative;
	border-bottom: 1px solid #eee;
	padding: 0.25em;
	width: 100%;
	margin-bottom: 1em;
	display: block;
}
.pf--done p {
	font-family: "Crimson Text", serif;
}
.pf--done small {
	font-style: italic;
}
.pf--done .hidden {
	font-size: 0;
}
.pf__control {
	position: absolute;
	right: 0;
	display: none;
}
.pf__control button {
	border: 1px solid #ccc;
	padding: 0.5em;
	margin-right: 0.5em;
	text-transform: uppercase;
	background: white;
	letter-spacing: 0.05em;
}
.pf__control button:focus {
	outline: none;
}
.pf__edit:hover {
	border: 1px solid green;
}
.pf__delete:hover {
	border: 1px solid red;
}
.finished {
	width: 55%;
	position: absolute;
	right: 0;
	border-left: 1px solid #eee;
	min-height: 100em;
	padding: 1em 10% 2em 2em;
	font-size: 125%;
	color: #222;
}
.finished h1 {
	line-height: 1.25;
}
.fixed {
	position: fixed;
	width: 33%;
	left: 12%;
	padding: 0 2em;
}
.exported {
	font-family: "Crimson Text";
	padding-bottom: 1em;
	border-bottom: 10px solid black;
	margin-bottom: 1em;
	white-space: pre-wrap;
}
#panic {
	position: fixed;
	left: 0;
	top: 0px;
	width: 12%;
	background-color: #eee;
	color: #ccc;
	white-space: pre-wrap;
	line-height: 1;
	height: 900px;
	padding: 2em 1em;
	overflow-y: scroll;
}
#panic p {
	line-height: 1;
	margin-bottom: 20em;
}
#panic textarea {
	font-size: .95;
	top: 4rem;
	left: 1rem;
	width: 8.5rem;
	border: 1px solid #ccc;
	font: 0.5em 'Monaco';
	position: fixed;
}
</style>

<div ng-app>
	<div ng-controller="Panic" id="panic">
	<textarea type="text" placeholder="anti-panic box // distraction diary" ng-model="panic"></textarea>
	<p ng-bind="instructions" ng-if="panic.length === 0"></p>
	<p ng-bind="panic"></p>
	</div>
	
<div ng-controller="Thesis">
<div class="fixed">
<h1>Thesis Writer</h1>



<input type="text" placeholder="the question to answer" ng-model="question" />
<textarea class="exporter" ng-model="export" placeholder="main draft. one step, one bird at a time...">
</textarea>
<textarea class="picture-frame" placeholder="timestamped notes and drafts.">
</textarea>
<!--<button id="clear">clear!</button>-->
<em ng-click="setReminder()">remember: calm down! breathe! you got this!</em>

	
</div>



<div class="finished">
	
<h1 ng-bind="question"></h1>

<pre ng-bind="export" class="exported"></pre>

<div class="pf__finished" id="select"></div>
</div>
</div>
</div>


<!--<input type="text" ng-model="gogo" /><button ng-click="addMotivation()">add</button>

<ul>
	<li ng-repeat="item in motivation"><span ng-bind="item"></span></li>
</ul>-->