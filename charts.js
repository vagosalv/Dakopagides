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
    datasets: [
        {
      label: 'Temperature',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45,25],
        },
        {
            label: 'Humidity',
            borderColor: 'rgb(555, 199, 132)',
            backgroundColor: 'rgb(555, 199, 132)',
            data: [40, 15, 52, 2, 28, 2, 45,25],
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