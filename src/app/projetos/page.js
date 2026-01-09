'use client'

import { useState } from 'react';
import Image from 'next/image';

export default function Projetos() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      category: 'residencial',
      image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=600',
      title: 'Residência Lake View',
      power: '15 kWp'
    },
    {
      id: 2,
      category: 'industrial',
      image: 'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=600',
      title: 'Centro Logístico SP',
      power: '500 kWp'
    },
    {
      id: 3,
      category: 'industrial',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600',
      title: 'Usina Solar Agreste',
      power: '2 MW'
    },
    {
      id: 4,
      category: 'comercial',
      image: 'https://images.unsplash.com/photo-1487754180477-db33d3d04733?q=80&w=600',
      title: 'Centro Automotivo',
      power: '45 kWp'
    },
    {
      id: 5,
      category: 'comercial',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=600',
      title: 'Eletroposto EV',
      power: 'Mobilidade Elétrica'
    },
    {
      id: 6,
      category: 'residencial',
      image: 'https://images.unsplash.com/photo-1592833159057-65a284572242?q=80&w=600',
      title: 'Residência Alphaville',
      power: '20 kWp'
    }
  ];

  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'residencial', label: 'Residencial' },
    { id: 'comercial', label: 'Comercial' },
    { id: 'industrial', label: 'Industrial' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0D1B2A] mb-6">
            Galeria de Projetos
          </h1>
          
          {/* FILTROS */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all ${
                  activeFilter === filter.id
                    ? 'bg-[#0D1B2A] text-white shadow-lg'
                    : 'bg-white text-gray-500 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* GRID DE PROJETOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="group relative bg-white shadow-md hover:shadow-xl transition-all overflow-hidden rounded-lg"
            >
              <div className="overflow-hidden aspect-[4/3] relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="text-[#00C2FF] text-xs font-bold uppercase tracking-wider">
                  {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                </span>
                <h3 className="text-xl font-bold text-[#0D1B2A] mt-2 mb-1">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm font-medium">
                  Potência: {project.power}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* MENSAGEM SE NÃO HOUVER PROJETOS */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              Nenhum projeto encontrado nesta categoria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
