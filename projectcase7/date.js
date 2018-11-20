/*
Chapter case project 7
Author: Sreekanth Sreekumar
      Date:   11/19/2018
 Filename: date.js
*/



function test() {
  var bdate = document.getElementById('startd').value;
  var sdate = document.getElementById('endd').value;

  try {
    document.getElementById('totl').innerHTML = '';

    var totl = testdate(new Date(bdate), new Date(sdate));
  /* calculating day ,year and month*/
    if (totl && !isNaN(totl.years)) {
      document.getElementById('totl').innerHTML =
        totl.years + ' year' + (totl.years == 1 ? ' ' : 's ') +
        totl.months + ' month' + (totl.months == 1 ? ' ' : 's ') + 'and ' +
        totl.days + ' day' + (totl.days == 1 ? '' : 's');
    }
  } catch (e) {
    console.error(e);
  }
}

function testdate(stdt, endt) {
  if (stdt > endt) {
	  alert("something went wrong");
    return null;
  }
  /* Declaring Variables*/
  var sty = stdt.getFullYear();
  var stm = stdt.getMonth();
  var stdy = stdt.getDate();
 var eny = endt.getFullYear();
  var enm = endt.getMonth();
  var endy = endt.getDate();
  var feb = (endy % 4 == 0 && endy % 100 != 0) || endy % 400 == 0 ? 29 : 28;
  var dom = [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var sdey = (enm < stm) || enm == stm && endy < stdy;
  var years = eny - sty - (sdey? 1 : 0);
  var months = (12 + enm - stm - (endy < stdy ? 1 : 0)) % 12;
  var days = stdy <= endy ? endy - stdy: dom[(12 + enm - 1) % 12] - stdy+ endy;
return {
    years: years,
    months: months,
    days: days
  };
}