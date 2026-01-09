'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [bill, setBill] = useState(500);

  useEffect(() => {
    const annual = bill * 0.95 * 12;
    const twentyFive = annual * 25;

    document.getElementById('display-bill').innerText =
      `R$ ${bill.toLocaleString('pt-BR')}`;

    document.getElementById('display-savings').innerText =
      `R$ ${annual.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;

    document.getElementById('display-twenty').innerText =
      `R$ ${twentyFive.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
  }, [bill]);

  useEffect(() => {
    const buttons = document.querySelectorAll('.faq-button');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;
        const icon = btn.querySelector('.faq-icon');

        if (content.style.maxHeight) {
          content.style.maxHeight = null;
          content.style.opacity = 0;
          icon.innerText = '+';
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
          content.style.opacity = 1;
          icon.innerText = '-';
        }
      });
    });
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden bg-[#0D1B2A]">
        <div className="absolute inset-0">
          <img
            src="https://indigo-goat-999288.hostingersite.com/wp-content/uploads/2025/11/transferir-2.jpeg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/90 via-[#0D1B2A]/50 to-transparent" />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <span className="inline-block py-1 px-3 border border-[#00C2FF]/50 rounded-full text-[#00C2FF] text-xs font-bold tracking-widest uppercase mb-6 bg-[#0D1B2A]/30 backdrop-blur-sm">
              Tecnologia Fotovoltaica Premium
            </span>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Energia solar com <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-white">
                instalação impecável.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl">
              Economize até 95% na conta de luz com a excelência da Antares Energia.
            </p>

            <div className="flex gap-4 flex-col sm:flex-row">
              <a href="#calculator" className="px-8 py-4 bg-[#00C2FF] text-[#0D1B2A] font-bold uppercase">
                Simular Economia
              </a>

              <Link href="/sobre" className="px-8 py-4 border border-white/30 text-white font-bold uppercase text-center">
                Falar com Especialista
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULADORA */}
      <section id="calculator" className="py-24 bg-gradient-to-br from-gray-900 to-[#0D1B2A] text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Quanto você está <span className="text-[#00C2FF]">perdendo?</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Energia solar é investimento, não gasto.
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl">
            <label className="block text-sm font-bold text-gray-300 mb-4 uppercase">
              Valor da conta (Mensal)
            </label>

            <div className="flex justify-between mb-4">
              <span>R$ 200</span>
              <span id="display-bill" className="text-4xl font-bold text-[#00C2FF]">
                R$ 500
              </span>
              <span>R$ 5.000+</span>
            </div>

            <input
              type="range"
              min="200"
              max="5000"
              step="50"
              value={bill}
              onChange={e => setBill(Number(e.target.value))}
              className="w-full mb-12"
            />

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-[#0D1B2A]/50 p-4 rounded">
                <span className="text-xs text-[#00C2FF] font-bold uppercase">
                  Economia Anual
                </span>
                <p id="display-savings" className="text-2xl font-bold" />
              </div>

              <div className="bg-[#0D1B2A]/50 p-4 rounded">
                <span className="text-xs text-green-400 font-bold uppercase">
                  Em 25 Anos
                </span>
                <p id="display-twenty" className="text-2xl font-bold" />
              </div>
            </div>

            <Link
              href="/contato"
              className="block text-center bg-[#00C2FF] text-[#0D1B2A] font-bold py-4 rounded uppercase"
            >
              Receber Proposta
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
