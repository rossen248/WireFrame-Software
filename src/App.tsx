import { useState } from 'react';
import { ProductSelection } from './components/ProductSelection';
import { CartReview } from './components/CartReview';
import { CheckoutForm } from './components/CheckoutForm';
import { PaymentDetails } from './components/PaymentDetails';
import { OrderConfirmation } from './components/OrderConfirmation';

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [language, setLanguage] = useState<'NL' | 'FR'>('NL');

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <ProductSelection onNext={() => setCurrentStep(2)} language={language} />;
      case 2:
        return <CartReview onNext={() => setCurrentStep(3)} onBack={() => setCurrentStep(1)} language={language} />;
      case 3:
        return <CheckoutForm onNext={() => setCurrentStep(4)} onBack={() => setCurrentStep(2)} language={language} />;
      case 4:
        return <PaymentDetails onNext={() => setCurrentStep(5)} onBack={() => setCurrentStep(3)} language={language} />;
      case 5:
        return <OrderConfirmation onReset={() => setCurrentStep(1)} language={language} />;
      default:
        return <ProductSelection onNext={() => setCurrentStep(2)} language={language} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="border-4 border-gray-900 rounded-lg m-2 md:m-4">
        <div className="border-b-2 border-gray-900 bg-gray-100 p-2 rounded-t-lg">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-gray-400 border border-gray-600"></div>
              <div className="w-3 h-3 rounded-full bg-gray-400 border border-gray-600"></div>
              <div className="w-3 h-3 rounded-full bg-gray-400 border border-gray-600"></div>
            </div>
            <div className="flex-1 bg-white border-2 border-gray-900 rounded px-3 py-1 text-sm">
              https://bakery-shop.com/
            </div>
          </div>
        </div>

        <header className="border-b-2 border-gray-900 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between py-4">
              <div className="w-24 md:w-32 h-8 md:h-10 border-2 border-gray-900 rounded"></div>
              <nav className="hidden md:flex gap-4 lg:gap-8">
                {['Brood', 'Producten', 'Lunch', 'Taart'].map((item, i) => (
                  <div key={i} className="h-4 w-16 bg-gray-400 rounded"></div>
                ))}
              </nav>
              <div className="flex gap-2 md:gap-4 items-center">
                {/* Language Switcher */}
                <div className="flex border-2 border-gray-900 rounded overflow-hidden">
                  <button 
                    onClick={() => setLanguage('NL')}
                    className={`px-2 py-1 text-xs ${language === 'NL' ? 'bg-gray-900 text-white' : 'bg-white'}`}
                  >
                    NL
                  </button>
                  <button 
                    onClick={() => setLanguage('FR')}
                    className={`px-2 py-1 text-xs border-l-2 border-gray-900 ${language === 'FR' ? 'bg-gray-900 text-white' : 'bg-white'}`}
                  >
                    FR
                  </button>
                </div>
                <div className="w-6 h-6 md:w-8 md:h-8 border-2 border-gray-900 rounded"></div>
                <div className="w-6 h-6 md:w-8 md:h-8 border-2 border-gray-900 rounded"></div>
              </div>
            </div>
          </div>
        </header>

        {renderStep()}

        <footer className="border-t-2 border-gray-900 bg-white mt-8">
          <div className="container mx-auto px-4 md:px-6 py-6 md:py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[1, 2, 3, 4].map((col) => (
                <div key={col}>
                  <div className="h-4 w-20 md:w-28 bg-gray-400 rounded mb-3"></div>
                  <div className="space-y-2">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="h-3 w-16 md:w-20 bg-gray-300 rounded"></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}