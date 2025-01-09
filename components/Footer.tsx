import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About Section */}
          <div>
            <h3 className="text-lg font-bold">Bolig Invest</h3>
            <p className="mt-4 text-sm">
              We provide the best services to help you grow your business. 
              Reach out to us for more information.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/employees">
                  <div className="hover:text-gray-300">Ansatte</div>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <div className="hover:text-gray-300">Prosjekter</div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold">Kontakt Oss</h4>
            <ul className="mt-4 space-y-2">
              <li>Email: contact@boliginvest.no</li>
              <li>Mobil: +47 123 45 678</li>
              <li>Addresse: 123 Business St, Suite 456, Cityville</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Bolig Invest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
