import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Share2, 
  Palette, 
  Search, 
  Mail, 
  TrendingUp, 
  Code,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Target,
  Lightbulb,
  Zap,
  Users,
  Smartphone,
  Monitor,
  Megaphone,
  Radio,
  Calendar,
  UserCheck,
  Building
} from 'lucide-react';
import VortexBackground from '../components/VortexBackground';

const Services: React.FC = () => {
  const digitalMarketingServices = [
    {
      icon: Share2,
      title: 'Social Media Marketing',
      tagline: '"We make scrolling stop & wallets open."',
      description: 'We don\'t just post—we create conversations, build communities, and drive real sales. Every post, reel, and story is designed to convert.',
      gradient: 'from-blue-500 to-cyan-500',
      iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-500'
    },
    {
      icon: Search,
      title: 'SEO (Search Engine Optimization)',
      tagline: '"Google loves us. Your competitors hate us."',
      description: 'From keyword strategy to backlinks—we don\'t aim to just rank, we aim to dominate.',
      gradient: 'from-green-500 to-emerald-500',
      iconBg: 'bg-gradient-to-br from-green-500 to-emerald-500'
    },
    {
      icon: Lightbulb,
      title: 'Content Marketing',
      tagline: '"Your brand, but make it ✨ compelling ✨."',
      description: 'Blogs, videos, memes, storytelling—we craft content that connects and converts.',
      gradient: 'from-yellow-500 to-orange-500',
      iconBg: 'bg-gradient-to-br from-yellow-500 to-orange-500'
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      tagline: '"We make Picasso jealous."',
      description: 'We design visuals that aren\'t just pretty—they drive clicks, shares, and sales.',
      gradient: 'from-purple-500 to-pink-500',
      iconBg: 'bg-gradient-to-br from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Google & Meta Ads (PPC & Performance Marketing)',
      tagline: '"Spending wisely > Spending more."',
      description: 'Laser-focused ads that maximize ROI by turning clicks into paying customers.',
      gradient: 'from-red-500 to-pink-500',
      iconBg: 'bg-gradient-to-br from-red-500 to-pink-500'
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      tagline: '"Not spam. Just money-making emails."',
      description: 'Automated email sequences that build trust and drive consistent conversions.',
      gradient: 'from-indigo-500 to-purple-500',
      iconBg: 'bg-gradient-to-br from-indigo-500 to-purple-500'
    },
    {
      icon: Users,
      title: 'Lead Generation',
      tagline: '"Because followers don\'t pay bills. Leads do."',
      description: 'Campaigns that deliver qualified prospects ready to buy.',
      gradient: 'from-teal-500 to-cyan-500',
      iconBg: 'bg-gradient-to-br from-teal-500 to-cyan-500'
    }
  ];

  const softwareSolutions = [
    {
      icon: Building,
      title: 'CRM / ERP Development',
      tagline: '"Your business, but on autopilot."',
      description: 'Custom software to streamline operations, manage sales, and drive growth.',
      gradient: 'from-slate-500 to-gray-600',
      iconBg: 'bg-gradient-to-br from-slate-500 to-gray-600'
    },
    {
      icon: Monitor,
      title: 'Website & E-Commerce Development',
      tagline: '"If your website isn\'t selling, is it even a website?"',
      description: 'Fully responsive, high-converting sites that sell even while you sleep.',
      gradient: 'from-blue-600 to-indigo-600',
      iconBg: 'bg-gradient-to-br from-blue-600 to-indigo-600'
    },
    {
      icon: Code,
      title: 'No-Code Platforms',
      tagline: '"Build like a pro. No coding required."',
      description: 'We help you launch scalable systems faster with no-code and low-code solutions.',
      gradient: 'from-emerald-500 to-teal-600',
      iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-600'
    }
  ];

  const offlineMarketing = [
    {
      icon: Megaphone,
      title: 'Hoardings & Outdoor Ads',
      tagline: '"Because size matters (for ads, obviously)."',
      description: 'Billboard-level impact for street-level visibility and brand recall.',
      gradient: 'from-orange-500 to-red-500',
      iconBg: 'bg-gradient-to-br from-orange-500 to-red-500'
    },
    {
      icon: Radio,
      title: 'TV / Radio Ads',
      tagline: '"Your grandma\'s favorite marketing? We still make it cool."',
      description: 'Traditional media with modern messaging—broadcast your brand to the masses.',
      gradient: 'from-violet-500 to-purple-600',
      iconBg: 'bg-gradient-to-br from-violet-500 to-purple-600'
    },
    {
      icon: Calendar,
      title: 'Event Marketing & Brand Activations',
      tagline: '"We turn brand activations into viral experiences."',
      description: 'Memorable in-person moments that build loyalty and excitement.',
      gradient: 'from-pink-500 to-rose-500',
      iconBg: 'bg-gradient-to-br from-pink-500 to-rose-500'
    }
  ];

  const otherServices = [
    {
      icon: UserCheck,
      title: 'Influencer Marketing',
      tagline: '"We find the right faces to sell your stuff."',
      description: 'We collaborate with influencers who actually convert—not just collect likes.',
      gradient: 'from-amber-500 to-orange-500',
      iconBg: 'bg-gradient-to-br from-amber-500 to-orange-500'
    },
    {
      icon: Target,
      title: 'Account-Based Marketing (ABM)',
      tagline: '"For B2B clients who want to close deals, not just collect leads."',
      description: 'Hyper-personalized campaigns to engage and convert high-ticket decision-makers.',
      gradient: 'from-cyan-500 to-blue-500',
      iconBg: 'bg-gradient-to-br from-cyan-500 to-blue-500'
    }
  ];

  const ServiceSection = ({ 
    title, 
    subtitle, 
    services, 
    sectionNumber 
  }: { 
    title: string; 
    subtitle: string; 
    services: any[]; 
    sectionNumber: string;
  }) => (
    <div className="mb-20">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-2xl mb-6">
          <span className="text-2xl font-bold text-primary">{sectionNumber}</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          {title}
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto description-text">
          {subtitle}
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="group minimal-card rounded-3xl p-8 hover:border-primary/40 transition-all duration-700 transform hover:-translate-y-4 hover:scale-[1.03]"
          >
            {/* Icon */}
            <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-xl`}>
              <service.icon className="h-8 w-8 text-white" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-500">
              {service.title}
            </h3>

            {/* Tagline */}
            <p className="text-primary font-semibold italic mb-4 text-lg">
              {service.tagline}
            </p>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed service-description">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

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
                🚀 SERVICES – What We Do
              </span>
            </div>
            
            {/* Title with Hero Glow */}
            <h1 className="heading-primary text-foreground hero-title-glow mb-8 leading-tight">
              Services That Drive{' '}
              <span className="brand-gradient-text">
                Growth
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed description-text">
              Think of us as your marketing SWAT team. Fast, precise, and impossible to ignore.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="brand-button"
              >
                Let's Talk Business
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
              
              <Link
                to="/portfolio"
                className="brand-button-outline"
              >
                See Our Work
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      <section className="section-padding content-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Digital Marketing Section */}
          <ServiceSection
            sectionNumber="1️⃣"
            title="DIGITAL MARKETING"
            subtitle="Dominate the Digital Space"
            services={digitalMarketingServices}
          />

          {/* Separator */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent my-20" />

          {/* Software Solutions Section */}
          <ServiceSection
            sectionNumber="2️⃣"
            title="SOFTWARE SOLUTIONS"
            subtitle="Automate, Scale, & Sell"
            services={softwareSolutions}
          />

          {/* Separator */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent my-20" />

          {/* Offline Marketing Section */}
          <ServiceSection
            sectionNumber="3️⃣"
            title="OFFLINE MARKETING"
            subtitle="Because Not Everything Happens Online"
            services={offlineMarketing}
          />

          {/* Separator */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent my-20" />

          {/* Other Services Section */}
          <ServiceSection
            sectionNumber="4️⃣"
            title="OTHER SERVICES"
            subtitle="Because We Go Beyond the Basics"
            services={otherServices}
          />

        </div>
      </section>

      {/* Floating CTA Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Link
          to="/contact"
          className="brand-button shadow-2xl animate-button-pulse"
        >
          Let's Talk
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>

      {/* CTA Section */}
      <section className="section-padding brand-gradient">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-secondary text-white mb-10">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-16 max-w-4xl mx-auto description-text">
            Let's discuss which services will have the biggest impact on your growth. 
            Schedule a free strategy session with our team.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-12 py-6 bg-white text-slate-dark font-bold rounded-lg hover:bg-gray-100 transition-all duration-500 transform hover:scale-110 shadow-2xl text-lg"
          >
            Get Your Free Strategy Session
            <ArrowRight className="ml-3 h-6 w-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;