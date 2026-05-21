import React, { useState, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import Timeline from './components/Timeline';
import { logros } from './data/logros';

function App() {
  const [activeType, setActiveType] = useState('todos');
  const [activeTag, setActiveTag] = useState('todos');

  // Extraer todos los tags únicos para el filtro
  const availableTags = useMemo(() => {
    const tags = new Set();
    logros.forEach(item => {
      item.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  // Filtrar los logros según los estados activos
  const filteredLogros = useMemo(() => {
    return logros.filter(item => {
      const matchType = activeType === 'todos' || item.tipo === activeType;
      const matchTag = activeTag === 'todos' || item.tags.includes(activeTag);
      return matchType && matchTag;
    });
  }, [activeType, activeTag]);

  return (
    <div className="min-h-screen bg-theme-1 flex flex-col sm:flex-row">
      {/* Columna Izquierda: Sidebar (Fijo en desktop) */}
      <div className="w-full sm:w-1/3 lg:w-1/4 sm:fixed sm:h-screen">
        <Sidebar 
          activeType={activeType} 
          setActiveType={setActiveType}
          activeTag={activeTag}
          setActiveTag={setActiveTag}
          availableTags={availableTags}
        />
      </div>

      {/* Columna Derecha: Timeline (Con scroll) */}
      <div className="w-full sm:w-2/3 lg:w-3/4 sm:ml-auto p-4 sm:p-8">
        <Timeline logros={filteredLogros} />
      </div>
    </div>
  );
}

export default App;