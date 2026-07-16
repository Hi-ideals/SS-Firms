// ============================================================
// CONTENT.JS - Single Source of Truth for SSFirms Website
// All text, links, images, and data live here
// ============================================================

const SITE = {
  name: "SS FIRMS",
  tagline: "Empowering Your Success with Expert Consulting Solutions",
  email: "info@ssfirms.com",
  contactEmail: "contact@ssfirms.com",
  phone: "+16893086349",
  phoneDisplay: "+16893086349",

  addresses: {
    usa: {
      label: "USA",
      street: "141 Hardenburg Lane, East Brunswick, NJ 08816 USA",
      phone: "+16893086349",
      email: "info@ssfirms.com",
      hours: "9 AM EST to 6:00 PM EST"
    },
    india: {
      label: "INDIA",
      street: "SS ARCADE, CMC 8/10/349 Plot No 45, Opposite Bus Depot Gate 2, Devi Colony, Bidar, Karnataka – 585401",
      phone: "+16893086349",
      email: "info@ssfirms.com",
      hours: "9 AM IST to 6:00 PM IST"
    }
  },

  // Sub-pages use different address
  subpageAddress: {
    usa: "SS ARCADE, CMC 8/10/349 Plot No 45, Opposite Bus Depot Gate 2, Devi Colony, Bidar, Karnataka – 585401",
    phone: "+16893086349",
    email: "info@ssfirms.com"
  },

  social: {
    facebook: "#",
    whatsapp: "#",
    linkedin: "#",
    twitter: "#"
  },

  nav: [
    { label: "Home",       href: "index.html",      id: "home" },
    { label: "About Us",   href: "about-us.html",   id: "about" },
    {
      label: "Services", href: "services.html", id: "services",
      dropdown: [
        { label: "Engineering",            href: "engineering.html" },
        { label: "Artificial Intelligence",href: "artificial-intelligence.html" },
        { label: "Cloud",                  href: "cloud.html" },
        { label: "SAP",                    href: "sap.html" },
        { label: "IoT",                    href: "iot.html" },
        { label: "Energy & Utilities",     href: "energy-utilities.html" },
        { label: "IT Staffing",            href: "it-staffing.html" }
      ]
    },
    { label: "Industries", href: "industries.html", id: "industries" },
    { label: "Clients",    href: "clients.html",    id: "clients" },
    { label: "Careers",    href: "careers.html",    id: "careers" },
    { label: "Contact Us", href: "contact-us.html", id: "contact" }
  ],

  footer: {
    about: "We can help you build your business through automation & IT Services. Our Services combined with our strategic business and innovation goal with immense experience with industry needs.",
    quickLinks: [
      { label: "About Us",   href: "about-us.html" },
      { label: "Services",   href: "services.html" },
      { label: "Clients",    href: "clients.html" },
      { label: "Careers",    href: "careers.html" },
      { label: "Contact Us", href: "contact-us.html" }
    ],
    services: [
      { label: "Engineering",             href: "engineering.html" },
      { label: "Artificial Intelligence", href: "artificial-intelligence.html" },
      { label: "Cloud",                   href: "cloud.html" },
      { label: "SAP",                     href: "sap.html" }
    ],
    industries: [
      { label: "BFSI",            href: "industries.html" },
      { label: "Health Care",     href: "industries.html" },
      { label: "Education",       href: "industries.html" },
      { label: "Energy & Utility",href: "industries.html" },
      { label: "Manufacturing",   href: "industries.html" },
      { label: "IT Staffing",     href: "industries.html" }
    ],
    copyright: "SSFirms©2024. All rights reserved",
    designedBy: "Designed by Hi Ideals",
    designedByLink: "https://hiideals.com/"
  },

  // ---- HOME PAGE ----
  home: {
    hero: {
      slides: [
        {
          image: "images/Home/image-55.png",
          title: "Empowering Your Success with Expert Consulting Solutions",
          btnText: "READ MORE",
          btnHref: "about-us.html"
        },
        {
          image: "images/Home/IT-Staffing-Services.jpg",
          title: "Empowering Your Success with Expert Consulting Solutions",
          btnText: "READ MORE",
          btnHref: "about-us.html"
        }
      ]
    },
    about: {
      label: "ABOUT US",
      heading: "Empowering Businesses with Innovative IT Solutions",
      body: "We can help you build your business through automation & IT Services. Our Services combined with our strategic business and innovation goal with immense experience with industry needs.",
      btnText: "Read More",
      btnHref: "about-us.html",
      image: ""
    },
    services: {
      label: "OUR SERVICES",
      heading: "Comprehensive IT Consulting Solutions",
      btnText: "READ MORE",
      btnHref: "services.html",
      bgImage: "images/Industries/image-54.png"
    },
    industries: {
      heading: "Industries",
      items: [
        { label: "Media & Entertainment", href: "#", image: "images/Industries/media-entertainment-img1.png" },
        { label: "Telecom",               href: "#", image: "images/Industries/telecon-home.png" },
        { label: "Agriculture",           href: "#", image: "images/Industries/agriculture-home.png" },
        { label: "Manufacturing",         href: "#", image: "images/Industries/image-44.png" },
        { label: "BFSI",                  href: "#", image: "images/Industries/image-39-1.png" },
        { label: "Health Care",           href: "#", image: "images/Industries/image-40-1.png" }
      ]
    },
    whyChooseUs: {
      heading: "Why Choose Us",
      body: "We can help you build your business through automation & IT Services. Our Services combined with our strategic business and innovation goal with immense experience with industry needs.",
      image: "images/Industries/image-61.png",
      features: [
        { label: "Expertise & Experience",  href: "#" },
        { label: "Customized Solutions",    href: "#" },
        { label: "Innovative Technology",   href: "#" },
        { label: "Cost-Effective Services", href: "#" },
        { label: "Client-Centric Approach", href: "#" },
        { label: "Comprehensive Services",  href: "#" }
      ]
    },
    cta: {
      heading: "Expert advice to propel your business forward",
      placeholder: "Email",
      btnText: "Get A Free Consultation",
      bgImage: "images/Industries/image-47.png"
    },
    partners: {
      heading: "Our Partners",
      items: [
        { name: "JCCI NY",      href: "https://www.jcciny.org",      image: "images/Industries/brand1-300x100.png" },
        { name: "Accion Labs",  href: "https://www.accionlabs.com/", image: "images/Home/Accion-labs-logo.svg" }
      ]
    },
    contact: {
      heading: "Contact Us",
      body: "Reach out to us for expert IT consulting services; we're here to help you navigate the ever-evolving world of technology and ensure your business success"
    }
  },

  // ---- ABOUT US PAGE ----
  about: {
    banner: {
      title: "About SS Firms",
      image: "images/about-illustration.jpg"
    },
    whoWeAre: {
      heading: "Who Are We",
      body: "We can help you build your business through automation & IT Services. Our Services combined with our strategic business and innovation goal with immense experience with industry needs.",
      illustration: "images/who-are-we.jpg",
      vision: {
        icon: "chart-bar",
        title: "Vision",
        desc: "We aim to be an organization that provides global IT services & solutions with excellent technology and human resources."
      },
      mission: {
        icon: "crosshairs",
        title: "Mission",
        desc: "Our mission is to serve technology service that move the way people move and make right decisions."
      }
    },
    marketTrends: {
      illustration: "images/market-trends.jpg",
      heading: "Keep Track The Overall The Market Trends & Mores.",
      body: "Quisque ac dolor nec nisl pellen tesque ulla mor. Ves tibulum sed per ultrices mi morbi etamus. Ei erant pha edrum vis. Eut alii auta ea, tek sit timeam.",
      btnText: "Learn more",
      btnHref: "#"
    },
    testimonials: {
      label: "Clients Say",
      heading: "Testimonials",
      intro: {
        title: "About our clients",
        body: "We can help you build your business through automation & IT Services. Our Services combined with our strategic business and innovation goal with immense experience with industry needs."
      },
      items: [
        {
          quote: "Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks",
          name: "Amelia Mia",
          role: "WordPress Dev.",
          image: "images/About us/Team_img-4-2-1-150x150.jpeg"
        },
        {
          quote: "Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks",
          name: "Charlie Cooper",
          role: "WordPress Dev.",
          image: "images/About us/Lovely-Customer_img-3-1.jpeg"
        },
        {
          quote: "Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks",
          name: "Elizabeth Sofia",
          role: "WordPress Dev.",
          image: "images/About us/Team_img-2-2-1-150x150.jpeg"
        },
        {
          quote: "Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks",
          name: "Elizabeth Sofia",
          role: "WordPress Dev.",
          image: "images/About us/Team_img-2-2-1-150x150.jpeg"
        }
      ]
    },
    readyBanner: {
      heading: "Ready to get started?",
      subheading: "It's fast, free and very easy!",
      btnText: "Contact Us",
      btnHref: "contact-us.html"
    }
  },

  // ---- SERVICES PAGE ----
  services: {
    banner: {
      label: "SS Firms",
      heading: "Our Services",
      illustration: ""
    },
    items: [
      {
        id: "engineering",
        label: "Engineering",
        icon: "",
        href: "engineering.html"
      },
      {
        id: "ai",
        label: "Artificial Intelligence",
        icon: "",
        href: "artificial-intelligence.html"
      },
      {
        id: "cloud",
        label: "Cloud",
        icon: "",
        href: "cloud.html"
      },
      {
        id: "sap",
        label: "SAP",
        icon: "",
        href: "sap.html"
      },
      {
        id: "iot",
        label: "IoT",
        icon: "",
        href: "iot.html"
      },
      {
        id: "energy",
        label: "Energy & Utilities",
        icon: "",
        href: "energy-utilities.html"
      },
      {
        id: "staffing",
        label: "IT staffing",
        icon: "",
        href: "it-staffing.html"
      }
    ],
    promo: {
      leftText: "Enjoy unlimited management solution",
      rightLabel: "Get tips & tricks"
    }
  },

  // ---- ENGINEERING PAGE ----
  engineering: {
    banner: { label: "Services", heading: "Engineering", illustration: "" },
    intro: {
      heading: "Engineering Services",
      body: "Engineering is the backbone of technological innovation, driving the creation and optimization of products and platforms that transform industries. Our engineering expertise spans across multiple domains, ensuring the delivery of robust, scalable, and efficient solutions."
    },
    capabilities: [
      {
        title: "Product & Platform Development",
        body: "We specialize in building cutting-edge products and platforms that are tailored to meet industry-specific needs, ensuring seamless functionality and exceptional user experience."
      },
      {
        title: "DevOps",
        body: "Our DevOps practices bridge the gap between development and operations, enabling faster deployment cycles, improved collaboration, and enhanced software quality through continuous integration and delivery."
      },
      {
        title: "Quality Engineering",
        body: "We ensure that every product meets the highest standards of quality through rigorous testing methodologies, automated testing frameworks, and continuous quality assurance processes."
      },
      {
        title: "Data Engineering",
        body: "Our data engineering services help organizations build robust data pipelines, manage large-scale datasets, and derive actionable insights to drive data-driven decision making."
      },
      {
        title: "Cloud Engineering",
        body: "We leverage the power of cloud platforms to architect, build, and manage scalable and resilient infrastructure solutions that meet the evolving demands of modern businesses."
      },
      {
        title: "Security Engineering",
        body: "Our security engineering services protect your systems and data from evolving threats through comprehensive security assessments, architecture design, and implementation of robust security controls."
      }
    ]
  },

  // ---- AI PAGE ----
  ai: {
    banner: { label: "Services", heading: "Artificial Intelligence", illustration: "" },
    intro: {
      heading: "Artificial Intelligence Services",
      body: "Artificial Intelligence is transforming industries by enabling machines to perform tasks that typically require human intelligence. Our AI expertise helps businesses leverage cutting-edge AI technologies to drive innovation, efficiency, and competitive advantage."
    },
    capabilities: [
      {
        title: "Machine Learning",
        body: "We develop and deploy custom machine learning models that learn from data to make predictions, identify patterns, and automate complex decision-making processes."
      },
      {
        title: "Natural Language Processing",
        body: "Our NLP solutions enable machines to understand, interpret, and generate human language, powering applications like chatbots, sentiment analysis, and text classification."
      },
      {
        title: "Computer Vision",
        body: "We build computer vision systems that can analyze and interpret visual information from the real world, enabling applications like image recognition, object detection, and video analysis."
      },
      {
        title: "Responsible AI",
        body: "Responsible AI emphasizes the ethical use of AI technologies, ensuring transparency, fairness, and accountability in AI-driven decisions and applications."
      },
      {
        title: "AI Strategy & Consulting",
        body: "We help organizations develop comprehensive AI strategies, identify high-impact use cases, and build the foundation for successful AI adoption and implementation."
      },
      {
        title: "Generative AI",
        body: "Our generative AI solutions leverage state-of-the-art models to create new content, designs, and solutions, enabling unprecedented levels of creativity and automation."
      }
    ]
  },

  // ---- CLOUD PAGE ----
  cloud: {
    banner: { label: "Services", heading: "Cloud", illustration: "" },
    intro: {
      heading: "Cloud Services",
      body: "Cloud computing is revolutionizing how businesses operate by offering scalable, flexible, and cost-effective IT infrastructure. Our cloud services help organizations migrate to, optimize, and innovate on the cloud platform of their choice."
    },
    capabilities: [
      {
        title: "Cloud Migration",
        body: "We provide end-to-end cloud migration services, helping organizations seamlessly transition their workloads, applications, and data to the cloud with minimal disruption."
      },
      {
        title: "Cloud Architecture & Design",
        body: "Our experts design scalable, secure, and highly available cloud architectures that align with your business requirements and leverage cloud-native best practices."
      },
      {
        title: "Cloud Security",
        body: "We implement comprehensive cloud security solutions to protect your data, applications, and infrastructure from threats while ensuring compliance with industry regulations."
      },
      {
        title: "DevOps & Cloud Automation",
        body: "Our DevOps practices and cloud automation capabilities enable faster deployment, improved reliability, and reduced operational overhead through CI/CD pipelines and Infrastructure as Code."
      },
      {
        title: "Multi-Cloud Management",
        body: "We help organizations manage and optimize their multi-cloud environments, ensuring seamless integration, cost efficiency, and consistent governance across cloud providers."
      },
      {
        title: "Cloud Cost Optimization",
        body: "Our cloud cost optimization services help organizations identify and eliminate waste, right-size resources, and implement strategies to maximize the return on their cloud investments."
      }
    ]
  },

  // ---- SAP PAGE ----
  sap: {
    banner: { label: "Services", heading: "SAP", illustration: "" },
    intro: {
      heading: "SAP Services",
      body: "SAP solutions empower businesses to streamline processes, enhance collaboration, and gain real-time insights. Our SAP expertise helps organizations implement, customize, and optimize SAP solutions to drive business transformation."
    },
    capabilities: [
      {
        title: "SAP Implementation",
        body: "We provide comprehensive SAP implementation services, guiding organizations through every phase of their SAP journey from planning and design to go-live and support."
      },
      {
        title: "SAP S/4HANA Migration",
        body: "Our SAP S/4HANA migration services help organizations transition to the next-generation ERP, unlocking the benefits of real-time analytics, simplified processes, and digital transformation."
      },
      {
        title: "SAP Integration",
        body: "We design and implement robust SAP integration solutions that enable seamless data flow and process automation across your SAP and non-SAP systems."
      },
      {
        title: "SAP Analytics",
        body: "Our SAP analytics services help organizations leverage SAP's powerful analytics tools to gain deep business insights and make data-driven decisions."
      },
      {
        title: "SAP Support & Maintenance",
        body: "We provide ongoing SAP support and maintenance services to ensure your SAP systems are running optimally, with timely updates, performance tuning, and issue resolution."
      },
      {
        title: "SAP Custom Development",
        body: "Our SAP development team creates custom solutions, enhancements, and add-ons that extend the standard SAP functionality to meet your unique business requirements."
      }
    ]
  },

  // ---- IoT PAGE ----
  iot: {
    banner: { label: "Services", heading: "IoT", illustration: "" },
    intro: {
      heading: "IoT Services",
      body: "The Internet of Things (IoT) is connecting the physical and digital worlds, enabling unprecedented levels of automation, efficiency, and insight. Our IoT services help businesses harness the power of connected devices to transform their operations."
    },
    capabilities: [
      {
        title: "IoT Strategy & Consulting",
        body: "We help organizations develop comprehensive IoT strategies, identify high-value use cases, and build the foundation for successful IoT adoption and implementation."
      },
      {
        title: "IoT Platform Development",
        body: "Our team builds robust and scalable IoT platforms that connect, manage, and analyze data from diverse IoT devices, enabling intelligent automation and insights."
      },
      {
        title: "Edge Computing",
        body: "We implement edge computing solutions that process data closer to the source, reducing latency, improving reliability, and enabling real-time decision-making in IoT environments."
      },
      {
        title: "IoT Security",
        body: "Our IoT security services protect your connected devices, networks, and data from evolving threats through comprehensive security assessments and implementation of robust security controls."
      },
      {
        title: "IoT Analytics",
        body: "We develop advanced analytics solutions that extract actionable insights from IoT data, enabling organizations to optimize operations, predict maintenance needs, and improve customer experiences."
      },
      {
        title: "Industrial IoT (IIoT)",
        body: "Our IIoT solutions connect industrial equipment, machinery, and systems, enabling smart manufacturing, predictive maintenance, and operational efficiency improvements."
      }
    ]
  },

  // ---- ENERGY & UTILITIES PAGE ----
  energy: {
    banner: { label: "Services", heading: "Energy & Utilities", illustration: "" },
    intro: {
      heading: "Energy & Utilities Services",
      body: "The energy and utilities sector is undergoing a profound transformation driven by digitalization, decarbonization, and decentralization. Our specialized services help energy and utility companies navigate these changes and capitalize on emerging opportunities."
    },
    capabilities: [
      {
        title: "Smart Grid Solutions",
        body: "We design and implement smart grid technologies that enable utilities to optimize energy distribution, reduce losses, and integrate renewable energy sources effectively."
      },
      {
        title: "Energy Analytics",
        body: "Our energy analytics solutions help organizations gain deep insights into energy consumption patterns, optimize operations, and identify opportunities for efficiency improvements."
      },
      {
        title: "Renewable Energy Integration",
        body: "We provide expertise in integrating renewable energy sources into existing grids and developing new renewable energy management systems for a sustainable future."
      },
      {
        title: "Asset Management",
        body: "Our asset management solutions help energy companies track, monitor, and optimize the performance of their physical assets, reducing downtime and extending asset life."
      },
      {
        title: "Digital Transformation",
        body: "We help energy and utility companies leverage digital technologies to transform their business models, improve customer engagement, and drive operational efficiency."
      },
      {
        title: "Regulatory Compliance",
        body: "Our regulatory compliance services help energy organizations navigate complex regulatory requirements and maintain compliance with industry standards and government regulations."
      }
    ]
  },

  // ---- IT STAFFING PAGE ----
  staffing: {
    banner: { label: "Services", heading: "IT Staffing", illustration: "" },
    intro: {
      heading: "IT Staffing Services",
      body: "Finding the right IT talent is critical for business success in today's competitive technology landscape. Our IT staffing services connect organizations with highly skilled technology professionals who drive innovation and deliver results."
    },
    capabilities: [
      {
        title: "Contract Staffing",
        body: "We provide skilled IT professionals on a contract basis, giving organizations the flexibility to scale their teams up or down based on project requirements and business needs."
      },
      {
        title: "Permanent Placement",
        body: "Our permanent placement services help organizations find and hire top IT talent who align with their culture, values, and long-term technology strategy."
      },
      {
        title: "Contract-to-Hire",
        body: "Our contract-to-hire model allows organizations to evaluate IT professionals before making a permanent hiring decision, reducing hiring risk and ensuring the right fit."
      },
      {
        title: "Executive Search",
        body: "We specialize in identifying and recruiting top-level IT executives and technology leaders who can drive digital transformation and lead high-performing teams."
      },
      {
        title: "Project-Based Staffing",
        body: "We assemble specialized teams for specific technology projects, providing the right mix of skills and expertise to ensure project success and on-time delivery."
      },
      {
        title: "Staff Augmentation",
        body: "Our staff augmentation services seamlessly integrate IT professionals into your existing teams, providing the additional capacity and specialized skills needed to accelerate project delivery."
      }
    ]
  },

  // ---- INDUSTRIES PAGE ----
  industries: {
    banner: { label: "SS Firms", heading: "Industries", illustration: "" },
    items: [
      {
        title: "Media & Entertainment",
        image: "images/Industries/media-entertainment-img1.png",
        desc: "We help media and entertainment companies leverage technology to create compelling content experiences, optimize distribution, and engage audiences across digital platforms."
      },
      {
        title: "Telecom",
        image: "images/Industries/telecon-home.png",
        desc: "Our telecom solutions help service providers modernize their networks, launch new services, and deliver exceptional customer experiences in the age of 5G and beyond."
      },
      {
        title: "Agriculture",
        image: "images/Industries/agriculture-home.png",
        desc: "We bring digital innovation to agriculture, helping farmers and agribusinesses leverage IoT, AI, and data analytics to optimize yields and improve sustainability."
      },
      {
        title: "Manufacturing",
        image: "images/Industries/image-44.png",
        desc: "Our manufacturing solutions help companies embrace Industry 4.0, automate production processes, and gain real-time visibility into their operations through smart manufacturing."
      },
      {
        title: "BFSI",
        image: "images/Industries/image-39-1.png",
        desc: "We help banking, financial services, and insurance companies modernize their IT infrastructure, enhance security, and deliver seamless digital experiences to customers."
      },
      {
        title: "Health Care",
        image: "images/Industries/image-40-1.png",
        desc: "Our healthcare IT solutions help providers improve patient outcomes, streamline operations, and navigate complex regulatory requirements while embracing digital transformation."
      },
      {
        title: "Education",
        image: "images/Industries/image-41-1.png",
        desc: "We help educational institutions leverage technology to enhance learning experiences, improve administrative efficiency, and prepare students for the digital economy."
      },
      {
        title: "Energy & Utility",
        image: "images/Industries/image-47.png",
        desc: "Our energy and utility solutions help companies optimize operations, integrate renewable energy, and deliver reliable services to customers in a rapidly evolving landscape."
      }
    ]
  },

  // ---- CLIENTS PAGE ----
  clients: {
    banner: { label: "SS Firms", heading: "Our Clients", illustration: "" },
    heading: "Our Valued Clients",
    body: "We are proud to serve a diverse portfolio of clients across various industries. Our commitment to excellence and innovation has helped our clients achieve their business objectives and digital transformation goals.",
    items: []  // client logos/details to be added
  },

  // ---- CAREERS PAGE ----
  careers: {
    banner: { label: "SS Firms", heading: "Careers", illustration: "" },
    heading: "Join Our Team",
    body: "We are always looking for talented and passionate individuals to join our growing team. Explore our current openings and take the next step in your career.",
    openings: []  // job listings to be added
  },

  // ---- CONTACT US PAGE ----
  contactPage: {
    banner: { label: "SS Firms", heading: "Contact Us", illustration: "" },
    heading: "Contact Us",
    body: "Reach out to us for expert IT consulting services; we're here to help you navigate the ever-evolving world of technology and ensure your business success",
    mapEmbed: "https://maps.google.com/maps?q=East+Brunswick+NJ&output=embed"
  }
};

// Export for use in other scripts
if (typeof module !== "undefined") module.exports = SITE;
