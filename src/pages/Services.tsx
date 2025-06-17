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
import GlareCard from '../components/GlareCard';

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
      color: 'from-primary-500 to-accent'
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
      color: 'from-secondary-500 to-secondary-600'
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
      color: 'from-success to-emerald-500'
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
      color: 'from-warning to-red-500'
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
      color: 'from-yellow-500 to-warning'
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
      color: 'from-secondary to-primary'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section with Dynamic Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <DynamicBackground variant="services" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center px-8 py-4 bg-card/30 backdrop-blur-xl border border-primary/30 rounded-full text-primary text-sm font-medium mb-8 hover:bg-card/40 transition-all duration-500 shadow-lg hover:shadow-primary/20 hover:scale-105">
              <Zap className="w-5 h-5 mr-3 animate-pulse" />
              <span className="bg-professional-gradient bg-clip-text text-transparent font-semibold">
                Comprehensive Marketing Solutions
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-card-foreground mb-8 leading-tight tracking-tight font-display">
              Services That Drive{' '}
              <span className="bg-professional-gradient bg-clip-text text-transparent drop-shadow-2xl">
                Growth
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              Our comprehensive marketing and design services are strategically designed to transform 
              startups into industry leaders through data-driven campaigns and exceptional creativity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="group inline-flex items-center px-10 py-5 bg-professional-gradient text-white font-semibold rounded-full transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-primary/30 shadow-xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative">Get Started Today</span>
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform relative" />
              </Link>
              
              <Link
                to="/portfolio"
                className="group inline-flex items-center px-10 py-5 bg-card/40 backdrop-blur-xl hover:bg-card/60 border border-border hover:border-primary/40 text-card-foreground font-semibold rounded-full transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View Our Work
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-primary/40 rounded-full flex justify-center backdrop-blur-sm bg-card/20">
            <div className="w-1.5 h-4 bg-professional-gradient rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Enhanced Services Sections */}
      <section className="py-32 bg-gradient-to-b from-background to-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`mb-32 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${
                index % 2 === 1 ? 'lg:text-right' : ''
              }`}>
                {/* Enhanced Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center mb-10">
                    <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center mr-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110`}>
                      <service.icon className="h-10 w-10 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-card-foreground font-display">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Enhanced Process */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-semibold text-card-foreground mb-8">
                      Our 3-Step Process
                    </h3>
                    <div className="space-y-8">
                      {service.process.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-start group">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mr-6 flex-shrink-0 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110`}>
                            <step.icon className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-card-foreground mb-3 text-lg">
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

                  {/* Enhanced Success Story */}
                  <div className="bg-card/60 backdrop-blur-xl p-8 rounded-3xl mb-12 border border-border/50 hover:border-primary/30 transition-all duration-500">
                    <div className="flex items-start">
                      <CheckCircle className="h-8 w-8 text-success mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-card-foreground mb-3 text-lg">
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
                    className={`inline-flex items-center px-10 py-5 bg-gradient-to-r ${service.color} text-white font-semibold rounded-full hover:shadow-2xl transition-all duration-500 transform hover:scale-110 shadow-xl`}
                  >
                    Let's Talk
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Link>
                </div>

                {/* Enhanced Visual */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <GlareCard className="relative group">
                    <div className={`w-full h-[500px] bg-gradient-to-br ${service.color} rounded-3xl shadow-2xl flex items-center justify-center transition-all duration-700 group-hover:shadow-3xl group-hover:scale-105`}>
                      <service.icon className="h-32 w-32 text-white/30" />
                    </div>
                    <div className="absolute -bottom-8 -right-8 bg-card/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 border border-border/50">
                      <div className="text-3xl font-bold text-card-foreground">
                        {index + 1}
                      </div>
                      <div className="text-muted-foreground font-medium">
                        Core Service
                      </div>
                    </div>
                  </GlareCard>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-32 bg-professional-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-10 font-display drop-shadow-lg">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-16 opacity-95 leading-relaxed max-w-4xl mx-auto">
            Let's discuss which services will have the biggest impact on your growth. 
            Schedule a free strategy session with our team.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-12 py-6 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-3xl text-lg"
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