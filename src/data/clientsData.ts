// Client data shared between Portfolio and ClientDetails components

interface ClientData {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  logo: string;
  tags: string[];
  duration: string;
  services: string[];
  fullDescription?: string;
  year?: string;
  results?: {
    metric: string;
    value: string;
    description: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
  };
}

interface ProjectData {
  id: number;
  title: string;
  category: string;
  client: string;
  challenge: string;
  solution: string;
  result: string;
  image: string;
  tags: string[];
}

// Combined data that adds required fields for both Portfolio and ClientDetails views
export const clientsData: ClientData[] = [
  {
    id: "os-code-solutions",
    name: "OS CODE Solutions",
    category: "IT Solutions",
    description:
      "Emerging IT solutions startup - Social Media Management & Lead Generation",
    logo: "./client/oscode.png",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?w=400&h=300&fit=crop",
    tags: ["Social Media Management", "Lead Generation", "4 months"],
    duration: "4 months",
    services: [
      "Brand Identity Design",
      "Social Media Marketing",
      "Web Development",
    ],
    fullDescription:
      "OS CODE Solutions is an innovative IT solutions startup focused on providing cutting-edge technology services to businesses. We helped them establish their digital presence and build a strong brand identity in the competitive tech market.",
    year: "2024",
    results: [
      {
        metric: "Brand Recognition",
        value: "150%",
        description: "increase in brand awareness",
      },
      {
        metric: "Website Traffic",
        value: "200%",
        description: "growth in organic traffic",
      },
      {
        metric: "Social Engagement",
        value: "300%",
        description: "increase in social media engagement",
      },
    ],
    testimonial: {
      quote:
        "AdGrades transformed our digital presence completely. Their creative approach and technical expertise helped us stand out in the competitive IT market.",
      author: "Founder, OS CODE Solutions",
    },
  },
  {
    id: "delhi-65",
    name: "Delhi 65 – Ranchi Restaurant",
    category: "Food & Beverage",
    description:
      "Restaurant marketing with targeted ad campaigns and social media management",
    logo: "./client/delhi65.png",
    image:
      "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?w=400&h=300&fit=crop",
    tags: ["Targeted Ad Campaigns", "Social Media Management", "3 months"],
    duration: "3 months",
    services: [
      "Social Media Marketing",
      "Performance Advertising",
      "Brand Photography",
    ],
    fullDescription:
      "Delhi 65 is a popular restaurant in Ranchi known for its authentic North Indian cuisine. We helped them enhance their digital marketing strategy and increase their customer base through targeted social media campaigns.",
    year: "2024",
    results: [
      {
        metric: "Footfall",
        value: "180%",
        description: "increase in restaurant visitors",
      },
      {
        metric: "Online Orders",
        value: "250%",
        description: "growth in delivery orders",
      },
      {
        metric: "Social Following",
        value: "400%",
        description: "increase in Instagram followers",
      },
    ],
    testimonial: {
      quote:
        "Our restaurant's popularity soared after partnering with AdGrades. Their social media campaigns brought in so many new customers!",
      author: "Owner, Delhi 65",
    },
  },
  {
    id: "medhavi-classes",
    name: "Medhavi Classes",
    category: "Education",
    description:
      "Online education platform with comprehensive digital marketing strategy",
    logo: "./client/medhavi.png",
    image:
      "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?w=400&h=300&fit=crop",
    tags: ["Social Media Management", "Lead Generation", "6 months"],
    duration: "6 months",
    services: ["Digital Marketing", "Student Acquisition", "Content Strategy"],
    fullDescription:
      "Medhavi Classes is a leading online education platform providing quality coaching for competitive exams. We helped them expand their digital reach and improve student engagement through comprehensive digital marketing strategies.",
    year: "2023",
    results: [
      {
        metric: "Student Enrollments",
        value: "400%",
        description: "increase in new students",
      },
      {
        metric: "Social Following",
        value: "250%",
        description: "growth in social media presence",
      },
      {
        metric: "Engagement Rate",
        value: "300%",
        description: "increase in student interaction",
      },
    ],
    testimonial: {
      quote:
        "AdGrades' marketing strategies helped us reach more students than ever before. Our enrollments quadrupled within months!",
      author: "Director, Medhavi Classes",
    },
  },
  {
    id: "uplifto",
    name: "Uplifto",
    category: "IT Services",
    description:
      "Tech-based startup for IT services with lead generation focus",
    logo: "./client/upliftio.png",
    image:
      "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?w=400&h=300&fit=crop",
    tags: ["Lead Generation", "Social Media Management", "4 months"],
    duration: "4 months",
    services: ["Lead Generation", "Social Media Management", "B2B Marketing"],
    fullDescription:
      "Uplifto is an innovative tech startup providing IT solutions to businesses. We developed targeted lead generation strategies to help them connect with potential clients and establish their presence in the B2B market.",
    year: "2024",
    results: [
      {
        metric: "B2B Leads",
        value: "300%",
        description: "increase in qualified leads",
      },
      {
        metric: "Conversion Rate",
        value: "200%",
        description: "improvement in lead-to-client conversions",
      },
      {
        metric: "Market Presence",
        value: "350%",
        description: "expansion in brand recognition",
      },
    ],
    testimonial: {
      quote:
        "The lead generation campaigns designed by AdGrades transformed our business development approach and brought us high-value clients.",
      author: "CEO, Uplifto",
    },
  },
  {
    id: "vinayaka-enterprises",
    name: "Vinayaka Enterprises",
    category: "Interior Design",
    description:
      "Interior Design Studio with comprehensive business development",
    logo: "./client/vinayaka.jpg",
    image:
      "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?w=400&h=300&fit=crop",
    tags: [
      "Website Development",
      "Business Strategy",
      "Social Media Management",
    ],
    duration: "5 months",
    services: [
      "Website Development",
      "Business Strategy",
      "Social Media Management",
      "Business Development",
    ],
    fullDescription:
      "Vinayaka Enterprises is a leading interior design studio focusing on residential and commercial projects. We built their complete online presence and implemented strategic business development initiatives to help them attract high-value clients.",
    year: "2023",
    results: [
      {
        metric: "Project Inquiries",
        value: "250%",
        description: "increase in qualified leads",
      },
      {
        metric: "Online Presence",
        value: "400%",
        description: "growth in digital visibility",
      },
      {
        metric: "Client Value",
        value: "200%",
        description: "increase in average project value",
      },
    ],
    testimonial: {
      quote:
        "AdGrades transformed our business approach. Their strategic guidance and digital marketing expertise helped us attract premium clients and grow our studio.",
      author: "Founder, Vinayaka Enterprises",
    },
  },
  {
    id: "mk-streetwear",
    name: "M K Streetwear",
    category: "Fashion",
    description: "Streetwear Fashion Brand with complete brand development",
    logo: "./client/mk.png",
    image:
      "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?w=400&h=300&fit=crop",
    tags: ["Brand Strategy", "Website Development", "Social Media Management"],
    duration: "6 months",
    services: [
      "Brand Strategy Development",
      "Social Media Management",
      "Website Development",
      "Business Development",
    ],
    fullDescription:
      "M K Streetwear is an emerging fashion brand focusing on urban streetwear. We developed their complete brand identity, e-commerce website, and social media strategy to establish them in the competitive fashion market.",
    year: "2024",
    results: [
      {
        metric: "Online Sales",
        value: "500%",
        description: "increase in e-commerce transactions",
      },
      {
        metric: "Social Following",
        value: "400%",
        description: "growth in Instagram audience",
      },
      {
        metric: "Brand Recognition",
        value: "350%",
        description: "improvement in brand awareness",
      },
    ],
    testimonial: {
      quote:
        "AdGrades understood our vision perfectly. Their brand strategy and social media approach helped us stand out in the crowded fashion market and reach our target audience effectively.",
      author: "Founder, M K Streetwear",
    },
  },
  {
    id: "adhyayan",
    name: "Adhyayan",
    category: "Education",
    description: "Online Coaching Institute with social media focus",
    logo: "./client/aadhyan.jpg",
    image:
      "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?w=400&h=300&fit=crop",
    tags: ["Social Media Management", "Education Marketing"],
    duration: "3 months",
    services: [
      "Social Media Management",
      "Content Marketing",
      "Student Acquisition",
    ],
    fullDescription:
      "Adhyayan is an online coaching institute providing specialized education for competitive exams. We developed their social media presence to help them reach more students and establish credibility in the education sector.",
    year: "2024",
    results: [
      {
        metric: "Student Inquiries",
        value: "250%",
        description: "increase in student leads",
      },
      {
        metric: "Content Engagement",
        value: "300%",
        description: "growth in educational content reach",
      },
      {
        metric: "Brand Authority",
        value: "200%",
        description: "improvement in market perception",
      },
    ],
    testimonial: {
      quote:
        "The social media strategy developed by AdGrades helped us connect with students in a meaningful way. Our enrollment numbers have seen tremendous growth.",
      author: "Director, Adhyayan",
    },
  },
  {
    id: "dew-drop-homestay",
    name: "Dew Drop Homestay",
    category: "Hospitality",
    description: "Premium Hilltop Stay with comprehensive digital presence",
    logo: "./client/dewdrop.png",
    image:
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?w=400&h=300&fit=crop",
    tags: [
      "Website Development",
      "Social Media Management",
      "Business Development",
    ],
    duration: "4 months",
    services: [
      "Website Development",
      "Social Media Management",
      "Business Development",
      "Travel Marketing",
    ],
    fullDescription:
      "Dew Drop Homestay is a premium hospitality property located in a scenic hilltop destination. We developed their complete digital presence including website, booking system, and social media strategy to attract tourists and travel enthusiasts.",
    year: "2023",
    results: [
      {
        metric: "Bookings",
        value: "300%",
        description: "increase in direct reservations",
      },
      {
        metric: "Online Visibility",
        value: "400%",
        description: "growth in travel platform presence",
      },
      {
        metric: "Customer Reviews",
        value: "250%",
        description: "increase in positive feedback",
      },
    ],
    testimonial: {
      quote:
        "AdGrades helped us transform from a local homestay to a sought-after destination. Their comprehensive digital approach brought us guests from across the country.",
      author: "Owner, Dew Drop Homestay",
    },
  },
  {
    id: "nataraj-dance-studios",
    name: "Nataraj Dance Studios",
    category: "Entertainment",
    description: "Dance training academy with social media marketing",
    logo: "./client/nataraj.png",
    image:
      "https://media.istockphoto.com/id/1371152823/photo/natraj-images-god-shiva-as-nataraj.jpg?b=1&s=612x612&w=0&k=20&c=J_33eBtYQwYcCDSWyO-zmdUJk4TsFiqbLmLYP85dbLY=",
    tags: ["Social Media Management", "Creative Marketing"],
    duration: "4 months",
    services: [
      "Social Media Marketing",
      "Event Promotion",
      "Video Content Creation",
    ],
    fullDescription:
      "Nataraj Dance Studios is a premier dance academy specializing in classical and contemporary dance forms. We developed their social media presence and video content strategy to showcase their expertise and attract dance enthusiasts.",
    year: "2024",
    results: [
      {
        metric: "Student Enrollments",
        value: "200%",
        description: "increase in new dance students",
      },
      {
        metric: "Event Attendance",
        value: "180%",
        description: "increase in workshop attendance",
      },
      {
        metric: "Video Engagement",
        value: "350%",
        description: "growth in dance content views",
      },
    ],
    testimonial: {
      quote:
        "AdGrades helped us showcase our passion for dance beautifully. Their video content and social media strategy brought us many talented students.",
      author: "Founder, Nataraj Dance Studios",
    },
  },
  {
    id: "pureblend-foods",
    name: "Pureblend Foods",
    category: "Food & Beverage",
    description: "B2B Food Supply Chain Brand with comprehensive strategy",
    logo: "./client/pureblend.jpg",
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?w=400&h=300&fit=crop",
    tags: ["Business Strategy", "Website Development", "Lead Generation"],
    duration: "6 months",
    services: [
      "B2B Marketing",
      "Website Development",
      "Content Strategy",
      "Lead Generation",
    ],
    fullDescription:
      "Pureblend Foods is a B2B food supply chain brand providing quality ingredients to restaurants and food businesses. We helped them establish their brand credibility and expand their client base through targeted B2B marketing.",
    year: "2023-2024",
    results: [
      {
        metric: "B2B Clients",
        value: "250%",
        description: "increase in business clients",
      },
      {
        metric: "Supply Volume",
        value: "300%",
        description: "growth in supply orders",
      },
      {
        metric: "Market Reach",
        value: "200%",
        description: "expansion in market coverage",
      },
    ],
    testimonial: {
      quote:
        "AdGrades understood our B2B needs perfectly. Their marketing strategies helped us connect with the right business clients and grow our supply network.",
      author: "Director, Pureblend Foods",
    },
  },
  {
    id: "as-tech-industries",
    name: "AS Tech Industries",
    category: "Engineering",
    description:
      "Engineering and Manufacturing Services with digital transformation",
    logo: "./client/asti.png",
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?w=400&h=300&fit=crop",
    tags: ["Business Strategy", "Website Development", "Lead Generation"],
    duration: "7 months",
    services: [
      "Technical Marketing",
      "Website Development",
      "Content Strategy",
      "Industry Networking",
    ],
    fullDescription:
      "AS Tech Industries provides comprehensive engineering and manufacturing services to various industries. We helped them establish their technical expertise and attract high-value industrial clients through strategic digital marketing.",
    year: "2023-2024",
    results: [
      {
        metric: "Industrial Projects",
        value: "200%",
        description: "increase in project contracts",
      },
      {
        metric: "Technical Credibility",
        value: "250%",
        description: "growth in industry recognition",
      },
      {
        metric: "Client Retention",
        value: "180%",
        description: "improvement in client loyalty",
      },
    ],
    testimonial: {
      quote:
        "AdGrades helped us communicate our technical expertise effectively. Their marketing strategies positioned us as industry leaders and brought us major contracts.",
      author: "Director, AS Tech Industries",
    },
  },
  {
    id: "sp-enterprises",
    name: "SP Enterprises",
    category: "Engineering",
    description:
      "Heavy Earthmoving Equipment & Spares with complete digital strategy",
    logo: "./client/splogo.png",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?w=400&h=300&fit=crop",
    tags: ["Business Strategy", "Website Development", "Lead Generation"],
    duration: "5 months",
    services: [
      "Industrial Marketing",
      "Website Development",
      "B2B Lead Generation",
      "Content Strategy",
    ],
    fullDescription:
      "SP Enterprises specializes in heavy earthmoving equipment and spare parts supply. We helped them establish a strong digital presence in the industrial equipment market through comprehensive digital marketing.",
    year: "2024",
    results: [
      {
        metric: "Industrial Clients",
        value: "180%",
        description: "increase in equipment buyers",
      },
      {
        metric: "Inquiry Volume",
        value: "220%",
        description: "growth in business inquiries",
      },
      {
        metric: "Sales Revenue",
        value: "200%",
        description: "increase in equipment sales",
      },
    ],
    testimonial: {
      quote:
        "AdGrades helped us modernize our industrial business. Their digital marketing approach brought us serious buyers and increased our equipment sales significantly.",
      author: "Owner, SP Enterprises",
    },
  },
];

// Projects/case studies data
export const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "OS CODE Solutions Digital Growth",
    category: "Digital Marketing",
    client: "OS CODE Solutions",
    challenge:
      "Emerging IT startup needed to establish digital presence and generate quality leads",
    solution:
      "Implemented comprehensive social media strategy with targeted lead generation campaigns",
    result:
      "Generated 150+ qualified leads and increased brand awareness by 300% in 4 months",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?w=800&h=600&fit=crop",
    tags: [
      "Social Media Management",
      "Lead Generation",
      "IT Services",
      "Startup Growth",
    ],
  },
  {
    id: 2,
    title: "Delhi 65 Restaurant Marketing",
    category: "Digital Marketing",
    client: "Delhi 65 – Ranchi Restaurant",
    challenge:
      "Local restaurant needed to increase footfall and online orders in competitive market",
    solution:
      "Ran targeted ad campaigns focusing on local audience with engaging social media content",
    result:
      "200% increase in online orders and 150% growth in social media engagement in 3 months",
    image:
      "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?w=800&h=600&fit=crop",
    tags: [
      "Targeted Advertising",
      "Social Media",
      "Restaurant Marketing",
      "Local SEO",
    ],
  },
  {
    id: 3,
    title: "Medhavi Classes Student Acquisition",
    category: "Education",
    client: "Medhavi Classes",
    challenge:
      "Online education platform needed to scale student enrollment and engagement",
    solution:
      "Developed comprehensive social media strategy with lead generation funnels",
    result:
      "400% increase in student enrollments and 250% boost in social media following over 6 months",
    image:
      "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?w=800&h=600&fit=crop",
    tags: [
      "Education Marketing",
      "Lead Generation",
      "Social Media",
      "Student Acquisition",
    ],
  },
  {
    id: 4,
    title: "Uplifto Tech Services Growth",
    category: "Digital Marketing",
    client: "Uplifto",
    challenge:
      "Tech startup needed to establish market presence and generate B2B leads",
    solution:
      "Implemented targeted lead generation campaigns with strategic social media positioning",
    result:
      "300% increase in qualified B2B leads and established strong industry presence in 4 months",
    image:
      "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?w=800&h=600&fit=crop",
    tags: ["B2B Marketing", "Lead Generation", "Tech Services", "Social Media"],
  },
  {
    id: 5,
    title: "Vinayaka Enterprises Digital Transformation",
    category: "Interior Design",
    client: "Vinayaka Enterprises",
    challenge:
      "Interior design studio needed complete digital presence and business strategy",
    solution:
      "Built custom website, developed business strategy, and implemented social media marketing",
    result:
      "Established strong online presence, increased project inquiries by 250%, and streamlined business operations",
    image:
      "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?w=800&h=600&fit=crop",
    tags: [
      "Website Development",
      "Business Strategy",
      "Interior Design",
      "Social Media",
    ],
  },
  {
    id: 6,
    title: "M K Streetwear Brand Development",
    category: "Fashion",
    client: "M K Streetwear",
    challenge:
      "Fashion brand needed complete brand strategy and digital presence",
    solution:
      "Developed comprehensive brand strategy, built e-commerce website, and managed social media",
    result:
      "500% increase in online sales, established strong brand identity, and grew social media following by 400%",
    image:
      "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?w=800&h=600&fit=crop",
    tags: ["Brand Identity", "E-commerce", "Fashion Marketing", "Social Media"],
  },
];

// Helper function to convert client name to ID format
export const getClientId = (clientName: string): string => {
  const clientIdMap: Record<string, string> = {
    "OS CODE Solutions": "os-code-solutions",
    "Delhi 65 – Ranchi Restaurant": "delhi-65",
    "Medhavi Classes": "medhavi-classes",
    Uplifto: "uplifto",
    "Vinayaka Enterprises": "vinayaka-enterprises",
    "M K Streetwear": "mk-streetwear",
    Adhyayan: "adhyayan",
    "Dew Drop Homestay": "dew-drop-homestay",
    "Nataraj Dance Studios": "nataraj-dance-studios",
    "Pureblend Foods": "pureblend-foods",
    "AS Tech Industries": "as-tech-industries",
    "SP Enterprises": "sp-enterprises",
  };

  return (
    clientIdMap[clientName] || clientName.toLowerCase().replace(/\s+/g, "-")
  );
};
