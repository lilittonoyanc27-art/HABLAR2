import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  MessageSquare, 
  Utensils, 
  Home, 
  Star, 
  Sparkles, 
  Info,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export default function SpanishVerbsConjugation() {
  const verbs = [
    {
      infinitive: "Hablar",
      meaning: "Խոսել",
      type: "-AR",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100",
      icon: <MessageSquare className="w-8 h-8 text-blue-600" />,
      conjugations: [
        { person: "Yo", ending: "o", full: "hablo", hy: "Ես խոսում եմ" },
        { person: "Tú", ending: "as", full: "hablas", hy: "Դու խոսում ես" },
        { person: "Él/Ella/Ud.", ending: "a", full: "habla", hy: "Նա խոսում է" },
        { person: "Nosotros", ending: "amos", full: "hablamos", hy: "Մենք խոսում ենք" },
        { person: "Vosotros", ending: "áis", full: "habláis", hy: "Դուք խոսում եք" },
        { person: "Ellos/Ellas/Uds.", ending: "an", full: "hablan", hy: "Նրանք խոսում են" },
      ]
    },
    {
      infinitive: "Comer",
      meaning: "Ուտել",
      type: "-ER",
      color: "text-cyan-500",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-100",
      icon: <Utensils className="w-8 h-8 text-cyan-500" />,
      conjugations: [
        { person: "Yo", ending: "o", full: "como", hy: "Ես ուտում եմ" },
        { person: "Tú", ending: "es", full: "comes", hy: "Դու ուտում ես" },
        { person: "Él/Ella/Ud.", ending: "e", full: "come", hy: "Նա ուտում է" },
        { person: "Nosotros", ending: "emos", full: "comemos", hy: "Մենք ուտում ենք" },
        { person: "Vosotros", ending: "éis", full: "coméis", hy: "Դուք ուտում եք" },
        { person: "Ellos/Ellas/Uds.", ending: "en", full: "comen", hy: "Նրանք ուտում են" },
      ]
    },
    {
      infinitive: "Vivir",
      meaning: "Ապրել",
      type: "-IR",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-100",
      icon: <Home className="w-8 h-8 text-yellow-500" />,
      conjugations: [
        { person: "Yo", ending: "o", full: "vivo", hy: "Ես ապրում եմ" },
        { person: "Tú", ending: "es", full: "vives", hy: "Դու ապրում ես" },
        { person: "Él/Ella/Ud.", ending: "e", full: "vive", hy: "Նա ապրում է" },
        { person: "Nosotros", ending: "imos", full: "vivimos", hy: "Մենք ապրում ենք" },
        { person: "Vosotros", ending: "ís", full: "vivís", hy: "Դուք ապրում եք" },
        { person: "Ellos/Ellas/Uds.", ending: "en", full: "viven", hy: "Նրանք ապրում են" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans p-4 md:p-8 overflow-x-hidden relative">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500/5 to-transparent" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block p-6 bg-blue-600 rounded-[2.5rem] shadow-xl border-4 border-yellow-400 mb-8">
            <BookOpen className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-7xl font-black uppercase tracking-tighter text-blue-600 italic mb-2">
            Verbos <span className="text-cyan-500">Regulares</span>
          </h1>
          <p className="text-2xl text-zinc-400 font-bold italic">
            Hablar, Comer, Vivir — Կանոնավոր Բայերի Սպրյաժենիե
          </p>
        </motion.header>

        {/* Theory Section */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-zinc-900 rounded-[4rem] p-12 text-white shadow-2xl border-4 border-blue-600 mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Sparkles className="w-48 h-48" />
          </div>
          
          <h2 className="text-4xl font-black uppercase mb-8 flex items-center gap-4">
            <Star className="w-10 h-10 text-yellow-400 fill-current" />
            ԻՆՉՊԵ՞Ս ԽՈՆԱՐՀԵԼ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-2xl leading-relaxed font-medium italic">
                Իսպաներենում բայերը լինում են 3 տեսակի՝ վերջավորություններով՝ <span className="text-blue-400">-AR</span>, <span className="text-cyan-400">-ER</span>, <span className="text-yellow-400">-IR</span>:
              </p>
              <div className="p-6 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10">
                <p className="text-xl font-bold text-blue-300">
                  Քայլ 1: Հեռացնում ենք վերջավորությունը (-AR, -ER, -IR):
                </p>
                <p className="text-xl font-bold text-cyan-300 mt-2">
                  Քայլ 2: Ավելացնում ենք նոր վերջավորությունը՝ կախված դեմքից:
                </p>
              </div>
            </div>
            <div className="bg-white/10 p-8 rounded-[3rem] border border-white/20 flex items-center justify-center">
              <div className="text-center">
                <p className="text-5xl font-black text-yellow-400 mb-2">HABL + AR</p>
                <ArrowRight className="w-12 h-12 mx-auto text-white my-4" />
                <p className="text-5xl font-black text-blue-400">HABL + O = HABLO</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Verbs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {verbs.map((verb, idx) => (
            <motion.div 
              key={verb.infinitive}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-white rounded-[4rem] border-4 ${verb.borderColor} shadow-xl overflow-hidden flex flex-col`}
            >
              <div className={`${verb.bgColor} p-10 text-center border-b-4 ${verb.borderColor}`}>
                <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-md border-2 border-zinc-50">
                  {verb.icon}
                </div>
                <h3 className={`text-4xl font-black uppercase tracking-tighter ${verb.color}`}>
                  {verb.infinitive}
                </h3>
                <p className="text-xl font-bold text-zinc-400 italic">{verb.meaning}</p>
                <div className="mt-4 inline-block px-4 py-1 bg-white rounded-full text-xs font-black tracking-widest text-zinc-400 border border-zinc-100">
                  TIPO {verb.type}
                </div>
              </div>

              <div className="p-8 space-y-4 flex-grow">
                {verb.conjugations.map((conj, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-zinc-50 rounded-2xl border border-zinc-100 group hover:bg-white hover:shadow-md transition-all">
                    <div>
                      <span className="text-xs font-black text-zinc-400 uppercase tracking-widest block mb-1">{conj.person}</span>
                      <p className="text-2xl font-black text-zinc-800">
                        {conj.full.slice(0, -conj.ending.length)}
                        <span className={verb.color}>{conj.ending}</span>
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-zinc-400 italic">{conj.hy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-blue-600 rounded-[4rem] p-12 text-white text-center shadow-2xl border-4 border-yellow-400"
        >
          <Info className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
          <h3 className="text-4xl font-black uppercase mb-4 tracking-tighter">Հիշի՛ր</h3>
          <p className="text-2xl font-medium italic opacity-90 max-w-2xl mx-auto">
            Բոլոր կանոնավոր բայերը խոնարհվում են այս նույն սկզբունքով: Եթե գիտես այս 3-ը, ապա կարող ես խոնարհել հարյուրավոր այլ բայեր:
          </p>
        </motion.div>

        {/* Footer */}
        <footer className="mt-20 text-center pb-12">
          <div className="inline-flex items-center gap-3 bg-zinc-100 px-8 py-3 rounded-full border border-zinc-200">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400">
              Gramática Española: Verbos Regulares v1.0
            </span>
          </div>
        </footer>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
        body { 
          font-family: 'Inter', sans-serif; 
          background: #ffffff;
        }
      `}} />
    </div>
  );
}
