import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Award, ChevronRight, Globe } from "lucide-react";
import VortexBackground from "../components/VortexBackground";
import { clientsData } from "../data/clientsData";

const ClientDetails: React.FC = () => {
  const { client } = useParams<{ client: string }>();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  // Find the client data based on the URL parameter
  const clientData = clientsData.find((c) => c.id === client);

  useEffect(() => {
    // Add animation delay for content to load
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (!clientData) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Client Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The client you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/portfolio")}
            className="brand-button animate-button-pulse"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`pt-16 pb-8 min-h-screen ${
        isLoaded ? "animate-fade-in" : "opacity-0"
      }`}
    >
      {/* Vortex Background */}
      <VortexBackground className="-z-10" />

      {/* Single View Client Details */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate("/portfolio")}
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-300 mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="font-medium">Back to Portfolio</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Client Info Column */}
            <div className="lg:col-span-1">
              <div className="minimal-card p-8 rounded-3xl h-full backdrop-blur-md hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center">
                  {/* Client Logo */}
                  <div className="w-40 h-40 lg:w-60 lg:h-60 bg-card/50 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl border border-border mb-6 hover:shadow-2xl hover:border-primary/30 transition-all duration-300 transform hover:scale-[1.02]">
                    <img
                      src={clientData.image}
                      alt={clientData.name}
                      className="w-full h-full p-4 object-contain rounded-2xl"
                    />
                  </div>

                  <div className="page-badge mb-4 py-1.5 px-4 bg-primary/10 rounded-full">
                    <span className="text-primary font-semibold">
                      {clientData.category}
                    </span>
                  </div>

                  <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 text-center hero-title-glow">
                    {clientData.name}
                  </h1>

                  <div className="flex gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background/30 backdrop-blur-sm py-1.5 px-3 rounded-full">
                      <Calendar className="w-4 h-4 text-primary" />
                      {clientData.duration}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background/30 backdrop-blur-sm py-1.5 px-3 rounded-full">
                      <Award className="w-4 h-4 text-primary" />
                      {clientData.year || "2024"}
                    </div>
                  </div>

                  {/* Services List */}
                  <div className="w-full">
                    <h3 className="text-lg font-semibold text-foreground mb-4 text-center brand-gradient-text">
                      Services Provided
                    </h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {clientData.services.map((service, index) => (
                        <span
                          key={index}
                          className="bg-primary/10 text-primary text-xs px-3 py-1.5 rounded-full font-medium hover:bg-primary/20 transition-colors duration-300 cursor-default"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View more projects link */}
                  <div
                    onClick={() => navigate("/portfolio")}
                    className="mt-6 inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-300 group cursor-pointer"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    <span>View All Projects</span>
                    <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* Description and Results Column */}
            <div className="lg:col-span-2">
              <div className="minimal-card p-8 rounded-3xl mb-8 backdrop-blur-md hover:shadow-lg transition-all duration-300">
                <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-6 flex items-center">
                  About{" "}
                  <span className="brand-gradient-text ml-2">
                    {clientData.name}
                  </span>
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {clientData.about}
                </p>

                <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-6 flex items-center">
                  How We{" "}
                  <span className="brand-gradient-text ml-2">Helped</span>
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {clientData.howWeHelped}
                </p>

                {/* Results */}
                {clientData.results && (
                  <>
                    <h3 className="text-lg lg:text-xl font-semibold text-foreground mb-6 brand-gradient-text inline-block">
                      Project Results
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {clientData.results.map((result, index) => (
                        <div
                          key={index}
                          className="bg-primary/5 hover:bg-primary/10 p-6 rounded-xl border border-transparent hover:border-primary/20 transition-all duration-300 transform hover:scale-[1.05] hover:shadow-lg"
                        >
                          <div className="text-3xl font-bold brand-gradient-text mb-2">
                            {result.value}
                          </div>
                          <div className="text-sm font-medium text-foreground mb-2">
                            {result.metric}
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {result.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Testimonial Section - If available */}
              {clientData.testimonial && (
                <div className="minimal-card p-8 rounded-3xl backdrop-blur-md hover:shadow-lg transition-all duration-300">
                  <h3 className="text-lg lg:text-xl font-semibold text-foreground mb-6 brand-gradient-text inline-block">
                    Client Testimonial
                  </h3>
                  <div className="relative">
                    <div className="absolute -left-2 -top-2 text-4xl text-primary/20">
                      "
                    </div>
                    <div className="absolute -right-2 -bottom-2 text-4xl text-primary/20">
                      "
                    </div>
                    <blockquote className="italic text-foreground/90 pl-6 pr-6 py-2">
                      {clientData.testimonial.quote}
                    </blockquote>
                    {clientData.testimonial.author && (
                      <div className="mt-4 text-right text-sm font-medium text-primary">
                        — {clientData.testimonial.author}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Call To Action */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Interested in similar results for your business?
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => navigate("/contact")}
                className="brand-button animate-button-glow"
              >
                Get in Touch
              </button>
              <button
                onClick={() => navigate("/services")}
                className="brand-button-outline"
              >
                Explore Our Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientDetails;
