$(document).ready(function() {
  $.getJSON(
    "example.json",
    function(data) {
      var item = data.list;

      console.log(item[0].main_image);
      console.log(item[0].price.gross.base);
      var html = "";

      item.forEach(function(val) {
        html += "<div class='box'data='" + val.id + "'>";
        html += "<div class='box__wrap'>";
        html += "<div class='box__top'>";
        html +=
          "<div class='box__basket'><img class='box__basket-img' src='basket.png'/>";
        html += "<span class='box__basket-shop'>1</span></div>";
        html +=
          "<div class='box__cheap'>oszczednoci <span class='box__cash'>2000zl</span></div></div>";
        html +=
          "<div class='box__middle'><img class='box__image' src='https://outletmeblowy.pl/environment/cache/images/300_300_productGfx_" +
          val.main_image +
          ".jpg' /></div>";
        html +=
          "<div class='box__down'><h4 class='box__price'>" +
          val.price.gross.promo +
          "<span class='box__subprice'>" +
          val.price.gross.base +
          "</span></h4><p class='box__info'>" +
          val.name +
          "<span class='box__info-team'>Grupa Kler</span></span></p></div>";
        html += "</div></div>";
      });

      $(".main__content").html(html);

      $(".main__content .box:lt(4)").show();
      $("#view__all").click(function() {
        $(".main__content .box").show();
      });
      $("#view__two").click(function() {
        $(".main__content .box")
          .not(":lt(2)")
          .hide();
      });
      $("#view__four").click(function() {
        $(".main__content .box")
          .not(":lt(4)")
          .show();
      });
    },
    "jsonp"
  );
  $(".change__subtitle").click(function() {
    $(".change__subtitle").removeClass("active");
    $(this).addClass("active");
  });
});
