import React, { useState } from 'react';
import { ExternalLink, ArrowRight, Filter, Zap } from 'lucide-react';
import AestheticBackground from '../components/AestheticBackground';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = ['All', 'Web Development', 'Branding', 'Digital Marketing', 'SEO', 'E-commerce', 'Food & Beverage', 'Water Technology'];
  
  const clients = [
    {
      name: 'OS CODE Solutions',
      category: 'Web Development',
      description: 'Complete web development and digital transformation',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?w=400&h=300&fit=crop',
      tags: ['React', 'Node.js', 'PostgreSQL']
    },
    {
      name: 'Delhi 65',
      category: 'Branding',
      description: 'Brand identity and restaurant marketing',
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?w=400&h=300&fit=crop',
      tags: ['Brand Identity', 'Restaurant Marketing', 'Social Media']
    },
    {
      name: 'Medhavi Classes',
      category: 'Digital Marketing',
      description: 'Educational marketing and student acquisition',
      image: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?w=400&h=300&fit=crop',
      tags: ['Education Marketing', 'Lead Generation', 'Google Ads']
    },
    {
      name: 'Uplifto',
      category: 'Digital Marketing',
      description: 'Performance marketing and growth campaigns',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?w=400&h=300&fit=crop',
      tags: ['Performance Marketing', 'Growth Hacking', 'Analytics']
    },
    {
      name: 'Vinayaka Enterprises',
      category: 'Branding',
      description: 'Corporate branding and business development',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?w=400&h=300&fit=crop',
      tags: ['Corporate Branding', 'Business Strategy', 'Web Design']
    },
    {
      name: 'M K Streetwear',
      category: 'E-commerce',
      description: 'Fashion e-commerce and social media marketing',
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?w=400&h=300&fit=crop',
      tags: ['E-commerce', 'Fashion Marketing', 'Social Media']
    },
    {
      name: 'Adhyayan',
      category: 'Digital Marketing',
      description: 'Educational platform marketing and SEO',
      image: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?w=400&h=300&fit=crop',
      tags: ['SEO', 'Content Marketing', 'Education']
    },
    {
      name: 'Dew Drop Homestay',
      category: 'Digital Marketing',
      description: 'Hospitality marketing and booking optimization',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?w=400&h=300&fit=crop',
      tags: ['Hospitality Marketing', 'Booking Optimization', 'Local SEO']
    },
    {
      name: 'Nataraj Dance Studios',
      category: 'Branding',
      description: 'Creative branding and social media presence',
      image: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?w=400&h=300&fit=crop',
      tags: ['Creative Branding', 'Social Media', 'Event Marketing']
    },
    {
      name: 'Pureblend Foods',
      category: 'Food & Beverage',
      description: 'Food brand marketing and e-commerce strategy',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?w=400&h=300&fit=crop',
      tags: ['Food Marketing', 'E-commerce', 'Brand Strategy']
    },
    {
      name: 'SP Enterprises',
      category: 'Branding',
      description: 'Enterprise branding and digital presence',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?w=400&h=300&fit=crop',
      tags: ['Enterprise Branding', 'Digital Strategy', 'Web Development']
    },
    {
      name: 'AS Tech Industries',
      category: 'Web Development',
      description: 'Industrial technology solutions and web platform',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?w=400&h=300&fit=crop',
      tags: ['Industrial Tech', 'Web Platform', 'Digital Solutions']
    },
    {
      name: 'Hitarth Water Tech Solutions',
      category: 'Water Technology',
      description: 'Water technology marketing and digital solutions',
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?w=400&h=300&fit=crop',
      tags: ['Water Tech', 'Environmental Solutions', 'B2B Marketing']
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'TechFlow SaaS Platform',
      category: 'Web Development',
      client: 'TechFlow Inc.',
      challenge: 'Create a modern SaaS platform with complex user management',
      solution: 'Built a scalable React-based platform with advanced analytics',
      result: '300% increase in user engagement and 150% boost in conversions',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?w=800&h=600&fit=crop',
      tags: ['React', 'Node.js', 'PostgreSQL', 'AWS']
    },
    {
      id: 2,
      title: 'DesignStudio Brand Identity',
      category: 'Branding',
      client: 'DesignStudio Creative',
      challenge: 'Rebrand a creative agency to attract premium clients',
      solution: 'Developed a sophisticated brand identity with modern visual system',
      result: '400% increase in premium client inquiries and 250% revenue growth',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?w=800&h=600&fit=crop',
      tags: ['Brand Strategy', 'Logo Design', 'Visual Identity', 'Guidelines']
    },
    {
      id: 3,
      title: 'GrowthCo Performance Campaign',
      category: 'Digital Marketing',
      client: 'GrowthCo Marketing',
      challenge: 'Launch new product with limited budget and tight timeline',
      solution: 'Multi-channel performance campaign with dynamic retargeting',
      result: '500% ROAS and generated $2M in revenue within 6 months',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?w=800&h=600&fit=crop',
      tags: ['Google Ads', 'Facebook Ads', 'Analytics', 'Conversion Optimization']
    },
    {
      id: 4,
      title: 'LocalBiz SEO Success',
      category: 'SEO',
      client: 'LocalBiz Restaurant',
      challenge: 'Improve local search visibility in competitive market',
      solution: 'Comprehensive local SEO strategy with content marketing',
      result: 'Achieved #1 rankings for 20+ local keywords, 800% organic traffic increase',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=800&h=600&fit=crop',
      tags: ['Local SEO', 'Content Strategy', 'Google My Business', 'Link Building']
    },
    {
      id: 5,
      title: 'ShopNow E-commerce Platform',
      category: 'E-commerce',
      client: 'ShopNow Retail',
      challenge: 'Build scalable e-commerce platform for rapid growth',
      solution: 'Custom Shopify Plus solution with advanced integrations',
      result: '600% increase in online sales and 40% improvement in conversion rate',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?w=800&h=600&fit=crop',
      tags: ['Shopify Plus', 'Custom Development', 'Payment Integration', 'Analytics']
    },
    {
      id: 6,
      title: 'StartupX Brand Launch',
      category: 'Branding',
      client: 'StartupX Technology',
      challenge: 'Create brand identity for innovative tech startup',
      solution: 'Future-forward brand design with comprehensive digital presence',
      result: 'Successful $5M Series A funding round, 1000% social media growth',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?w=800&h=600&fit=crop',
      tags: ['Brand Identity', 'Website Design', 'Social Media', 'Pitch Deck']
    },
    {
      id: 7,
      title: 'Pureblend Foods Digital Strategy',
      category: 'Food & Beverage',
      client: 'Pureblend Foods',
      challenge: 'Launch organic food brand in competitive market',
      solution: 'Comprehensive digital marketing strategy with influencer partnerships',
      result: '250% increase in brand awareness and 180% boost in online sales',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?w=800&h=600&fit=crop',
      tags: ['Food Marketing', 'Influencer Marketing', 'Social Media', 'E-commerce']
    },
    {
      id: 8,
      title: 'Hitarth Water Tech Solutions',
      category: 'Water Technology',
      client: 'Hitarth Water Tech',
      challenge: 'Establish digital presence for B2B water technology company',
      solution: 'Technical content marketing and LinkedIn lead generation strategy',
      result: '400% increase in qualified leads and 300% growth in industry recognition',
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?w=800&h=600&fit=crop',
      tags: ['B2B Marketing', 'Technical Content', 'LinkedIn Strategy', 'Lead Generation']
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const filteredClients = activeFilter === 'All' 
    ? clients 
    : clients.filter(client => client.category === activeFilter);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <AestheticBackground variant="portfolio" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            {/* Badge with glow */}
            <div className="page-badge brand-glow animate-pulse-glow">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 animate-pulse" />
              <span className="brand-gradient-text font-semibold">
                Our Success Stories
              </span>
            </div>
            
            <h1 className="heading-primary text-foreground text-glow mb-8 leading-tight">
              Client{' '}
              <span className="brand-gradient-text brand-glow">
                Success Stories
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground text-glow mb-12 max-w-4xl mx-auto leading-relaxed">
              Explore how we've helped businesses across industries achieve remarkable growth 
              through strategic marketing, stunning design, and innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-card/40 backdrop-blur-2xl sticky top-16 z-40 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Filter className="h-6 w-6 text-muted-foreground" />
              <span className="text-foreground font-semibold text-lg text-glow">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-8 py-3 rounded-full font-semibold transition-all duration-500 ${
                    activeFilter === category
                      ? 'brand-gradient text-white shadow-xl transform scale-110'
                      : 'bg-card/60 text-muted-foreground hover:bg-primary/10 hover:text-primary hover:scale-105 border border-border/50 backdrop-blur-sm'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="section-padding bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="heading-secondary text-foreground text-glow mb-8">
              Our Trusted{' '}
              <span className="brand-gradient-text brand-glow">
                Clients
              </span>
            </h2>
            <p className="text-xl text-muted-foreground text-glow max-w-4xl mx-auto leading-relaxed">
              We're proud to work with amazing brands across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
            {filteredClients.map((client, index) => (
              <div
                key={client.name}
                className="group minimal-card rounded-3xl overflow-hidden hover:border-primary/40 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-[1.03] glass-effect aesthetic-glow"
              >
                {/* Image container with overlay */}
                <div className="relative overflow-hidden">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Category badge */}
                  <div className="absolute top-6 left-6 transform -translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="bg-primary/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold shadow-xl">
                      {client.category}
                    </span>
                  </div>
                  
                  {/* Hover action button */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                    <button className="bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110">
                      <ExternalLink className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground text-glow mb-3 group-hover:text-primary transition-colors duration-500">
                    {client.name}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    {client.description}
                  </p>
                  
                  {/* Tags */}
                  {client.tags.length > 0 && (
                    <div className="flex flex-wrap gap-3">
                      {client.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-muted/60 text-muted-foreground text-sm px-3 py-1 rounded-lg font-medium backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="heading-secondary text-foreground text-glow mb-8">
              Detailed{' '}
              <span className="brand-gradient-text brand-glow">
                Case Studies
              </span>
            </h2>
            <p className="text-xl text-muted-foreground text-glow max-w-4xl mx-auto leading-relaxed">
              Deep dive into our most successful projects and the strategies that drove results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group minimal-card rounded-3xl overflow-hidden hover:border-primary/40 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-[1.03] glass-effect aesthetic-glow"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute top-6 left-6 transform -translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="bg-primary/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold shadow-xl">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                    <button className="bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-xl">
                      <ExternalLink className="h-6 w-6" />
                    </button>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-10">
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground text-glow mb-3 group-hover:text-primary transition-colors duration-500">
                        {project.title}
                      </h3>
                      <p className="text-primary font-semibold text-lg">
                        {project.client}
                      </p>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="font-bold text-foreground text-glow text-sm mb-2">
                        Challenge
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-glow text-sm mb-2">
                        Solution
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                    <div className="bg-secondary/10 p-6 rounded-2xl border border-secondary/20 backdrop-blur-sm">
                      <h4 className="font-bold text-secondary text-sm mb-2">
                        Result
                      </h4>
                      <p className="text-secondary/90 leading-relaxed">
                        {project.result}
                      </p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-muted/60 text-muted-foreground text-sm px-3 py-2 rounded-lg font-medium backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <button className="w-full flex items-center justify-center px-8 py-4 brand-gradient text-white font-semibold rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-xl aesthetic-glow">
                    View Full Case Study
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && filteredClients.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-muted-foreground text-glow">
                No projects found for the selected category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding brand-gradient">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-secondary text-white mb-10">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-16 leading-relaxed max-w-4xl mx-auto">
            Let's discuss how we can achieve similar results for your business. 
            Every great project starts with a conversation.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-12 py-6 bg-white text-slate-dark font-bold rounded-lg hover:bg-gray-100 transition-all duration-500 transform hover:scale-110 shadow-2xl text-lg aesthetic-glow"
          >
            Start Your Project
            <ArrowRight className="ml-3 h-6 w-6" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;