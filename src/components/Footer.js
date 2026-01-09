import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Antares Energia - Energia Solar Premium',
  description: 'Economize até 95% na conta de luz com energia solar',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="bg-white text-gray-800 font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-[#0D1B2A]/95 backdrop-blur-md py-4 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/">
          <img 
            src="https://antaresenergia.com/wp-content/uploads/antares_logo.svg" 
            alt="Antares" 
            className="h-10 w-auto brightness-0 invert"
          />
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm font-bold uppercase text-white hover:text-[#00C2FF] transition-colors">
            Home
          </Link>
          <Link href="/sobre" className="text-sm font-bold uppercase text-white hover:text-[#00C2FF] transition-colors">
            Sobre
          </Link>
          <Link href="/servicos" className="text-sm font-bold uppercase text-white hover:text-[#00C2FF] transition-colors">
            Serviços
          </Link>
          <Link href="/projetos" className="text-sm font-bold uppercase text-white hover:text-[#00C2FF] transition-colors">
            Projetos
          </Link>
          <Link href="/contato" className="px-6 py-2 bg-[#00C2FF] text-[#0D1B2A] font-bold text-sm uppercase hover:bg-white transition-all rounded">
            Simular
          </Link>
        </div>
        <MobileMenu />
      </div>
    </nav>
  )
}

function MobileMenu() {
  return (
    <div className="md:hidden">
      <button 
        className="text-white p-2"
        onClick={() => {
          const menu = document.getElementById('mobile-menu');
          menu.classList.toggle('hidden');
        }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      <div id="mobile-menu" className="hidden absolute top-16 left-0 right-0 bg-[#0D1B2A] border-t border-white/10">
        <div className="flex flex-col p-6 space-y-4">
          <Link href="/" className="text-sm font-bold uppercase text-white hover:text-[#00C2FF]">Home</Link>
          <Link href="/sobre" className="text-sm font-bold uppercase text-white hover:text-[#00C2FF]">Sobre</Link>
          <Link href="/servicos" className="text-sm font-bold uppercase text-white hover:text-[#00C2FF]">Serviços</Link>
          <Link href="/projetos" className="text-sm font-bold uppercase text-white hover:text-[#00C2FF]">Projetos</Link>
          <Link href="/contato" className="px-6 py-2 bg-[#00C2FF] text-[#0D1B2A] font-bold text-sm uppercase hover:bg-white transition-all text-center rounded">
            Simular
          </Link>
        </div>
      </div>
    </div>
  )
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D1B2A] text-white pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. MARCA E SOCIAL */}
          <div className="flex flex-col items-start">
            <img 
              src="https://antaresenergia.com/wp-content/uploads/antares_logo.svg" 
              alt="Antares" 
              className="brightness-0 invert h-8 mb-6"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Líder em soluções de energia fotovoltaica premium. Transformamos luz solar em economia real e sustentabilidade.
            </p>
            <div className="flex space-x-4">
              {/* Instagram */}
              <a 
                href="https://instagram.com/antaresenergia" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#00C2FF] hover:border-[#00C2FF] transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* Facebook */}
              <a 
                href="https://facebook.com/antaresenergia" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#00C2FF] hover:border-[#00C2FF] transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              {/* LinkedIn */}
              <a 
                href="https://linkedin.com/company/antaresenergia" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#00C2FF] hover:border-[#00C2FF] transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* 2. EMPRESA */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-8 text-sm border-b border-gray-800 pb-2 inline-block">
              Empresa
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="/sobre" className="text-gray-400 hover:text-[#00C2FF] text-sm transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/projetos" className="text-gray-400 hover:text-[#00C2FF] text-sm transition-colors">
                  Nossos Projetos
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-gray-400 hover:text-[#00C2FF] text-sm transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-400 hover:text-[#00C2FF] text-sm transition-colors">
                  Carreiras
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. CONTATO */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-8 text-sm border-b border-gray-800 pb-2 inline-block">
              Contato
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <span className="text-[#00C2FF] font-bold">End:</span>
                <span className="leading-relaxed">
                  Av. Rodolfo Kivitz, 2625<br />
                  Nova Odessa – SP<br />
                  13382-350
                </span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <span className="text-[#00C2FF] font-bold">Tel:</span>
                <div className="flex flex-col space-y-1">
                  <span>SP: 19 99616-2688</span>
                  <span>PE: 81 98110-2688</span>
                </div>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <span className="text-[#00C2FF] font-bold">Email:</span>
                <span>contato@antaresenergia.com</span>
              </li>
            </ul>
            
            {/* BOTÃO WHATSAPP */}
            <a 
              href="https://wa.me/5519996162688" 
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center justify-center w-full px-4 py-3 border border-[#00C2FF] text-[#00C2FF] font-bold uppercase tracking-wider text-xs hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all duration-300 rounded-sm shadow-[0_0_10px_rgba(0,194,255,0.1)] hover:shadow-[0_0_15px_rgba(37,211,102,0.4)]"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              Conversar no WhatsApp
            </a>
          </div>

          {/* 4. NEWSLETTER */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-8 text-sm border-b border-gray-800 pb-2 inline-block">
              Newsletter
            </h4>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Inscreva-se para receber novidades sobre o mercado de energia solar.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Seu e-mail"
                className="bg-gray-900/50 border border-gray-700 text-white px-4 py-3 text-sm w-full focus:outline-none focus:border-[#00C2FF] transition-colors rounded-l-sm"
              />
              <button 
                type="submit" 
                className="bg-[#00C2FF] text-[#0D1B2A] font-bold px-4 hover:bg-white transition-colors rounded-r-sm flex items-center justify-center"
              >
                →
              </button>
            </form>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {currentYear} Antares Energia. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacidade" className="hover:text-white transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/termos" className="hover:text-white transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
