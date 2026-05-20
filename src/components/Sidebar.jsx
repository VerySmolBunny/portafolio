import React from 'react';
import { Link, Briefcase, Mail } from 'lucide-react';

const Sidebar = ({ activeType, setActiveType, activeTag, setActiveTag, availableTags }) => {
  return (
    <div className="flex flex-col h-full bg-white p-6 shadow-sm sm:h-screen sm:sticky sm:top-0">
      <div className="mb-8 text-center sm:text-left">
        <div className="w-24 h-24 rounded-full bg-slate-200 mx-auto sm:mx-0 mb-4 overflow-hidden border-2 border-slate-100">
          {/* Avatar placeholder - reemplaza con tu imagen */}
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Profile" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-2xl font-bold text-slate-800 mb-1">Constanza Diaz Contreras</h1>
        <h2 className="text-sm font-medium text-slate-500 mb-4">Customer Onboarding Executive</h2>
        <p className="text-sm text-slate-600 mb-6">
          Especialista en React y arquitecturas escalables. Transformando ideas en experiencias web de alto rendimiento.
        </p>
        <div className="flex justify-center sm:justify-start space-x-4">
          <a href="#" className="text-slate-400 hover:text-slate-700 transition-colors">
            <Link size={20} />
          </a>
          <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
            <Briefcase size={20} />
          </a>
          <a href="#" className="text-slate-400 hover:text-red-500 transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Filtrar por Tipo</h3>
        <div className="flex flex-wrap gap-2">
          {['todos', 'aporte', 'logro'].map(type => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-3 py-1 text-xs font-medium rounded-full capitalize transition-colors ${
                activeType === type 
                  ? 'bg-slate-800 text-white' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Filtrar por Tecnología</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTag('todos')}
            className={`px-3 py-1 text-xs rounded-md transition-colors ${
              activeTag === 'todos' 
                ? 'bg-blue-100 text-blue-700 font-medium' 
                : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
            }`}
          >
            Todos
          </button>
          {availableTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-3 py-1 text-xs rounded-md transition-colors ${
                activeTag === tag 
                  ? 'bg-blue-100 text-blue-700 font-medium' 
                  : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;