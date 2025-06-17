document.getElementById('breastCancerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect all 30 input values
    const radius_mean = document.getElementById('radius_mean').value;
    const texture_mean = document.getElementById('texture_mean').value;
    const perimeter_mean = document.getElementById('perimeter_mean').value;
    const area_mean = document.getElementById('area_mean').value;
    const smoothness_mean = document.getElementById('smoothness_mean').value;
    const compactness_mean = document.getElementById('compactness_mean').value;
    const concavity_mean = document.getElementById('concavity_mean').value;
    const concave_points_mean = document.getElementById('concave_points_mean').value;
    const symmetry_mean = document.getElementById('symmetry_mean').value;
    const fractal_dimension_mean = document.getElementById('fractal_dimension_mean').value;

    const radius_se = document.getElementById('radius_se').value;
    const texture_se = document.getElementById('texture_se').value;
    const perimeter_se = document.getElementById('perimeter_se').value;
    const area_se = document.getElementById('area_se').value;
    const smoothness_se = document.getElementById('smoothness_se').value;
    const compactness_se = document.getElementById('compactness_se').value;
    const concavity_se = document.getElementById('concavity_se').value;
    const concave_points_se = document.getElementById('concave_points_se').value;
    const symmetry_se = document.getElementById('symmetry_se').value;
    const fractal_dimension_se = document.getElementById('fractal_dimension_se').value;

    const radius_worst = document.getElementById('radius_worst').value;
    const texture_worst = document.getElementById('texture_worst').value;
    const perimeter_worst = document.getElementById('perimeter_worst').value;
    const area_worst = document.getElementById('area_worst').value;
    const smoothness_worst = document.getElementById('smoothness_worst').value;
    const compactness_worst = document.getElementById('compactness_worst').value;
    const concavity_worst = document.getElementById('concavity_worst').value;
    const concave_points_worst = document.getElementById('concave_points_worst').value;
    const symmetry_worst = document.getElementById('symmetry_worst').value;
    const fractal_dimension_worst = document.getElementById('fractal_dimension_worst').value;

    // Send data to the server using fetch
    fetch('/check_breast_cancer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            radius_mean,
            texture_mean,
            perimeter_mean,
            area_mean,
            smoothness_mean,
            compactness_mean,
            concavity_mean,
            concave_points_mean,
            symmetry_mean,
            fractal_dimension_mean,
            radius_se,
            texture_se,
            perimeter_se,
            area_se,
            smoothness_se,
            compactness_se,
            concavity_se,
            concave_points_se,
            symmetry_se,
            fractal_dimension_se,
            radius_worst,
            texture_worst,
            perimeter_worst,
            area_worst,
            smoothness_worst,
            compactness_worst,
            concavity_worst,
            concave_points_worst,
            symmetry_worst,
            fractal_dimension_worst
        })
    })
    .then(response => response.json())
    .then(data => {
        // Display the result
        document.getElementById('result').innerText = `Prediction: ${data.prediction}`;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
