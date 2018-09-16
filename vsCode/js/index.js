/*
 * @Author: LiuZe 
 * @Date: 2018-09-16 08:05:45 
 * @Last Modified by: LiuZe
 * @Last Modified time: 2018-09-16 10:44:59
 */

$(function () {
    $(".right").css("height", $(document.body).height());
    $(".left").css("width", $(document.body).width() - $(".right").width());
    $(window).resize(() => {
        $(".left").css("width", $(document.body).width() - $(".right").width());
        $(".right").css("height", $(document.body).height());
    })

    $(".logo .content").click(function () {
        window.location.href = "/";
    })

    $(".p_content").on("click", "a", function () {
        $(this).parent().parent("li").addClass("addbackground").siblings().removeClass("addbackground");
    })

    $(document).scroll(function () {
        if ($(document).scrollTop() <= 1000) {
            $(".sidebar").fadeOut(300);
        } else {
            $(".sidebar").fadeIn(300);
        }
    })

    $(".sidebar").click(function () {
        $("html,body").animate({
            scrollTop: 0,
        }, 500);
        $(".p_content li").removeClass("addbackground");
    })
})