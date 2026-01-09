'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [billValue, setBillValue] = useState(500);
  const [openFaq, setOpenFaq] = useState(null);

  const slides = [
    'https://indigo-goat-999288.hostingersite.com/wp-content/uploads/2025/11/transferir-2.jpeg',
    'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=1920',
    'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1920'
  ];

  // Slideshow automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Cálculo da economia
  const yearlyEconomy = (billValue * 12 * 0.95);
  const twentyYearEconomy = yearlyEconomy * 25;

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: 'Como funciona à noite?',
      answer: 'O sistema não gera à noite, mas você usa os créditos gerados durante o dia.'
    },
    {
      question: 'Qual o tempo de retorno?',
      answer: 'O Payback médio é de 2,5 a 4 anos, com vida útil superior a 25 anos.'
    },
    {
      question: 'O sistema precisa de manutenção?',
      answer: 'Mínima. Apenas limpeza dos painéis a cada 6 ou 12 meses.'
    },
    {
      question: 'O que acontece se acabar a luz da rua?',
      answer: 'O sistema desliga por segurança. Para ter energia sem luz da rua, é necessário um sistema com baterias (Híbrido).'
    }
  ];

  return (
    <>
      {/* 1. HERO SLIDESHOW */}
      <section className="relative h-screen w-full overflow-hidden bg-[#0D1B2A]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={slide} 
              alt={`Slide ${index + 1}`}
              className={`w-full h-full object-cover transition-transform duration-[10000ms] ${
                index === currentSlide ? 'scale-110' : 'scale-100'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/90 via-[#0D1B2A]/50 to-transparent"></div>
          </div>
        ))}

        {/* Conteúdo Hero */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-3xl">
              <span className="inline-block py-1 px-3 border border-[#00C2FF]/50 rounded-full text-[#00C2FF] text-xs font-bold tracking-widest uppercase mb-6 bg-[#0D1B2A]/30 backdrop-blur-sm">
                Tecnologia Fotovoltaica Premium
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
                Energia solar com <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-white">
                  instalação impecável.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-10 font-light max-w-2xl leading-relaxed drop-shadow-md">
                Economize até 95% na conta de luz com a excelência da Antares Energia. Especialistas em grandes usinas, indústrias e residências de alto padrão.
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
            <div className="inline-flex items-center space-x-2 text-[#00C2FF] mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <rect x="4" y="2" width="16" height="20" rx="2"></rect>
                <line x1="8" y1="6" x2="16" y2="6"></line>
                <line x1="16" y1="14" x2="16" y2="18"></line>
                <path d="M16 10h.01"></path>
                <path d="M12 10h.01"></path>
                <path d="M8 10h.01"></path>
                <path d="M12 14h.01"></path>
                <path d="M8 14h.01"></path>
                <path d="M12 18h.01"></path>
                <path d="M8 18h.01"></path>
              </svg>
              <span className="font-bold tracking-widest uppercase text-sm">Simulador Interativo</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Quanto você está <br/>
              <span className="text-[#00C2FF]">perdendo?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              A energia solar não é um gasto, é um investimento com retorno garantido e isento de inflação.
            </p>
          </div>
          <div className="w-full md:w-1/2 bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl">
            <label className="block text-sm font-bold text-gray-300 uppercase tracking-wider mb-4">
              Valor da conta (Mensal)
            </label>
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400">R$ 200</span>
              <span className="text-4xl font-bold text-[#00C2FF]">
                R$ {billValue}
              </span>
              <span className="text-gray-400">R$ 5.000+</span>
            </div>
            <input 
              type="range" 
              min="200" 
              max="5000" 
              step="50" 
              value={billValue}
              onChange={(e) => setBillValue(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer mb-12"
            />
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-[#0D1B2A]/50 p-4 rounded-lg border border-white/5">
                <span className="text-xs uppercase font-bold text-[#00C2FF]">Economia Anual</span>
                <p className="text-2xl font-bold text-white">
                  {yearlyEconomy.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </p>
              </div>
              <div className="bg-[#0D1B2A]/50 p-4 rounded-lg border border-white/5">
                <span className="text-xs uppercase font-bold text-green-400">Em 25 Anos</span>
                <p className="text-2xl font-bold text-white">
                  {twentyYearEconomy.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </p>
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

      {/* 4. DIFERENCIAIS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[#0D1B2A] text-3xl md:text-4xl font-bold mb-4">Por que escolher a Antares?</h2>
            <div className="w-20 h-1 bg-[#00C2FF] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 shadow-lg hover:-translate-y-2 transition-transform border-t-4 border-transparent hover:border-[#00C2FF]">
              <div className="w-16 h-16 bg-[#0D1B2A]/5 rounded-full flex items-center justify-center mb-6 text-[#00C2FF]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0D1B2A] mb-4">Alta Performance</h3>
              <p className="text-gray-600">Equipamentos Tier-1 globais para máxima geração por metro quadrado.</p>
            </div>
            <div className="bg-white p-10 shadow-lg hover:-translate-y-2 transition-transform border-t-4 border-transparent hover:border-[#00C2FF]">
              <div className="w-16 h-16 bg-[#0D1B2A]/5 rounded-full flex items-center justify-center mb-6 text-[#00C2FF]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0D1B2A] mb-4">Instalação Segura</h3>
              <p className="text-gray-600">Equipe própria certificada (NR10/NR35). Acabamento estético impecável.</p>
            </div>
            <div className="bg-white p-10 shadow-lg hover:-translate-y-2 transition-transform border-t-4 border-transparent hover:border-[#00C2FF]">
              <div className="w-16 h-16 bg-[#0D1B2A]/5 rounded-full flex items-center justify-center mb-6 text-[#00C2FF]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0D1B2A] mb-4">Sustentabilidade</h3>
              <p className="text-gray-600">Análise financeira detalhada. Seu sistema se paga em poucos anos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PASSO A PASSO */}
      <section className="py-24 bg-[#0D1B2A] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-[#00C2FF] font-bold uppercase text-sm">Passo a Passo</span>
            <h2 className="text-3xl font-bold mt-2">Jornada Solar</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="group">
              <div className="text-6xl font-bold text-gray-800 mb-4 group-hover:text-[#00C2FF] transition-colors">01</div>
              <h3 className="text-xl font-bold">Avaliação</h3>
              <p className="text-gray-400 text-sm">Análise técnica.</p>
            </div>
            <div className="group">
              <div className="text-6xl font-bold text-gray-800 mb-4 group-hover:text-[#00C2FF] transition-colors">02</div>
              <h3 className="text-xl font-bold">Projeto</h3>
              <p className="text-gray-400 text-sm">Design personalizado.</p>
            </div>
            <div className="group">
              <div className="text-6xl font-bold text-gray-800 mb-4 group-hover:text-[#00C2FF] transition-colors">03</div>
              <h3 className="text-xl font-bold">Instalação</h3>
              <p className="text-gray-400 text-sm">Montagem rápida.</p>
            </div>
            <div className="group">
              <div className="text-6xl font-bold text-gray-800 mb-4 group-hover:text-[#00C2FF] transition-colors">04</div>
              <h3 className="text-xl font-bold">Homologação</h3>
              <p className="text-gray-400 text-sm">Burocracia zero.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROJETOS (Resumo) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
          <div>
            <h2 className="text-[#0D1B2A] text-3xl font-bold mb-2">Projetos Recentes</h2>
          </div>
          <Link href="/projetos" className="hidden md:block text-[#0D1B2A] font-bold hover:text-[#00C2FF]">
            Ver Portfolio &rarr;
          </Link>
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-[400px] group overflow-hidden cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=800" 
                alt="Residência Premium"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/90 to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white">Residência Premium</h3>
                <p className="text-[#00C2FF] font-bold">12.5 kWp</p>
              </div>
            </div>
            <div className="relative h-[400px] group overflow-hidden cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=800" 
                alt="Centro Logístico"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/90 to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white">Centro Logístico</h3>
                <p className="text-[#00C2FF] font-bold">150 kWp</p>
              </div>
            </div>
            <div className="relative h-[400px] group overflow-hidden cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800" 
                alt="Usina de Solo"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/90 to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white">Usina de Solo</h3>
                <p className="text-[#00C2FF] font-bold">1 MW</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DEPOIMENTOS */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <svg className="w-12 h-12 text-[#00C2FF] mx-auto mb-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2"></path>
            <path d="M12 20v2"></path>
            <path d="m4.93 4.93 1.41 1.41"></path>
            <path d="m17.66 17.66 1.41 1.41"></path>
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="m6.34 17.66-1.41 1.41"></path>
            <path d="m19.07 4.93-1.41 1.41"></path>
          </svg>
          <h2 className="text-3xl font-bold text-[#0D1B2A] mb-12">O que dizem nossos clientes</h2>
          <div className="bg-white p-10 shadow-xl relative">
            <div className="absolute -top-6 -left-6 text-9xl text-gray-100 font-serif leading-none">"</div>
            <p className="text-xl text-gray-600 italic mb-8 relative z-10">
              "A equipe da Antares foi excepcionalmente profissional. Desde a primeira simulação até a instalação final, tudo foi transparente. Hoje minha conta de luz é taxa mínima."
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" 
                  alt="Ricardo Almeida"
                  className="w-full h-full object-cover absolute inset-0"
                />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-[#0D1B2A]">Ricardo Almeida</h4>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Cotia/SP</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-[#0D1B2A] text-3xl font-bold text-center mb-12">Dúvidas Frequentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 bg-white hover:bg-gray-50 text-left"
                >
                  <span className="font-bold text-[#0D1B2A] pr-4">{faq.question}</span>
                  <span className="text-[#00C2FF] font-bold text-xl">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-gray-600">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA FINAL */}
      <section className="py-24 bg-[#0D1B2A] relative overflow-hidden text-center">
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para gerar sua própria energia?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Proteja-se contra a inflação energética e valorize seu imóvel. Solicite um orçamento sem compromisso hoje mesmo.
          </p>
          <Link 
            href="/contato" 
            className="inline-block px-10 py-5 bg-[#00C2FF] text-[#0D1B2A] font-bold text-lg uppercase tracking-wider hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,194,255,0.3)]"
          >
            Simular Economia Agora
          </Link>
        </div>
      </section>
    </>
  );
}
