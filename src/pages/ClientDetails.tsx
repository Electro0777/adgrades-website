import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Users, Award } from "lucide-react";
import VortexBackground from "../components/VortexBackground";
import { clientsData } from "../data/clientsData";

const ClientDetails: React.FC = () => {
  const { client } = useParams<{ client: string }>();
  const navigate = useNavigate();

  // Find the client data based on the URL parameter
  const clientData = clientsData.find((c) => c.id === client);

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
            className="brand-button"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 pb-8">
      {/* Vortex Background */}
      <VortexBackground className="-z-10" />

      {/* Single View Client Details */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate("/portfolio")}
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Portfolio
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Client Info Column */}
            <div className="lg:col-span-1">
              <div className="minimal-card p-8 rounded-3xl h-full">
                <div className="flex flex-col items-center">
                  {/* Client Logo */}
                  <div className="w-40 h-full lg:w-60 lg:h-full bg-card/50 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl border border-border mb-6">
                    <img
                      src={clientData.image}
                      alt={clientData.name}
                      className="w-full h-full p-2 object-contain rounded-2xl"
                    />
                  </div>

                  <div className="page-badge mb-4">
                    <span className="text-primary font-semibold">
                      {clientData.category}
                    </span>
                  </div>

                  <h1 className="text-2xl font-bold text-foreground mb-4 text-center">
                    {clientData.name}
                  </h1>

                  <div className="flex gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {clientData.duration}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Award className="w-4 h-4" />
                      {clientData.year || "2024"}
                    </div>
                  </div>

                  {/* Services List */}
                  <div className="w-full">
                    <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
                      Services Provided
                    </h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {clientData.services.map((service, index) => (
                        <span
                          key={index}
                          className="bg-primary/10 text-primary text-xs px-3 py-1.5 rounded-full font-medium"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description and Results Column */}
            <div className="lg:col-span-2">
              <div className="minimal-card p-8 rounded-3xl mb-8">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  About <span className="brand-gradient-text">Project</span>
                </h2>
                <p className="text-muted-foreground mb-6">
                  {clientData.fullDescription || clientData.description}
                </p>

                {/* Results */}
                {clientData.results && (
                  <>
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      Project Results
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {clientData.results.map((result, index) => (
                        <div
                          key={index}
                          className="bg-primary/5 p-4 rounded-xl"
                        >
                          <div className="text-2xl font-bold brand-gradient-text mb-1">
                            {result.value}
                          </div>
                          <div className="text-sm font-medium text-foreground mb-1">
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

              {/* Testimonial */}
              {clientData.testimonial && (
                <div className="minimal-card p-6 rounded-3xl">
                  <div className="flex items-center mb-4">
                    <Users className="w-5 h-5 text-primary mr-2" />
                    <h3 className="text-lg font-semibold text-foreground">
                      Client Testimonial
                    </h3>
                  </div>
                  <blockquote className="text-lg text-foreground font-medium mb-4 italic">
                    "{clientData.testimonial.quote}"
                  </blockquote>
                  <cite className="text-sm text-muted-foreground font-medium block text-right">
                    — {clientData.testimonial.author}
                  </cite>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientDetails;
