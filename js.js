var d = new Date();
var dan = d.getDate();

var danSed = d.getDay();

var mjesec = d.getMonth();

var godina = d.getFullYear();

var calDani = document.getElementsByClassName("day");
calDani[dan-1].classList.add("active");

/*
var empty = document.getElementById("emptyDiv");
empty.parentNode.removeChild(empty);
*/

var empty = document.getElementById("emptyDiv");

var emptyDays = danSed - dan%7;


switch(emptyDays){

    case 0:
        empty.classList.add("empty0");
        break;
    case 1:
        empty.classList.add("empty1");
        break;
    case 2:
        empty.classList.add("empty2");
        break;
    case 3:
        empty.classList.add("empty3");
        break;
    case 4:
        empty.classList.add("empty4");
        break;
    case 5:
        empty.classList.add("empty5");
        break;
    case 6:
        empty.classList.add("empty6");
        break;
}
remDan = calDani[calDani.length-1];

if(mjesec == 3 || mjesec == 5 || mjesec == 8 || mjesec == 10 || mjesec == 1){
remDan.parentNode.removeChild(remDan);
remDan = calDani[calDani.length-1];
}

if(mjesec == 1){
    remDan.parentNode.removeChild(remDan);
    remDan = calDani[calDani.length-1];
}
if (mjesec == 1 && godina%400 && (godina % 4 == 0 && godina % 100 != 0)){
    remDan.parentNode.removeChild(remDan);
}

mon = document.getElementById("month");
switch(mjesec){
    case 0:
        mon.innerHTML = "JANUARY";
        break;
    case 1:
        mon.innerHTML = "FEBRUARY";
        break;
    case 2:
        mon.innerHTML = "MARCH";
        break;
    case 3:
        mon.innerHTML = "APRIl";
        break;
    case 4:
        mon.innerHTML = "MAY";
        break;
    case 5:
        mon.innerHTML = "JUNE";
        break;
    case 6:
        mon.innerHTML = "JULY";
        break;
    case 7:
        mon.innerHTML = "AUGUST";
        break;
    case 8:
        mon.innerHTML = "SEPTEMBER";
        break;
    case 8:
        mon.innerHTML = "OCTOBER";
        break;
    case 10:
        mon.innerHTML = "NOVEMBER";
        break;
    case 11:
        mon.innerHTML = "DECEMBER";
        break;
}
yr = document.getElementById("year");
yr.innerHTML = godina;

