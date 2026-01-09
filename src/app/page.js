'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  // --- LÓGICA DO HERO SLIDESHOW ---
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://indigo-goat-999288.hostingersite.com/wp-content/uploads/2025/11/transferir-2.jpeg",
    "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=1920",
    "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1920"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // --- LÓGICA DA CALCULADORA ---
  const [bill, setBill] = useState(500);
  const annualSavings = bill * 12 * 0.95;
  const twentyFiveSavings = annualSavings * 25;

  // --- LÓGICA DO FAQ ---
  const [openFaq, setOpenFaq] = useState(null);
  const faqs = [
    { q: "Como funciona à noite?", a: "O sistema não gera à noite, mas você usa os créditos gerados durante o dia." },
    { q: "Qual o tempo de retorno?", a: "O Payback médio é de 2,5 a 4 anos, com vida útil superior a 25 anos." },
    { q: "O sistema precisa de manutenção?", a: "Mínima. Apenas limpeza dos painéis a cada 6 ou 12 meses." },
    { q: "O que acontece se acabar a luz da rua?", a: "O sistema desliga por segurança. Para ter energia sem luz da rua, é necessário um sistema com baterias (Híbrido)." }
  ];

  return (
    <main className="w-full">
      
      {/* 1. HERO SLIDESHOW */}
      <section className="relative h-screen w-full overflow-hidden bg-[#0D1B2A]">
        {slides.map((slide, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-[2000ms] ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
            <img src={slide} className="w-full h-full object-cover" alt="Hero" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/90 via-[#0D1B2A]/50 to-transparent"></div>
          </div>
        ))}

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-3xl">
              <span className="inline-block py-1 px-3 border border-[#00C2FF]/50 rounded-full text-[#00C2FF] text-xs font-bold tracking-widest uppercase mb-6 bg-[#0D1B2A]/30 backdrop-blur-sm">
                Tecnologia Fotovoltaica Premium
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg font-heading">
                Energia solar com <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-white">
                  instalação impecável.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-10 font-light max-w-2xl leading-relaxed drop-shadow-md">
                Economize até 95% na conta de luz com a excelência da Antares Energia. Especialistas em grandes usinas, indústrias e residências de alto padrão.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#calculator" className="px-8 py-4 bg-[#00C2FF] text-[#0D1B2A] font-bold uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_20px_rgba(0,194,255,0.4)] text-center">
                  Simular Economia
                </a>
                <Link href="/sobre" className="px-8 py-4 border border-white/30 text-white font-bold uppercase tracking-wider hover:bg-white hover:text-[#0D1B2A] transition-all backdrop-blur-sm text-center">
                  Falar com Especialista
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROVA SOCIAL */}
      <section className="bg-[#0D1B2A] py-12 border-b border-gray-800 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-800">
            <div className="p-4"><h3 className="text-4xl md:text-5xl font-bold text-white mb-2">+1.500</h3><p className="text-[#00C2FF] uppercase text-xs tracking-widest">Projetos</p></div>
            <div className="p-4"><h3 className="text-4xl md:text-5xl font-bold text-white mb-2">99%</h3><p className="text-[#00C2FF] uppercase text-xs tracking-widest">Satisfação</p></div>
            <div className="p-4"><h3 className="text-4xl md:text-5xl font-bold text-white mb-2">15MW</h3><p className="text-[#00C2FF] uppercase text-xs tracking-widest">Potência</p></div>
            <div className="p-4"><h3 className="text-4xl md:text-5xl font-bold text-white mb-2">R$50M</h3><p className="text-[#00C2FF] uppercase text-xs tracking-widest">Economia</p></div>
          </div>
          <div className="mt-12 flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all text-white font-bold text-xl tracking-wider uppercase">
             <div>CANADIAN SOLAR</div><div>WEG</div><div>FRONIUS</div><div>GROWATT</div><div>JA SOLAR</div>
          </div>
        </div>
      </section>

      {/* 3. CALCULADORA */}
      <section id="calculator" className="py-24 bg-gradient-to-br from-gray-900 to-[#0D1B2A] text-white relative">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center space-x-2 text-[#00C2FF] mb-4">
              <span className="font-bold tracking-widest uppercase text-sm">Simulador Interativo</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Quanto você está <br/><span className="text-[#00C2FF]">perdendo?</span></h2>
            <p className="text-gray-400 text-lg mb-8">A energia solar não é um gasto, é um investimento com retorno garantido e isento de inflação.</p>
          </div>
          <div className="w-full md:w-1/2 bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl">
            <label className="block text-sm font-bold text-gray-300 uppercase tracking-wider mb-4">Valor da conta (Mensal)</label>
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400">R$ 200</span>
              <span className="text-4xl font-bold text-[#00C2FF]">R$ {bill}</span>
              <span className="text-gray-400">R$ 5.000+</span>
            </div>
            <input 
              type="range" min="200" max="5000" step="50" 
              value={bill} 
              onChange={(e) => setBill(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer mb-12" 
            />
            <div className="grid grid-cols-2 gap-4 mb-8">
               <div className="bg-[#0D1B2A]/50 p-4 rounded-lg border border-white/5">
                  <span className="text-xs uppercase font-bold text-[#00C2FF]">Economia Anual</span>
                  <p className="text-2xl font-bold text-white">R$ {annualSavings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
               </div>
               <div className="bg-[#0D1B2A]/50 p-4 rounded-lg border border-white/5">
                  <span className="text-xs uppercase font-bold text-green-400">Em 25 Anos</span>
                  <p className="text-2xl font-bold text-white">R$ {twentyFiveSavings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
               </div>
            </div>
            <Link href="/contato" className="block text-center w-full bg-[#00C2FF] text-[#0D1B2A] font-bold py-4 rounded-lg hover:bg-white transition-colors uppercase tracking-widest">Receber Proposta</Link>
          </div>
        </div>
      </section>

      {/* 4. DIFERENCIAIS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[#0D1B2A] text-3xl md:text-4xl font-bold mb-4 font-heading">Por que escolher a Antares?</h2>
            <div className="w-20 h-1 bg-[#00C2FF] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[#0D1B2A]">
            {[
              { t: 'Alta Performance', d: 'Equipamentos Tier-1 globais para máxima geração por metro quadrado.' },
              { t: 'Instalação Segura', d: 'Equipe própria certificada (NR10/NR35). Acabamento estético impecável.' },
              { t: 'Sustentabilidade', d: 'Análise financeira detalhada. Seu sistema se paga em poucos anos.' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 shadow-lg hover:-translate-y-2 transition-transform border-t-4 border-transparent hover:border-[#00C2FF]">
                <h3 className="text-xl font-bold mb-4 uppercase">{item.t}</h3>
                <p className="text-gray-600">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PASSO A PASSO */}
      <section className="py-24 bg-[#0D1B2A] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16"><span className="text-[#00C2FF] font-bold uppercase text-sm">Passo a Passo</span><h2 className="text-3xl font-bold mt-2 font-heading">Jornada Solar</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {['Avaliação', 'Projeto', 'Instalação', 'Homologação'].map((step, i) => (
              <div key={i} className="group">
                <div className="text-6xl font-bold text-gray-800 mb-4 group-hover:text-[#00C2FF] transition-colors">0{i+1}</div>
                <h3 className="text-xl font-bold">{step}</h3>
                <p className="text-gray-400 text-sm">Processo otimizado Antares.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ CORRIGIDO */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-[#0D1B2A] text-3xl font-bold text-center mb-12 font-heading uppercase">Dúvidas Frequentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-lg">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-6 bg-white hover:bg-gray-50 text-left transition-all"
                >
                  <span className="font-bold text-[#0D1B2A] pr-4">{faq.q}</span>
                  <span className="text-[#00C2FF] font-bold text-xl">{openFaq === i ? '−' : '+'}</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-6 pt-0 text-gray-600 border-t border-gray-50">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA FINAL */}
      <section className="py-24 bg-[#0D1B2A] relative overflow-hidden text-center">
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">Pronto para gerar sua própria energia?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Proteja-se contra a inflação energética e valorize seu imóvel. Solicite um orçamento sem compromisso hoje mesmo.
          </p>
          <Link href="/contato" className="inline-block px-10 py-5 bg-[#00C2FF] text-[#0D1B2A] font-bold text-lg uppercase tracking-wider hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,194,255,0.3)] font-heading">
            Simular Economia Agora
          </Link>
        </div>
      </section>

    </main>
  );
}
