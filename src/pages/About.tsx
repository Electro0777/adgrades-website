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
import GlareCard from '../components/GlareCard';

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
      {/* Hero Section with Dynamic Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <DynamicBackground variant="about" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center px-4 sm:px-8 py-3 sm:py-4 bg-card/30 backdrop-blur-xl border border-primary/30 rounded-full text-primary text-xs sm:text-sm font-medium mb-6 sm:mb-8 hover:bg-card/40 transition-all duration-500 shadow-lg hover:shadow-primary/20 hover:scale-105">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 animate-pulse" />
              <span className="bg-professional-gradient bg-clip-text text-transparent font-semibold">
                Meet the Team Behind the Magic
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-card-foreground mb-6 sm:mb-8 leading-tight tracking-tight font-display px-2">
              We're{' '}
              <span className="bg-professional-gradient bg-clip-text text-transparent drop-shadow-2xl">
                AdGrades
              </span>
            </h1>
            
            <p className="text-base sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
              A passionate team of marketers, designers, and developers dedicated to helping 
              startups and growing businesses become industry leaders through strategic marketing 
              and exceptional design.
            </p>
            
            <div className="grid grid-cols-2 gap-6 sm:gap-8 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl sm:text-4xl md:text-5xl font-bold bg-professional-gradient bg-clip-text text-transparent mb-2 font-display drop-shadow-2xl">
                  <AnimatedCounter end={25} suffix="+" />
                </div>
                <p className="text-muted-foreground font-semibold text-sm sm:text-base">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-4xl md:text-5xl font-bold bg-professional-gradient bg-clip-text text-transparent mb-2 font-display drop-shadow-2xl">
                  <AnimatedCounter end={15} suffix="" />
                </div>
                <p className="text-muted-foreground font-semibold text-sm sm:text-base">Team Members</p>
              </div>
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

      {/* Enhanced Company Story Timeline */}
      <section className="py-20 sm:py-32 bg-gradient-to-b from-background to-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-card-foreground mb-6 sm:mb-8 font-display px-2">
              Our{' '}
              <span className="bg-professional-gradient bg-clip-text text-transparent drop-shadow-lg">
                Journey
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
              From a startup idea to a growing agency, here's how we've evolved alongside our clients.
            </p>
          </div>

          <div className="relative">
            {/* Enhanced Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-professional-gradient opacity-30 hidden md:block rounded-full" />

            <div className="space-y-12 sm:space-y-20">
              {milestones.map((milestone, index) => (
                <div
                  key={`${milestone.year}-${index}`}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-8 lg:pr-16 md:text-right' : 'md:pl-8 lg:pl-16'
                  }`}>
                    <GlareCard className="bg-card/60 backdrop-blur-xl p-6 sm:p-10 rounded-3xl border border-border/50 hover:border-primary/40 transition-all duration-700 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/15">
                      <div className="text-2xl sm:text-4xl font-bold text-primary mb-3 sm:mb-4 font-display drop-shadow-lg">
                        {milestone.year}
                      </div>
                      <h3 className="text-lg sm:text-2xl font-semibold text-card-foreground mb-3 sm:mb-4">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                        {milestone.description}
                      </p>
                    </GlareCard>
                  </div>

                  {/* Enhanced Timeline dot */}
                  <div className="hidden md:flex w-8 h-8 sm:w-12 sm:h-12 bg-professional-gradient rounded-full items-center justify-center relative z-10 shadow-xl">
                    <div className="w-3 h-3 sm:w-6 sm:h-6 bg-white rounded-full" />
                  </div>

                  <div className="w-full md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Core Values */}
      <section className="py-20 sm:py-32 bg-gradient-to-r from-card/40 via-card/30 to-card/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-card-foreground mb-6 sm:mb-8 font-display px-2">
              Our Core{' '}
              <span className="bg-professional-gradient bg-clip-text text-transparent drop-shadow-lg">
                Values
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
              These principles guide everything we do and define how we serve our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
            {values.map((value, index) => (
              <GlareCard
                key={value.title}
                className="group text-center p-6 sm:p-10 bg-card/60 backdrop-blur-xl rounded-3xl border border-border/50 hover:border-primary/40 transition-all duration-700 transform hover:-translate-y-4 hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/15"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/20 rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                  <value.icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
                </div>
                <h3 className="text-lg sm:text-2xl font-semibold text-card-foreground mb-4 sm:mb-6 group-hover:text-primary transition-colors duration-500">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                  {value.description}
                </p>
              </GlareCard>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-b from-background to-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-card-foreground mb-6 sm:mb-8 font-display px-2">
              Meet Our{' '}
              <span className="bg-professional-gradient bg-clip-text text-transparent drop-shadow-lg">
                Team
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
              The talented individuals behind AdGrades who make the magic happen every day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-10">
            {team.map((member, index) => (
              <GlareCard
                key={member.name}
                className="group bg-card/60 backdrop-blur-xl rounded-3xl p-6 sm:p-8 text-center border border-border/50 hover:border-primary/40 hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-[1.03] hover:shadow-primary/15"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative mb-6 sm:mb-8">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500 shadow-xl"
                  />
                  <div className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-500">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-xs sm:text-sm mb-3 sm:mb-4">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                  {member.bio}
                </p>
                <a
                  href={member.linkedin}
                  className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-primary hover:bg-primary/80 text-white rounded-full transition-all duration-500 hover:scale-110 shadow-xl hover:shadow-2xl"
                >
                  <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </GlareCard>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 sm:py-32 bg-professional-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8 sm:mb-10 font-display drop-shadow-lg">
            Ready to Work with Our Team?
          </h2>
          <p className="text-lg sm:text-xl mb-12 sm:mb-16 opacity-95 leading-relaxed max-w-4xl mx-auto px-4">
            Let's discuss how our expertise and passion can help transform your business. 
            Every great partnership starts with a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center px-4">
            <button className="inline-flex items-center px-8 sm:px-12 py-4 sm:py-6 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-3xl text-base sm:text-lg justify-center">
              <Users className="mr-3 h-5 w-5 sm:h-6 sm:w-6" />
              Meet the Team
            </button>
            <a
              href="/contact"
              className="inline-flex items-center px-8 sm:px-12 py-4 sm:py-6 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-primary transition-all duration-500 transform hover:scale-110 text-base sm:text-lg justify-center"
            >
              <Target className="mr-3 h-5 w-5 sm:h-6 sm:w-6" />
              Start a Project
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;