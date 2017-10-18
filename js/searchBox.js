
// search function using if statements
$('input').on('keyup', function() {
  // Creates Variables for each caption
  var one = $('.one').data('title');
  var two = $('.two').data('title');
  var three = $('.three').data('title');
  var four = $('.four').data('title');
  var five = $('.five').data('title');
  var six = $('.six').data('title');
  var seven = $('.seven').data('title');
  var eight = $('.eight').data('title');
  var nine = $('.nine').data('title');
  var ten = $('.ten').data('title');
  var eleven = $('.eleven').data('title');
  var twelve = $('.twelve').data('title');
  // Creates variable for user input
  var userText = document.getElementById('userInput');
  var upperText = userText.value.toLowerCase();
  // user input is run through if statements that compare user input to each caption and shows pics that match.
  if (one.toLowerCase().indexOf(upperText) > -1) {
    $('.one').show();
  } else {
    $('.one').hide();
  }
  if (two.toLowerCase().indexOf(upperText) > -1) {
    $('.two').show();
  } else {
    $('.two').hide();
  }
  if (three.toLowerCase().indexOf(upperText) > -1) {
    $('.three').show();
  } else {
    $('.three').hide();
  }
  if (four.toLowerCase().indexOf(upperText) > -1) {
    $('.four').show();
  } else {
    $('.four').hide();
  }
  if (five.toLowerCase().indexOf(upperText) > -1) {
    $('.five').show();
  } else {
    $('.five').hide();
  }
  if (six.toLowerCase().indexOf(upperText) > -1) {
    $('.six').show();
  } else {
    $('.six').hide();
  }
  if (seven.toLowerCase().indexOf(upperText) > -1) {
    $('.seven').show();
  } else {
    $('.seven').hide();
  }
  if (eight.toLowerCase().indexOf(upperText) > -1) {
    $('.eight').show();
  } else {
    $('.eight').hide();
  }
  if (nine.toLowerCase().indexOf(upperText) > -1) {
    $('.nine').show();
  } else {
    $('.nine').hide();
  }
  if (ten.toLowerCase().indexOf(upperText) > -1) {
    $('.ten').show();
  } else {
    $('.ten').hide();
  }
  if (eleven.toLowerCase().indexOf(upperText) > -1) {
    $('.eleven').show();
  } else {
    $('.eleven').hide();
  }
  if (twelve.toLowerCase().indexOf(upperText) > -1) {
    $('.twelve').show();
  } else {
    $('.twelve').hide();
  }
});
