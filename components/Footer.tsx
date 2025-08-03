import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="text-teal-600">
              <svg
                className="fill-current h-8 w-8 mr-2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.5 19l19.5-7L2.5 5v5l13 2-13 2v5z" />
              </svg>
            </div>
            <p className="mt-4 max-w-xs text-gray-500">
              Explore the world with Wanderlust – your trusted travel companion
              for unforgettable adventures.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium text-gray-900">Destinations</p>
              <ul className="mt-6 space-y-4 text-sm text-gray-700">
                <li>
                  <a href="#">Europe</a>
                </li>
                <li>
                  <a href="#">Asia</a>
                </li>
                <li>
                  <a href="#">South America</a>
                </li>
                <li>
                  <a href="#">Africa</a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">Travel Services</p>
              <ul className="mt-6 space-y-4 text-sm text-gray-700">
                <li>
                  <a href="#">Flight Booking</a>
                </li>
                <li>
                  <a href="#">Hotel Deals</a>
                </li>
                <li>
                  <a href="#">Tour Packages</a>
                </li>
                <li>
                  <a href="#">Car Rentals</a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">Company</p>
              <ul className="mt-6 space-y-4 text-sm text-gray-700">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">Support</p>
              <ul className="mt-6 space-y-4 text-sm text-gray-700">
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Cancellation Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-500">
          <p>&copy; 2025 Travel Anywhere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
