// ==UserScript==
// @name         Kill Reddit More
// @namespace    http://jerl.im
// @version      1.1
// @description  Autoreload Reddit when it dies
// @author       You
// @match        *.reddit.com/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

if(document.querySelectorAll("img[src='//www.redditstatic.com/trouble-afoot.jpg']").length > 0) window.location.reload();
if(document.title = "reddit broke!") window.location.reload();
