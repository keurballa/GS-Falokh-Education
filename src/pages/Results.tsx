import { motion } from 'motion/react';
import { Trophy, Award, CheckCircle2, Star, TrendingUp } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Results() {
  const stats = [
    { label: 'Réussite au CFEE', value: '93%', color: 'text-brand-blue', bg: 'bg-brand-blue/10' },
    { label: 'Entrée en 6e', value: '98%', color: 'text-brand-orange', bg: 'bg-brand-orange/10' },
    { label: 'Réussite au BFEM', value: '98%', color: 'text-purple-600', bg: 'bg-purple-100' },
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
          <span className="bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest inline-block mb-4">
            Excellence Académique
          </span>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-brand-dark mb-6">
            Nos <span className="text-brand-orange">Résultats</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
            Au Groupe Scolaire Falokh Éducation, l'excellence est une véritable culture. Nous célébrons les efforts de nos élèves et la qualité de notre encadrement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-display font-bold text-brand-dark leading-tight">
              Une Culture de la <span className="text-brand-blue">Performance</span>
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Au Groupe Scolaire Falokh Éducation, l’excellence est une véritable culture. Nous encourageons chaque élève à donner le meilleur de lui-même dans le travail, la discipline et le comportement. Chaque année, les meilleurs élèves sont récompensés afin de valoriser l’effort, le mérite et la persévérance.
              </p>
              <p>
                Notre établissement se distingue également par ses excellents résultats aux examens nationaux, témoignant de la qualité de l’enseignement et du sérieux de l’encadrement pédagogique. Pour l'année scolaire 2024/2025 :
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              {stats.map((stat, i) => (
                <div key={i} className={`${stat.bg} p-6 rounded-3xl text-center transform transition-transform hover:scale-105`}>
                  <div className={`text-4xl font-display font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-xs font-bold text-gray-600 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            <p className="text-gray-600 leading-relaxed italic border-l-4 border-brand-orange pl-6 py-2 mt-8">
              Ces performances reflètent l’engagement constant de notre équipe pédagogique ainsi que la confiance des parents qui nous accompagnent dans la réussite et l’avenir de leurs enfants.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-brand-blue/5 rounded-[3rem] p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full -mr-32 -mt-32"></div>
              
              <div className="relative z-10 space-y-10">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-brand-blue">
                    <Trophy size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-dark">CFEE 2025</h4>
                    <p className="text-brand-blue font-bold">93% de réussite</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-brand-orange">
                    <TrendingUp size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-dark">Entrée en 6e</h4>
                    <p className="text-brand-orange font-bold">98% de réussite</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-purple-600">
                    <Award size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-dark">BFEM 2025</h4>
                    <p className="text-purple-600 font-bold">98% de réussite</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-orange rounded-full opacity-10 blur-3xl"></div>
          </motion.div>
        </div>

        {/* --- RECOGNITION SECTION --- */}
        <div className="bg-brand-dark text-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-blue/10 rounded-full -mr-48 -mb-48 blur-3xl"></div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">Valoriser l'effort et le mérite</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Chaque année, nous organisons une cérémonie de remise des prix pour célébrer les majors de classe et les élèves ayant fait preuve d'une progression remarquable.
              </p>
              <div className="flex flex-wrap gap-4">
                {['Médailles d\'excellence', 'Bourses d\'études', 'Certificats de mérite'].map(item => (
                  <div key={item} className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm font-medium">
                    <Star size={16} className="text-brand-orange fill-brand-orange" /> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-white/5 rounded-3xl flex flex-col items-center justify-center text-center p-6 border border-white/10">
                <div className="text-4xl font-bold text-brand-blue mb-2">100%</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest">Satisfaction Parents</div>
              </div>
              <div className="aspect-square bg-white/5 rounded-3xl flex flex-col items-center justify-center text-center p-6 border border-white/10">
                <div className="text-4xl font-bold text-brand-orange mb-2">45+</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest">Enseignants Dédiés</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
