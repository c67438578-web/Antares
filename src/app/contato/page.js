'use client';

import { useState } from 'react';

export default function Contato() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de envio do formulário
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
  };

  return (
    <>
      <div className="bg-[#0D1B2A] text-white pt-32 pb-20 text-center">
        <h1 className="text-4xl font-bold mb-6">Fale Conosco</h1>
        <p className="text-xl text-gray-300">Solicite sua simulação gratuita.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-bold text-[#0D1B2A] mb-8">Envie uma mensagem</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Nome"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 bg-gray-50 focus:outline-none focus:border-[#00C2FF] transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 bg-gray-50 focus:outline-none focus:border-[#00C2FF] transition-colors"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Telefone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 bg-gray-50 focus:outline-none focus:border-[#00C2FF] transition-colors"
            />
            <textarea
              name="message"
              placeholder="Mensagem"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 bg-gray-50 focus:outline-none focus:border-[#00C2FF] transition-colors resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#00C2FF] text-[#0D1B2A] font-bold py-4 uppercase hover:bg-[#0D1B2A] hover:text-white transition-all"
            >
              Enviar
            </button>
          </form>
        </div>

        <div className="bg-gray-50 p-10 rounded">
          <h3 className="font-bold text-[#0D1B2A] mb-6 uppercase">Canais</h3>
          <p className="mb-4 text-gray-700">
            <strong>Telefone SP:</strong> 19 99616-2688
          </p>
          <p className="mb-4 text-gray-700">
            <strong>Telefone PE:</strong> 81 98110-2688
          </p>
          <p className="mb-4 text-gray-700">
            <strong>E-mail:</strong> contato@antaresenergia.com
          </p>
          <p className="text-gray-700">
            <strong>Endereço:</strong> Av. Rodolfo Kivitz, 2625 - Nova Odessa/SP
          </p>
        </div>
      </div>
    </>
  );
}
