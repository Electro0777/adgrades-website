import React, { useState } from 'react';
import { 
  Users, 
  Heart, 
  Zap, 
  Target, 
  Coffee, 
  Award,
  Send,
  CheckCircle,
  MapPin,
  Clock,
  DollarSign,
  Briefcase
} from 'lucide-react';
import DynamicBackground from '../components/DynamicBackground';
import GlareCard from '../components/GlareCard';

const Careers: React.FC = () => {
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    portfolio: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setApplicationData({
      ...applicationData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', applicationData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setApplicationData({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        portfolio: '',
        message: ''
      });
    }, 3000);
  };

  const cultureValues = [
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We embrace new ideas and cutting-edge technologies to stay ahead of the curve.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'We believe in the power of teamwork and support each other to achieve greatness.'
    },
    {
      icon: Target,
      title: 'Results Driven',
      description: 'We focus on delivering measurable results that make a real impact for our clients.'
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'We prioritize mental health and ensure our team has time for what matters most.'
    },
    {
      icon: Coffee,
      title: 'Fun Environment',
      description: 'Work should be enjoyable! We create a positive, energetic atmosphere every day.'
    },
    {
      icon: Award,
      title: 'Growth Opportunities',
      description: 'We invest in our team\'s professional development and career advancement.'
    }
  ];

  const openPositions = [
    {
      title: 'Senior Digital Marketing Specialist',
      department: 'Marketing',
      type: 'Full-time',
      location: 'Remote / Hybrid',
      salary: '$60,000 - $80,000',
      description: 'Lead digital marketing campaigns across multiple channels and mentor junior team members.',
      requirements: [
        '5+ years of digital marketing experience',
        'Expertise in Google Ads, Facebook Ads, and Analytics',
        'Strong analytical and communication skills',
        'Experience with marketing automation tools'
      ]
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      type: 'Full-time',
      location: 'On-site',
      salary: '$55,000 - $75,000',
      description: 'Create stunning user interfaces and experiences for web and mobile applications.',
      requirements: [
        '3+ years of UI/UX design experience',
        'Proficiency in Figma, Adobe Creative Suite',
        'Strong portfolio showcasing web and mobile designs',
        'Understanding of user-centered design principles'
      ]
    },
    {
      title: 'Content Marketing Manager',
      department: 'Marketing',
      type: 'Full-time',
      location: 'Remote',
      salary: '$50,000 - $65,000',
      description: 'Develop and execute content strategies that drive engagement and conversions.',
      requirements: [
        '4+ years of content marketing experience',
        'Excellent writing and editing skills',
        'Experience with SEO and content management systems',
        'Social media marketing expertise'
      ]
    },
    {
      title: 'Frontend Developer',
      department: 'Development',
      type: 'Full-time',
      location: 'Hybrid',
      salary: '$65,000 - $85,000',
      description: 'Build responsive, high-performance web applications using modern technologies.',
      requirements: [
        '3+ years of frontend development experience',
        'Proficiency in React, TypeScript, and modern CSS',
        'Experience with responsive design and web performance',
        'Knowledge of version control (Git) and agile methodologies'
      ]
    }
  ];

  const benefits = [
    'Competitive salary and performance bonuses',
    'Comprehensive health, dental, and vision insurance',
    'Flexible working hours and remote work options',
    'Professional development budget (₹1,50,000/year)',
    'Modern equipment and tools',
    'Team building events and company retreats',
    'Unlimited PTO policy',
    'Stock options for senior positions'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section with Dynamic Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <DynamicBackground variant="careers" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center px-8 py-4 bg-card/30 backdrop-blur-xl border border-primary/30 rounded-full text-primary text-sm font-medium mb-8 hover:bg-card/40 transition-all duration-500 shadow-lg hover:shadow-primary/20 hover:scale-105">
              <Zap className="w-5 h-5 mr-3 animate-pulse" />
              <span className="bg-professional-gradient bg-clip-text text-transparent font-semibold">
                Join Our Growing Team
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-card-foreground mb-8 leading-tight tracking-tight font-display">
              Join the{' '}
              <span className="bg-professional-gradient bg-clip-text text-transparent drop-shadow-2xl">
                AdGrades Team
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              Be part of a dynamic team that's revolutionizing digital marketing. 
              We're looking for passionate individuals who want to make a real impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="#open-positions"
                className="group inline-flex items-center px-10 py-5 bg-professional-gradient text-white font-semibold rounded-full transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-primary/30 shadow-xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative">View Open Positions</span>
                <Briefcase className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform relative" />
              </a>
              
              <a
                href="#application-form"
                className="group inline-flex items-center px-10 py-5 bg-card/40 backdrop-blur-xl hover:bg-card/60 border border-border hover:border-primary/40 text-card-foreground font-semibold rounded-full transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Send className="mr-3 h-6 w-6" />
                Apply Now
              </a>
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

      {/* Enhanced Culture & Values */}
      <section className="py-32 bg-gradient-to-b from-background to-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-bold text-card-foreground mb-8 font-display">
              Our Culture &{' '}
              <span className="bg-professional-gradient bg-clip-text text-transparent drop-shadow-lg">
                Values
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              At AdGrades, we've built a culture that fosters creativity, collaboration, and personal growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {cultureValues.map((value, index) => (
              <GlareCard
                key={value.title}
                className="group text-center p-10 bg-card/60 backdrop-blur-xl rounded-3xl border border-border/50 hover:border-primary/40 transition-all duration-700 transform hover:-translate-y-4 hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/15"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                  <value.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-card-foreground mb-6 group-hover:text-primary transition-colors duration-500">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {value.description}
                </p>
              </GlareCard>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Open Positions */}
      <section id="open-positions" className="py-32 bg-gradient-to-r from-card/40 via-card/30 to-card/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-bold text-card-foreground mb-8 font-display">
              Open{' '}
              <span className="bg-professional-gradient bg-clip-text text-transparent drop-shadow-lg">
                Positions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Explore exciting career opportunities and find the perfect role to grow your career with us.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {openPositions.map((position, index) => (
              <GlareCard
                key={position.title}
                className="bg-card/60 backdrop-blur-xl rounded-3xl border border-border/50 hover:border-primary/40 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-[1.02] overflow-hidden hover:shadow-primary/15"
              >
                <div className="p-10">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-card-foreground mb-3">
                        {position.title}
                      </h3>
                      <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <Briefcase className="h-5 w-5 mr-2" />
                          {position.department}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-5 w-5 mr-2" />
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <span className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                      New
                    </span>
                  </div>

                  <div className="flex items-center space-x-6 mb-6 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <MapPin className="h-5 w-5 mr-2" />
                      {position.location}
                    </span>
                    <span className="flex items-center">
                      <DollarSign className="h-5 w-5 mr-2" />
                      {position.salary}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                    {position.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="font-bold text-card-foreground mb-4 text-lg">
                      Requirements:
                    </h4>
                    <ul className="space-y-3">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start text-muted-foreground">
                          <CheckCircle className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-professional-gradient text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-primary/30">
                    Apply Now
                  </button>
                </div>
              </GlareCard>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Benefits */}
      <section className="py-32 bg-gradient-to-b from-background to-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-card-foreground mb-10 font-display">
                Why Work at{' '}
                <span className="bg-professional-gradient bg-clip-text text-transparent drop-shadow-lg">
                  AdGrades?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                We believe in taking care of our team members and providing an environment 
                where everyone can thrive both professionally and personally.
              </p>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start group">
                    <CheckCircle className="h-6 w-6 text-success mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-500" />
                    <span className="text-muted-foreground leading-relaxed text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?w=600&h=500&fit=crop"
                alt="AdGrades team working together"
                className="rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-700"
              />
              <div className="absolute -bottom-8 -right-8 bg-card/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 border border-border/50">
                <div className="flex items-center space-x-4">
                  <Users className="h-10 w-10 text-primary" />
                  <div>
                    <div className="font-bold text-card-foreground text-lg">15+ Team Members</div>
                    <div className="text-muted-foreground">And Growing!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Application Form */}
      <section id="application-form" className="py-32 bg-gradient-to-r from-card/40 via-card/30 to-card/40 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-card-foreground mb-6 font-display">
              Join Our{' '}
              <span className="bg-professional-gradient bg-clip-text text-transparent drop-shadow-lg">
                Team
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Don't see the perfect role? Send us your information and we'll keep you in mind for future opportunities.
            </p>
          </div>

          <GlareCard className="bg-card/60 backdrop-blur-xl rounded-3xl border border-border/50 p-10">
            {isSubmitted ? (
              <div className="text-center py-16">
                <CheckCircle className="h-20 w-20 text-success mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-card-foreground mb-3">
                  Application Submitted Successfully!
                </h3>
                <p className="text-muted-foreground text-lg">
                  We'll review your application and get back to you within 5 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-card-foreground mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={applicationData.name}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-muted/60 backdrop-blur-sm border border-border rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent text-card-foreground placeholder-muted-foreground transition-all duration-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-card-foreground mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={applicationData.email}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-muted/60 backdrop-blur-sm border border-border rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent text-card-foreground placeholder-muted-foreground transition-all duration-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-card-foreground mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={applicationData.phone}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-muted/60 backdrop-blur-sm border border-border rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent text-card-foreground placeholder-muted-foreground transition-all duration-500"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label htmlFor="position" className="block text-sm font-semibold text-card-foreground mb-3">
                      Position of Interest
                    </label>
                    <select
                      id="position"
                      name="position"
                      value={applicationData.position}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-muted/60 backdrop-blur-sm border border-border rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent text-card-foreground transition-all duration-500"
                    >
                      <option value="">Select a position</option>
                      <option value="digital-marketing">Digital Marketing Specialist</option>
                      <option value="ui-ux-designer">UI/UX Designer</option>
                      <option value="content-manager">Content Marketing Manager</option>
                      <option value="frontend-developer">Frontend Developer</option>
                      <option value="other">Other / General Application</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="experience" className="block text-sm font-semibold text-card-foreground mb-3">
                      Years of Experience
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={applicationData.experience}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-muted/60 backdrop-blur-sm border border-border rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent text-card-foreground transition-all duration-500"
                    >
                      <option value="">Select experience level</option>
                      <option value="0-1">0-1 years (Entry Level)</option>
                      <option value="2-3">2-3 years</option>
                      <option value="4-5">4-5 years</option>
                      <option value="6+">6+ years (Senior Level)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="portfolio" className="block text-sm font-semibold text-card-foreground mb-3">
                      Portfolio/LinkedIn URL
                    </label>
                    <input
                      type="url"
                      id="portfolio"
                      name="portfolio"
                      value={applicationData.portfolio}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-muted/60 backdrop-blur-sm border border-border rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent text-card-foreground placeholder-muted-foreground transition-all duration-500"
                      placeholder="https://linkedin.com/in/johndoe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-card-foreground mb-3">
                    Tell us about yourself *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={applicationData.message}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-muted/60 backdrop-blur-sm border border-border rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent text-card-foreground placeholder-muted-foreground resize-none transition-all duration-500"
                    placeholder="Tell us about your experience, skills, and why you'd like to join AdGrades..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-10 py-5 bg-professional-gradient text-white font-semibold rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-primary/30"
                >
                  Submit Application
                  <Send className="ml-3 h-6 w-6" />
                </button>
              </form>
            )}
          </GlareCard>
        </div>
      </section>
    </div>
  );
};

export default Careers;