import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/components/ui/hooks/use-toast";
import { validateContactForm, validateAndSanitizeInput } from "@/lib/security";

const contactInfo = [
  {
    icon: "fas fa-envelope",
    title: "Email",
    value: "mugabetrinity@gmail.com"
  },
  {
    icon: "fas fa-phone",
    title: "Phone",
    value: "+(250) 780-152-723"
  },
  {
    icon: "fas fa-map-marker-alt",
    title: "Location",
    value: "Kigali, Rwanda"
  }
];

const socialLinks = [
  { icon: "fab fa-linkedin", href: "https://www.linkedin.com/in/mugabe-trinity-03439126a/", label: "LinkedIn" },
  { icon: "fab fa-github", href: "https://github.com/casmonster/LocalDiscountMart", label: "GitHub" },
  { icon: "fab fa-twitter", href: "https://x.com/Mugabetrinity", label: "X" },
  { icon: "fab fa-stack-overflow", href: "https://stackoverflow.com/users/mugabe-trinity", label: "StackOverflow" }
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: (data: typeof formData) => apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error: any) => {
      const errorMessage = error.message || "Please try again later or contact me directly.";
      toast({
        title: "Error sending message",
        description: errorMessage,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validation
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      validation.errors.forEach(error => {
        toast({
          title: "Validation Error",
          description: error,
          variant: "destructive",
        });
      });
      return;
    }
    
    // Sanitize data before sending
    try {
      const sanitizedData = {
        name: validateAndSanitizeInput(formData.name, 100),
        email: validateAndSanitizeInput(formData.email, 254),
        subject: validateAndSanitizeInput(formData.subject, 200),
        message: validateAndSanitizeInput(formData.message, 2000),
      };
      
      contactMutation.mutate(sanitizedData);
    } catch (error: any) {
      toast({
        title: "Validation Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Basic input length validation
    const maxLengths = {
      name: 100,
      email: 254,
      subject: 200,
      message: 2000
    };
    
    if (value.length > maxLengths[name as keyof typeof maxLengths]) {
      toast({
        title: "Input too long",
        description: `${name} must be less than ${maxLengths[name as keyof typeof maxLengths]} characters`,
        variant: "destructive",
      });
      return;
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-slate-50" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-secondary mb-4">Let's Work Together</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you. 
            Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              className="text-center p-6 bg-white rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${info.icon} text-white text-xl`}></i>
              </div>
              <h3 className="font-semibold text-secondary mb-2">{info.title}</h3>
              <p className="text-slate-600">{info.value}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="bg-white rounded-xl shadow-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <form className="max-w-2xl mx-auto" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" 
              />
              <input 
                type="email" 
                name="email"
                placeholder="Your Email" 
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" 
              />
            </div>
            <div className="mb-6">
              <input 
                type="text" 
                name="subject"
                placeholder="Subject" 
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" 
              />
              <p className="text-sm text-slate-500 mt-1">
                {formData.subject.length}/200 characters
              </p>
            </div>
            <div className="mb-6">
              <textarea 
                name="message"
                placeholder="Your Message" 
                rows={6} 
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              ></textarea>
              <p className="text-sm text-slate-500 mt-1">
                {formData.message.length}/2000 characters
              </p>
            </div>
            <button 
              type="submit" 
              disabled={contactMutation.isPending}
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50"
            >
              {contactMutation.isPending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>

        <motion.div 
          className="flex justify-center gap-6 mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href} 
              className="social-link w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white hover:bg-primary transition-all duration-300"
            >
              {link.label === "X" ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              ) : (
                <i className={link.icon}></i>
              )}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
