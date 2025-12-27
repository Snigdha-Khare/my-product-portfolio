import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Instagram, Download, Calendar, MapPin, Code2, Target, Users, TrendingUp, Award, GraduationCap, X } from 'lucide-react';

// Personal Information
const personalInfo = {
  name: "Snigdha Khare",
  title: "AI Product Manager",
  tagline: "BUILDING THE FUTURE OF AI, ONE PRODUCT AT A TIME",
  subtitle: "Currently scaling 0 → 1 products at Coinbase",
  email: "kharesnig07@gmail.com",
  phone: "+91 7812992893",
  linkedin: "https://www.linkedin.com/in/snigdha-khare07/",
  instagram: "https://www.instagram.com/_sniggysideup_?igsh=dW1nc3F4bGVyNHcy&utm_source=qr",
  resumeLink: "https://drive.google.com/file/d/1aii3_mML8CpTqbCyePSMVct5Ow3d8xzt/view?usp=sharing",
  profileImage: `${process.env.PUBLIC_URL}/profile-photo.jpg`,
  bio: "I'm an AI Product Manager with 4+ years of experience building and scaling LLM-powered platforms from conception to launch. Currently at Coinbase, I own the end-to-end product lifecycle for AI solutions that improve operational efficiency and user experience.",
  location: "Bengaluru, India"
};

// Hobbies & Interests
const hobbies = [
  {
    id: 1,
    name: "Reading",
    icon: "📚",
    description: "Getting lost in books, from fiction to behavioral psychology",
    mediaType: "photo-gallery",
    photos: [
      `${process.env.PUBLIC_URL}/hobbies/photo2.jpg`,
      `${process.env.PUBLIC_URL}/hobbies/photo3.jpg`,
    ],
    hasRecommendations: true,
    recommendations: [
      { title: "The Mom Test", author: "Rob Fitzpatrick", reason: "Must-read for product managers doing user research", category: "PM" },
      { title: "Build", author: "Tony Fadell", reason: "Insights from building iconic products at Apple and Nest", category: "PM" },
      { title: "Measure What Matters", author: "John Doerr", reason: "Essential guide to OKRs and goal-setting", category: "PM" },
      { title: "The Liberation of Sita", author: "Volga", reason: "A powerful retelling of mythology from Sita's perspective", category: "Mythology" },
      { title: "The Murder of Roger Ackroyd", author: "Agatha Christie", reason: "Masterfully crafted mystery with an unforgettable twist", category: "Murder Mystery" },
      { title: "Tumhare Bare Mei", author: "Suraj Yengde", reason: "Beautifully written contemporary Hindi fiction", category: "Hindi Fiction" },
      { title: "The Kite Runner", author: "Khaled Hosseini", reason: "Deeply moving story of friendship and redemption", category: "Fiction" },
    ]
  },
  {
    id: 2,
    name: "Dancing",
    icon: "💃",
    description: "Expressing creativity through movement and rhythm",
    mediaType: "instagram",
    hasRecommendations: false,
    instagramPosts: [
      "https://www.instagram.com/reel/DRBqTQLD18q/",
      "https://www.instagram.com/reel/DOpuiMxD1aM/",
      "https://www.instagram.com/reel/DNxuKH2Xj1X/",
      "https://www.instagram.com/reel/DJw7pl5zM4b/",
    ]
  }
];

// Work Experience
const workExperience = [
  {
    id: 1,
    company: "Coinbase",
    role: "AI Product Manager",
    duration: "Dec 2024 - Present",
    location: "Bengaluru, India",
    type: "full-time",
    logoUrl: "https://placehold.co/60x60/0052FF/FFFFFF?text=CB",
    team: "AI Platform",
    scopeOfWork: "Driving the strategic roadmap to make Coinbase \"AI Native by 2027.\" I oversee the product scope of the GenAI platform that empowers engineering teams to build scalable agentic solutions, and design custom workflows for business units to accelerate AI adoption for non-technical teams. I own the full product lifecycle—from PRDs and model evaluation frameworks to security partnerships—creating tight feedback loops that bridge deep technical infrastructure with immediate business value.",
    achievements: [
      "Enterprise Infrastructure: Built and scaled \"Coinbase-GPT,\" an internal LLM gateway adopted by 70% of FTEs, serving as the secure foundation for hosting public and private models.",
      "Operational Velocity: Engineered a token discovery platform that slashed listing time by 96%, replacing manual due diligence with auditable, AI-driven controls.",
      "High-Impact Automation: Deployed an Employee Assistant that automates 81% of HR inquiries (saving ~470 hours/month) and a multi-agent Executive Assistant that hit 45% adoption in Month 1.",
      "Security & Risk: Launched LLM triage for phishing detection, reducing takedown time by 60% and reclaiming 1,000+ hours/month for the security team.",
      "Culture & Enablement: Hosted company-wide \"AI Speed Runs,\" upskilling non-tech functions on tools like Cursor, n8n, and LibreChat to drive grassroots innovation."
    ]
  },
  {
    id: 2,
    company: "Revolut",
    role: "Product Strategy and Operations Manager",
    duration: "Jun 2022 - Dec 2024",
    location: "Bengaluru, India", 
    type: "full-time",
    logoUrl: "https://placehold.co/60x60/0075FF/FFFFFF?text=R",
    team: "Core Operations and Money Health",
    scopeOfWork: "Led product strategy and operational excellence for the money management products, scaling features across 17+ international markets. Orchestrated the development lifecycle, from optimizing engineering workflows and platform performance to driving user acquisition campaigns ensuring financial clarity for millions of users while maximizing delivery velocity.",
    achievements: [
      "Global Growth: Strategically drove a 2.6x increase in Monthly Active Users (MAU) across 17 countries in 100 days; engaged 9M+ users with the \"RevReview\" campaign, achieving a 10% conversion rate.",
      "User Experience: Boosted Net Promoter Score (NPS) by 20% and reduced categorization complaints by 30% through targeted roadmap planning and A/B testing.",
      "Operational Efficiency: Streamlined engineering measurement processes (deployment time, bug resolution), resulting in a 25% increase in delivery efficiency.",
      "Research Ops: Doubled user participation in UX interviews by implementing a streamlined recruitment and rewards system."
    ]
  },
  {
    id: 3,
    company: "Nomura",
    role: "Investment Analyst Intern",
    duration: "Jan 2022 - Jun 2022",
    location: "Mumbai, India",
    type: "internship",
    logoUrl: "https://placehold.co/60x60/1B365D/FFFFFF?text=N",
    achievements: [
      "Conducted impact and competitive evaluation for 20+ pension funds, informed risk posture and strategy"
    ]
  },
  {
    id: 4,
    company: "Namekart",
    role: "Product Analyst Intern", 
    duration: "May 2021 - Jul 2021",
    location: "Noida, India",
    type: "internship",
    logoUrl: "https://placehold.co/60x60/FF6B35/FFFFFF?text=NK",
    achievements: [
      "Wrote requirements and prototypes for audio news app; cut delivery time 20% and improved eng handoff"
    ]
  }
];

// Skills
const skills = {
  product: ["Roadmapping", "OKRs", "0→1", "GTM", "Growth & Activation", "Experimentation", "Expert lifecycle"],
  methods: ["First Principles", "Agile/Kanban", "User Research/Interviews", "Stakeholder Management", "A/B Testing"],
  tools: ["n8n", "LibreChat", "Figma", "Looker", "Superset", "Jira", "Google Sheets", "Cursor", "Git", "MS Office"],
  technical: ["Python", "MySQL", "APIs", "LLM Agents", "Evals"]
};

// Projects (you can add more projects here)
const projects = [
  {
    id: 1,
    title: "AI Token Discovery Platform",
    description: "Led product strategy for AI-powered platform revolutionizing cryptocurrency listing process",
    technologies: ["LLM", "Multi-Agent", "APIs"],
    hideTechnologies: true,
    hideScreenshots: true,
    inProgress: true,
    impact: "50% reduction in listing time",
    company: "Coinbase",
    detailedDescription: "Led product strategy for an AI platform to revolutionize crypto listings. Identified a bottleneck: manual due diligence took 6 months, causing lost market opportunities.\n\nDefined requirements for a multi-agent LLM system automating whitepaper analysis and risk scoring. Bridged Compliance, Operations, and Engineering to shift from manual review to human-in-the-loop automation.",
    keyWins: [
      "Process Optimization: Cut listing time from 6 months to 3 months (50%), roadmap to <1 week next quarter.",
      "Efficiency Gains: Scoped product to automate 90% of manual data collection and due-diligence.",
      "Risk & Compliance: Led auditability requirements ensuring AI met internal compliance standards.",
      "Scalability: Pilot processed 500+ token evaluations in Q1, validating high-volume capability.",
      "Model Performance: Achieved 95% accuracy via clear acceptance criteria and analyst feedback loops."
    ],
    challenges: "Integrating multiple data sources, ensuring audit trails, handling edge cases in deep token analysis",
    learnings: "Importance of human-in-the-loop validation for high-stakes decisions, value of transparent AI reasoning",
    screenshots: []
  },
  {
    id: 2, 
    title: "Employee Assistant Bot",
    description: "Launched AI-powered employee assistant that automated 81% of HR inquiries with 45% month-1 adoption",
    technologies: ["LLM", "Automation", "APIs"],
    impact: "Saved ~470 hrs/month, 28% fewer escalations",
    company: "Coinbase",
    detailedDescription: "Built an intelligent employee assistant bot using LLM technology to handle common HR, IT, and operational queries. The bot integrates with internal knowledge bases, HRIS systems, and ticket management tools to provide instant, accurate responses to employee questions.",
    keyWins: [
      "Automated 81% of routine HR inquiries",
      "45% adoption rate in first month across 5,000+ employees",
      "Saved ~470 hours/month for HR team",
      "Reduced escalations to human agents by 28%",
      "Improved first-response SLA from 4 hours to instant",
      "94% positive satisfaction rating from employees"
    ],
    challenges: "Handling sensitive HR data securely, maintaining context across conversations, integrating with legacy systems",
    learnings: "Clear communication about bot capabilities drives adoption, iterative improvement based on failure cases is crucial",
    screenshots: [
      { url: "https://placehold.co/800x500/0052FF/FFFFFF?text=Chat+Interface", caption: "Employee Chat Interface" },
      { url: "https://placehold.co/800x500/0052FF/FFFFFF?text=Analytics+Dashboard", caption: "Usage Analytics" },
      { url: "https://placehold.co/800x500/0052FF/FFFFFF?text=Admin+Panel", caption: "Admin Configuration Panel" }
    ]
  },
  {
    id: 3,
    title: "RevReview Campaign",
    description: "Year-end financial wrap campaign achieving 10% conversion across 9M+ users",
    technologies: ["Analytics", "Campaign Management", "UX"],
    impact: "10% conversion rate across 9M+ users",
    company: "Revolut",
    detailedDescription: "Led the product strategy for RevReview, Revolut's year-end financial wrap campaign that provided personalized financial insights to users. Designed the user experience, defined success metrics, and coordinated cross-functional teams across 17 countries.",
    keyWins: [
      "Achieved 10% conversion rate across 9M+ active users",
      "Generated 900K+ social media shares",
      "Drove 15% increase in app engagement during campaign period",
      "Launched across 17 countries with localized insights",
      "Improved brand perception score by 12 points",
      "Created viral loop with shareable insights"
    ],
    challenges: "Coordinating global launch, ensuring data accuracy across regions, balancing insights depth with privacy",
    learnings: "Personalization drives engagement, social sharing features amplify reach, timing is critical for financial campaigns",
    blogLink: "https://www.revolut.com/blog/post/rev-review-2023/",
    screenshots: [
      { url: "ADD_YOUR_IMAGE_URL_HERE", caption: "RevReview 2023 Campaign" }
    ]
  },
  {
    id: 4,
    title: "Payment Optimization",
    description: "Reduced card payment failures through checkout UX improvements and spend-push experiments",
    technologies: ["UX Design", "A/B Testing", "Analytics"],
    impact: "1.5% monthly reduction in payment failures",
    company: "Revolut",
    detailedDescription: "Led initiative to reduce payment failures through systematic UX improvements and targeted experiments. Analyzed failure patterns, redesigned checkout flow, and implemented intelligent retry mechanisms and push notifications.",
    keyWins: [
      "Reduced payment failures by 1.5% monthly (150K+ transactions)",
      "Saved ~$2M annually in lost transaction revenue",
      "Improved checkout completion rate by 8%",
      "Reduced cart abandonment by 12%",
      "Implemented real-time failure detection and user notification"
    ],
    challenges: "Identifying root causes across multiple payment providers, balancing friction reduction with security requirements",
    learnings: "Small UX improvements have massive impact at scale, proactive communication reduces user frustration",
    screenshots: [
      { url: "https://placehold.co/800x500/0075FF/FFFFFF?text=Checkout+Flow", caption: "Optimized Checkout Flow" },
      { url: "https://placehold.co/800x500/0075FF/FFFFFF?text=Error+Handling", caption: "Smart Error Handling" },
      { url: "https://placehold.co/800x500/0075FF/FFFFFF?text=Analytics", caption: "Payment Analytics Dashboard" }
    ]
  }
];

// Education
const education = {
  institution: "BITS Pilani Hyderabad Campus",
  degree: "Bachelor's Degree",
  cgpa: "8.02 CGPA",
  achievements: [
    "Winner (Team Lead), May 2020 Summer Case Study Challenge",
    "Co-head, BITS Embryo (60 members; hosted speakers incl. Alyssa Carson, Vicky Kaushal)"
  ]
};

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [showCenterContact, setShowCenterContact] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showEmailCopied, setShowEmailCopied] = useState(false);
  const [showHeaderEmail, setShowHeaderEmail] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email).then(() => {
      setShowEmailCopied(true);
      setTimeout(() => setShowEmailCopied(false), 2000);
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'skills', 'projects', 'life', 'education'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = ['about', 'experience', 'skills', 'projects', 'life', 'education'];
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Height of fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const NavLink = ({ id, children }) => (
    <button
      onClick={() => scrollToSection(id)}
      className={`px-2 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300 text-xs sm:text-sm whitespace-nowrap ${
        activeSection === id 
          ? 'bg-blue-600 text-white shadow-md' 
          : 'text-gray-600 hover:bg-gray-200'
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="font-sans text-gray-800 antialiased min-h-screen bg-gray-50">
      {/* Fixed Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200">
        <nav className="container mx-auto px-3 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center gap-2">
          <div className="flex items-center space-x-1 bg-gray-100 p-1 sm:p-2 rounded-full overflow-x-auto scrollbar-hide">
              <NavLink id="about">About</NavLink>
              <NavLink id="experience">Experience</NavLink>
              <NavLink id="skills">Skills</NavLink>
              <NavLink id="projects">Projects</NavLink>
              <NavLink id="life">Life</NavLink>
              <NavLink id="education">Education</NavLink>
            </div>
            
            <div className="flex items-center space-x-1 sm:space-x-3 flex-shrink-0">
              <a
                href={personalInfo.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-1.5 sm:py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-xs sm:text-sm"
              >
                <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Resume</span>
              </a>
              
              <div className="relative">
                <button
                  onClick={() => setShowHeaderEmail(!showHeaderEmail)}
                  className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all"
                  title="Contact"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                
                {showHeaderEmail && (
                  <>
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setShowHeaderEmail(false)}
                    />
                    <div 
                      className="absolute top-full mt-2 right-0 bg-white rounded-xl shadow-xl border border-gray-200 p-3 z-50 min-w-max"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="space-y-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            copyEmailToClipboard();
                            setTimeout(() => setShowHeaderEmail(false), 1500);
                          }}
                          className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer w-full"
                        >
                          <Mail className="w-4 h-4" />
                          <span>{showEmailCopied ? '✓ Copied!' : personalInfo.email}</span>
                        </button>
                        <a
                          href={personalInfo.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors font-medium sm:hidden"
                          onClick={() => setShowHeaderEmail(false)}
                        >
                          <Linkedin className="w-4 h-4" />
                          <span>LinkedIn</span>
                        </a>
                        <a
                          href={personalInfo.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors font-medium sm:hidden"
                          onClick={() => setShowHeaderEmail(false)}
                        >
                          <Instagram className="w-4 h-4" />
                          <span>Instagram</span>
                        </a>
                      </div>
                    </div>
                  </>
                )}
              </div>
              
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all"
                title="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center py-20 relative bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div 
              className="absolute w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
              style={{ top: '20%', left: '10%' }}
            />
            <div 
              className="absolute w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"
              style={{ top: '40%', right: '10%' }}
            />
            <div 
              className="absolute w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"
              style={{ bottom: '20%', left: '30%' }}
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Left Side - Text */}
                <div className="order-2 md:order-1 text-center md:text-left">
                  <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-4 sm:mb-6 leading-tight">
                    <span className="block text-gray-900">HEY, I'M</span>
                    <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient bg-300%">
                      {personalInfo.name.toUpperCase()}
                    </span>
                  </h1>
                  
                  <div className="mb-6 sm:mb-8 space-y-2">
                    <h2 className="text-xl sm:text-3xl md:text-5xl font-bold text-gray-800">
                      {personalInfo.tagline}
                    </h2>
                    <p className="text-base sm:text-xl md:text-2xl text-gray-600 font-medium">
                      {personalInfo.subtitle}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-center md:justify-start space-x-3 text-gray-600 mb-6 sm:mb-8">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 animate-bounce-slow" />
                    <span className="text-sm sm:text-lg font-medium">{personalInfo.location}</span>
                  </div>
                  
                  <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto md:mx-0">
                    {personalInfo.bio}
                  </p>
              
                  <div className="flex flex-wrap gap-3 sm:gap-4 animate-fade-in-up justify-center md:justify-start">
                    <button
                      onClick={() => scrollToSection('experience')}
                      className="px-5 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white rounded-2xl hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 transform font-bold text-sm sm:text-lg"
                    >
                      View My Work →
                    </button>
                    
                    <div className="relative">
                      <button
                        onClick={() => setShowCenterContact(!showCenterContact)}
                        className="px-5 sm:px-8 py-3 sm:py-4 border-2 border-gray-900 text-gray-900 rounded-2xl hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 transform font-bold text-sm sm:text-lg"
                      >
                        Let's Talk
                      </button>
                      
                      {showCenterContact && (
                        <>
                          {/* Click outside overlay */}
                          <div 
                            className="fixed inset-0 z-40" 
                            onClick={() => setShowCenterContact(false)}
                          />
                          {/* Dropdown menu */}
                          <div className="absolute top-full mt-2 left-0 w-72 bg-white rounded-2xl shadow-xl border border-gray-200 p-4 z-50">
                            <div className="space-y-2">
                              <div
                                onClick={(e) => {
                                  e.stopPropagation();
                                  copyEmailToClipboard();
                                }}
                                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors p-3 rounded-lg hover:bg-blue-50 font-medium cursor-pointer group"
                              >
                                <Mail className="w-5 h-5 flex-shrink-0" />
                                <div className="flex flex-col min-w-0">
                                  <span className="font-semibold">Email Me</span>
                                  <span className="text-sm text-gray-500 group-hover:text-blue-500 truncate">
                                    {showEmailCopied ? '✓ Copied!' : personalInfo.email}
                                  </span>
                                </div>
                              </div>
                              <a
                                href={personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setShowCenterContact(false);
                                }}
                                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors p-3 rounded-lg hover:bg-blue-50 font-medium"
                              >
                                <Linkedin className="w-5 h-5" />
                                <span>LinkedIn</span>
                              </a>
                              <a
                                href={personalInfo.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setShowCenterContact(false);
                                }}
                                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors p-3 rounded-lg hover:bg-blue-50 font-medium"
                              >
                                <Instagram className="w-5 h-5" />
                                <span>Instagram</span>
                              </a>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
            </div>

                {/* Right Side - Profile Image */}
                <div className="order-1 md:order-2 flex justify-center md:justify-end">
                  <div className="relative group">
                    {/* Decorative elements */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
                    
                    {/* Main Image Container */}
                    <div className="relative w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                      <div className="absolute inset-0 rounded-3xl overflow-hidden transform group-hover:scale-105 transition-transform duration-500 shadow-2xl">
                        <img 
                          src={personalInfo.profileImage} 
                          alt={personalInfo.name}
                          className="w-full h-full object-cover"
                          onError={(e) => { 
                            e.target.onerror = null; 
                            e.target.src = 'https://placehold.co/400x400/3B82F6/FFFFFF?text=Add\\nYour\\nPhoto'; 
                          }}
                        />
                      </div>
                      
                      {/* Floating badge */}
                      <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-2xl p-4 transform group-hover:scale-110 transition-transform duration-300">
                        <div className="text-center">
                          <div className="text-3xl font-black text-blue-600">4+</div>
                          <div className="text-xs font-bold text-gray-600">Years</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className={`py-20 bg-white transition-all duration-1000 ${isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="container mx-auto px-6">
            <div className="text-center mb-10 sm:mb-16 px-2">
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-black mb-3 sm:mb-4 text-gray-900 leading-tight">
                WHERE I'VE <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">MADE IMPACT</span>
              </h2>
              <p className="text-base sm:text-xl text-gray-600 font-medium">From startups to unicorns, building products that scale</p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {workExperience.map((job, index) => (
                <div key={job.id} className={`relative mb-12 last:mb-0 transition-all duration-500 delay-${index * 100}`} style={{ transitionDelay: `${index * 100}ms` }}>
                  {index !== workExperience.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
                  )}
                  
                  <div className="flex items-start space-x-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-white border-4 border-gray-200 rounded-full flex items-center justify-center overflow-hidden shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:border-blue-500">
                                        <img src={job.logoUrl} alt={`${job.company} logo`} className="w-full h-full object-cover" />
                                    </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="bg-gray-50 rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-white border border-transparent hover:border-blue-200">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{job.role}</h3>
                            <p className="text-lg text-blue-600 font-semibold">{job.company}</p>
                            {job.team && (
                              <p className="text-sm text-gray-600 font-medium mt-1">Team: {job.team}</p>
                            )}
                          </div>
                          <div className="text-sm text-gray-500 mt-2 md:mt-0 md:text-right">
                            <div className="flex items-center space-x-1 mb-1">
                              <Calendar className="w-4 h-4" />
                              <span>{job.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{job.location}</span>
                            </div>
                            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-2 ${
                              job.type === 'full-time' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-blue-100 text-blue-800'
                            }`}>
                              {job.type}
                            </span>
                          </div>
                        </div>
                        
                        {job.scopeOfWork && (
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">Scope of Work</h4>
                            <p className="text-gray-700 leading-relaxed">{job.scopeOfWork}</p>
                          </div>
                        )}
                        
                        <div>
                          {job.scopeOfWork && (
                            <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">Key Wins</h4>
                          )}
                          <ul className="space-y-2">
                            {job.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start space-x-2 text-gray-700">
                                <span className="text-blue-500 mt-1">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className={`py-20 bg-gray-50 transition-all duration-1000 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="container mx-auto px-6">
            <div className="text-center mb-10 sm:mb-16 px-2">
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-black mb-3 sm:mb-4 text-gray-900 leading-tight">
                MY <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SUPERPOWERS</span>
              </h2>
              <p className="text-base sm:text-xl text-gray-600 font-medium">Tools and skills I use to ship great products</p>
            </div>
            
            <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8 px-2 sm:px-0">
              <div className="bg-white p-3 sm:p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 group">
                <div className="flex items-center space-x-1 sm:space-x-2 mb-2 sm:mb-4">
                  <Target className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600 transition-transform duration-300 group-hover:rotate-12" />
                  <h3 className="text-sm sm:text-xl font-bold">Product</h3>
                </div>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {skills.product.map((skill, index) => (
                    <span key={index} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-blue-600 hover:text-white cursor-pointer">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-white p-3 sm:p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 group">
                <div className="flex items-center space-x-1 sm:space-x-2 mb-2 sm:mb-4">
                  <Users className="w-4 h-4 sm:w-6 sm:h-6 text-green-600 transition-transform duration-300 group-hover:rotate-12" />
                  <h3 className="text-sm sm:text-xl font-bold">Methods</h3>
                </div>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {skills.methods.map((skill, index) => (
                    <span key={index} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-green-100 text-green-800 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-green-600 hover:text-white cursor-pointer">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-white p-3 sm:p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 group">
                <div className="flex items-center space-x-1 sm:space-x-2 mb-2 sm:mb-4">
                  <TrendingUp className="w-4 h-4 sm:w-6 sm:h-6 text-purple-600 transition-transform duration-300 group-hover:rotate-12" />
                  <h3 className="text-sm sm:text-xl font-bold">Tools</h3>
                </div>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {skills.tools.map((skill, index) => (
                    <span key={index} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-purple-100 text-purple-800 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-purple-600 hover:text-white cursor-pointer">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-white p-3 sm:p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 group">
                <div className="flex items-center space-x-1 sm:space-x-2 mb-2 sm:mb-4">
                  <Code2 className="w-4 h-4 sm:w-6 sm:h-6 text-orange-600 transition-transform duration-300 group-hover:rotate-12" />
                  <h3 className="text-sm sm:text-xl font-bold">Technical</h3>
                </div>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {skills.technical.map((skill, index) => (
                    <span key={index} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-orange-100 text-orange-800 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-orange-600 hover:text-white cursor-pointer">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={`py-20 bg-white transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="container mx-auto px-6">
            <div className="text-center mb-10 sm:mb-16 px-2">
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-black mb-3 sm:mb-4 text-gray-900 leading-tight">
                PRODUCTS I'VE <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SHIPPED</span>
              </h2>
              <p className="text-base sm:text-xl text-gray-600 font-medium">Real impact, real results, real innovation</p>
            </div>
            
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4 sm:gap-8 px-2 sm:px-0">
              {projects.map((project, index) => (
                <div 
                  key={project.id} 
                  onClick={() => setSelectedProject(project)}
                  className="group bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 border-2 border-gray-900 hover:border-blue-600 shadow-lg hover:shadow-2xl transition-all cursor-pointer transform hover:-translate-y-2 relative overflow-hidden"
                >
                  {/* Hover background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-2 sm:mb-3 gap-2">
                        <h3 className="text-lg sm:text-2xl font-black text-gray-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                        <span className="px-2 sm:px-3 py-1 text-xs font-bold bg-gray-900 text-white rounded-full flex-shrink-0">{project.company}</span>
                      </div>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{project.description}</p>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded-lg text-sm font-semibold">
                            {tech}
                          </span>
                        ))}
                            </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t-2 border-gray-100">
                        <div className="flex items-center space-x-2 text-green-600">
                          <Award className="w-5 h-5" />
                          <span className="text-sm font-bold">{project.impact}</span>
                        </div>
                        <span className="text-sm text-blue-600 font-bold flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                          <span>View Case Study</span>
                          <span>→</span>
                        </span>
                      </div>
                    </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </section>

        {/* Hobbies Section */}
        <section id="life" className={`py-20 bg-white transition-all duration-1000 ${isVisible.life ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="container mx-auto px-6">
            <div className="text-center mb-10 sm:mb-16 px-2">
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-black mb-3 sm:mb-4 text-gray-900 leading-tight">
                LIFE <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">BEYOND WORK</span>
              </h2>
              <p className="text-base sm:text-xl text-gray-600 font-medium">What keeps me inspired and energized</p>
            </div>

            <div className="max-w-7xl mx-auto space-y-20">
              {hobbies.map((hobby, index) => (
                <div key={hobby.id}>
                  {/* Hobby Header */}
                  <div className="text-center mb-6 sm:mb-8 px-2">
                    <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">{hobby.icon}</div>
                    <h3 className="text-2xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4 text-gray-900">{hobby.name}</h3>
                    <p className="text-base sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">{hobby.description}</p>
                  </div>

                  {/* Reading Section - Centered Vertical Layout */}
                  {hobby.mediaType === 'photo-gallery' ? (
                    <div className="space-y-8">
                      {/* Photos */}
                      <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-2 gap-4">
                          {hobby.photos.map((photo, photoIndex) => (
                            <div key={photoIndex} className="relative group">
                              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                                <img 
                                  src={photo} 
                                  alt={`${hobby.name} ${photoIndex + 1}`}
                                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Book Recommendations */}
                      {hobby.hasRecommendations && hobby.recommendations && (
                        <div className="max-w-4xl mx-auto">
                          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-4 border-2 border-blue-300">
                            <h4 className="text-xl font-black mb-4 text-gray-900">📚 Book Recommendations</h4>
                            <div className="grid md:grid-cols-2 gap-2">
                              {hobby.recommendations.map((rec, recIndex) => (
                                <div key={recIndex} className="bg-white rounded-lg p-3 border border-gray-200 hover:border-blue-600 transition-colors group cursor-pointer">
                                  <div className="flex items-start space-x-2">
                                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                                      {recIndex + 1}
                                    </div>
                                    <div className="flex-1">
                                      <h5 className="font-bold text-gray-900 text-base mb-0.5 group-hover:text-blue-600 transition-colors">{rec.title}</h5>
                                      <p className="text-xs text-gray-600 mb-1">by {rec.author}</p>
                                      <p className="text-xs text-gray-500 italic mb-1">"{rec.reason}"</p>
                                      <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">{rec.category}</span>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : hobby.mediaType === 'instagram' ? (
                    /* Dancing Section - Single Row Layout */
                    <div className="space-y-6">
                      {/* Call to Action */}
                      <div className="text-center max-w-3xl mx-auto">
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          Check out more of my dance videos and join me on this creative journey. I'm an amateur kathak and semi-classical dancer who loves expressing herself through movement!
                        </p>
                        <a
                          href={personalInfo.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all"
                        >
                          <Instagram className="w-5 h-5" />
                          <span>Follow @_sniggysideup_</span>
                        </a>
                      </div>
                      
                      {/* All Reels in One Row */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
                        {hobby.instagramPosts.map((postUrl, postIndex) => (
                          <div key={postIndex} className="relative group">
                            <a 
                              href={postUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-gray-300 transition-all transform hover:scale-[1.02] duration-300"
                            >
                              <div className="relative bg-gradient-to-br from-pink-50 to-purple-50 aspect-[9/16]">
                                {/* Instagram Embed Container */}
                                <iframe
                                  src={`${postUrl}embed/captioned`}
                                  className="w-full h-full"
                                  frameBorder="0"
                                  scrolling="no"
                                  allowTransparency="true"
                                  loading="lazy"
                                  style={{ border: 'none', background: 'transparent' }}
                                ></iframe>
                                
                                {/* Overlay gradient on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                              </div>
                              
                              {/* View on Instagram button - appears on hover */}
                              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-r from-pink-500 to-purple-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <div className="text-white text-sm font-bold flex items-center justify-center space-x-2">
                                  <Instagram className="w-5 h-5" />
                                  <span>Watch Full Reel</span>
                                </div>
                              </div>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
            </div>
        </section>

        {/* Education Section */}
        <section id="education" className={`py-20 bg-gray-50 transition-all duration-1000 ${isVisible.education ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="container mx-auto px-6">
            <div className="text-center mb-10 sm:mb-16 px-2">
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-black mb-3 sm:mb-4 text-gray-900 leading-tight">
                WHERE IT ALL <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">BEGAN</span>
              </h2>
              <p className="text-base sm:text-xl text-gray-600 font-medium">The foundation that shaped my journey</p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-8 shadow-sm transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{education.institution}</h3>
                    <p className="text-lg text-blue-600 font-semibold mb-4">{education.degree} • {education.cgpa}</p>
                    
                    <div className="space-y-2">
                      {education.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start space-x-2 text-gray-700">
                          <Award className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </section>
      </main>


      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] shadow-2xl overflow-hidden flex flex-col">
            <div className="bg-white border-b border-gray-200 p-6 flex justify-between items-center flex-shrink-0">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">{selectedProject.title}</h2>
                <p className="text-blue-600 font-semibold mt-1">{selectedProject.company}</p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            <div className="p-6 space-y-6 overflow-y-auto flex-1">
              {/* Overview */}
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Overview</h3>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  {selectedProject.detailedDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Key Wins */}
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Key Wins & Impact{selectedProject.inProgress && <span className="text-blue-600"> (In Progress)</span>}
                </h3>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <ul className="space-y-2">
                    {selectedProject.keyWins.map((win, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Award className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{win}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Blog Link */}
              {selectedProject.blogLink && (
                <div>
                  <a
                    href={selectedProject.blogLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <span>Read More on Blog</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              )}

              {/* Challenges & Learnings */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Challenges</h3>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <p className="text-gray-700">{selectedProject.challenges}</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Key Learnings</h3>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <p className="text-gray-700">{selectedProject.learnings}</p>
                  </div>
                </div>
              </div>

              {/* Overall Impact Badge */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Award className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-bold text-white">Overall Impact</h3>
                </div>
                <p className="text-2xl font-bold text-white">{selectedProject.impact}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        
        body {
          scroll-behavior: smooth;
          font-family: 'Inter', sans-serif;
        }

        .bg-clip-text {
          -webkit-background-clip: text;
          background-clip: text;
        }

        /* Animated Gradient Background */
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient 6s ease infinite;
        }

        .bg-300\\% {
          background-size: 300% 300%;
        }

        /* Blob Animation */
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        /* Fade In Up Animation */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }

        /* Bounce Slow */
        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-bounce-slow {
          animation: bounceSlow 3s ease-in-out infinite;
        }

        /* Pulse on Hover */
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        /* Shimmer Effect */
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .animate-shimmer {
          animation: shimmer 3s infinite;
          background: linear-gradient(to right, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%);
          background-size: 1000px 100%;
        }

        /* Scale on Hover */
        .hover-scale {
          transition: transform 0.3s ease;
        }

        .hover-scale:hover {
          transform: scale(1.05);
        }

        /* Smooth Transitions */
        * {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Hide scrollbar for nav */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
        }

        /* Auto-scrolling Photo Gallery */
        @keyframes scroll-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-infinite {
          animation: scroll-infinite 40s linear infinite;
        }

        .animate-scroll-infinite:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}