import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Share2,
  Palette,
  Search,
  Mail,
  TrendingUp,
  Code,
  Star,
  Users,
  Award,
  Target,
  CheckCircle,
  Zap,
  Play,
  Globe,
  Shield,
  Rocket,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import AnimatedCounter from "../components/AnimatedCounter";
import {
  heroData,
  servicesData,
  testimonialData,
  ctaData,
} from "../data/homeData";

const Home: React.FC = () => {
  // Service icons mapping
  const serviceIcons = {
    "Social Media Marketing": Share2,
    "Brand Design & Identity": Palette,
    "SEO & Content Marketing": Search,
    "Email Marketing": Mail,
    "Web Development": Code,
    "Performance Advertising": TrendingUp,
  };

  const clients = [
    {
      name: "OS CODE Solutions",
      category: "IT Solutions",
      description: "Emerging IT solutions startup",
      logo: "./client/oscode.png",
    },
    {
      name: "Delhi 65",
      category: "Restaurant",
      description: "Ranchi Restaurant",
      logo: "./client/delhi65.png",
    },
    {
      name: "Medhavi Classes",
      category: "Education",
      description: "Online education platform",
      logo: "./client/medhavi.png",
    },
    {
      name: "Uplifto",
      category: "Tech Services",
      description: "Tech-based startup for IT services",
      logo: "./client/upliftio.png",
    },
    {
      name: "Vinayaka Enterprises",
      category: "Interior Design",
      description: "Interior Design Studio",
      logo: "./client/vinayaka.jpg",
    },
    {
      name: "M K Streetwear",
      category: "Fashion",
      description: "Streetwear Fashion Brand",
      logo: "./client/mk.png",
    },
    {
      name: "Adhyayan",
      category: "Education",
      description: "Online Coaching Institute",
      logo: "./client/aadhyan.jpg",
    },
    {
      name: "Dew Drop Homestay",
      category: "Hospitality",
      description: "Premium Hilltop Stay",
      logo: "./client/dewdrop.png",
    },
    {
      name: "Nataraj Dance Studios",
      category: "Entertainment",
      description: "Dance training academy",
      logo: "./client/nataraj.png",
    },
    {
      name: "Pureblend Foods",
      category: "Food & Beverage",
      description: "B2B Food Supply Chain Brand",
      logo: "./client/pureblend.jpg",
    },
    {
      name: "SP Enterprises",
      category: "Heavy Equipment",
      description: "Heavy Earthmoving Equipment & Spares",
      logo: "./client/splogo.png",
    },
    {
      name: "AS Tech Industries",
      category: "Engineering",
      description: "Engineering and Manufacturing Services",
      logo: "./client/asti.png",
    },
  ];

  return (
    <div className="pt-16 overflow-x-hidden">
      {/* Hero Section - Enhanced Dynamic Design */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left animate-fade-in">
              {/* Badge with enhanced styling */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 backdrop-blur-sm mb-6">
                <Rocket className="w-4 h-4 mr-2 text-primary animate-bounce" />
                <span className="text-sm font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  🚀 Transforming Businesses Since 2023
                </span>
              </div>

              {/* Main Title with better typography */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                <span className="block text-foreground">
                  {heroData.subtitle}
                </span>
                <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
                  {heroData.highlight}
                </span>
              </h1>

              {/* Description with better spacing */}
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {heroData.description}
              </p>

              {/* Enhanced CTA Section */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-primary/25 transform hover:scale-105 transition-all duration-300"
                >
                  <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  {heroData.primaryCTA}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/portfolio"
                  className="group inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Play className="w-5 h-5 mr-2" />
                  {heroData.secondaryCTA}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-green-500" />
                  <span>100% Secure</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-blue-500" />
                  <span>50+ Happy Clients</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-2 text-yellow-500" />
                  <span>Award Winning</span>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Elements */}
            <div className="relative lg:block hidden">
              {/* Interactive Cards */}
              <div className="relative h-96 w-full">
                {/* Floating Card 1 */}
                <div className="absolute top-0 right-0 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 w-64 animate-float">
                  <div className="flex items-center mb-3">
                    <TrendingUp className="w-8 h-8 text-primary mr-3" />
                    <div>
                      <div className="text-2xl font-bold text-foreground">
                        300%
                      </div>
                      <div className="text-sm text-muted-foreground">
                        ROI Increase
                      </div>
                    </div>
                  </div>
                  <div className="h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                </div>

                {/* Floating Card 2 */}
                <div className="absolute top-24 left-0 bg-gradient-to-br from-secondary/10 to-accent/10 backdrop-blur-sm border border-secondary/20 rounded-2xl p-6 w-56 animate-float-delayed">
                  <div className="flex items-center mb-3">
                    <Target className="w-8 h-8 text-secondary mr-3" />
                    <div>
                      <div className="text-2xl font-bold text-foreground">
                        98%
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Success Rate
                      </div>
                    </div>
                  </div>
                  <div className="h-2 bg-gradient-to-r from-secondary to-accent rounded-full"></div>
                </div>

                {/* Floating Card 3 */}
                <div className="absolute bottom-0 right-8 bg-gradient-to-br from-accent/10 to-primary/10 backdrop-blur-sm border border-accent/20 rounded-2xl p-6 w-60 animate-float-slow">
                  <div className="flex items-center mb-3">
                    <Globe className="w-8 h-8 text-accent mr-3" />
                    <div>
                      <div className="text-2xl font-bold text-foreground">
                        24/7
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Support
                      </div>
                    </div>
                  </div>
                  <div className="h-2 bg-gradient-to-r from-accent to-primary rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* Stats Section - Modern Floating Design */}
      <section className="section-padding content-overlay relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 right-1/3 w-48 h-48 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-accent/10 rounded-full px-6 py-2 mb-6">
              <Award className="w-5 h-5 text-accent mr-2" />
              <span className="text-accent font-semibold">Our Impact</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Numbers That <span className="brand-gradient-text">Matter</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real results from real partnerships
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {heroData.stats.map((stat, index) => {
              const gradients = [
                "from-primary to-secondary",
                "from-secondary to-accent",
                "from-accent to-primary",
                "from-primary/80 to-secondary/80",
              ];
              const delays = [
                "animate-delay-0",
                "animate-delay-200",
                "animate-delay-400",
                "animate-delay-600",
              ];

              return (
                <div
                  key={stat.label}
                  className={`group relative ${delays[index]}`}
                >
                  {/* Main Card */}
                  <div className="relative bg-gradient-to-br from-card to-card/50 backdrop-blur-xl border border-border/50 rounded-3xl p-6 lg:p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-primary/50">
                    {/* Floating Gradient Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                    ></div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full opacity-60"></div>
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-r from-secondary to-accent rounded-full opacity-40"></div>

                    {/* Content */}
                    <div className="relative z-10 text-center">
                      {/* Number */}
                      <div
                        className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r ${gradients[index]} bg-clip-text text-transparent mb-3 lg:mb-4`}
                      >
                        <AnimatedCounter
                          end={stat.number}
                          suffix={stat.suffix}
                        />
                      </div>

                      {/* Label */}
                      <p className="text-muted-foreground font-semibold text-sm lg:text-base group-hover:text-foreground transition-colors">
                        {stat.label}
                      </p>
                    </div>

                    {/* Hover Glow Effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${gradients[index]} opacity-0 group-hover:opacity-5 rounded-3xl blur transition-opacity duration-500`}
                    ></div>
                  </div>
                  {/* Floating Elements for Visual Interest */}
                  {index === 0 && (
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20 animate-pulse"></div>
                  )}{" "}
                  {index === 3 && (
                    <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-gradient-to-r from-accent to-primary rounded-full opacity-30 animate-pulse animate-delay-1000"></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Decorative Element */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-2 text-muted-foreground">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary"></div>
              <Star className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">
                Trusted by industry leaders
              </span>
              <Star className="w-5 h-5 text-secondary" />
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-secondary"></div>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* Services Section - Modern Bento Grid Layout */}
      <section className="section-padding content-overlay relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-2 mb-6">
              <Sparkles className="w-5 h-5 text-primary mr-2" />
              <span className="text-primary font-semibold">Our Expertise</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              {servicesData.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {servicesData.description}
            </p>
          </div>{" "}
          {/* Varied Bento Grid - 1 Large, 2 Medium, 3 Regular Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-12">
            {servicesData.services.map((service, index) => {
              const IconComponent =
                serviceIcons[service.title as keyof typeof serviceIcons] ||
                Code; // Varied bento grid layouts - 1 large, 2 medium, 3 regular
              const layouts = [
                "sm:col-span-2 md:col-span-2 md:row-span-2", // Large card (Social Media) - 2x2 space
                "sm:col-span-1 md:col-span-1 md:row-span-2", // Medium card (Brand Design) - 1x2 space
                "sm:col-span-1 md:col-span-1 md:row-span-1", // Regular card (SEO) - 1x1 space
                "sm:col-span-1 md:col-span-1 md:row-span-1", // Regular card (Email Marketing) - 1x1 space
                "sm:col-span-2 md:col-span-2 md:row-span-1", // Medium card (Web Dev) - 2x1 space
                "sm:col-span-1 md:col-span-1 md:row-span-1", // Regular card (Performance Ads) - 1x1 space
              ];

              const cardSizes = [
                "large",
                "medium",
                "regular",
                "regular",
                "medium",
                "regular",
              ];
              const cardSize = cardSizes[index];
              const isLarge = cardSize === "large";
              const isMedium = cardSize === "medium";

              return (
                <div
                  key={service.title}
                  className={`${
                    layouts[index]
                  } group relative overflow-hidden rounded-3xl bg-gradient-to-br from-card to-card/50 border border-border hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${
                    isLarge
                      ? "min-h-[300px] sm:min-h-[350px] md:min-h-[400px]"
                      : isMedium
                      ? "min-h-[250px] sm:min-h-[280px] md:min-h-[300px]"
                      : "min-h-[200px] sm:min-h-[220px] md:min-h-[240px]"
                  }`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full transform translate-x-16 -translate-y-16"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-4 sm:p-6 lg:p-8 h-full flex flex-col">
                    {" "}
                    {/* Icon */}
                    <div className="mb-4 lg:mb-6">
                      <div className="relative">
                        {" "}
                        <div
                          className={`${
                            isLarge
                              ? "w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20"
                              : isMedium
                              ? "w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18"
                              : "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
                          } bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent
                            className={`${
                              isLarge
                                ? "w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"
                                : isMedium
                                ? "w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9"
                                : "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                            } text-white`}
                          />
                        </div>
                        {/* Floating elements for large card */}
                        {isLarge && (
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full animate-pulse"></div>
                        )}
                      </div>
                    </div>
                    {/* Title */}{" "}
                    <h3
                      className={`${
                        isLarge
                          ? "text-2xl sm:text-3xl md:text-3xl"
                          : isMedium
                          ? "text-xl sm:text-2xl md:text-2xl"
                          : "text-lg sm:text-xl md:text-2xl"
                      } font-bold text-foreground mb-3 lg:mb-4 group-hover:text-primary transition-colors`}
                    >
                      {service.title}
                    </h3>
                    {/* Description */}
                    <p
                      className={`text-muted-foreground leading-relaxed mb-4 lg:mb-6 flex-grow ${
                        isLarge
                          ? "text-lg"
                          : isMedium
                          ? "text-base"
                          : "text-sm lg:text-base"
                      }`}
                    >
                      {service.description}
                    </p>
                    {/* Features - Show only for large card */}
                    {isLarge && (
                      <div className="mb-4 lg:mb-6">
                        <div className="flex flex-wrap gap-2">
                          {service.features.slice(0, 4).map((feature) => (
                            <span
                              key={feature}
                              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {/* CTA */}
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-primary hover:text-secondary font-semibold transition-colors group-hover:translate-x-2 transform duration-300"
                    >
                      Explore Service
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Bottom CTA */}
          <div className="text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-primary to-secondary rounded-full p-1">
              <Link
                to="/services"
                className="bg-background text-foreground px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center"
              >
                View All Services
                <ExternalLink className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* Clients Section - Modern Grid Layout */}
      <section className="section-padding content-overlay relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-secondary/10 rounded-full px-6 py-2 mb-6">
              <Users className="w-5 h-5 text-secondary mr-2" />
              <span className="text-secondary font-semibold">
                Trusted Partners
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Trusted by{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Amazing Clients
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're proud to partner with innovative businesses across various
              industries, helping them achieve their digital transformation
              goals.
            </p>
          </div>

          {/* Clients Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-12">
            {clients.map((client) => (
              <div
                key={client.name}
                className={`group relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 hover:border-primary/50 flex flex-col items-center justify-center aspect-square animate-fade-in`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full transform translate-x-8 -translate-y-8"></div>
                </div>

                {/* Client Logo */}
                <div className="relative z-10 w-full h-16 mb-3 flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-w-full max-h-full object-contain filter brightness-0 dark:brightness-100 group-hover:brightness-100 dark:group-hover:filter-none transition-all duration-300 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      target.nextElementSibling?.classList.remove("hidden");
                    }}
                  />{" "}
                  {/* Fallback for missing images */}
                  <div className="hidden w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {client.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                  </div>
                </div>

                {/* Client Info */}
                <div className="text-center">
                  <h3 className="font-semibold text-foreground text-sm mb-1 group-hover:text-primary transition-colors line-clamp-2">
                    {client.name}
                  </h3>
                  <p className="text-xs text-muted-foreground group-hover:text-secondary transition-colors">
                    {client.category}
                  </p>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-primary to-secondary rounded-full p-1 shadow-lg">
              <Link
                to="/portfolio"
                className="bg-background text-foreground px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center"
              >
                View Our Portfolio
                <ExternalLink className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials - Modern Floating Cards */}
      <section className="section-padding content-overlay relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-10 w-72 h-72 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-secondary/10 rounded-full px-6 py-2 mb-6">
              <Star className="w-5 h-5 text-secondary mr-2" />
              <span className="text-secondary font-semibold">
                Client Stories
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              {testimonialData.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {testimonialData.description}
            </p>
          </div>

          {/* Floating Testimonials Grid */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonialData.testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className={`group relative ${
                    index % 2 === 1 ? "md:mt-12" : ""
                  } ${index === 2 ? "lg:mt-24" : ""}`}
                >
                  {/* Floating Card */}
                  <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-primary/50">
                    {/* Decorative Elements */}
                    <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-full opacity-60"></div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-secondary to-accent rounded-full opacity-40"></div>

                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 text-primary/20 text-6xl font-serif leading-none">
                      "
                    </div>

                    {/* Rating */}
                    <div className="flex items-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-secondary fill-current mr-1"
                        />
                      ))}
                    </div>

                    {/* Content */}
                    <blockquote className="text-foreground/90 leading-relaxed text-lg mb-8 relative z-10">
                      {testimonial.content}
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-foreground">
                          {testimonial.name}
                        </div>
                        <div className="text-muted-foreground text-sm">
                          {testimonial.role}
                        </div>
                        <div className="text-primary text-sm font-medium">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Connecting Lines - Hidden on mobile */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
              viewBox="0 0 1000 600"
            >
              <path
                d="M200 100 Q 400 50 600 150"
                stroke="url(#testimonial-gradient)"
                strokeWidth="2"
                fill="none"
                className="animate-draw"
                strokeDasharray="5,5"
              />
              <path
                d="M150 300 Q 350 200 650 350"
                stroke="url(#testimonial-gradient)"
                strokeWidth="2"
                fill="none"
                className="animate-draw-delayed"
                strokeDasharray="3,3"
              />
              <defs>
                <linearGradient
                  id="testimonial-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    stopColor="hsl(var(--primary))"
                    stopOpacity="0.3"
                  />
                  <stop
                    offset="100%"
                    stopColor="hsl(var(--secondary))"
                    stopOpacity="0.3"
                  />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Bottom Stats */}
          <div className="mt-20 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  98%
                </div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                  50+
                </div>
                <div className="text-muted-foreground">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  24/7
                </div>
                <div className="text-muted-foreground">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  5⭐
                </div>
                <div className="text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* CTA Section - Modern Interactive Design */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-card to-background border-t border-border">
        {" "}
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-secondary/5 to-accent/5 rounded-full blur-3xl animate-pulse-delay-2"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-accent/5 to-primary/5 rounded-full blur-3xl animate-pulse-delay-4"></div>
        </div>
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-border"></div>
            ))}
          </div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            {" "}
            {/* Badge */}
            <div className="inline-flex items-center bg-primary/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-primary/20">
              <Rocket className="w-5 h-5 text-primary mr-2" />
              <span className="text-primary font-semibold">
                Ready to Launch?
              </span>
            </div>
            {/* Main Heading */}
            <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
              {ctaData.title}
            </h2>
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              {ctaData.description}
            </p>
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center">
                  {ctaData.primaryCTA}
                  <Target className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>{" "}
              <a
                href="https://calendly.com/chandanbkrishna077/adgrades"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-primary/30 text-foreground font-bold rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 backdrop-blur-sm w-full sm:w-auto"
              >
                {ctaData.secondaryCTA}
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>{" "}
            {/* Feature Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {ctaData.features.map((feature) => (
                <div key={feature} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm font-medium">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Elements */}
          <div className="relative">
            {/* Floating Cards */}
            <div className="hidden lg:block">
              {" "}
              <div className="absolute top-0 left-0 bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-6 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center text-foreground">
                  <Globe className="w-8 h-8 text-primary mr-3" />
                  <div>
                    <div className="font-bold">Global Reach</div>
                    <div className="text-sm text-muted-foreground">
                      Worldwide clients
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-6 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center text-foreground">
                  <Shield className="w-8 h-8 text-secondary mr-3" />
                  <div>
                    <div className="font-bold">Secure & Reliable</div>
                    <div className="text-sm text-muted-foreground">
                      100% guaranteed
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 w-full">
              <svg
                viewBox="0 0 1200 120"
                className="w-full h-12 text-primary/20"
              >
                <path
                  d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
