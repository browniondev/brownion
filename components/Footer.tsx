"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-12 w-full">
      <div className="container mx-auto px-4">
        
        {/* Quote Section */}
        <div className="text-center mb-12">
          <p className="font-serif text-3xl font-bold text-gray-800">
            Our service is dedicated to your happiness
          </p>
        </div>

        {/* Main Footer Content */}
        <div className="grid font-sans grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Left Column */}
          <div className="space-y-6">
            <Image
              src="/logo.png"
              alt="Logo"
              width={150}
              height={50}
            />
            
            <div className="flex space-x-4 gap-2">
              <Link href="#" className="text-gray-800 font-semibold uppercase hover:text-primary-light">
                Facebook
              </Link>
              <Link href="#" className="text-gray-800 font-semibold uppercase hover:text-primary-light">
                Instagram
              </Link>
              <Link href="#" className="text-gray-800 font-semibold uppercase hover:text-primary-light">
                Twitter
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-gray-900">Contact & Hours</h3>
              <p className="text-gray-600">Phone: +91 1234567890</p>
              <p className="text-gray-600">Email: info@example.com</p>
              <div>
                <p className="text-gray-600">Opening Hours:</p>
                <p className="text-gray-600">Mon-Fri: 9:00 - 18:00</p>
                <p className="text-gray-600">Sat-Sun: Closed</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg text-gray-900">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-primary-light">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-primary-light">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-primary-light">
                    Grievance Redressal
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
