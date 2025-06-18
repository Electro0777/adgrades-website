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
  PlayCircle,
  Users,
  Award,
  Target,
  Zap,
  CheckCircle
} from 'lucide-react';
import DynamicBackground from '../components/DynamicBackground';
import GlareCard from '../components/GlareCard';
import AnimatedCounter from '../components/AnimatedCounter';
import Marquee from '../components/Marquee';
import ClientCard from '../components/ClientCard';

const Home: React.FC = () => {
  const services = [
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Strategic social media management that builds communities and drives engagement across all platforms.',
      color: 'from-primary-500 to-accent'
    },
    {
      icon: Palette,
      title: 'Brand Identity & Design',
      description: 'Complete brand identity design that makes your business memorable and distinctive in the market.',
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Search engine optimization that gets your business found by the right customers at the right time.',
      color: 'from-success to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Targeted email campaigns that nurture leads and convert them into loyal, paying customers.',
      color: 'from-warning to-red-500'
    },
    {
      icon: TrendingUp,
      title: 'Performance Advertising',
      description: 'Data-driven advertising campaigns that maximize ROI and drive measurable business results.',
      color: 'from-yellow-500 to-warning'
    },
    {
      icon: Code,
      title: 'Web & App Development',
      description: 'Beautiful, functional websites and apps that provide exceptional user experiences and conversions.',
      color: 'from-secondary to-primary'
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

  // Split clients into two rows for the marquee
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
      {/* Hero Section with Dynamic Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <DynamicBackground variant="home" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            {/* Enhanced Silver Badge with Transparent Background and Glowing Text/Border */}
            <div className="silver-badge animate-silver-glow inline-flex items-center px-4 sm:px-8 py-3 sm:py-4 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 hover:scale-105 transition-all duration-500 relative z-10">
              <Zap className="silver-icon w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 animate-pulse" />
              <span className="silver-text relative z-10">
                Transforming Businesses Since 2023
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-card-foreground mb-6 sm:mb-8 leading-tight tracking-tight font-display px-2">
              We Help{' '}
              <span className="bg-professional-gradient bg-clip-text text-transparent drop-shadow-2xl">
                Startups
              </span>
              <br />
              Become Industry Leaders
            </h1>
            
            <p className="text-base sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
              Creative marketing, data-driven advertising, and stunning web design that transforms 
              your vision into market-leading success stories.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
              <Link
                to="/contact"
                className="group inline-flex items-center px-6 sm:px-10 py-4 sm:py-5 bg-professional-gradient hover:shadow-2xl text-white font-semibold rounded-full transition-all duration-500 transform hover:scale-110 hover:shadow-primary/30 shadow-xl relative overflow-hidden w-full sm:w-auto justify-center"
              >
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative">Start a Project</span>
                <ArrowRight className="ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-2 transition-transform relative" />
              </Link>
              
              <button className="group inline-flex items-center px-6 sm:px-10 py-4 sm:py-5 bg-card/40 backdrop-blur-xl hover:bg-card/60 border border-border hover:border-primary/40 text-card-foreground font-semibold rounded-full transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center">
                <PlayCircle className="mr-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
                Watch Our Story
              </button>
            </div>
          </div>
        </div>
        
        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-primary/40 rounded-full flex justify-center backdrop-blur-sm bg-card/20">
            <div className="w-1 h-3 sm:w-1.5 sm:h-4 bg-professional-gradient rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-card/40 via-card/30 to-card/40 backdrop-blur-xl border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center group">
              <div className="text-2xl sm:text-4xl md:text-6xl font-bold bg-professional-gradient bg-clip-text text-transparent mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-500 font-display drop-shadow-lg">
                <AnimatedCounter end={25} suffix="+" />
              </div>
              <p className="text-muted-foreground font-semibold text-sm sm:text-lg">Happy Clients</p>
            </div>
            <div className="text-center group">
              <div className="text-2xl sm:text-4xl md:text-6xl font-bold bg-professional-gradient bg-clip-text text-transparent mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-500 font-display drop-shadow-lg">
                <AnimatedCounter end={300} suffix="%" />
              </div>
              <p className="text-muted-foreground font-semibold text-sm sm:text-lg">Average ROI</p>
            </div>
            <div className="text-center group">
              <div className="text-2xl sm:text-4xl md:text-6xl font-bold bg-professional-gradient bg-clip-text text-transparent mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-500 font-display drop-shadow-lg">
                <AnimatedCounter end={15} suffix="" />
              </div>
              <p className="text-muted-foreground font-semibold text-sm sm:text-lg">Team Members</p>
            </div>
            <div className="text-center group">
              <div className="text-2xl sm:text-4xl md:text-6xl font-bold bg-professional-gradient bg-clip-text text-transparent mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-500 font-display drop-shadow-lg">
                <AnimatedCounter end={99} suffix="%" />
              </div>
              <p className="text-muted-foreground font-semibold text-sm sm:text-lg">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-b from-background to-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-card-foreground mb-6 sm:mb-8 font-display px-2">
              Services That Drive{' '}
              <span className="bg-professional-gradient bg-clip-text text-transparent drop-shadow-lg">
                Growth
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
              From strategic marketing to stunning design, we provide comprehensive solutions that scale your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
            {services.map((service, index) => (
              <GlareCard
                key={service.title}
                className="bg-card/60 backdrop-blur-xl p-6 sm:p-10 rounded-3xl border border-border/50 hover:border-primary/40 transition-all duration-700 transform hover:-translate-y-4 hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/15 group"
              >
                <div className={`bg-gradient-to-br ${service.color} w-16 h-16 sm:w-20 sm:h-20 rounded-3xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                  <service.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-card-foreground mb-4 sm:mb-6 group-hover:text-primary transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg">
                  {service.description}
                </p>
                <Link
                  to="/contact"
                  className={`inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors duration-500 text-base sm:text-lg group-hover:translate-x-2 transform`}
                >
                  Let's Talk
                  <ArrowRight className="ml-3 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </GlareCard>
            ))}
          </div>

          <div className="text-center mt-16 sm:mt-20">
            <Link
              to="/services"
              className="inline-flex items-center px-6 sm:px-10 py-4 sm:py-5 bg-professional-gradient text-white font-semibold rounded-full transition-all duration-500 transform hover:scale-110 shadow-xl hover:shadow-primary/30"
            >
              Explore All Services
              <ArrowRight className="ml-3 h-5 w-5 sm:h-6 sm:w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Clients Marquee Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-r from-card/30 via-card/20 to-card/30 backdrop-blur-xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-card-foreground mb-6 sm:mb-8 font-display px-2">
              Trusted by{' '}
              <span className="bg-professional-gradient bg-clip-text text-transparent drop-shadow-lg">
                Amazing Clients
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
              We're proud to work with innovative businesses across various industries.
            </p>
          </div>
        </div>

        {/* Enhanced full-width marquee container */}
        <div className="relative flex h-[400px] sm:h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-r from-background/60 via-card/30 to-background/60 backdrop-blur-sm">
          {/* First Marquee */}
          <Marquee pauseOnHover className="[--duration:40s]">
            {firstRow.map((client) => (
              <ClientCard
                key={client.name}
                name={client.name}
                category={client.category}
              />
            ))}
          </Marquee>

          {/* Second Marquee (reverse) */}
          <Marquee reverse pauseOnHover className="[--duration:40s]">
            {secondRow.map((client) => (
              <ClientCard
                key={client.name}
                name={client.name}
                category={client.category}
              />
            ))}
          </Marquee>

          {/* Enhanced edge fade gradients */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-background via-background/90 to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-background via-background/90 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
          <div className="text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center px-6 sm:px-10 py-4 sm:py-5 bg-professional-gradient text-white font-semibold rounded-full transition-all duration-500 transform hover:scale-110 shadow-xl hover:shadow-primary/30"
            >
              View Our Portfolio
              <ArrowRight className="ml-3 h-5 w-5 sm:h-6 sm:w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-20 sm:py-32 bg-gradient-to-b from-background to-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-card-foreground mb-6 sm:mb-8 font-display px-2">
              What Our{' '}
              <span className="bg-professional-gradient bg-clip-text text-transparent drop-shadow-lg">
                Clients Say
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
              Don't just take our word for it. Here's what industry leaders say about working with AdGrades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
            {testimonials.map((testimonial, index) => (
              <GlareCard
                key={testimonial.author}
                className="bg-card/60 backdrop-blur-xl p-6 sm:p-10 rounded-3xl border border-border/50 hover:border-primary/40 transition-all duration-700 transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-primary/15 group"
              >
                <div className="flex items-center mb-6 sm:mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mr-4 sm:mr-6 group-hover:scale-110 transition-transform duration-500 shadow-lg"
                  />
                  <div>
                    <div className="font-bold text-card-foreground text-base sm:text-lg">
                      {testimonial.author}
                    </div>
                    <div className="text-muted-foreground text-sm sm:text-base">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </GlareCard>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced About Us Preview */}
      <section className="py-20 sm:py-32 bg-gradient-to-r from-card/40 via-card/30 to-card/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-card-foreground mb-8 sm:mb-10 font-display">
                Who We{' '}
                <span className="bg-professional-gradient bg-clip-text text-transparent drop-shadow-lg">
                  Are
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-12 leading-relaxed">
                AdGrades is a team of passionate marketers, designers, and developers who believe 
                every startup has the potential to become an industry leader. We combine creative 
                strategy with data-driven execution to deliver results that matter.
              </p>
              <div className="grid grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
                <div className="text-center p-4 sm:p-6 bg-card/60 rounded-2xl border border-border/50 backdrop-blur-sm hover:scale-105 transition-transform duration-500">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2 sm:mb-3">May 2023</div>
                  <div className="text-muted-foreground font-medium text-sm sm:text-base">Founded</div>
                </div>
                <div className="text-center p-4 sm:p-6 bg-card/60 rounded-2xl border border-border/50 backdrop-blur-sm hover:scale-105 transition-transform duration-500">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2 sm:mb-3">15+</div>
                  <div className="text-muted-foreground font-medium text-sm sm:text-base">Team Members</div>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center px-6 sm:px-10 py-4 sm:py-5 bg-professional-gradient text-white font-semibold rounded-full transition-all duration-500 transform hover:scale-110 shadow-xl hover:shadow-primary/30"
              >
                Meet the Team
                <Users className="ml-3 h-5 w-5 sm:h-6 sm:w-6" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?w=600&h=400&fit=crop"
                alt="AdGrades team working"
                className="rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-700 w-full"
              />
              <div className="absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 bg-card/80 backdrop-blur-xl p-4 sm:p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 border border-border/50">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <Award className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
                  <div>
                    <div className="font-bold text-card-foreground text-sm sm:text-lg">Growing Fast</div>
                    <div className="text-muted-foreground text-xs sm:text-base">Since 2023</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 sm:py-32 bg-professional-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-8 sm:mb-10 font-display drop-shadow-lg">
              Ready to Grow Your Brand?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-12 sm:mb-16 opacity-95 leading-relaxed max-w-4xl mx-auto px-4">
              Let's discuss how we can transform your business into the next big success story. 
              Schedule a free consultation and discover your growth potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center px-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 sm:px-12 py-4 sm:py-6 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-3xl text-base sm:text-lg justify-center"
              >
                Start a Project
                <Target className="ml-3 h-5 w-5 sm:h-6 sm:w-6" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center px-8 sm:px-12 py-4 sm:py-6 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-primary transition-all duration-500 transform hover:scale-110 text-base sm:text-lg justify-center"
              >
                View Our Work
                <ArrowRight className="ml-3 h-5 w-5 sm:h-6 sm:w-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;