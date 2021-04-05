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
$(".email-footer").validate({
  rules: {
    email: {
      required: true,
      email: true,
    },
  },
  messages: {
    email: {
      required: "Please enter email",
      email: "Email not true",
    },
  },
});
