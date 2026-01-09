import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Antares Energia - Energia Solar Premium',
  description: 'Economize até 95% na conta de luz com energia solar',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[#0D1B2A]">
          antares
        </Link>
        <div className="hidden md:flex gap-8">
          <Link href="/" className="text-gray-700 hover:text-[#00C2FF] transition-colors">
            Início
          </Link>
          <Link href="/sobre" className="text-gray-700 hover:text-[#00C2FF] transition-colors">
            Sobre
          </Link>
          <Link href="/projetos" className="text-gray-700 hover:text-[#00C2FF] transition-colors">
            Projetos
          </Link>
          <Link href="/contato" className="text-gray-700 hover:text-[#00C2FF] transition-colors">
            Contato
          </Link>
        </div>
        <Link 
          href="/contato" 
          className="hidden md:block px-6 py-2 bg-[#00C2FF] text-white font-bold rounded hover:bg-[#0D1B2A] transition-colors"
        >
          Orçamento
        </Link>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">antares</h3>
            <p className="text-gray-400 text-sm">
              Energia solar com instalação impecável desde 2018.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-[#00C2FF]">Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-400 hover:text-white">Início</Link></li>
              <li><Link href="/sobre" className="text-gray-400 hover:text-white">Sobre</Link></li>
              <li><Link href="/projetos" className="text-gray-400 hover:text-white">Projetos</Link></li>
              <li><Link href="/contato" className="text-gray-400 hover:text-white">Contato</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-[#00C2FF]">Contato</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>(11) 99999-9999</li>
              <li>contato@antares.com.br</li>
              <li>São Paulo - SP</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-[#00C2FF]">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Antares Energia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
