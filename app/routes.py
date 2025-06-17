from flask import Blueprint, render_template, request, jsonify
from .model import predict_breast_cancer  # Import your breast cancer model

main = Blueprint('main', __name__)

@main.route('/')
def index():
    return render_template('index.html')  # Show form to enter breast cancer inputs

@main.route('/check_breast_cancer', methods=['GET', 'POST'])
def check_breast_cancer():
    if request.method == 'POST':
        data = request.form

        # Collect all 30 features
        features = [
            float(data['radius_mean']),
            float(data['texture_mean']),
            float(data['perimeter_mean']),
            float(data['area_mean']),
            float(data['smoothness_mean']),
            float(data['compactness_mean']),
            float(data['concavity_mean']),
            float(data['concave_points_mean']),
            float(data['symmetry_mean']),
            float(data['fractal_dimension_mean']),

            float(data['radius_se']),
            float(data['texture_se']),
            float(data['perimeter_se']),
            float(data['area_se']),
            float(data['smoothness_se']),
            float(data['compactness_se']),
            float(data['concavity_se']),
            float(data['concave_points_se']),
            float(data['symmetry_se']),
            float(data['fractal_dimension_se']),

            float(data['radius_worst']),
            float(data['texture_worst']),
            float(data['perimeter_worst']),
            float(data['area_worst']),
            float(data['smoothness_worst']),
            float(data['compactness_worst']),
            float(data['concavity_worst']),
            float(data['concave_points_worst']),
            float(data['symmetry_worst']),
            float(data['fractal_dimension_worst'])
        ]

        prediction = predict_breast_cancer(features)  # Returns 0 or 1
        # label = 'Benign' if prediction == 0 else 'Malignant'
        return jsonify({'prediction': prediction})
    return render_template('check_breast_cancer.html')


@main.route('/survey')
def survey():
    return render_template('survey.html')

@main.route('/model')
def model():
    return render_template('model.html')
