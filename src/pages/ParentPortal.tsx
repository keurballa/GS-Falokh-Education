import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  User, LayoutDashboard, Calendar, FileText, 
  MessageSquare, Bell, LogOut, ChevronRight,
  TrendingUp, Clock, BookOpen
} from 'lucide-react';
import { auth, googleProvider } from '../lib/firebase';
import { signInWithPopup, onAuthStateChanged, signOut, User as FirebaseUser } from 'firebase/auth';

export default function ParentPortal() {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Chargement...</div>;
  }

  if (!user) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-brand-light flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white rounded-3xl shadow-xl p-10 text-center"
        >
          <div className="w-16 h-16 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
            <LayoutDashboard size={32} />
          </div>
          <h1 className="text-3xl font-display font-bold text-brand-dark mb-4">Espace Parents</h1>
          <p className="text-gray-500 mb-8">Consultez les notes, les absences et l'emploi du temps de votre enfant en toute sécurité.</p>
          <button 
            onClick={handleLogin}
            className="w-full bg-white border border-gray-200 text-brand-dark px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-gray-50 transition-all shadow-sm"
          >
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
            Se connecter avec Google
          </button>
          <p className="mt-8 text-xs text-gray-400">Accès réservé aux parents inscrits au Groupe Scolaire Falokh Education.</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 bg-brand-light flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-72 flex-col bg-white border-r border-gray-100 p-6 fixed h-[calc(100vh-6rem)]">
        <div className="flex items-center gap-3 mb-10 px-2">
          <img src={user.photoURL || ''} alt="" className="w-10 h-10 rounded-full border-2 border-brand-blue" />
          <div className="overflow-hidden">
            <p className="font-bold text-sm text-brand-dark truncate">{user.displayName}</p>
            <p className="text-xs text-brand-blue font-medium">Parent d'élève</p>
          </div>
        </div>

        <nav className="space-y-2 flex-grow">
          {[
            { name: 'Tableau de bord', icon: LayoutDashboard, active: true },
            { name: 'Notes & Bulletins', icon: FileText },
            { name: 'Emploi du temps', icon: Calendar },
            { name: 'Absences', icon: Clock },
            { name: 'Messages', icon: MessageSquare },
            { name: 'Documents', icon: BookOpen },
          ].map((item) => (
            <button 
              key={item.name}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                item.active 
                ? 'bg-brand-blue text-white shadow-md' 
                : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              <item.icon size={20} />
              {item.name}
            </button>
          ))}
        </nav>

        <button 
          onClick={handleLogout}
          className="mt-auto flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-red-500 hover:bg-red-50 transition-all"
        >
          <LogOut size={20} />
          Déconnexion
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-grow lg:ml-72 p-6 md:p-10 max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-display font-bold text-brand-dark">Bonjour, {user.displayName?.split(' ')[0]} 👋</h1>
            <p className="text-gray-500 text-sm mt-1">Voici le suivi de la semaine pour vos enfants.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-gray-400 hover:text-brand-blue shadow-sm border border-gray-100">
              <Bell size={20} />
            </button>
            <div className="bg-brand-blue text-white px-4 py-2 rounded-xl text-xs font-bold shadow-md">
              Année 2025 - 2026
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { label: 'Moyenne Générale', value: '16.5', trend: '+0.5', icon: TrendingUp, color: 'text-brand-blue', bg: 'bg-brand-blue/10' },
            { label: 'Assiduité', value: '98%', trend: 'Excellent', icon: Clock, color: 'text-brand-orange', bg: 'bg-brand-orange/10' },
            { label: 'Documents en attente', value: '2', trend: 'À signer', icon: FileText, color: 'text-purple-500', bg: 'bg-purple-500/10' },
            { label: 'Prochain examen', value: 'Lundi', trend: 'Maths', icon: Calendar, color: 'text-green-500', bg: 'bg-green-500/10' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-50 flex items-center gap-4">
              <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center`}>
                <stat.icon size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase">{stat.label}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-display font-bold text-brand-dark">{stat.value}</span>
                  <span className={`text-[10px] font-bold ${stat.color}`}>{stat.trend}</span>
                </div>
              </div>
            </div>
          ))}
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main List */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-50 overflow-hidden">
              <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                <h3 className="font-display font-bold text-lg text-brand-dark">Devoirs & Examens à venir</h3>
                <button className="text-brand-blue text-sm font-bold flex items-center gap-1">Tout voir <ChevronRight size={14} /></button>
              </div>
              <div className="p-6 space-y-4">
                {[
                  { subject: 'Mathématiques', type: 'Examen de mi-semestre', date: '16 Mai 2026', time: '08:00', status: 'Important' },
                  { subject: 'Français', type: 'Rédaction à rendre', date: '18 Mai 2026', time: '14:00', status: 'En attente' },
                  { subject: 'Anglais', type: 'Test de vocabulaire', date: '20 Mai 2026', time: '10:30', status: 'Normal' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all border border-transparent hover:border-brand-blue/20">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand-blue font-bold shadow-sm">
                        {item.subject[0]}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-brand-dark">{item.subject}</h4>
                        <p className="text-xs text-gray-400">{item.type}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-brand-dark">{item.date}</p>
                      <p className="text-[10px] text-gray-400">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-50 p-6">
              <h3 className="font-display font-bold text-lg text-brand-dark mb-6">Actualités de l'école</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="rounded-2xl overflow-hidden border border-gray-100">
                    <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=400" className="w-full h-32 object-cover" alt="" />
                    <div className="p-4">
                      <h4 className="font-bold text-sm mb-2">Journée porte ouverte 2026</h4>
                      <p className="text-xs text-gray-400 mb-2">Nous vous invitons le samedi 20 mai pour découvrir nos nouveaux locaux...</p>
                      <button className="text-brand-blue text-[10px] font-bold">Lire la suite</button>
                    </div>
                 </div>
                 <div className="rounded-2xl overflow-hidden border border-gray-100">
                    <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=400" className="w-full h-32 object-cover" alt="" />
                    <div className="p-4">
                      <h4 className="font-bold text-sm mb-2">Résultats BFEM 2025</h4>
                      <p className="text-xs text-gray-400 mb-2">Félicitations à tous nos élèves pour ce taux de réussite exceptionnel de 100%...</p>
                      <button className="text-brand-blue text-[10px] font-bold">Lire la suite</button>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Activity Sidebar */}
          <div className="space-y-8">
            <div className="bg-brand-dark rounded-[2.5rem] p-8 text-white">
              <h3 className="text-xl font-display font-bold mb-6">Notification Flash</h3>
              <div className="bg-white/10 p-4 rounded-2xl mb-4 border border-white/10">
                <p className="text-xs font-bold text-brand-orange mb-1">RAPPEL : PAIEMENT</p>
                <p className="text-sm opacity-90 leading-relaxed">Les écolages du mois de Mai sont dus avant le 10.</p>
              </div>
              <button className="w-full bg-brand-orange text-white py-3 rounded-xl font-bold text-sm hover:shadow-lg transition-all mt-4">
                Payer maintenant (Wave/OM)
              </button>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-50 p-6">
              <h3 className="font-display font-bold text-lg text-brand-dark mb-6">Contact École</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 border border-transparent">
                  <div className="w-10 h-10 bg-brand-blue/10 text-brand-blue rounded-xl flex items-center justify-center">
                    <User size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400">ADMINISTRATION</p>
                    <p className="text-xs font-bold text-brand-dark">+221 230 98 12</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 border border-transparent">
                  <div className="w-10 h-10 bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400">WHATSAPP URGENCE</p>
                    <p className="text-xs font-bold text-brand-dark">+221 230 98 12</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
