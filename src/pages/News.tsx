import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const mockNews = [
  {
    id: '1',
    title: "Performance Exceptionnelle aux Examens Nationaux 2024/2025",
    desc: "Notre institution affiche des taux de réussite remarquables : 98% au BFEM, 98% à l'entrée en 6e et 93% au CFEE. Ces résultats témoignent de l'engagement de nos élèves et de l'encadrement.",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800",
    date: "12 Mai 2026",
    author: "Admin",
    category: "Résultats"
  },
  {
    id: '2',
    title: "Lancement du nouveau Club de Robotique",
    desc: "Nous sommes fiers d'annoncer l'ouverture de notre club de robotique et d'IA dès la rentrée prochaine pour tous les niveaux.",
    img: "/images/img1.jpg",
    date: "10 Mai 2026",
    author: "M. Faye",
    category: "Innovation"
  },
  {
    id: '3',
    title: "Sortie pédagogique au Parc de Hann",
    desc: "Les classes d'élémentaire ont profité d'une journée riche en découvertes sur la biodiversité et la protection de l'environnement.",
    img: "/images/img 2.jpg",
    date: "05 Mai 2026",
    author: "Mme Ndiaye",
    category: "Événement"
  },
  {
    id: '4',
    title: "Inauguration de la Bibliothèque Digitale",
    desc: "Un nouvel espace de lecture moderne avec plus de 10 000 ouvrages numériques accessibles à tous nos élèves.",
    img: "https://13commeune.fr/app/uploads/2020/11/Bibliotheque-numerique.jpg",
    date: "01 Mai 2026",
    author: "Admin",
    category: "Infrastructures"
  },
  {
    id: '5',
    title: "Préparation des compositions du 2nd semestre et Journée de l'Excellence",
    desc: "Nous préparons activement les compositions du second semestre ainsi que notre grande Journée de l'Excellence prévue pour le 13 Juin. Un moment fort pour récompenser le mérite.",
    img: "https://static.vecteezy.com/ti/vecteur-libre/p1/4187970-ensemble-de-fournitures-scolaires-composition-rentree-scolaire-lettrage-enfants-sujets-pour-etude-illustrationle-dans-un-style-plat-sur-fond-blanc-tout-les-objets-sont-isoles-vectoriel.jpg",
    date: "14 Mai 2026",
    author: "Admin",
    category: "Événement"
  },
  {
    id: '6',
    title: "Examen Blanc et Préparation intensive au BFEM",
    desc: "Suite aux examens blancs des 11, 12 et 13 Mai, nos élèves de 3ème entament une phase de révisions intensives et d'accompagnement personnalisé pour le BFEM.",
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800",
    date: "14 Mai 2026",
    author: "Directeur des Études",
    category: "Pédagogie"
  }
];

export default function News() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-brand-light">
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-4">Actualités & Actualités</h1>
            <p className="text-gray-500">Restez au cœur de la vie scolaire du Groupe Scolaire Falokh Education.</p>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <div className="relative flex-grow md:flex-grow-0 md:w-64">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Rechercher..." 
                className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white border border-gray-100 shadow-sm focus:ring-2 focus:ring-brand-blue outline-none text-sm"
              />
            </div>
            <button className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm text-gray-400 hover:text-brand-blue transition-all">
              <Filter size={20} />
            </button>
          </div>
        </div>

        {/* Featured Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-[500px] rounded-[3rem] overflow-hidden mb-16 shadow-2xl group"
        >
          <img 
            src={mockNews[0].img} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            alt="Featured" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent"></div>
          <div className="absolute bottom-12 left-12 right-12 text-white">
            <span className="bg-brand-orange text-white px-4 py-1.5 rounded-full text-xs font-bold mb-4 inline-block">{mockNews[0].category}</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 max-w-3xl leading-tight">{mockNews[0].title}</h2>
            <div className="flex items-center gap-8 mb-8 text-sm text-gray-300">
              <div className="flex items-center gap-2 font-medium"><Calendar size={18} /> {mockNews[0].date}</div>
              <div className="flex items-center gap-2 font-medium"><User size={18} /> Par {mockNews[0].author}</div>
            </div>
            <Link to={`/news/${mockNews[0].id}`} className="bg-brand-blue text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all inline-flex items-center gap-2">
              Lire l'article <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>

        {/* Categories */}
        <div className="flex gap-4 overflow-x-auto pb-8 mb-8 no-scrollbar">
          {['Toutes', 'Résultats', 'Innovation', 'Événement', 'Infrastructures', 'Pédagogie'].map((cat, i) => (
            <button 
              key={cat} 
              className={`px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                i === 0 ? 'bg-brand-blue text-white shadow-md' : 'bg-white text-gray-500 hover:bg-gray-50 border border-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockNews.slice(1).map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-60 overflow-hidden relative">
                <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-brand-blue px-4 py-1.5 rounded-full text-[10px] font-bold shadow-md">
                  {item.category}
                </span>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 mb-4 uppercase tracking-widest">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {item.date}</span>
                </div>
                <h3 className="text-xl font-display font-bold text-brand-dark mb-4 leading-snug group-hover:text-brand-blue transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mb-8 line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>
                <Link to={`/news/${item.id}`} className="text-brand-blue font-bold text-xs flex items-center gap-2 group-hover:gap-4 transition-all">
                  Continuer la lecture <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <button className="bg-brand-dark text-white px-10 py-4 rounded-full font-bold hover:shadow-xl transition-all">
            Charger d'autres articles
          </button>
        </div>
      </section>
    </div>
  );
}
