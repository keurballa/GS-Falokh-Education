import { motion } from 'motion/react';
import { Trophy, Music, Palette, Users, ChevronRight, Heart, Star } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Sports() {
  const activities = [
    { title: 'Football', icon: Trophy, desc: 'Entraînements réguliers et tournois inter-scolaires.', bg: 'bg-brand-blue/10', color: 'text-brand-blue' },
    { title: 'Basket-ball', icon: Star, desc: 'Terrain aménagé pour la pratique et le perfectionnement.', bg: 'bg-brand-orange/10', color: 'text-brand-orange' },
    { title: 'Arts Plastiques', icon: Palette, desc: 'Ateliers de dessin, peinture et création manuelle.', bg: 'bg-purple-100', color: 'text-purple-600' },
    { title: 'Musique & Chant', icon: Music, desc: 'Chorale et initiation aux instruments de musique.', bg: 'bg-green-100', color: 'text-green-600' },
    { title: 'Club Citoyen', icon: Heart, desc: 'Actions sociales et sensibilisation à l\'environnement.', bg: 'bg-red-100', color: 'text-red-600' },
    { title: 'Théâtre', icon: Users, desc: 'Expression scénique et préparation du spectacle annuel.', bg: 'bg-yellow-100', color: 'text-yellow-600' },
  ];

  return (
    <div className="pt-32 pb-24">
      <section className="px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-20"
        >
          <span className="bg-brand-orange/10 text-brand-orange px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest inline-block mb-4">
            Épanouissement & Loisirs
          </span>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-brand-dark mb-6">
            Sport et <span className="text-brand-blue">Loisir</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
            Au Groupe Scolaire Falokh Éducation, nous croyons qu'un esprit sain va de pair avec un corps sain. Nos activités périscolaires favorisent le talent et la créativité.
          </p>
        </motion.div>

        {/* --- MAIN ACTIVITIES GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {activities.map((act, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-blue/20 transition-all"
            >
              <div className={`w-16 h-16 ${act.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <act.icon size={32} className={act.color} />
              </div>
              <h3 className="text-2xl font-display font-bold text-brand-dark mb-4">{act.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                {act.desc}
              </p>
              <div className="flex items-center text-sm font-bold text-brand-blue opacity-0 group-hover:opacity-100 transition-opacity">
                En savoir plus <ChevronRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- FACILITIES SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-gray-50 rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full -mr-32 -mt-32"></div>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold text-brand-dark mb-8">Des Infrastructures <span className="text-brand-orange">Dédiées</span></h2>
            <div className="space-y-6">
              {[
                { title: 'Terrain Multisports', desc: 'Un espace sécurisé pour le football et les activités physiques.' },
                { title: 'Salle Polyvalente', desc: 'Dédiée aux spectacles, à la musique et aux conférences.' },
                { title: 'Espaces de Détente', desc: 'Zones ombragées pour les récréations et les échanges entre élèves.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="bg-white w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-brand-orange shadow-sm">
                    <ChevronRight size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-dark mb-1">{item.title}</h4>
                    <p className="text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="/images/img 2.jpg" 
              alt="Installations sportives" 
              className="rounded-[2.5rem] shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-blue rounded-3xl -z-0"></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
