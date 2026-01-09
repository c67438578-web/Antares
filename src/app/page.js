'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [conta, setConta] = useState(500);

  // Lógica de cálculo (95% de economia média)
  const economiaAno = conta * 12 * 0.95;
  const economia25Anos = economiaAno * 25;

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      
      {/* 1. HERO SECTION (Igual ao Print 5) */}
      <section className="relative min-h-[95vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://indigo-goat-999288.hostingerapp.com/wp-content/uploads/hero-bg.jpg" 
            className="w-full h-full object-cover" 
            alt="Background" 
          />
          <div className="absolute inset-0 bg-[#0D1B2A]/70 shadow-inner"></div>
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 border border-[#00C2FF]/40 bg-[#00C2FF]/10 text-[#00C2FF] text-[10px] font-bold tracking-[3px] uppercase mb-8 font-heading">
              Tecnologia Fotovoltaica Premium
            </span>
            <h1 className="text-5xl md:text-[80px] font-black text-white leading-[0.95] mb-8 font-heading tracking-tighter">
              Energia solar com <br />
              <span className="text-[#00C2FF]">instalação impecável.</span>
            </h1>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-xl font-sans">
              Economize até 95% na conta de luz com a excelência da Antares Energia. 
              Especialistas em grandes usinas e indústrias.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contato" className="px-10 py-4 bg-[#00C2FF] text-[#0D1B2A] font-black text-xs uppercase tracking-[2px] hover:bg-white transition-all rounded-sm font-heading">
                Simular Economia
              </Link>
              <Link href="/contato" className="px-10 py-4 border border-white/30 text-white font-black text-xs uppercase tracking-[2px] hover:bg-white/10 transition-all rounded-sm font-heading">
                Falar com especialista
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR (Print 5) */}
      <div className="bg-[#0D1B2A] py-10 border-b border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[ ['+1.500', 'Projetos'], ['99%', 'Eficiência'], ['15MW', 'Instalados'], ['R$50M', 'Economizados'] ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-[#00C2FF] text-3xl font-black font-heading">{stat[0]}</p>
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-1">{stat[1]}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. SEÇÃO CALCULADORA (Corrigida e Centralizada como no Print 5) */}
      <section className="bg-[#0D1B2A] py-32 relative">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[#00C2FF] font-bold text-xs tracking-widest uppercase mb-4 block font-heading">ECONOMIA REAL</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 font-heading leading-tight">
              Quanto você está <br /> <span className="text-[#00C2FF]">perdendo?</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              A cada mês sem energia solar, você deixa dinheiro na mesa. 
              Veja quanto poderia estar investindo no seu futuro.
            </p>
          </div>

          {/* CARD DA CALCULADORA */}
          <div className="bg-[#162639] p-8 md:p-12 rounded-sm border border-white/5 shadow-2xl relative">
            <div className="flex justify-between items-end mb-10">
              <span className="text-gray-400 text-[11px] font-bold uppercase font-heading tracking-widest">Sua conta mensal</span>
              <span className="text-[#00C2FF] text-4xl font-black font-heading">R$ {conta}</span>
            </div>
            
            <input 
              type="range" min="100" max="10000" step="100" 
              value={conta} 
              onChange={(e) => setConta(Number(e.target.value))}
              className="w-full mb-14 accent-[#00C2FF]" 
            />

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="bg-[#0D1B2A] p-6 rounded-sm border border-white/5">
                <p className="text-[10px] text-gray-500 uppercase font-black mb-3 font-heading tracking-widest">Economia / Ano</p>
                <p className="text-white text-2xl font-bold font-heading">R$ {economiaAno.toLocaleString('pt-BR')}</p>
              </div>
              <div className="bg-[#0D1B2A] p-6 rounded-sm border border-white/5">
                <p className="text-[10px] text-gray-500 uppercase font-black mb-3 font-heading tracking-widest">Economia / 25 Anos</p>
                <p className="text-[#00C2FF] text-2xl font-bold font-heading">R$ {economia25Anos.toLocaleString('pt-BR')}</p>
              </div>
            </div>

            <button className="w-full py-5 bg-[#00C2FF] text-[#0D1B2A] font-black text-xs uppercase tracking-[3px] hover:bg-white transition-all rounded-sm font-heading shadow-xl shadow-cyan-500/10">
              QUERO REDUZIR MINHA CONTA AGORA
            </button>
          </div>
        </div>
      </section>

      {/* 4. CARDS DE DIFERENCIAIS (Print 5 - Brancos com sombra) */}
      <section className="bg-gray-50 py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20">
             <h2 className="text-[#0D1B2A] text-4xl font-black font-heading uppercase">Por que escolher a Antares?</h2>
             <div className="w-20 h-1 bg-[#00C2FF] mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[ 
              {t: 'Alta Performance', d: 'Equipamentos de última geração com garantia de eficiência.'},
              {t: 'Instalação Segura', d: 'Equipe própria certificada e instalação dentro das normas.'},
              {t: 'Sustentabilidade', d: 'Redução imediata na emissão de CO2 e impacto ambiental.'}
            ].map((card, i) => (
              <div key={i} className="bg-white p-10 rounded-sm shadow-xl shadow-gray-200/50 border-b-4 border-[#00C2FF]">
                <div className="w-14 h-14 bg-[#00C2FF]/10 rounded-full flex items-center justify-center mb-8">
                  <span className="text-[#00C2FF] text-2xl">✔</span>
                </div>
                <h3 className="text-[#0D1B2A] text-xl font-black font-heading mb-4 uppercase">{card.t}</h3>
                <p className="text-gray-500 leading-relaxed font-sans">{card.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
