/*
Chapter case project 8
Author: Sreekanth Sreekumar
      Date:   12/3/2018
*/



// converting miles into kiometer
function meter() {
   var mil = $("#mile").val();
   var kilo =mil/0.62137;
   $("#kilo").html(kilo);
}
$("#sub").click(meter);
$("#mile").val("");
$("#kilo").html("");