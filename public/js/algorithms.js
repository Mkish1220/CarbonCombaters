var carInput = document.getElementById("carInput");
var carGas = document.getElementById("gasoline").value.trim();
var carDiesel = document.getElementById("diesel").value.trim();
var carElectric = document.getElementById("electric").value.trim();
var milesWeekly = document.getElementById("miles").value.trim();
//var carMpg = document.getElementById("mpg").value.trim();
var hourlyInput = document.getElementById("electricity").value.trim();
var naturalGasInput = document.getElementById("naturalGas").value.trim();
var fuelOilInput = document.getElementById("fuelOil").value.trim();
var liquidpetrolInput = document.getElementById("petrol").value.trim();
var recycleInput = document.getElementById("recycle").value.trim();
var propaneInput = document.getElementById("propane").value.trim();
var phoneInput = document.getElementById("phone").value.trim();
var waterInput = document.getElementById("water").value.trim();
var meatDiet = document.getElementById("meat").value.trim();
var averageDiet = document.getElementById("average").value.trim();
var nobeefDiet = document.getElementById("nobeef").value.trim();
var vegitarianDiet = document.getElementById("vegitarian").value.trim();
var veganDiet = document.getElementById("vegan").value.trim();

var carScore = '';
var gasScore = '';
var dieselScore = '';
var electricScore = '';
var milesScore = '';
// var mpgScore = '';
var electricityScore = '';
var naturalGasScore = '';
var fuelOilScore = '';
var liquidPetrolScore = '';

if (carInput === 0) {
    carScore = 0;
} else {
    carScore = gasScore + dieselScore + carElectric;
}
    gasScore = carGas * .008887;
    dieselScore = carDiesel * .01018;
    electricScore = carElectric * .003288;
    console.log(carScore);

if (milesWeekly === 0) {
    milesScore = 0;
} else {
    milesScore = milesWeekly * .00000775;
}
    console.log(milesScore);

// if (carMpg === 0) {
//     mpgScore = 0;
// } else {
//     mpgScore = carMpg * .008887;
// }
//     console.log(mpgScore);

if (hourlyInput === 0) {
    electricityScore = 0;
} else {
    electricityScore = hourlyInput * 3.35996;
}
    console.log(electricityScore);

if (naturalGasInput === 0) {
    naturalGasScore = 0;
} else {
    naturalGasScore = ;
}