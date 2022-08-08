// ========================== HIGH CHARTS PIE CHART FOR FOOD EMISSIONS=================================================//
// Highcharts.chart('containerA', {
//     chart: {
//         renderTo: "chart-A",
//         plotBackgroundColor: null,
//         plotBorderWidth: null,
//         plotShadow: false,
//         type: 'pie'
//     },
//     title: {
//         text: "GREENHOUSE GAS CONTRIBUTION BY FOOD TYPE IN THE AVERAGE DIET"
//     },
//     tooltip: {
//         pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
//     },
//     accessibility: {
//         point: {
//             valueSuffix: '%'
//         }
//     },
//     plotOptions: {
//         pie: {
//             allowPointSelect: true,
//             cursor: 'pointer',
//             dataLabels: {
//                 enabled: true,
//                 format: '<b>{point.name}</b>: {point.percentage:.1f} %'
//             }
//         }
//     },
//     series: [{
//         name: 'Brands',
//         colorByPoint: true,
//         data: [{
//             name: 'Meats',
//             y: 56.6,
//             sliced: true,
//             selected: true
//         }, {
//             name: 'Dairy',
//             y: 18.3
//         }, {
//             name: 'Beverages',
//             y: 5.9
//         }, {
//             name: 'Fish and Seafood',
//             y: 5.8
//         }, {
//             name: 'Eggs',
//             y: 2.8
//         }, {
//             name: 'Vegetables',
//             y: 2.6
//         }, {
//             name: 'Grain Products',
//             y: 2.1
//         }, {
//             name: 'Fruits',
//             y: 1.6
//         }, {
//             name: 'Other',
//             y: 4.3
//         }]
//     }]
// });
// ========================== HIGH CHARTS PIE CHART FOR FOOD EMISSIONS=================================================//

// ========================== HIGH CHARTS PIE CHART FOR VEHICLE EMISSIONS=================================================//

// Highcharts.chart('containerB', {
//     chart: {
//         renderTo: "chart-B",
//         plotBackgroundColor: null,
//         plotBorderWidth: null,
//         plotShadow: false,
//         type: 'pie'
//     },
//     title: {
//         text: "GREENHOUSE GAS CONTRIBUTION BY FOOD TYPE IN THE AVERAGE DIET"
//     },
//     tooltip: {
//         pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
//     },
//     accessibility: {
//         point: {
//             valueSuffix: '%'
//         }
//     },
//     plotOptions: {
//         pie: {
//             allowPointSelect: true,
//             cursor: 'pointer',
//             dataLabels: {
//                 enabled: true,
//                 format: '<b>{point.name}</b>: {point.percentage:.1f} %'
//             }
//         }
//     },
//     series: [{
//         name: 'TRANSPORTATION GREENHOUSE GASES',
//         colorByPoint: true,
//         data: [{
//             name: 'Passenger Car',
//             y: 41,
//             sliced: true,
//             selected: true,
//             color: "red"
//         }, {
//             name: 'Medium or Heavy Duty Truck',
//             y: 24,
//             color: "blue"
//         }, {
//             name: 'Light Duty Truck',
//             y: 17,
//             color: "pink"
         
//         }, {
//             name: 'Commercial Aircraft',
//             y: 7,
//             color: "green"
//         }, {
//             name: 'Other',
//             y: 5
//         }, {
//             name: 'Rail',
//             y: 2
//         }, {
//             name: 'Ships or Boats',
//             y: 2
//         }, {
//             name: 'Motorcycle or Bus',
//             y: 1,
//             color: "grey"
//         }]
//     }]
// });
// ========================== SLIDESHOW JAVASCRIPT =================================================//
// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//     }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }
