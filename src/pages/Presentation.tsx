import { motion } from 'motion/react';
import { 
  History, Eye, Target, Sparkles, 
  MapPin, CheckCircle2, ChevronRight,
  ShieldCheck, Heart, Zap
} from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Presentation() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Header */}
      <section className="bg-brand-dark py-24 px-4 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/20 rounded-full blur-[100px] -mr-48 -mt-48"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
          >
            Découvrez notre <span className="text-brand-orange">Institution</span>
          </motion.h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Plus qu'une école, une communauté engagée pour l'avenir de vos enfants.</p>
        </div>
      </section>

      {/* History */}
      <section className="py-24 max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000" 
            alt="School history" 
            className="rounded-[3rem] shadow-2xl relative z-10 h-[500px] object-cover"
          />
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-orange/10 rounded-full blur-3xl"></div>
        </div>
        <div>
           <div className="inline-flex items-center gap-2 text-brand-blue font-bold text-sm uppercase mb-6">
             <History size={18} /> Notre Histoire
           </div>
           <h2 className="text-4xl font-display font-bold text-brand-dark mb-8 leading-tight">Depuis 2016, nous bâtissons l'Excellence.</h2>
           <p className="text-gray-600 mb-6 leading-relaxed">
             Groupe Scolaire Falokh Education a ouvert ses portes avec une vision claire : offrir une alternative éducative de haute qualité accessible aux familles de Mbour désirant une formation de standard international.
           </p>
           <p className="text-gray-600 mb-10 leading-relaxed">
             D'un simple bâtiment avec quelques dizaines d'élèves, nous sommes devenus une institution de référence à Falokh, accueillant aujourd'hui de nombreux apprenants.
           </p>
           <div className="space-y-4">
              {['Fondation par des experts en éducation', 'Croissance continue et nouveaux locaux', 'Reconnaissance académique nationale'].map(i => (
                <div key={i} className="flex items-center gap-3 font-bold text-brand-dark">
                  <CheckCircle2 className="text-brand-orange" size={20} /> {i}
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* MVV */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Notre Mission', desc: 'Instruire, inspirer et former des citoyens responsables et compétents capable d\'impacter positivement le monde.', icon: Target, color: 'text-brand-blue', bg: 'bg-brand-blue/10' },
            { title: 'Notre Vision', desc: 'Devenir le pôle d\'excellence éducative de référence en Afrique de l\'Ouest par l\'innovation pédagogique.', icon: Eye, color: 'text-brand-orange', bg: 'bg-brand-orange/10' },
            { title: 'Nos Valeurs', desc: 'Intégrité, Respect, Excellence, Solidarité et Créativité sont au cœur de notre identité quotidienne.', icon: Sparkles, color: 'text-purple-600', bg: 'bg-purple-100' },
          ].map((item, i) => (
            <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-gray-50 flex flex-col items-center text-center group"
            >
              <div className={`w-20 h-20 ${item.bg} ${item.color} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                <item.icon size={36} />
              </div>
              <h3 className="text-2xl font-display font-bold text-brand-dark mb-4">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed italic">"{item.desc}"</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pedagogy */}
      <section className="py-24 max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <h2 className="text-brand-blue font-bold text-sm uppercase mb-4">Pédagogie</h2>
          <h3 className="text-4xl font-display font-bold text-brand-dark">L'innovation au service de l'apprentissage</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
           {[
             { title: 'Apprentissage Actif', icon: Zap, desc: 'L\'élève est au centre. Nous favorisons l\'expérimentation et le travail collaboratif.' },
             { title: 'Bien-être de l\'Enfant', icon: Heart, desc: 'Un suivi psychopédagogique pour assurer l\'équilibre émotionnel de chaque apprenant.' },
             { title: 'Sûreté Totale', icon: ShieldCheck, desc: 'Vidéosurveillance, contrôle d\'accès et personnel de sécurité qualifié 24h/24.' }
           ].map((item, i) => (
             <div key={i} className="flex gap-6">
                <div className="shrink-0 w-14 h-14 bg-white shadow-xl rounded-2xl flex items-center justify-center text-brand-blue border border-gray-50">
                  <item.icon size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-dark mb-3">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto bg-brand-orange rounded-[3rem] p-12 text-center text-white relative overflow-hidden group">
          <div className="absolute inset-0 bg-brand-blue opacity-0 group-hover:opacity-10 transition-opacity"></div>
          <h2 className="text-3xl font-display font-bold mb-6">Prêt à rejoindre l'aventure ?</h2>
          <p className="mb-10 opacity-90 max-w-md mx-auto">Inscrivez votre enfant dès maintenant et garantissez-lui un avenir brillant.</p>
          <button className="bg-white text-brand-orange px-10 py-4 rounded-full font-bold hover:shadow-2xl transition-all">
            Réserver une visite
          </button>
        </div>
      </section>
    </div>
  );
}
