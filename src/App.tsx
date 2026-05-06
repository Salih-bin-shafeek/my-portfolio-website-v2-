import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Markdown from 'react-markdown';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  ChevronRight, 
  Menu, 
  X,
  ExternalLink,
  Code2,
  Database,
  Globe,
  ArrowLeft,
  Layout,
  Terminal,
  BookOpen
} from 'lucide-react';

interface Project {
  title: string;
  description: string;
  readme: string;
  tags: string[];
  image: string;
  gallery: string[];
  githubUrl: string;
  demoUrl?: string;
}

const projects: Project[] = [
  {
    title: "Global Climate Trends Analysis",
    description: "An exploratory analysis of 100 years of global temperature records to identify regional anomalies.",
    readme: `
# Global Climate Trends Analysis

This project performs a deep dive into the historical temperature dataset provided by the Berkeley Earth Surface Temperature study. The objective was to identify statistically significant warming trends across different continents and seasons.

## Analysis Methodology

1. **Data Cleaning**: Handled missing values using seasonal decomposition of time series.
2. **Exploratory Data Analysis (EDA)**: Identified heat map correlations between urban density and temperature rise.
3. **Statistical Testing**: Applied the Mann-Kendall test to confirm monotonic trends in annual means.

## Insights Discovered

- **Arctic Warming**: Found that high-latitude regions are warming at 2.5x the global average rate.
- **Seasonal Shifts**: Winter temperatures show higher variability and a more pronounced warming slope than summer months.

## Tools Used

- **Python**: Core analysis engine.
- **Pandas**: Data manipulation and cleaning.
- **Matplotlib/Seaborn**: Static visualizations for the final report.
- **Statsmodels**: Trend analysis and forecasting.

### Sample Analysis Logic

\`\`\`python
import pandas as pd
from statsmodels.tsa.seasonal import seasonal_decompose

# Decompose the time series to extract the trend
result = seasonal_decompose(df['avg_temp'], model='additive', period=12)
trend = result.trend.dropna()

# Calculate decadal warming rate
warming_rate = (trend.iloc[-1] - trend.iloc[0]) / (len(trend) / 120)
print(f"Global warming rate: {warming_rate:.2f}°C per decade")
\`\`\`
`,
    tags: ["Python", "Pandas", "Statsmodels"],
    image: "https://picsum.photos/seed/climate/800/600",
    gallery: [
      "https://picsum.photos/seed/cl1/800/600",
      "https://picsum.photos/seed/cl2/800/600"
    ],
    githubUrl: "#"
  },
  {
    title: "Customer Segmentation Strategy (RFM)",
    description: "Using R and Tidyverse to group e-commerce customers based on Recency, Frequency, and Monetary value.",
    readme: `
# E-commerce Customer Segmentation

This project implements an RFM (Recency, Frequency, Monetary) analysis to help a retail business optimize its marketing spend by targeting different customer segments.

## Segmentation Approach

We categorized over 50,000 customers into several distinct groups:
- **Champions**: Big spenders who buy recently and often.
- **At Risk**: High-value customers who haven't purchased in a long time.
- **New Prospects**: Recent buyers with low frequency but high potential.

## Technical Details

- **Environment**: RStudio
- **Libraries**: \`tidyverse\`, \`cluster\`, \`factoextra\`, \`plotly\`
- **Clustering**: K-means optimization using the Elbow method.

### RFM Scoring Logic

\`\`\`r
library(tidyverse)

rfm_data <- original_data %>%
  group_by(customer_id) %>%
  summarise(
    recency = as.numeric(Sys.Date() - max(order_date)),
    frequency = n(),
    monetary = sum(order_value)
  )

# Normalize and cluster
rfm_scaled <- scale(rfm_data[,2:4])
clusters <- kmeans(rfm_scaled, centers = 5)
\`\`\`

## Results

Implementing targeted email campaigns based on these segments resulted in a **15% increase in repeat purchase rates** within the first quarter.
`,
    tags: ["R", "Tidyverse", "K-Means"],
    image: "https://picsum.photos/seed/segment/800/600",
    gallery: [
      "https://picsum.photos/seed/sg1/800/600",
      "https://picsum.photos/seed/sg2/800/600"
    ],
    githubUrl: "#"
  },
  {
    title: "Hospital Operations Tech Dashboard",
    description: "An interactive D3.js dashboard for real-time monitoring of ER wait times and staffing efficiency.",
    readme: `
# ER Capacity Dashboard

A real-time monitoring tool designed for hospital administrators to visualize patient flow through Emergency Rooms. Built with performance in mind using D3.js and WebSockets.

## Key Visualizations

- **Patient Velocity**: Flow diagram showing bottlenecks in the triage process.
- **Wait Time Forecaster**: Histogram showing predicted wait times based on current staffing levels.
- **Geographic Intake**: Map showing the origin density of incoming patients.

## Engineering Challenges

1. **High-Frequency Updates**: Optimized D3 selections to handle updates every 2 seconds without UI lag.
2. **Data Aggregation**: Built a middleware layer to normalize heterogeneous data from three different legacy hospital systems.

## Tech Stack

- **Frontend**: React, D3.js, Tailwind CSS
- **Backend**: Node.js (Express)
- **Database**: PostgreSQL (TimescaleDB extension)

> "This dashboard reduced average patient wait times by 12% in the first month by identifying triage bottlenecks early." - ER Charge Nurse
`,
    tags: ["D3.js", "React", "Real-time"],
    image: "https://picsum.photos/seed/hospital/800/600",
    gallery: [
      "https://picsum.photos/seed/hs1/800/600",
      "https://picsum.photos/seed/hs2/800/600"
    ],
    githubUrl: "#"
  },
  {
    title: "Real Estate Value Prediction",
    description: "Applying Machine Learning models to predict residential property prices in metropolitan areas.",
    readme: `
# Real Estate Price Forecasting

This project leverages historical housing data to build a predictive model for property values. It accounts for traditional factors like square footage and location, alongside proximity to public transport and local school ratings.

## Model Performance

- **Mean Absolute Error (MAE)**: $12,400
- **R-squared**: 0.91
- **Top Feature**: Proximity to public transit (35% weight)

## Feature Engineering

We created several synthetic features to improve model accuracy:
- **Walk Score Index**: Normalized distance to amenities.
- **Recent Growth**: Percentage increase in neighbourhood values over the last 24 months.

## Implementation

\`\`\`python
from sklearn.ensemble import GradientBoostingRegressor
from sklearn.model_selection import train_test_split

X = df.drop('price', axis=1)
y = df['price']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

model = GradientBoostingRegressor(n_estimators=100, learning_rate=0.1)
model.fit(X_train, y_train)
\`\`\`
`,
    tags: ["Python", "Scikit-Learn", "Regression"],
    image: "https://picsum.photos/seed/realestate/800/600",
    gallery: [
      "https://picsum.photos/seed/re1/800/600",
      "https://picsum.photos/seed/re2/800/600"
    ],
    githubUrl: "#"
  }
];

const experience = [
  {
    role: "Data Science Student",
    company: "IIT Madras (IITM)",
    period: "Present",
    description: "Focusing on advanced statistical modeling, machine learning, and computational data science."
  },
  {
    role: "Product Analysis Specialist",
    company: "Specialization",
    period: "Ongoing",
    description: "Specializing in interpreting complex datasets to drive product growth and improve user retention."
  }
];

function ProjectDetails({ project, onBack }: { project: Project, onBack: () => void }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="max-w-5xl mx-auto"
    >
      <button 
        onClick={onBack}
        className="flex items-center text-accent font-semibold mb-12 hover:translate-x-[-4px] transition-transform group"
      >
        <ArrowLeft size={20} className="mr-2" /> 
        <span>Back to Portfolio</span>
      </button>

      <div className="mb-12">
        <h1 className="serif text-5xl font-bold text-primary mb-6">{project.title}</h1>
        <div className="flex flex-wrap gap-2 mb-12">
          {project.tags.map((tag, i) => (
            <span key={i} className="px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold">{tag}</span>
          ))}
        </div>

        {/* README Section */}
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center text-sm font-bold text-primary capitalize">
              <BookOpen size={16} className="mr-2" /> README.md
            </div>
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-gray-200"></div>
              <div className="w-3 h-3 rounded-full bg-gray-200"></div>
              <div className="w-3 h-3 rounded-full bg-gray-200"></div>
            </div>
          </div>
          <div className="p-8 lg:p-12">
            <div className="markdown-body">
              <Markdown>{project.readme}</Markdown>
            </div>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="border-t border-gray-100 pt-16 mb-20">
        <h2 className="serif text-3xl font-bold text-primary mb-8">Source & Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-between p-6 bg-primary text-white rounded-2xl hover:bg-primary/95 transition-all group"
          >
            <div className="flex items-center">
              <Github className="mr-4" />
              <div>
                <p className="font-bold">View on GitHub</p>
                <p className="text-xs text-white/60">Checkout the source code and documentation</p>
              </div>
            </div>
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between p-6 border-2 border-primary text-primary rounded-2xl hover:bg-primary hover:text-white transition-all group"
            >
              <div className="flex items-center">
                <Globe className="mr-4" />
                <div>
                  <p className="font-bold">Live Demo</p>
                  <p className="text-xs opacity-60">Interactive preview of the final product</p>
                </div>
              </div>
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) return;

    const handleScroll = () => {
      const sections = ['about', 'projects', 'experience', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedProject]);

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    setSelectedProject(null);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 z-50">
        <h1 className="serif font-bold text-xl">Muhammed Swalih</h1>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-primary">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar - Hidden when a project is selected on mobile, but always visible for navigation on desktop */}
      <aside className={`
        fixed lg:static inset-0 bg-sidebar-bg border-r border-gray-100 p-12 flex flex-col z-40 transition-transform duration-300
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        lg:w-[300px] h-screen overflow-y-auto
      `}>
        <div className="text-center mb-12">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-white shadow-sm">
            <img 
              src="/images/profile.png" 
              alt="Muhammed Swalih" 
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://picsum.photos/seed/swalih/300/300";
              }}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="serif text-2xl font-bold text-primary">Muhammed Swalih</h1>
          <p className="text-secondary text-sm mt-2">Data Analyst & Product Specialist</p>
        </div>

        <nav className="flex-grow">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`nav-link w-full text-left flex items-center group ${activeSection === link.id && !selectedProject ? 'active' : ''}`}
                >
                  <span className={`w-0 overflow-hidden transition-all duration-300 ${activeSection === link.id && !selectedProject ? 'w-4 mr-2' : 'group-hover:w-4 group-hover:mr-2'}`}>
                    <ChevronRight size={14} className="text-accent" />
                  </span>
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8">
          <div className="flex justify-center space-x-5 mb-6">
            <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Github size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Twitter size={20} /></a>
          </div>
          <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest">© 2024 Muhammed Swalih</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow lg:ml-[20px] px-6 py-24 lg:px-20 lg:py-24 max-w-5xl overflow-x-hidden">
        
        <AnimatePresence mode="wait">
          {selectedProject ? (
            <ProjectDetails 
              key="details"
              project={selectedProject} 
              onBack={() => setSelectedProject(null)} 
            />
          ) : (
            <motion.div
              key="portfolio"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
            >
              {/* About Section */}
              <motion.section 
                id="about" 
                className="mb-32 pt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="section-title">About Me</h2>
                <div className="prose prose-lg text-secondary leading-relaxed max-w-none">
                  <p className="mb-6 text-lg">
                    Hello! I'm <span className="font-semibold text-primary">Muhammed Swalih</span>, a Data Science student at <span className="text-primary font-medium">IIT Madras</span> and a dedicated Data Analyst specializing in <span className="text-primary font-medium">Product Analysis</span>.
                  </p>
                  <p className="mb-6">
                    I focus on translating raw information into strategic product insights. My approach combines statistical rigor with modern analytical tools to help businesses understand user behavior and optimize performance.
                  </p>
                  <p>
                    I specialize in building end-to-end data pipelines and interactive dashboards using <span className="text-primary font-medium">Python</span>, <span className="text-primary font-medium">SQL</span>, and <span className="text-primary font-medium">Power BI</span>.
                  </p>
                </div>
              </motion.section>

              {/* Projects Section */}
              <section id="projects" className="mb-32">
                <motion.h2 
                  className="section-title"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  Featured Projects
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {projects.map((project, index) => (
                    <motion.div
                      key={index}
                      onClick={() => setSelectedProject(project)}
                      className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-gray-100 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="aspect-video overflow-hidden bg-gray-50 relative">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500 flex items-center justify-center">
                          <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0" size={32} />
                        </div>
                      </div>
                      <div className="p-8">
                        <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                        <p className="text-secondary text-sm mb-6 line-clamp-2">{project.description}</p>
                        <div className="flex flex-wrap">
                          {project.tags.map((tag, i) => (
                            <span key={i} className="tag">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-12 text-center">
                  <button className="px-8 py-3 bg-white border-2 border-accent text-accent font-bold rounded-lg hover:bg-accent hover:text-white transition-all duration-300 shadow-sm">
                    View All Projects
                  </button>
                </div>
              </section>

              {/* Experience Section */}
              <section id="experience" className="mb-32">
                <motion.h2 
                  className="section-title"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  Experience
                </motion.h2>
                <div className="space-y-0 relative before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[1px] before:bg-gray-100">
                  {experience.map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="pl-8 pb-12 relative"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="absolute left-[-4.5px] top-2 w-[10px] h-[10px] rounded-full bg-accent ring-4 ring-white" />
                      <div className="flex flex-col md:flex-row md:justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-primary">{item.role}</h3>
                        <span className="text-accent font-semibold text-sm bg-accent/5 px-3 py-1 rounded-md mt-2 md:mt-0">{item.period}</span>
                      </div>
                      <p className="text-secondary/60 text-sm mb-3 font-medium">{item.company}</p>
                      <p className="text-secondary leading-relaxed">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Skills Section */}
              <section id="skills" className="mb-32">
                <motion.h2 
                  className="section-title"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  Capabilities
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {[
                    { 
                      title: "Programming", 
                      icon: <Database className="text-accent" />, 
                      items: ["Python", "Pandas & Numpy", "Plotly & Matplotlib", "Seaborn", "Scikit Learn"] 
                    },
                    { 
                      title: "Data Engineering", 
                      icon: <Globe className="text-accent" />, 
                      items: ["MySQL & PostgreSQL", "DuckDB", "Databricks", "Excel & Google Sheets"] 
                    },
                    { 
                      title: "Analysis & BI", 
                      icon: <Code2 className="text-accent" />, 
                      items: ["Product Analysis", "Power BI", "Statistics", "Data Storytelling"] 
                    }
                  ].map((skill, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group p-8 rounded-2xl bg-gray-50/50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-lg transition-all duration-500"
                    >
                      <div className="mb-6 p-3 bg-white w-fit rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-500">
                        {skill.icon}
                      </div>
                      <h3 className="font-bold mb-6 uppercase tracking-widest text-[0.75rem] text-secondary/60 border-b border-gray-200 pb-2 flex items-center">
                        {skill.title}
                      </h3>
                      <ul className="space-y-4">
                        {skill.items.map((item, i) => (
                          <li key={i} className="flex items-center text-secondary group/item">
                            <ChevronRight size={12} className="mr-3 text-accent/40 group-hover/item:translate-x-1 transition-transform" /> 
                            <span className="text-sm font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Contact Section */}
              <section id="contact" className="mb-20">
                <motion.h2 
                  className="section-title"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  Get In Touch
                </motion.h2>
                <div className="bg-gray-50/50 border border-gray-100 p-10 rounded-3xl backdrop-blur-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -translate-y-32 translate-x-32 group-hover:scale-110 transition-transform duration-1000" />
                  <div className="relative z-10">
                    <p className="text-secondary mb-10 text-lg">I'm always open to new projects and collaborations. Feel free to reach out!</p>
                    <form 
                      onSubmit={(e) => {
                        e.preventDefault();
                        alert('Thank you! This is a demo. In a real app, this would send an email.');
                      }}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase font-bold tracking-widest text-secondary/60 ml-1">Name</label>
                          <input type="text" className="w-full bg-white px-5 py-4 rounded-xl border border-gray-100 focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/5 transition-all text-sm shadow-sm" required />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase font-bold tracking-widest text-secondary/60 ml-1">Email</label>
                          <input type="email" className="w-full bg-white px-5 py-4 rounded-xl border border-gray-100 focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/5 transition-all text-sm shadow-sm" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold tracking-widest text-secondary/60 ml-1">Message</label>
                        <textarea rows={5} className="w-full bg-white px-5 py-4 rounded-xl border border-gray-100 focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/5 transition-all text-sm shadow-sm" required></textarea>
                      </div>
                      <motion.button 
                        type="submit" 
                        className="w-full md:w-auto px-12 py-4 bg-accent text-white font-bold rounded-xl hover:shadow-xl hover:shadow-accent/20 transition-all flex items-center justify-center space-x-3 group/btn"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>Send Message</span>
                        <Mail size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </motion.button>
                    </form>
                  </div>
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>

      </main>
    </div>
  );
}
