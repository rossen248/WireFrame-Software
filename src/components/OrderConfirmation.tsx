interface OrderConfirmationProps {
  onReset: () => void;
  language: 'NL' | 'FR';
}

export function OrderConfirmation({ onReset, language }: OrderConfirmationProps) {
  return (
    <div className="container mx-auto px-4 md:px-6 py-6 md:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-300 border-4 border-gray-900 rounded-full mx-auto mb-4 md:mb-6 flex items-center justify-center">
            <div className="text-gray-700 text-2xl md:text-3xl">✓</div>
          </div>
          <div className="h-8 md:h-10 w-72 md:w-96 bg-gray-400 rounded mx-auto mb-3 md:mb-4"></div>
          <div className="h-4 md:h-5 w-64 md:w-80 bg-gray-300 rounded mx-auto"></div>
        </div>

        {/* Confirmation Code - Prominent */}
        <div className="bg-gray-900 border-2 border-gray-900 rounded-lg p-6 md:p-8 mb-6 md:mb-8 text-center">
          <div className="text-white text-xs mb-2">BEVESTIGINGSCODE</div>
          <div className="text-white text-2xl md:text-4xl tracking-widest mb-1">BK-7X9P-42M3</div>
          <div className="text-gray-400 text-xs mt-3">Toon deze code bij afhalen</div>
        </div>

        {/* Email Confirmation Notice */}
        <div className="bg-gray-50 border-2 border-gray-900 rounded p-4 md:p-6 mb-6 md:mb-8">
          <div className="flex items-start gap-3 md:gap-4">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-500 border-2 border-gray-900 rounded-full flex-shrink-0"></div>
            <div className="flex-1 space-y-2">
              <div className="h-3.5 w-full bg-gray-400 rounded"></div>
              <div className="h-3.5 w-3/4 bg-gray-400 rounded"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
          {/* Pickup Date & Time */}
          <div className="border-2 border-gray-900 rounded p-4 md:p-6 bg-gray-50">
            <div className="h-5 md:h-6 w-40 md:w-48 bg-gray-400 rounded mb-3 md:mb-4"></div>
            <div className="space-y-2.5 md:space-y-3">
              <div>
                <div className="h-3 w-20 bg-gray-300 rounded mb-1"></div>
                <div className="h-4 md:h-5 w-32 md:w-36 bg-gray-500 rounded"></div>
              </div>
              <div>
                <div className="h-3 w-24 bg-gray-300 rounded mb-1"></div>
                <div className="h-4 md:h-5 w-28 md:w-32 bg-gray-500 rounded"></div>
              </div>
            </div>
          </div>

          <div className="border-2 border-gray-900 rounded p-4 md:p-6">
            <div className="h-5 md:h-6 w-32 md:w-40 bg-gray-400 rounded mb-3 md:mb-4"></div>
            <div className="space-y-2.5 md:space-y-3">
              <div>
                <div className="h-3 w-20 bg-gray-300 rounded mb-1"></div>
                <div className="h-3.5 w-28 bg-gray-400 rounded"></div>
              </div>
              <div>
                <div className="h-3 w-16 bg-gray-300 rounded mb-1"></div>
                <div className="h-3.5 w-24 bg-gray-400 rounded"></div>
              </div>
            </div>
          </div>

          <div className="border-2 border-gray-900 rounded p-4 md:p-6">
            <div className="h-5 md:h-6 w-40 md:w-48 bg-gray-400 rounded mb-3 md:mb-4"></div>
            <div className="space-y-2">
              <div className="h-3 w-32 bg-gray-300 rounded"></div>
              <div className="h-3 w-28 bg-gray-300 rounded"></div>
            </div>
          </div>

          <div className="border-2 border-gray-900 rounded p-4 md:p-6">
            <div className="h-5 md:h-6 w-32 md:w-40 bg-gray-400 rounded mb-3 md:mb-4"></div>
            <div className="space-y-2">
              <div className="h-3 w-28 bg-gray-300 rounded"></div>
              <div className="h-3 w-24 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>

        <div className="border-2 border-gray-900 rounded p-4 md:p-6 mb-6 md:mb-8">
          <div className="h-5 md:h-6 w-40 md:w-48 bg-gray-400 rounded mb-4 md:mb-6"></div>
          
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex flex-col sm:flex-row items-start gap-3 md:gap-4 pb-4 border-b-2 border-gray-300 last:border-0">
                <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-gray-900 rounded relative flex-shrink-0">
                  <svg className="w-full h-full" viewBox="0 0 80 80">
                    <line x1="0" y1="0" x2="80" y2="80" stroke="currentColor" strokeWidth="2" className="text-gray-900"/>
                    <line x1="80" y1="0" x2="0" y2="80" stroke="currentColor" strokeWidth="2" className="text-gray-900"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="h-4 w-40 md:w-48 bg-gray-400 rounded mb-2"></div>
                  <div className="h-3 w-28 md:w-32 bg-gray-300 rounded"></div>
                </div>
                <div className="text-right sm:ml-auto">
                  <div className="h-3 w-14 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 w-16 bg-gray-400 rounded"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t-2 border-gray-900 space-y-2">
            <div className="flex justify-between">
              <div className="h-3 w-16 bg-gray-300 rounded"></div>
              <div className="h-3 w-14 bg-gray-300 rounded"></div>
            </div>
            <div className="flex justify-between">
              <div className="h-3 w-20 bg-gray-300 rounded"></div>
              <div className="h-3 w-14 bg-gray-300 rounded"></div>
            </div>
            <div className="flex justify-between pt-2 border-t-2 border-gray-900">
              <div className="h-4 md:h-5 w-14 bg-gray-500 rounded"></div>
              <div className="h-4 md:h-5 w-16 bg-gray-500 rounded"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <button className="px-4 md:px-6 py-2.5 md:py-3 bg-white border-2 border-gray-900 rounded">
            Download Factuur
          </button>
          <button className="px-4 md:px-6 py-2.5 md:py-3 bg-gray-900 text-white border-2 border-gray-900 rounded">
            Volg Bestelling
          </button>
          <button 
            onClick={onReset}
            className="px-4 md:px-6 py-2.5 md:py-3 bg-gray-300 border-2 border-gray-900 rounded"
          >
            Nieuwe Bestelling
          </button>
        </div>
      </div>
    </div>
  );
}