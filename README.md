# 🏥 ArogyaAccess - Rural Healthcare Platform

**"Enhancing healthcare accessibility, regardless of geographic barriers."**

ArogyaAccess is a comprehensive telehealth platform designed to bridge the healthcare gap between rural patients and urban medical professionals. Built by Team CodeBreakers for hackathon competition, this platform addresses unique challenges faced by rural communities including fragile trust, language barriers, patchy connectivity, and disjointed infrastructure.

## 🌟 Features

### 🔐 User Authentication & Management
- Secure user registration and login system using Firebase Authentication
- Email verification for account security
- Session management with Flask-Login
- Role-based access control

### 🤖 AI-Powered Medical Chatbot
- Interactive chatbot powered by Google's Gemini AI
- Medical information and guidance for common health queries
- Emergency response protocols and first aid guidance
- Rural-friendly, simple language responses
- Real-time chat interface with modern UI

### 🚨 Emergency First Aid Guide
- Comprehensive first aid information
- Step-by-step emergency procedures
- Offline-capable data for areas with poor connectivity
- Quick access to critical medical information

### 💬 Doctor-Patient Communication
- Secure messaging system between patients and healthcare professionals
- Appointment scheduling and management
- Medical history tracking
- Prescription and treatment plan sharing

### 🌐 Responsive Design
- Mobile-first responsive design
- Works across all device types
- Optimized for low-bandwidth connections
- Intuitive user interface for all technical skill levels

## 🛠️ Tech Stack

### Backend
- **Flask** - Python web framework
- **Firebase** - Authentication and real-time database
- **Google Gemini AI** - Chatbot functionality
- **Flask-Login** - User session management
- **Flask-WTF** - Form handling and validation
- **Flask-Bcrypt** - Password hashing

### Frontend
- **HTML5/CSS3** - Structure and styling
- **JavaScript** - Interactive functionality
- **Bootstrap** - Responsive design framework
- **Font Awesome** - Icon library

### Database
- **Firebase Firestore** - NoSQL cloud database
- **Firebase Realtime Database** - Real-time data synchronization

## 📋 Prerequisites

Before running the application, ensure you have:

- Python 3.7+ installed
- Node.js and npm (for frontend dependencies)
- Firebase project set up
- Google Gemini AI API key

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/ArogyaAccess.git
cd ArogyaAccess
```

### 2. Set Up Virtual Environment
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
npm install  # If you have frontend dependencies
```

### 4. Configure Environment Variables
1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Fill in your configuration values in `.env`:
```env
SECRET_KEY=your-super-secret-key-here
GEMINI_API_KEY=your-gemini-api-key-here
# Add other required variables
```

### 5. Configure Firebase
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication and Firestore
3. Download your service account key as `key2.json`
4. Update `set.py` with your Firebase configuration:

```python
config = {
    "apiKey": "your-api-key",
    "authDomain": "your-project.firebaseapp.com",
    "databaseURL": "https://your-project-rtdb.firebaseio.com/",
    "projectId": "your-project-id",
    "storageBucket": "your-project.appspot.com",
    "messagingSenderId": "your-sender-id",
    "appId": "your-app-id"
}
```

### 6. Run the Application
```bash
python routes.py
```

The application will be available at `http://localhost:5000`

## 📁 Project Structure

```
ArogyaAccess/
├── templates/          # HTML templates
│   ├── base.html      # Base template
│   ├── index.html     # Homepage
│   ├── login.html     # Login page
│   ├── auth.html      # Registration page
│   ├── dashboard.html # User dashboard
│   ├── chatbot.html   # AI chatbot interface
│   ├── firstaid.html  # First aid guide
│   └── ...
├── static/            # Static files (CSS, JS, images)
│   ├── styles/       # CSS files
│   ├── js/           # JavaScript files
│   └── images/       # Image assets
├── app.py            # Flask app configuration
├── routes.py         # Application routes and logic
├── models.py         # Database models
├── forms.py          # WTForms form definitions
├── set.py            # Configuration settings
├── requirements.txt  # Python dependencies
├── vercel.json       # Vercel deployment config
└── README.md         # This file
```

## 🎯 Core Features Explanation

### Authentication System
- Users register with email verification
- Firebase handles secure authentication
- Session management ensures user security
- Password hashing with bcrypt

### AI Chatbot
- Powered by Google's Gemini AI
- Specialized medical knowledge base
- Contextual responses for rural healthcare
- Safety guidelines and emergency protocols

### Emergency Features
- First aid procedures with step-by-step guides
- Emergency contact information
- Offline-capable content for connectivity issues
- Quick access to critical information

## 🌐 Deployment

### Vercel Deployment
The project includes `vercel.json` configuration for easy deployment:

```bash
npm install -g vercel
vercel --prod
```

### Environment Variables for Production
Set these environment variables in your deployment platform:
- `SECRET_KEY`
- `GEMINI_API_KEY`
- Firebase configuration variables
- Database connection strings

## 🚨 Important Security Notes

1. **Never commit sensitive files:**
   - `key2.json` (Firebase credentials)
   - `set.py` (API keys and config)
   - `.env` files

2. **Configure proper CORS settings** for production
3. **Use environment variables** for all sensitive data
4. **Enable Firebase security rules** for database access
5. **Use HTTPS** in production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and test thoroughly
4. Commit with descriptive messages
5. Push to your branch: `git push origin feature-name`
6. Submit a pull request

## 📱 API Endpoints

### Authentication
- `POST /login` - User login
- `POST /register` - User registration
- `GET /logout` - User logout

### Main Routes
- `GET /` - Homepage
- `GET /dashboard` - User dashboard (login required)
- `GET /chatbot` - AI chatbot interface (login required)
- `GET /firstaid` - First aid guide
- `GET /about` - About page

### API Routes
- `POST /api/chat` - Chat with AI assistant (login required)

## 🎥 Demo Videos

- **Presentation**: [PowerPoint Presentation](https://youtu.be/EWUAah_7XiQ)
- **Website Preview**: [Live Demo](https://youtu.be/aCQ8LU9zKH4)

## 👥 Team CodeBreakers

This project was developed by Team CodeBreakers as part of a hackathon to address healthcare accessibility challenges in rural areas.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support & Issues

If you encounter any issues or need support:

1. Check the [Issues](https://github.com/your-username/ArogyaAccess/issues) section
2. Create a new issue with detailed description
3. Include error messages and steps to reproduce

## 🔮 Future Enhancements

- [ ] Multi-language support for regional languages
- [ ] Voice-to-text functionality for patients with reading difficulties
- [ ] Integration with wearable devices
- [ ] Telemedicine video calling
- [ ] Prescription management system
- [ ] Health record digitization
- [ ] SMS-based notifications for low-connectivity areas
- [ ] Integration with government health schemes

---

**Made with ❤️ by Team CodeBreakers for connecting rural patients with healthcare professionals.**