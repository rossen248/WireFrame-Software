interface PaymentDetailsProps {
  onNext: () => void;
  onBack: () => void;
  language: 'NL' | 'FR';
}

export function PaymentDetails({ onNext, onBack, language }: PaymentDetailsProps) {
  return (
    <div className="container mx-auto px-4 md:px-6 py-6 md:py-12">
      <div className="h-8 md:h-10 w-48 md:w-64 bg-gray-400 rounded mb-6 md:mb-8"></div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        <div className="lg:col-span-2 space-y-4 md:space-y-6">
          <div className="border-2 border-gray-900 rounded p-4 md:p-6">
            <div className="h-5 md:h-6 w-40 md:w-48 bg-gray-400 rounded mb-4 md:mb-6"></div>
            
            <div className="space-y-3">
              {/* Pay in Store */}
              <div className="p-3 md:p-4 border-2 border-gray-900 rounded bg-gray-50">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-5 h-5 rounded-full border-2 border-gray-900 mt-0.5"></div>
                  <div className="flex-1">
                    <div className="mb-1">Ter Plaatse</div>
                    <div className="text-sm text-gray-600">Betaal bij het afhalen in de bakkerij</div>
                  </div>
                </div>
              </div>
              
              {/* Online Payment Options */}
              {[
                { icon: 'BC', label: 'Bancontact' },
                { icon: 'PP', label: 'Paypal' },
                { icon: 'PQ', label: 'Payconiq' },
                { icon: 'iDEAL', label: 'iDEAL' }
              ].map((method, i) => (
                <div key={i} className="p-3 md:p-4 border-2 border-gray-900 rounded">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-5 h-5 rounded-full border-2 border-gray-900"></div>
                    <div className="w-12 md:w-16 h-8 md:h-10 bg-gray-200 border-2 border-gray-900 rounded flex items-center justify-center text-xs">
                      {method.icon}
                    </div>
                    <div className="h-3.5 w-32 md:w-40 bg-gray-400 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-2 border-gray-900 rounded p-4 md:p-6">
            <div className="h-5 md:h-6 w-44 md:w-56 bg-gray-400 rounded mb-4 md:mb-6"></div>
            
            <div>
              <label className="block mb-2 text-sm">Selecteer uw bank</label>
              <div className="h-10 md:h-12 w-full border-2 border-gray-900 rounded flex items-center px-4 justify-between">
                <span className="text-sm text-gray-500">Kies uw bank...</span>
                <div className="w-4 h-4 bg-gray-500 rounded"></div>
              </div>
            </div>
          </div>

          <div className="border-2 border-gray-900 rounded p-4 md:p-6">
            <div className="h-5 md:h-6 w-48 md:w-64 bg-gray-400 rounded mb-4 md:mb-6"></div>
            
            <div className="space-y-4 mb-6">
              {[1, 2].map((item) => (
                <div key={item} className="flex flex-col sm:flex-row items-start gap-3 pb-4 border-b-2 border-gray-300 last:border-0">
                  <div className="w-14 h-14 md:w-16 md:h-16 border-2 border-gray-900 rounded relative flex-shrink-0">
                    <svg className="w-full h-full" viewBox="0 0 64 64">
                      <line x1="0" y1="0" x2="64" y2="64" stroke="currentColor" strokeWidth="2" className="text-gray-900"/>
                      <line x1="64" y1="0" x2="0" y2="64" stroke="currentColor" strokeWidth="2" className="text-gray-900"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="h-4 w-40 md:w-48 bg-gray-400 rounded mb-2"></div>
                    <div className="h-3 w-28 md:w-32 bg-gray-300 rounded mb-2"></div>
                    <div className="h-3 w-20 md:w-24 bg-gray-300 rounded"></div>
                  </div>
                  <div className="h-5 w-14 md:w-16 bg-gray-500 rounded"></div>
                </div>
              ))}
            </div>

            <div className="flex justify-between mb-2">
              <div className="h-3 w-16 bg-gray-300 rounded"></div>
              <div className="h-3 w-14 bg-gray-300 rounded"></div>
            </div>
            <div className="flex justify-between mb-2">
              <div className="h-3 w-20 bg-gray-300 rounded"></div>
              <div className="h-3 w-14 bg-gray-300 rounded"></div>
            </div>
            <div className="flex justify-between pt-3 border-t-2 border-gray-900">
              <div className="h-4 md:h-5 w-14 bg-gray-500 rounded"></div>
              <div className="h-4 md:h-5 w-16 bg-gray-500 rounded"></div>
            </div>
          </div>

          <div className="bg-gray-100 border-2 border-gray-900 rounded p-4">
            <label className="flex items-start gap-3 cursor-pointer">
              <div className="w-5 h-5 border-2 border-gray-900 rounded mt-0.5"></div>
              <div className="flex-1 space-y-2">
                <div className="h-3 w-full bg-gray-300 rounded"></div>
                <div className="h-3 w-2/3 bg-gray-300 rounded"></div>
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
              Bestelling Plaatsen
            </button>
            
            <button 
              onClick={onBack}
              className="w-full py-2.5 md:py-3 bg-white border-2 border-gray-900 rounded"
            >
              Terug
            </button>

            <div className="mt-4 pt-4 border-t border-gray-300">
              <div className="space-y-2">
                <div className="h-2.5 w-full bg-gray-200 rounded"></div>
                <div className="h-2.5 w-4/5 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}