import { useState, useEffect } from 'react';

// --- Inline SVG Icons (Zero External Dependencies) ---
const IconMenu = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
);
const IconX = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);
const IconArrowRight = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);
const IconPlay = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="6 3 20 12 6 21 6 3"/></svg>
);
const IconChevronDown = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m6 9 6 6 6-6"/></svg>
);

export default function App() {
  // @ts-ignore
  const [isScrolled, setIsScrolled] = useState(false); // eslint-disable-line
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // @ts-ignore
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 }); // eslint-disable-line
  // @ts-ignore
  const [isHovering, setIsHovering] = useState(false); // eslint-disable-line

  // Navigation Dropdown state
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  // Modals & Interactive Room Explorer state
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('all');
  const [selectedRoom, setSelectedRoom] = useState<string>('living');
  const [sqFt, setSqFt] = useState(1000);
  const [ratePerSqFt, setRatePerSqFt] = useState(999);


  // Scroll effect for Navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom Cursor Tracker
  useEffect(() => {
    const updateCursorPosition = (e: any) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateCursorPosition);
    return () => window.removeEventListener('mousemove', updateCursorPosition);
  }, []);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const roomSpaces = {
    living: {
      title: "Smart Living Room",
      subtitle: "Warm-toned living area with crystal chandelier, walnut TV unit with fluted paneling, beige L-shaped sofa, and ambient cove-lit false ceiling.",
      image: "./Hall 2.jpeg"
    },
    bedroom: {
      title: "Master Bedroom Suite",
      subtitle: "Serene bedroom with wooden fluted headboard wall, warm LED strip accents, pendant bedside lamps, and golden cove ceiling illumination.",
      image: "./BedRoom 1.jpeg"
    },
    kitchen: {
      title: "Parallel Modular Kitchen",
      subtitle: "Bright galley kitchen with cream cabinetry, pull-out organizers, integrated appliances, and warm recessed ceiling lighting.",
      image: "./KItchen.jpeg"
    },
    bathroom: {
      title: "Spa-Inspired Bathroom",
      subtitle: "Luxurious bathroom with emerald green marble walls, brushed gold fixtures, backlit oval mirror, and floating vanity with under-glow lighting.",
      image: "./BathRoom.jpeg"
    },
    entrance: {
      title: "Designer Main Door",
      subtitle: "Custom-designed entrance with geometric jali pattern door, fluted cladding side panels, backlit name plate, and welcoming planter niche.",
      image: "./Main Entrance.jpeg"
    },
    mandir: {
      title: "Sacred Mandir Alcove",
      subtitle: "Handcrafted prayer space with ornate Mughal arch, backlit Om symbol, jali lattice crown, brass bell, and marble platform.",
      image: "./Mandir.jpeg"
    }
  };

  const projects = [
    {
      id: 1,
      title: "Golden Living Room",
      category: "Residential",
      location: "Mumbai, Maharashtra",
      area: "350 sq.ft",
      budget: "₹18L - ₹25L",
      timeline: "6 Weeks",
      image: "./Hall 3.jpeg",
      desc: "Contemporary living room with ring chandelier, fluted TV panel, ambient cove lighting, gold wall art accents, and beige sectional sofa arrangement."
    },
    {
      id: 2,
      title: "Walk-In Wardrobe Suite",
      category: "Residential",
      location: "Navi Mumbai",
      area: "180 sq.ft",
      budget: "₹8L - ₹12L",
      timeline: "4 Weeks",
      image: "./BedRoom 2.jpeg",
      desc: "Master bedroom with illuminated glass-fronted wardrobe, LED shelf lighting, natural daylight from floor-to-ceiling curtains, and layered false ceiling."
    },
    {
      id: 3,
      title: "Olive Modular Kitchen",
      category: "Residential",
      location: "Thane, Maharashtra",
      area: "120 sq.ft",
      budget: "₹8L - ₹12L",
      timeline: "5 Weeks",
      image: "./KItchen 2.jpeg",
      desc: "Parallel galley kitchen in warm olive-green base with oak upper cabinetry, integrated appliances, spice pull-outs, and designer ceiling cove lighting."
    },
    {
      id: 4,
      title: "Sage Green Bedroom",
      category: "Residential",
      location: "Pune, Maharashtra",
      area: "200 sq.ft",
      budget: "₹10L - ₹15L",
      timeline: "4 Weeks",
      image: "./BedRoom 3.jpeg",
      desc: "Elegant bedroom featuring sage green channel-tufted headboard with walnut fluted flanks, gold-leaf wall art, and designer pendant lights."
    }
  ];

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(p => p.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#F5F5F5] selection:bg-[#C9A76A] selection:text-white">

      {/* AEO & SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Space Age Interiors",
            "image": "https://www.spaceageinteriors.com/logo%20%202.jpeg",
            "url": "https://www.spaceageinteriors.com/",
            "telephone": "+91-9999999999",
            "priceRange": "₹₹₹₹",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Luxury Studio Lane",
              "addressLocality": "Mumbai",
              "addressRegion": "Maharashtra",
              "postalCode": "400001",
              "addressCountry": "IN"
            },
            "description": "Space Age Interiors crafts luminous, high-end residential spaces with warm gold accents, cove-lit false ceilings, Italian marble, and bespoke wooden fluting.",
            "sameAs": [
              "https://www.instagram.com/spaceageinteriors",
              "https://www.linkedin.com/company/spaceageinteriors"
            ]
          })
        }}
      />

      {/* Global CSS Inject */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');

        body {
          font-family: 'Inter', sans-serif;
          background-color: #FDFBF7;
          color: #1A1A1A;
          cursor: none;
          overflow-x: hidden;
        }

        h1, h2, h3, h4, .font-serif {
          font-family: 'Playfair Display', serif;
        }

        .glass-nav {
          background: rgba(253, 251, 247, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #FDFBF7; }
        ::-webkit-scrollbar-thumb { background: #D4D0C5; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #C9A76A; }

        /* Custom Luxury Cursor */
        .cursor-dot {
          pointer-events: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 8px;
          height: 8px;
          background: #C9A76A;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          z-index: 99999;
          transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1), height 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s;
        }
        .cursor-dot.hovering {
          width: 50px;
          height: 50px;
          background: rgba(201, 167, 106, 0.15);
          border: 1px solid rgba(201, 167, 106, 0.5);
          mix-blend-mode: difference;
        }

        .hero-zoom {
          animation: slowZoom 25s ease-out infinite alternate;
        }
        @keyframes slowZoom {
          from { transform: scale(1); }
          to { transform: scale(1.08); }
        }

        .project-card:hover .project-img {
          transform: scale(1.04);
        }
      `}} />

      {/* Custom Cursor */}
      <div
        className={`cursor-dot hidden md:block ${isHovering ? 'hovering' : ''}`}
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      />

      {/* Navigation Header using 3-Column Grid Layout to Prevent Overlap */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-5 shadow-sm' : 'bg-transparent py-7'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-3 items-center">

          {/* Column 1: Left Menu */}
          <div className="hidden md:flex items-center space-x-10 text-xs tracking-[0.2em] uppercase text-gray-300 font-medium">
            <a href="#studio" className="hover:text-[#C9A76A] transition-colors py-1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              Studio
            </a>

            {/* Services Dropdown Menu */}
            <div
              className="relative py-2"
              onMouseEnter={() => { setServicesDropdownOpen(true); handleMouseEnter(); }}
              onMouseLeave={() => { setServicesDropdownOpen(false); handleMouseLeave(); }}
            >
              <a href="#services" className="hover:text-[#C9A76A] transition-colors flex items-center gap-1">
                Services <IconChevronDown size={14} />
              </a>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-[#0F0F0F] border border-gray-800 shadow-2xl py-3 mt-1 flex flex-col z-50">
                  <a href="#services" className="px-6 py-2.5 text-[11px] tracking-widest text-gray-300 hover:bg-[#FDFBF7] hover:text-[#C9A76A] transition-colors">
                    Residential Interiors
                  </a>
                  <a href="#services" className="px-6 py-2.5 text-[11px] tracking-widest text-gray-300 hover:bg-[#FDFBF7] hover:text-[#C9A76A] transition-colors">
                    Commercial Spaces
                  </a>
                  <a href="#services" className="px-6 py-2.5 text-[11px] tracking-widest text-gray-300 hover:bg-[#FDFBF7] hover:text-[#C9A76A] transition-colors">
                    Turnkey Architecture
                  </a>
                  <a href="#services" className="px-6 py-2.5 text-[11px] tracking-widest text-gray-300 hover:bg-[#FDFBF7] hover:text-[#C9A76A] transition-colors">
                    Bespoke Furniture
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="text-center">
          <a href="#" className="inline-block cursor-hover">
            <img src="./logo  2.jpeg" alt="Space Age Interiors" className="h-12 md:h-16 w-auto mx-auto invert brightness-125" />
          </a>
        </div>

          {/* Column 3: Right Menu & CTA */}
          <div className="hidden md:flex items-center justify-end space-x-8 text-xs tracking-[0.2em] uppercase text-gray-300 font-medium">
            <a href="#portfolio" className="hover:text-[#C9A76A] transition-colors py-1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              Portfolio
            </a>
            <a href="#experience" className="hover:text-[#C9A76A] transition-colors py-1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              Experience
            </a>
            <button
              onClick={() => setConsultationOpen(true)}
              className="bg-transparent border border-[#C9A76A] text-[#F5F5F5] px-5 py-2 text-[11px] tracking-[0.2em] uppercase hover:bg-[#C9A76A] hover:text-white transition-all duration-500 font-medium"
              onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            >
              Consult
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden col-span-2 text-right">
            <button className="text-[#F5F5F5]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <IconX size={26} /> : <IconMenu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#FDFBF7] z-40 flex flex-col justify-center items-center space-y-6 h-screen">
          <a href="#studio" className="font-serif text-2xl text-[#F5F5F5] hover:text-[#C9A76A]" onClick={() => setIsMobileMenuOpen(false)}>Studio</a>
          <a href="#services" className="font-serif text-2xl text-[#F5F5F5] hover:text-[#C9A76A]" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="#portfolio" className="font-serif text-2xl text-[#F5F5F5] hover:text-[#C9A76A]" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</a>
          <a href="#experience" className="font-serif text-2xl text-[#F5F5F5] hover:text-[#C9A76A]" onClick={() => setIsMobileMenuOpen(false)}>Experience</a>
          <button
            onClick={() => { setIsMobileMenuOpen(false); setConsultationOpen(true); }}
            className="bg-[#C9A76A] text-white px-8 py-3 text-xs uppercase tracking-widest font-medium mt-4"
          >
            Book Consultation
          </button>
        </div>
      )}

      <main id="main-content" role="main">

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[#0F0F0F]/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-[#FDFBF7] z-10"></div>

        <div className="absolute inset-0 w-full h-full">
          <img
            src="./Hall.jpeg"
            alt="Bright Luxury Living Room"
            className="w-full h-full object-cover hero-zoom opacity-90 filter brightness-[1.05]"
          />
        </div>

        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto pt-16">
          <p className="font-serif text-xl sm:text-2xl md:text-3xl text-gray-200 italic font-normal mb-6 max-w-2xl leading-snug">
            Designing The Future Of Luxury Living.
          </p>

          <p className="text-gray-400 font-light text-sm md:text-base max-w-xl mb-10 leading-relaxed">
            Crafting luminous, high-end residential and commercial spaces defined by natural daylight, tactile stone textures, and precise spatial engineering.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="#portfolio"
              className="bg-[#1A1A1A] text-white px-8 py-4 uppercase tracking-widest text-xs font-semibold flex items-center justify-center gap-3 hover:bg-[#C9A76A] transition-colors duration-500 shadow-xl"
              onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            >
              Explore Masterpieces
              <IconArrowRight size={15} />
            </a>
            <button
              onClick={() => setConsultationOpen(true)}
              className="bg-transparent border border-gray-400 text-[#F5F5F5] px-8 py-4 uppercase tracking-widest text-xs font-semibold flex items-center justify-center gap-3 hover:border-[#1A1A1A] transition-colors duration-500"
              onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            >
              <IconPlay size={14} className="fill-current text-[#C9A76A]" />
              Book Private Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Modern House Interior Showcase (Rooms Explorer) */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-gray-800 bg-[#FDFBF7]">
        <div className="text-center mb-16">
          <span className="text-[#C9A76A] tracking-[0.25em] uppercase text-xs block mb-3 font-semibold">Spatial Exploration</span>
          <h2 className="font-serif text-3xl md:text-5xl mb-4 leading-tight text-[#F5F5F5]">Modern House Interiors</h2>
          <p className="text-gray-400 font-light text-sm max-w-lg mx-auto">Select a zone below to experience our signature warm luxury design language across different spaces.</p>

          {/* Room Selection Tabs */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-8">
            {[
              { id: 'living', label: 'Living Room' },
              { id: 'bedroom', label: 'Bedroom' },
              { id: 'kitchen', label: 'Kitchen' },
              { id: 'bathroom', label: 'Bathroom' },
              { id: 'entrance', label: 'Entrance' },
              { id: 'mandir', label: 'Mandir' }
            ].map((room) => (
              <button
                key={room.id}
                onClick={() => setSelectedRoom(room.id)}
                className={`px-6 py-3 text-xs uppercase tracking-widest transition-all duration-300 border ${selectedRoom === room.id ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] font-semibold' : 'bg-[#0F0F0F] text-gray-300 border-gray-800 hover:border-[#C9A76A]'}`}
                onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
              >
                {room.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Room Preview Display */}
        <div className="relative rounded-lg overflow-hidden border border-gray-800 bg-[#0F0F0F] shadow-xl transition-all duration-700">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 h-[400px] md:h-[520px] overflow-hidden relative">
              <img
                src={(roomSpaces as any)[selectedRoom].image}
                alt={(roomSpaces as any)[selectedRoom].title}
                className="w-full h-full object-cover bg-transparent filter brightness-[1.02] transition-all duration-700 hover:scale-105"
              />
            </div>
            <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center">
              <span className="text-[#C9A76A] tracking-[0.2em] uppercase text-xs font-semibold mb-3">Signature Space</span>
              <h3 className="font-serif text-3xl md:text-4xl mb-4 leading-snug text-[#F5F5F5]">{(roomSpaces as any)[selectedRoom].title}</h3>
              <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed mb-8">
                {(roomSpaces as any)[selectedRoom].subtitle}
              </p>
              <button
                onClick={() => setConsultationOpen(true)}
                className="self-start border border-[#1A1A1A] text-[#F5F5F5] px-6 py-3 uppercase tracking-widest text-xs font-medium hover:bg-[#1A1A1A] hover:text-white transition-colors"
              >
                Inquire For This Space
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Studio / About Section */}
      <section id="studio" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-gray-800">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#C9A76A] tracking-[0.25em] uppercase text-xs block mb-4 font-semibold">The Studio</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight text-[#F5F5F5]">
              A minimalist approach to <br/>
              <span className="text-[#C9A76A] italic">maximal living.</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed mb-10 max-w-lg">
              We transcend traditional interior design. By fusing world-class architectural principles with cutting-edge spatial technology, we craft environments that don't just look spectacular—they anticipate your lifestyle.
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-gray-800 pt-10">
              <div>
                <div className="text-4xl font-serif text-[#F5F5F5] mb-2">15+</div>
                <div className="text-xs tracking-widest text-gray-500 uppercase">Years Legacy</div>
              </div>
              <div>
                <div className="text-4xl font-serif text-[#F5F5F5] mb-2">500+</div>
                <div className="text-xs tracking-widest text-gray-500 uppercase">Global Masterpieces</div>
              </div>
            </div>
          </div>

          <div className="relative group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="absolute inset-0 border border-[#C9A76A]/40 translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
            <img
              src="./Mandir.jpeg"
              alt="Studio Philosophy"
              className="relative z-10 w-full object-cover bg-transparent aspect-[4/5] filter grayscale-[10%] group-hover:grayscale-0 transition-all duration-700 shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Services Hub */}
      <section id="services" className="py-24 bg-[#0F0F0F] border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div>
              <span className="text-[#C9A76A] tracking-[0.25em] uppercase text-xs block mb-4 font-semibold">Our Expertise</span>
              <h2 className="font-serif text-4xl md:text-5xl text-[#F5F5F5]">End-to-End <br/>Execution.</h2>
            </div>
            <p className="text-gray-400 font-light max-w-md text-sm mt-4 md:mt-0">
              From initial structural coordination to bespoke furniture manufacturing and smart home automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Residential Interiors", desc: "Bespoke villas, luxury penthouses, and private estates curated around elite comfort." },
              { title: "Commercial Spaces", desc: "Award-winning corporate HQs, flagship retail outlets, and five-star hospitality venues." },
              { title: "Turnkey Architecture", desc: "Complete architectural planning, structural coordination, facade engineering, and landscaping." }
            ].map((service, index) => (
              <div
                key={index}
                className="group p-10 bg-[#FDFBF7] border border-gray-800 hover:border-[#C9A76A] transition-colors duration-500 relative overflow-hidden shadow-sm"
                onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
              >
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  <IconArrowRight className="text-[#C9A76A]" size={22} />
                </div>
                <div className="text-[#C9A76A] font-serif text-2xl mb-4 opacity-60 group-hover:opacity-100 transition-opacity">
                  0{index + 1}
                </div>
                <h3 className="font-serif text-2xl mb-4 text-[#F5F5F5]">{service.title}</h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed mb-8">
                  {service.desc}
                </p>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C9A76A] group-hover:w-full transition-all duration-700 ease-out"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section id="portfolio" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-[#C9A76A] tracking-[0.25em] uppercase text-xs block mb-4 font-semibold">Portfolio</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#F5F5F5]">Curated Masterpieces</h2>
          </div>

          {/* Category Filter */}
          <div className="flex space-x-6 mt-6 md:mt-0 text-xs uppercase tracking-widest font-medium">
            {['All', 'Residential', 'Commercial', 'Retail'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`pb-1 transition-colors ${activeTab === tab.toLowerCase() ? 'text-[#C9A76A] border-b border-[#C9A76A]' : 'text-gray-500 hover:text-[#F5F5F5]'}`}
                onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className={`project-card cursor-pointer group ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
              onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            >
              <div className="overflow-hidden relative mb-6 bg-gray-200 shadow-md">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img w-full h-[55vh] object-cover bg-transparent transition-transform duration-1000 ease-out"
                />
                <div className="absolute bottom-6 right-6 z-20 bg-[#0F0F0F]/90 backdrop-blur-md px-4 py-2 text-xs uppercase tracking-widest text-[#F5F5F5] border border-gray-800 shadow">
                  Explore Case Study
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-serif text-2xl mb-1 text-[#F5F5F5]">{project.title}</h3>
                  <p className="text-xs tracking-widest text-gray-500 uppercase">{project.category} &bull; {project.location}</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-[#1A1A1A] group-hover:bg-[#1A1A1A] group-hover:text-white transition-colors">
                  <IconArrowRight size={18} className="-rotate-45" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience / Interactive Showroom Banner */}
      <section id="experience" className="py-24 bg-[#0F0F0F] border-t border-gray-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#C9A76A] tracking-[0.25em] uppercase text-xs block mb-4 font-semibold">Digital Showroom</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-[#F5F5F5]">Experience Architecture Before It's Built.</h2>
            <p className="text-gray-400 font-light mb-8 leading-relaxed">
              Step inside virtual 3D walkthroughs, experiment with high-end Italian marbles and custom architectural wood veneers in real-time, and collaborate directly with our principal designers.
            </p>
            <button
              onClick={() => setConsultationOpen(true)}
              className="bg-[#1A1A1A] text-white px-8 py-4 uppercase tracking-widest text-xs font-semibold hover:bg-[#C9A76A] transition-colors"
            >
              Schedule Virtual Tour
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="./Showroom_Entrance_1.jpeg" alt="Patil's Entrance Door Design" className="w-full h-64 object-cover bg-transparent shadow-sm filter brightness-[1.02]" />
            <img src="./Showroom_Entrance_2.jpg" alt="Naskar's Entrance Door Design" className="w-full h-64 object-cover bg-transparent mt-8 shadow-sm filter brightness-[1.02]" />
          </div>
        </div>
      </section>

      </main>
      {/* Project Cost Estimator */}
      <section className="py-24 bg-[#0F0F0F] border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#C9A76A] tracking-[0.2em] uppercase text-xs font-semibold block mb-3">Cost Estimator</span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#F5F5F5]">Calculate Your Interior Cost</h2>
          </div>

          <div className="bg-[#1A1A1A] p-8 md:p-12 rounded-sm border border-gray-800 shadow-2xl">
            <div className="space-y-8">
              {/* Square Footage Slider */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="text-gray-300 font-medium uppercase tracking-wider text-sm">Area (Sq. Ft.)</label>
                  <span className="text-[#C9A76A] font-serif text-2xl">{sqFt.toLocaleString()} sq.ft</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="100"
                  value={sqFt}
                  onChange={(e) => setSqFt(Number(e.target.value))}
                  className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#C9A76A]"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>500 sq.ft</span>
                  <span>10,000+ sq.ft</span>
                </div>
              </div>

              {/* Rate per Sq Ft Slider */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="text-gray-300 font-medium uppercase tracking-wider text-sm">Design & Material Quality (Rate per Sq. Ft.)</label>
                  <span className="text-[#C9A76A] font-serif text-2xl">${ratePerSqFt.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="999"
                  max="99999"
                  step="100"
                  value={ratePerSqFt}
                  onChange={(e) => setRatePerSqFt(Number(e.target.value))}
                  className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#C9A76A]"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>₹999 (Essential)</span>
                  <span>₹99,999 (Ultra Luxury)</span>
                </div>
              </div>

              {/* Total Estimated Cost */}
              <div className="pt-8 mt-8 border-t border-gray-800 text-center">
                <span className="text-gray-400 uppercase tracking-widest text-xs block mb-2">Estimated Total Cost</span>
                <div className="font-serif text-5xl md:text-6xl text-[#F5F5F5]">
                  ${(sqFt * ratePerSqFt).toLocaleString()}
                </div>
                <p className="text-gray-500 text-sm mt-4 italic">*This is a rough estimate. Final cost depends on specific material selection and scope of work.</p>
                <button
                  onClick={() => setConsultationOpen(true)}
                  className="mt-8 px-8 py-4 bg-[#C9A76A] text-[#0F0F0F] font-medium tracking-wide uppercase text-sm hover:bg-[#b5955b] transition-colors"
                >
                  Get a Detailed Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

      <footer className="bg-[#1A1A1A] text-white pt-24 pb-12 px-6 md:px-12 border-t border-gray-800" role="contentinfo">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <img src="./logo  2.jpeg" alt="Space Age Interiors" className="h-16 md:h-20 w-auto invert brightness-125 mb-6" />
            <p className="text-gray-400 font-light text-sm max-w-sm leading-relaxed mb-8">
              Luxury. Innovation. Precision. Crafting timeless architectural environments for modern living.
            </p>
          </div>

          <div>
            <h4 className="text-white tracking-widest uppercase text-xs font-semibold mb-6">Navigation</h4>
            <ul className="space-y-4 text-xs tracking-wider text-gray-400 uppercase font-light">
              <li><a href="#studio" className="hover:text-white transition-colors">Studio</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white tracking-widest uppercase text-xs font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-xs tracking-wider text-gray-400 font-light">
              <li>R21, Malad (East), Mumbai - 400097.</li>
              <li>spaceageinterior22@gmail.com</li>
              <li>+91-8097499616</li>
              <li className="pt-2"><span className="text-[#C9A76A] font-medium">Mon – Sat:</span> 10AM – 7PM</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Space Age Interiors. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* Consultation Modal */}
      {consultationOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0F0F0F] border border-gray-800 max-w-lg w-full p-8 md:p-10 relative shadow-2xl">
            <button onClick={() => setConsultationOpen(false)} className="absolute top-6 right-6 text-gray-400 hover:text-black">
              <IconX size={24} />
            </button>
            <span className="text-[#C9A76A] tracking-[0.2em] uppercase text-xs block mb-2 font-semibold">Private Booking</span>
            <h3 className="font-serif text-3xl mb-6 text-[#F5F5F5]">Book Consultation</h3>

            <form onSubmit={(e) => { e.preventDefault(); alert("Consultation request received. Our principal architect will contact you within 2 hours."); setConsultationOpen(false); }} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Full Name</label>
                <input required type="text" className="w-full bg-[#FDFBF7] border border-gray-700 p-3 text-[#F5F5F5] text-sm focus:border-[#C9A76A] outline-none" placeholder="e.g., Alexander Wright" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Email</label>
                  <input required type="email" className="w-full bg-[#FDFBF7] border border-gray-700 p-3 text-[#F5F5F5] text-sm focus:border-[#C9A76A] outline-none" placeholder="alexander@domain.com" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Phone</label>
                  <input required type="tel" className="w-full bg-[#FDFBF7] border border-gray-700 p-3 text-[#F5F5F5] text-sm focus:border-[#C9A76A] outline-none" placeholder="+1 (555) 019-2834" />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Property Type & Budget</label>
                <select className="w-full bg-[#FDFBF7] border border-gray-700 p-3 text-[#F5F5F5] text-sm focus:border-[#C9A76A] outline-none">
                  <option>Luxury Villa (₹2M - ₹5M+)</option>
                  <option>Penthouse / Apartment (₹1M - ₹3M)</option>
                  <option>Commercial Headquarters (₹5M+)</option>
                  <option>Boutique Retail / Showroom</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-[#1A1A1A] text-white py-4 font-semibold uppercase tracking-widest text-xs hover:bg-[#C9A76A] transition-colors mt-4">
                Confirm Private Request
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Project Case Study Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 md:p-10 overflow-y-auto">
          <div className="bg-[#0F0F0F] border border-gray-800 max-w-4xl w-full p-8 md:p-12 relative my-auto shadow-2xl">
            <button onClick={() => setActiveProject(null)} className="absolute top-6 right-6 text-gray-400 hover:text-black">
              <IconX size={26} />
            </button>

            <span className="text-[#C9A76A] tracking-[0.2em] uppercase text-xs block mb-2 font-semibold">{activeProject.category} &bull; {activeProject.location}</span>
            <h2 className="font-serif text-3xl md:text-5xl mb-6 text-[#F5F5F5]">{activeProject.title}</h2>

            <img src={activeProject.image} alt={activeProject.title} className="w-full h-[40vh] object-cover bg-transparent mb-8 shadow-sm filter brightness-[1.02]" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-gray-800 py-6 mb-8 text-xs uppercase tracking-wider">
              <div>
                <span className="text-gray-500 block mb-1">Total Area</span>
                <span className="text-[#F5F5F5] font-semibold text-sm">{activeProject.area}</span>
              </div>
              <div>
                <span className="text-gray-500 block mb-1">Budget Range</span>
                <span className="text-[#F5F5F5] font-semibold text-sm">{activeProject.budget}</span>
              </div>
              <div>
                <span className="text-gray-500 block mb-1">Timeline</span>
                <span className="text-[#F5F5F5] font-semibold text-sm">{activeProject.timeline}</span>
              </div>
              <div>
                <span className="text-gray-500 block mb-1">Status</span>
                <span className="text-[#C9A76A] font-semibold text-sm">Completed & Handed Over</span>
              </div>
            </div>

            <p className="text-gray-300 font-light leading-relaxed text-base mb-8">
              {activeProject.desc} Our approach on this project centered on seamless indoor-outdoor thresholds, custom lighting choreography, and rigorous spatial optimization tailored to the client's private lifestyle requirements.
            </p>

            <button
              onClick={() => { setActiveProject(null); setConsultationOpen(true); }}
              className="bg-[#1A1A1A] text-white px-8 py-4 uppercase tracking-widest text-xs font-semibold hover:bg-[#C9A76A] transition-colors"
            >
              Inquire About Similar Design
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
