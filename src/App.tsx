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
const IconHome = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
);
const IconShield = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
);
const IconLock = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
);
const IconGlobe = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
);
const IconCloudRain = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M16 14v6"/><path d="M8 14v6"/><path d="M12 16v6"/></svg>
);
const IconThermometer = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/></svg>
);
const IconMapPin = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
);
const IconGear = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
);
const IconMolecule = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className}>
    <g fill="currentColor">
      <circle cx="6.5" cy="7" r="2.4" />
      <circle cx="17.5" cy="8.5" r="2" />
      <circle cx="9.5" cy="17" r="2" />
      <circle cx="18" cy="16.5" r="1.6" />
    </g>
    <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
      <line x1="8.6" y1="7.6" x2="15.6" y2="8.6" />
      <line x1="7.9" y1="8.9" x2="8.8" y2="15" />
      <line x1="11.3" y1="16.6" x2="16.4" y2="16.4" />
    </g>
  </svg>
);
const IconInstagram = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const IconTwitter = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);
const IconYoutube = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
);
const IconFacebook = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const SOCIALS = [
  { Icon: IconInstagram, label: "Instagram" },
  { Icon: IconTwitter, label: "Twitter" },
  { Icon: IconYoutube, label: "YouTube" },
  { Icon: IconFacebook, label: "Facebook" },
];

// --- Invoice page (gradient-abstract-technology invoice reference) ---

function InvoiceSection() {
  const [date, setDate] = useState(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' }));
  const [clientName, setClientName] = useState('Client Name');
  const [clientLocation, setClientLocation] = useState('Mumbai, Maharashtra');
  const [invoiceNumber, setInvoiceNumber] = useState('Invoice #001');

  const [items, setItems] = useState([
    { id: 1, name: 'Modular Kitchen — Design & Installation', price: 185000, qty: 1 },
    { id: 2, name: 'False Ceiling & Cove Lighting', price: 96000, qty: 1 },
    { id: 3, name: 'Walk-In Wardrobe — Fluted Finish', price: 142000, qty: 1 },
    { id: 4, name: 'Italian Marble & Wall Cladding', price: 218000, qty: 1 },
    { id: 5, name: 'Smart Lighting & Home Automation', price: 74000, qty: 1 },
  ]);

  const updateItem = (id: number, field: string, value: any) => {
    setItems(items.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const addItem = () => {
    const newId = items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1;
    setItems([...items, { id: newId, name: 'New Item', price: 0, qty: 1 }]);
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + tax;
  const inr = (n: number) => '₹' + n.toLocaleString('en-IN');

  return (
    <section className="relative py-24 px-4 md:px-8 grad-page overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10 reveal in">
          <div>
            <span className="text-orange-400 tracking-[0.25em] uppercase text-xs font-bold block mb-3">Billing Desk</span>
            <h2 className="text-4xl md:text-5xl font-black">Client <span className="grad-text">Invoice</span></h2>
          </div>
          <button onClick={() => window.print()} className="grad-btn text-white px-6 py-3 rounded-xl text-xs font-extrabold uppercase tracking-widest print:hidden">
            Print Invoice
          </button>
        </div>

        <div className="invoice-card relative p-7 md:p-12 reveal in">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center text-white">
                <IconMolecule size={26} />
              </div>
              <div>
                <p className="font-black tracking-[0.28em] text-sm text-white">SPACE AGE</p>
                <p className="text-[10px] tracking-[0.34em] text-purple-200/80 uppercase">Interiors</p>
              </div>
            </div>
            <h3 className="text-4xl md:text-5xl font-black tracking-[0.1em] text-white">INVOICE</h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mt-10 text-xs md:text-sm">
            <div className="space-y-1">
              <input type="text" value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} className="bg-transparent font-extrabold tracking-[0.18em] uppercase text-white outline-none border-b border-dashed border-white/30 focus:border-white w-full print:border-none" />
              <div className="flex items-center text-white">
                <span className="font-extrabold tracking-[0.18em] uppercase mr-2">Date:</span>
                <input type="text" value={date} onChange={(e) => setDate(e.target.value)} className="bg-transparent font-extrabold tracking-[0.18em] uppercase text-white outline-none border-b border-dashed border-white/30 focus:border-white print:border-none" />
              </div>
            </div>
            <div className="space-y-1 sm:text-right">
              <p className="font-extrabold tracking-[0.18em] uppercase text-white">Billing To:</p>
              <input type="text" value={clientName} onChange={(e) => setClientName(e.target.value)} className="bg-transparent font-extrabold tracking-[0.18em] uppercase text-white outline-none border-b border-dashed border-white/30 focus:border-white w-full sm:text-right print:border-none" />
              <input type="text" value={clientLocation} onChange={(e) => setClientLocation(e.target.value)} className="bg-transparent font-extrabold tracking-[0.18em] uppercase text-white outline-none border-b border-dashed border-white/30 focus:border-white w-full sm:text-right print:border-none" />
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden mt-8">
            <div className="grid grid-cols-12 bg-[#ee4b1f] text-white text-[10px] md:text-xs font-extrabold uppercase tracking-[0.18em] px-4 md:px-6 py-3">
              <div className="col-span-5">Product</div>
              <div className="col-span-3 text-right">Price</div>
              <div className="col-span-1 text-center">Qty</div>
              <div className="col-span-3 text-right">Total</div>
            </div>
            {items.map((item) => (
              <div key={item.id} className="grid grid-cols-12 items-center bg-white text-[#2b0a54] px-4 md:px-6 py-3.5 text-[11px] md:text-sm border-b border-[#e4def5] last:border-0 group">
                <div className="col-span-5 font-semibold pr-2 leading-snug flex items-center">
                  <button onClick={() => removeItem(item.id)} className="text-red-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity print:hidden" aria-label="Remove item"><IconX size={14}/></button>
                  <input type="text" value={item.name} onChange={(e) => updateItem(item.id, 'name', e.target.value)} className="bg-transparent w-full outline-none border-b border-transparent focus:border-[#2b0a54]/30 print:border-none" />
                </div>
                <div className="col-span-3 text-right font-semibold">
                  <span className="mr-1">₹</span>
                  <input type="number" value={item.price} onChange={(e) => updateItem(item.id, 'price', Number(e.target.value))} className="bg-transparent w-24 text-right outline-none border-b border-transparent focus:border-[#2b0a54]/30 print:border-none" />
                </div>
                <div className="col-span-1 text-center font-semibold">
                  <input type="number" value={item.qty} onChange={(e) => updateItem(item.id, 'qty', Number(e.target.value))} className="bg-transparent w-10 text-center outline-none border-b border-transparent focus:border-[#2b0a54]/30 print:border-none" />
                </div>
                <div className="col-span-3 text-right font-extrabold">{inr(item.price * item.qty)}</div>
              </div>
            ))}
            <div className="bg-white px-4 md:px-6 py-2 print:hidden border-t-2 border-[#2b0a54]">
               <button onClick={addItem} className="text-[#ee4b1f] text-xs font-bold uppercase tracking-widest hover:text-[#d63a12] transition-colors flex items-center gap-1">+ Add Item</button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8 items-start">
            <div className="text-xs md:text-sm leading-relaxed">
              <p className="font-extrabold uppercase tracking-[0.18em] text-white mb-3">Payment Info:</p>
              <p className="text-purple-200/90">Account Number — 5020 0044 8812</p>
              <p className="text-purple-200/90">A/C Name: Space Age Interiors</p>
              <p className="text-purple-200/90">Bank Details: HDFC Bank, Malad East, IFSC HDFC0001234</p>
              <p className="font-extrabold mt-6 mb-2 text-white">Terms And Conditions:</p>
              <p className="text-purple-200/75 text-xs leading-relaxed">50% advance to commence work, 40% on material procurement, 10% on final handover. 1-year workmanship warranty included.</p>
            </div>
            <div className="bg-[#ede9fe] rounded-2xl p-6 text-[#2b0a54]">
              <div className="flex justify-between py-1.5 text-sm"><span className="font-semibold">Subtotal</span><span className="font-extrabold">{inr(subtotal)}</span></div>
              <div className="flex justify-between py-1.5 text-sm"><span className="font-semibold">Tax (18% GST)</span><span className="font-extrabold">{inr(tax)}</span></div>
              <div className="flex justify-between items-center py-2.5 mt-2 border-t-2 border-[#2b0a54]/15 text-base md:text-lg font-black uppercase tracking-[0.14em]"><span>Total Price</span><span>{inr(total)}</span></div>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-10 print:hidden">
            {SOCIALS.map(({ Icon, label }) => (
              <a key={label} href="#" aria-label={label} className="w-10 h-10 rounded-full bg-white/12 border border-white/25 flex items-center justify-center text-white hover:bg-[#ee4b1f] hover:border-[#ee4b1f] transition-colors">
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default function App() {
  const [page, setPage] = useState<'home' | 'invoice'>('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const [consultationOpen, setConsultationOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('all');
  const [selectedRoom, setSelectedRoom] = useState<string>('living');
  const [sqFt, setSqFt] = useState(1000);
  const [ratePerSqFt, setRatePerSqFt] = useState(999);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateCursorPosition = (e: any) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', updateCursorPosition);
    return () => window.removeEventListener('mousemove', updateCursorPosition);
  }, []);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [page]);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const goTo = (id: string) => {
    if (page !== 'home') {
      setPage('home');
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 120);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const roomSpaces = {
    living: { title: "Smart Living Room", subtitle: "Warm-toned living area with crystal chandelier, walnut TV unit with fluted paneling, beige L-shaped sofa, and ambient cove-lit false ceiling.", image: "./Hall 2.jpeg" },
    bedroom: { title: "Master Bedroom Suite", subtitle: "Serene bedroom with wooden fluted headboard wall, warm LED strip accents, pendant bedside lamps, and golden cove ceiling illumination.", image: "./BedRoom 1.jpeg" },
    kitchen: { title: "Parallel Modular Kitchen", subtitle: "Bright galley kitchen with cream cabinetry, pull-out organizers, integrated appliances, and warm recessed ceiling lighting.", image: "./KItchen.jpeg" },
    bathroom: { title: "Spa-Inspired Bathroom", subtitle: "Luxurious bathroom with emerald green marble walls, brushed gold fixtures, backlit oval mirror, and floating vanity with under-glow lighting.", image: "./BathRoom.jpeg" },
    entrance: { title: "Designer Main Door", subtitle: "Custom-designed entrance with geometric jali pattern door, fluted cladding side panels, backlit name plate, and welcoming planter niche.", image: "./Main Entrance.jpeg" },
    mandir: { title: "Sacred Mandir Alcove", subtitle: "Handcrafted prayer space with ornate Mughal arch, backlit Om symbol, jali lattice crown, brass bell, and marble platform.", image: "./Mandir.jpeg" }
  };

  const projects = [
    { id: 1, title: "Golden Living Room", category: "Residential", location: "Mumbai, Maharashtra", area: "350 sq.ft", budget: "₹18L - ₹25L", timeline: "6 Weeks", image: "./Hall 3.jpeg", desc: "Contemporary living room with ring chandelier, fluted TV panel, ambient cove lighting, gold wall art accents, and beige sectional sofa arrangement." },
    { id: 2, title: "Walk-In Wardrobe Suite", category: "Residential", location: "Navi Mumbai", area: "180 sq.ft", budget: "₹8L - ₹12L", timeline: "4 Weeks", image: "./BedRoom 2.jpeg", desc: "Master bedroom with illuminated glass-fronted wardrobe, LED shelf lighting, natural daylight from floor-to-ceiling curtains, and layered false ceiling." },
    { id: 3, title: "Olive Modular Kitchen", category: "Residential", location: "Thane, Maharashtra", area: "120 sq.ft", budget: "₹8L - ₹12L", timeline: "5 Weeks", image: "./KItchen 2.jpeg", desc: "Parallel galley kitchen in warm olive-green base with oak upper cabinetry, integrated appliances, spice pull-outs, and designer ceiling cove lighting." },
    { id: 4, title: "Sage Green Bedroom", category: "Residential", location: "Pune, Maharashtra", area: "200 sq.ft", budget: "₹10L - ₹15L", timeline: "4 Weeks", image: "./BedRoom 3.jpeg", desc: "Elegant bedroom featuring sage green channel-tufted headboard with walnut fluted flanks, gold-leaf wall art, and designer pendant lights." }
  ];

  const filteredProjects = activeTab === 'all' ? projects : projects.filter(p => p.category.toLowerCase() === activeTab.toLowerCase());

  const stats = [
    { Icon: IconHome, value: "15+", label: "Years Legacy" },
    { Icon: IconShield, value: "500+", label: "Projects Delivered" },
    { Icon: IconGear, value: "98%", label: "Client Satisfaction" },
  ];

  const heroTiles = [
    { Icon: IconHome, cls: "left-[5%] top-[27%] w-14 h-14 md:w-16 md:h-16", delay: "0s" },
    { Icon: IconShield, cls: "right-[7%] top-[24%] w-14 h-14 md:w-16 md:h-16", delay: "0.8s" },
    { Icon: IconLock, cls: "right-[34%] top-[48%] w-12 h-12 md:w-14 md:h-14", delay: "1.6s" },
    { Icon: IconGlobe, cls: "left-[9%] bottom-[22%] w-12 h-12 md:w-14 md:h-14", delay: "2.2s" },
    { Icon: IconCloudRain, cls: "right-[13%] bottom-[18%] w-14 h-14 md:w-16 md:h-16", delay: "1.1s" },
    { Icon: IconThermometer, cls: "left-[36%] bottom-[14%] w-12 h-12 md:w-14 md:h-14", delay: "2.8s" },
  ];

  return (
    <div className="min-h-screen bg-[#1e0a3c] text-[#f5f3ff] selection:bg-[#ee4b1f]">
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
              "streetAddress": "R21, Malad (East)",
              "addressLocality": "Mumbai",
              "addressRegion": "Maharashtra",
              "postalCode": "400097",
              "addressCountry": "IN"
            },
            "description": "Space Age Interiors crafts luminous, high-end residential spaces with warm gold accents, cove-lit false ceilings, Italian marble, and bespoke wooden fluting.",
            "sameAs": ["https://www.instagram.com/spaceageinteriors", "https://www.linkedin.com/company/spaceageinteriors"]
          })
        }}
      />

      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,600;0,700;0,800;0,900;1,400;1,600&display=swap');
      `}} />

      <div className={`cursor-dot hidden md:block ${isHovering ? 'hovering' : ''}`} style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }} />

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-strong py-3 shadow-2xl' : 'bg-gradient-to-b from-[#1e0a3c]/90 to-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-3 items-center">
          <div className="hidden md:flex items-center gap-8 text-xs font-bold tracking-[0.14em] uppercase text-purple-100/90">
            <button onClick={() => goTo('studio')} className="hover:text-[#fb923c] transition-colors py-1">Studio</button>
            <div className="relative py-2" onMouseEnter={() => { setServicesDropdownOpen(true); handleMouseEnter(); }} onMouseLeave={() => { setServicesDropdownOpen(false); handleMouseLeave(); }}>
              <button onClick={() => goTo('services')} className="hover:text-[#fb923c] transition-colors flex items-center gap-1">Services <IconChevronDown size={14} /></button>
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-64 glass-strong rounded-2xl py-3 mt-1 flex flex-col z-50">
                  {['Residential Interiors', 'Commercial Spaces', 'Turnkey Architecture', 'Bespoke Furniture'].map((s) => (
                    <button key={s} onClick={() => goTo('services')} className="px-6 py-2.5 text-[11px] font-bold tracking-widest text-left text-purple-100/80 hover:bg-[#ee4b1f]/15 hover:text-[#fb923c] transition-colors">{s}</button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="text-center">
            <button onClick={() => goTo('hero')} className="inline-flex items-center gap-3 group">
              <span className="w-10 h-10 md:w-11 md:h-11 rounded-2xl bg-white/10 border border-white/20 backdrop-blur flex items-center justify-center text-white group-hover:bg-[#ee4b1f] group-hover:border-[#ee4b1f] transition-all">
                <IconMolecule size={22} />
              </span>
              <span className="hidden sm:block text-left leading-tight">
                <span className="block font-black tracking-[0.22em] text-sm text-white">SPACE AGE</span>
                <span className="block text-[9px] tracking-[0.4em] text-purple-200/80 uppercase">Interiors</span>
              </span>
            </button>
          </div>

          <div className="hidden md:flex items-center justify-end gap-7 text-xs font-bold tracking-[0.14em] uppercase text-purple-100/90">
            <button onClick={() => goTo('portfolio')} className="hover:text-[#fb923c] transition-colors py-1">Portfolio</button>
            <button onClick={() => goTo('experience')} className="hover:text-[#fb923c] transition-colors py-1">Experience</button>
            <button
              onClick={() => setPage('invoice')}
              className={`px-4 py-1.5 rounded-full transition-all ${page === 'invoice' ? 'bg-[#ee4b1f] text-white shadow-lg shadow-[#ee4b1f]/40' : 'hover:text-[#fb923c]'}`}
            >
              Invoice
            </button>
            <button
              onClick={() => setConsultationOpen(true)}
              className="grad-btn text-white px-5 py-2.5 rounded-full text-[11px] font-extrabold uppercase tracking-widest"
            >
              Consult
            </button>
          </div>

          <div className="md:hidden col-span-2 flex items-center justify-between">
            <button onClick={() => setPage('invoice')} className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest ${page === 'invoice' ? 'bg-[#ee4b1f] text-white' : 'text-purple-100/90'}`}>Invoice</button>
            <button className="text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <IconX size={26} /> : <IconMenu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 glass-strong z-40 flex flex-col justify-center items-center space-y-6 h-screen">
          {[
            { id: 'hero', label: 'Home' },
            { id: 'studio', label: 'Studio' },
            { id: 'services', label: 'Services' },
            { id: 'portfolio', label: 'Portfolio' },
            { id: 'experience', label: 'Experience' },
          ].map((item) => (
            <button key={item.id} onClick={() => { setIsMobileMenuOpen(false); goTo(item.id); }} className="text-2xl font-extrabold text-white hover:text-[#fb923c]">{item.label}</button>
          ))}
          <button onClick={() => { setIsMobileMenuOpen(false); setPage('invoice'); }} className="text-2xl font-extrabold text-[#fb923c]">Invoice</button>
          <button onClick={() => { setIsMobileMenuOpen(false); setConsultationOpen(true); }} className="grad-btn text-white px-8 py-3.5 rounded-full text-xs font-extrabold uppercase tracking-widest mt-4">Book Consultation</button>
        </div>
      )}

      {page === 'invoice' ? (
        <InvoiceSection />
      ) : (
        <main id="main-content" role="main">
          {/* Hero Section */}
          <section id="hero" className="relative min-h-screen w-full overflow-hidden flex items-center">
            <div className="absolute inset-0">
              <img src="./Hall.jpeg" alt="Bright Luxury Living Room" className="w-full h-full object-cover hero-zoom" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#2b0a54]/95 via-[#4c1d95]/80 to-[#2b0a54]/95" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e0a3c] via-transparent to-[#1e0a3c]/60" />
            </div>
            <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#ee4b1f]/25 blur-[110px]" />
            <div className="absolute top-1/3 right-0 w-[28rem] h-[28rem] rounded-full bg-[#c026d3]/25 blur-[130px]" />

            {/* Floating icon tiles */}
            {heroTiles.map(({ Icon, cls, delay }, i) => (
              <div key={i} className={`float-tile hidden lg:flex text-[#4c1d95] ${cls}`} style={{ animationDelay: delay }}>
                <Icon size={26} />
              </div>
            ))}

            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24 grid lg:grid-cols-2 gap-14 items-center">
              <div className="reveal in">
                <span className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 text-[11px] font-extrabold tracking-[0.22em] uppercase text-purple-100">
                  <span className="w-2 h-2 rounded-full bg-[#ee4b1f]" /> Smart Home & Luxury Interiors
                </span>
                <h1 className="text-5xl md:text-7xl font-black leading-[1.04] mt-7">
                  Designing The Future Of <span className="grad-text">Luxury Living.</span>
                </h1>
                <p className="text-purple-200/85 font-semibold text-base md:text-lg max-w-xl mt-7 leading-relaxed">
                  From modular kitchens to cove-lit ceilings and home automation — we engineer luminous, high-end residential spaces that anticipate your lifestyle.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-10">
                  <button onClick={() => goTo('portfolio')} className="grad-btn text-white px-8 py-4 rounded-full font-extrabold uppercase tracking-widest text-xs flex items-center justify-center gap-3">
                    Explore Masterpieces <IconArrowRight size={15} />
                  </button>
                  <button onClick={() => setConsultationOpen(true)} className="glass text-white px-8 py-4 rounded-full font-extrabold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-white/15 transition-colors">
                    <IconPlay size={13} className="text-[#fb923c]" /> Free Site Visit
                  </button>
                </div>
                <div className="flex items-center gap-8 mt-12">
                  <div><div className="text-3xl font-black text-white">500+</div><div className="text-[11px] font-bold tracking-[0.2em] uppercase text-purple-300/80">Projects Done</div></div>
                  <div className="w-px h-10 bg-white/15" />
                  <div><div className="text-3xl font-black text-white">15+</div><div className="text-[11px] font-bold tracking-[0.2em] uppercase text-purple-300/80">Years Legacy</div></div>
                  <div className="w-px h-10 bg-white/15" />
                  <div><div className="text-3xl font-black text-white">4.9</div><div className="text-[11px] font-bold tracking-[0.2em] uppercase text-purple-300/80">Google Rating</div></div>
                </div>
              </div>

              {/* Client Access Card */}
              <div className="reveal in">
                <div className="glass-strong rounded-3xl p-7 md:p-9 shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-11 h-11 rounded-2xl bg-[#ee4b1f] flex items-center justify-center text-white"><IconLock size={20} /></div>
                    <div>
                      <h3 className="font-black text-xl">Client Access</h3>
                      <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-purple-300/80">Quick Quote Request</p>
                    </div>
                  </div>
                  <form onSubmit={(e) => { e.preventDefault(); setConsultationOpen(true); }} className="space-y-4">
                    <div>
                      <label className="block text-[11px] font-extrabold tracking-[0.18em] uppercase text-purple-200/80 mb-2">Full Name</label>
                      <input required type="text" className="w-full bg-[#ede9fe] text-[#2b0a54] rounded-xl px-4 py-3 text-sm font-semibold placeholder:text-[#2b0a54]/40 outline-none focus:ring-2 focus:ring-[#ee4b1f]" placeholder="e.g., Aarav Sharma" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-extrabold tracking-[0.18em] uppercase text-purple-200/80 mb-2">Phone</label>
                      <input required type="tel" className="w-full bg-[#ede9fe] text-[#2b0a54] rounded-xl px-4 py-3 text-sm font-semibold placeholder:text-[#2b0a54]/40 outline-none focus:ring-2 focus:ring-[#ee4b1f]" placeholder="+91 98200 12345" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-extrabold tracking-[0.18em] uppercase text-purple-200/80 mb-2">Service</label>
                      <select className="w-full bg-[#ede9fe] text-[#2b0a54] rounded-xl px-4 py-3 text-sm font-semibold outline-none focus:ring-2 focus:ring-[#ee4b1f]">
                        <option>Complete Home Interiors</option>
                        <option>Modular Kitchen</option>
                        <option>False Ceiling & Lighting</option>
                        <option>Wardrobe & Storage</option>
                        <option>Smart Home Automation</option>
                      </select>
                    </div>
                    <button type="submit" className="grad-btn w-full text-white py-3.5 rounded-xl font-extrabold uppercase tracking-[0.18em] text-xs">Request Callback</button>
                    <p className="text-[11px] text-purple-300/70 text-center font-semibold">Free consultation within 2 hours — Mon to Sat, 10AM – 7PM</p>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* Marquee strip */}
          <div className="relative py-5 overflow-hidden border-y border-white/10 bg-[#2b0a54]/60">
            <div className="marquee-track gap-10 text-sm font-extrabold tracking-[0.24em] uppercase text-purple-200/80">
              {[0, 1].map((n) => (
                <div key={n} className="flex items-center gap-10 shrink-0">
                  {['Modular Kitchens', 'False Ceilings', 'Wardrobes', 'Italian Marble', 'Smart Lighting', 'Cove Lighting', 'Fluted Panels', 'Home Automation', 'Turnkey Interiors'].map((s) => (
                    <span key={s} className="flex items-center gap-10"><span>{s}</span> <IconMolecule size={16} className="text-[#ee4b1f]" /></span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Room Explorer */}
          <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto reveal">
            <div className="text-center mb-14">
              <span className="text-[#fb923c] tracking-[0.25em] uppercase text-xs font-extrabold block mb-3">Spatial Exploration</span>
              <h2 className="text-4xl md:text-6xl font-black">Modern House <span className="grad-text">Interiors</span></h2>
              <p className="text-purple-200/80 font-semibold text-sm max-w-lg mx-auto mt-4">Select a zone below to experience our signature warm luxury design language across different spaces.</p>
              <div className="flex flex-wrap justify-center gap-3 mt-9">
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
                    className={`px-6 py-3 rounded-full text-xs font-extrabold uppercase tracking-widest transition-all duration-300 border ${selectedRoom === room.id ? 'bg-[#ee4b1f] text-white border-[#ee4b1f] shadow-lg shadow-[#ee4b1f]/40' : 'glass text-purple-100 hover:border-[#fb923c]/50'}`}
                  >
                    {room.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden glass shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                <div className="lg:col-span-7 h-[380px] md:h-[520px] overflow-hidden relative">
                  <img
                    src={(roomSpaces as any)[selectedRoom].image}
                    alt={(roomSpaces as any)[selectedRoom].title}
                    className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                  />
                </div>
                <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-[#fb923c] tracking-[0.2em] uppercase text-xs font-extrabold mb-3">Signature Space</span>
                  <h3 className="text-3xl md:text-4xl font-black mb-4 leading-snug">{(roomSpaces as any)[selectedRoom].title}</h3>
                  <p className="text-purple-200/80 font-semibold text-sm md:text-base leading-relaxed mb-8">{(roomSpaces as any)[selectedRoom].subtitle}</p>
                  <button onClick={() => setConsultationOpen(true)} className="self-start grad-btn text-white px-7 py-3.5 rounded-full font-extrabold uppercase tracking-widest text-xs">Inquire For This Space</button>
                </div>
              </div>
            </div>
          </section>

          {/* Studio / About + Infographic-style stats */}
          <section id="studio" className="py-24 px-6 md:px-12 max-w-7xl mx-auto reveal">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#fb923c] tracking-[0.25em] uppercase text-xs font-extrabold block mb-4">The Studio</span>
                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                  A minimalist approach to <span className="grad-text">maximal living.</span>
                </h2>
                <p className="text-purple-200/85 font-semibold text-base md:text-lg leading-relaxed mb-10 max-w-lg">
                  We transcend traditional interior design. By fusing world-class architectural principles with cutting-edge spatial technology, we craft environments that don't just look spectacular — they anticipate your lifestyle.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {stats.map(({ Icon, value, label }) => (
                    <div key={label} className="bg-white rounded-2xl p-5 text-[#2b0a54] shadow-xl text-center">
                      <div className="w-11 h-11 rounded-xl bg-[#ee4b1f] text-white flex items-center justify-center mx-auto mb-3"><Icon size={20} /></div>
                      <div className="text-2xl md:text-3xl font-black">{value}</div>
                      <div className="text-[10px] font-extrabold tracking-[0.14em] uppercase text-[#2b0a54]/60 mt-1">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#ee4b1f] via-[#c026d3] to-[#6d28d9] opacity-70 blur-sm group-hover:opacity-100 transition-opacity" />
                <img src="./Mandir.jpeg" alt="Studio Philosophy" className="relative z-10 w-full object-cover aspect-[4/5] rounded-3xl shadow-2xl" />
              </div>
            </div>
          </section>

          {/* Services Hub */}
          <section id="services" className="py-24 grad-page border-y border-white/10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 reveal">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                  <span className="text-[#fb923c] tracking-[0.25em] uppercase text-xs font-extrabold block mb-4">Our Expertise</span>
                  <h2 className="text-4xl md:text-6xl font-black">End-to-End <span className="grad-text">Execution.</span></h2>
                </div>
                <p className="text-purple-200/80 font-semibold max-w-md text-sm">From initial structural coordination to bespoke furniture manufacturing and smart home automation.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { n: '01', Icon: IconHome, title: 'Residential Interiors', desc: 'Bespoke villas, luxury penthouses, and private estates curated around elite comfort.' },
                  { n: '02', Icon: IconGear, title: 'Commercial Spaces', desc: 'Award-winning corporate HQs, flagship retail outlets, and five-star hospitality venues.' },
                  { n: '03', Icon: IconShield, title: 'Turnkey Architecture', desc: 'Complete architectural planning, structural coordination, facade engineering, and landscaping.' }
                ].map(({ n, Icon, title, desc }) => (
                  <div key={n} className="group glass rounded-3xl p-10 hover:bg-white/10 transition-all duration-500 relative overflow-hidden">
                    <div className="absolute top-6 right-8 text-6xl font-black text-white/5 group-hover:text-[#ee4b1f]/20 transition-colors">{n}</div>
                    <div className="w-14 h-14 rounded-2xl bg-[#ee4b1f] text-white flex items-center justify-center mb-6 shadow-lg shadow-[#ee4b1f]/40"><Icon size={26} /></div>
                    <h3 className="text-2xl font-black mb-4">{title}</h3>
                    <p className="text-purple-200/80 font-semibold text-sm leading-relaxed mb-8">{desc}</p>
                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#ee4b1f] to-[#c026d3] group-hover:w-full transition-all duration-700" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Portfolio Showcase */}
          <section id="portfolio" className="py-24 px-6 md:px-12 max-w-7xl mx-auto reveal">
            <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
              <div>
                <span className="text-[#fb923c] tracking-[0.25em] uppercase text-xs font-extrabold block mb-4">Portfolio</span>
                <h2 className="text-4xl md:text-6xl font-black">Curated <span className="grad-text">Masterpieces</span></h2>
              </div>
              <div className="flex flex-wrap gap-3 mt-6 md:mt-0">
                {['All', 'Residential', 'Commercial', 'Retail'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab.toLowerCase())}
                    className={`px-5 py-2 rounded-full text-[11px] font-extrabold uppercase tracking-widest transition-all ${activeTab === tab.toLowerCase() ? 'bg-[#ee4b1f] text-white shadow-lg shadow-[#ee4b1f]/40' : 'glass text-purple-100/80 hover:text-white'}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  onClick={() => setActiveProject(project)}
                  className={`group cursor-pointer ${index % 2 !== 0 ? 'md:mt-20' : ''}`}
                >
                  <div className="overflow-hidden rounded-3xl relative mb-6 glass p-1.5">
                    <img src={project.image} alt={project.title} className="w-full h-[46vh] object-cover rounded-[20px] transition-transform duration-1000 group-hover:scale-105" />
                    <div className="absolute bottom-6 right-6 z-20 glass-strong rounded-full px-4 py-2 text-[10px] font-extrabold uppercase tracking-widest text-white">Explore Case Study</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-2xl font-black mb-1">{project.title}</h3>
                      <p className="text-[11px] font-bold tracking-widest text-purple-300/80 uppercase">{project.category} &bull; {project.location}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-[#ee4b1f] group-hover:border-[#ee4b1f] transition-colors">
                      <IconArrowRight size={18} className="-rotate-45" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience / Showroom Banner */}
          <section id="experience" className="py-24 grad-page border-y border-white/10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal">
              <div>
                <span className="text-[#fb923c] tracking-[0.25em] uppercase text-xs font-extrabold block mb-4">Digital Showroom</span>
                <h2 className="text-4xl md:text-6xl font-black mb-6">Experience Architecture <span className="grad-text">Before It's Built.</span></h2>
                <p className="text-purple-200/85 font-semibold mb-9 leading-relaxed">
                  Step inside virtual 3D walkthroughs, experiment with high-end Italian marbles and custom architectural wood veneers in real-time, and collaborate directly with our principal designers.
                </p>
                <button onClick={() => setConsultationOpen(true)} className="grad-btn text-white px-8 py-4 rounded-full font-extrabold uppercase tracking-widest text-xs">Schedule Virtual Tour</button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img src="./Showroom_Entrance_1.jpeg" alt="Patil's Entrance Door Design" className="w-full h-64 object-cover rounded-2xl shadow-xl" />
                <img src="./Showroom_Entrance_2.jpg" alt="Naskar's Entrance Door Design" className="w-full h-64 object-cover rounded-2xl mt-8 shadow-xl" />
              </div>
            </div>
          </section>

          {/* Cost Estimator */}
          <section className="py-24 px-6 md:px-12">
            <div className="max-w-4xl mx-auto reveal">
              <div className="text-center mb-12">
                <span className="text-[#fb923c] tracking-[0.25em] uppercase text-xs font-extrabold block mb-3">Cost Estimator</span>
                <h2 className="text-4xl md:text-5xl font-black">Calculate Your <span className="grad-text">Interior Cost</span></h2>
              </div>
              <div className="glass-strong p-8 md:p-12 rounded-3xl">
                <div className="space-y-9">
                  <div>
                    <div className="flex justify-between items-end mb-4">
                      <label className="text-purple-100 font-extrabold text-sm uppercase tracking-widest">Area (Sq. Ft.)</label>
                      <div className="flex items-center text-[#fb923c] text-2xl font-black"><input type="number" min="500" max="100000" value={sqFt} onChange={(e) => setSqFt(Number(e.target.value))} className="bg-transparent w-28 text-right outline-none border-b border-dashed border-[#fb923c]/50 focus:border-[#fb923c] mr-2" /> sq.ft</div>
                    </div>
                    <input type="range" min="500" max="100000" step="100" value={sqFt} onChange={(e) => setSqFt(Number(e.target.value))} className="w-full accent-[#ee4b1f] h-1.5" />
                    <div className="flex justify-between text-[11px] font-bold text-purple-300/70 mt-2"><span>500 sq.ft</span><span>1,00,000+ sq.ft</span></div>
                  </div>
                  <div>
                    <div className="flex justify-between items-end mb-4">
                      <label className="text-purple-100 font-extrabold text-sm uppercase tracking-widest">Design & Material Quality (Rate per Sq. Ft.)</label>
                      <div className="flex items-center text-[#fb923c] text-2xl font-black"><span className="mr-1">₹</span><input type="number" min="999" max="100000" value={ratePerSqFt} onChange={(e) => setRatePerSqFt(Number(e.target.value))} className="bg-transparent w-32 outline-none border-b border-dashed border-[#fb923c]/50 focus:border-[#fb923c]" /></div>
                    </div>
                    <input type="range" min="999" max="100000" step="100" value={ratePerSqFt} onChange={(e) => setRatePerSqFt(Number(e.target.value))} className="w-full accent-[#ee4b1f] h-1.5" />
                    <div className="flex justify-between text-[11px] font-bold text-purple-300/70 mt-2"><span>₹999 (Essential)</span><span>₹1,00,000 (Ultra Luxury)</span></div>
                  </div>
                  <div className="pt-8 mt-4 border-t border-white/10 text-center">
                    <span className="text-purple-300/80 uppercase tracking-[0.22em] text-[11px] font-extrabold block mb-2">Estimated Total Cost</span>
                    <div className="text-5xl md:text-6xl font-black grad-text">₹{(sqFt * ratePerSqFt).toLocaleString('en-IN')}</div>
                    <p className="text-purple-300/70 text-sm mt-4 italic font-semibold">*This is a rough estimate. Final cost depends on specific material selection and scope of work.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                      <button onClick={() => setConsultationOpen(true)} className="grad-btn text-white px-8 py-4 rounded-full font-extrabold uppercase tracking-widest text-xs">Get a Detailed Quote</button>
                      <button onClick={() => setPage('invoice')} className="glass text-white px-8 py-4 rounded-full font-extrabold uppercase tracking-widest text-xs hover:bg-white/15 transition-colors">View Sample Invoice</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* Footer */}
      <footer className="relative pt-24 pb-12 px-6 md:px-12 overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2b0a54] to-[#160728] -z-10" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-12 rounded-2xl bg-[#ee4b1f] flex items-center justify-center text-black"><IconMolecule size={24} /></span>
              <div>
                <p className="font-black tracking-[0.22em] text-black">SPACE AGE</p>
                <p className="text-[9px] tracking-[0.4em] text-purple-300/80 uppercase">Interiors</p>
              </div>
            </div>
            <p className="text-purple-200/75 font-semibold text-sm max-w-sm leading-relaxed mb-8">
              Luxury. Innovation. Precision. Crafting timeless architectural environments for modern living.
            </p>
            <div className="flex gap-3">
              {SOCIALS.map(({ Icon, label }) => (
                <a key={label} href="#" aria-label={label} className="w-10 h-10 rounded-full glass flex items-center justify-center text-purple-100 hover:bg-[#ee4b1f] hover:text-black hover:border-[#ee4b1f] transition-colors"><Icon size={17} /></a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[#fb923c] tracking-[0.2em] uppercase text-xs font-extrabold mb-6">Navigation</h4>
            <ul className="space-y-4 text-xs font-bold tracking-wider text-purple-200/80 uppercase">
              <li><button onClick={() => goTo('studio')} className="hover:text-[#fb923c] transition-colors">Studio</button></li>
              <li><button onClick={() => goTo('services')} className="hover:text-[#fb923c] transition-colors">Services</button></li>
              <li><button onClick={() => goTo('portfolio')} className="hover:text-[#fb923c] transition-colors">Portfolio</button></li>
              <li><button onClick={() => goTo('experience')} className="hover:text-[#fb923c] transition-colors">Experience</button></li>
              <li><button onClick={() => setPage('invoice')} className="hover:text-[#fb923c] transition-colors">Invoice</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#fb923c] tracking-[0.2em] uppercase text-xs font-extrabold mb-6">Contact</h4>
            <ul className="space-y-4 text-xs font-semibold tracking-wider text-purple-200/80">
              <li className="flex items-start gap-2"><IconMapPin size={15} className="text-[#ee4b1f] mt-0.5 shrink-0" /> R21, Malad (East), Mumbai - 400097.</li>
              <li>spaceageinterior22@gmail.com</li>
              <li>+91-8097499616</li>
              <li className="pt-2"><span className="text-[#fb923c] font-extrabold">Mon – Sat:</span> 10AM – 7PM</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-purple-300/60 font-semibold">
          <p>&copy; {new Date().getFullYear()} Space Age Interiors. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#fb923c]">Privacy Policy</a>
            <a href="#" className="hover:text-[#fb923c]">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* Consultation Modal */}
      {consultationOpen && (
        <div className="fixed inset-0 z-50 bg-[#160728]/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-strong max-w-lg w-full p-8 md:p-10 relative rounded-3xl shadow-2xl">
            <button onClick={() => setConsultationOpen(false)} className="absolute top-6 right-6 text-purple-200 hover:text-white"><IconX size={24} /></button>
            <span className="text-[#fb923c] tracking-[0.22em] uppercase text-xs font-extrabold block mb-2">Private Booking</span>
            <h3 className="text-3xl font-black mb-6">Book Consultation</h3>
            <form onSubmit={(e) => { e.preventDefault(); setConsultationOpen(false); alert("Consultation request received. Our principal architect will contact you within 2 hours."); }} className="space-y-4">
              <div>
                <label className="block text-[11px] font-extrabold tracking-[0.18em] uppercase text-purple-200/80 mb-2">Full Name</label>
                <input required type="text" className="w-full bg-[#ede9fe] text-[#2b0a54] rounded-xl px-4 py-3 text-sm font-semibold outline-none focus:ring-2 focus:ring-[#ee4b1f]" placeholder="e.g., Aarav Sharma" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-extrabold tracking-[0.18em] uppercase text-purple-200/80 mb-2">Email</label>
                  <input required type="email" className="w-full bg-[#ede9fe] text-[#2b0a54] rounded-xl px-4 py-3 text-sm font-semibold outline-none focus:ring-2 focus:ring-[#ee4b1f]" placeholder="you@domain.com" />
                </div>
                <div>
                  <label className="block text-[11px] font-extrabold tracking-[0.18em] uppercase text-purple-200/80 mb-2">Phone</label>
                  <input required type="tel" className="w-full bg-[#ede9fe] text-[#2b0a54] rounded-xl px-4 py-3 text-sm font-semibold outline-none focus:ring-2 focus:ring-[#ee4b1f]" placeholder="+91 98200 12345" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-extrabold tracking-[0.18em] uppercase text-purple-200/80 mb-2">Property Type & Budget</label>
                <select className="w-full bg-[#ede9fe] text-[#2b0a54] rounded-xl px-4 py-3 text-sm font-semibold outline-none focus:ring-2 focus:ring-[#ee4b1f]">
                  <option>Luxury Villa (₹2Cr+)</option>
                  <option>Penthouse / Apartment (₹1Cr - ₹3Cr)</option>
                  <option>Commercial Headquarters (₹5Cr+)</option>
                  <option>Boutique Retail / Showroom</option>
                </select>
              </div>
              <button type="submit" className="grad-btn w-full text-white py-4 rounded-xl font-extrabold uppercase tracking-[0.18em] text-xs mt-2">Confirm Private Request</button>
            </form>
          </div>
        </div>
      )}

      {/* Project Case Study Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 bg-[#160728]/75 backdrop-blur-md flex items-center justify-center p-4 md:p-10 overflow-y-auto">
          <div className="glass-strong max-w-4xl w-full p-8 md:p-12 relative my-auto rounded-3xl shadow-2xl">
            <button onClick={() => setActiveProject(null)} className="absolute top-6 right-6 text-purple-200 hover:text-white"><IconX size={26} /></button>
            <span className="text-[#fb923c] tracking-[0.22em] uppercase text-xs font-extrabold block mb-2">{activeProject.category} &bull; {activeProject.location}</span>
            <h2 className="text-3xl md:text-5xl font-black mb-6">{activeProject.title}</h2>
            <img src={activeProject.image} alt={activeProject.title} className="w-full h-[40vh] object-cover rounded-2xl mb-8 shadow-xl" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-white/10 py-6 mb-8 text-[11px] font-extrabold uppercase tracking-widest">
              <div><span className="text-purple-300/70 block mb-1">Total Area</span><span className="text-white text-sm">{activeProject.area}</span></div>
              <div><span className="text-purple-300/70 block mb-1">Budget Range</span><span className="text-white text-sm">{activeProject.budget}</span></div>
              <div><span className="text-purple-300/70 block mb-1">Timeline</span><span className="text-white text-sm">{activeProject.timeline}</span></div>
              <div><span className="text-purple-300/70 block mb-1">Status</span><span className="text-[#fb923c] text-sm">Completed & Handed Over</span></div>
            </div>
            <p className="text-purple-100/85 font-semibold leading-relaxed text-base mb-8">
              {activeProject.desc} Our approach on this project centered on seamless indoor-outdoor thresholds, custom lighting choreography, and rigorous spatial optimization tailored to the client's private lifestyle requirements.
            </p>
            <button onClick={() => { setActiveProject(null); setConsultationOpen(true); }} className="grad-btn text-white px-8 py-4 rounded-full font-extrabold uppercase tracking-widest text-xs">Inquire About Similar Design</button>
          </div>
        </div>
      )}
    </div>
  );
}
