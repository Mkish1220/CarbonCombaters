// ========================== HIGH CHARTS PIE CHART=================================================//
Highcharts.chart('container', {
    chart: {
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
            y: 1.6
        }, {
            name: 'QQ',
            y: 1.2
        }, {
            name: 'Other',
            y: 2.61
        }]
    }]
});
// ========================== HIGH CHARTS PIE CHART=================================================//