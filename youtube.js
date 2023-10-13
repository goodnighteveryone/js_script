// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  去油管会员弹窗
// @author       一晚好梦
// @match        https://www.youtube.com/watch*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function () {
  let observer = new MutationObserver(handleUrlChange);
  let config = { childList: true, subtree: false };
  observer.observe(document.getElementById("movie_player"), config);
  var curUrl = window.location.href;
  function handleUrlChange() {
    console.log("111", curUrl);
    if (curUrl !== window.location.href) {
      console.log("222");
      setTimeout(() => {
        let dialog = document.getElementsByClassName("ytd-popup-container")[0];
        console.log(dialog, "dialog");
        curUrl = window.location.href;
        if (dialog) {
          let cancel = dialog.getElementsByClassName(
            "yt-spec-touch-feedback-shape__fill"
          )[0];
          console.log(cancel, "cancel");
          cancel && cancel.click();
        }
      }, 500);
    }
  }
})();
