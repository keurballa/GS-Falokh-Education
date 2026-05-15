import { motion } from 'motion/react';
import { 
  Baby, GraduationCap, Microscope, BookOpen,
  CheckCircle2, ArrowRight, UserCheck, Star
} from 'lucide-react';

export default function Cycles() {
  const cycles = [
    {
      title: 'Préscolaire',
      subtitle: 'La Petite, Moyenne et Grande Section',
      icon: Baby,
      color: 'bg-pink-100 text-pink-600',
      img: '/images/img 10.jpeg',
      desc: 'Un accueil chaleureux dans un univers de jeux et de découvertes pour stimuler l\'éveil et l\'autonomie.',
      points: ['Ateliers créatifs', 'Langage & Communication', 'Psychomotricité', 'Éveil musical']
    },
    {
      title: 'Élémentaire',
      subtitle: 'Du CI au CM2',
      icon: BookOpen,
      color: 'bg-brand-blue/10 text-brand-blue',
      img: '/images/img 9.jpeg',
      desc: 'L\'acquisition des fondamentaux (lire, écrire, compter) à travers une pédagogie rigoureuse et bienveillante.',
      points: ['Bilinguisme Anglais/Français', 'Sciences & Technologie', 'Sport & Culture', 'Renforcement personnalisé']
    },
    {
      title: 'Moyen',
      subtitle: 'De la 6ème à la 3ème',
      icon: Microscope,
      color: 'bg-brand-orange/10 text-brand-orange',
      img: '/images/img 10.jpeg',
      desc: 'Développer l\'esprit d\'analyse et préparer sereinement les élèves au Brevet de Fin d\'Études Moyennes (BFEM).',
      points: ['Orientation scolaire', 'Clubs scientifiques', 'Informatique avancée', 'Développement personnel']
    },
    {
      title: 'Secondaire',
      subtitle: 'De la Seconde à la Terminale',
      icon: GraduationCap,
      color: 'bg-purple-100 text-purple-600',
      img: '/images/img 8.jpeg',
      desc: 'La voie vers l\'excellence académique et la préparation rigoureuse aux épreuves du Baccalauréat.',
      points: ['Prépa concours internationaux', 'Séries L, S1, S2, G', 'Accompagnement post-BAC', 'Leadership & Débat']
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-brand-light">
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-brand-dark mb-6">Nos Cycles d'Apprentissage</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">Un parcours éducatif cohérent et complet, de la petite enfance jusqu'aux portes de l'université.</p>
        </div>

        <div className="space-y-32">
          {cycles.map((cycle, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
            >
              <div className="lg:w-1/2 relative">
                <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                  <img src={cycle.img} alt={cycle.title} className="w-full h-full object-cover" />
                </div>
                <div className={`absolute -bottom-10 ${i % 2 === 0 ? '-right-10' : '-left-10'} w-48 h-48 ${cycle.color} rounded-full blur-[80px] -z-0`}></div>
              </div>

              <div className="lg:w-1/2 space-y-6">
                 <div className={`inline-flex items-center gap-3 p-4 rounded-2xl ${cycle.color} font-bold`}>
                   <cycle.icon size={32} />
                   <div className="text-sm">
                     <p className="uppercase tracking-widest text-[10px]">Cycle Scolaire</p>
                     <p className="text-xl uppercase">{cycle.title}</p>
                   </div>
                 </div>
                 <h2 className="text-3xl font-display font-bold text-brand-dark">{cycle.subtitle}</h2>
                 <p className="text-gray-600 leading-relaxed text-lg">{cycle.desc}</p>
                 <div className="grid grid-cols-2 gap-4 py-4">
                    {cycle.points.map(pt => (
                      <div key={pt} className="flex items-center gap-2 font-bold text-sm text-brand-dark">
                        <CheckCircle2 className="text-brand-orange" size={18} /> {pt}
                      </div>
                    ))}
                 </div>
                 <button className="bg-brand-dark text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all flex items-center gap-2 group">
                   Plus de détails <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                 </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Banner */}
        <div className="mt-32 bg-white rounded-[3rem] p-12 shadow-sm border border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-12">
           {[
             { title: 'Petit Effectif', label: 'Max 25 élèves par classe', icon: UserCheck },
             { title: 'Bilinguisme', label: 'Immersion dès le préscolaire', icon: Star },
             { title: 'Certification', icon: GraduationCap, label: 'Standard International' }
           ].map((item, i) => (
             <div key={i} className="flex flex-col items-center text-center space-y-3">
               <div className="w-16 h-16 bg-brand-blue/5 text-brand-blue rounded-2xl flex items-center justify-center">
                 <item.icon size={32} />
               </div>
               <h4 className="font-display font-bold text-xl text-brand-dark">{item.title}</h4>
               <p className="text-sm text-gray-500">{item.label}</p>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
}
