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
var vegetarianDiet = document.getElementById("vegetarian").value.trim();
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
var recycleScore = '';
var propaneScore = '';
var phoneScore = '';
var waterScore = '';
var meatScore = '';
var averageScore = '';
var nobeefScore = '';
var vegetarianScore = '';
var veganScore = '';

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
    naturalGasScore = 2.29
}
    console.log(naturalGasScore);

if (liquidpetrolInput === 0) {
    liquidPetrolScore = 0;
} else {
    liquidPetrolScore = .23;
}
    console.log(liquidPetrolScore);

if (fuelOilInput === 0) {
    fuelOilScore = 0;
} else {
    fuelOilScore = .28;
}
    console.log(fuelOilScore);

if (recycleInput === false) {
    recycleScore = 0;
} else { 
        recycleScore = -2.89;  
}
    console.log(recycleScore);

if (propaneInput === 0) {
    propaneScore = 0;
} else {
    propaneScore = propaneInput * .024;
}
    console.log(propaneScore);

if (phoneInput === 0) {
    phoneScore = 0;
} else {
    phoneScore = phoneInput * .00000822;
}

if (waterInput === 0) {
    waterScore = 0;
} else {
    waterScore = waterInput * 0.000828;
}
    console.log(waterScore);

if (meatDiet === 0) {
    meatScore = 0;
} else {
    meatScore = 3.3;
}
    console.log(meatScore);

if (averageDiet === 0) {
    averageScore = 0;
} else {
    averageScore = 2.5;
}
    console.log(averageScore);

if (nobeefDiet === 0) {
    nobeefScore = 0;
} else {
    nobeefScore = 1.9;
}
    console.log(nobeefScore);

if (vegetarianDiet === 0) {
    vegetarianScore = 0;
} else {
    vegetarianScore = 1.7;
}
    console.log(vegetarianScore);

if (veganDiet === 0) {
    veganScore = 0;
} else {
    veganScore = 1.5;
}
    console.log(veganScore);