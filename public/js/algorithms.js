var carInput = document.getElementById("carInput");
var carGas = document.getElementById("gasoline").value.trim();
var carDiesel = document.getElementById("diesel").value.trim();
var carElectric = document.getElementById("electric").value.trim();
var milesWeekly = document.getElementById("miles").value.trim();
var carMpg = document.getElementById("mpg").value.trim();
var electricityInput = document.getElementById("electricity").value.trim();
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

if (carInput === 0) {
    carScore = 0;
} else {
    carScore = carInput * .01018;
}
console.log("Car score is: " + carScore);