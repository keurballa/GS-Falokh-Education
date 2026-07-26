import { useState } from 'react';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  FileText, User, Mail, Phone, MapPin, 
  Calendar, GraduationCap, Send, CheckCircle 
} from 'lucide-react';
import { dbService } from '../services/db';

const schema = z.object({
  studentName: z.string().min(2, "Le nom est requis"),
  studentBirthDate: z.string().min(1, "La date de naissance est requise"),
  level: z.enum(["Preschool", "Elementary", "Middle", "HighSchool"], {
    message: "Choisissez un cycle"
  }),
  parentName: z.string().min(2, "Le nom du parent est requis"),
  parentEmail: z.string().email("Email invalide"),
  parentPhone: z.string().min(9, "Numéro valide requis"),
  address: z.string().min(5, "L'adresse est requise"),
});

type FormData = z.infer<typeof schema>;

export default function Admissions() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      await dbService.registerStudent(data);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error(error);
      alert("Une erreur est survenue lors de l'envoi du formulaire.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-12 text-center"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-3xl font-display font-bold text-brand-dark mb-4">Candidature envoyée !</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Merci d'avoir choisi le Groupe Scolaire Falokh Education. Notre équipe d'admission examinera votre demande et vous contactera très prochainement pour la suite de la procédure.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="bg-brand-blue text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all"
          >
            Retour à l'accueil
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <section className="bg-brand-blue py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Processus d'Admissions</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Rejoignez une communauté d'excellence au cœur de Mbour.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <h2 className="text-2xl font-display font-bold text-brand-dark mb-8 flex items-center gap-3">
                <FileText className="text-brand-blue" />
                Formulaire de Pré-inscription
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Nom complet de l'élève</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input 
                        {...register('studentName')}
                        className={`w-full pl-12 pr-4 py-3 rounded-xl border font-medium focus:ring-2 focus:ring-brand-blue outline-none transition-all ${errors.studentName ? 'border-red-500' : 'border-gray-200'}`}
                        placeholder="Prénom et Nom"
                      />
                    </div>
                    {errors.studentName && <p className="text-red-500 text-xs mt-1">{errors.studentName.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Date de naissance</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input 
                        {...register('studentBirthDate')}
                        type="date"
                        className={`w-full pl-12 pr-4 py-3 rounded-xl border font-medium focus:ring-2 focus:ring-brand-blue outline-none transition-all ${errors.studentBirthDate ? 'border-red-500' : 'border-gray-200'}`}
                      />
                    </div>
                    {errors.studentBirthDate && <p className="text-red-500 text-xs mt-1">{errors.studentBirthDate.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Cycle souhaité</label>
                  <div className="relative">
                    <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <select 
                      {...register('level')}
                      className={`w-full pl-12 pr-4 py-3 rounded-xl border font-medium focus:ring-2 focus:ring-brand-blue outline-none appearance-none transition-all ${errors.level ? 'border-red-500' : 'border-gray-200'}`}
                    >
                      <option value="">Sélectionnez un cycle</option>
                      <option value="Preschool">Préscolaire</option>
                      <option value="Elementary">Élémentaire</option>
                      <option value="Middle">Moyen</option>
                      <option value="HighSchool">Secondaire</option>
                    </select>
                  </div>
                  {errors.level && <p className="text-red-500 text-xs mt-1">{errors.level.message}</p>}
                </div>

                <hr className="my-8 border-gray-100" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Nom du parent / tuteur</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input 
                        {...register('parentName')}
                        className={`w-full pl-12 pr-4 py-3 rounded-xl border font-medium focus:ring-2 focus:ring-brand-blue outline-none transition-all ${errors.parentName ? 'border-red-500' : 'border-gray-200'}`}
                        placeholder="Responsable légal"
                      />
                    </div>
                    {errors.parentName && <p className="text-red-500 text-xs mt-1">{errors.parentName.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Email de contact</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input 
                        {...register('parentEmail')}
                        type="email"
                        className={`w-full pl-12 pr-4 py-3 rounded-xl border font-medium focus:ring-2 focus:ring-brand-blue outline-none transition-all ${errors.parentEmail ? 'border-red-500' : 'border-gray-200'}`}
                        placeholder="exemple@mail.com"
                      />
                    </div>
                    {errors.parentEmail && <p className="text-red-500 text-xs mt-1">{errors.parentEmail.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Téléphone</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input 
                        {...register('parentPhone')}
                        className={`w-full pl-12 pr-4 py-3 rounded-xl border font-medium focus:ring-2 focus:ring-brand-blue outline-none transition-all ${errors.parentPhone ? 'border-red-500' : 'border-gray-200'}`}
                        placeholder="+221 77 000 00 00"
                      />
                    </div>
                    {errors.parentPhone && <p className="text-red-500 text-xs mt-1">{errors.parentPhone.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Adresse de résidence</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input 
                        {...register('address')}
                        className={`w-full pl-12 pr-4 py-3 rounded-xl border font-medium focus:ring-2 focus:ring-brand-blue outline-none transition-all ${errors.address ? 'border-red-500' : 'border-gray-200'}`}
                        placeholder="Quartier, Ville"
                      />
                    </div>
                    {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:active:scale-100"
                >
                  {loading ? "Envoi en cours..." : "Soumettre la candidature"} <Send size={20} />
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-brand-light rounded-3xl p-8 border border-gray-100">
              <h3 className="text-xl font-display font-bold text-brand-dark mb-6 text-center">Procédure</h3>
              <div className="space-y-6">
                {[
                  { step: 1, title: 'Soumission', desc: 'Envoyez le formulaire en ligne avec les détails requis.' },
                  { step: 2, title: 'Examen', desc: 'Notre service examine votre candidature sous 48h.' },
                  { step: 3, title: 'Entretien', desc: 'Une rencontre est organisée avec les parents et l\'élève.' },
                  { step: 4, title: 'Confirmation', desc: 'Paiement des frais et inscription définitive.' }
                ].map(item => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold shrink-0">{item.step}</div>
                    <div>
                      <h4 className="font-bold text-brand-dark mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-orange rounded-3xl p-8 text-white">
              <h3 className="text-xl font-display font-bold mb-4">Besoin d'aide ?</h3>
              <p className="text-sm opacity-90 mb-6">Contactez notre bureau des admissions pour toute question.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 font-bold"><Phone size={18} /> +221 77 317 46 43</li>
                <li className="flex items-center gap-2 font-bold"><Mail size={18} /> sajoyu23@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
