'use client'

export default function Sobre() {
  return (
    <>
      <div className="pt-32 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0D1B2A] mb-4">Nossa História</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">Engenharia de precisão e compromisso sustentável.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-[#0D1B2A] mb-6">Liderando a revolução solar</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Fundada para tornar a energia limpa acessível e bonita. A Antares Energia entrega independência energética com os mais altos padrões de engenharia.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <span className="block text-4xl font-bold text-[#00C2FF] mb-1">2018</span>
                <span className="text-sm text-gray-500 uppercase">Fundação</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-[#00C2FF] mb-1">SP</span>
                <span className="text-sm text-gray-500 uppercase">Atuação Principal</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://indigo-goat-999288.hostingersite.com/wp-content/uploads/2025/11/transferir-2.jpeg" 
              alt="Antares Energia"
              className="w-full h-auto shadow-lg rounded"
            />
          </div>
        </div>
      </div>
    </>
  );
}
