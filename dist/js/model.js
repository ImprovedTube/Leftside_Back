/*! Leftside Back v1.3.4 | (c) Philipp König under GPL-3.0 */
"use strict";!function(){var a=+new Date,b={userdata:"https://moonware.de/ajax/extensions/userdata"},c=function(a,b){chrome.tabs.query({active:!0,currentWindow:!0},function(a){chrome.tabs.remove(a[0].id)})},d={closeTab:c};chrome.extension.onMessage.addListener(function(a,b,c){return d[a.type]&&d[a.type](a,c),!0});var e=function(){chrome.storage.sync.get(["uuid","installationDate"],function(b){"undefined"==typeof b.uuid&&chrome.storage.sync.set({uuid:function(){var a=+new Date;return window.performance&&"function"==typeof window.performance.now&&(a+=window.performance.now()),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(b){var c=(a+16*Math.random())%16|0;return a=Math.floor(a/16),("x"==b?c:3&c|8).toString(16)})}()}),"undefined"==typeof b.installationDate?(a=+new Date,chrome.storage.sync.set({installationDate:a})):a=b.installationDate})},f=function(){chrome.storage.sync.get(null,function(a){if("undefined"!=typeof a.uuid&&("undefined"==typeof a.lastShareDate||(+new Date-a.lastShareDate)/36e5>12)){chrome.storage.sync.set({lastShareDate:+new Date});var c=function(a){var c=new XMLHttpRequest;c.open("POST",b.userdata,!0);var d=new FormData;d.append("data",JSON.stringify(a)),c.send(d)},d=chrome.runtime.getManifest();"Dev"!==d.version_name&&"update_url"in d||(a.uuid="Dev"),a.extension={name:d.name,version:d.version},"undefined"!=typeof a.shareUserdata&&"y"===a.shareUserdata?(delete a.lastShareDate,a.lang=chrome.i18n.getUILanguage(),a.ua=navigator.userAgent,c(a)):c({uuid:a.uuid,extension:a.extension,shareUserdata:"undefined"==typeof a.shareUserdata?"undefined":a.shareUserdata})}})};!function(){e(),f()}()}();