import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './Button';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-white text-center mb-12">Get In Touch</h2>
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <Mail className="text-white" size={24} />
                <div>
                  <h3 className="text-white text-lg mb-1">Email</h3>
                  <p className="text-gray-300">nithinmgowda12@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-white" size={24} />
                <div>
                  <h3 className="text-white text-lg mb-1">Phone</h3>
                  <p className="text-gray-300">+91 9964089764</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-white" size={24} />
                <div>
                  <h3 className="text-white text-lg mb-1">Location</h3>
                  <p className="text-gray-300">BENGALURU,INDIA</p>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/20 text-white backdrop-blur-sm"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/20 text-white backdrop-blur-sm"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/20 text-white backdrop-blur-sm"
                ></textarea>
              </div>
              <Button variant="white" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}