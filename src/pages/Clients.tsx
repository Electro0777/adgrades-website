import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  TrendingUp,
  Star,
  Building,
  CheckCircle,
  Target,
  Award,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { clientsData } from "../data/clientsData";

const Clients: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();

  // Get unique categories
  const categories = [
    "All",
    ...Array.from(new Set(clientsData.map((client) => client.category))),
  ];

  // Filter clients based on active category
  const filteredClients =
    activeCategory === "All"
      ? clientsData
      : clientsData.filter((client) => client.category === activeCategory);

  // Stats for hero section
  const stats = [
    {
      icon: Users,
      number: "50+",
      label: "Happy Clients",
      color: "text-blue-500",
    },
    {
      icon: Building,
      number: "12",
      label: "Industries",
      color: "text-green-500",
    },
    {
      icon: TrendingUp,
      number: "200%",
      label: "Avg Growth",
      color: "text-purple-500",
    },
    {
      icon: Award,
      number: "100%",
      label: "Success Rate",
      color: "text-orange-500",
    },
  ];

  // Featured testimonials
  const featuredTestimonials = clientsData
    .filter((client) => client.testimonial)
    .slice(0, 3)
    .map((client) => ({
      quote: client.testimonial!.quote,
      author: client.testimonial!.author,
      company: client.name,
      logo: client.logo,
      category: client.category,
    }));

  return (
    <div className="min-h-screen pt-16 sm:pt-20 lg:pt-24">
      {/* Hero Section - Aligned with Services page style */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center bg-secondary/10 rounded-full px-4 py-1.5 sm:px-6 sm:py-2 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-secondary mr-1.5 sm:mr-2" />
              <span className="text-secondary font-semibold text-sm sm:text-base">
                Trusted by Leading Brands
              </span>
            </motion.div>

            {/* Hero Title */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our <span className="gradient-text">Amazing</span>
              <br />
              <span className="gradient-text">Clients</span>
            </motion.h1>

            {/* Hero Description */}
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              From startups to enterprises, we've helped businesses across
              industries achieve remarkable digital transformation and growth
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-card/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-border/50 hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
                >
                  <stat.icon
                    className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color} mx-auto mb-2 sm:mb-3`}
                  />
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>{" "}
      {/* Filter Section - Aligned with Services page */}
      <section className="py-6 sm:py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 bg-card/60 rounded-full mb-2 sm:mb-3 text-muted-foreground backdrop-blur-sm border border-border/50">
              <Building className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">
                Filter by industry
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 sm:mb-3">
              Industries We <span className="gradient-text">Serve</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto px-2">
              Our expertise spans across multiple industries, bringing tailored
              solutions to meet unique business challenges
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-semibold transition-all duration-300 text-xs sm:text-sm ${
                  activeCategory === category
                    ? "bg-primary text-white shadow-lg transform scale-105"
                    : "bg-card/60 text-muted-foreground hover:bg-primary/10 hover:text-primary hover:scale-105 border border-border/50 backdrop-blur-sm"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <div className="text-center text-xs sm:text-sm text-muted-foreground">
            Showing {filteredClients.length} client
            {filteredClients.length !== 1 ? "s" : ""}
            {activeCategory !== "All" && ` in ${activeCategory}`}
          </div>
        </div>
      </section>{" "}
      {/* Clients Grid - Responsive Layout */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {filteredClients.map((client, index) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-fit"
              >
                <div
                  className="group bg-card/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl cursor-pointer h-full flex flex-col"
                  onClick={() => navigate(`/clients/${client.id}`)}
                >
                  {/* Client Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={client.image}
                      alt={client.name}
                      className="w-full h-36 sm:h-40 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-primary/90 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {client.category}
                      </span>
                    </div>
                    {/* View Details Button */}
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      <button
                        className="bg-white/90 hover:bg-white text-gray-900 p-1.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                        aria-label={`View details for ${client.name}`}
                      >
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-white/80 p-1.5 flex items-center justify-center">
                        {client.logo ? (
                          <img
                            src={client.logo}
                            alt={`${client.name} logo`}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = "none";
                              const parent = target.parentElement;
                              if (parent) {
                                parent.innerHTML = `<div class="w-full h-full bg-primary/10 rounded flex items-center justify-center text-primary font-bold text-xs">${client.name.charAt(
                                  0
                                )}</div>`;
                              }
                            }}
                          />
                        ) : (
                          <div className="w-full h-full bg-primary/10 rounded flex items-center justify-center text-primary font-bold text-xs">
                            {client.name.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors duration-300 truncate">
                          {client.name}
                        </h3>
                        <div className="text-xs text-muted-foreground">
                          {client.duration}
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-xs mb-3 leading-relaxed line-clamp-2 flex-1">
                      {client.description}
                    </p>

                    {/* Services Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {client.services.slice(0, 2).map((service, idx) => (
                        <span
                          key={idx}
                          className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded font-medium"
                        >
                          {service}
                        </span>
                      ))}
                      {client.services.length > 2 && (
                        <span className="bg-muted/60 text-muted-foreground text-xs px-2 py-0.5 rounded font-medium">
                          +{client.services.length - 2}
                        </span>
                      )}
                    </div>

                    {/* Results Preview */}
                    {client.results && client.results.length > 0 && (
                      <div className="border-t border-border/50 pt-3 mt-auto">
                        <div className="flex items-center gap-1.5 mb-1">
                          <Target className="w-3 h-3 text-secondary" />
                          <span className="text-xs font-semibold text-foreground">
                            Key Result
                          </span>
                        </div>
                        <div className="text-sm font-bold gradient-text">
                          {client.results[0].value}
                        </div>
                        <div className="text-xs text-muted-foreground line-clamp-1">
                          {client.results[0].description}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          {filteredClients.length === 0 && (
            <div className="text-center py-16">
              <div className="text-muted-foreground mb-4">
                No clients found in this category
              </div>
              <button
                onClick={() => setActiveCategory("All")}
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300"
              >
                View All Clients
              </button>
            </div>
          )}
        </div>
      </section>{" "}
      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3">
              What Our Clients <span className="gradient-text">Say</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Real feedback from real businesses that achieved remarkable
              results with our partnership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {featuredTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-card/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-white/80 p-1.5 flex items-center justify-center">
                    {testimonial.logo ? (
                      <img
                        src={testimonial.logo}
                        alt={`${testimonial.company} logo`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="w-full h-full bg-primary/10 rounded flex items-center justify-center text-primary font-bold text-xs">${testimonial.company.charAt(
                              0
                            )}</div>`;
                          }
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-primary/10 rounded flex items-center justify-center text-primary font-bold text-xs">
                        {testimonial.company.charAt(0)}
                      </div>
                    )}{" "}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      {testimonial.company}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.category}
                    </div>
                  </div>
                </div>

                <div className="flex mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <blockquote className="text-muted-foreground mb-4 leading-relaxed italic text-sm line-clamp-3">
                  "{testimonial.quote}"
                </blockquote>

                <div className="text-xs font-semibold text-primary">
                  — {testimonial.author}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>{" "}
      {/* CTA Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-12 border border-border/50"
          >
            <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mx-auto mb-4 sm:mb-6" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4">
              Ready to Join Our{" "}
              <span className="gradient-text">Success Stories</span>?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your business achieve similar
              results and become our next success story
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button
                onClick={() => navigate("/contact")}
                className="px-6 py-3 sm:px-8 sm:py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
              >
                Start Your Project
              </button>
              <button
                onClick={() => navigate("/services")}
                className="px-6 py-3 sm:px-8 sm:py-4 bg-transparent border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300 text-sm sm:text-base"
              >
                View Our Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
