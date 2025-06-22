import {
  Globe,
  Smartphone,
  ShoppingCart,
  Search,
  BarChart3,
  Shield,
  Target,
  Lightbulb,
  Rocket,
  Heart,
  LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: LucideIcon;
  features: string[];
  benefits: string[];
  technologies: string[];
  process: {
    step: string;
    description: string;
  }[];
  pricing: {
    basic: string;
    premium: string;
    enterprise: string;
  };
  deliverables: string[];
  timeline: string;
  category: "development" | "marketing" | "design" | "strategy";
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
  service: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "development",
    title: "Development",
    description:
      "Custom web & mobile applications built with cutting-edge technology",
    icon: Globe,
    color: "from-primary to-secondary",
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    description: "Strategic campaigns that drive growth and maximize ROI",
    icon: Target,
    color: "from-secondary to-accent",
  },
  {
    id: "design",
    title: "Design & UX",
    description:
      "Beautiful, user-centered designs that convert visitors to customers",
    icon: Lightbulb,
    color: "from-accent to-primary",
  },
  {
    id: "strategy",
    title: "Business Strategy",
    description:
      "Data-driven strategies that accelerate your digital transformation",
    icon: BarChart3,
    color: "from-primary/80 to-secondary/80",
  },
];

export const services: Service[] = [
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    shortDescription:
      "Multi-channel marketing campaigns that drive growth and maximize ROI",
    fullDescription:
      "Accelerate your business growth with our comprehensive digital marketing services. From social media to PPC advertising, we create campaigns that deliver measurable results.",
    icon: BarChart3,
    features: [
      "Social Media Marketing",
      "PPC Advertising",
      "Email Marketing",
      "Content Marketing",
      "Conversion Optimization",
      "Marketing Automation",
    ],
    benefits: [
      "Increased brand awareness",
      "Higher quality leads",
      "Better ROI",
      "Improved customer retention",
      "Data-driven decisions",
      "Scalable growth",
    ],
    technologies: [
      "Google Ads",
      "Facebook Ads",
      "HubSpot",
      "Mailchimp",
      "Hootsuite",
      "Unbounce",
      "Hotjar",
    ],
    process: [
      {
        step: "Research",
        description: "Market research and audience analysis",
      },
      {
        step: "Strategy",
        description: "Multi-channel marketing strategy development",
      },
      {
        step: "Execution",
        description: "Campaign creation and implementation",
      },
      {
        step: "Optimization",
        description: "Continuous testing and optimization",
      },
    ],
    pricing: {
      basic: "$2,000 - $5,000/month",
      premium: "$5,000 - $15,000/month",
      enterprise: "$15,000+/month",
    },
    deliverables: [
      "Marketing strategy document",
      "Campaign assets and creatives",
      "Landing page optimization",
      "Monthly performance reports",
      "Ongoing strategy refinement",
    ],
    timeline: "Ongoing monthly service",
    category: "marketing",
  },
  {
    id: "web-development",
    title: "Web Development",
    shortDescription:
      "Custom web applications built with modern frameworks and best practices",
    fullDescription:
      "We create scalable, secure, and high-performance web applications tailored to your business needs. Our team uses the latest technologies and follows industry best practices to deliver exceptional digital experiences.",
    icon: Globe,
    features: [
      "Responsive Design",
      "Progressive Web Apps",
      "API Integration",
      "Performance Optimization",
      "SEO Friendly",
      "Security Implementation",
    ],
    benefits: [
      "Increased user engagement",
      "Better search rankings",
      "Faster loading times",
      "Enhanced security",
      "Mobile-first approach",
      "Scalable architecture",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "AWS",
      "Docker",
    ],
    process: [
      {
        step: "Discovery",
        description: "Understanding your requirements and business goals",
      },
      {
        step: "Planning",
        description:
          "Creating detailed project roadmap and technical specifications",
      },
      {
        step: "Development",
        description:
          "Building your application with regular updates and testing",
      },
      {
        step: "Launch",
        description: "Deploying to production with monitoring and support",
      },
    ],
    pricing: {
      basic: "$5,000 - $15,000",
      premium: "$15,000 - $50,000",
      enterprise: "$50,000+",
    },
    deliverables: [
      "Fully functional web application",
      "Source code and documentation",
      "Deployment setup",
      "3 months support",
      "Training materials",
    ],
    timeline: "6-16 weeks",
    category: "development",
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    shortDescription:
      "Native and cross-platform mobile apps for iOS and Android",
    fullDescription:
      "Transform your ideas into powerful mobile applications. We develop native iOS and Android apps, as well as cross-platform solutions that provide seamless user experiences across all devices.",
    icon: Smartphone,
    features: [
      "Native iOS & Android",
      "Cross-platform Solutions",
      "App Store Optimization",
      "Push Notifications",
      "Offline Functionality",
      "Analytics Integration",
    ],
    benefits: [
      "Reach mobile audiences",
      "Improve customer engagement",
      "Increase brand visibility",
      "Generate additional revenue",
      "Better user experience",
      "Real-time communication",
    ],
    technologies: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Firebase",
      "Redux",
      "GraphQL",
      "REST APIs",
    ],
    process: [
      {
        step: "Concept",
        description: "Defining app concept and user journey mapping",
      },
      {
        step: "Design",
        description: "Creating wireframes and interactive prototypes",
      },
      {
        step: "Development",
        description: "Building the app with iterative testing",
      },
      {
        step: "Store Launch",
        description: "Publishing to App Store and Google Play",
      },
    ],
    pricing: {
      basic: "$10,000 - $25,000",
      premium: "$25,000 - $75,000",
      enterprise: "$75,000+",
    },
    deliverables: [
      "Published mobile application",
      "App store listing optimization",
      "Analytics dashboard setup",
      "User manual and documentation",
      "6 months support",
    ],
    timeline: "10-20 weeks",
    category: "development",
  },
  {
    id: "ecommerce-solutions",
    title: "E-commerce Solutions",
    shortDescription:
      "Complete online stores with payment processing and inventory management",
    fullDescription:
      "Build a powerful online presence with our comprehensive e-commerce solutions. From custom shopping platforms to marketplace integrations, we help you sell more effectively online.",
    icon: ShoppingCart,
    features: [
      "Custom Shopping Cart",
      "Payment Gateway Integration",
      "Inventory Management",
      "Order Tracking",
      "Multi-vendor Support",
      "Analytics Dashboard",
    ],
    benefits: [
      "Increase online sales",
      "Automate order processing",
      "Better inventory control",
      "Improved customer experience",
      "Multi-channel selling",
      "Data-driven insights",
    ],
    technologies: [
      "Shopify",
      "WooCommerce",
      "Magento",
      "Stripe",
      "PayPal",
      "Klaviyo",
      "Google Analytics",
    ],
    process: [
      {
        step: "Setup",
        description: "Platform selection and initial configuration",
      },
      {
        step: "Customization",
        description: "Design and functionality customization",
      },
      {
        step: "Integration",
        description: "Payment, shipping, and third-party integrations",
      },
      {
        step: "Go Live",
        description: "Launch with training and ongoing support",
      },
    ],
    pricing: {
      basic: "$3,000 - $10,000",
      premium: "$10,000 - $30,000",
      enterprise: "$30,000+",
    },
    deliverables: [
      "Fully functional e-commerce store",
      "Payment gateway setup",
      "Inventory management system",
      "Order fulfillment integration",
      "Training and documentation",
    ],
    timeline: "4-12 weeks",
    category: "development",
  },
  {
    id: "seo-optimization",
    title: "SEO Optimization",
    shortDescription:
      "Comprehensive SEO strategies to improve search rankings and organic traffic",
    fullDescription:
      "Dominate search results with our proven SEO strategies. We optimize your website for better visibility, higher rankings, and increased organic traffic that converts.",
    icon: Search,
    features: [
      "Keyword Research",
      "On-page Optimization",
      "Technical SEO",
      "Content Strategy",
      "Link Building",
      "Performance Tracking",
    ],
    benefits: [
      "Higher search rankings",
      "Increased organic traffic",
      "Better user experience",
      "Higher conversion rates",
      "Long-term growth",
      "Cost-effective marketing",
    ],
    technologies: [
      "Google Analytics",
      "Search Console",
      "SEMrush",
      "Ahrefs",
      "Screaming Frog",
      "GTM",
    ],
    process: [
      {
        step: "Audit",
        description: "Comprehensive SEO audit and competitor analysis",
      },
      {
        step: "Strategy",
        description: "Custom SEO strategy and keyword targeting",
      },
      {
        step: "Implementation",
        description: "On-page optimization and content creation",
      },
      {
        step: "Monitoring",
        description: "Continuous monitoring and optimization",
      },
    ],
    pricing: {
      basic: "$1,500 - $3,000/month",
      premium: "$3,000 - $8,000/month",
      enterprise: "$8,000+/month",
    },
    deliverables: [
      "SEO audit report",
      "Keyword research document",
      "Optimized website content",
      "Monthly performance reports",
      "Ongoing recommendations",
    ],
    timeline: "3-6 months to see results",
    category: "marketing",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Solutions",
    shortDescription:
      "Protect your business with comprehensive security audits and implementation",
    fullDescription:
      "Safeguard your digital assets with our cybersecurity expertise. We provide comprehensive security assessments, implementation, and ongoing monitoring to protect your business.",
    icon: Shield,
    features: [
      "Security Audits",
      "Vulnerability Assessment",
      "Penetration Testing",
      "Security Training",
      "Compliance Management",
      "Incident Response",
    ],
    benefits: [
      "Reduced security risks",
      "Compliance assurance",
      "Business continuity",
      "Customer trust",
      "Data protection",
      "Peace of mind",
    ],
    technologies: [
      "OWASP",
      "Nessus",
      "Metasploit",
      "Wireshark",
      "Burp Suite",
      "SIEM",
      "Firewalls",
    ],
    process: [
      {
        step: "Assessment",
        description: "Comprehensive security assessment and risk analysis",
      },
      {
        step: "Planning",
        description: "Security strategy and implementation roadmap",
      },
      {
        step: "Implementation",
        description: "Security controls and monitoring setup",
      },
      {
        step: "Monitoring",
        description: "Continuous monitoring and incident response",
      },
    ],
    pricing: {
      basic: "$5,000 - $15,000",
      premium: "$15,000 - $50,000",
      enterprise: "$50,000+",
    },
    deliverables: [
      "Security assessment report",
      "Risk mitigation plan",
      "Security policy documentation",
      "Staff training materials",
      "Ongoing monitoring setup",
    ],
    timeline: "4-8 weeks",
    category: "strategy",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Planning",
    description:
      "We start by understanding your business goals, target audience, and project requirements through detailed consultation and research.",
    icon: Search,
  },
  {
    step: "02",
    title: "Strategy & Design",
    description:
      "Our team creates a comprehensive strategy and design mockups that align with your brand and user experience goals.",
    icon: Lightbulb,
  },
  {
    step: "03",
    title: "Development & Testing",
    description:
      "We build your solution using best practices, with regular testing and quality assurance throughout the process.",
    icon: Rocket,
  },
  {
    step: "04",
    title: "Launch & Support",
    description:
      "After successful launch, we provide ongoing support, monitoring, and optimization to ensure continued success.",
    icon: Heart,
  },
];

export const serviceTestimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    role: "CEO",
    content:
      "AdGrades transformed our outdated website into a modern, high-performing platform. Our conversions increased by 150% in just 3 months!",
    rating: 5,
    avatar: "/avatars/sarah.jpg",
    service: "Web Development",
  },
  {
    name: "Michael Chen",
    company: "RetailPlus",
    role: "Marketing Director",
    content:
      "Their digital marketing expertise helped us reach new audiences and grow our online sales by 200%. Exceptional results and service!",
    rating: 5,
    avatar: "/avatars/michael.jpg",
    service: "Digital Marketing",
  },
  {
    name: "Emma Davis",
    company: "FinanceFlow",
    role: "CTO",
    content:
      "The mobile app they developed for us has received outstanding user reviews. The team's attention to detail and technical expertise is impressive.",
    rating: 5,
    avatar: "/avatars/emma.jpg",
    service: "Mobile Development",
  },
];

export const serviceFAQs: FAQ[] = [
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on scope and complexity. Web development projects typically take 6-16 weeks, while marketing campaigns are ongoing monthly services. We provide detailed timelines during the consultation phase.",
    category: "General",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes! We offer various support packages including maintenance, updates, and technical support. Most projects include 3-6 months of initial support, with extended support available.",
    category: "Support",
  },
  {
    question: "Can you work with our existing team?",
    answer:
      "Absolutely! We often collaborate with in-house teams and can integrate seamlessly into your existing workflows. We're flexible in our approach to match your needs.",
    category: "Collaboration",
  },
  {
    question: "What's included in your pricing?",
    answer:
      "Our pricing includes all development work, testing, documentation, and initial support. We provide transparent pricing with no hidden fees. Additional services like hosting or third-party integrations are clearly outlined.",
    category: "Pricing",
  },
  {
    question: "Do you sign NDAs and ensure data security?",
    answer:
      "Yes, we take confidentiality and security very seriously. We're happy to sign NDAs and follow strict security protocols to protect your sensitive information and intellectual property.",
    category: "Security",
  },
];

export const serviceStats = [
  {
    number: 500,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    number: 98,
    suffix: "%",
    label: "Client Satisfaction",
  },
  {
    number: 24,
    suffix: "/7",
    label: "Support Available",
  },
  {
    number: 50,
    suffix: "+",
    label: "Team Experts",
  },
];
