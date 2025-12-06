export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-amber-500 mb-4">Golden Crust Bakery</h4>
            <p className="text-gray-400">
              Crafting delicious memories since 1985
            </p>
          </div>
          <div>
            <h5 className="mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-amber-500 transition-colors">Home</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-amber-500 transition-colors">Products</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-amber-500 transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-amber-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="mb-4">Services</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Catering</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Custom Cakes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Wholesale</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Gift Cards</a></li>
            </ul>
          </div>
          <div>
            <h5 className="mb-4">Newsletter</h5>
            <p className="text-gray-400 mb-4">
              Subscribe to get special offers and updates
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
              />
              <button className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Golden Crust Bakery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
