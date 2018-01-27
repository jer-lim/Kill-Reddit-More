// ==UserScript==
// @name         Kill Reddit More
// @namespace    http://jerl.im
// @version      1.3
// @description  Autoreload Reddit when it dies
// @author       You
// @match        *.reddit.com/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

if(document.querySelectorAll("img[src='//www.redditstatic.com/trouble-afoot.jpg']").length > 0) window.location.reload();
if(document.title == "reddit broke!") window.location.reload();
else if(document.title == "Ow! -- reddit.com!") window.location.reload();
