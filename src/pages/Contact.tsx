import React, { useState } from 'react';
import { 
  Send, 
  MessageCircle, 
  Instagram, 
  Linkedin, 
  Phone, 
  Mail, 
  MapPin,
  Clock,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Zap
} from 'lucide-react';
import VortexBackground from '../components/VortexBackground';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        budget: '',
        message: ''
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Quick responses for urgent inquiries',
      action: 'Message us',
      link: 'https://wa.me/919686314869',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      description: 'Follow our latest work and updates',
      action: 'Follow us',
      link: 'https://instagram.com/adgrades',
      color: 'from-pink-500 to-purple-600'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      description: 'Professional networking and insights',
      action: 'Connect with us',
      link: 'https://www.linkedin.com/company/ad-grades',
      color: 'from-blue-500 to-blue-700'
    }
  ];

  const officeInfo = [
    {
      icon: MapPin,
      title: 'Office Location',
      details: ['Vinayaka Industries', 'Behind KMF Cattle Feed Factory', 'K Hoskoppalu, Hassan 573201', 'Karnataka, India']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 80736 98913', '+91 9686314869']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@adgrades.in', 'adgradesweb@gmail.com']
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Saturday: 9:00 AM - 9:00 PM', 'Sunday: 9:00 AM - 1:30 PM']
    }
  ];

  const faqs = [
    {
      question: 'What services does AdGrades offer?',
      answer: 'AdGrades offers comprehensive digital marketing services including Social Media Marketing, Brand Identity & Design, Search Engine Optimization (SEO), Email Marketing, Performance Advertising, and Web & App Development. We provide end-to-end solutions to help businesses grow their online presence and achieve their marketing goals.'
    },
    {
      question: 'How can I start a project with AdGrades?',
      answer: 'Starting a project with AdGrades is simple! You can contact us through our contact form, WhatsApp, or schedule a free consultation call. We\'ll discuss your goals, requirements, and budget to create a customized strategy that fits your needs. Our team will then provide you with a detailed proposal and timeline.'
    },
    {
      question: 'What industries does AdGrades specialize in?',
      answer: 'We work with businesses across various industries including technology startups, e-commerce, education, hospitality, fashion, healthcare, and professional services. Our diverse experience allows us to adapt our strategies to meet the unique challenges and opportunities in different sectors.'
    },
    {
      question: 'How long does it take to see results from a campaign?',
      answer: 'Results vary depending on the service and campaign type. For paid advertising, you can see initial results within 1-2 weeks, with optimization improving performance over 1-3 months. SEO typically takes 3-6 months to show significant results. Social media growth and brand awareness campaigns usually show progress within 4-8 weeks. We provide regular reports to track progress.'
    },
    {
      question: 'What makes AdGrades different from other agencies?',
      answer: 'AdGrades combines creative excellence with data-driven strategies. We\'re a young, dynamic team that understands modern digital landscapes. Our unique blend of offline and online marketing expertise, personalized approach, and commitment to measurable results sets us apart. We treat each client as a partner and are invested in their long-term success.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="pt-16">
      {/* Vortex Background */}
      <VortexBackground className="-z-10" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            {/* Badge with Hero Glow */}
            <div className="page-badge hero-badge-glow">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
              <span className="brand-gradient-text font-semibold">
                Let's Start Something Amazing
              </span>
            </div>
            
            {/* Title with Hero Glow */}
            <h1 className="heading-primary text-foreground hero-title-glow mb-8 leading-tight">
              Let's Chat About Your{' '}
              <span className="brand-gradient-text">
                Next Project
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed description-text">
              Ready to transform your business? We'd love to hear about your goals and 
              discuss how AdGrades can help you achieve remarkable growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="#contact-form"
                className="brand-button"
              >
                Send Message
                <Send className="ml-3 h-6 w-6" />
              </a>
              
              <a
                href="https://wa.me/919686314869"
                target="_blank"
                rel="noopener noreferrer"
                className="brand-button-outline"
              >
                WhatsApp Us
                <MessageCircle className="ml-3 h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section id="contact-form" className="section-padding content-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <div className="minimal-card p-10 rounded-3xl">
              <h2 className="text-4xl font-bold text-foreground mb-10">
                Send us a Message
              </h2>
              
              {isSubmitted ? (
                <div className="text-center py-16">
                  <CheckCircle className="h-20 w-20 text-secondary mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 bg-muted/60 backdrop-blur-sm border border-border rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder-muted-foreground transition-all duration-500"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 bg-muted/60 backdrop-blur-sm border border-border rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder-muted-foreground transition-all duration-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-3">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-muted/60 backdrop-blur-sm border border-border rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder-muted-foreground transition-all duration-500"
                      placeholder="Your Company"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-foreground mb-3">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 bg-muted/60 backdrop-blur-sm border border-border rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent text-foreground transition-all duration-500"
                      >
                        <option value="">Select a service</option>
                        <option value="social-media">Social Media Marketing</option>
                        <option value="branding">Brand Identity & Design</option>
                        <option value="seo">Search Engine Optimization</option>
                        <option value="email">Email Marketing</option>
                        <option value="ads">Performance Advertising</option>
                        <option value="development">Web & App Development</option>
                        <option value="multiple">Multiple Services</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-semibold text-foreground mb-3">
                        Project Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 bg-muted/60 backdrop-blur-sm border border-border rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent text-foreground transition-all duration-500"
                      >
                        <option value="">Select budget range</option>
                        <option value="5k-10k">₹50K - ₹1L</option>
                        <option value="10k-25k">₹1L - ₹2.5L</option>
                        <option value="25k-50k">₹2.5L - ₹5L</option>
                        <option value="50k+">₹5L+</option>
                        <option value="discuss">Let's discuss</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-3">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-muted/60 backdrop-blur-sm border border-border rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder-muted-foreground resize-none transition-all duration-500"
                      placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full brand-button"
                  >
                    Send Message
                    <Send className="ml-3 h-6 w-6" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-10">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-10">
                  Get in Touch
                </h2>
                <div className="space-y-8">
                  {officeInfo.map((info, index) => (
                    <div key={info.title} className="flex items-start group">
                      <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                        <info.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-3 text-lg">
                          {info.title}
                        </h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground leading-relaxed">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Contact Methods */}
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-8">
                  Connect with Us
                </h3>
                <div className="grid grid-cols-1 gap-6">
                  {contactMethods.map((method, index) => (
                    <a
                      key={method.title}
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center p-6 minimal-card rounded-2xl hover:border-primary/40 transition-all duration-500 transform hover:-translate-y-2"
                    >
                      <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mr-6 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110`}>
                        <method.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-foreground text-lg">
                          {method.title}
                        </h4>
                        <p className="text-muted-foreground description-text">
                          {method.description}
                        </p>
                      </div>
                      <span className="text-primary font-semibold group-hover:text-primary/80">
                        {method.action} →
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section-padding content-overlay">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="heading-secondary text-foreground mb-6">
              Frequently Asked{' '}
              <span className="brand-gradient-text">
                Questions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground description-text">
              Get answers to common questions about our services and process.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="minimal-card rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-card/40 transition-colors duration-300"
                >
                  <h3 className="text-xl font-semibold text-foreground pr-6">
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp className="h-6 w-6 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-primary flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-muted-foreground leading-relaxed text-lg description-text">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding content-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="heading-secondary text-foreground mb-6">
              Visit Our{' '}
              <span className="brand-gradient-text">
                Office
              </span>
            </h2>
            <p className="text-xl text-muted-foreground description-text">
              Located in Hassan, Karnataka, we're always ready for a coffee chat.
            </p>
          </div>
          
          <div className="minimal-card rounded-3xl overflow-hidden">
            <div className="h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.983962!2d76.107463!3d12.983962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU5JzAyLjMiTiA3NsKwMDYnMjYuOSJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AdGrades Office Location - Vinayaka Industries, Hassan"
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;