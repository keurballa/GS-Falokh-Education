import { motion } from 'motion/react';
import { FileText, Download, Search, Library as LibraryIcon, ChevronRight } from 'lucide-react';

const documents = [
  { 
    id: 1, 
    title: 'DEVOIR 3ème 2016', 
    category: 'Moyen', 
    type: 'PDF', 
    size: '1.2 MB', 
    path: '/biblio/DEVOIR 3ème 2016.pdf' 
  },
  { 
    id: 2, 
    title: 'Dev 1', 
    category: 'Moyen', 
    type: 'DOCX', 
    size: 'N/A', 
    path: '/biblio/Dev 1.docx' 
  },
  { 
    id: 3, 
    title: 'Dev 2', 
    category: 'Moyen', 
    type: 'PDF', 
    size: 'N/A', 
    path: '/biblio/Dev 2.pdf' 
  },
  { 
    id: 4, 
    title: 'Dev 3', 
    category: 'Moyen', 
    type: 'PDF', 
    size: 'N/A', 
    path: '/biblio/Dev 3.pdf' 
  },
  { 
    id: 5, 
    title: 'Dev 4', 
    category: 'Moyen', 
    type: 'PDF', 
    size: 'N/A', 
    path: '/biblio/Dev 4.pdf' 
  },
  { 
    id: 6, 
    title: 'Dev 5', 
    category: 'Moyen', 
    type: 'PDF', 
    size: 'N/A', 
    path: '/biblio/Dev 5.pdf' 
  },
];

export default function Library() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <header className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 bg-brand-blue/10 text-brand-blue rounded-3xl flex items-center justify-center mx-auto mb-6"
          >
            <LibraryIcon size={40} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-4"
          >
            Bibliothèque Digitale
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-2xl mx-auto"
          >
            Accédez à toutes nos ressources pédagogiques, annales d'examens et documents scolaires en un clic.
          </motion.p>
        </header>

        <div className="bg-white rounded-[2.5rem] shadow-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Rechercher un document..." 
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-brand-blue outline-none transition-all"
              />
            </div>
            <div className="flex gap-2">
              {['Tout', 'Préscolaire', 'Élémentaire', 'Moyen', 'Secondaire'].map((cat) => (
                <button 
                  key={cat}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                    cat === 'Tout' ? 'bg-brand-blue text-white shadow-md' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, i) => (
              <motion.div 
                key={doc.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-3xl border border-gray-100 hover:border-brand-blue/30 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-gray-100 text-brand-dark rounded-2xl flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    <FileText size={24} />
                  </div>
                  <span className="bg-brand-orange/10 text-brand-orange text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                    {doc.category}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-brand-dark mb-2">{doc.title}</h3>
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-6">
                  <span>{doc.type}</span>
                  <span>•</span>
                  <span>{doc.size}</span>
                </div>
                <a 
                  href={doc.path} 
                  download 
                  className="w-full flex items-center justify-center gap-2 bg-brand-blue/5 text-brand-blue py-3 rounded-xl font-bold hover:bg-brand-blue hover:text-white transition-all"
                >
                  <Download size={18} />
                  Télécharger
                </a>
              </motion.div>
            ))}
          </div>

          {documents.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 italic">Aucun document trouvé.</p>
            </div>
          )}
        </div>

        <div className="mt-16 bg-brand-dark rounded-[2.5rem] p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-display font-bold mb-2">Vous ne trouvez pas ce que vous cherchez ?</h3>
            <p className="text-gray-400 text-sm">Contactez l'administration pour toute demande spécifique.</p>
          </div>
          <button className="bg-brand-orange text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:bg-opacity-90 transition-all flex items-center gap-2 shrink-0">
            Faire une demande <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
