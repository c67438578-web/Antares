import Link from 'next/link';

export const metadata = {
  title: 'Serviços | Antares Energia',
  description: 'Soluções completas em energia solar para residências e indústrias.',
};

export default function Servicos() {
  const services = [
    {
      id: 1,
      title: 'Solar Residencial',
      description: 'Projetos que valorizam seu imóvel e zeram sua conta de luz.',
      image: 'https://indigo-goat-999288.hostingersite.com/wp-content/uploads/2025/11/transferir-3.jpeg',
      reverse: false
    },
    {
      id: 2,
      title: 'Solar Industrial',
      description: 'Alta potência para grandes indústrias e redução de custos operacionais.',
      image: 'https://indigo-goat-999288.hostingersite.com/wp-content/uploads/2025/11/transferir-1.jpeg',
      reverse: true
    }
  ];

  return (
    <div className="pt-32 pb-16 bg-white">
      {/* Cabeçalho */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0D1B2A] mb-4">
          Nossas Soluções
        </h1>
      </div>

      {/* Lista de Serviços */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12 pb-24">
        {services.map((service) => (
          <div 
            key={service.id}
            className={`flex flex-col ${
              service.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
            } gap-8 items-center`}
          >
            {/* Imagem */}
            <div className="w-full md:w-1/2 h-[400px] overflow-hidden rounded-lg shadow-xl">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Conteúdo */}
            <div className="w-full md:w-1/2 p-6">
              <h2 className="text-3xl font-bold text-[#0D1B2A] mb-4">
                {service.title}
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                {service.description}
              </p>
              <Link 
                href="/contato" 
                className="inline-block px-8 py-3 bg-[#0D1B2A] text-white font-bold uppercase hover:bg-[#00C2FF] transition-all"
              >
                Saiba Mais
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
