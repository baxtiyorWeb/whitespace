
import { Facebook, Heart, Instagram, Mail, MapPin, Phone, Twitter, } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - Whitespace */}
          <div>
            <h3 className=" mb-[40px] text-[18px] font-normal">Whitespace</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
              blind texts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Column 2 - Usefull Links */}
          <div>
            <h3 className=" mb-[40px] text-[18px] font-normal">Usefull Links</h3>
            <ul >
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-[14px] font-light leading-[25px]" >
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-[14px] font-light leading-[25px]" >
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-[14px] font-light leading-[25px]" >
                  Work
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-[14px] font-light leading-[25px]" >
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-[14px] font-light leading-[25px]" >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h3 className=" mb-[40px] text-[18px] font-normal">Quick Links</h3>
            <ul >
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-[14px] font-light leading-[25px]" >
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-[14px] font-light leading-[25px]" >
                  Practice Areas
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-[14px] font-light leading-[25px]" >
                  Appointment
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-[14px] font-light leading-[25px]" >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-[14px] font-light leading-[25px]" >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Have a Questions? */}
          <div>
            <h3 className=" mb-[40px] text-[18px] font-normal">Have a Questions?</h3>
            <ul className="space-y-6">
              <li className="flex">
                <MapPin className="mr-4 flex-shrink-0 text-gray-400" />
                <span className="text-gray-400">203 Fake St. Mountain View, San Francisco, California, USA</span>
              </li>
              <li className="flex">
                <Phone className="mr-4 flex-shrink-0 text-gray-400" />
                <a href="tel:+23923929210" className="text-gray-400 hover:text-white transition-colors text-[14px] font-light leading-[25px]" >
                  +2 392 3929 210
                </a>
              </li>
              <li className="flex">
                <Mail className="mr-4 flex-shrink-0 text-gray-400" />
                <a href="mailto:info@yourdomain.com" className="text-gray-400 hover:text-white transition-colors text-[14px] font-light leading-[25px]" >
                  info@yourdomain.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>
            Copyright ©2025 All rights reserved | This template is made with{" "}
            <Heart className="inline-block h-4 w-4 text-red-500 mx-1" fill="currentColor" /> by{" "}
            <a
              href="https://colorlib.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Colorlib
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer