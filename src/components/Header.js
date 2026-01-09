'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 backdrop-blur-md py-4 border-b border-white/10 transition-all ${
        scrolled ? 'bg-[#0D1B2A]/95 shadow-lg' : 'bg-[#0D1B2A]/95'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/">
          <img 
            src="/antares_logo.svg" 
            alt="Antares" 
            className="h-10 w-auto filter brightness-0 invert"
          />
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            href="/" 
            className="text-sm font-bold uppercase text-white hover:text-[#00C2FF] transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/sobre" 
            className="text-sm font-bold uppercase text-white hover:text-[#00C2FF] transition-colors"
          >
            Sobre
          </Link>
          <Link 
            href="/servicos" 
            className="text-sm font-bold uppercase text-white hover:text-[#00C2FF] transition-colors"
          >
            Serviços
          </Link>
          <Link 
            href="/projetos" 
            className="text-sm font-bold uppercase text-white hover:text-[#00C2FF] transition-colors"
          >
            Projetos
          </Link>
          <Link 
            href="/contato" 
            className="px-6 py-2 bg-[#00C2FF] text-[#0D1B2A] font-bold text-sm uppercase hover:bg-white transition-all"
          >
            Simular
          </Link>
        </div>
      </div>
    </nav>
  );
}
