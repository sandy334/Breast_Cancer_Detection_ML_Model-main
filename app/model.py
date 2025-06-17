import joblib

model = joblib.load('app/model/forest_model.pkl')

def predict_breast_cancer(features):
    prediction = model.predict([features])
    return "Malignant" if prediction[0] == 1 else "Benign"
