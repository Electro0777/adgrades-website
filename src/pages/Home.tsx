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
  CheckCircle,
  Zap
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
      {/* Hero Section - Mobile Responsive */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <DynamicBackground variant="home" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="animate-fade-in">
            {/* Badge */}
            <div className="page-badge brand-glow">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 animate-pulse" />
              <span className="brand-gradient-text font-semibold text-sm sm:text-base">
                Transforming Businesses Since 2023
              </span>
            </div>
            
            <h1 className="heading-primary text-foreground text-glow mb-6 sm:mb-8 leading-tight">
              We Help{' '}
              <span className="brand-gradient-text brand-glow">
                Startups
              </span>
              <br />
              Become Industry Leaders
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground text-glow mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              Creative marketing, data-driven advertising, and stunning web design that transforms 
              your vision into market-leading success stories.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
              <Link
                to="/contact"
                className="brand-button w-full sm:w-auto"
              >
                Start a Project
                <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              
              <Link
                to="/portfolio"
                className="brand-button-outline w-full sm:w-auto"
              >
                View Our Work
                <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Mobile Responsive */}
      <section className="section-padding bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-4xl md:text-6xl font-bold brand-gradient-text brand-glow mb-2 sm:mb-3">
                <AnimatedCounter end={25} suffix="+" />
              </div>
              <p className="text-muted-foreground font-medium text-glow text-sm sm:text-base">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl md:text-6xl font-bold brand-gradient-text brand-glow mb-2 sm:mb-3">
                <AnimatedCounter end={300} suffix="%" />
              </div>
              <p className="text-muted-foreground font-medium text-glow text-sm sm:text-base">Average ROI</p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl md:text-6xl font-bold brand-gradient-text brand-glow mb-2 sm:mb-3">
                <AnimatedCounter end={15} suffix="" />
              </div>
              <p className="text-muted-foreground font-medium text-glow text-sm sm:text-base">Team Members</p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl md:text-6xl font-bold brand-gradient-text brand-glow mb-2 sm:mb-3">
                <AnimatedCounter end={99} suffix="%" />
              </div>
              <p className="text-muted-foreground font-medium text-glow text-sm sm:text-base">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Mobile Responsive */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="heading-secondary text-foreground text-glow mb-4 sm:mb-6">
              Services That Drive{' '}
              <span className="brand-gradient-text brand-glow">Growth</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground text-glow max-w-3xl mx-auto px-4">
              Comprehensive marketing and design solutions that transform startups into industry leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="service-card group"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 brand-gradient rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground text-glow mb-3 sm:mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                  {service.description}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-primary hover:text-secondary font-medium transition-colors text-sm sm:text-base"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section with Infinite Marquee - Mobile Responsive */}
      <section className="section-padding bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
          <div className="text-center">
            <h2 className="heading-secondary text-foreground text-glow mb-4 sm:mb-6">
              Trusted by{' '}
              <span className="brand-gradient-text brand-glow">Amazing Clients</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground text-glow max-w-3xl mx-auto px-4">
              We're proud to work with innovative businesses across various industries.
            </p>
          </div>
        </div>

        <div className="relative flex h-[300px] sm:h-[400px] w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:30s] sm:[--duration:40s]">
            {firstRow.map((client) => (
              <ClientCard
                key={client.name}
                name={client.name}
                category={client.category}
              />
            ))}
          </Marquee>

          <Marquee reverse pauseOnHover className="[--duration:30s] sm:[--duration:40s]">
            {secondRow.map((client) => (
              <ClientCard
                key={client.name}
                name={client.name}
                category={client.category}
              />
            ))}
          </Marquee>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-20 lg:w-40 bg-gradient-to-r from-background to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-20 lg:w-40 bg-gradient-to-l from-background to-transparent"></div>
        </div>
      </section>

      {/* Testimonials - Mobile Responsive */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="heading-secondary text-foreground text-glow mb-4 sm:mb-6">
              What Our{' '}
              <span className="brand-gradient-text brand-glow">Clients Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.author}
                className="minimal-card p-6 sm:p-8"
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-secondary fill-current" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-6 sm:mb-8 italic leading-relaxed text-sm sm:text-base">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4"
                  />
                  <div>
                    <div className="font-semibold text-foreground text-glow text-sm sm:text-base">
                      {testimonial.author}
                    </div>
                    <div className="text-muted-foreground text-xs sm:text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Responsive */}
      <section className="section-padding brand-gradient">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-secondary text-white mb-6 sm:mb-8">
            Ready to Grow Your Brand?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-12 max-w-3xl mx-auto">
            Let's discuss how we can transform your business into the next big success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-slate-dark font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 w-full sm:w-auto"
            >
              Start a Project
              <Target className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-dark transition-all duration-300 w-full sm:w-auto"
            >
              View Our Work
              <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;