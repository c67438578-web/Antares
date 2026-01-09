import './globals.css'
import Link from 'next/link'
import { Inter, Montserrat } from 'next/font/google'
import { useState, useEffect } from 'react'

// 1. Configuração de Fontes Otimizada
const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap' 
})

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700'],
  display: 'swap' 
})

export const metadata = {
  title: 'Antares Energia - Energia Solar Premium',
  description: 'Economize até 95% na conta de luz com energia solar',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${montserrat.variable} scroll-smooth`}>
      <body className="bg-white text-gray-800 font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${
      scrolled 
        ? 'bg-[#0D1B2A]/95 backdrop-blur-md py-4 border-white/10 shadow-lg' 
        : 'bg-transparent py-6 border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/">
          <img 
            src="https://antaresenergia.com/wp-content/uploads/antares_logo.svg" 
            alt="Antares" 
            className="h-10 w-auto brightness-0 invert"
          />
        </Link>

        {/* Menu Desktop - Com fonte Montserrat (heading) */}
        <div className="hidden md:flex items-center space-x-8">
          {['Home', 'Sobre', 'Serviços', 'Projetos'].map((item) => (
            <Link 
              key={item}
              href={item === 'Home' ? '/' : `/${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} 
              className="text-sm font-bold font-heading uppercase text-white hover:text-[#00C2FF] transition-colors"
            >
              {item}
            </Link>
          ))}
          <Link href="/contato" className="px-6 py-2 bg-[#00C2FF] text-[#0D1B2A] font-bold font-heading text-sm uppercase hover:bg-white transition-all">
            Simular
          </Link>
        </div>

        {/* Botão Mobile */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Menu Mobile Reativo */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-full left-0 right-0 bg-[#0D1B2A] border-t border-white/10 animate-fade-in-down`}>
        <div className="flex flex-col p-6 space-y-4">
          <Link href="/" className="text-sm font-bold font-heading uppercase text-white" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/sobre" className="text-sm font-bold font-heading uppercase text-white" onClick={() => setMobileMenuOpen(false)}>Sobre</Link>
          <Link href="/servicos" className="text-sm font-bold font-heading uppercase text-white" onClick={() => setMobileMenuOpen(false)}>Serviços</Link>
          <Link href="/contato" className="bg-[#00C2FF] text-[#0D1B2A] font-bold font-heading py-3 text-center uppercase text-sm" onClick={() => setMobileMenuOpen(false)}>Simular</Link>
        </div>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-white pt-20 pb-10 border-t border-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col items-start">
            <img src="https://antaresenergia.com/wp-content/uploads/antares_logo.svg" alt="Antares" className="brightness-0 invert h-8 mb-6" />
            <p className="text-gray-400 text-sm leading-relaxed mb-8">Líder em soluções de energia fotovoltaica premium. Transformamos luz solar em economia real.</p>
          </div>
          
          <div>
            <h4 className="text-white font-bold font-heading uppercase tracking-wider mb-8 text-sm border-b border-gray-800 pb-2 inline-block">Empresa</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/sobre" className="hover:text-[#00C2FF] transition-colors">Sobre Nós</Link></li>
              <li><Link href="/projetos" className="hover:text-[#00C2FF] transition-colors">Nossos Projetos</Link></li>
              <li><Link href="/servicos" className="hover:text-[#00C2FF] transition-colors">Serviços</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold font-heading uppercase tracking-wider mb-8 text-sm border-b border-gray-800 pb-2 inline-block">Contato</h4>
            <div className="text-gray-400 text-sm space-y-4">
              <p><span className="text-[#00C2FF] font-bold">End:</span> Av. Rodolfo Kivitz, 2625 - Nova Odessa/SP</p>
              <p><span className="text-[#00C2FF] font-bold">Tel:</span> 19 99616-2688</p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold font-heading uppercase tracking-wider mb-8 text-sm border-b border-gray-800 pb-2 inline-block">Newsletter</h4>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Seu e-mail" className="bg-gray-900/50 border border-gray-700 text-white px-4 py-2 text-sm w-full focus:border-[#00C2FF] outline-none" />
              <button className="bg-[#00C2FF] text-[#0D1B2A] font-bold px-4 hover:bg-white transition-colors"> → </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Antares Energia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
