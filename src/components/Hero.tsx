import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="relative h-[600px] bg-gray-900">
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1555932450-31a8aec2adf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBmcmVzaCUyMGJyZWFkfGVufDF8fHx8MTc2NDY4MDI3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        alt="Fresh baked bread"
        className="w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white mb-6">Freshly Baked Every Morning</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Experience the warmth and aroma of artisan breads, pastries, and desserts crafted with love and the finest ingredients.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
              View Menu
            </button>
            <button className="px-8 py-3 bg-white text-amber-700 rounded-lg hover:bg-gray-100 transition-colors">
              Order Online
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
