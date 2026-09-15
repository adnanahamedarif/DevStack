import React from 'react';
import logo from '../assets/logo-text.png';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 pt-16 pb-12 border-t border-gray-100">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">


          
          <div className="md:col-span-5">
            <img src={logo} alt="Dev Stack Logo" className="h-8 mb-4 object-contain" />
            <p className="text-sm text-gray-800 mb-6">
              Curated tools, technologies, and resources for developers building <br />
              modern software.
            </p>

            <ul className="flex items-center gap-4 text-sm font-semibold text-gray-800">
              <li>GitHub</li>
              <li>Twitter</li>
              <li>Linkedin</li>
            </ul>
          </div>


          <div className="md:col-span-7 grid grid-cols-3 gap-6">
            <div>
              <h2 className="font-bold  mb-4">PRODUCT</h2>
              <ul className="space-y-3 text-sm text-gray-800">
                <li>Home</li>
                <li>Technology</li>
                <li>Projects</li>
              </ul>
            </div>

            <div>
              <h2 className="font-bold mb-4">COMPANY</h2>
              <ul className="space-y-3 text-sm text-gray-800">
                <li>About</li>
                <li>Contact</li>
                <li>Careers</li>
              </ul>
            </div>

            <div>
              <h2 className=" font-bold  mb-4">LEGAL</h2>
              <ul className="space-y-3 text-sm text-gray-800">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>

          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <ul className="flex items-center gap-4">
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;