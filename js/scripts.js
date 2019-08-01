
// begin business logic

var add = function(number1, number2) {
  return number1 + number2;
};
var addThreeNumbers = function(number1, number2, number3) {
  var sum = number1 + number2 + number3;
  return sum.toFixed(2);
}
var subtract = function(number1, number2) {
  return number1 - number2;
};
var multiply = function(number1, number2) {
  var sum = (number1 * number2);
  return sum.toFixed(2);
};
var multThreeNumbers = function(number1, number2, number3) {
  return number1 * number2 * number3;
}
var divide = function(number1, number2) {
  return number1 / number2;
};
var remainder = function(number1, number2) {
  return number1 % number2;
};

// end business logic

$(document).ready(function(){
  var totalOrderPrice = [" "];
  $("svg#topBar").click (function(){
    $(".cart").toggle();
    $(".main").toggle();
  });
  $("button#goShopping").click (function(){
    $(".cart").toggle();
    $(".main").toggle();
  });
  $("svg.checkoutCart").click (function(){
    $(".cart").toggle();
    $(".main").toggle();
  });
  $("label.checkoutText").click (function(){
    $(".cart").toggle();
    $(".main").toggle();
  });
  $("form#bag").submit (function(event){
    event.preventDefault();
    var bagPurchase = parseInt($("input#quantity").val());
    var bagColor = $("select#color").val();
    var bagPrice = 10;
    var bagTotalPrice = multiply(bagPurchase, bagPrice);
    $(".cartItems").text(" " + bagPurchase + " " + bagColor + " " + "waterproof bags, ");
    $(".empty").hide();
    $(".emailButton").show();
    totalOrderPrice.push["bagTotalPrice"];
    alert(totalOrderPrice);
  });
  $("form#journal").submit (function(event){
    event.preventDefault();
    var journalPurchase = parseInt($("input#journalQuantity").val());
    var journalSize = $("select#size").val();
    var journalPrice = 5;
    var journalTotalPrice = multiply(journalPurchase, journalPrice);
    $(".cartItems").append(" " + journalPurchase + " " + journalSize + " " + "journals, ");
    $(".empty").hide();
    $(".emailButton").show();

    alert("$" + journalTotalPrice);

  });
  $("form#tour").submit (function(event){
    event.preventDefault();
    var tourPurchase = $("select#tourType").val();
    var tourDate = $("#tourDate").val();
    var tourPrice = 20;
    $(".cartItems").append("a " + tourPurchase + " on " + tourDate);
    $(".empty").hide();
    $(".emailButton").show();

    alert("$" + tourPrice.toFixed(2));

  });

  $("button#emailShow").click (function(){
    $(".submitEmail").toggle();
    var totalOrderPrice = addThreeNumbers(bagTotalPrice,journalTotalPrice,tourPrice);
    alert(totalOrderPrice);
  });
});
