import Link from 'next/link';
import {
  Heart,
  MessageCircle,
  Wifi,
  Languages,
  Stethoscope,
  Users,
  Activity,
  Shield,
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Animated Gradient */}
      <section className="relative overflow-hidden pt-16">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 dark:from-purple-900 dark:via-pink-900 dark:to-orange-600">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 dark:from-cyan-800 dark:via-blue-900 dark:to-indigo-900 opacity-70 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-green-400 via-teal-500 to-blue-600 dark:from-green-800 dark:via-teal-900 dark:to-blue-900 opacity-50"></div>
        </div>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-20 dark:bg-opacity-40"></div>

        {/* Content */}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-40">
          <div className="max-w-4xl mx-auto text-center">
            {/* Animated Badge */}
            <div className="inline-block mb-6 px-6 py-2 bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-full border border-white/20">
              <p className="text-white text-sm font-medium">🌟 Transforming Rural Healthcare</p>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-2xl">
              Connecting Rural Communities with{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-pink-200 to-cyan-200">
                Expert Healthcare
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-10 text-white/90 drop-shadow-lg max-w-3xl mx-auto">
              Access quality healthcare anytime, anywhere. Breaking barriers, building bridges to better health.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/register"
                className="group relative px-8 py-4 bg-white rounded-xl font-bold hover:scale-105 transition-transform duration-300 shadow-2xl text-center min-w-[200px] overflow-hidden"
              >
                <span className="relative z-10 group-hover:opacity-0 transition-opacity duration-300 text-purple-600">
                  Get Started
                </span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold z-20">
                  Get Started →
                </span>
              </Link>

              <Link
                href="/about"
                className="px-8 py-4 bg-white/10 backdrop-blur-lg text-white rounded-xl font-bold hover:bg-white/20 transition-all duration-300 border-2 border-white/30 hover:border-white/60 text-center min-w-[200px] shadow-xl"
              >
                Learn More
              </Link>
            </div>

            {/* Feature Pills */}
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/20">
                ✨ AI-Powered Chatbot
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/20">
                🚑 Emergency First Aid
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/20">
                🌐 Offline Ready
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/20">
                🗣️ Multilingual
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="currentColor"
              className="text-white dark:text-gray-900"
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Features</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Specially designed to bridge the healthcare gap between rural patients and urban
              medical professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl hover:shadow-lg transition">
              <div className="bg-cyan-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Easy Doctor Contact
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Connect with specialists instantly through our secure messaging platform
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl hover:shadow-lg transition">
              <div className="bg-cyan-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Wifi className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Offline Ready</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Access critical medical information even with poor connectivity
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl hover:shadow-lg transition">
              <div className="bg-cyan-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Languages className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Multilingual Support
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Healthcare information in your preferred language for better understanding
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl hover:shadow-lg transition">
              <div className="bg-cyan-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">First Aid Guide</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Step-by-step emergency procedures when every second counts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chatbot Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 transition-colors">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                AI-Powered Medical Assistant
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Get instant answers to your health questions with our Gemini AI-powered chatbot.
                Available 24/7 to provide medical guidance and emergency protocols.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <Activity className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 dark:text-gray-300">Real-time medical information</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 dark:text-gray-300">Safety guidelines and emergency protocols</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Stethoscope className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 dark:text-gray-300">Simple, rural-friendly language</span>
                </li>
              </ul>
              <Link
                href="/register"
                className="inline-block bg-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition"
              >
                Try Chatbot Now
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white p-6 rounded-lg mb-4">
                <p className="font-medium">Patient: What should I do for a fever?</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300">
                  AI Assistant: For fever management: 1) Rest and stay hydrated 2) Take
                  fever-reducing medication if available 3) Use cool compresses 4) Monitor temperature
                  regularly. Seek immediate medical attention if fever exceeds 103°F or lasts more
                  than 3 days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Gradient */}
      <section className="relative overflow-hidden py-20">
        {/* Multi-layer Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-800">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-cyan-500 to-teal-400 dark:from-blue-900 dark:via-cyan-900 dark:to-teal-800 opacity-60"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-orange-400 via-red-500 to-pink-600 dark:from-orange-800 dark:via-red-900 dark:to-pink-900 opacity-40"></div>
        </div>

        {/* Animated Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>

        {/* Content */}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-2xl">
            Join Thousands of Users{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-pink-200 to-cyan-200">
              Already Using ArogyaAccess
            </span>
          </h2>

          <p className="text-xl md:text-2xl mb-10 text-white/90 drop-shadow-lg max-w-3xl mx-auto">
            Whether you're a patient seeking care or a healthcare provider looking to help,
            ArogyaAccess connects you with the right people.
          </p>

          <Link
            href="/register"
            className="inline-block group relative px-10 py-5 bg-white rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl overflow-hidden"
          >
            <span className="relative z-10 group-hover:opacity-0 transition-opacity duration-300 text-purple-600">
              Get Started Today
            </span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold z-20">
              Get Started Today →
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
