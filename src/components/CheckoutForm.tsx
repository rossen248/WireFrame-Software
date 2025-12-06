interface CheckoutFormProps {
  onNext: () => void;
  onBack: () => void;
  language: 'NL' | 'FR';
}

export function CheckoutForm({ onNext, onBack, language }: CheckoutFormProps) {
  return (
    <div className="container mx-auto px-4 md:px-6 py-6 md:py-12">
      <div className="h-8 md:h-10 w-56 md:w-72 bg-gray-400 rounded mb-6 md:mb-8"></div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        <div className="lg:col-span-2 space-y-4 md:space-y-6">
          <div className="border-2 border-gray-900 rounded p-4 md:p-6">
            <div className="h-5 md:h-6 w-40 md:w-48 bg-gray-400 rounded mb-4 md:mb-6"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-sm">Voornaam</label>
                <div className="h-10 w-full border-2 border-gray-900 rounded"></div>
              </div>
              <div>
                <label className="block mb-2 text-sm">Achternaam</label>
                <div className="h-10 w-full border-2 border-gray-900 rounded"></div>
              </div>
              <div className="md:col-span-2">
                <label className="block mb-2 text-sm">E-mailadres</label>
                <div className="h-10 w-full border-2 border-gray-900 rounded"></div>
              </div>
              <div className="md:col-span-2">
                <label className="block mb-2 text-sm">Telefoonnummer</label>
                <div className="h-10 w-full border-2 border-gray-900 rounded"></div>
              </div>
            </div>
          </div>

          {/* Pickup Date & Time Section */}
          <div className="border-2 border-gray-900 rounded p-4 md:p-6 bg-gray-50">
            <div className="h-5 md:h-6 w-48 md:w-64 bg-gray-400 rounded mb-4 md:mb-6"></div>
            
            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-sm">Afhaaldatum</label>
                <div className="h-10 md:h-12 w-full border-2 border-gray-900 rounded bg-white flex items-center px-4 justify-between">
                  <span className="text-sm text-gray-500">Kies datum...</span>
                  <div className="w-4 h-4 bg-gray-500 rounded"></div>
                </div>
              </div>
              
              <div>
                <label className="block mb-2 text-sm">Afhaaltijdstip</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    '7:15 - 7:30',
                    '7:30 - 7:45',
                    '8:00 - 8:15',
                    '8:15 - 8:30',
                    '8:30 - 8:45',
                    '9:00 - 9:15'
                  ].map((timeSlot, i) => (
                    <button
                      key={i}
                      className="p-2 md:p-3 border-2 border-gray-900 rounded text-xs md:text-sm hover:bg-gray-900 hover:text-white transition-colors"
                    >
                      {timeSlot}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="border-2 border-gray-900 rounded p-4 md:p-6">
            <div className="h-5 md:h-6 w-44 md:w-56 bg-gray-400 rounded mb-4 md:mb-6"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block mb-2 text-sm">Adres</label>
                <div className="h-10 w-full border-2 border-gray-900 rounded"></div>
              </div>
              <div>
                <label className="block mb-2 text-sm">Huisnummer</label>
                <div className="h-10 w-full border-2 border-gray-900 rounded"></div>
              </div>
              <div>
                <label className="block mb-2 text-sm">Toevoeging</label>
                <div className="h-10 w-full border-2 border-gray-900 rounded"></div>
              </div>
              <div>
                <label className="block mb-2 text-sm">Postcode</label>
                <div className="h-10 w-full border-2 border-gray-900 rounded"></div>
              </div>
              <div>
                <label className="block mb-2 text-sm">Plaats</label>
                <div className="h-10 w-full border-2 border-gray-900 rounded"></div>
              </div>
            </div>
          </div>

          <div className="border-2 border-gray-900 rounded p-4 md:p-6">
            <div className="h-5 md:h-6 w-40 md:w-48 bg-gray-400 rounded mb-4 md:mb-6"></div>
            
            <div className="space-y-3">
              {[
                { label: 'Thuisbezorging' },
                { label: 'Ophalen in winkel' },
                { label: 'Express levering' }
              ].map((option, i) => (
                <div key={i} className="p-3 md:p-4 border-2 border-gray-900 rounded">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-gray-900 mt-0.5"></div>
                    <div className="flex-1">
                      <div className="h-3.5 w-32 md:w-40 bg-gray-400 rounded mb-2"></div>
                      <div className="h-3 w-full md:w-64 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-100 border-2 border-gray-900 rounded p-4">
            <label className="flex items-start gap-3 cursor-pointer">
              <div className="w-5 h-5 border-2 border-gray-900 rounded mt-0.5"></div>
              <div className="flex-1 space-y-2">
                <div className="h-3 w-full bg-gray-300 rounded"></div>
                <div className="h-3 w-3/4 bg-gray-300 rounded"></div>
              </div>
            </label>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="border-2 border-gray-900 rounded p-4 md:p-6 lg:sticky lg:top-6">
            <div className="h-5 md:h-6 w-28 md:w-32 bg-gray-400 rounded mb-4 md:mb-6"></div>
            
            <div className="space-y-2.5 md:space-y-3 mb-4 md:mb-6 pb-4 md:pb-6 border-b-2 border-gray-900">
              <div className="flex justify-between">
                <div className="h-3 w-20 bg-gray-300 rounded"></div>
                <div className="h-3 w-14 bg-gray-400 rounded"></div>
              </div>
              <div className="flex justify-between">
                <div className="h-3 w-24 bg-gray-300 rounded"></div>
                <div className="h-3 w-14 bg-gray-400 rounded"></div>
              </div>
              <div className="flex justify-between">
                <div className="h-3 w-16 bg-gray-300 rounded"></div>
                <div className="h-3 w-14 bg-gray-400 rounded"></div>
              </div>
            </div>

            <div className="flex justify-between items-center mb-4 md:mb-6">
              <div className="h-5 md:h-6 w-16 bg-gray-500 rounded"></div>
              <div className="h-5 md:h-6 w-16 bg-gray-500 rounded"></div>
            </div>

            <button 
              onClick={onNext}
              className="w-full py-2.5 md:py-3 bg-gray-900 text-white border-2 border-gray-900 rounded mb-3"
            >
              Naar Betaling
            </button>
            
            <button 
              onClick={onBack}
              className="w-full py-2.5 md:py-3 bg-white border-2 border-gray-900 rounded"
            >
              Terug
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}