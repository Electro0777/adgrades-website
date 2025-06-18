import React, { useState } from 'react';
import { ExternalLink, ArrowRight, Filter, Zap } from 'lucide-react';
import VortexBackground from '../components/VortexBackground';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = ['All', 'Web Development', 'Branding', 'Digital Marketing', 'SEO', 'E-commerce', 'Food & Beverage', 'Water Technology', 'Interior Design', 'Fashion', 'Education', 'Hospitality', 'Entertainment', 'Engineering'];
  
  const clients = [
    {
      name: 'OS CODE Solutions',
      category: 'Digital Marketing',
      description: 'Emerging IT solutions startup - Social Media Management & Lead Generation',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?w=400&h=300&fit=crop',
      tags: ['Social Media Management', 'Lead Generation', '4 months'],
      duration: '4 months',
      services: ['Social Media Management', 'Lead Generation']
    },
    {
      name: 'Delhi 65 – Ranchi Restaurant',
      category: 'Digital Marketing',
      description: 'Restaurant marketing with targeted ad campaigns and social media management',
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?w=400&h=300&fit=crop',
      tags: ['Targeted Ad Campaigns', 'Social Media Management', '3 months'],
      duration: '3 months',
      services: ['Targeted Ad Campaigns', 'Social Media Management']
    },
    {
      name: 'Medhavi Classes',
      category: 'Education',
      description: 'Online education platform with comprehensive digital marketing strategy',
      image: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?w=400&h=300&fit=crop',
      tags: ['Social Media Management', 'Lead Generation', '6 months'],
      duration: '6 months',
      services: ['Social Media Management', 'Lead Generation']
    },
    {
      name: 'Uplifto',
      category: 'Digital Marketing',
      description: 'Tech-based startup for IT services with lead generation focus',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?w=400&h=300&fit=crop',
      tags: ['Lead Generation', 'Social Media Management', '4 months'],
      duration: '4 months',
      services: ['Lead Generation', 'Social Media Management']
    },
    {
      name: 'Vinayaka Enterprises',
      category: 'Interior Design',
      description: 'Interior Design Studio with comprehensive business development',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?w=400&h=300&fit=crop',
      tags: ['Website Development', 'Business Strategy', 'Social Media Management'],
      services: ['Website Development', 'Business Strategy', 'Business Development', 'Social Media Management']
    },
    {
      name: 'M K Streetwear',
      category: 'Fashion',
      description: 'Streetwear Fashion Brand with complete brand development',
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?w=400&h=300&fit=crop',
      tags: ['Brand Strategy', 'Website Development', 'Social Media Management'],
      services: ['Brand Strategy Development', 'Social Media Management', 'Website Development', 'Business Development']
    },
    {
      name: 'Adhyayan',
      category: 'Education',
      description: 'Online Coaching Institute with social media focus',
      image: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?w=400&h=300&fit=crop',
      tags: ['Social Media Management', 'Education Marketing'],
      services: ['Social Media Management']
    },
    {
      name: 'Dew Drop Homestay',
      category: 'Hospitality',
      description: 'Premium Hilltop Stay with comprehensive digital presence',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?w=400&h=300&fit=crop',
      tags: ['Website Development', 'Social Media Management', 'Business Development'],
      services: ['Website Development', 'Social Media Management', 'Business Development']
    },
    {
      name: 'Nataraj Dance Studios',
      category: 'Entertainment',
      description: 'Dance training academy with social media marketing',
      image: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?w=400&h=300&fit=crop',
      tags: ['Social Media Management', 'Creative Marketing'],
      services: ['Social Media Management']
    },
    {
      name: 'Pureblend Foods',
      category: 'Food & Beverage',
      description: 'B2B Food Supply Chain Brand with comprehensive strategy',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?w=400&h=300&fit=crop',
      tags: ['Business Strategy', 'Website Development', 'Lead Generation'],
      services: ['Social Media Management', 'Business Strategy', 'Website Development', 'Lead Generation']
    },
    {
      name: 'AS Tech Industries',
      category: 'Engineering',
      description: 'Engineering and Manufacturing Services with digital transformation',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?w=400&h=300&fit=crop',
      tags: ['Business Strategy', 'Website Development', 'Lead Generation'],
      services: ['Social Media Management', 'Business Strategy', 'Website Development', 'Lead Generation']
    },
    {
      name: 'SP Enterprises',
      category: 'Engineering',
      description: 'Heavy Earthmoving Equipment & Spares with complete digital strategy',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?w=400&h=300&fit=crop',
      tags: ['Business Strategy', 'Website Development', 'Lead Generation'],
      services: ['Social Media Management', 'Business Strategy', 'Website Development', 'Lead Generation']
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'OS CODE Solutions Digital Growth',
      category: 'Digital Marketing',
      client: 'OS CODE Solutions',
      challenge: 'Emerging IT startup needed to establish digital presence and generate quality leads',
      solution: 'Implemented comprehensive social media strategy with targeted lead generation campaigns',
      result: 'Generated 150+ qualified leads and increased brand awareness by 300% in 4 months',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?w=800&h=600&fit=crop',
      tags: ['Social Media Management', 'Lead Generation', 'IT Services', 'Startup Growth']
    },
    {
      id: 2,
      title: 'Delhi 65 Restaurant Marketing',
      category: 'Digital Marketing',
      client: 'Delhi 65 – Ranchi Restaurant',
      challenge: 'Local restaurant needed to increase footfall and online orders in competitive market',
      solution: 'Ran targeted ad campaigns focusing on local audience with engaging social media content',
      result: '200% increase in online orders and 150% growth in social media engagement in 3 months',
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?w=800&h=600&fit=crop',
      tags: ['Targeted Advertising', 'Social Media', 'Restaurant Marketing', 'Local SEO']
    },
    {
      id: 3,
      title: 'Medhavi Classes Student Acquisition',
      category: 'Education',
      client: 'Medhavi Classes',
      challenge: 'Online education platform needed to scale student enrollment and engagement',
      solution: 'Developed comprehensive social media strategy with lead generation funnels',
      result: '400% increase in student enrollments and 250% boost in social media following over 6 months',
      image: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?w=800&h=600&fit=crop',
      tags: ['Education Marketing', 'Lead Generation', 'Social Media', 'Student Acquisition']
    },
    {
      id: 4,
      title: 'Uplifto Tech Services Growth',
      category: 'Digital Marketing',
      client: 'Uplifto',
      challenge: 'Tech startup needed to establish market presence and generate B2B leads',
      solution: 'Implemented targeted lead generation campaigns with strategic social media positioning',
      result: '300% increase in qualified B2B leads and established strong industry presence in 4 months',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?w=800&h=600&fit=crop',
      tags: ['B2B Marketing', 'Lead Generation', 'Tech Services', 'Social Media']
    },
    {
      id: 5,
      title: 'Vinayaka Enterprises Digital Transformation',
      category: 'Interior Design',
      client: 'Vinayaka Enterprises',
      challenge: 'Interior design studio needed complete digital presence and business strategy',
      solution: 'Built custom website, developed business strategy, and implemented social media marketing',
      result: 'Established strong online presence, increased project inquiries by 250%, and streamlined business operations',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?w=800&h=600&fit=crop',
      tags: ['Website Development', 'Business Strategy', 'Interior Design', 'Social Media']
    },
    {
      id: 6,
      title: 'M K Streetwear Brand Development',
      category: 'Fashion',
      client: 'M K Streetwear',
      challenge: 'Fashion brand needed complete brand strategy and digital presence',
      solution: 'Developed comprehensive brand strategy, built e-commerce website, and managed social media',
      result: '500% increase in online sales, established strong brand identity, and grew social media following by 400%',
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?w=800&h=600&fit=crop',
      tags: ['Brand Strategy', 'E-commerce', 'Fashion Marketing', 'Website Development']
    },
    {
      id: 7,
      title: 'Dew Drop Homestay Digital Presence',
      category: 'Hospitality',
      client: 'Dew Drop Homestay',
      challenge: 'Premium homestay needed professional website and booking optimization',
      solution: 'Created stunning website with booking system and implemented social media marketing',
      result: '300% increase in direct bookings, improved online visibility, and enhanced guest experience',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?w=800&h=600&fit=crop',
      tags: ['Website Development', 'Hospitality Marketing', 'Booking Optimization', 'Social Media']
    },
    {
      id: 8,
      title: 'Pureblend Foods B2B Strategy',
      category: 'Food & Beverage',
      client: 'Pureblend Foods',
      challenge: 'B2B food supply chain needed comprehensive digital strategy and lead generation',
      solution: 'Developed business strategy, built professional website, and implemented B2B marketing',
      result: '400% increase in B2B inquiries, established industry authority, and streamlined operations',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?w=800&h=600&fit=crop',
      tags: ['B2B Marketing', 'Food Industry', 'Business Strategy', 'Lead Generation']
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
      {/* Vortex Background */}
      <VortexBackground className="-z-10" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            {/* Badge */}
            <div className="page-badge">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
              <span className="brand-gradient-text font-semibold">
                Our Success Stories
              </span>
            </div>
            
            <h1 className="heading-primary text-foreground mb-8 leading-tight">
              Client{' '}
              <span className="brand-gradient-text">
                Success Stories
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed description-text">
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
              <span className="text-foreground font-semibold text-lg">Filter by:</span>
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
      <section className="section-padding content-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="heading-secondary text-foreground mb-8">
              Our Trusted{' '}
              <span className="brand-gradient-text">
                Clients
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed description-text">
              We're proud to work with amazing brands across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
            {filteredClients.map((client, index) => (
              <div
                key={client.name}
                className="group minimal-card rounded-3xl overflow-hidden hover:border-primary/40 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-[1.03]"
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
                  
                  {/* Duration badge (if available) */}
                  {client.duration && (
                    <div className="absolute top-6 right-6 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="bg-secondary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium shadow-xl">
                        {client.duration}
                      </span>
                    </div>
                  )}
                  
                  {/* Hover action button */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                    <button className="bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110">
                      <ExternalLink className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-500">
                    {client.name}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg project-description">
                    {client.description}
                  </p>
                  
                  {/* Services */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Services Provided:</h4>
                    <div className="flex flex-wrap gap-2">
                      {client.services.slice(0, 3).map((service, index) => (
                        <span
                          key={index}
                          className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-md font-medium"
                        >
                          {service}
                        </span>
                      ))}
                      {client.services.length > 3 && (
                        <span className="bg-muted/60 text-muted-foreground text-xs px-2 py-1 rounded-md font-medium">
                          +{client.services.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
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
      <section className="section-padding content-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="heading-secondary text-foreground mb-8">
              Detailed{' '}
              <span className="brand-gradient-text">
                Case Studies
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed description-text">
              Deep dive into our most successful projects and the strategies that drove results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group minimal-card rounded-3xl overflow-hidden hover:border-primary/40 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-[1.03]"
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
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-500">
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
                      <h4 className="font-bold text-foreground text-sm mb-2">
                        Challenge
                      </h4>
                      <p className="text-muted-foreground leading-relaxed project-description">
                        {project.challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm mb-2">
                        Solution
                      </h4>
                      <p className="text-muted-foreground leading-relaxed project-description">
                        {project.solution}
                      </p>
                    </div>
                    <div className="bg-secondary/10 p-6 rounded-2xl border border-secondary/20 backdrop-blur-sm">
                      <h4 className="font-bold text-secondary text-sm mb-2">
                        Result
                      </h4>
                      <p className="text-secondary/90 leading-relaxed project-description">
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
                  <button className="w-full flex items-center justify-center px-8 py-4 brand-gradient text-white font-semibold rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-xl">
                    View Full Case Study
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && filteredClients.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-muted-foreground">
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
          <p className="text-xl text-white/90 mb-16 leading-relaxed max-w-4xl mx-auto description-text">
            Let's discuss how we can achieve similar results for your business. 
            Every great project starts with a conversation.
          </p>
          <a
            href="https://calendly.com/chandanbkrishna077/adgrades"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-12 py-6 bg-white text-slate-dark font-bold rounded-lg hover:bg-gray-100 transition-all duration-500 transform hover:scale-110 shadow-2xl text-lg"
          >
            Get Your Free Strategy Session
            <ArrowRight className="ml-3 h-6 w-6" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;