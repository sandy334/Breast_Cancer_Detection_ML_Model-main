import os

class Config:
    # Application config
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'your-secret-key-here'
    DEBUG = False
    TESTING = False
    
    # Model config
    MODEL_PATH = os.path.join('app', 'models', 'breast_cancer_model.pkl')
    MODEL_VERSION = '1.0.0'
    
    # API config
    API_TITLE = 'Breast Cancer Detection API'
    API_VERSION = '1.0'
    
    # Feature names for the model
    FEATURE_NAMES = [
        'radius_mean', 'texture_mean', 'perimeter_mean', 'area_mean',
        'smoothness_mean', 'compactness_mean', 'concavity_mean',
        'concave_points_mean', 'symmetry_mean', 'fractal_dimension_mean'
    ]
    
class DevelopmentConfig(Config):
    DEBUG = True
    
class TestingConfig(Config):
    TESTING = True
    
class ProductionConfig(Config):
    # Production-specific settings
    DEBUG = False
    
# Export configurations
config = {
    'development': DevelopmentConfig,
    'testing': TestingConfig,
    'production': ProductionConfig,
    'default': DevelopmentConfig
}
