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
    } else {
      $("#main-menu").css("left", "-2000px");
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
    // startDate: new Date(),
    // showDropdowns: true,
    // // timePicker: true,
    // timePicker24Hour: true,
    // timePickerIncrement: 10,
    // // autoUpdateInput: true,
    // locale: {
    //   format: "DD/MM/YYYY",
    // },
    autoUpdateInput: false,
    // locale: {
    //   cancelLabel: "Clear",
    // },
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
    if (st > lastScrollTop) {
      $(".header-fixed").removeClass("fixed-menu");
    } else {
      $(".header-fixed").addClass("fixed-menu");
    }
    lastScrollTop = st;
  });
});
