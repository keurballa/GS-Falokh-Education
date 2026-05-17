import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, Users, Trophy, GraduationCap, 
  CheckCircle2, Star, Calendar, MessageSquare,
  Library, Bus, Coffee, Microscope, Laptop,
  BookOpen, Handshake, X
} from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [selectedPartner, setSelectedPartner] = useState<string | null>(null);

  return (
    <div className="w-full">
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" 
            alt="School background" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl text-white"
          >
            <motion.span 
              variants={fadeIn}
              className="bg-brand-blue/20 backdrop-blur-sm text-brand-blue border border-brand-blue/30 px-4 py-2 rounded-full text-sm font-bold inline-block mb-6 uppercase tracking-wider"
            >
              Excellence • Innovation • Falokh
            </motion.span>
            <motion.h1 
              variants={fadeIn}
              className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6"
            >
              GS Falokh Education : <span className="text-brand-orange">L'Avenir</span>.
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed"
            >
              Bienvenue au Groupe Scolaire Falokh Éducation, à Mbour. Nous combinons une pédagogie moderne et des valeurs traditionnelles afin d’offrir à vos enfants une éducation de qualité, fondée sur l’excellence, la discipline et l’épanouissement.
            </motion.p>
            <motion.div 
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/admissions" className="bg-brand-blue text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 group">
                Inscrire mon enfant <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/presentation" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all text-center">
                Découvrir notre école
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Stats Card */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4 hidden md:block">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-2xl shadow-2xl p-8 grid grid-cols-4 divide-x divide-gray-100"
          >
            {[
              { label: 'Taux de réussite', value: '100%', icon: Trophy },
              { label: "Années d'expérience", value: '10+', icon: Calendar },
              { label: 'Élèves inscrits', value: '850+', icon: Users },
              { label: 'Enseignants experts', value: '45+', icon: GraduationCap },
            ].map((stat, i) => (
              <div key={i} className="px-6 text-center first:pl-0 last:pr-0">
                <stat.icon size={24} className="text-brand-blue mx-auto mb-3" />
                <div className="text-3xl font-display font-bold text-brand-dark mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- PRESENTATION SECTION --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/images/img1.jpg"
                alt="Learning" 
                className="w-full h-64 object-cover rounded-2xl shadow-lg mt-12"
              />
              <img 
                src="/images/img 2.jpg"
                alt="Activities" 
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-orange text-white p-6 rounded-2xl shadow-xl hidden sm:block">
              <div className="text-4xl font-bold">10+</div>
              <div className="text-sm font-medium">Ans d'excellence</div>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeIn} className="text-brand-blue font-bold text-sm uppercase tracking-widest mb-4">Notre Vision</motion.h2>
            <motion.h3 variants={fadeIn} className="text-4xl font-display font-bold text-brand-dark mb-6 leading-tight">
              L'excellence académique combinée à l'innovation pédagogique.
            </motion.h3>
            <motion.p variants={fadeIn} className="text-gray-600 mb-8 leading-relaxed">
              Bienvenue au Groupe Scolaire Falokh Éducation, à Mbour. Nous combinons une pédagogie moderne et des valeurs traditionnelles afin d’offrir à vos enfants une éducation de qualité, fondée sur l’excellence, la discipline et l’épanouissement. Avec Falokh Éducation, chaque enfant apprend, grandit et prépare sereinement son avenir.
            </motion.p>
            <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {[
                "Pédagogie active et moderne",
                "Suivi personnalisé de l'élève",
                "Environnement sûr et bienveillant",
                "Accompagnement vers la réussite"
              ].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-orange" size={20} />
                  <span className="text-sm font-semibold text-gray-700">{item}</span>
                </div>
              ))}
            </motion.div>
            <motion.button variants={fadeIn} className="group flex items-center gap-2 text-brand-blue font-bold hover:gap-4 transition-all">
              Découvrir notre histoire <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* --- CYCLES SECTION --- */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-16">
          <h2 className="text-brand-blue font-bold text-sm uppercase tracking-widest mb-4">Offre Éducative</h2>
          <h3 className="text-4xl font-display font-bold text-brand-dark">Nos Cycles Scolaires</h3>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              title: 'Préscolaire', 
              desc: 'Éveil, créativité et premiers pas vers la socialisation.', 
              icon: BookOpen, 
              img: '/images/img 10.jpeg' 
            },
            { 
              title: 'Élémentaire', 
              desc: 'Acquisition des bases solides en lecture, maths et sciences.', 
              icon: GraduationCap, 
              img: '/images/img 9.jpeg' 
            },
            { 
              title: 'Moyen', 
              desc: "Développement de l'esprit critique et préparation au BFEM.", 
              icon: Microscope, 
              img: '/images/img 10.jpeg' 
            },
            { 
              title: 'Secondaire', 
              desc: 'Spécialisation et excellence pour la réussite au Baccalauréat.', 
              icon: Users, 
              img: '/images/img 8.jpeg' 
            },
          ].map((cycle, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="h-48 overflow-hidden relative">
                <img src={cycle.img} alt={cycle.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 p-3 rounded-2xl shadow-md">
                  <cycle.icon size={24} className="text-brand-blue" />
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-display font-bold mb-3 text-brand-dark">{cycle.title}</h4>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  {cycle.desc}
                </p>
                <Link to="/cycles" className="text-brand-blue font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Voir le programme <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px] -ml-48 -mb-48"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-orange font-bold text-sm uppercase tracking-widest mb-4">Pourquoi nous ?</h2>
            <h3 className="text-4xl font-display font-bold">Un environnement d'apprentissage premium</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Informatique & Labo', icon: Laptop, desc: 'Salles info modernes et laboratoires sciences équipés.' },
              { title: 'Partenaires', icon: Handshake, desc: 'Collaboration avec des institutions nationales et internationales.', link: '#partenaires' },
              { title: 'Bibliothèque Digitale', icon: Library, desc: 'Milliers de ressources accessibles 24h/24.' },
              { title: 'Cantine Équilibrée', icon: Coffee, desc: 'Repas sains et variés préparés sur place.' },
              { title: 'Suivi Personnalisé', icon: Users, desc: 'Rapport hebdomadaire pour chaque parent.' },
              { title: 'Activités Clubs', icon: Trophy, desc: 'Musique, Sport, Théâtre et Club de Robotique.', link: '/sports' },
            ].map((item, i) => (
              item.title === 'Bibliothèque Digitale' ? (
                <Link to="/library" key={i}>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="p-8 h-full rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-brand-blue/50 transition-all group cursor-pointer"
                  >
                    <div className="w-14 h-14 bg-brand-blue/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors">
                      <item.icon size={28} className="text-brand-blue group-hover:text-white" />
                    </div>
                    <h4 className="text-xl font-display font-bold mb-3">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.desc}</p>
                    <span className="text-brand-blue font-bold text-xs flex items-center gap-1 group-hover:gap-2 transition-all">
                      Accéder à la bibliothèque <ArrowRight size={14} />
                    </span>
                  </motion.div>
                </Link>
              ) : item.link && item.link.startsWith('/') ? (
                <Link to={item.link} key={i}>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="p-8 h-full rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-brand-blue/50 transition-all group cursor-pointer"
                  >
                    <div className="w-14 h-14 bg-brand-blue/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors">
                      <item.icon size={28} className="text-brand-blue group-hover:text-white" />
                    </div>
                    <h4 className="text-xl font-display font-bold mb-3">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.desc}</p>
                    <span className="text-brand-blue font-bold text-xs flex items-center gap-1 group-hover:gap-2 transition-all">
                      Découvrir <ArrowRight size={14} />
                    </span>
                  </motion.div>
                </Link>
              ) : item.title === 'Partenaires' ? (
                <a href={item.link} key={i}>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="p-8 h-full rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-brand-blue/50 transition-all group cursor-pointer"
                  >
                    <div className="w-14 h-14 bg-brand-blue/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors">
                      <item.icon size={28} className="text-brand-blue group-hover:text-white" />
                    </div>
                    <h4 className="text-xl font-display font-bold mb-3">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.desc}</p>
                    <span className="text-brand-blue font-bold text-xs flex items-center gap-1 group-hover:gap-2 transition-all">
                      Voir nos partenaires <ArrowRight size={14} />
                    </span>
                  </motion.div>
                </a>
              ) : (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-brand-blue/50 transition-all group"
                >
                  <div className="w-14 h-14 bg-brand-blue/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors">
                    <item.icon size={28} className="text-brand-blue group-hover:text-white" />
                  </div>
                  <h4 className="text-xl font-display font-bold mb-3">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* --- NEWS SECTION --- */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div>
              <h2 className="text-brand-blue font-bold text-sm uppercase tracking-widest mb-4">Actualités</h2>
              <h3 className="text-4xl font-display font-bold text-brand-dark">Dernières Nouvelles</h3>
            </div>
            <Link to="/news" className="text-brand-blue font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Voir tous les articles <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Préparation des compositions et Journée de l'Excellence",
                desc: "Organisation des compositions du 2nd semestre et de la grande Journée de l'Excellence le 13 Juin.",
                img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800",
                date: "14 Mai 2026",
                category: "Événement"
              },
              {
                title: "Examen Blanc et Coaching BFEM",
                desc: "Retour sur l'examen blanc de Mai et programme intensif de révisions pour nos candidats au BFEM.",
                img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800",
                date: "14 Mai 2026",
                category: "Pédagogie"
              },
              {
                title: "Excellence aux Examens Nationaux 2024/2025",
                desc: "98% de réussite au BFEM et à l'entrée en 6e, 93% au CFEE. Une fierté pour notre institution.",
                img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800",
                date: "12 Mai 2026",
                category: "Résultats"
              }
            ].map((news, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="h-60 overflow-hidden relative">
                  <img src={news.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={news.title} />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-brand-blue px-4 py-1.5 rounded-full text-[10px] font-bold shadow-md">
                    {news.category}
                  </span>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 mb-4 uppercase tracking-widest">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {news.date}</span>
                  </div>
                  <h4 className="text-xl font-display font-bold text-brand-dark mb-4 leading-snug group-hover:text-brand-blue transition-colors">
                    {news.title}
                  </h4>
                  <Link to="/news" className="text-brand-blue font-bold text-xs flex items-center gap-2 group-hover:gap-4 transition-all">
                    Lire l'article <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PARTNERS SECTION --- */}
      <section id="partenaires" className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-blue font-bold text-sm uppercase tracking-widest mb-4">Ils nous font confiance</h2>
            <h3 className="text-4xl font-display font-bold text-brand-dark">Nos Partenaires</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-8 items-center">
            {[
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
            ].map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, grayscale: 1 }}
                whileInView={{ opacity: 1 }}
                whileHover={{ grayscale: 0, scale: 1.1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedPartner(img)}
                className="flex items-center justify-center p-4 h-24 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <img 
                  src={img} 
                  alt={`Partenaire ${i + 1}`} 
                  className="max-w-full max-h-full object-contain filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
                />
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {selectedPartner && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPartner(null)}
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
                  src={selectedPartner}
                  alt="Partner logo enlarged"
                  className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl bg-white p-8"
                  onClick={(e) => e.stopPropagation()}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center">
           <h2 className="text-brand-blue font-bold text-sm uppercase tracking-widest mb-4">Témoignages</h2>
           <h3 className="text-4xl font-display font-bold text-center mb-16">Ce que disent nos parents</h3>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {[
                { name: 'Mme Diop', role: 'Parente d\'élève', content: "Mes enfants s'épanouissent pleinement. Le suivi est exceptionnel et le niveau académique très élevé." },
                { name: 'M. Sow', role: 'Parent d\'élève', content: "La modernité des infrastructures et l'approche pédagogique sont ce qui m'a convaincu. Je ne regrette absolument pas mon choix." },
                { name: 'Awa Ndiaye', role: 'Ancienne élève', content: "GS Falokh Education m'a donné les bases pour réussir mes études supérieures." }
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 p-8 rounded-3xl relative">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(star => <Star key={star} size={16} className="fill-brand-orange text-brand-orange" />)}
                  </div>
                  <p className="text-gray-600 mb-8 italic leading-relaxed">"{item.content}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-blue/20 rounded-full"></div>
                    <div>
                      <h5 className="font-bold text-brand-dark">{item.name}</h5>
                      <span className="text-xs text-gray-400 font-medium">{item.role}</span>
                    </div>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-5xl mx-auto bg-brand-blue rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="relative z-10"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">Rejoignez GS Falokh Education dès aujourd'hui</h2>
            <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">Offrez à votre enfant les outils et l'environnement nécessaires pour exceller dans un monde en constante évolution.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/admissions" className="bg-white text-brand-blue px-10 py-5 rounded-full font-bold text-lg hover:shadow-xl transition-all">
                S'inscrire maintenant
              </Link>
              <Link to="/contact" className="bg-brand-orange text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-xl transition-all">
                Nous contacter
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
