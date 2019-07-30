$(function () {
    $(".link").append(" <i class='fas fa-share'></i>");
    var count = 0;
    $(".bar-menu").click(function () {
        count++;
        $(".links").toggleClass("menu-visible", count % 2 == 1 ).toggleClass("d-none", count % 2 == 0);
    });
});