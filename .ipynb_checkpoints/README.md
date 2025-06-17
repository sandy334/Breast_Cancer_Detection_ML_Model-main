
# 🎗️ Breast Cancer Prediction & Awareness Website

This is a full-stack web application designed to raise awareness about breast cancer and help users predict the likelihood of breast cancer using machine learning. It features an engaging frontend built with **React.js** and a Python-based **Flask API** backend using the **Breast Cancer Wisconsin Dataset**.

---

## 🌟 Features

- 🎨 Elegant, responsive UI using light pink color themes
- 🔍 Breast cancer prediction using a trained Random Forest model
- 📚 Educational resources and awareness content
- 📈 Real-time interaction between frontend and backend
- 💡 Easy-to-deploy and customizable

---

## 🧰 Tech Stack

### Frontend
- React.js
- HTML5 & CSS3
- Google Fonts (`Montserrat`)

### Backend
- Python
- Flask
- Scikit-learn, Pandas, NumPy

### Dataset
- Breast Cancer Wisconsin (Diagnostic) Dataset  
  Source: [UCI ML Repository](https://archive.ics.uci.edu/ml/datasets/Breast+Cancer+Wisconsin+(Diagnostic))

---

## 📁 Project Structure

```

breast-cancer-awareness/
├── client/                  # React Frontend
│   ├── public/
│   └── src/
│       ├── components/
│       └── App.js
├── server/                  # Python Backend
│   ├── model/
│   └── app.py
├── static/                  # CSS styles
├── LICENSE
├── README.md

````

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/breast-cancer-awareness.git
cd breast-cancer-awareness
````

### 2. Set up the backend

```bash
cd server
pip install -r requirements.txt
python app.py
```

### 3. Set up the frontend

```bash
cd client
npm install
npm start
```

Visit `http://localhost:3000` to view the app. Backend runs on `http://localhost:5000`.

---

## 📄 License

This project is licensed under the MIT License.
See the [LICENSE](./LICENSE) file for details.

---

## 👤 Author

**HR Sandesh**

---

## 🌍 Deployment Suggestions

* Host backend on: **Render**, **Railway**, or **Heroku**
* Host frontend on: **Vercel**, **Netlify**, or **GitHub Pages**

