$(document).ready(function () {
  $("#annouce-btn").click(function () {
    $(".ann-popover").toggleClass("d-block")
  });
  $("#noti-btn").click(function () {
    $(".noti-popover").toggleClass("d-block")
  });
  $("#write-btn").click(function () {
    $("#write-dropdown").toggleClass("d-block")
  });
  $("#user-setting-btn").click(function () {
    $(".user-menu__popover").toggleClass("d-block")
  });
});