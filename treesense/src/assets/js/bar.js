document.addEventListener("DOMContentLoaded", function() {
    var bar = document.getElementById("mybarChart");
    
    const data = {
    '2013': 2.1,
    '2014': 1.5,
    '2015': 1.9,
    '2016': 2.8,
    '2017': 2.2,
    '2018': 2.6,
    '2019': 1.4,
    '2020': 3.2,
    '2021': 1.2,
    '2022': 4.7
    
};
const ctx = document.getElementById('mybarChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: Object.keys(data),
        datasets: [{
            label: 'Rainfall Departure by Year',
            data: Object.values(data),
        }, ],
    },
    options: {
        plugins: {
            title: {
              display: true,
              text: 'Rainfall Departure in Bhoapal ',
              font: {
                size: 18
              }
            },
          },
        backgroundColor: [
            'rgba(226,234,60, 0.3)',  // Bar 1
            'rgba(194,172,57, 0.3)',  // Bar 2
            'rgba(16,44,139, 0.3)',  // Bar 3
            'rgba(179,138,114, 0.3)',  // Bar 4
            'rgba(77,212,123, 0.3)', // Bar 5
            'rgba(156,167,20, 0.3)',  // Bar 6
            'rgba(166,2,136, 0.3)',  // Bar 7
            'rgba(70,123,116, 0.3)',  // Bar 8
            'rgba(54,185,183, 0.3)',  // Bar 9
            'rgba(154,251,39, 0.3)',  // Bar 10
            'rgba(155,12,8, 0.3)', // Bar 11
            'rgba(171,212,68, 0.3)'   // Bar 12
        ],
        borderWidth: 2,
        borderColor: 'black',
        mantainAspectRatio: false,
        responsive: false
    }
});
});