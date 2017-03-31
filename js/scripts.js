// This is the business (or back-end) logic:

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

// Everything below this line is the user interface (or front-end) logic:

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();

    var add1Input = parseInt($("input#add1").val());
    var add2Input = parseInt($("input#add2").val());
    var result = add(add1Input, add2Input);

    $("#output").text(result);
  });

  $("form#subtract").submit(function(event) {
    event.preventDefault();

    var subtract1Input = $("input#subtract1").val();
    var subtract2Input = $("input#subtract2").val();
    var result = subtract(subtract1Input, subtract2Input);

    $("#output").text(result);
  });

  $("form#multiply").submit(function(event) {
    event.preventDefault();
    var multiply1Input = $("input#multiply1").val();
    var multiply2Input = $("input#multiply2").val();
    var result = multiply(multiply1Input, multiply2Input);

    $("#output").text(result);
  });

  $("form#divide").submit(function(event) {
    event.preventDefault();

    var divide1Input = $("input#divide1").val();
    var divide2Input = $("input#divide2").val();
    var result = divide(divide1Input, divide2Input);

    $("#output").text(result);
  });
});;
