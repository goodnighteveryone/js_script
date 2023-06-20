// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  自动登录油猴中文网
// @author       zhai
// @match        https://bbs.tampermonkey.net.cn/
// @match        https://bbs.tampermonkey.net.cn/index.php
// @match        https://bbs.tampermonkey.net.cn/forum.php
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net.cn
// @grant        none
// ==/UserScript==
// 自动登录油猴中文网，可使用油猴、暴力猴安装本插件，使用前需要填入自己的账户、密码
var userName = "";
var password = "";
var login = document.querySelector(".comiis_dlq a");
if (login) {
  login.click();
  setTimeout(() => {
    var dialog = document.querySelector("#fwin_login");
    var loginBtn = dialog.querySelector(".pn.pnc");
    var form = dialog.querySelector("form");
    if (form) {
      form.username.value = userName;
      form.password.value = password;
      if (userName && password && loginBtn) {
        loginBtn.click();
        setTimeout(() => {
          location.reload();
        }, 600);
      }
    }
  }, 1000);
}
