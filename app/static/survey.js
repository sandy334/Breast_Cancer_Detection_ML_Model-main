const ctx = document.getElementById('featureChart').getContext('2d');
const featureChart = new Chart(ctx, {
    type: 'bar', // Change to 'line' or 'pie' as needed
    data: {
        labels: ['Feature 1', 'Feature 2', 'Feature 3'], // Replace with actual feature names
        datasets: [{
            label: 'Relationship with Target',
            data: [12, 19, 3], // Replace with actual data
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
