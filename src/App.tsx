import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, Mail, MapPin, 
  ChevronRight, Facebook, Instagram, Twitter, 
  GraduationCap, BookOpen, Users, Trophy, 
  MessageSquare, LayoutDashboard, Send
} from 'lucide-react';
import Home from './pages/Home';
import Admissions from './pages/Admissions';
import ParentPortal from './pages/ParentPortal';
import Contact from './pages/Contact';
import News from './pages/News';
import Presentation from './pages/Presentation';
import Cycles from './pages/Cycles';
import Library from './pages/Library';
import Results from './pages/Results';

// --- Components ---

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Acceuil', path: '/' },
    { name: 'Présentation', path: '/presentation' },
    { name: 'Cycles', path: '/cycles' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Résultats', path: '/results' },
    { name: 'Actualités', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center text-white font-bold text-xl">E</div>
          <span className={`font-display font-bold text-xl hidden sm:block ${scrolled ? 'text-brand-dark' : 'text-white'}`}>GS Falokh Education</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`font-medium text-sm transition-colors hover:text-brand-orange ${
                location.pathname === link.path 
                ? 'text-brand-orange' 
                : scrolled ? 'text-brand-dark' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/admissions" 
            className="bg-brand-orange text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-opacity-90 transition-all"
          >
            Inscription
          </Link>
          <Link 
            to="/portal" 
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
              scrolled 
              ? 'border-gray-200 text-brand-dark hover:bg-gray-50' 
              : 'border-white/30 text-white hover:bg-white/10'
            }`}
          >
            <LayoutDashboard size={18} />
            Espace Parents
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className={`lg:hidden ${scrolled ? 'text-brand-dark' : 'text-white'}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl py-8 px-4 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className="text-brand-dark font-medium text-lg py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/admissions" 
              className="bg-brand-blue text-white text-center py-3 rounded-lg font-bold"
              onClick={() => setIsOpen(false)}
            >
              Candidature
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center text-white font-bold text-xl">F</div>
            <span className="font-display font-bold text-xl">GS Falokh Education</span>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Une institution dédiée à l'excellence académique et au développement holistique des futurs leaders de Mbour et du Sénégal.
          </p>
          <div className="flex gap-4">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-brand-orange hover:text-brand-orange transition-all">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-6">Liens Rapides</h4>
          <ul className="space-y-4 text-gray-400">
            {['À Propos', 'Cycles Scolaires', 'Admission', 'Actualités', 'Galerie'].map(item => (
              <li key={item}><Link to="#" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight size={14} /> {item}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-6">Contact</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start gap-3"><MapPin size={20} className="text-brand-orange shrink-0" /> Falokh, Mbour, Sénégal</li>
            <li className="flex items-center gap-3"><Phone size={20} className="text-brand-orange shrink-0" /> +221 230 98 12</li>
            <li className="flex items-center gap-3"><Mail size={20} className="text-brand-orange shrink-0" /> archilo05@gmail.com</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-6">Newsletter</h4>
          <p className="text-gray-400 mb-6 text-sm">Restez informé de nos activités et événements.</p>
          <form className="relative">
            <input 
              type="email" 
              placeholder="Votre email" 
              className="w-full bg-gray-800 border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-brand-blue outline-none"
            />
            <button className="absolute right-2 top-2 bg-brand-blue p-1.5 rounded-md hover:bg-opacity-90 transition-all">
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>© 2026 Groupe Scolaire Falokh Education. Tous droits réservés.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
          <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-grow pt-0">
        <AnimatePresence mode="wait">
          <motion.div 
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/presentation" element={<Presentation />} />
              <Route path="/cycles" element={<Cycles />} />
              <Route path="/portal" element={<ParentPortal />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/news" element={<News />} />
              <Route path="/results" element={<Results />} />
              <Route path="/library" element={<Library />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
