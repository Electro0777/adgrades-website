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
  Zap
} from 'lucide-react';
import VortexBackground from '../components/VortexBackground';

const Services: React.FC = () => {
  const services = [
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Build a powerful social presence that engages your audience and drives conversions. Our strategic approach combines compelling content with data-driven insights to grow your community and boost brand awareness across all major platforms.',
      process: [
        { icon: Target, step: 'Strategy Development', description: 'Audience research and platform selection' },
        { icon: Lightbulb, step: 'Content Creation', description: 'Engaging posts and visual content' },
        { icon: BarChart3, step: 'Performance Analysis', description: 'Track metrics and optimize campaigns' }
      ],
      success: 'Increased follower engagement by 400% for TechFlow in just 3 months',
      gradient: 'from-blue-500 to-cyan-500',
      iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-500'
    },
    {
      icon: Palette,
      title: 'Brand Identity & Design',
      description: 'Create a memorable brand identity that stands out in the marketplace. From logo design to complete brand guidelines, we develop cohesive visual systems that communicate your values and resonate with your target audience.',
      process: [
        { icon: Target, step: 'Brand Discovery', description: 'Understand your vision and market position' },
        { icon: Lightbulb, step: 'Design Development', description: 'Create visual identity and guidelines' },
        { icon: BarChart3, step: 'Brand Implementation', description: 'Apply across all touchpoints' }
      ],
      success: 'Helped DesignStudio achieve 300% increase in brand recognition',
      gradient: 'from-purple-500 to-pink-500',
      iconBg: 'bg-gradient-to-br from-purple-500 to-pink-500'
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Get found by customers who are actively searching for your products or services. Our comprehensive SEO strategy includes technical optimization, content marketing, and link building to improve your organic search visibility.',
      process: [
        { icon: Target, step: 'SEO Audit', description: 'Comprehensive website and competitor analysis' },
        { icon: Lightbulb, step: 'Content Optimization', description: 'Keyword research and content strategy' },
        { icon: BarChart3, step: 'Performance Tracking', description: 'Monitor rankings and organic traffic' }
      ],
      success: 'Achieved #1 rankings for 15+ keywords for local business client',
      gradient: 'from-green-500 to-emerald-500',
      iconBg: 'bg-gradient-to-br from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Nurture leads and retain customers with personalized email campaigns that deliver results. Our email marketing strategies focus on segmentation, automation, and compelling content that drives engagement and conversions.',
      process: [
        { icon: Target, step: 'List Building', description: 'Grow and segment your email audience' },
        { icon: Lightbulb, step: 'Campaign Creation', description: 'Design and write compelling emails' },
        { icon: BarChart3, step: 'Automation Setup', description: 'Create automated drip sequences' }
      ],
      success: 'Generated $2M in revenue through email campaigns for e-commerce client',
      gradient: 'from-orange-500 to-red-500',
      iconBg: 'bg-gradient-to-br from-orange-500 to-red-500'
    },
    {
      icon: TrendingUp,
      title: 'Performance Advertising',
      description: 'Maximize your advertising ROI with data-driven campaigns across Google, Facebook, and other platforms. Our performance marketing experts optimize every aspect of your campaigns to drive qualified leads and sales.',
      process: [
        { icon: Target, step: 'Campaign Strategy', description: 'Audience targeting and platform selection' },
        { icon: Lightbulb, step: 'Ad Creation', description: 'Design compelling ad creatives and copy' },
        { icon: BarChart3, step: 'Optimization', description: 'Continuous testing and improvement' }
      ],
      success: 'Delivered 500% ROAS for GrowthCo\'s product launch campaign',
      gradient: 'from-yellow-500 to-orange-500',
      iconBg: 'bg-gradient-to-br from-yellow-500 to-orange-500'
    },
    {
      icon: Code,
      title: 'Web & App Development',
      description: 'Build beautiful, functional websites and applications that provide exceptional user experiences. Our development team creates responsive, fast-loading sites optimized for conversions and user engagement.',
      process: [
        { icon: Target, step: 'Planning & Design', description: 'User experience and interface design' },
        { icon: Lightbulb, step: 'Development', description: 'Build with modern technologies' },
        { icon: BarChart3, step: 'Testing & Launch', description: 'Quality assurance and deployment' }
      ],
      success: 'Improved conversion rates by 250% with new website for SaaS client',
      gradient: 'from-indigo-500 to-purple-500',
      iconBg: 'bg-gradient-to-br from-indigo-500 to-purple-500'
    }
  ];

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
                Comprehensive Marketing Solutions
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
              Our comprehensive marketing and design services are strategically designed to transform 
              startups into industry leaders through data-driven campaigns and exceptional creativity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="brand-button"
              >
                Get Started Today
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
              
              <Link
                to="/portfolio"
                className="brand-button-outline"
              >
                View Our Work
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Sections - Mobile Responsive */}
      <section className="section-padding content-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="mb-16 sm:mb-20 lg:mb-24"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center mb-6 sm:mb-8">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl ${service.iconBg} flex items-center justify-center shadow-xl mr-4 sm:mr-6`}>
                      <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 leading-relaxed service-description">
                    {service.description}
                  </p>

                  {/* Process - Mobile Responsive */}
                  <div className="mb-8 sm:mb-10">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6">
                      Our 3-Step Process
                    </h3>
                    <div className="space-y-4 sm:space-y-6">
                      {service.process.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-start">
                          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl ${service.iconBg} flex items-center justify-center flex-shrink-0 shadow-lg mr-3 sm:mr-4`}>
                            <step.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">
                              {step.step}
                            </h4>
                            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base description-text">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Success Story - Mobile Responsive */}
                  <div className="minimal-card p-4 sm:p-6 mb-6 sm:mb-8">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-secondary flex-shrink-0 mt-0.5 sm:mt-1 mr-3 sm:mr-4" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">
                          Client Success
                        </h4>
                        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base description-text">
                          {service.success}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="brand-button inline-flex"
                  >
                    Let's Talk
                    <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
                  </Link>
                </div>

                {/* Visual - Mobile Responsive */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative group">
                    <div className={`w-full h-[300px] sm:h-[350px] lg:h-[400px] bg-gradient-to-br ${service.gradient} rounded-xl sm:rounded-2xl shadow-xl flex items-center justify-center transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105`}>
                      <service.icon className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 text-white/30" />
                    </div>
                    <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-card/90 backdrop-blur-xl p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl border border-border">
                      <div className="text-xl sm:text-2xl font-bold text-foreground">
                        {index + 1}
                      </div>
                      <div className="text-muted-foreground font-medium text-sm sm:text-base">
                        Core Service
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

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