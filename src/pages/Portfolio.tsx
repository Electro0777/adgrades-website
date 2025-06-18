import React, { useState } from "react";
import { ArrowRight, Filter, Zap } from "lucide-react";
import VortexBackground from "../components/VortexBackground";
import { useNavigate } from "react-router-dom";
import { clientsData, projectsData, getClientId } from "../data/clientsData";

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();

  const categories = [
    "All",
    "Web Development",
    "Branding",
    "Digital Marketing",
    "SEO",
    "E-commerce",
    "Food & Beverage",
    "Water Technology",
    "Interior Design",
    "Fashion",
    "Education",
    "Hospitality",
    "Entertainment",
    "Engineering",
  ];

  // Use the shared clients and projects data
  const clients = clientsData;
  const projects = projectsData;

  // Filter clients based on active category
  const filteredClients = clients.filter((client) => {
    if (activeFilter === "All") return true;
    return client.category === activeFilter;
  });

  // Filter projects based on active category
  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    return project.category === activeFilter;
  });

  return (
    <div className="pt-20">
      {/* Vortex Background */}
      <VortexBackground className="-z-10" />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-primary text-foreground mb-6">
            Our <span className="brand-gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed description-text mb-8">
            Explore our work across various industries and see how we've helped
            businesses like yours achieve digital success.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding content-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-card/60 rounded-full mb-4 text-muted-foreground backdrop-blur-sm border border-border/50">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filter by category</span>
            </div>
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-8 py-3 rounded-full font-semibold transition-all duration-500 ${
                    activeFilter === category
                      ? "brand-gradient text-white shadow-xl transform scale-110"
                      : "bg-card/60 text-muted-foreground hover:bg-primary/10 hover:text-primary hover:scale-105 border border-border/50 backdrop-blur-sm"
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
              Our Trusted <span className="brand-gradient-text">Clients</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed description-text">
              We're proud to work with amazing brands across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
            {filteredClients.map((client) => (
              <div
                key={client.name}
                className="group minimal-card rounded-3xl overflow-hidden hover:border-primary/40 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-[1.03] cursor-pointer"
                onClick={() => {
                  const clientId = getClientId(client.name);
                  navigate(`/portfolio/${clientId}`);
                }}
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
                    <button
                      className="bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent triggering the parent onClick
                        const clientId = getClientId(client.name);
                        navigate(`/portfolio/${clientId}`);
                      }}
                    >
                      <ArrowRight className="h-5 w-5" />
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
                    <h4 className="text-sm font-semibold text-foreground mb-2">
                      Services Provided:
                    </h4>
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
                  {client.tags && client.tags.length > 0 && (
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
              Detailed <span className="brand-gradient-text">Case Studies</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed description-text">
              Deep dive into our most successful projects and the strategies
              that drove results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredProjects.map((project) => (
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
                    <button
                      className="bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-xl"
                      onClick={(e) => {
                        e.stopPropagation();
                        const clientId = getClientId(project.client);
                        navigate(`/portfolio/${clientId}`);
                      }}
                    >
                      <ArrowRight className="h-6 w-6" />
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
                  {project.tags && project.tags.length > 0 && (
                    <div className="pt-4 mt-6 border-t border-border/50">
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-muted/60 text-muted-foreground text-xs px-3 py-1 rounded-full font-medium backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-24">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Ready to Achieve Similar Results?
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10">
              Let's discuss how our team can help your business reach its goals
              with creative digital solutions.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Start Your Project
              <Zap className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
