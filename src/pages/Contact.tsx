import { motion } from 'motion/react';
import { 
  Phone, Mail, MapPin, Send, 
  MessageCircle, Clock, Map as MapIcon 
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { dbService } from '../services/db';
import { useState } from 'react';

const schema = z.object({
  name: z.string().min(2, "Nom requis"),
  email: z.string().email("Email invalide"),
  subject: z.string().min(5, "Sujet requis"),
  text: z.string().min(10, "Message trop court"),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      await dbService.sendMessage(data);
      setSent(true);
    } catch (error) {
      console.error(error);
      alert("Erreur lors de l'envoi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-6">Contactez-nous</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">Vous avez des questions ? Notre équipe est là pour vous répondre et vous accompagner dans vos démarches.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info cards */}
          <div className="space-y-6">
            {[
              { icon: Phone, label: 'Téléphone', value: '+221 77 317 46 43', color: 'bg-brand-blue/10 text-brand-blue' },
              { icon: Mail, label: 'Email', value: 'sajoyu23@gmail.com', color: 'bg-brand-orange/10 text-brand-orange' },
              { icon: MessageCircle, label: 'WhatsApp', value: '+221 77 317 46 43', color: 'bg-green-100 text-green-600' },
              { icon: MapPin, label: 'Adresse', value: 'Falokh, Mbour, Sénégal (14.4256, -16.9336)', color: 'bg-purple-100 text-purple-600' },
              { icon: Clock, label: 'Horaires', value: 'Lun - Ven : 08h - 17h', color: 'bg-gray-100 text-gray-600' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-3xl shadow-sm border border-gray-50">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.color}`}>
                  <item.icon size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase">{item.label}</p>
                  <p className="font-bold text-brand-dark">{item.value}</p>
                  {item.label === 'Adresse' && (
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=14.425612856545788,-16.933624070011476" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand-blue text-xs font-bold hover:underline block mt-1"
                    >
                      Voir sur Google Maps
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[2.5rem] shadow-xl p-8 md:p-12 border border-gray-50">
              {sent ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={40} />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-brand-dark mb-4">Message envoyé !</h2>
                  <p className="text-gray-500">Merci de nous avoir contacté. Nous vous répondrons dans les plus brefs délais.</p>
                  <button onClick={() => setSent(false)} className="mt-8 text-brand-blue font-bold">Envoyer un autre message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Nom Complet</label>
                      <input 
                        {...register('name')}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue outline-none transition-all font-medium"
                        placeholder="Votre nom"
                      />
                      {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Email</label>
                      <input 
                        {...register('email')}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue outline-none transition-all font-medium"
                        placeholder="votre@email.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Sujet</label>
                    <input 
                      {...register('subject')}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue outline-none transition-all font-medium"
                      placeholder="Comment pouvons-nous vous aider ?"
                    />
                    {errors.subject && <p className="text-red-500 text-xs">{errors.subject.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Message</label>
                    <textarea 
                      {...register('text')}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue outline-none transition-all font-medium resize-none"
                      placeholder="Votre message ici..."
                    />
                    {errors.text && <p className="text-red-500 text-xs">{errors.text.message}</p>}
                  </div>
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:active:scale-100"
                  >
                    {loading ? "Envoi..." : "Envoyer le message"} <Send size={20} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map Mockup */}
        <a 
          href="https://www.google.com/maps/search/?api=1&query=14.425612856545788,-16.933624070011476" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-20 h-96 rounded-[3rem] overflow-hidden relative shadow-2xl block group"
        >
          <img 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop" 
            alt="Map background" 
            className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-brand-blue/10 transition-colors"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-3xl shadow-2xl flex flex-col items-center group-hover:scale-110 transition-transform">
            <div className="w-12 h-12 bg-brand-orange text-white rounded-full flex items-center justify-center mb-3 shadow-lg animate-bounce">
              <MapIcon size={24} />
            </div>
            <h4 className="font-bold text-brand-dark text-center">GS Falokh Education</h4>
            <p className="text-xs text-gray-400">Falokh, Mbour</p>
            <span className="text-brand-blue text-[10px] font-bold mt-2 uppercase">Cliquer pour agrandir la carte</span>
          </div>
        </a>
      </section>
    </div>
  );
}
