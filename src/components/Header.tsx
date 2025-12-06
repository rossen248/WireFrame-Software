import { Menu, ShoppingCart } from 'lucide-react';

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-amber-700">Golden Crust Bakery</h1>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#home" className="text-gray-700 hover:text-amber-700 transition-colors">Home</a>
              <a href="#products" className="text-gray-700 hover:text-amber-700 transition-colors">Products</a>
              <a href="#about" className="text-gray-700 hover:text-amber-700 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-700 transition-colors">Contact</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ShoppingCart className="w-5 h-5 text-gray-700" />
            </button>
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Menu className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
