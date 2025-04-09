const Footer = () => {
  return (
    <footer className="bg-[#800000] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
              <li><a href="/academics" className="hover:text-gray-300">Academics</a></li>
              <li><a href="/admissions" className="hover:text-gray-300">Admissions</a></li>
              <li><a href="/research" className="hover:text-gray-300">Research</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/library" className="hover:text-gray-300">Library</a></li>
              <li><a href="/careers" className="hover:text-gray-300">Careers</a></li>
              <li><a href="/alumni" className="hover:text-gray-300">Alumni</a></li>
              <li><a href="/events" className="hover:text-gray-300">Events</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic">
              <p>Jeppiaar Nagar, Rajiv Gandhi Salai,</p>
              <p>Chennai - 600 119,</p>
              <p>Tamil Nadu, India</p>
              <p className="mt-2">Phone: +91-44-2450 3150</p>
              <p>Email: info@sathyabama.ac.in</p>
            </address>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="space-y-2">
              <p>Follow us on social media</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300">Facebook</a>
                <a href="#" className="hover:text-gray-300">Twitter</a>
                <a href="#" className="hover:text-gray-300">LinkedIn</a>
                <a href="#" className="hover:text-gray-300">Instagram</a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#900000]">
          <p className="text-center">&copy; {new Date().getFullYear()} Sathyabama Institute of Science and Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer