import { useState } from 'react';

interface ProductSelectionProps {
  onNext: () => void;
  language: 'NL' | 'FR';
}

export function ProductSelection({ onNext, language }: ProductSelectionProps) {
  const [showProductInfo, setShowProductInfo] = useState<number | null>(null);
  const [showPreviousOrders, setShowPreviousOrders] = useState(false);

  return (
    <div>
      <section className="border-b-2 border-gray-900 bg-white">
        <div className="container mx-auto px-4 md:px-6 py-8 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div>
              <div className="h-8 md:h-12 w-48 md:w-64 bg-gray-400 rounded mb-4"></div>
              <div className="space-y-2 mb-6">
                <div className="h-3 w-full bg-gray-300 rounded"></div>
                <div className="h-3 w-full bg-gray-300 rounded"></div>
                <div className="h-3 w-3/4 bg-gray-300 rounded"></div>
              </div>
              <div className="space-y-2">
                <div className="h-3 w-full bg-gray-300 rounded"></div>
                <div className="h-3 w-5/6 bg-gray-300 rounded"></div>
              </div>
            </div>
            <div className="aspect-[4/3] border-2 border-gray-900 rounded relative">
              <svg className="w-full h-full" viewBox="0 0 400 300">
                <line x1="0" y1="0" x2="400" y2="300" stroke="currentColor" strokeWidth="2" className="text-gray-900"/>
                <line x1="400" y1="0" x2="0" y2="300" stroke="currentColor" strokeWidth="2" className="text-gray-900"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-y border-gray-300 py-3 md:py-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 md:w-8 md:h-8 border-2 border-gray-900 rounded-full"></div>
            <div className="h-3 w-64 md:w-96 bg-gray-400 rounded"></div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-6 md:py-12">
        {/* Previous Orders Section */}
        <div className="mb-6 md:mb-8 border-2 border-gray-900 rounded p-4 md:p-6 bg-gray-50">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
            <div className="h-5 md:h-6 w-48 md:w-64 bg-gray-400 rounded"></div>
            <button 
              onClick={() => setShowPreviousOrders(!showPreviousOrders)}
              className="px-4 py-2 border-2 border-gray-900 rounded text-sm"
            >
              {showPreviousOrders ? '− Verbergen' : '+ Toon Vorige Bestellingen'}
            </button>
          </div>
          
          {showPreviousOrders && (
            <div className="space-y-3 mt-4 border-t-2 border-gray-900 pt-4">
              {[1, 2, 3].map((order) => (
                <div key={order} className="border-2 border-gray-900 rounded p-3 bg-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div className="flex-1">
                    <div className="h-4 w-40 md:w-48 bg-gray-400 rounded mb-2"></div>
                    <div className="h-3 w-32 md:w-40 bg-gray-300 rounded"></div>
                  </div>
                  <button className="px-4 py-1.5 bg-gray-900 text-white border-2 border-gray-900 rounded text-sm whitespace-nowrap">
                    Opnieuw Bestellen
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mb-6 md:mb-8">
          <div className="h-6 md:h-8 w-40 md:w-56 bg-gray-400 rounded mb-4 md:mb-6"></div>
          
          <div className="space-y-4 mb-6 md:mb-8">
            <div>
              <div className="h-4 w-32 md:w-48 bg-gray-400 rounded mb-3"></div>
              <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2">
                {['volledig', 'wit', 'grof', 'meergranen', 'donker'].map((item, i) => (
                  <div key={i} className="px-3 md:px-4 py-1.5 md:py-2 border-2 border-gray-900 rounded text-sm whitespace-nowrap">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="h-4 w-36 md:w-56 bg-gray-400 rounded mb-3"></div>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {['klein', 'half groot', 'groot'].map((item, i) => (
                  <div key={i} className="px-3 py-1.5 md:py-2 border-2 border-gray-900 rounded text-sm whitespace-nowrap">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="border-2 border-gray-900 rounded">
              <div className="aspect-square border-b-2 border-gray-900 relative">
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  <line x1="0" y1="0" x2="200" y2="200" stroke="currentColor" strokeWidth="2" className="text-gray-900"/>
                  <line x1="200" y1="0" x2="0" y2="200" stroke="currentColor" strokeWidth="2" className="text-gray-900"/>
                </svg>
              </div>
              <div className="p-2 md:p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="h-4 w-20 md:w-28 bg-gray-400 rounded"></div>
                  <button 
                    onClick={() => setShowProductInfo(showProductInfo === item ? null : item)}
                    className="w-5 h-5 border-2 border-gray-900 rounded text-xs flex items-center justify-center"
                  >
                    i
                  </button>
                </div>
                
                {/* Product Info Panel */}
                {showProductInfo === item && (
                  <div className="mb-3 p-2 border-2 border-gray-900 rounded bg-gray-50 space-y-2">
                    <div className="space-y-1">
                      <div className="h-2.5 w-16 bg-gray-500 rounded"></div>
                      <div className="h-2 w-full bg-gray-300 rounded"></div>
                      <div className="h-2 w-3/4 bg-gray-300 rounded"></div>
                    </div>
                    <div className="space-y-1">
                      <div className="h-2.5 w-12 bg-gray-500 rounded"></div>
                      <div className="h-2 w-20 bg-gray-300 rounded"></div>
                    </div>
                    <div className="space-y-1">
                      <div className="h-2.5 w-14 bg-gray-500 rounded"></div>
                      <div className="h-2 w-24 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                )}
                
                <div className="h-3 w-12 md:w-16 bg-gray-300 rounded mb-3 md:mb-4"></div>
                <div className="flex items-center justify-between mb-2 md:mb-3">
                  <div className="h-3 w-8 md:w-10 bg-gray-300 rounded"></div>
                  <div className="h-4 md:h-5 w-10 md:w-14 bg-gray-400 rounded"></div>
                </div>
                <div className="flex items-center gap-1 md:gap-2 mb-2 md:mb-3">
                  <button className="w-6 h-6 md:w-7 md:h-7 border-2 border-gray-900 rounded text-xs md:text-sm">-</button>
                  <div className="flex-1 h-6 md:h-7 border-2 border-gray-900 rounded flex items-center justify-center text-xs md:text-sm">1</div>
                  <button className="w-6 h-6 md:w-7 md:h-7 border-2 border-gray-900 rounded text-xs md:text-sm">+</button>
                </div>
                <button className="w-full py-1.5 md:py-2 bg-gray-900 text-white border-2 border-gray-900 rounded text-xs md:text-sm">
                  + Toevoegen
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 flex flex-col sm:flex-row justify-between items-center gap-4 border-t-2 border-gray-900 pt-6 md:pt-8">
          <div className="flex gap-3 md:gap-4 items-center">
            <div className="h-8 w-8 md:h-10 md:w-10 border-2 border-gray-900 rounded"></div>
            <div>
              <div className="h-3 w-24 md:w-32 bg-gray-400 rounded mb-1"></div>
              <div className="h-5 w-20 md:w-24 bg-gray-300 rounded"></div>
            </div>
          </div>
          <button 
            onClick={onNext}
            className="w-full sm:w-auto px-6 md:px-8 py-2.5 md:py-3 bg-gray-900 text-white border-2 border-gray-900 rounded"
          >
            Naar Winkelwagen →
          </button>
        </div>
      </section>
    </div>
  );
}