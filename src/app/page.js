'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [bill, setBill] = useState(500);
  const [slide, setSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const slides = [
    "https://indigo-goat-999288.hostingersite.com/wp-content/uploads/2025/11/transferir-2.jpeg",
    "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=1920",
    "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1920"
  ];

  const annualSavings = bill * 0.95 * 12;
  const totalSavings = annualSavings * 25;

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <main className="overflow-x-hidden">
      {/* 1. HERO SLIDESHOW */}
      <section className="relative h-screen w-full overflow-hidden bg-[#0D1B2A]">
        {slides.map((url, i) => (
          <div 
            key={i}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ${i === slide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={url}
              className="w-full h-full object-cover transition-transform duration-[10000ms] ease-linear"
              style={{ transform: i === slide ? 'scale(1.1)' : 'scale(1)' }}
              alt="Background solar"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/90 via-[#0D1B2A]/50 to-transparent" />
          </div>
        ))}

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-3xl">
              <span className="inline-block py-1 px-3 border border-[#00C2FF]/50 rounded-full text-[#00C2FF] text-xs font-bold tracking-widest uppercase mb-6 bg-[#0D1B2A]/30 backdrop-blur-sm">
                Tecnologia Fotovoltaica Premium
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
                Energia solar com <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-white">
                  instalação impecável.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-10 font-light max-w-2xl leading-relaxed drop-shadow-md">
                Economize até 95% na conta de luz com a excelência da Antares Energia.
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
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-800">
            <div className="p-4"><h3 className="text-4xl md:text-5xl font-bold text-white mb-2">+1.500</h3><p className="text-[#00C2FF] uppercase text-xs tracking-widest">Projetos</p></div>
            <div className="p-4"><h3 className="text-4xl md:text-5xl font-bold text-white mb-2">99%</h3><p className="text-[#00C2FF] uppercase text-xs tracking-widest">Satisfação</p></div>
            <div className="p-4"><h3 className="text-4xl md:text-5xl font-bold text-white mb-2">15MW</h3><p className="text-[#00C2FF] uppercase text-xs tracking-widest">Potência</p></div>
            <div className="p-4"><h3 className="text-4xl md:text-5xl font-bold text-white mb-2">R$50M</h3><p className="text-[#00C2FF] uppercase text-xs tracking-widest">Economia</p></div>
          </div>
        </div>
      </section>

      {/* 3. CALCULADORA */}
      <section id="calculator" className="py-24 bg-gradient-to-br from-gray-900 to-[#0D1B2A] text-white relative">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Quanto você está <br /><span className="text-[#00C2FF]">perdendo?</span></h2>
            <p className="text-gray-400 text-lg mb-8">A energia solar não é um gasto, é um investimento.</p>
          </div>
          <div className="w-full md:w-1/2 bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl">
            <label className="block text-sm font-bold text-gray-300 uppercase tracking-wider mb-4">Valor da conta (Mensal)</label>
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400">R$ 200</span>
              <span className="text-4xl font-bold text-[#00C2FF]">R$ {bill.toLocaleString('pt-BR')}</span>
              <span className="text-gray-400">R$ 5.000+</span>
            </div>
            <input
              type="range" min="200" max="5000" step="50"
              value={bill}
              onChange={e => setBill(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer mb-12 accent-[#00C2FF]"
            />
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-[#0D1B2A]/50 p-4 rounded-lg border border-white/5">
                <span className="text-xs uppercase font-bold text-[#00C2FF]">Economia Anual</span>
                <p className="text-2xl font-bold text-white">R$ {annualSavings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
              </div>
              <div className="bg-[#0D1B2A]/50 p-4 rounded-lg border border-white/5">
                <span className="text-xs uppercase font-bold text-green-400">Em 25 Anos</span>
                <p className="text-2xl font-bold text-white">R$ {totalSavings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
              </div>
            </div>
            <Link href="/contato" className="block text-center w-full bg-[#00C2FF] text-[#0D1B2A] font-bold py-4 rounded-lg hover:bg-white transition-colors uppercase tracking-widest">
              Receber Proposta
            </Link>
          </div>
        </div>
      </section>

      {/* 4. DIFERENCIAIS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-[#0D1B2A]">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que escolher a Antares?</h2>
            <div className="w-20 h-1 bg-[#00C2FF] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 shadow-lg hover:-translate-y-2 transition-transform border-t-4 border-transparent hover:border-[#00C2FF]">
              <h3 className="text-xl font-bold mb-4 uppercase">Alta Performance</h3>
              <p className="text-gray-600">Equipamentos Tier-1 globais para máxima geração.</p>
            </div>
            <div className="bg-white p-10 shadow-lg hover:-translate-y-2 transition-transform border-t-4 border-transparent hover:border-[#00C2FF]">
              <h3 className="text-xl font-bold mb-4 uppercase">Instalação Segura</h3>
              <p className="text-gray-600">Equipe própria certificada e acabamento impecável.</p>
            </div>
            <div className="bg-white p-10 shadow-lg hover:-translate-y-2 transition-transform border-t-4 border-transparent hover:border-[#00C2FF]">
              <h3 className="text-xl font-bold mb-4 uppercase">Sustentabilidade</h3>
              <p className="text-gray-600">Análise financeira detalhada e retorno garantido.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-[#0D1B2A] text-3xl font-bold text-center mb-12">Dúvidas Frequentes</h2>
          {[
            ['Como funciona à noite?', 'Você utiliza os créditos gerados durante o dia.'],
            ['Qual o tempo de retorno?', 'Payback médio de 2,5 a 4 anos.'],
            ['Precisa de manutenção?', 'Apenas limpeza periódica dos painéis.'],
            ['E se acabar a luz da rua?', 'O sistema desliga por segurança.'],
          ].map(([q, a], idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg mb-4">
              <button 
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="font-bold text-[#0D1B2A]">{q}</span>
                <span className="text-[#00C2FF] font-bold text-xl">{openFaq === idx ? '-' : '+'}</span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 pt-0 text-gray-600 border-t border-gray-50 mt-2">{a}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. CTA FINAL */}
      <section className="py-24 bg-[#0D1B2A] text-center text-white px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para gerar sua própria energia?</h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Solicite um orçamento sem compromisso.</p>
        <Link href="/contato" className="inline-block px-10 py-5 bg-[#00C2FF] text-[#0D1B2A] font-bold uppercase tracking-wider hover:bg-white transition-all shadow-lg">
          Simular Economia Agora
        </Link>
      </section>
    </main>
  );
}
