import React, { useState, useEffect } from 'react';
import { Link, Briefcase, Mail, ChevronLeft, ChevronRight } from 'lucide-react';

const Sidebar = ({ activeType, setActiveType, activeTag, setActiveTag, availableTags }) => {
  const [currentLogoSlide, setCurrentLogoSlide] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);
  
  // Array de logos de ejemplo (puedes cambiarlos por los reales después)
  const clientLogos = [
    "/logo-andesfilms.png",
    "/logo-xiaomi.png",
    "/logo-payscan.png",
    "/logo-oggie.png",
    "/logo-modmed.png",
    "/logo-licitalab.png",
    "/logo-LeCreuset.png",
    "/logo-GORIOUX.png",
    "/logo-expreso-rgua.png",
    "/logo-acciona.png",
    "/logo-cococafe.jpg",
    "/logo-ocoa.jpg"
  ];

  const reviews = [
    {
      text: "Muy profesional y grato ambiente. Hizo una exitosa capacitación e implementación.",
      name: "Yukón",
      role: ""
    },
    {
      text: "Solo puedo mencionar que la implementación fue todo un éxito gracias a la metodología de enseñanza que tiene Constanza Díaz y lo más importante es que siempre anda de muy buen ánimo y eso se agradece, quedé muy contenta con su ayuda y dedicación.",
      name: "Payscan",
      role: ""
    },
    {
      text: "El tiempo y el módulo en general son fáciles de usar, además la excelente atención del jefe de proyectos ayudó a que todo fuera más expedito y fácil de utilizar.",
      name: "Vaic Medical",
      role: ""
    }
  ];

  // Auto-play del carrusel de logos cada 3 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLogoSlide((prev) => (prev === clientLogos.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [clientLogos.length]);

  // Auto-play del carrusel de reviews cada 6 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const nextLogoSlide = () => {
    setCurrentLogoSlide((prev) => (prev === clientLogos.length - 1 ? 0 : prev + 1));
  };

  const prevLogoSlide = () => {
    setCurrentLogoSlide((prev) => (prev === 0 ? clientLogos.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col h-full bg-white p-6 shadow-sm sm:h-screen sm:sticky sm:top-0 overflow-y-auto no-scrollbar">
      <div className="mb-8 text-center sm:text-left">
        <div className="w-24 h-24 rounded-full mx-auto sm:mx-0 mb-4 overflow-hidden">
          {/* Avatar placeholder - reemplaza con tu imagen */}
          <img src="/foto-perfil.png" alt="Foto de Constanza" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Constanza Diaz Contreras</h1>
        <h2 className="text-base font-medium text-slate-500 mb-4">Customer Onboarding Executive</h2>
        <p className="text-base text-slate-600 mb-6">
          Mi misión en Buk: brindar la mejor experiencia para el cliente y crear herramientas que les den superpoderes a mis compañeros. Puedes revisar aquí una línea de tiempo de mis logros y aportes al equipo.
        </p>
        <div className="flex justify-center sm:justify-start space-x-4">
          <a href="#" className="text-slate-400 hover:text-theme-4 transition-colors">
            <Link size={20} />
          </a>
          <a href="#" className="text-slate-400 hover:text-theme-5 transition-colors">
            <Briefcase size={20} />
          </a>
          <a href="#" className="text-slate-400 hover:text-theme-3 transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Filtrar por Tipo</h3>
        <div className="flex flex-wrap gap-2">
          {['todos', 'Gestión Internacional & Bilingüe', 'Innovación & Automatización', 'Éxito del Cliente (Customer Success)', 'Liderazgo & Capacitación'].map(type => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-4 py-1.5 text-[13px] font-medium rounded-full transition-colors ${
                activeType === type 
                  ? 'bg-theme-pink text-slate-800' 
                  : 'bg-theme-1 text-slate-600 hover:bg-theme-2'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Reviews de Clientes (Carrusel) */}
      <div className="mb-8">
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Lo que dicen mis clientes</h3>
        
        <div className="relative w-full overflow-hidden rounded-xl bg-theme-1 border border-theme-2 shadow-sm pb-7">
          <div 
            className="flex transition-transform duration-500 ease-out h-full"
            style={{ transform: `translateX(-${currentReview * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4 pt-3 pb-1">
                <p className="text-[13px] leading-snug text-slate-600 italic mb-2 min-h-[40px]">
                  "{review.text}"
                </p>
                <div className="flex flex-col">
                  <p className="text-xs font-bold text-slate-800">{review.name}</p>
                  <p className="text-[10px] text-slate-500 leading-tight">{review.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Indicadores (puntitos de las reviews) */}
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5">
            {reviews.map((_, index) => (
              <div 
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-1.5 h-1.5 rounded-full cursor-pointer transition-all ${
                  currentReview === index ? 'bg-theme-4 w-3' : 'bg-theme-3'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Carrusel de Logos de Clientes */}
      <div className="w-full mb-6">
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 text-center sm:text-left">Cony Lovers</h3>
        <div className="relative w-full max-w-[200px] mx-auto sm:mx-0 h-16 rounded-xl overflow-hidden group border border-theme-2 shadow-sm bg-theme-1 flex items-center justify-center">
          {/* Logos */}
          <div 
            className="flex h-full w-full transition-transform duration-500 ease-out items-center"
            style={{ transform: `translateX(-${currentLogoSlide * 100}%)` }}
          >
            {clientLogos.map((src, index) => (
              <div key={index} className="w-full h-full flex-shrink-0 flex items-center justify-center p-2">
                <img 
                  src={src} 
                  alt={`Logo Cliente ${index + 1}`}
                  className="max-w-full max-h-full object-contain mix-blend-multiply"
                />
              </div>
            ))}
          </div>

          {/* Botones de navegación (visibles al hacer hover) */}
          <button 
            onClick={prevLogoSlide}
            className="absolute left-1 top-1/2 -translate-y-1/2 p-1 rounded-full bg-white/80 text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-sm"
          >
            <ChevronLeft size={16} />
          </button>
          <button 
            onClick={nextLogoSlide}
            className="absolute right-1 top-1/2 -translate-y-1/2 p-1 rounded-full bg-white/80 text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-sm"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;