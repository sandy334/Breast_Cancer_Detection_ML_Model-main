# Breast Cancer Detection ML Model 🎗️

![Python](https://img.shields.io/badge/Python-3.8%2B-blue)
![Flask](https://img.shields.io/badge/Flask-2.0%2B-green)
![Scikit-learn](https://img.shields.io/badge/Scikit--learn-1.0%2B-orange)
![License](https://img.shields.io/badge/License-MIT-purple)
![Status](https://img.shields.io/badge/Status-Active-success)

> An advanced machine learning web application designed to assist in early breast cancer detection through AI-powered analysis and provide comprehensive awareness resources.

<p align="center">
  <img src="app/static/images/preview.png" alt="Project Preview" width="600">
</p>

## 🌐 Live Demo
Try out the live application: [Breast Cancer Detection App](https://breast-cancer-prediction-detection.onrender.com/)

## 🎯 Key Features

- **AI-Powered Detection**
  - Real-time breast cancer prediction
  - High accuracy machine learning model
  - Instant results visualization
a
- **User-Friendly Interface**
  - Modern, responsive design
  - Intuitive data input system
  - Mobile-optimized layout

- **Educational Resources**
  - Comprehensive breast cancer information
  - Early detection guidelines
  - Prevention strategies

## 🛠️ Technology Stack

### Frontend
- HTML5 & CSS3 with modern animations
- Responsive design principles
- Font Awesome icons
- Custom gradient effects

### Backend
- Python 3.8+
- Flask web framework
- RESTful API architecture

### Machine Learning
- Scikit-learn
- NumPy & Pandas
- Jupyter Notebooks (for model development)

## 🚀 Quick Start

### Prerequisites
- Python 3.8 or higher
- pip package manager
- Git

### Installation

1. **Clone the Repository**
```bash
git clone https://github.com/sandy334/Breast_Cancer_Detection_ML_Model.git
cd Breast_Cancer_Detection_ML_Model
```

2. **Set Up Virtual Environment**
```bash
python -m venv venv
# For Windows
venv\Scripts\activate
# For Unix/MacOS
source venv/bin/activate
```

3. **Install Dependencies**
```bash
pip install -r requirements.txt
```

4. **Start the Application**
```bash
python app.py
```

5. **Access the Application**
Open your browser and navigate to `http://localhost:5000`

## 💻 Webpage Design Preview
[Webpage Design] https://github.com/sandy334/Breast_Cancer_Detection_ML_Model-main/blob/main/Web%20page%201.png

## 🔗 Live Figma Design
[Figma Webpage Design Preview] https://www.figma.com/design/YjgjZ4JcoskzgrGqV4mX5h/Untitled?node-id=24-3&t=NzSSwSpqj6aqVEqV-1

## 📊 Machine Learning Model

### Dataset
The model is trained on the Wisconsin Breast Cancer Dataset, containing features computed from digitized images of breast mass FNA biopsies.

### Model Architecture
- **Algorithm**: Random Forest Classifier
- **Accuracy**: 96.5% on test set
- **Features**: 30 input parameters
- **Output**: Binary classification (Malignant/Benign)

### Performance Metrics
| Metric | Score |
|--------|--------|
| Accuracy | 96.5% |
| Precision | 95.8% |
| Recall | 97.2% |
| F1 Score | 96.5% |

## 📁 Project Structure

```
Breast_Cancer_Detection_ML_Model/
├── app/
│   ├── templates/                 # HTML templates
│   ├── static/                   # Static assets
│   │   ├── css/                  # Stylesheets
│   │   ├── js/                   # JavaScript files
│   │   └── images/              # Image assets
│   ├── models/                   # ML model files
│   └── utils/                    # Utility functions
├── notebooks/                    # Jupyter notebooks
├── tests/                       # Unit tests
├── requirements.txt             # Dependencies
├── config.py                    # Configuration
└── app.py                       # Main application
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Developer

**Sandesh H R**
- 🌐 [Portfolio](https://sandeshportfoliofrontend.netlify.app)
- 💼 [LinkedIn](https://www.linkedin.com/in/sandesh-hr-32262a220/)
- 🐱 [GitHub](https://github.com/sandy334)
- 📧 [Email](mailto:sandeshhr334@gmail.com)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Wisconsin Breast Cancer Dataset providers
- Scikit-learn development team
- Flask framework community
- All contributors and supporters

## 📈 Future Enhancements

- [ ] Add real-time image processing
- [ ] Implement user authentication
- [ ] Include multiple ML models for comparison
- [ ] Add API documentation
- [ ] Integrate with medical databases

## 💝 Support

If you find this project helpful, please consider:
- Giving it a ⭐️ on GitHub
- Sharing it with others
- Contributing to its improvement

---

<p align="center">Made with ❤️ for the fight against breast cancer</p>
