// Data retrieved from https://gs.statcounter.com/browser-market-share#monthly-202201-202201-bar

// Create the chart
// Data retrieved from https://gs.statcounter.com/browser-market-share#monthly-202201-202201-bar

// Create the chart
Highcharts.chart('container', {
  chart: {
    type: 'column'
  },
  title: {
    align: 'left',
    text: 'Greenhouse Gas Emissions on Avg.'
  },
  accessibility: {
    announceNewData: {
      enabled: true
    }
  },
  xAxis: {
    type: 'category'
  },
  yAxis: {
    title: {
      text: 'Total percent of impact'
    }

  },
  legend: {
    enabled: false
  },

  plotOptions: {
    series: {
      borderWidth: 0,
      dataLabels: {
        enabled: true,
        format: '{point.y:.1f}%'
      }
    }
  },

  tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
  },

  series: [{
    name: "Factors",
    colorByPoint: true,
    data: [{
        name: "Transportation",
        y: 27.3,
        drilldown: "Transportation"
      },
      {
        name: "Energy Industry",
        y: 28.9,
        drilldown: "Energy"
      },
      {
        name: "Other Fuel Combustions",
        y: 11.9,
        drilldown: "Other Fuel Combustions"
      },
      {
        name: "Manufacturing",
        y: 10.3,
        drilldown: "Manufacturing"
      },
      {
        name: "Fugitive Emissions",
        y: 4.7,
        drilldown: "Fugitive Emissions"
      },
      {
        name: "Industrial Processes",
        y: 5.6,
        drilldown: "Industrial Processes"
      },
      {
        name: "Agriculture",
        y: 9.2,
        drilldown: null
      }   ,
         {
        name: "Waste",
        y: 2.0,
        drilldown: null
      }
    ]
  }],
  drilldown: {
    breadcrumbs: {
      position: {
        align: 'right'
      }
    }
  },
  yAxis: [{
    title: {
      text: 'Gold medals'
    },

    series: [{
        name: "Chrome",
        id: "Chrome",
       },
      {
        name: "Firefox",
        id: "Firefox",
        
      },
      {
        name: "Internet Explorer",
        id: "Internet Explorer",
      },
      {
        name: "Safari",
        id: "Safari",
      },
      {
        name: "Edge",
        id: "Edge",
        },
      {
        name: "Opera",
        id: "Opera",
        data: [
          [
            "v50.0",
            0.96
          ],
          [
            "v49.0",
            0.82
          ],
          [
            "v12.1",
            0.14
          ]
        ]
      }
    ]
  }
});

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};