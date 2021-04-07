// for menu mobile and desktop ---------------------------------------------------------->
$(function () {
  $("#main-menu").smartmenus({
    mainMenuSubOffsetX: -1,
    mainMenuSubOffsetY: 4,
    subMenusSubOffsetX: 6,
    subMenusSubOffsetY: -6,
  });
});

// SmartMenus CSS animated sub menus - toggle animation classes on sub menus show/hide
$(function () {
  $("#main-menu")
    .bind({
      "show.smapi": function (e, menu) {
        $(menu).removeClass("hide-animation").addClass("show-animation");
      },
      "hide.smapi": function (e, menu) {
        $(menu).removeClass("show-animation").addClass("hide-animation");
      },
    })
    .on(
      "animationend webkitAnimationEnd oanimationend MSAnimationEnd",
      "ul",
      function (e) {
        $(this).removeClass("show-animation hide-animation");
        e.stopPropagation();
      }
    );
});

// show and hide menu mobile
$(function () {
  $("#show-menu-mobile").click(function () {
    if ($("#main-menu").css("left") == "-2000px") {
      $("#main-menu").css("left", "0px");
      $("#show-menu-mobile").css("color", "#000");
    } else {
      $("#main-menu").css("left", "-2000px");
      $("#show-menu-mobile").css("color", "#fff");
    }
  });
});

// for another ---------------------------------------------------------->
// validate ---------------------------------------------------------->
// validate email in footer
$("#validate").validate({
  rules: {
    email: {
      required: true,
      email: true,
    },
  },
  messages: {
    email: {
      required: "Please enter email",
      email: "Email not true of format",
    },
  },
});

// daterangepicker -------------------------------------->

$(function () {
  $('input[name="checkIn"]').daterangepicker({
    singleDatePicker: true,
    autoUpdateInput: false,
  });
});
$('input[name="checkIn"]').on("apply.daterangepicker", function (ev, picker) {
  $(this).val(picker.startDate.format("DD/MM/YYYY"));
});

// scroll page
var lastScrollTop = 0;
$(document).ready(function () {
  $(window).scroll(function (event) {
    let pos_body = $("html,body").scrollTop();

    var st = $(this).scrollTop();
    if (st > lastScrollTop || st == lastScrollTop) {
      $(".header-fixed").removeClass("fixed-menu");
    } else {
      if (pos_body > 50) {
        $(".header-fixed").addClass("fixed-menu");
        $(".header-fixed").css("background-color", "#fff");
        $("#main-menu  a").css("color", "#000");
        $("#logo-green").css("display", "block");
        $("#logo-white").css("display", "none");
        $("#show-menu-mobile").css("color", "#000");
      } else {
        $(".header-fixed").removeClass("fixed-menu");
        $(".header-fixed").css("background-color", "transparent");
        $("#main-menu  a").css("color", "#fff");
        $("#logo-green").css("display", "none");
        $("#logo-white").css("display", "block");
        $("#show-menu-mobile").css("color", "#fff");
      }
    }
    lastScrollTop = st;
  });
  $(".header-fixed").hover(
    function () {
      $(".header-fixed").css("background-color", "#fff");
      $("#main-menu  a").css("color", "#000");
      $("#logo-green").css("display", "block");
      $("#logo-white").css("display", "none");
    },
    function () {
      $(".header-fixed").css("background-color", "transparent");
      $("#main-menu  a").css("color", "#fff");
      $("#logo-green").css("display", "none");
      $("#logo-white").css("display", "block");
    }
  );
});
