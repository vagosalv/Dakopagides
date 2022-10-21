document.addEventListener('DOMContentLoaded', async function () {
    const datapoints = await getData();
    const chart = Highcharts.chart('container-chart', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Δεδομενα'
        },
        xAxis: {
            categories: datapoints.date
        },
        yAxis: {
            title: {
                text: 'Βαθμοί'
            }
        },
        series: [{
            name: 'Θερμοκρασία',
            data: datapoints.temperature
        }, {
            name: 'Υγρασία',
            data: datapoints.humidity
        }]
    });
});


async function getData(){
    const date = []; //exei thn wra
    const temperature = []; //thermokrasia
    const humidity = []; //exei thn ugrasia

    const url = 'DT02-2022-10-17_20_00.csv';
    const responce = await fetch(url);
    const tabledata = await responce.text();
    //console.log(tabledata);

    const table = tabledata.split('\n');//xwrizoume ta dedomena
    //console.log(table);
    table.forEach(row=> {
        const column = row.split(','); //spame ta dedomena se grammes
        //console.log(column);
        const time = column[0]; //apomononoume thn wra
        const temp = column[1]; //apomononoume thn thermokrasia
        const humid = column[2]; // apomononoume thn ugrasia
        //console.log(column[0]);

        //vazoume tis times stis metavlites
        date.push(time);
        temperature.push(temp);
        humidity.push(humid);
    });

    //ksekinaei ta dedomena apo thn arxh
    date.shift();
    temperature.shift();
    humidity.shift();

    const labelname1 = 'a';
    const labelname2 = 'a';
    const labelname3 = 'a';

    //elegxos an pernane oi times
    console.log(date);
    console.log(temperature);
    console.log(humidity);
    return {date, temperature, humidity, labelname1, labelname2, labelname3}
};
