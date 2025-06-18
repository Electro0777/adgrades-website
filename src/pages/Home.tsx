import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Share2, 
  Palette, 
  Search, 
  Mail, 
  TrendingUp, 
  Code,
  Star,
  Users,
  Award,
  Target,
  CheckCircle
} from 'lucide-react';
import DynamicBackground from '../components/DynamicBackground';
import AnimatedCounter from '../components/AnimatedCounter';
import Marquee from '../components/Marquee';
import ClientCard from '../components/ClientCard';

const Home: React.FC = () => {
  const services = [
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Strategic social media management that builds communities and drives engagement across all platforms.',
    },
    {
      icon: Palette,
      title: 'Brand Identity & Design',
      description: 'Complete brand identity design that makes your business memorable and distinctive in the market.',
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Search engine optimization that gets your business found by the right customers at the right time.',
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Targeted email campaigns that nurture leads and convert them into loyal, paying customers.',
    },
    {
      icon: TrendingUp,
      title: 'Performance Advertising',
      description: 'Data-driven advertising campaigns that maximize ROI and drive measurable business results.',
    },
    {
      icon: Code,
      title: 'Web & App Development',
      description: 'Beautiful, functional websites and apps that provide exceptional user experiences and conversions.',
    }
  ];

  const clients = [
    { name: 'OS CODE Solutions', category: 'Technology' },
    { name: 'Delhi 65', category: 'Restaurant' },
    { name: 'Medhavi Classes', category: 'Education' },
    { name: 'Uplifto', category: 'Marketing' },
    { name: 'Vinayaka Enterprises', category: 'Business' },
    { name: 'M K Streetwear', category: 'Fashion' },
    { name: 'Adhyayan', category: 'Education' },
    { name: 'Dew Drop Homestay', category: 'Hospitality' },
    { name: 'Nataraj Dance Studios', category: 'Entertainment' },
    { name: 'Pureblend Foods', category: 'Food & Beverage' },
    { name: 'SP Enterprises', category: 'Business' },
    { name: 'AS Tech Industries', category: 'Technology' },
    { name: 'Hitarth Water Tech Solutions', category: 'Water Technology' }
  ];

  const firstRow = clients.slice(0, Math.ceil(clients.length / 2));
  const secondRow = clients.slice(Math.ceil(clients.length / 2));

  const testimonials = [
    {
      quote: "AdGrades transformed our startup from unknown to industry leader. Their strategic approach is absolutely unmatched.",
      author: "Sarah Chen",
      role: "CEO, TechFlow",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "The ROI on our campaigns has been incredible. They truly understand performance marketing like no other agency.",
      author: "Michael Rodriguez",
      role: "Marketing Director, GrowthCo",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "Our brand identity and website exceeded all expectations. Professional, creative, and completely results-driven.",
      author: "Emma Thompson",
      role: "Founder, DesignStudio",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <div className="pt-16 overflow-x-hidden">
      {/* Clean Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <DynamicBackground variant="home" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="heading-primary text-[#F1F5F9] mb-8 leading-tight">
              We're{' '}
              <span className="brand-gradient-text brand-glow">
                AdGrades
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#94A3B8] mb-12 max-w-3xl mx-auto leading-relaxed">
              We help startups become industry leaders through strategic marketing, 
              stunning design, and data-driven growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="brand-button inline-flex items-center"
              >
                Start a Project
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
              
              <Link
                to="/portfolio"
                className="brand-button-outline inline-flex items-center"
              >
                View Our Work
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Stats Section */}
      <section className="section-padding bg-[#0F172A]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold brand-gradient-text mb-3">
                <AnimatedCounter end={25} suffix="+" />
              </div>
              <p className="text-[#94A3B8] font-medium">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold brand-gradient-text mb-3">
                <AnimatedCounter end={300} suffix="%" />
              </div>
              <p className="text-[#94A3B8] font-medium">Average ROI</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold brand-gradient-text mb-3">
                <AnimatedCounter end={15} suffix="" />
              </div>
              <p className="text-[#94A3B8] font-medium">Team Members</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold brand-gradient-text mb-3">
                <AnimatedCounter end={99} suffix="%" />
              </div>
              <p className="text-[#94A3B8] font-medium">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Services Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-[#F1F5F9] mb-6">
              Services That Drive{' '}
              <span className="brand-gradient-text">Growth</span>
            </h2>
            <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
              Comprehensive marketing and design solutions that transform startups into industry leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="service-card group"
              >
                <div className="w-16 h-16 brand-gradient rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-[#0B1120]" />
                </div>
                <h3 className="text-xl font-semibold text-[#F1F5F9] mb-4">
                  {service.title}
                </h3>
                <p className="text-[#94A3B8] leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-[#00B5FF] hover:text-[#01F9C6] font-medium transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clean Clients Section */}
      <section className="section-padding bg-[#0F172A]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center">
            <h2 className="heading-secondary text-[#F1F5F9] mb-6">
              Trusted by{' '}
              <span className="brand-gradient-text">Amazing Clients</span>
            </h2>
            <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
              We're proud to work with innovative businesses across various industries.
            </p>
          </div>
        </div>

        <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:40s]">
            {firstRow.map((client) => (
              <ClientCard
                key={client.name}
                name={client.name}
                category={client.category}
              />
            ))}
          </Marquee>

          <Marquee reverse pauseOnHover className="[--duration:40s]">
            {secondRow.map((client) => (
              <ClientCard
                key={client.name}
                name={client.name}
                category={client.category}
              />
            ))}
          </Marquee>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-[#0B1120] to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-[#0B1120] to-transparent"></div>
        </div>
      </section>

      {/* Clean Testimonials */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-[#F1F5F9] mb-6">
              What Our{' '}
              <span className="brand-gradient-text">Clients Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.author}
                className="minimal-card p-8"
              >
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#01F9C6] fill-current" />
                  ))}
                </div>
                <blockquote className="text-[#94A3B8] mb-8 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-[#F1F5F9]">
                      {testimonial.author}
                    </div>
                    <div className="text-[#94A3B8] text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clean CTA Section */}
      <section className="section-padding brand-gradient">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-secondary text-[#0B1120] mb-8">
            Ready to Grow Your Brand?
          </h2>
          <p className="text-xl text-[#0B1120]/80 mb-12 max-w-3xl mx-auto">
            Let's discuss how we can transform your business into the next big success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#0B1120] text-[#F1F5F9] font-semibold rounded-lg hover:bg-[#0F172A] transition-all duration-300"
            >
              Start a Project
              <Target className="ml-3 h-5 w-5" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center px-8 py-4 border-2 border-[#0B1120] text-[#0B1120] font-semibold rounded-lg hover:bg-[#0B1120] hover:text-[#F1F5F9] transition-all duration-300"
            >
              View Our Work
              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;