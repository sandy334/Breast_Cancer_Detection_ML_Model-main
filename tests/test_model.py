import pytest
import numpy as np
from app.models.model import predict_cancer

def test_model_prediction():
    # Sample test data
    sample_input = np.array([[17.99, 10.38, 122.8, 1001.0, 0.1184, 0.2776, 
                             0.3001, 0.1471, 0.2419, 0.07871]])
    
    result = predict_cancer(sample_input)
    assert isinstance(result, (int, np.integer))
    assert result in [0, 1]  # 0 for benign, 1 for malignant

def test_invalid_input():
    with pytest.raises(ValueError):
        predict_cancer(None)
    
    with pytest.raises(ValueError):
        predict_cancer(np.array([]))

def test_input_shape():
    invalid_input = np.array([[1, 2, 3]])  # Wrong number of features
    with pytest.raises(ValueError):
        predict_cancer(invalid_input)
