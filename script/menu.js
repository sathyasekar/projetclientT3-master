let $hamburger = $(".hamburger");
$hamburger.on("click", function (e) {
  $hamburger.toggleClass("is-active");
  $("header .header nav ol").toggleClass("active");
  $("header").toggleClass("activeHeader");
});