import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Zap,
  ExternalLink,
  Play,
  Filter,
} from "lucide-react";
import {
  services,
  serviceCategories,
  type Service,
} from "../data/servicesData";

const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const filteredServices =
    selectedCategory === "all"
      ? services
      : services.filter((service) => service.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16 sm:pt-20 lg:pt-24">
      {" "}
      {/* Hero Section */}
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
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-secondary mr-1.5 sm:mr-2" />
              <span className="text-secondary font-semibold text-sm sm:text-base">
                Premium Services
              </span>
            </motion.div>
            {/* Title */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 sm:mb-6 lg:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Elevate Your{" "}
              <span className="gradient-text">Digital Presence</span>
            </motion.h1>{" "}
            {/* Description */}
            <motion.p
              className="text-base sm:text-lg lg:text-xl xl:text-2xl text-muted-foreground max-w-4xl mx-auto mb-4 sm:mb-6 lg:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              From concept to launch, we deliver exceptional digital solutions
              that drive growth, enhance user experience, and transform your
              business.
            </motion.p>
            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-3.5 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                to="/portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-3.5 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                View Our Work
              </Link>
            </motion.div>
          </div>
        </div>
      </section>{" "}
      {/* Service Categories Filter */}
      <section className="py-6 sm:py-8 lg:py-10 relative">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          {" "}
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center bg-accent/10 rounded-full px-4 py-1.5 sm:px-6 sm:py-2 mb-2 sm:mb-4">
              <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-accent mr-1.5 sm:mr-2" />
              <span className="text-accent font-semibold text-sm sm:text-base">
                Service Categories
              </span>
            </div>
          </div>{" "}
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 lg:gap-3 mb-6 sm:mb-8">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 sm:px-6 sm:py-2.5 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                selectedCategory === "all"
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                  : "bg-card text-foreground border border-border hover:border-primary/50 hover:bg-primary/5"
              }`}
            >
              All Services
            </button>
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 sm:px-6 sm:py-2.5 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                    : "bg-card text-foreground border border-border hover:border-primary/50 hover:bg-primary/5"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </section>{" "}
      {/* Services Grid */}
      <section className="py-8 sm:py-12 lg:py-16 relative">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          {" "}
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 sm:mb-3">
              Our <span className="gradient-text">Premium Services</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions designed to accelerate your digital
              transformation
            </p>
          </div>
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  className="group relative bg-gradient-to-br from-card to-card/50 backdrop-blur-xl border border-border/50 rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-primary/50 cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  onClick={() => setSelectedService(service)}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full transform translate-x-16 -translate-y-16"></div>
                  </div>{" "}
                  {/* Icon */}
                  <div className="relative z-10 mb-3 sm:mb-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-primary to-secondary rounded-xl lg:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="relative z-10">
                    {" "}
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-1.5 sm:mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      {service.shortDescription}
                    </p>{" "}
                    {/* Features */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                      {service.features.slice(0, 3).map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>{" "}
                    {/* Pricing & Timeline */}
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Starting at
                        </p>
                        <p className="text-sm sm:text-base font-semibold text-foreground">
                          {service.pricing.basic}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Timeline
                        </p>
                        <p className="text-sm sm:text-base font-semibold text-foreground">
                          {service.timeline}
                        </p>
                      </div>
                    </div>
                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <Link
                        to="/contact"
                        className="inline-flex items-center text-primary hover:text-secondary font-semibold transition-colors text-sm sm:text-base"
                      >
                        Get Started
                        <ArrowRight className="ml-1.5 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-2 transition-transform" />
                      </Link>
                      <button
                        className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedService(service);
                        }}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl lg:rounded-3xl"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>{" "}
      {/* CTA Section */}
      <section className="py-8 sm:py-12 lg:py-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-8 relative z-10 text-center">
          <motion.div
            className="bg-gradient-to-br from-card to-card/50 backdrop-blur-xl border border-border/50 rounded-3xl lg:rounded-[2rem] p-6 sm:p-8 lg:p-12 xl:p-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Ready to{" "}
              <span className="gradient-text">Transform Your Business</span>?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-4 sm:mb-6 lg:mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create something amazing together.
              Get started with a free consultation today.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-3.5 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                to="/portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-3.5 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300"
              >
                <ExternalLink className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            className="bg-card border border-border rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6 sm:p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mr-4">
                    <selectedService.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
                      {selectedService.title}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      {selectedService.category}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                >
                  ×
                </button>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  {selectedService.fullDescription}
                </p>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedService.features.map((feature) => (
                      <div key={feature} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">
                    Technologies We Use
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-border">
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Link
                      to="/contact"
                      className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full hover:scale-105 transition-all duration-300"
                      onClick={() => setSelectedService(null)}
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="flex-1 inline-flex items-center justify-center px-6 py-3 border-2 border-border text-foreground font-semibold rounded-full hover:border-primary hover:text-primary transition-all duration-300"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Services;
