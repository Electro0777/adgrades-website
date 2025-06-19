import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Send,
  CheckCircle,
  MapPin,
  Clock,
  DollarSign,
  Briefcase,
  Shield,
  ArrowRight,
  Zap,
  Users,
} from "lucide-react";
import VortexBackground from "../components/VortexBackground";
import { cultureValues, openPositions, benefits } from "../data/careersData";

const Careers: React.FC = () => {
  const [applicationData, setApplicationData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    portfolio: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setApplicationData({
      ...applicationData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Application submitted:", applicationData);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setApplicationData({
        name: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        portfolio: "",
        message: "",
      });
    }, 3000);
  };
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
                Join Our Growing Team
              </span>
            </div>

            <h1 className="heading-primary text-foreground mb-8 leading-tight">
              Join the{" "}
              <span className="brand-gradient-text">AdGrades Team</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed description-text">
              Be part of a dynamic team that's revolutionizing digital
              marketing. We're looking for passionate individuals who want to
              make a real impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="#open-positions" className="brand-button">
                View Open Positions
                <Briefcase className="ml-3 h-6 w-6" />
              </a>

              <a href="#application-form" className="brand-button-outline">
                Apply Now
                <Send className="ml-3 h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Verify Certificate Section - Only on Careers Page */}
      <section className="section-padding content-overlay">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-secondary text-foreground mb-8">
              Verify Employee{" "}
              <span className="brand-gradient-text">Certificates</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed description-text">
              Verify the authenticity of AdGrades employee certificates and
              achievements.
            </p>
          </div>

          <div className="text-center">
            <Link
              to="/verify"
              className="inline-flex items-center px-8 py-4 bg-secondary/20 text-secondary border-2 border-secondary font-semibold rounded-2xl hover:bg-secondary hover:text-white transition-all duration-500 transform hover:scale-105 shadow-xl"
            >
              <Shield className="mr-3 h-6 w-6" />
              Verify Certificate
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="section-padding content-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="heading-secondary text-foreground mb-8">
              Our Culture & <span className="brand-gradient-text">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed description-text">
              At AdGrades, we've built a culture that fosters creativity,
              collaboration, and personal growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {cultureValues.map((value) => (
              <div
                key={value.title}
                className="group text-center p-10 minimal-card rounded-3xl hover:border-primary/40 transition-all duration-700 transform hover:-translate-y-4 hover:scale-[1.03]"
              >
                <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                  <value.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-6 group-hover:text-primary transition-colors duration-500">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg description-text">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="section-padding content-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="heading-secondary text-foreground mb-8">
              Open <span className="brand-gradient-text">Positions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed description-text">
              Explore exciting career opportunities and find the perfect role to
              grow your career with us.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {openPositions.map((position) => (
              <div
                key={position.title}
                className="minimal-card rounded-3xl hover:border-primary/40 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-[1.02] overflow-hidden"
              >
                <div className="p-10">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">
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

                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg description-text">
                    {position.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="font-bold text-foreground mb-4 text-lg">
                      Requirements:
                    </h4>
                    <ul className="space-y-3">
                      {position.requirements.map((req, reqIndex) => (
                        <li
                          key={reqIndex}
                          className="flex items-start text-muted-foreground"
                        >
                          <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="description-text">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full brand-gradient text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-xl">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding content-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="heading-secondary text-foreground mb-10">
                Why Work at{" "}
                <span className="brand-gradient-text">AdGrades?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed description-text">
                We believe in taking care of our team members and providing an
                environment where everyone can thrive both professionally and
                personally.
              </p>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start group">
                    <CheckCircle className="h-6 w-6 text-secondary mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-500" />
                    <span className="text-muted-foreground leading-relaxed text-lg description-text">
                      {benefit}
                    </span>
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
              <div className="absolute -bottom-8 -right-8 bg-card/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 border border-border">
                <div className="flex items-center space-x-4">
                  <Users className="h-10 w-10 text-primary" />
                  <div>
                    <div className="font-bold text-foreground text-lg">
                      15+ Team Members
                    </div>
                    <div className="text-muted-foreground">And Growing!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section
        id="application-form"
        className="section-padding content-overlay"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="heading-secondary text-foreground mb-6">
              Join Our <span className="brand-gradient-text">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground description-text">
              Don't see the perfect role? Send us your information and we'll
              keep you in mind for future opportunities.
            </p>
          </div>

          <div className="minimal-card rounded-3xl p-10">
            {isSubmitted ? (
              <div className="text-center py-16">
                <CheckCircle className="h-20 w-20 text-secondary mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  Application Submitted Successfully!
                </h3>
                <p className="text-muted-foreground text-lg">
                  We'll review your application and get back to you within 5
                  business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-foreground mb-3"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={applicationData.name}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-muted/60 backdrop-blur-sm border border-border rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder-muted-foreground transition-all duration-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-foreground mb-3"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={applicationData.email}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-muted/60 backdrop-blur-sm border border-border rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder-muted-foreground transition-all duration-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-foreground mb-3"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={applicationData.phone}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-muted/60 backdrop-blur-sm border border-border rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder-muted-foreground transition-all duration-500"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="position"
                      className="block text-sm font-semibold text-foreground mb-3"
                    >
                      Position of Interest
                    </label>
                    <select
                      id="position"
                      name="position"
                      value={applicationData.position}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-muted/60 backdrop-blur-sm border border-border rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent text-foreground transition-all duration-500"
                    >
                      <option value="">Select a position</option>
                      <option value="digital-marketing">
                        Digital Marketing Specialist
                      </option>
                      <option value="ui-ux-designer">UI/UX Designer</option>
                      <option value="content-manager">
                        Content Marketing Manager
                      </option>
                      <option value="frontend-developer">
                        Frontend Developer
                      </option>
                      <option value="other">Other / General Application</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label
                      htmlFor="experience"
                      className="block text-sm font-semibold text-foreground mb-3"
                    >
                      Years of Experience
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={applicationData.experience}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-muted/60 backdrop-blur-sm border border-border rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent text-foreground transition-all duration-500"
                    >
                      <option value="">Select experience level</option>
                      <option value="0-1">0-1 years (Entry Level)</option>
                      <option value="2-3">2-3 years</option>
                      <option value="4-5">4-5 years</option>
                      <option value="6+">6+ years (Senior Level)</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="portfolio"
                      className="block text-sm font-semibold text-foreground mb-3"
                    >
                      Portfolio/LinkedIn URL
                    </label>
                    <input
                      type="url"
                      id="portfolio"
                      name="portfolio"
                      value={applicationData.portfolio}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-muted/60 backdrop-blur-sm border border-border rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder-muted-foreground transition-all duration-500"
                      placeholder="https://linkedin.com/in/johndoe"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-foreground mb-3"
                  >
                    Tell us about yourself *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={applicationData.message}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-muted/60 backdrop-blur-sm border border-border rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder-muted-foreground resize-none transition-all duration-500"
                    placeholder="Tell us about your experience, skills, and why you'd like to join AdGrades..."
                  />
                </div>

                <button type="submit" className="w-full brand-button">
                  Submit Application
                  <Send className="ml-3 h-6 w-6" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding brand-gradient">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-secondary text-white mb-10">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-white/90 mb-16 max-w-4xl mx-auto description-text">
            Let's discuss how you can contribute to our mission and grow your
            career with AdGrades.
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

export default Careers;
