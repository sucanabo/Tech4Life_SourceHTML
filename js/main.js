// $(document).ready(function () {
//   $("#annouce-btn").click(function () {
//     $(".ann-popover").toggleClass("d-block")
//   });
//   $("#noti-btn").click(function () {
//     $(".noti-popover").toggleClass("d-block")
//   });
//   $("#write-btn").click(function () {
//     $("#write-dropdown").toggleClass("d-block")
//   });
//   $("#user-setting-btn").click(function () {
//     $(".user-menu__popover").toggleClass("d-block")
//   });
// });
 var navController = document.querySelectorAll('.nav-control');
 var popovers = document.querySelectorAll('.popover');
for(var i = 0; i < navController.length; ++i){
  navController[i].addEventListener('click',function(e){
    console.log(popovers[i]);
  });
}