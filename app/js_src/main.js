jQuery(document).ready(function () {
  "use script";
  /*burger button*/
  var burgerBtn = $(".burger__btn");
  burgerBtn.on("click", function(){
    burgerBtn.toggleClass("burger__btn--open");
  });
});