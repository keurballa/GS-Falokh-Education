import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Award, CheckCircle2, Star, TrendingUp, X } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Results() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
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
        <div className="bg-brand-dark text-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl mb-24">
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

        {/* --- GALLERY / PARTNERS IN RESULTS --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-brand-dark mb-4">Mur de la Réussite & Partenariats</h2>
            <p className="text-gray-500 mb-8">Ils soutiennent notre excellence éducative</p>
            <div className="text-left text-gray-600 max-w-4xl mx-auto space-y-4 leading-relaxed bg-brand-light p-8 rounded-3xl mb-12">
              <p>Le GSFEM a développé des partenariats aussi bien au niveau local qu'international afin de renforcer l'encadrement pédagogique, sportif et social de ses élèves.</p>
              <p>Au niveau local, notre établissement entretient une étroite collaboration avec le centre de formation Sheikh Khalifa Bin Zayed, situé dans le quartier de Falokh. Dans le cadre de ce partenariat, certains enseignants y délocalisent leurs cours afin de permettre aux apprenants de bénéficier d'un cadre plus adapté et de nouvelles opportunités d'apprentissage.</p>
              <p>Par ailleurs, les activités de l'Association Sportive (AS) du GSFEM se déroulent également sur les terrains du centre. En effet, les mercredis après-midi, traditionnellement consacrés aux activités sportives dans les collèges et lycées du Sénégal, une entente a été conclue avec les autorités du centre afin de mettre leurs espaces de jeu à la disposition de nos élèves. Les jeunes filles y pratiquent le handball tandis que les garçons évoluent au football.</p>
              <p>Ce partenariat poursuit également un objectif d'orientation et d'insertion. Il permet de familiariser nos élèves, dont la majorité réside dans le quartier, avec le centre et les différentes offres de formation qu'il propose, en vue d'une éventuelle intégration après l'obtention du baccalauréat.</p>
              <p>Sur le plan international, le GSFEM a aussi noué un partenariat avec des humanitaires français regroupés autour de l'association Yakaar. En collaboration avec leur représentant basé à Mbour, ces partenaires accompagnent des enfants déscolarisés issus de familles démunies vivant dans le quartier, en prenant en charge leur scolarité ainsi que leur suivi éducatif.</p>
              <p>La visite de ces partenaires au mois de mars dernier a également permis d'échanger sur de nombreuses perspectives de coopération et de développement au profit de l'établissement et des élèves.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-6">
            {[
              '/images/img40.jpeg',
              '/images/img41.jpeg',
              '/images/img42.jpeg',
              '/images/img43.jpeg',
              '/images/img44.jpeg',
              '/images/img45.jpeg',
              '/images/img46.jpeg',
              '/images/img47.jpeg',
              '/images/img30.jpeg',
              '/images/img31.jpeg',
              '/images/img32.jpeg',
              '/images/img1.jpg',
              '/images/img 2.jpg',
              '/images/img 3.jpg',
              '/images/img20.jpeg',
              '/images/img21.jpeg',
              '/images/img22.jpeg',
              '/images/img23.jpeg',
              '/images/img24.jpeg',
              '/images/img25.jpeg',
              '/images/img26.jpeg',
              '/images/img27.jpeg'
            ].map((imgUrl, i) => (
              <div 
                key={i} 
                className="aspect-square bg-gray-50 rounded-2xl overflow-hidden group border border-gray-100 hover:shadow-lg transition-all cursor-pointer"
                onClick={() => setSelectedImg(imgUrl)}
              >
                <img 
                  src={imgUrl} 
                  alt={`Distinction ${i + 1}`} 
                  className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform"
                />
              </div>
            ))}
          </div>

          <AnimatePresence>
            {selectedImg && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImg(null)}
                className="fixed inset-0 z-[100] bg-brand-dark/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
              >
                <motion.button 
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  className="absolute top-8 right-8 text-white bg-brand-blue p-3 rounded-full shadow-xl hover:scale-110 transition-transform"
                >
                  <X size={24} />
                </motion.button>
                <motion.img 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  src={selectedImg}
                  alt="Enlarged result"
                  className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl bg-white p-8"
                  onClick={(e) => e.stopPropagation()}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}
