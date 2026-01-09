'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // O original usava 50px para mudar o estado
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 backdrop-blur-md border-b transition-all duration-500 ${
        scrolled 
          ? 'bg-[#0D1B2A]/95 py-4 border-white/10 shadow-lg' 
          : 'bg-transparent py-6 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/">
          <img 
            src="/antares_logo.svg" 
            alt="Antares" 
            className="h-10 w-auto brightness-0 invert" 
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link 
            href="/" 
            className="text-sm font-bold font-heading uppercase text-white hover:text-[#00C2FF] transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/sobre" 
            className="text-sm font-bold font-heading uppercase text-white hover:text-[#00C2FF] transition-colors"
          >
            Sobre
          </Link>
          <Link 
            href="/servicos" 
            className="text-sm font-bold font-heading uppercase text-white hover:text-[#00C2FF] transition-colors"
          >
            Serviços
          </Link>
          <Link 
            href="/projetos" 
            className="text-sm font-bold font-heading uppercase text-white hover:text-[#00C2FF] transition-colors"
          >
            Projetos
          </Link>
          
          {/* O seu botão "Simular" com o Verde/Ciano original */}
          <Link 
            href="/contato" 
            className="px-6 py-2 bg-[#00C2FF] text-[#0D1B2A] font-bold font-heading text-sm uppercase hover:bg-white transition-all shadow-[0_0_15px_rgba(0,194,255,0.3)]"
          >
            Simular
          </Link>
        </div>
      </div>
    </nav>
  );
}
