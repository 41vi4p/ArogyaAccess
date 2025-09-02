# 🚀 Quick Setup Instructions for ArogyaAccess

## ⚡ Quick Start (5 minutes)

### 1. Install Dependencies
```bash
pip install -r requirements.txt
```

### 2. Configure Firebase & API Keys

#### Option A: Use Template Files (Recommended for Development)
The following files are created with placeholders:
- `set.py` - Firebase and API configuration
- `key2.json` - Firebase service account key
- `.env.example` - Environment variables template

**Replace placeholders with your actual values:**

1. **Firebase Setup:**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Authentication (Email/Password)
   - Enable Firestore Database
   - Go to Project Settings > Service Accounts
   - Generate new private key and save as `key2.json`
   - Copy your web app config to `set.py`

2. **Gemini AI Setup:**
   - Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create API key
   - Update `GEMINI_API_KEY` in `set.py`

#### Option B: Environment Variables (Recommended for Production)
```bash
cp .env.example .env
# Edit .env with your actual values
```

### 3. Run the Application
```bash
python routes.py
```

Visit: `http://localhost:5000`

## ✅ Verification Checklist

After setup, verify these features work:

- [ ] Homepage loads (`http://localhost:5000`)
- [ ] User registration works
- [ ] Email verification sent (check Firebase console)
- [ ] User login works after email verification
- [ ] Dashboard accessible after login
- [ ] Chatbot responds (requires Gemini API key)
- [ ] First aid page loads
- [ ] About page loads

## 🔧 Common Issues & Solutions

### Issue: Import Error for 'set' module
**Solution:** Make sure `set.py` exists with proper Firebase config

### Issue: Firebase Authentication Error  
**Solution:** 
1. Check Firebase project settings
2. Ensure Authentication is enabled
3. Verify `key2.json` is valid

### Issue: Chatbot not responding
**Solution:** 
1. Verify Gemini API key is correct
2. Check internet connectivity
3. Look for error messages in console

### Issue: Templates not found
**Solution:** Ensure you're running from the project root directory

## 📋 Required API Keys & Services

1. **Firebase Project** (Free)
   - Authentication
   - Firestore Database
   - Service Account Key

2. **Google Gemini AI API Key** (Free tier available)
   - Required for chatbot functionality

## 🏃‍♂️ Development Mode

For development, you can run with debug mode:

```bash
export FLASK_ENV=development
python routes.py
```

## 📦 Production Deployment

For production deployment:

1. Use environment variables instead of `set.py`
2. Set `FLASK_ENV=production`
3. Use a proper WSGI server like Gunicorn
4. Enable HTTPS
5. Configure proper Firebase security rules

## 📞 Need Help?

If you encounter issues:
1. Check the main README.md for detailed documentation
2. Ensure all prerequisites are installed
3. Verify API keys are valid
4. Check Firebase console for any errors