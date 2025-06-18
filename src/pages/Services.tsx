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
import DynamicBackground from '../components/DynamicBackground';

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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <DynamicBackground variant="services" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            {/* Badge with glow */}
            <div className="page-badge brand-glow">
              <Zap className="w-5 h-5 mr-3 animate-pulse" />
              <span className="brand-gradient-text font-semibold">
                Comprehensive Marketing Solutions
              </span>
            </div>
            
            <h1 className="heading-primary text-foreground text-glow mb-8 leading-tight">
              Services That Drive{' '}
              <span className="brand-gradient-text brand-glow">
                Growth
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground text-glow mb-12 max-w-4xl mx-auto leading-relaxed">
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

      {/* Services Sections - Optimized and clean */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="mb-24"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center mb-8">
                    <div className={`w-16 h-16 rounded-2xl ${service.iconBg} flex items-center justify-center shadow-xl mr-6`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground text-glow">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-muted-foreground text-glow mb-10 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Process */}
                  <div className="mb-10">
                    <h3 className="text-xl font-semibold text-foreground text-glow mb-6">
                      Our 3-Step Process
                    </h3>
                    <div className="space-y-6">
                      {service.process.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-start">
                          <div className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center flex-shrink-0 shadow-lg mr-4`}>
                            <step.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground text-glow mb-2">
                              {step.step}
                            </h4>
                            <p className="text-muted-foreground leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Success Story */}
                  <div className="minimal-card p-6 mb-8">
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1 mr-4" />
                      <div>
                        <h4 className="font-semibold text-foreground text-glow mb-2">
                          Client Success
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
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
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Link>
                </div>

                {/* Visual */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative group">
                    <div className={`w-full h-[400px] bg-gradient-to-br ${service.gradient} rounded-2xl shadow-xl flex items-center justify-center transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105`}>
                      <service.icon className="h-24 w-24 text-white/30" />
                    </div>
                    <div className="absolute -bottom-6 -right-6 bg-card/90 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-border">
                      <div className="text-2xl font-bold text-foreground text-glow">
                        {index + 1}
                      </div>
                      <div className="text-muted-foreground font-medium">
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
          <h2 className="heading-secondary text-[#0B1120] mb-10">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-[#0B1120]/80 mb-16 max-w-4xl mx-auto">
            Let's discuss which services will have the biggest impact on your growth. 
            Schedule a free strategy session with our team.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-12 py-6 bg-[#0B1120] text-foreground font-bold rounded-lg hover:bg-[#0F172A] transition-all duration-500 transform hover:scale-110 shadow-2xl text-lg"
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