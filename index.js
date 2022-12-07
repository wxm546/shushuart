
$(document).ready(function () {
    //给标题和房子添加方法
    $(".hearder-logo").click(function () {
        $(location).prop("href", "index.html");
    });
    $(".header-homebtn").click(function () {
        $(location).prop("href", "index.html");
    });
});
//MARK:pjax 跳转页面 动画
var pjax = new Pjax({
    elements: "a", // default is "a[href], form[action]"
    selectors: ["main"],
    cacheBust:false, //When set to true, Pjax appends a timestamp query string segment to the requested URL in order to skip the browser cache.
    scrollRestoration:false, //When set to true, Pjax will attempt to restore the scroll position when navigating backwards or forwards.
    
});
