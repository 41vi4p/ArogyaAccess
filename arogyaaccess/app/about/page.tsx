import { Heart, Users, Target, Award, MessageCircle, Wifi, Languages, Shield } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white py-20 pt-36">
        {/* Multi-layer Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 opacity-70 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-green-400 via-teal-500 to-blue-600 opacity-50"></div>
        </div>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-16 w-16 mx-auto mb-6 drop-shadow-lg" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-2xl">About ArogyaAccess</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-lg">
            Bridging the healthcare gap between rural communities and expert medical professionals
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Target className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Mission</h2>
            </div>
            <div className="bg-gray-700 rounded-2xl p-8 md:p-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                ArogyaAccess is a comprehensive telehealth platform designed to bridge the healthcare
                gap between rural patients and urban medical professionals. Our mission is to make
                quality healthcare accessible to everyone, regardless of geographic barriers.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We understand the unique challenges faced by rural communities - fragile trust,
                language barriers, patchy connectivity, and disjointed infrastructure. Our platform
                addresses each of these challenges with innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg text-center">
              <div className="bg-cyan-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Accessibility</h3>
              <p className="text-gray-400">
                Making healthcare available to everyone, everywhere
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg text-center">
              <div className="bg-cyan-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Trust</h3>
              <p className="text-gray-400">Building confidence through reliable medical guidance</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg text-center">
              <div className="bg-cyan-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Languages className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Inclusivity</h3>
              <p className="text-gray-400">Supporting multiple languages and all communities</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg text-center">
              <div className="bg-cyan-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Excellence</h3>
              <p className="text-gray-400">Providing the highest quality medical assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="bg-cyan-500 p-3 rounded-lg flex-shrink-0">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">AI-Powered Chatbot</h3>
                <p className="text-gray-400">
                  Gemini AI-powered medical assistant providing instant health guidance and emergency
                  protocols 24/7
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-cyan-500 p-3 rounded-lg flex-shrink-0">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">First Aid Guide</h3>
                <p className="text-gray-400">
                  Comprehensive emergency procedures and step-by-step guides for critical situations
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-cyan-500 p-3 rounded-lg flex-shrink-0">
                <Wifi className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Offline Capability</h3>
                <p className="text-gray-400">
                  Access critical medical information even in areas with poor connectivity
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-cyan-500 p-3 rounded-lg flex-shrink-0">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Patient-Doctor Network</h3>
                <p className="text-gray-400">
                  Secure platform connecting patients with healthcare professionals for consultations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative overflow-hidden py-20 text-white">
        {/* Multi-layer Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-cyan-500 to-teal-400 opacity-60"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-orange-400 via-red-500 to-pink-600 opacity-40"></div>
        </div>

        {/* Animated Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="h-12 w-12 mx-auto mb-4 drop-shadow-lg" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-2xl">Team CodeBreakers</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow-lg">
            Built by a passionate team dedicated to solving healthcare accessibility challenges in rural
            areas. Our diverse expertise in technology and healthcare drives our mission to make a real
            difference in people's lives.
          </p>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 max-w-2xl mx-auto border border-white/20">
            <p className="text-lg text-white/90">
              "Enhancing healthcare accessibility, regardless of geographic barriers."
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Have questions or want to learn more about ArogyaAccess? We'd love to hear from you.
          </p>
          <a
            href="mailto:arogyaaccess@gmail.com"
            className="inline-block bg-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-600 transition text-lg"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
