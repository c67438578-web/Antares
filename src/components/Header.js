'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0D1B2A]/95 backdrop-blur-md py-3 shadow-xl' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
        {/* Logo alinhada exatamente à esquerda */}
        <Link href="/">
          <img 
            src="https://antaresenergia.com/wp-content/uploads/antares_logo.svg" 
            alt="Antares" 
            className="h-8 md:h-9 w-auto brightness-0 invert" 
          />
        </Link>

        {/* Menu alinhado à direita com Montserrat Extra-Bold */}
        <div className="hidden md:flex items-center space-x-10">
          {['HOME', 'SOBRE', 'SERVIÇOS', 'PROJETOS'].map((item) => (
            <Link 
              key={item} 
              href={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
              className="text-[13px] font-extrabold font-heading text-white hover:text-[#00C2FF] transition-colors tracking-wider"
            >
              {item}
            </Link>
          ))}
          
          {/* O Botão Simular idêntico ao Print */}
          <Link 
            href="/contato" 
            className="bg-[#00C2FF] text-[#0D1B2A] px-8 py-2.5 text-[13px] font-extrabold font-heading uppercase tracking-widest hover:bg-white transition-all rounded-sm"
          >
            SIMULAR
          </Link>
        </div>
      </div>
    </nav>
  );
}
