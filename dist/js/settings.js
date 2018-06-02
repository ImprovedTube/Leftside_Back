/*! (c) Philipp König under GPL-3.0 */
(e=>{"use strict";window.settings=function(){this.opts={classes:{saved:"saved",restored:"restored"},attr:{i18n:"data-i18n"},elm:{body:e("body"),title:e("head > title"),rangeInputs:e("input[type='range']"),pxToleranceMaximized:e("input#pxToleranceMaximized"),pxToleranceWindowed:e("input#pxToleranceWindowed"),showIndicator:e("input#showIndicator"),openAction:e("select#openAction"),closeTab:e("input#closeTab"),navigateForward:e("input#navigateForward"),save:e("section#control > button.save"),restore:e("section#control > button.restore"),creationDate:e("section#about > span.created")},manifest:chrome.runtime.getManifest()},this.run=(()=>{t(),o(),s()});let t=()=>{e("[data-i18n]").forEach(t=>{let o=e(t).attr(this.opts.attr.i18n);e(t).text(chrome.i18n.getMessage("settings_"+o))}),this.opts.elm.title.text(this.opts.manifest.short_name+" - "+this.opts.elm.title.text())},o=()=>{this.opts.elm.rangeInputs.on("input change",t=>{e(t.currentTarget).next("span").text(t.currentTarget.value)}),this.opts.elm.save.on("click",()=>{a()}),this.opts.elm.restore.on("click",()=>{i()})},s=()=>{let e=+this.opts.elm.creationDate.text(),t=(new Date).getFullYear();t>e&&this.opts.elm.creationDate.text(e+" - "+t),chrome.storage.sync.get("showIndicator",e=>{this.opts.elm.showIndicator[0].checked=void 0===e.showIndicator||!0===e.showIndicator}),chrome.storage.sync.get("closeTab",e=>{this.opts.elm.closeTab[0].checked=void 0!==e.closeTab&&!0===e.closeTab}),chrome.storage.sync.get("navigateForward",e=>{this.opts.elm.navigateForward[0].checked=void 0!==e.navigateForward&&!0===e.navigateForward}),chrome.storage.sync.get("openAction",e=>{this.opts.elm.openAction[0].value=void 0===e.openAction?"mousedown":e.openAction}),chrome.storage.sync.get("pxTolerance",e=>{let t={windowed:20,maximized:1};void 0!==e.pxTolerance&&(t=e.pxTolerance),this.opts.elm.pxToleranceMaximized[0].value=t.maximized,this.opts.elm.pxToleranceWindowed[0].value=t.windowed,this.opts.elm.pxToleranceMaximized.trigger("change"),this.opts.elm.pxToleranceWindowed.trigger("change")})},a=()=>{chrome.storage.sync.set({showIndicator:this.opts.elm.showIndicator[0].checked,closeTab:this.opts.elm.closeTab[0].checked,navigateForward:this.opts.elm.navigateForward[0].checked,openAction:this.opts.elm.openAction[0].value,pxTolerance:{windowed:this.opts.elm.pxToleranceWindowed[0].value,maximized:this.opts.elm.pxToleranceMaximized[0].value}},()=>{this.opts.elm.body.addClass(this.opts.classes.saved),setTimeout(()=>{this.opts.elm.body.removeClass(this.opts.classes.saved)},1500)})},i=()=>{chrome.storage.sync.remove(["showIndicator","closeTab","navigateForward","pxTolerance","openAction"],()=>{this.opts.elm.body.addClass(this.opts.classes.restored),setTimeout(()=>{this.opts.elm.body.removeClass(this.opts.classes.restored),setTimeout(()=>{window.close()},100)},1500)})}},(new window.settings).run()})(jsu);