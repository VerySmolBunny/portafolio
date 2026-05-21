import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import * as Icons from 'lucide-react';

const Timeline = ({ logros }) => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      {logros.length === 0 ? (
        <div className="text-center py-20 text-slate-500">
          No se encontraron resultados para estos filtros.
        </div>
      ) : (
        <VerticalTimeline animate={false} layout="1-column-left">
          {logros.map((item) => {
            // Obtener el componente de icono dinámicamente
            const IconComponent = Icons[item.icono] || Icons.Code;
            
            return (
              <VerticalTimelineElement
                key={item.id}
                date={item.fecha}
                dateClassName="text-slate-500 font-medium sm:ml-4"
                iconStyle={{ 
                  background: item.tipo === 'logro' ? 'var(--color-theme-green)' : 'var(--color-theme-5)', 
                  color: item.tipo === 'logro' ? '#ffffff' : '#1e293b',
                  boxShadow: '0 0 0 4px var(--color-theme-1), inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)'
                }}
                icon={<IconComponent />}
              >
                <div className="flex flex-col gap-2">
                  <span className={`self-start text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                    item.tipo === 'logro' ? 'bg-theme-green text-slate-800' : 'bg-theme-5 text-slate-800'
                  }`}>
                    {item.tipo}
                  </span>
                  
                  <h3 className="text-xl font-bold text-slate-800">{item.titulo}</h3>
                  <h4 className="text-sm font-medium text-slate-500 mb-2">{item.empresa}</h4>
                  
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {item.descripcion}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="bg-theme-1 text-slate-600 px-2 py-1 rounded text-xs font-medium border border-theme-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      )}
    </div>
  );
};

export default Timeline;