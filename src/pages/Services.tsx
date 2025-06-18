import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Share2, 
  Palette, 
  Search, 
  Mail, 
  TrendingUp, 
  Code,
  ArrowRight,
  Target,
  Lightbulb,
  Zap,
  MessageCircle,
  Users,
  Globe,
  Megaphone,
  Eye,
  Rocket,
  Database,
  Monitor,
  Smartphone,
  Settings,
  Tv,
  Radio,
  Calendar,
  Star,
  Building
} from 'lucide-react';
import VortexBackground from '../components/VortexBackground';

const Services: React.FC = () => {
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowFloatingCTA(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const digitalServices = [
    {
      icon: Share2,
      title: 'Social Media Marketing',
      tagline: '"We make scrolling stop & wallets open."',
      description: 'We don\'t just post—we create conversations, build communities, and drive real sales. Every post, reel, and story is designed to convert.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Search,
      title: 'SEO (Search Engine Optimization)',
      tagline: '"Google loves us. Your competitors hate us."',
      description: 'From keyword strategy to backlinks—we don\'t aim to just rank, we aim to dominate.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Lightbulb,
      title: 'Content Marketing',
      tagline: '"Your brand, but make it ✨ compelling ✨."',
      description: 'Blogs, videos, memes, storytelling—we craft content that connects and converts.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      tagline: '"We make Picasso jealous."',
      description: 'We design visuals that aren\'t just pretty—they drive clicks, shares, and sales.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: TrendingUp,
      title: 'Google & Meta Ads (PPC & Performance Marketing)',
      tagline: '"Spending wisely > Spending more."',
      description: 'Laser-focused ads that maximize ROI by turning clicks into paying customers.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      tagline: '"Not spam. Just money-making emails."',
      description: 'Automated email sequences that build trust and drive consistent conversions.',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Target,
      title: 'Lead Generation',
      tagline: '"Because followers don\'t pay bills. Leads do."',
      description: 'Campaigns that deliver qualified prospects ready to buy.',
      gradient: 'from-teal-500 to-cyan-500'
    }
  ];

  const softwareServices = [
    {
      icon: Database,
      title: 'CRM / ERP Development',
      tagline: '"Your business, but on autopilot."',
      description: 'Custom software to streamline operations, manage sales, and drive growth.',
      gradient: 'from-slate-500 to-gray-600'
    },
    {
      icon: Globe,
      title: 'Website & E-Commerce Development',
      tagline: '"If your website isn\'t selling, is it even a website?"',
      description: 'Fully responsive, high-converting sites that sell even while you sleep.',
      gradient: 'from-blue-600 to-indigo-600'
    },
    {
      icon: Settings,
      title: 'No-Code Platforms',
      tagline: '"Build like a pro. No coding required."',
      description: 'We help you launch scalable systems faster with no-code and low-code solutions.',
      gradient: 'from-emerald-500 to-teal-600'
    }
  ];

  const offlineServices = [
    {
      icon: Eye,
      title: 'Hoardings & Outdoor Ads',
      tagline: '"Because size matters (for ads, obviously)."',
      description: 'Billboard-level impact for street-level visibility and brand recall.',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: Tv,
      title: 'TV / Radio Ads',
      tagline: '"Your grandma\'s favorite marketing? We still make it cool."',
      description: 'Traditional media with modern messaging—broadcast your brand to the masses.',
      gradient: 'from-purple-600 to-indigo-600'
    },
    {
      icon: Calendar,
      title: 'Event Marketing & Brand Activations',
      tagline: '"We turn brand activations into viral experiences."',
      description: 'Memorable in-person moments that build loyalty and excitement.',
      gradient: 'from-orange-500 to-yellow-500'
    }
  ];

  const otherServices = [
    {
      icon: Star,
      title: 'Influencer Marketing',
      tagline: '"We find the right faces to sell your stuff."',
      description: 'We collaborate with influencers who actually convert—not just collect likes.',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: Building,
      title: 'Account-Based Marketing (ABM)',
      tagline: '"For B2B clients who want to close deals, not just collect leads."',
      description: 'Hyper-personalized campaigns to engage and convert high-ticket decision-makers.',
      gradient: 'from-gray-600 to-slate-700'
    }
  ];

  const ServiceCard = ({ service, index }: { service: any; index: number }) => (
    <div className="group relative bg-card/60 backdrop-blur-sm rounded-3xl p-8 border border-border/50 hover:border-primary/40 transition-all duration-700 transform hover:-translate-y-2 hover:scale-[1.02] shadow-lg hover:shadow-2xl">
      {/* Icon */}
      <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl`}>
        <service.icon className="h-8 w-8 text-white" />
      </div>
      
      {/* Title */}
      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-500">
        {service.title}
      </h3>
      
      {/* Tagline */}
      <p className="text-lg font-semibold text-primary mb-4 italic">
        {service.tagline}
      </p>
      
      {/* Description */}
      <p className="text-muted-foreground leading-relaxed mb-6 service-description">
        {service.description}
      </p>
      
      {/* CTA */}
      <Link
        to="/contact"
        className="inline-flex items-center text-primary hover:text-secondary font-semibold transition-colors duration-300 group-hover:translate-x-2"
      >
        Get Started
        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
      
      {/* Hover gradient overlay */}
      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700 pointer-events-none`} />
    </div>
  );

  return (
    <div className="pt-16">
      {/* Vortex Background */}
      <VortexBackground className="-z-10" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            {/* Badge */}
            <div className="page-badge hero-badge-glow">
              <Rocket className="w-5 h-5 mr-3" />
              <span className="brand-gradient-text font-semibold">
                SERVICES – What We Do
              </span>
            </div>
            
            {/* Title */}
            <h1 className="heading-primary text-foreground hero-title-glow mb-8 leading-tight">
              <span className="brand-gradient-text">
                SERVICES
              </span>{' '}
              – What We Do
            </h1>
            
            {/* Hook */}
            <p className="text-2xl md:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-medium description-text">
              Think of us as your marketing <span className="text-primary font-bold">SWAT team</span>. 
              Fast, precise, and impossible to ignore.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="brand-button"
              >
                Let's Dominate Together
                <Zap className="ml-3 h-6 w-6" />
              </Link>
              
              <Link
                to="/portfolio"
                className="brand-button-outline"
              >
                See Our Victories
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Marketing Section */}
      <section className="section-padding content-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full mb-8">
              <Megaphone className="w-6 h-6 text-primary mr-3" />
              <span className="text-primary font-bold text-lg">1️⃣ DIGITAL MARKETING</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Dominate the{' '}
              <span className="brand-gradient-text">Digital Space</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {digitalServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Software Solutions Section */}
      <section className="section-padding content-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-secondary/10 rounded-full mb-8">
              <Code className="w-6 h-6 text-secondary mr-3" />
              <span className="text-secondary font-bold text-lg">2️⃣ SOFTWARE SOLUTIONS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Automate, Scale, &{' '}
              <span className="brand-gradient-text">Sell</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full" />
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {softwareServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Offline Marketing Section */}
      <section className="section-padding content-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-orange-500/10 rounded-full mb-8">
              <Tv className="w-6 h-6 text-orange-500 mr-3" />
              <span className="text-orange-500 font-bold text-lg">3️⃣ OFFLINE MARKETING</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Because Not Everything{' '}
              <span className="brand-gradient-text">Happens Online</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full" />
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {offlineServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Other Services Section */}
      <section className="section-padding content-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-purple-500/10 rounded-full mb-8">
              <Star className="w-6 h-6 text-purple-500 mr-3" />
              <span className="text-purple-500 font-bold text-lg">4️⃣ OTHER SERVICES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Because We Go{' '}
              <span className="brand-gradient-text">Beyond the Basics</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {otherServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding brand-gradient">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">
            Ready to Stop Being Invisible?
          </h2>
          <p className="text-xl text-white/90 mb-16 max-w-4xl mx-auto description-text">
            Let's turn your business into the talk of the town (and the internet). 
            Your competitors won't know what hit them.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-12 py-6 bg-white text-slate-dark font-bold rounded-full hover:bg-gray-100 transition-all duration-500 transform hover:scale-110 shadow-2xl text-lg"
            >
              Let's Talk Business
              <MessageCircle className="ml-3 h-6 w-6" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center px-12 py-6 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-slate-dark transition-all duration-500 transform hover:scale-110 text-lg"
            >
              See Our Wins
              <Target className="ml-3 h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Floating CTA Button */}
      {showFloatingCTA && (
        <div className="fixed bottom-8 right-8 z-50 animate-fade-in">
          <Link
            to="/contact"
            className="flex items-center px-6 py-4 brand-gradient text-white font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-button-pulse"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Let's Talk
          </Link>
        </div>
      )}
    </div>
  );
};

export default Services;