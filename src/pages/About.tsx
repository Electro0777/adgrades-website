import React from 'react';
import { 
  Lightbulb, 
  Eye, 
  BarChart3, 
  Heart, 
  Linkedin, 
  Award,
  Users,
  Target,
  Zap
} from 'lucide-react';
import DynamicBackground from '../components/DynamicBackground';
import AnimatedCounter from '../components/AnimatedCounter';

const About: React.FC = () => {
  const milestones = [
    { year: '2023', title: 'AdGrades Founded', description: 'AdGrades was born on May 2, 2023 with a mission to help startups succeed' },
    { year: '2023', title: 'First Success', description: 'Closed 5 successful clients for Google Ads and Analytics' },
    { year: '2023', title: 'Team Growth', description: 'The team scaled to 15 members with experts in each field' },
    { year: '2024', title: 'Major Expansion', description: 'Closed another 15 clients and expanded our service offerings' },
    { year: '2024', title: 'Innovation Focus', description: 'Now scaling with a blend of offline and online marketing to bring revolutionary strategies for brands' }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Creativity',
      description: 'We believe innovative thinking and creative solutions are the keys to standing out in today\'s competitive landscape.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We maintain open, honest communication with our clients, providing clear reporting and regular updates on all projects.'
    },
    {
      icon: BarChart3,
      title: 'Data-Driven',
      description: 'Every decision we make is backed by data and analytics, ensuring our strategies deliver measurable results.'
    },
    {
      icon: Heart,
      title: 'Local Focus',
      description: 'We\'re committed to supporting local businesses and startups, helping them compete with larger enterprises.'
    }
  ];

  const team = [
    {
      name: 'Chandan',
      role: 'Founder, CEO, Marketing Strategist',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=400&h=400&fit=crop&crop=face',
      bio: 'Making brands famous & profitable at the same time.',
      linkedin: '#'
    },
    {
      name: 'Maneesh',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=400&h=400&fit=crop&crop=face',
      bio: 'Turns caffeine into code & builds marketing tech that WORKS.',
      linkedin: '#'
    },
    {
      name: 'Likith',
      role: 'COO',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=400&h=400&fit=crop&crop=face',
      bio: 'Keeps everything running smoother than a well-optimized funnel.',
      linkedin: '#'
    },
    {
      name: 'Ashish',
      role: 'CDO - Chief Design Officer',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?w=400&h=400&fit=crop&crop=face',
      bio: 'Pixel-perfect designs that don\'t just look good, they SELL.',
      linkedin: '#'
    },
    {
      name: 'Sumith',
      role: 'CFO',
      image: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?w=400&h=400&fit=crop&crop=face',
      bio: 'Turns budgets into ROI-generating machines.',
      linkedin: '#'
    },
    {
      name: 'Chandu',
      role: 'Content Lead',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?w=400&h=400&fit=crop&crop=face',
      bio: 'Writes words that make people take action.',
      linkedin: '#'
    },
    {
      name: 'Nikhil',
      role: 'Video Editing Lead',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=400&h=400&fit=crop&crop=face',
      bio: 'Makes brands look like they belong on Netflix, not just Instagram.',
      linkedin: '#'
    },
    {
      name: 'Pavan',
      role: 'Ads Manager',
      image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?w=400&h=400&fit=crop&crop=face',
      bio: 'Knows Google & Meta ads better than their own employees.',
      linkedin: '#'
    },
    {
      name: 'Karthik',
      role: 'Offline Marketing Manager',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?w=400&h=400&fit=crop&crop=face',
      bio: 'Makes sure offline marketing isn\'t dead—it\'s just evolving.',
      linkedin: '#'
    },
    {
      name: 'Harshith',
      role: 'Research and Development Head',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?w=400&h=400&fit=crop&crop=face',
      bio: 'Finds what\'s next before the internet does.',
      linkedin: '#'
    },
    {
      name: 'Hemanth',
      role: 'Marketing Team Member',
      image: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?w=400&h=400&fit=crop&crop=face',
      bio: 'Knows exactly how to grab attention & hold it.',
      linkedin: '#'
    },
    {
      name: 'Inchara',
      role: 'Design Team Member',
      image: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?w=400&h=400&fit=crop&crop=face',
      bio: 'Designs that make people stop scrolling & start buying.',
      linkedin: '#'
    }
  ];

  return (
    <div className="pt-16 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <DynamicBackground variant="about" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            {/* Badge */}
            <div className="page-badge">
              <Zap className="w-5 h-5 mr-3 animate-pulse" />
              <span className="brand-gradient-text font-semibold">
                Meet the Team Behind the Magic
              </span>
            </div>
            
            <h1 className="heading-primary text-foreground text-glow mb-8 leading-tight">
              We're{' '}
              <span className="brand-gradient-text brand-glow">
                AdGrades
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground text-glow mb-12 max-w-4xl mx-auto leading-relaxed">
              A passionate team of marketers, designers, and developers dedicated to helping 
              startups and growing businesses become industry leaders through strategic marketing 
              and exceptional design.
            </p>
            
            <div className="grid grid-cols-2 gap-8 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold brand-gradient-text brand-glow mb-3">
                  <AnimatedCounter end={25} suffix="+" />
                </div>
                <p className="text-muted-foreground text-glow font-semibold">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold brand-gradient-text brand-glow mb-3">
                  <AnimatedCounter end={15} suffix="" />
                </div>
                <p className="text-muted-foreground text-glow font-semibold">Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Timeline */}
      <section className="section-padding bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="heading-secondary text-foreground text-glow mb-8">
              Our{' '}
              <span className="brand-gradient-text brand-glow">
                Journey
              </span>
            </h2>
            <p className="text-xl text-muted-foreground text-glow max-w-4xl mx-auto leading-relaxed">
              From a startup idea to a growing agency, here's how we've evolved alongside our clients.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full brand-gradient opacity-30 hidden md:block rounded-full" />

            <div className="space-y-20">
              {milestones.map((milestone, index) => (
                <div
                  key={`${milestone.year}-${index}`}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'
                  }`}>
                    <div className="minimal-card p-10 hover:border-primary/40 transition-all duration-700 transform hover:-translate-y-3">
                      <div className="text-4xl font-bold text-primary brand-glow mb-4">
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-semibold text-foreground text-glow mb-4">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:flex w-12 h-12 brand-gradient rounded-full items-center justify-center relative z-10 shadow-xl">
                    <div className="w-6 h-6 bg-white rounded-full" />
                  </div>

                  <div className="w-full md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="heading-secondary text-foreground text-glow mb-8">
              Our Core{' '}
              <span className="brand-gradient-text brand-glow">
                Values
              </span>
            </h2>
            <p className="text-xl text-muted-foreground text-glow max-w-4xl mx-auto leading-relaxed">
              These principles guide everything we do and define how we serve our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group text-center p-10 minimal-card hover:border-primary/40 transition-all duration-700 transform hover:-translate-y-4 hover:scale-[1.03]"
              >
                <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-500 shadow-xl">
                  <value.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground text-glow mb-6 group-hover:text-primary transition-colors duration-500">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="heading-secondary text-foreground text-glow mb-8">
              Meet Our{' '}
              <span className="brand-gradient-text brand-glow">
                Team
              </span>
            </h2>
            <p className="text-xl text-muted-foreground text-glow max-w-4xl mx-auto leading-relaxed">
              The talented individuals behind AdGrades who make the magic happen every day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="group minimal-card rounded-3xl p-8 text-center hover:border-primary/40 transition-all duration-700 transform hover:-translate-y-4 hover:scale-[1.03]"
              >
                <div className="relative mb-8">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-xl"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground text-glow mb-3 group-hover:text-primary transition-colors duration-500">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-4">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>
                <a
                  href={member.linkedin}
                  className="inline-flex items-center justify-center w-12 h-12 bg-primary hover:bg-primary/80 text-white rounded-full transition-all duration-500 hover:scale-110 shadow-xl"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding brand-gradient">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-secondary text-[#0B1120] mb-10">
            Ready to Work with Our Team?
          </h2>
          <p className="text-xl text-[#0B1120]/80 mb-16 leading-relaxed max-w-4xl mx-auto">
            Let's discuss how our expertise and passion can help transform your business. 
            Every great partnership starts with a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <button className="inline-flex items-center px-12 py-6 bg-[#0B1120] text-foreground font-bold rounded-lg hover:bg-[#0F172A] transition-all duration-500 transform hover:scale-110 shadow-2xl text-lg">
              <Users className="mr-3 h-6 w-6" />
              Meet the Team
            </button>
            <a
              href="/contact"
              className="inline-flex items-center px-12 py-6 border-2 border-[#0B1120] text-[#0B1120] font-bold rounded-lg hover:bg-[#0B1120] hover:text-foreground transition-all duration-500 transform hover:scale-110 text-lg"
            >
              <Target className="mr-3 h-6 w-6" />
              Start a Project
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;