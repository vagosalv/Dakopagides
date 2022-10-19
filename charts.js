
const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
];

const data = {
    labels: labels,
    datasets: [{
            label: 'Temperature',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45, 25],
        },
        {
            label: 'Humidity',
            borderColor: 'rgb(555, 199, 132)',
            backgroundColor: 'rgb(555, 199, 132)',
            data: [40, 15, 52, 2, 28, 2, 45, 25],
        }

    ]
};

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
    }
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

/*diavazei to arxeio csv */
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

    //elegxos an pernane oi times
    console.log(date);
    console.log(temperature);
    console.log(humidity);
    return {date, temperature, humidity}
};