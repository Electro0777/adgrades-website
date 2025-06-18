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
import AnimatedCounter from '../components/AnimatedCounter';
import Marquee from '../components/Marquee';
import ClientCard from '../components/ClientCard';
import VortexBackground from '../components/VortexBackground';

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
    { name: 'OS CODE Solutions', category: 'IT Solutions', description: 'Emerging IT solutions startup' },
    { name: 'Delhi 65', category: 'Restaurant', description: 'Ranchi Restaurant' },
    { name: 'Medhavi Classes', category: 'Education', description: 'Online education platform' },
    { name: 'Uplifto', category: 'Tech Services', description: 'Tech-based startup for IT services' },
    { name: 'Vinayaka Enterprises', category: 'Interior Design', description: 'Interior Design Studio' },
    { name: 'M K Streetwear', category: 'Fashion', description: 'Streetwear Fashion Brand' },
    { name: 'Adhyayan', category: 'Education', description: 'Online Coaching Institute' },
    { name: 'Dew Drop Homestay', category: 'Hospitality', description: 'Premium Hilltop Stay' },
    { name: 'Nataraj Dance Studios', category: 'Entertainment', description: 'Dance training academy' },
    { name: 'Pureblend Foods', category: 'Food & Beverage', description: 'B2B Food Supply Chain Brand' },
    { name: 'SP Enterprises', category: 'Heavy Equipment', description: 'Heavy Earthmoving Equipment & Spares' },
    { name: 'AS Tech Industries', category: 'Engineering', description: 'Engineering and Manufacturing Services' }
  ];

  const firstRow = clients.slice(0, Math.ceil(clients.length / 2));
  const secondRow = clients.slice(Math.ceil(clients.length / 2));

  const testimonials = [
    {
      quote: "AdGrades has been instrumental in boosting our digital reach. Their team truly understands the education sector. We've seen a sharp rise in engagement and visibility. Highly professional and results-driven service.",
      author: "Pranav Jha",
      role: "Owner, Medhavi Classes"
    },
    {
      quote: "We started with zero online presence. AdGrades built our brand identity from scratch. Now, our restaurant is recognized both online and offline. Couldn't have asked for a better marketing partner.",
      author: "Shreyas Bhadani",
      role: "Owner, Delhi 65 Restaurant"
    },
    {
      quote: "AdGrades helped shape our creative brand online. Their strategies brought in real clients and recognition. They captured our studio's essence beautifully. A dependable and creative team to work with.",
      author: "Abhishek",
      role: "Owner, Natraj Studios"
    },
    {
      quote: "AdGrades gave our brand a clear voice in the digital space. Their strategies were sharp, effective, and well-aligned with our goals. We saw real traction across platforms in a short time. Truly impressed with their expertise.",
      author: "Harsh Kumar",
      role: "Co-founder, OS Code"
    },
    {
      quote: "We went from being hidden to fully booked. AdGrades brought in real customers through smart ads. They told our story in a way people connected with. Thanks to them, every weekend is now packed.",
      author: "Suresh",
      role: "Owner, Dewdrop Homestays"
    },
    {
      quote: "We needed visibility in a niche market, and AdGrades delivered. Their campaigns showcased our laser cutting work with style. Leads, inquiries, and recognition have grown consistently. Smart, reliable, and creative team.",
      author: "Balakrishna",
      role: "Owner, Vinayaka Enterprises"
    }
  ];

  return (
    <div className="pt-16 overflow-x-hidden">
      {/* Vortex Background */}
      <VortexBackground className="-z-10" />

      {/* Hero Section - Mobile Responsive */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="animate-fade-in">
            {/* Badge with Hero Glow */}
            <div className="page-badge hero-badge-glow">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
              <span className="brand-gradient-text font-semibold text-sm sm:text-base">
                Transforming Businesses Since 2023
              </span>
            </div>
            
            {/* Title with Hero Glow */}
            <h1 className="heading-primary text-foreground hero-title-glow mb-6 sm:mb-8 leading-tight">
              We Help{' '}
              <span className="brand-gradient-text">
                Startups
              </span>
              <br />
              Become Industry Leaders
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4 description-text">
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
      <section className="section-padding content-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            <div className="text-center p-4 sm:p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border">
              <div className="text-2xl sm:text-4xl md:text-6xl font-bold brand-gradient-text mb-2 sm:mb-3">
                <AnimatedCounter end={12} suffix="+" />
              </div>
              <p className="text-muted-foreground font-medium text-sm sm:text-base">Happy Clients</p>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border">
              <div className="text-2xl sm:text-4xl md:text-6xl font-bold brand-gradient-text mb-2 sm:mb-3">
                <AnimatedCounter end={300} suffix="%" />
              </div>
              <p className="text-muted-foreground font-medium text-sm sm:text-base">Average ROI</p>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border">
              <div className="text-2xl sm:text-4xl md:text-6xl font-bold brand-gradient-text mb-2 sm:mb-3">
                <AnimatedCounter end={12} suffix="" />
              </div>
              <p className="text-muted-foreground font-medium text-sm sm:text-base">Team Members</p>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border">
              <div className="text-2xl sm:text-4xl md:text-6xl font-bold brand-gradient-text mb-2 sm:mb-3">
                <AnimatedCounter end={99} suffix="%" />
              </div>
              <p className="text-muted-foreground font-medium text-sm sm:text-base">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Mobile Responsive */}
      <section className="section-padding content-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="heading-secondary text-foreground mb-4 sm:mb-6">
              Services That Drive{' '}
              <span className="brand-gradient-text">Growth</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 description-text">
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
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base service-description">
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
      <section className="section-padding content-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
          <div className="text-center">
            <h2 className="heading-secondary text-foreground mb-4 sm:mb-6">
              Trusted by{' '}
              <span className="brand-gradient-text">Amazing Clients</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 description-text">
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
      <section className="section-padding content-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="heading-secondary text-foreground mb-4 sm:mb-6">
              What Our{' '}
              <span className="brand-gradient-text">Clients Say</span>
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
                <blockquote className="text-muted-foreground mb-6 sm:mb-8 italic leading-relaxed text-sm sm:text-base description-text">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-foreground text-sm sm:text-base">
                    {testimonial.author}
                  </div>
                  <div className="text-muted-foreground text-xs sm:text-sm">
                    {testimonial.role}
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
          <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-12 max-w-3xl mx-auto description-text">
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