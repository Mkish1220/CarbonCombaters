// ========================== HIGH CHARTS PIE CHART FOR FOOD EMISSIONS=================================================//
Highcharts.chart('containerA', {
    chart: {
        renderTo: "chart-A",
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: "GREENHOUSE GAS CONTRIBUTION BY FOOD TYPE IN THE AVERAGE DIET"
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Meats',
            y: 56.6,
            sliced: true,
            selected: true
        }, {
            name: 'Dairy',
            y: 18.3
        }, {
            name: 'Beverages',
            y: 5.9
        }, {
            name: 'Fish and Seafood',
            y: 5.8
        }, {
            name: 'Eggs',
            y: 2.8
        }, {
            name: 'Vegetables',
            y: 2.6
        }, {
            name: 'Grain Products',
            y: 2.1
        }, {
            name: 'Fruits',
            y: 1.6
        }, {
            name: 'Other',
            y: 4.3
        }]
    }]
});
// ========================== HIGH CHARTS PIE CHART FOR FOOD EMISSIONS=================================================//

// ========================== HIGH CHARTS PIE CHART FOR VEHICLE EMISSIONS=================================================//

Highcharts.chart('containerB', {
    chart: {
        renderTo: "chart-B",
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: "GREENHOUSE GAS CONTRIBUTION BY FOOD TYPE IN THE AVERAGE DIET"
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'TRANSPORTATION GREENHOUSE GASES',
        colorByPoint: true,
        data: [{
            name: 'Passenger Car',
            y: 41,
            sliced: true,
            selected: true
        }, {
            name: 'Medium or Heavy Duty Truck',
            y: 24
        }, {
            name: 'Beverage',
            y: 5.9
        }, {
            name: 'Fish and Seafood',
            y: 5.8
        }, {
            name: 'Eggs',
            y: 2.8
        }, {
            name: 'Vegetables',
            y: 2.6
        }, {
            name: 'Grain Products',
            y: 2.1
        }, {
            name: 'Fruits',
            y: 1.6
        }, {
            name: 'Other',
            y: 4.3
        }]
    }]
});