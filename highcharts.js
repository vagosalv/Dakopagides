Highcharts.chart('container-chart', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Live Data (CSV)'
    },

    subtitle: {
        text: 'Data input from a remote CSV file'
    },

    rangeSelector: {
        selected: 4
    },

    plotOptions: {
        series: {
            showInNavigator: true
        }
    },

    data: {
        csvURL: './DT02-2022-10-17_20_00.csv',
        enablePolling: true
    }
});



