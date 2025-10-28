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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Connecting Rural Communities with Expert Healthcare
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-cyan-50">
              Access quality healthcare anytime, anywhere. No barriers, no boundaries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-center"
              >
                Get Started
              </Link>
              <Link
                href="/about"
                className="bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-700 transition border-2 border-white text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specially designed to bridge the healthcare gap between rural patients and urban
              medical professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition">
              <div className="bg-cyan-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Easy Doctor Contact
              </h3>
              <p className="text-gray-600">
                Connect with specialists instantly through our secure messaging platform
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition">
              <div className="bg-cyan-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Wifi className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Offline Ready</h3>
              <p className="text-gray-600">
                Access critical medical information even with poor connectivity
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition">
              <div className="bg-cyan-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Languages className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Multilingual Support
              </h3>
              <p className="text-gray-600">
                Healthcare information in your preferred language for better understanding
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition">
              <div className="bg-cyan-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">First Aid Guide</h3>
              <p className="text-gray-600">
                Step-by-step emergency procedures when every second counts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chatbot Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                AI-Powered Medical Assistant
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Get instant answers to your health questions with our Gemini AI-powered chatbot.
                Available 24/7 to provide medical guidance and emergency protocols.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <Activity className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Real-time medical information</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Safety guidelines and emergency protocols</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Stethoscope className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Simple, rural-friendly language</span>
                </li>
              </ul>
              <Link
                href="/register"
                className="inline-block bg-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition"
              >
                Try Chatbot Now
              </Link>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white p-6 rounded-lg mb-4">
                <p className="font-medium">Patient: What should I do for a fever?</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <p className="text-gray-700">
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

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Thousands of Users Already Using ArogyaAccess
          </h2>
          <p className="text-xl mb-8 text-cyan-50 max-w-2xl mx-auto">
            Whether you're a patient seeking care or a healthcare provider looking to help,
            ArogyaAccess connects you with the right people.
          </p>
          <Link
            href="/register"
            className="inline-block bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
