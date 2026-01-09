'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [bill, setBill] = useState(500);
  const [slide, setSlide] = useState(0);

  /* HERO SLIDESHOW */
  useEffect(() => {
    const slides = document.querySelectorAll('.hero-slide');
    slides.forEach((s, i) => {
      s.style.opacity = i === slide ? '1' : '0';
      const img = s.querySelector('img');
      if (img) img.style.transform = i === slide ? 'scale(1.1)' : 'scale(1)';
    });
  }, [slide]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(prev => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  /* CALCULADORA */
  useEffect(() => {
    const annual = bill * 0.95 * 12;
    const total = annual * 25;

    const billEl = document.getElementById('display-bill');
    const savingsEl = document.getElementById('display-savings');
    const totalEl = document.getElementById('display-twenty');

    if (billEl) billEl.innerText = `R$ ${bill.toLocaleString('pt-BR')}`;
    if (savingsEl)
      savingsEl.innerText = `R$ ${annual.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
    if (totalEl)
      totalEl.innerText = `R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
  }, [bill]);

  return (
    <>
      {/* 1. HERO SLIDESHOW */}
      <section className="relative h-screen w-full overflow-hidden bg-[#0D1B2A]">
        <div className="hero-slide absolute inset-0 opacity-100 transition-opacity duration-[2000ms]">
          <img
            src="https://indigo-goat-999288.hostingersite.com/wp-content/uploads/2025/11/transferir-2.jpeg"
            className="w-full h-full object-cover"
            style={{ transition: 'transform 10s linear' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/90 via-[#0D1B2A]/50 to-transparent" />
        </div>

        <div className="hero-slide absolute inset-0 opacity-0 transition-opacity duration-[2000ms]">
          <img
            src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=1920"
            className="w-full h-full object-cover"
            style={{ transition: 'transform 10s linear' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/90 via-[#0D1B2A]/50 to-transparent" />
        </div>

        <div className="hero-slide absolute inset-0 opacity-0 transition-opacity duration-[2000ms]">
          <img
            src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1920"
            className="w-full h-full object-cover"
            style={{ transition: 'transform 10s linear' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/90 via-[#0D1B2A]/50 to-transparent" />
        </div>

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
                <a
                  href="#calculator"
                  className="px-8 py-4 bg-[#00C2FF] text-[#0D1B2A] font-bold uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_20px_rgba(0,194,255,0.4)] text-center"
                >
                  Simular Economia
                </a>

                <Link
                  href="/sobre"
                  className="px-8 py-4 border border-white/30 text-white font-bold uppercase tracking-wider hover:bg-white hover:text-[#0D1B2A] transition-all backdrop-blur-sm text-center"
                >
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
            <div className="p-4">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">+1.500</h3>
              <p className="text-[#00C2FF] uppercase text-xs tracking-widest">Projetos</p>
            </div>
            <div className="p-4">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">99%</h3>
              <p className="text-[#00C2FF] uppercase text-xs tracking-widest">Satisfação</p>
            </div>
            <div className="p-4">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">15MW</h3>
              <p className="text-[#00C2FF] uppercase text-xs tracking-widest">Potência</p>
            </div>
            <div className="p-4">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">R$50M</h3>
              <p className="text-[#00C2FF] uppercase text-xs tracking-widest">Economia</p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all text-white font-bold text-xl tracking-wider">
            <div>CANADIAN SOLAR</div>
            <div>WEG</div>
            <div>FRONIUS</div>
            <div>GROWATT</div>
            <div>JA SOLAR</div>
          </div>
        </div>
      </section>

      {/* 3. CALCULADORA */}
      <section id="calculator" className="py-24 bg-gradient-to-br from-gray-900 to-[#0D1B2A] text-white relative">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Quanto você está <br />
              <span className="text-[#00C2FF]">perdendo?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              A energia solar não é um gasto, é um investimento.
            </p>
          </div>

          <div className="w-full md:w-1/2 bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl">
            <label className="block text-sm font-bold text-gray-300 uppercase tracking-wider mb-4">
              Valor da conta (Mensal)
            </label>

            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400">R$ 200</span>
              <span id="display-bill" className="text-4xl font-bold text-[#00C2FF]">
                R$ 500
              </span>
              <span className="text-gray-400">R$ 5.000+</span>
            </div>

            <input
              type="range"
              min="200"
              max="5000"
              step="50"
              value={bill}
              onChange={e => setBill(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer mb-12"
            />

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-[#0D1B2A]/50 p-4 rounded-lg border border-white/5">
                <span className="text-xs uppercase font-bold text-[#00C2FF]">
                  Economia Anual
                </span>
                <p id="display-savings" className="text-2xl font-bold text-white" />
              </div>

              <div className="bg-[#0D1B2A]/50 p-4 rounded-lg border border-white/5">
                <span className="text-xs uppercase font-bold text-green-400">
                  Em 25 Anos
                </span>
                <p id="display-twenty" className="text-2xl font-bold text-white" />
              </div>
            </div>

            <Link
              href="/contato"
              className="block text-center w-full bg-[#00C2FF] text-[#0D1B2A] font-bold py-4 rounded-lg hover:bg-white transition-colors uppercase tracking-widest"
            >
              Receber Proposta
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
      {/* 4. DIFERENCIAIS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[#0D1B2A] text-3xl md:text-4xl font-bold mb-4">
              Por que escolher a Antares?
            </h2>
            <div className="w-20 h-1 bg-[#00C2FF] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-10 shadow-lg hover:-translate-y-2 transition-transform border-t-4 border-transparent hover:border-[#00C2FF]">
              <div className="w-16 h-16 bg-[#0D1B2A]/5 rounded-full flex items-center justify-center mb-6 text-[#00C2FF]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0D1B2A] mb-4">Alta Performance</h3>
              <p className="text-gray-600">
                Equipamentos Tier-1 globais para máxima geração por metro quadrado.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-10 shadow-lg hover:-translate-y-2 transition-transform border-t-4 border-transparent hover:border-[#00C2FF]">
              <div className="w-16 h-16 bg-[#0D1B2A]/5 rounded-full flex items-center justify-center mb-6 text-[#00C2FF]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0D1B2A] mb-4">Instalação Segura</h3>
              <p className="text-gray-600">
                Equipe própria certificada (NR10/NR35). Acabamento estético impecável.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-10 shadow-lg hover:-translate-y-2 transition-transform border-t-4 border-transparent hover:border-[#00C2FF]">
              <div className="w-16 h-16 bg-[#0D1B2A]/5 rounded-full flex items-center justify-center mb-6 text-[#00C2FF]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0D1B2A] mb-4">Sustentabilidade</h3>
              <p className="text-gray-600">
                Análise financeira detalhada. Seu sistema se paga em poucos anos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PASSO A PASSO */}
      <section className="py-24 bg-[#0D1B2A] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-[#00C2FF] font-bold uppercase text-sm">
              Passo a Passo
            </span>
            <h2 className="text-3xl font-bold mt-2">Jornada Solar</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              ['01', 'Avaliação', 'Análise técnica.'],
              ['02', 'Projeto', 'Design personalizado.'],
              ['03', 'Instalação', 'Montagem rápida.'],
              ['04', 'Homologação', 'Burocracia zero.'],
            ].map(([n, t, d]) => (
              <div key={n} className="group">
                <div className="text-6xl font-bold text-gray-800 mb-4 group-hover:text-[#00C2FF] transition-colors">
                  {n}
                </div>
                <h3 className="text-xl font-bold">{t}</h3>
                <p className="text-gray-400 text-sm">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PROJETOS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
          <h2 className="text-[#0D1B2A] text-3xl font-bold">Projetos Recentes</h2>
          <Link href="/projetos" className="hidden md:block font-bold hover:text-[#00C2FF]">
            Ver Portfolio →
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            ['Residência Premium', '12.5 kWp', 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=800'],
            ['Centro Logístico', '150 kWp', 'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=800'],
            ['Usina de Solo', '1 MW', 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800'],
          ].map(([t, p, img]) => (
            <div key={t} className="relative h-[400px] group overflow-hidden cursor-pointer">
              <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/90 to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white">{t}</h3>
                <p className="text-[#00C2FF] font-bold">{p}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. DEPOIMENTOS */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#0D1B2A] mb-12">
            O que dizem nossos clientes
          </h2>

          <div className="bg-white p-10 shadow-xl relative">
            <div className="absolute -top-6 -left-6 text-9xl text-gray-100 font-serif leading-none">"</div>
            <p className="text-xl text-gray-600 italic mb-8 relative z-10">
              "A equipe da Antares foi excepcionalmente profissional. Hoje minha conta de luz é taxa mínima."
            </p>

            <div className="flex items-center justify-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <h4 className="font-bold text-[#0D1B2A]">Ricardo Almeida</h4>
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  Cotia/SP
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-[#0D1B2A] text-3xl font-bold text-center mb-12">
            Dúvidas Frequentes
          </h2>

          {[
            ['Como funciona à noite?', 'Você utiliza os créditos gerados durante o dia.'],
            ['Qual o tempo de retorno?', 'Payback médio de 2,5 a 4 anos.'],
            ['Precisa de manutenção?', 'Apenas limpeza periódica dos painéis.'],
            ['E se acabar a luz da rua?', 'O sistema desliga por segurança.'],
          ].map(([q, a]) => (
            <div key={q} className="border border-gray-200 rounded-lg mb-4">
              <button className="faq-button w-full flex justify-between items-center p-6">
                <span className="font-bold">{q}</span>
                <span className="faq-icon text-[#00C2FF] font-bold text-xl">+</span>
              </button>
              <div className="faq-content overflow-hidden max-h-0 opacity-0 transition-all duration-300">
                <div className="p-6 pt-0 text-gray-600">{a}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. CTA FINAL */}
      <section className="py-24 bg-[#0D1B2A] text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Pronto para gerar sua própria energia?
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Solicite um orçamento sem compromisso.
        </p>
        <Link
          href="/contato"
          className="inline-block px-10 py-5 bg-[#00C2FF] text-[#0D1B2A] font-bold uppercase tracking-wider hover:bg-white transition-all"
        >
          Simular Economia Agora
        </Link>
      </section>
    </>
  );
}
