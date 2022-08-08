// const dataPrev = {
//     2022: [
//       ['South Korea', 0],
//       ['Japan', 0],
//       ['Australia', 0],
//       ['Germany', 11],
//       ['Russia', 24],
//       ['China', 38],
//       ['Great Britain', 29],
//       ['United States', 46]
//     ],
//     2021: [
//       ['South Korea', 13],
//       ['Japan', 0],
//       ['Australia', 0],
//       ['Germany', 0],
//       ['Russia', 22],
//       ['China', 51],
//       ['Great Britain', 19],
//       ['United States', 36]
//     ],
//     2020: [
//       ['South Korea', 0],
//       ['Japan', 0],
//       ['Australia', 0],
//       ['Germany', 13],
//       ['Russia', 27],
//       ['China', 32],
//       ['Great Britain', 9],
//       ['United States', 37]
//     ]
//   };
  
//   const data = {
//     2022: [
//       ['South Korea', 0],
//       ['Japan', 0],
//       ['Australia', 0],
//       ['Germany', 17],
//       ['Russia', 19],
//       ['China', 26],
//       ['Great Britain', 27],
//       ['United States', 46]
//     ],
//     2021: [
//       ['South Korea', 13],
//       ['Japan', 0],
//       ['Australia', 0],
//       ['Germany', 0],
//       ['Russia', 24],
//       ['China', 38],
//       ['Great Britain', 29],
//       ['United States', 46]
//     ],
//     2020: [
//       ['South Korea', 0],
//       ['Japan', 0],
//       ['Australia', 0],
//       ['Germany', 16],
//       ['Russia', 22],
//       ['China', 51],
//       ['Great Britain', 19],
//       ['United States', 36]
//     ]
//   };
  
//   const countries = [{
//     name: 'South Korea',
//     flag: 'kr',
//     color: 'rgb(201, 36, 39)'
//   }, {
//     name: 'Japan',
//     flag: 'jp',
//     color: 'rgb(201, 36, 39)'
//   }, {
//     name: 'Australia',
//     flag: 'au',
//     color: 'rgb(0, 82, 180)'
//   }, {
//     name: 'Germany',
//     flag: 'de',
//     color: 'rgb(0, 0, 0)'
//   }, {
//     name: 'Russia',
//     flag: 'ru',
//     color: 'rgb(240, 240, 240)'
//   }, {
//     name: 'China',
//     flag: 'cz',
//     color: 'rgb(255, 217, 68)'
//   }, {
//     name: 'Great Britain',
//     flag: 'gb',
//     color: 'rgb(0, 82, 180)'
//   }, {
//     name: 'United States',
//     flag: 'us',
//     color: 'rgb(215, 0, 38)'
//   }];
  
  
//   const getData = data => data.map((country, i) => ({
//     name: country[0],
//     y: country[1],
//     color: countries[i].color
//   }));
  
//   const chart = Highcharts.chart('container', {
//     chart: {
//       type: 'column'
//     },
//     title: {
//       text: 'Summer Olympics 2022 - Top 5 countries by Gold medals',
//       align: 'left'
//     },
//     subtitle: {
//       text: 'Comparing to results from Summer Olympics 2021 - Source: <a href="https://en.wikipedia.org/wiki/2022_Summer_Olympics_medal_table">Wikipedia</a>',
//       align: 'left'
//     },
//     plotOptions: {
//       series: {
//         grouping: false,
//         borderWidth: 0
//       }
//     },
//     legend: {
//       enabled: false
//     },
//     tooltip: {
//       shared: true,
//       headerFormat: '<span style="font-size: 15px">{point.point.name}</span><br/>',
//       pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y} medals</b><br/>'
//     },
//     xAxis: {
//       type: 'category',
//       accessibility: {
//         description: 'Countries'
//       },
//       max: 4,
//       labels: {
//         useHTML: true,
//         animate: true,
//         formatter: ctx => {
//           let flag;
  
//           countries.forEach(function (country) {
//             if (country.name === ctx.value) {
//               flag = country.flag;
//             }
//           });
  
//           return `${flag.toUpperCase()}<br><span class="f32">
//             <span class="flag ${flag}"></span>
//           </span>`;
//         },
//         style: {
//           textAlign: 'center'
//         }
//       }
//     },
//     yAxis: [{
//       title: {
//         text: 'Gold medals'
//       },
//       showFirstLabel: false
//     }],
//     series: [{
//       color: 'rgb(158, 159, 163)',
//       pointPlacement: -0.2,
//       linkedTo: 'main',
//       data: dataPrev[2022].slice(),
//       name: '2021'
//     }, {
//       name: '2022',
//       id: 'main',
//       dataSorting: {
//         enabled: true,
//         matchByName: true
//       },
//       dataLabels: [{
//         enabled: true,
//         inside: true,
//         style: {
//           fontSize: '16px'
//         }
//       }],
//       data: getData(data[2022]).slice()
//     }],
//     exporting: {
//       allowHTML: true
//     }
//   });
  
//   const years = [2022, 2021, 2020];
  
//   years.forEach(year => {
//     const btn = document.getElementById(year);
  
//     btn.addEventListener('click', () => {
  
//       document.querySelectorAll('.buttons button.active')
//         .forEach(active => {
//           active.className = '';
//         });
//       btn.className = 'active';
  
//       chart.update({
//         title: {
//           text: `Summer Olympics ${year} - Top 5 countries by Gold medals`
//         },
//         subtitle: {
//           text: 'Comparing to results from Summer Olympics ' +
//             (year - 1) + ' - Source: <a href="https://en.wikipedia.org/wiki/' +
//             (year) + '_Summer_Olympics_medal_table">Wikipedia</a>'
//         },
//         series: [{
//           name: year - 1,
//           data: dataPrev[year].slice()
//         }, {
//           name: year,
//           data: getData(data[year]).slice()
//         }]
//       }, true, false, {
//         duration: 800
//       });
//     });
//   });

