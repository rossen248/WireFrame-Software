import { ImageWithFallback } from './figma/ImageWithFallback';
import { Clock, MapPin, Award } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-gray-900 mb-6">About Golden Crust</h2>
            <p className="text-gray-600 mb-6">
              Since 1985, we've been serving our community with the finest baked goods made fresh daily. Our master bakers start before dawn to ensure you enjoy warm, delicious products throughout the day.
            </p>
            <p className="text-gray-600 mb-8">
              We believe in using only the best ingredients - organic flour, real butter, and no artificial preservatives. Every loaf, pastry, and cake is a testament to our commitment to quality and tradition.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-100 rounded-lg">
                  <Clock className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Fresh Daily</h4>
                  <p className="text-gray-600">Baked fresh every morning starting at 5 AM</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-100 rounded-lg">
                  <Award className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Award Winning</h4>
                  <p className="text-gray-600">Recognized for excellence in artisan baking</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-100 rounded-lg">
                  <MapPin className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Local Ingredients</h4>
                  <p className="text-gray-600">Sourced from local farms and suppliers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1657498023828-1e0181449d9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjQ2MTE2MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Bakery interior"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
