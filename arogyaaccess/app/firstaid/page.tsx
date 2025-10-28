import {
  Heart,
  Flame,
  Droplet,
  Zap,
  AlertTriangle,
  Scissors,
  Activity,
  Thermometer,
} from 'lucide-react';

export default function FirstAidPage() {
  const emergencies = [
    {
      icon: Heart,
      title: 'CPR (Cardiopulmonary Resuscitation)',
      color: 'from-red-500 to-pink-600',
      steps: [
        'Call emergency services immediately (dial local emergency number)',
        'Place person on firm surface on their back',
        'Place heel of hand in center of chest, other hand on top',
        'Push hard and fast - at least 2 inches deep',
        'Give 30 chest compressions at 100-120 per minute',
        'Give 2 rescue breaths (tilt head back, lift chin, pinch nose)',
        'Continue cycle of 30 compressions and 2 breaths',
      ],
    },
    {
      icon: Flame,
      title: 'Burns',
      color: 'from-orange-500 to-red-600',
      steps: [
        'Remove person from heat source',
        'Cool the burn with cool (not ice-cold) running water for 10-20 minutes',
        'Remove any jewelry or tight clothing before swelling starts',
        'Cover burn with sterile, non-stick bandage or clean cloth',
        'Do NOT apply ice, butter, or ointments',
        'For severe burns, seek medical attention immediately',
        'Give over-the-counter pain reliever if needed',
      ],
    },
    {
      icon: Droplet,
      title: 'Bleeding',
      color: 'from-red-600 to-rose-700',
      steps: [
        'Wash your hands if possible',
        'Apply direct pressure with clean cloth or bandage',
        'Maintain pressure for 10-15 minutes without checking',
        'If blood soaks through, add more cloth on top',
        'Elevate injured area above heart level if possible',
        'Once bleeding stops, secure bandage with tape',
        'Seek medical help for severe or persistent bleeding',
      ],
    },
    {
      icon: Zap,
      title: 'Electric Shock',
      color: 'from-yellow-500 to-orange-600',
      steps: [
        'DO NOT touch the person if still in contact with electrical source',
        'Turn off power source or disconnect power',
        'Call emergency services immediately',
        'Once safe, check for breathing and pulse',
        'Begin CPR if necessary',
        'Cover any burns with sterile gauze',
        'Keep person warm and lying down until help arrives',
      ],
    },
    {
      icon: AlertTriangle,
      title: 'Choking',
      color: 'from-purple-500 to-indigo-600',
      steps: [
        'Encourage coughing if person can cough',
        'If unable to cough/speak/breathe, perform Heimlich maneuver',
        'Stand behind person, wrap arms around waist',
        'Make fist above navel, grasp with other hand',
        'Give quick upward thrusts into abdomen',
        'Repeat until object is dislodged',
        'Call emergency services if unsuccessful',
      ],
    },
    {
      icon: Scissors,
      title: 'Cuts and Wounds',
      color: 'from-cyan-500 to-blue-600',
      steps: [
        'Wash hands thoroughly',
        'Stop bleeding by applying gentle pressure',
        'Clean wound with clean water',
        'Apply antibiotic ointment if available',
        'Cover with sterile bandage',
        'Change bandage daily or when wet/dirty',
        'Watch for signs of infection (redness, swelling, pus)',
      ],
    },
    {
      icon: Activity,
      title: 'Fractures',
      color: 'from-green-500 to-emerald-600',
      steps: [
        'Do not move injured person unless necessary',
        'Immobilize injured area',
        'Apply ice pack wrapped in cloth (not directly on skin)',
        'Do not try to realign bone',
        'For open fracture, cover wound with sterile bandage',
        'Treat for shock - keep warm, elevate legs',
        'Seek immediate medical attention',
      ],
    },
    {
      icon: Thermometer,
      title: 'Heat Stroke',
      color: 'from-rose-500 to-red-600',
      steps: [
        'Move person to cool, shaded area',
        'Remove excess clothing',
        'Cool person with wet cloths or spray water',
        'Fan the person',
        'Give cool water to drink if conscious',
        'Apply ice packs to armpits, groin, neck, and back',
        'Call emergency services - heat stroke is life-threatening',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-cyan-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-br from-red-500 to-pink-600 p-4 rounded-full">
              <Heart className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            First Aid Emergency Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quick reference for common medical emergencies. Always call emergency services for serious
            situations.
          </p>
        </div>

        {/* Emergency Notice */}
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-12">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-red-900 mb-2">Emergency Numbers</h3>
              <p className="text-red-800 mb-2">
                In case of emergency, call your local emergency services immediately:
              </p>
              <ul className="list-disc list-inside text-red-800 space-y-1">
                <li>India: 112 (Emergency) / 108 (Ambulance)</li>
                <li>Fire: 101</li>
                <li>Police: 100</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Emergency Procedures */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {emergencies.map((emergency, index) => {
            const Icon = emergency.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <div className={`bg-gradient-to-br ${emergency.color} text-white p-6`}>
                  <div className="flex items-center space-x-3">
                    <Icon className="h-8 w-8" />
                    <h2 className="text-2xl font-bold">{emergency.title}</h2>
                  </div>
                </div>
                <div className="p-6">
                  <ol className="space-y-3">
                    {emergency.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start space-x-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center text-sm font-semibold">
                          {stepIndex + 1}
                        </span>
                        <span className="text-gray-700 flex-1">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            );
          })}
        </div>

        {/* Important Notes */}
        <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-yellow-900 mb-3">Important Notes:</h3>
          <ul className="space-y-2 text-yellow-800">
            <li className="flex items-start space-x-2">
              <span className="text-yellow-600 font-bold">•</span>
              <span>Always call emergency services first in life-threatening situations</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-yellow-600 font-bold">•</span>
              <span>Stay calm and assess the situation before acting</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-yellow-600 font-bold">•</span>
              <span>Ensure your own safety before helping others</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-yellow-600 font-bold">•</span>
              <span>
                This guide is for reference only - proper first aid training is recommended
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-yellow-600 font-bold">•</span>
              <span>Always seek professional medical attention for serious injuries</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
