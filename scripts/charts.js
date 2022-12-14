drawChart();

//orizoume thn sunarthsh
async function drawChart() {
    const datapoints = await getData();

    const data = {
        labels: datapoints.date,
        datasets: [{
                label: 'Temperature',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: datapoints.temperature,
            },
            {
                label: 'Humidity',
                borderColor: 'rgb(555, 199, 132)',
                backgroundColor: 'rgb(555, 199, 132)',
                data: datapoints.humidity,
                hidden: true,
            }

        ]
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            plugins: { legend: { display: false }, }
        }
    };

    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );

    /*emfanizei mono to temperature */
    $('#temp-btn').click(async function() {
        data.datasets[0].data = datapoints.temperature;
        data.datasets[1].data = 0;
        myChart.update();
      });

    /*emfanizei mono to humidity */
    $('#humid-btn').click(async function() {
        data.datasets[0].data = 0;
        data.datasets[1].data = datapoints.humidity;
        data.datasets[1].hidden = false;
        myChart.update();
      });
};




/*diavazei to arxeio csv kai ksexwrizei ta dedomena */
async function getData() {
    const date = []; //exei thn wra
    const temperature = []; //thermokrasia
    const humidity = []; //exei thn ugrasia

    const url = '/data/DT02-2022-10-17_20_00.csv';
    const responce = await fetch(url);
    const tabledata = await responce.text();
    //console.log(tabledata);

    const table = tabledata.split('\n'); //xwrizoume ta dedomena
    //console.log(table);
    table.forEach(row => {
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
    //console.log(date);
    //console.log(temperature);
    //console.log(humidity);
    return {
        date,
        temperature,
        humidity,
        labelname1,
        labelname2,
        labelname3
    }
};