interface CartReviewProps {
  onNext: () => void;
  onBack: () => void;
  language: 'NL' | 'FR';
}

export function CartReview({ onNext, onBack, language }: CartReviewProps) {
  return (
    <div className="container mx-auto px-4 md:px-6 py-6 md:py-12">
      <div className="h-8 md:h-10 w-48 md:w-64 bg-gray-400 rounded mb-6 md:mb-8"></div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        <div className="lg:col-span-2">
          <div className="border-2 border-gray-900 rounded overflow-hidden">
            <div className="hidden md:block bg-gray-200 border-b-2 border-gray-900 px-4 md:px-6 py-3 md:py-4">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-5 h-3 bg-gray-500 rounded"></div>
                <div className="col-span-2 h-3 bg-gray-500 rounded"></div>
                <div className="col-span-2 h-3 bg-gray-500 rounded"></div>
                <div className="col-span-2 h-3 bg-gray-500 rounded"></div>
              </div>
            </div>

            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="border-b-2 border-gray-300 last:border-0 px-4 md:px-6 py-4">
                <div className="flex flex-col md:grid md:grid-cols-12 gap-3 md:gap-4 md:items-center">
                  <div className="md:col-span-1">
                    <div className="w-16 h-16 border-2 border-gray-900 rounded relative">
                      <svg className="w-full h-full" viewBox="0 0 64 64">
                        <line x1="0" y1="0" x2="64" y2="64" stroke="currentColor" strokeWidth="2" className="text-gray-900"/>
                        <line x1="64" y1="0" x2="0" y2="64" stroke="currentColor" strokeWidth="2" className="text-gray-900"/>
                      </svg>
                    </div>
                  </div>
                  <div className="md:col-span-4">
                    <div className="h-4 w-36 bg-gray-400 rounded mb-2"></div>
                    <div className="h-3 w-20 bg-gray-300 rounded"></div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="h-4 w-14 bg-gray-400 rounded"></div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-2">
                      <button className="w-7 h-7 border-2 border-gray-900 rounded">-</button>
                      <div className="w-10 h-7 border-2 border-gray-900 rounded flex items-center justify-center text-sm">2</div>
                      <button className="w-7 h-7 border-2 border-gray-900 rounded">+</button>
                    </div>
                  </div>
                  <div className="md:col-span-2 flex justify-between md:block">
                    <div className="h-5 w-16 bg-gray-500 rounded"></div>
                    <div className="md:hidden w-7 h-7 border-2 border-gray-900 rounded"></div>
                  </div>
                  <div className="hidden md:block md:col-span-1 text-right">
                    <div className="w-7 h-7 border-2 border-gray-900 rounded inline-block"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 md:mt-6 flex flex-col sm:flex-row gap-3 md:gap-4">
            <div className="flex-1 h-10 md:h-12 border-2 border-gray-900 rounded"></div>
            <button className="px-4 md:px-6 py-2.5 md:py-3 bg-gray-300 border-2 border-gray-900 rounded">
              Kortingscode
            </button>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="border-2 border-gray-900 rounded p-4 md:p-6 lg:sticky lg:top-6">
            <div className="h-5 md:h-6 w-32 md:w-40 bg-gray-400 rounded mb-4 md:mb-6"></div>
            
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
              Doorgaan
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