
import React, { useState, useEffect } from 'react';
import { 
  Cloud, 
  Terminal, 
  Cpu, 
  Database, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ExternalLink, 
  Menu, 
  X, 
  ChevronRight,
  Server,
  Code2,
  Workflow,
  ShieldCheck,
  Download
} from 'lucide-react';

// Data based on the provided PDF
const SKILLS = [
  { name: 'Amazon EC2', category: 'Cloud' },
  { name: 'Amazon S3', category: 'Cloud' },
  { name: 'Amazon RDS', category: 'Cloud' },
  { name: 'VPC Networking', category: 'Cloud' },
  { name: 'Lambda Automation', category: 'Cloud' },
  { name: 'CloudWatch and CloudTril', category: 'Cloud' },
  { name: 'IAM & Security', category: 'Cloud' },
  { name: 'Load Balancing', category: 'Cloud' },
  { name: 'Auto Scaling', category: 'Cloud' },
  { name: 'Route 53', category: 'Cloud' },
  { name: 'Elastic Beanstalk', category: 'Cloud' },
  { name: 'CloudFront', category: 'Cloud' },
  { name: 'EKS & ECS', category: 'Cloud' },
  { name: 'Amazon SNS & SQS', category: 'Cloud' },
  { name: 'aws cli', category: 'Cloud' },
  { name: 'Amazon event-bridge', category: 'Cloud' },
  { name: 'Amazon WAF GaurdDuty shield', category: 'Cloud' },
  { name: 'Terraform', category: 'IaC' },
  { name: 'Ansible', category: 'IaC' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Kubernetes', category: 'DevOps' },
  { name: 'Jenkins', category: 'DevOps' },
  { name: 'GitHub Actions', category: 'DevOps' },
  { name: 'CI/CD Pipelines', category: 'DevOps' },
  { name: 'Argocd', category: 'DevOps' },
  { name: 'Helm Charts', category: 'DevOps' },
  { name: 'Prometheus & Grafana', category: 'DevOps' },
  { name: 'Elastic Stack', category: 'DevOps' },
  { name: 'Linux SysAdmin', category: 'Tools' },
  { name: 'Git/GitHub', category: 'Tools' },
  {name: 'MYSQL', category: 'Database' },
  {name: 'MongoDB', category: 'Database' },
  { name: 'MariaDB', category: 'Database' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MS SQL Server', category: 'Database' },
  { name: 'Bash Scripting', category: 'Scripting' },
  { name: 'Python Scripting', category: 'Scripting' },
  { name: 'shell Scripting', category: 'Scripting' },
];

const EXPERIENCES = [
  {
    role: 'Senior DevOps Engineer',
    company: 'Infosys Limited',
    location: 'Bengaluru, India',
    period: 'August 2025 - Present',
    description: [
      'Actively developing hands-on experience with AWS cloud services.',
      'Supporting real-world cloud engineering and infrastructure initiatives.',
      'Applying foundational cloud concepts and collaborating with senior engineers.',
      'Contributing to practical cloud solutions and infrastructure-as-code deployments.'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'Robotico Digital LLP',
    location: 'Bengaluru, India',
    period: 'May 2024 - August 2025',
    description: [
      'Developed and maintained CI/CD pipelines using Jenkins and GitHub Actions, reducing deployment times by 30%.',
      'Implemented Infrastructure as Code (IaC) using Terraform to automate AWS resource provisioning.',
      'Containerized applications using Docker and orchestrated deployments with Kubernetes.',
      'Monitored cloud infrastructure using Prometheus and Grafana, reducing downtime by 25%.',
      'Collaborated with cross-functional teams to design secure cloud architectures.'
    ]
  },
  {
    role: 'AWS DevOps Engineer',
    company: 'REP Electronic Payments Services Pvt Ltd (APKAPAY)',
    location: 'Hyderabad, India',
    period: 'May 2023 - May 2024',
    description: [
      'Managed AWS services including EC2, S3, RDS, and VPC.',
      'Designed CI/CD pipelines using Jenkins to automate deployments.',
      'Provisioned infrastructure using Terraform (IaC).',
      'Deployed containerized applications using Docker and Kubernetes.',
      'Implemented monitoring and logging using CloudWatch and ELK stack.'
    ]
  },
  {
    role: 'Trainee Consultant',
    company: 'Joules to Watts Business Solutions Pvt Ltd',
    location: 'Bengaluru, India',
    period: 'Feb 2023 - May 2023',
    description: [
      'Assisted with CI/CD pipelines using Jenkins and GitHub Actions.',
      'Supported Terraform-based AWS provisioning.',
      'Helped containerize applications using Docker and Kubernetes.',
      'Monitored infrastructure using Prometheus and Grafana.',
      'Learned cloud architecture and security best practices.'
    ]
  },
  {
    role: 'Junior DevOps Engineer',
    company: 'NTT DATA Business Solutions India Pvt Ltd',
    location: 'Bengaluru, India',
    period: 'May 2020 - Dec 2022',
    description: [
      'Built and maintained CI/CD pipelines using Jenkins.',
      'Automated AWS infrastructure using Terraform.',
      'Worked with Docker and Kubernetes for application deployments.',
      'Implemented monitoring using Prometheus and Grafana.',
      'Collaborated with teams on secure cloud design.'
    ]
  }
];

const EDUCATION = [
  {
    institution: 'Sri Venkateswara University, Tirupati',
    degree: 'Bachelor of Computer Applications (BCA)',
    period: '2017 - 2020'
  },
];

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center space-x-2">
              <Cloud className="w-8 h-8 text-emerald-600" />
              <span className="font-bold text-xl tracking-tight text-slate-900 uppercase">Shaik Moulali</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                    activeSection === link.id ? 'text-emerald-600' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-slate-900 focus:outline-none"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 py-4 px-4 space-y-4 shadow-xl">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left text-base font-medium text-slate-600 hover:text-emerald-600"
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.2),transparent_50%)]"></div>
          <div className="grid grid-cols-12 h-full opacity-10">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="border-[0.5px] border-emerald-500 h-24"></div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-2/3 text-center lg:text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm font-medium mb-6 animate-pulse">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Actively looking for Cloud & DevOps roles
              </div>
              <h1 className="text-4xl lg:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-300">Shaik Moulali</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-300 font-medium mb-8 max-w-2xl mx-auto lg:mx-0">
                AWS Cloud & DevOps Engineer focused on building scalable cloud infrastructure and automating delivery pipelines.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
                <div className="flex items-center space-x-2 text-slate-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                  <Terminal className="w-5 h-5 text-emerald-400" />
                  <span className="font-mono text-sm">Terraform</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                  <Cpu className="w-5 h-5 text-emerald-400" />
                  <span className="font-mono text-sm">Kubernetes</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                  <Workflow className="w-5 h-5 text-emerald-400" />
                  <span className="font-mono text-sm">CI/CD</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg shadow-lg shadow-emerald-900/40 transition-all transform hover:-translate-y-1 text-center cursor-pointer"
                >
                  Get In Touch
                </button>
                <button 
                  onClick={() => scrollToSection('experience')}
                  className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg border border-slate-700 transition-all text-center cursor-pointer"
                >
                  View Experience
                </button>
              </div>
            </div>

            <div className="hidden lg:block lg:w-1/3 mt-12 lg:mt-0 relative">
               <div className="relative z-10 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm animate-float">
                  <div className="flex space-x-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <pre className="font-mono text-sm text-emerald-300">
                    <code>{`$ terraform init
Initializing modules...
- module.vpc
- module.eks_cluster

$ kubectl get nodes
NAME             STATUS   ROLES
aws-worker-01    Ready    <none>
aws-worker-02    Ready    <none>

$ status: "Deployed"
$ infrastructure: "Scaling"`}</code>
                  </pre>
               </div>
               <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl"></div>
               <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-lime-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                <span className="w-8 h-1 bg-emerald-600 mr-3 rounded-full"></span>
                Professional Summary
              </h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  I’m an <span className="text-emerald-700 font-semibold">AWS DevOps Engineer</span> with hands-on experience building CI/CD pipelines, deploying containerized applications, and automating cloud infrastructure using Terraform. I specialize in designing reliable, scalable cloud environments on AWS and improving delivery speed with automation.
                </p>
                <p>
                  I enjoy working across both cloud and on-prem systems — managing EC2, VPC networking, security groups, load balancers, S3 storage, Lambda automation, and CloudWatch monitoring.
                </p>
                <p>
                  My strengths include problem-solving, debugging production issues, and ensuring secure and efficient cloud operations. I’m always focused on learning, improving workflows, and contributing to reliable DevOps practices.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-8">
                <div>
                  <div className="text-3xl font-bold text-emerald-600">5+</div>
                  <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-600">20+</div>
                  <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">AWS Services</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-600">10+</div>
                  <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">DevOps Tools</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 hover:shadow-xl transition-all hover:-translate-y-1">
                  <ShieldCheck className="w-10 h-10 text-emerald-600 mb-4" />
                  <h3 className="font-bold mb-2">Security First</h3>
                  <p className="text-sm text-slate-500">IAM policies, Security Groups, and VPC best practices.</p>
                </div>
                <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 hover:shadow-xl transition-all hover:-translate-y-1">
                  <Workflow className="w-10 h-10 text-emerald-600 mb-4" />
                  <h3 className="font-bold mb-2">Automation</h3>
                  <p className="text-sm text-slate-500">CI/CD pipelines with Jenkins, ArgoCD and GitHub Actions.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 hover:shadow-xl transition-all hover:-translate-y-1">
                  <Server className="w-10 h-10 text-emerald-700 mb-4" />
                  <h3 className="font-bold mb-2">Infrastructure</h3>
                  <p className="text-sm text-slate-500">IaC with Terraform for reproducible environments.</p>
                </div>
                <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 hover:shadow-xl transition-all hover:-translate-y-1">
                  <Cpu className="w-10 h-10 text-emerald-500 mb-4" />
                  <h3 className="font-bold mb-2">Containers</h3>
                  <p className="text-sm text-slate-500">Docker & Kubernetes for scalable orchestration.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Cloud & DevOps Tech Stack</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Specialized in AWS cloud architecture and modern DevOps practices for high-performance delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Category: AWS Cloud */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 group hover:border-emerald-300 transition-colors">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-emerald-100 rounded-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Cloud className="w-6 h-6 text-emerald-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">AWS Services</h3>
              </div>
              <ul className="space-y-3">
                {SKILLS.filter(s => s.category === 'Cloud').map(skill => (
                  <li key={skill.name} className="flex items-center text-slate-600">
                    <ChevronRight className="w-4 h-4 text-emerald-500 mr-2" />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Category: DevOps & Orchestration */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 group hover:border-emerald-300 transition-colors">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-emerald-100 rounded-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Workflow className="w-6 h-6 text-emerald-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">DevOps & CI/CD</h3>
              </div>
              <ul className="space-y-3">
                {SKILLS.filter(s => s.category === 'DevOps').map(skill => (
                  <li key={skill.name} className="flex items-center text-slate-600">
                    <ChevronRight className="w-4 h-4 text-emerald-500 mr-2" />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Category: IaC & Tools */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 group hover:border-emerald-300 transition-colors">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-emerald-100 rounded-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Code2 className="w-6 h-6 text-emerald-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">IaC & Tooling</h3>
              </div>
              <ul className="space-y-3">
                {SKILLS.filter(s => ['IaC', 'Tools'].includes(s.category)).map(skill => (
                  <li key={skill.name} className="flex items-center text-slate-600">
                    <ChevronRight className="w-4 h-4 text-emerald-500 mr-2" />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Work Experience</h2>
          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative pl-8 border-l-2 border-emerald-600/30 pb-12 last:pb-0">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-600 border-4 border-white shadow-sm"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                    <div className="text-emerald-700 font-semibold">{exp.company}</div>
                  </div>
                  <div className="text-emerald-700 font-medium text-sm mt-2 md:mt-0 bg-emerald-50 px-3 py-1 rounded-full flex items-center border border-emerald-100">
                    {exp.period}
                  </div>
                </div>
                <div className="flex items-center text-slate-500 text-sm mb-4">
                  <MapPin className="w-4 h-4 mr-1 text-emerald-600" />
                  {exp.location}
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-slate-600 flex items-start">
                      <span className="text-emerald-600 mr-2 font-bold">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Education</h2>
          <div className="grid gap-6">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center group hover:border-emerald-300 transition-colors">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{edu.institution}</h3>
                  <p className="text-slate-600">{edu.degree}</p>
                </div>
                <div className="mt-2 md:mt-0 px-4 py-1 bg-emerald-50 rounded-full text-sm font-medium text-emerald-700 border border-emerald-100">
                  {edu.period}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl relative border border-emerald-900/50">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-600/5 skew-x-12 translate-x-20 pointer-events-none"></div>
            
            <div className="p-8 lg:p-16 flex flex-col lg:flex-row gap-16">
              <div className="lg:w-1/2">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">Let's connect and build something great!</h2>
                <p className="text-slate-400 text-lg mb-10">
                  I specialize in designing and automating secure, scalable infrastructure across AWS, Azure, Alibaba, and GCP, using modern DevOps practices.
                  My experience includes Kubernetes, Docker, Terraform, CI/CD pipelines, monitoring, and cloud security.
                  I am open to DevOps Engineer, Cloud Engineer, and Platform Engineer roles where I can help teams build reliable and efficient systems.
                </p>

                <div className="space-y-6">
                  <a href="mailto:moula.cloud5@gmail.com" className="flex items-center group">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mr-4 group-hover:bg-emerald-600 transition-colors">
                      <Mail className="w-6 h-6 text-emerald-400 group-hover:text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 uppercase font-bold tracking-wider">Email</div>
                      <div className="text-white font-medium">moula.cloud5@gmail.com</div>
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/in/shaik-moulali-517b35278" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mr-4 group-hover:bg-emerald-600 transition-colors">
                      <Linkedin className="w-6 h-6 text-emerald-400 group-hover:text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 uppercase font-bold tracking-wider">LinkedIn</div>
                      <div className="text-white font-medium">shaik-moulali</div>
                    </div>
                  </a>
                  <div className="flex items-center group">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 uppercase font-bold tracking-wider">Location</div>
                      <div className="text-white font-medium">Madanapalle, Andhra Pradesh, India</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 bg-slate-800/50 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-wide">Name</label>
                      <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-wide">Email</label>
                      <input type="email" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-wide">Subject</label>
                    <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all" placeholder="Job Opportunity" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-wide">Message</label>
                    <textarea rows={4} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all" placeholder="Your message here..."></textarea>
                  </div>
                  <button type="submit" className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-all shadow-lg shadow-emerald-900/40">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deploy Section */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold mb-4 border border-emerald-200">
            <Download className="w-4 h-4 mr-2" />
            Deployment Guide
          </div>
          <h2 className="text-xl font-bold mb-4">Hosting on AWS EC2 with Apache2</h2>
          <div className="bg-slate-900 text-left p-6 rounded-xl font-mono text-sm text-emerald-300 overflow-x-auto border border-emerald-900/50">
            <p className="mb-2"># 1. SSH into your EC2 and install Apache</p>
            <p className="mb-2">sudo apt update && sudo apt install apache2 -y</p>
            <p className="mb-2"># 2. Build this project</p>
            <p className="mb-2">npm run build</p>
            <p className="mb-2"># 3. Transfer build contents to Apache web root</p>
            <p>sudo rm -rf /var/www/html/*</p>
            <p>sudo cp -r build/* /var/www/html/</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Cloud className="w-6 h-6 text-emerald-600" />
              <span className="font-bold text-lg tracking-tight text-slate-900">SHAIK MOULALI</span>
            </div>
            <div className="text-slate-500 text-sm font-medium">
              &copy; {new Date().getFullYear()} Shaik Moulali. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/shaik-moulali-517b35278" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-slate-400 hover:text-emerald-600 transition-colors cursor-pointer"
              >
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
