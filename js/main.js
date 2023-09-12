$(document).ready(function () {
    $(".spinner").fadeOut(1000, function () {
        $("#loading").fadeOut(1000, function () {
            $("#loading").remove();
        })
        $("body").css("overflow", "auto");
    })


    let sectionOffset = $(".offer").offset().top;
    let sideBarInnerWidth = $(".sideBarInner").innerWidth();
    $(".sideBar").css('left', -sideBarInnerWidth);

    $(window).scroll(function () {
        let windowScroll = $(window).scrollTop();
        if (windowScroll > sectionOffset - 50) {
            $(".navbar").addClass("backgroundColorScroll");
        } else {
            $(".navbar").removeClass("backgroundColorScroll");

        }
    })

    $(".nav-link").click(function (event) {
        let aHref = event.target.getAttribute('href');
        let sectionOffset = $(aHref).offset().top;
        $("body").animate({ scrollTop: sectionOffset }, 1000);

    })

    $(window).scroll(function () {
        let windowScroll = $(window).scrollTop();
        if (windowScroll > sectionOffset) {
            $(".upButton").fadeIn(500);

        } else {
            $(".upButton").fadeOut(500);

        }
    })


    $(".upButton").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 2000);

    })




    let colorBoxs = $(".color-box");
    colorBoxs.eq(0).css('backgroundColor', 'lightgreen');
    colorBoxs.eq(1).css('backgroundColor', 'lightgray');
    colorBoxs.eq(2).css('backgroundColor', 'gray');
    colorBoxs.eq(3).css('backgroundColor', 'orange');
    colorBoxs.eq(4).css('backgroundColor', 'teal');

    colorBoxs.click(function (eventInfo) {
        let bgColor = $(eventInfo.target).css('backgroundColor');
        $('h2,h3').css("color", bgColor)
    })

    $(".sideBar i").click(function () {
        if ($(".sideBar").css('left') == '0px') {

            $(".sideBar").animate({ left: -sideBarInnerWidth }, 1000)

        } else {

            $(".sideBar").animate({ left: 0 }, 1000)
        }

    })


    $(".img-item").click(function (eventInfo) {
        let imgSrc = eventInfo.target.src;
        $(".home").css('backgroundImage', `url(${imgSrc})`)
    })






})


