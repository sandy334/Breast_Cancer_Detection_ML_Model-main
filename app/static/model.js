// Correlation Matrix Chart
const correlationCtx = document.getElementById('correlationChart').getContext('2d');
const correlationChart = new Chart(correlationCtx, {
    type: 'heatmap', // You may need to use a plugin for heatmaps
    data: {
        labels: ['Feature 1', 'Feature 2', 'Feature 3'], // Replace with actual feature names
        datasets: [{
            label: 'Correlation',
            data: [0.5, 0.3, -0.2], // Replace with actual correlation values
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
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

// Feature Importance Chart
const importanceCtx = document.getElementById('importanceChart').getContext('2d');
const importanceChart = new Chart(importanceCtx, {
    type: 'bar',
    data: {
        labels: ['Feature 1', 'Feature 2', 'Feature 3'], // Replace with actual feature names
        datasets: [{
            label: 'Importance',
            data: [0.4, 0.3, 0.2], // Replace with actual importance values
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
