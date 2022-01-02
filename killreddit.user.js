// ==UserScript==
// @name         Kill Reddit More
// @namespace    http://jerl.im
// @version      1.5
// @description  Autoreload Reddit when it dies
// @author       You
// @match        *.reddit.com/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

var reload = false;
if (document.querySelectorAll("img[src='//www.redditstatic.com/trouble-afoot.jpg']").length > 0) reload = true;
else if (document.title == "reddit broke!") reload = true;
else if (document.title == "Ow! -- reddit.com") reload = true;
else if (document.title == "504 Gateway Timeout") reload = true;
else if (document.documentElement.outerText.substr(0, 18) === "connection failure") reload = true;

if (reload) window.location.reload();
