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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <DynamicBackground variant="home" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            {/* Badge */}
            <div className="page-badge">
              <Zap className="w-5 h-5 mr-3 animate-pulse" />
              <span className="brand-gradient-text font-semibold">
                Transforming Businesses Since 2023
              </span>
            </div>
            
            <h1 className="heading-primary text-foreground text-glow mb-8 leading-tight">
              We Help{' '}
              <span className="brand-gradient-text brand-glow">
                Startups
              </span>
              <br />
              Become Industry Leaders
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground text-glow mb-12 max-w-3xl mx-auto leading-relaxed">
              Creative marketing, data-driven advertising, and stunning web design that transforms 
              your vision into market-leading success stories.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="brand-button"
              >
                Start a Project
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
              
              <Link
                to="/portfolio"
                className="brand-button-outline"
              >
                View Our Work
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold brand-gradient-text brand-glow mb-3">
                <AnimatedCounter end={25} suffix="+" />
              </div>
              <p className="text-muted-foreground font-medium text-glow">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold brand-gradient-text brand-glow mb-3">
                <AnimatedCounter end={300} suffix="%" />
              </div>
              <p className="text-muted-foreground font-medium text-glow">Average ROI</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold brand-gradient-text brand-glow mb-3">
                <AnimatedCounter end={15} suffix="" />
              </div>
              <p className="text-muted-foreground font-medium text-glow">Team Members</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold brand-gradient-text brand-glow mb-3">
                <AnimatedCounter end={99} suffix="%" />
              </div>
              <p className="text-muted-foreground font-medium text-glow">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-foreground text-glow mb-6">
              Services That Drive{' '}
              <span className="brand-gradient-text brand-glow">Growth</span>
            </h2>
            <p className="text-xl text-muted-foreground text-glow max-w-3xl mx-auto">
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
                <h3 className="text-xl font-semibold text-foreground text-glow mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-primary hover:text-secondary font-medium transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section with Infinite Marquee */}
      <section className="section-padding bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center">
            <h2 className="heading-secondary text-foreground text-glow mb-6">
              Trusted by{' '}
              <span className="brand-gradient-text brand-glow">Amazing Clients</span>
            </h2>
            <p className="text-xl text-muted-foreground text-glow max-w-3xl mx-auto">
              We're proud to work with innovative businesses across various industries.
            </p>
          </div>
        </div>

        <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:30s]">
            {firstRow.map((client) => (
              <ClientCard
                key={client.name}
                name={client.name}
                category={client.category}
              />
            ))}
          </Marquee>

          <Marquee reverse pauseOnHover className="[--duration:30s]">
            {secondRow.map((client) => (
              <ClientCard
                key={client.name}
                name={client.name}
                category={client.category}
              />
            ))}
          </Marquee>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-background to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-background to-transparent"></div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-foreground text-glow mb-6">
              What Our{' '}
              <span className="brand-gradient-text brand-glow">Clients Say</span>
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
                    <Star key={i} className="h-5 w-5 text-secondary fill-current" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-8 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-foreground text-glow">
                      {testimonial.author}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              className="inline-flex items-center px-8 py-4 bg-[#0B1120] text-foreground font-semibold rounded-lg hover:bg-[#0F172A] transition-all duration-300"
            >
              Start a Project
              <Target className="ml-3 h-5 w-5" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center px-8 py-4 border-2 border-[#0B1120] text-[#0B1120] font-semibold rounded-lg hover:bg-[#0B1120] hover:text-foreground transition-all duration-300"
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