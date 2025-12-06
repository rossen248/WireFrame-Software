import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">Visit Us</h2>
          <p className="text-gray-600">
            Stop by our bakery or get in touch with us
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-amber-700" />
            </div>
            <h4 className="text-gray-900 mb-2">Address</h4>
            <p className="text-gray-600">
              123 Bakery Street<br />
              San Francisco, CA 94102
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-amber-700" />
            </div>
            <h4 className="text-gray-900 mb-2">Phone</h4>
            <p className="text-gray-600">
              (415) 555-0123<br />
              Call for catering inquiries
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-amber-700" />
            </div>
            <h4 className="text-gray-900 mb-2">Email</h4>
            <p className="text-gray-600">
              info@goldencrust.com<br />
              We'll respond within 24hrs
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-amber-700" />
            </div>
            <h4 className="text-gray-900 mb-2">Hours</h4>
            <p className="text-gray-600">
              Mon-Sat: 6:00 AM - 8:00 PM<br />
              Sunday: 7:00 AM - 6:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
