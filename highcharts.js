Highcharts.chart('container-chart', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Live Data (CSV)'
    },

    subtitle: {
        text: 'Data input from a remote CSV file'
    },

    yAxis: {
        max: 200,
        title: {
            enabled: false
        }
    },

    tooltip: {
        split: true,
        crosshairs: true
    },

    data: {
        csvURL: './DT02-2022-10-17_20_00.csv',
        enablePolling: true
    }

});
