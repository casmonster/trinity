import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const phoneNumber = "250780152723";
    
    // Format the message
    const text = `Hello, my name is ${formData.name} (${formData.email}). ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    
    // Redirect to WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen pt-20 pb-10 px-4 md:px-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
      <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm border border-white/10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input 
              id="name"
              type="text" 
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
              className="w-full p-3 bg-black/20 border border-white/10 rounded focus:outline-none focus:border-green-500 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input 
              id="email"
              type="email" 
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              className="w-full p-3 bg-black/20 border border-white/10 rounded focus:outline-none focus:border-green-500 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea 
              id="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
              rows={5}
              className="w-full p-3 bg-black/20 border border-white/10 rounded focus:outline-none focus:border-green-500 transition-colors resize-none"
            />
          </div>
          <button 
            type="submit"
            className="w-full py-3 px-6 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
          >
            Send via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;