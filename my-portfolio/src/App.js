import React, { useState, useEffect } from 'react';
import { BookOpen, Briefcase, Feather, Mail, Linkedin, Twitter, PlayCircle, FileText, X, Star, Link as LinkIcon } from 'lucide-react';

// Mock Data (Replace with your actual data)
const personalInfo = {
  name: "Alex Doe",
  title: "Product Manager & Avid Reader",
  photoUrl: "https://placehold.co/400x600/E2E8F0/4A5568?text=Your\\nPhoto",
  bio: "I'm a product manager with a passion for building user-centric products and a love for diving into new worlds through books. I thrive on solving complex problems, leading cross-functional teams, and turning innovative ideas into reality. When I'm not shipping features, you'll find me with my nose in a book, exploring everything from sci-fi epics to behavioral psychology.",
  email: "alex.doe@email.com",
  linkedin: "https://www.linkedin.com/in/alexdoe",
  twitter: "https://twitter.com/alexdoe",
};

const careerTimeline = [
  {
    id: 1,
    company: "Innovate Inc.",
    role: "Senior Product Manager",
    duration: "2022 - Present",
    type: "full-time",
    logoUrl: "https://placehold.co/48x48/1E40AF/FFFFFF?text=I&font=inter",
    description: "Led the development of a new AI-powered analytics platform, resulting in a 40% increase in user engagement.",
    projects: [
      { name: "Project Phoenix", details: "Revamped the core user experience of our flagship product.", demoLink: "#", blogLink: "#" },
      { name: "AI Analytics Engine", details: "Launched a new predictive analytics feature that increased customer retention by 15%.", demoLink: "#", blogLink: "#" },
    ],
  },
  {
    id: 2,
    company: "Tech Solutions Co.",
    role: "Product Manager",
    duration: "2020 - 2022",
    type: "full-time",
    logoUrl: "https://placehold.co/48x48/16A34A/FFFFFF?text=T&font=inter",
    description: "Managed a suite of B2B SaaS products, growing the user base by 200% by targeting new market segments.",
    projects: [
      { name: "Marketplace Integration", details: "Integrated our product with major e-commerce platforms.", demoLink: "#", blogLink: "#" },
      { name: "Mobile App Launch", details: "Led the team that built and launched the company's first mobile application.", demoLink: "#", blogLink: "#" },
    ],
  },
  {
    id: 3,
    company: "Data Insights",
    role: "Product Management Intern",
    duration: "Summer 2019",
    type: "internship",
    logoUrl: "https://placehold.co/48x48/6D28D9/FFFFFF?text=D&font=inter",
    description: "Conducted market research and competitive analysis for a new product line.",
    projects: [
        { name: "Competitive Analysis Report", details: "Presented findings on market opportunities to senior leadership.", demoLink: "#", blogLink: "#" },
    ],
  },
  {
    id: 4,
    company: "Connect App",
    role: "Product Intern",
    duration: "Summer 2018",
    type: "internship",
    logoUrl: "https://placehold.co/48x48/DB2777/FFFFFF?text=C&font=inter",
    description: "Assisted in writing user stories and managing the backlog for a new social feature.",
    projects: [
        { name: "Feature Backlog Grooming", details: "Worked with developers to prioritize and clarify requirements for the upcoming sprint.", demoLink: "#", blogLink: "#" },
    ],
  },
    {
    id: 5,
    company: "Startup Hub",
    role: "PM Intern",
    duration: "Summer 2017",
    type: "internship",
    logoUrl: "https://placehold.co/48x48/FBBF24/000000?text=S&font=inter",
    description: "Wore many hats in a fast-paced startup, from writing specs to conducting QA testing.",
    projects: [
        { name: "MVP for Social App", details: "Helped define and launch the minimum viable product for a new social networking app.", demoLink: "#", blogLink: "#" },
    ],
  }
];

const blogPosts = [
  { id: 1, type: "PM", title: "The Art of Prioritization: A PM's Guide", summary: "Exploring frameworks like RICE and MoSCoW to make better product decisions.", date: "June 2024", color: "bg-purple-500" },
  { id: 2, type: "Book Review", title: "Review: 'Thinking, Fast and Slow'", summary: "How understanding our two systems of thought can make us better product builders.", date: "May 2024", color: "bg-orange-500" },
  { id: 3, type: "PM", title: "User Interviews that Actually Work", summary: "Tips and tricks for getting meaningful insights from your users.", date: "April 2024", color: "bg-purple-500" },
  { id: 4, type: "Book Review", title: "Review: 'Project Hail Mary'", summary: "A thrilling sci-fi adventure with lessons in problem-solving.", date: "March 2024", color: "bg-orange-500" },
];

const recommendations = [
    { id: 1, type: "Course", title: "Reforge: Product Management Foundations", author: "Reforge", description: "An incredible deep-dive into the fundamentals of product management, from strategy to execution.", link: "#" },
    { id: 2, type: "Work", title: "Lenny's Newsletter", author: "Lenny Rachitsky", description: "A must-read for any PM. In-depth essays on product, growth, and management.", link: "#" },
    { id: 3, type: "Course", title: "Udemy: SQL for Data Science", author: "Imtiaz Ahmad", description: "A practical and comprehensive course for PMs looking to level-up their data skills.", link: "#" },
    { id: 4, type: "Work", title: "Stratechery by Ben Thompson", author: "Ben Thompson", description: "Brilliant analysis on the strategy and business side of technology and media.", link: "#" },
]


// Main App Component
export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [openJobId, setOpenJobId] = useState(null);
  const [blogFilter, setBlogFilter] = useState('All');

  const filteredBlogs = blogFilter === 'All' ? blogPosts : blogPosts.filter(post => post.type === blogFilter);
  const selectedJob = openJobId ? careerTimeline.find(job => job.id === openJobId) : null;

  const handleJobToggle = (jobId) => {
    setOpenJobId(openJobId === jobId ? null : jobId);
  };

  useEffect(() => {
    document.body.style.backgroundColor = '#F8F7F4';
    document.body.style.backgroundImage = `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)`;
    document.body.style.backgroundSize = '20px 20px';

    // Add AOS library for scroll animations
    const aosScript = document.createElement('script');
    aosScript.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js';
    aosScript.onload = () => {
      if (typeof AOS !== 'undefined') {
        AOS.init({
          duration: 800,
          once: true, // Animation happens only once
          offset: 100, // Trigger animation a little sooner
        });
      }
    };
    document.body.appendChild(aosScript);

    const aosStyles = document.createElement('link');
    aosStyles.rel = 'stylesheet';
    aosStyles.href = 'https://unpkg.com/aos@2.3.1/dist/aos.css';
    document.head.appendChild(aosStyles);

    return () => {
      // Cleanup on component unmount
      if (document.body.contains(aosScript)) {
        document.body.removeChild(aosScript);
      }
      if (document.head.contains(aosStyles)) {
        document.head.removeChild(aosStyles);
      }
    };
  }, []);

  const NavLink = ({ id, children }) => (
    <a href={`#${id}`} className={`px-4 py-2 rounded-full transition-all duration-300 ${activeSection === id ? 'bg-gray-800 text-white shadow-md' : 'text-gray-600 hover:bg-gray-200'}`} onClick={() => setActiveSection(id)}>
      {children}
    </a>
  );

  const fullTimeColor = "blue";
  const internshipColor = "teal";

  return (
    <div className="font-sans text-gray-800 antialiased min-h-screen">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md shadow-sm">
        <nav className="container mx-auto px-6 py-3 flex justify-center items-center">
          <div className="flex items-center space-x-1 md:space-x-2 bg-gray-100 p-2 rounded-full">
            <NavLink id="about">About Me</NavLink>
            <NavLink id="career">Career</NavLink>
            <NavLink id="blog">Blog</NavLink>
            <NavLink id="recommendations">Recommendations</NavLink>
            <NavLink id="contact">Contact</NavLink>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-12 md:py-20">
        <section id="about" className="min-h-screen flex items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">{personalInfo.name}</h1>
              <h2 className="text-2xl md:text-3xl text-blue-600 mb-6 font-medium">{personalInfo.title}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{personalInfo.bio}</p>
            </div>
            <div className="order-1 md:order-2 flex justify-center items-center">
                <div className="relative w-64 h-96">
                    <div className="absolute inset-0 bg-yellow-300 rounded-2xl blur-2xl opacity-60"></div>
                    <img 
                        src={personalInfo.photoUrl} 
                        alt="Portrait of Alex Doe" 
                        className="relative w-full h-full object-cover rounded-2xl shadow-xl border-4 border-white"
                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x600/E2E8F0/4A5568?text=Image\\nNot\\nFound'; }}
                    />
                </div>
            </div>
          </div>
        </section>

        <section id="career" className="py-20">
            <h2 className="text-4xl font-bold text-center mb-20" data-aos="fade-up">My Career Journey</h2>
            <div className="relative w-full" data-aos="fade-up" data-aos-delay="200">
                <div className="overflow-x-auto pb-8 -mx-6 px-6">
                    <div className="relative inline-flex min-w-full" style={{minWidth: `${careerTimeline.length * 20}rem`}}>
                        <div className="absolute top-12 left-0 w-full h-0.5 bg-gray-300"></div>
                        <div className="relative flex justify-between w-full">
                            {careerTimeline.map((job) => (
                                <div key={job.id} className="w-1/5 px-2 flex flex-col items-center text-center">
                                    <div className="text-sm font-semibold text-gray-500 mb-2">{job.duration}</div>
                                    <div className={`relative z-10 w-12 h-12 bg-white border-2 rounded-full flex items-center justify-center mx-auto overflow-hidden transition-all duration-300 ${openJobId === job.id ? `border-${job.type === 'full-time' ? fullTimeColor : internshipColor}-600 scale-110` : `border-gray-400`}`}>
                                        <img src={job.logoUrl} alt={`${job.company} logo`} className="w-full h-full object-cover" />
                                    </div>
                                    <div onClick={() => handleJobToggle(job.id)} className={`mt-4 w-full bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border-t-4 ${openJobId === job.id ? `border-${job.type === 'full-time' ? fullTimeColor : internshipColor}-600` : `border-${job.type === 'full-time' ? fullTimeColor : internshipColor}-400`}`}>
                                        <h3 className="text-lg font-bold">{job.role}</h3>
                                        <p className="text-md text-gray-600">{job.company}</p>
                                        <span className={`text-xs font-semibold uppercase px-2 py-1 rounded-full mt-2 inline-block ${job.type === 'full-time' ? 'bg-blue-100 text-blue-800' : 'bg-teal-100 text-teal-800'}`}>{job.type}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={`transition-all duration-700 ease-in-out overflow-hidden ${openJobId ? 'max-h-[500px] mt-2' : 'max-h-0'}`}>
                    {selectedJob && (
                        <div className="bg-white p-6 rounded-xl shadow-2xl border border-gray-200 animate-fade-in">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-2xl font-bold">Projects at {selectedJob.company}</h3>
                                <button onClick={() => setOpenJobId(null)} className="p-2 rounded-full hover:bg-gray-100">
                                    <X className="w-6 h-6 text-gray-500" />
                                </button>
                            </div>
                            <div className="flex space-x-6 overflow-x-auto pb-4">
                                {selectedJob.projects.map((project, index) => (
                                    <div key={index} className="flex-shrink-0 w-72 bg-gray-50 rounded-lg p-4 border border-gray-200 transform hover:scale-105 transition-transform duration-300">
                                        <h4 className="font-bold text-lg">{project.name}</h4>
                                        <p className="text-gray-600 text-sm my-2">{project.details}</p>
                                        <div className="mt-4 flex space-x-4">
                                            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-blue-600 hover:underline font-semibold">
                                                <PlayCircle className="w-4 h-4 mr-1.5" />
                                                View Demo
                                            </a>
                                            <a href={project.blogLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-purple-600 hover:underline font-semibold">
                                                <FileText className="w-4 h-4 mr-1.5" />
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>

        <section id="blog" className="py-20">
          <h2 className="text-4xl font-bold text-center mb-6" data-aos="fade-up">My Reading & Writing</h2>
          <p className="text-center text-lg text-gray-600 mb-12" data-aos="fade-up" data-aos-delay="100">Thoughts on product, and stories from other worlds.</p>
          <div className="flex justify-center space-x-4 mb-12" data-aos="fade-up" data-aos-delay="200">
            <button onClick={() => setBlogFilter('All')} className={`px-6 py-2 rounded-full font-semibold transition ${blogFilter === 'All' ? 'bg-gray-800 text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}>All</button>
            <button onClick={() => setBlogFilter('PM')} className={`px-6 py-2 rounded-full font-semibold transition ${blogFilter === 'PM' ? 'bg-purple-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}>PM Blogs</button>
            <button onClick={() => setBlogFilter('Book Review')} className={`px-6 py-2 rounded-full font-semibold transition ${blogFilter === 'Book Review' ? 'bg-orange-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}>Book Reviews</button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((post, index) => (
              <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group cursor-pointer" data-aos="fade-up" data-aos-delay={100 * (index % 3)}>
                <div className={`h-2 ${post.color}`}></div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{post.title}</h3>
                  <p className="text-gray-600">{post.summary}</p>
                </div>
                <div className="p-6 bg-gray-50 flex justify-between items-center">
                  <span className={`text-xs font-bold uppercase px-2 py-1 rounded-full ${post.type === 'PM' ? 'bg-purple-100 text-purple-800' : 'bg-orange-100 text-orange-800'}`}>{post.type}</span>
                  <span className="text-blue-600 font-semibold text-sm">Read More &rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="recommendations" className="py-20">
            <h2 className="text-4xl font-bold text-center mb-6" data-aos="fade-up">My Recommendations</h2>
            <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">A curated list of courses, tools, and content that I've found valuable and highly recommend to others.</p>
            <div className="grid md:grid-cols-2 gap-8">
                {recommendations.map((rec, index) => (
                    <div key={rec.id} className="bg-white rounded-lg shadow-lg p-6 flex flex-col transform hover:-translate-y-2 transition-transform duration-300" data-aos="fade-up" data-aos-delay={100 * (index % 2)}>
                        <div className="flex-grow">
                            <div className="flex justify-between items-start">
                                <h3 className="text-xl font-bold mb-1">{rec.title}</h3>
                                <span className={`text-xs font-semibold uppercase px-2 py-1 rounded-full ${rec.type === 'Course' ? 'bg-green-100 text-green-800' : 'bg-indigo-100 text-indigo-800'}`}>{rec.type}</span>
                            </div>
                            <p className="text-sm text-gray-500 mb-3">by {rec.author}</p>
                            <p className="text-gray-600">{rec.description}</p>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                             <a href={rec.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:underline font-semibold">
                                <LinkIcon className="w-4 h-4 mr-2" />
                                Check it out
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        <section id="contact" className="py-20 text-center">
            <h2 className="text-4xl font-bold mb-6" data-aos="fade-up">Let's Connect</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">I'm always open to discussing new products, interesting books, or just grabbing a coffee. Feel free to reach out!</p>
            <div className="flex justify-center items-center space-x-6" data-aos="fade-up" data-aos-delay="200">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center space-x-2 text-lg text-gray-700 hover:text-blue-600 transition-colors">
                    <Mail />
                    <span>{personalInfo.email}</span>
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
                    <Linkedin size={28} />
                </a>
                <a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
                    <Twitter size={28} />
                </a>
            </div>
        </section>
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;700&display=swap');
        
        body {
          scroll-behavior: smooth;
        }

        h1, h2, h3, h4, .font-display {
          font-family: 'Playfair Display', serif;
        }

        .font-sans {
          font-family: 'Inter', sans-serif;
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}
