export const portfolioData = {
  developer: {
    name: "Alex Johnson",
    title: "Full Stack Developer & UI/UX Enthusiast",
    bio: "I craft beautiful, functional web experiences with 5+ years of expertise in modern technologies. Passionate about creating solutions that make a difference.",
    aboutDescription: "I'm a passionate full-stack developer with over 5 years of experience creating digital solutions that combine beautiful design with robust functionality. My journey started with a curiosity for how things work on the web, and it has evolved into a career focused on crafting exceptional user experiences.",
    experienceDescription: "I specialize in modern JavaScript frameworks, cloud infrastructure, and agile development practices. When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, or mentoring aspiring developers in my community.",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
  },
  
  skills: [
    { 
      name: "JavaScript", 
      icon: "fab fa-js-square", 
      color: "text-yellow-600",
      gradient: "bg-gradient-to-br from-yellow-200 via-yellow-100 to-amber-50",
      selectedGradient: "bg-gradient-to-br from-yellow-300 via-yellow-200 to-amber-100",
      projects: ["E-commerce Platform", "Analytics Dashboard"],
      description: "Core language for dynamic web applications and interactive user interfaces"
    },
    { 
      name: "React", 
      icon: "fab fa-react", 
      color: "text-blue-600",
      gradient: "bg-gradient-to-br from-blue-200 via-blue-100 to-cyan-50",
      selectedGradient: "bg-gradient-to-br from-blue-300 via-blue-200 to-cyan-100",
      projects: ["E-commerce Platform", "Analytics Dashboard"],
      description: "Building responsive SPAs with component-based architecture"
    },
    { 
      name: "Node.js", 
      icon: "fab fa-node-js", 
      color: "text-green-600",
      gradient: "bg-gradient-to-br from-green-200 via-green-100 to-emerald-50",
      selectedGradient: "bg-gradient-to-br from-green-300 via-green-200 to-emerald-100",
      projects: ["E-commerce Platform", "Fitness Tracking App"],
      description: "Backend development and API creation for scalable applications"
    },
    { 
      name: "Vue.js", 
      icon: "fab fa-vuejs", 
      color: "text-emerald-600",
      gradient: "bg-gradient-to-br from-emerald-200 via-emerald-100 to-teal-50",
      selectedGradient: "bg-gradient-to-br from-emerald-300 via-emerald-200 to-teal-100",
      projects: ["Task Management App", "Portfolio Management System"],
      description: "Progressive framework for building user interfaces and SPAs"
    },
    { 
      name: "MongoDB", 
      icon: "fas fa-database", 
      color: "text-orange-600",
      gradient: "bg-gradient-to-br from-orange-200 via-orange-100 to-amber-50",
      selectedGradient: "bg-gradient-to-br from-orange-300 via-orange-200 to-amber-100",
      projects: ["E-commerce Platform"],
      description: "NoSQL database for flexible data storage and management"
    },
    { 
      name: "Firebase", 
      icon: "fas fa-fire", 
      color: "text-red-600",
      gradient: "bg-gradient-to-br from-red-200 via-rose-100 to-pink-50",
      selectedGradient: "bg-gradient-to-br from-red-300 via-rose-200 to-pink-100",
      projects: ["Task Management App"],
      description: "Real-time database and authentication for collaborative features"
    },
    { 
      name: "D3.js", 
      icon: "fas fa-chart-bar", 
      color: "text-red-600",
      gradient: "bg-gradient-to-br from-red-200 via-red-100 to-rose-50",
      selectedGradient: "bg-gradient-to-br from-red-300 via-red-200 to-rose-100",
      projects: ["Analytics Dashboard"],
      description: "Data visualization library for interactive charts and graphs"
    },
    { 
      name: "Tailwind CSS", 
      icon: "fas fa-palette", 
      color: "text-cyan-600",
      gradient: "bg-gradient-to-br from-cyan-200 via-teal-100 to-blue-50",
      selectedGradient: "bg-gradient-to-br from-cyan-300 via-teal-200 to-blue-100",
      projects: ["Task Management App"],
      description: "Utility-first CSS framework for rapid UI development"
    }
  ],

  projects: [
    {
      title: "E-commerce Platform",
      description: "Complete e-commerce solution for LocalDiscountMart in Rwanda. Features shopping cart, order management, admin dashboard, and Rwanda Franc currency support with real-time inventory tracking.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
      liveDemo: "https://discountmart.onrender.com/DiscountMart/home",
      github: "https://github.com/casmonster/LocalDiscountMart"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features built with Vue.js and Firebase.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Vue.js", "Firebase", "Tailwind"],
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard with interactive charts, data visualization, and custom reporting features. Built with React and D3.js for data visualization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "D3.js", "Express"],
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Social Media Platform",
      description: "Full-featured social media platform with real-time messaging, post sharing, user authentication, and responsive design optimized for mobile and desktop.",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Next.js", "Socket.io", "PostgreSQL"],
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Fitness Tracking App",
      description: "Mobile-first fitness tracking application with workout planning, progress tracking, and social features. Built with React Native and Node.js backend.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React Native", "Node.js", "Redis"],
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Portfolio Management System",
      description: "Content management system for creative professionals to showcase their work with customizable themes, client galleries, and integrated contact forms.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Laravel", "Vue.js", "MySQL"],
      liveDemo: "#",
      github: "#"
    }
  ],

  workspaceImages: [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
  ],

  stats: {
    projectsCompleted: "50+",
    yearsExperience: "5+",
    happyClients: "30+",
    technologies: "20+"
  },

  contact: {
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA"
  },

  footer: {
    copyright: "© 2024 Alex Johnson. All rights reserved. Built with passion and modern web technologies."
  }
};

export const getTechColor = (tech: string): string => {
  const colors: Record<string, string> = {
    React: "bg-blue-100 text-blue-800",
    "Node.js": "bg-green-100 text-green-800",
    MongoDB: "bg-purple-100 text-purple-800",
    "Vue.js": "bg-green-100 text-green-800",
    Firebase: "bg-orange-100 text-orange-800",
    Tailwind: "bg-blue-100 text-blue-800",
    "D3.js": "bg-yellow-100 text-yellow-800",
    Express: "bg-indigo-100 text-indigo-800",
    "Next.js": "bg-blue-100 text-blue-800",
    "Socket.io": "bg-purple-100 text-purple-800",
    PostgreSQL: "bg-green-100 text-green-800",
    "React Native": "bg-blue-100 text-blue-800",
    Redis: "bg-red-100 text-red-800",
    Laravel: "bg-purple-100 text-purple-800",
    MySQL: "bg-orange-100 text-orange-800"
  };
  return colors[tech] || "bg-gray-100 text-gray-800";
};
