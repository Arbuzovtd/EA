import React, { useState } from 'react';
import { Roadmap } from './Roadmap';
import { Okrs } from './Okrs';
import { Finance } from './Finance';

export const Slide4_Plan: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'roadmap' | 'okr' | 'budget'>('roadmap');

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
           <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wide">
            4. План реализации
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mt-2">Дорожная карта и Ресурсы</h2>
        </div>
        
        {/* Tabs */}
        <div className="flex bg-slate-100 p-1 rounded-lg self-start">
          <button 
            onClick={() => setActiveTab('roadmap')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${activeTab === 'roadmap' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Дорожная карта
          </button>
          <button 
             onClick={() => setActiveTab('okr')}
             className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${activeTab === 'okr' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Метрики (OKR)
          </button>
          <button 
             onClick={() => setActiveTab('budget')}
             className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${activeTab === 'budget' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Бюджет
          </button>
        </div>
      </header>

      <div className="mt-4">
         {activeTab === 'roadmap' && <Roadmap />}
         {activeTab === 'okr' && <Okrs />}
         {activeTab === 'budget' && (
           <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg mb-6">
                <p className="text-blue-800 text-sm">
                  <strong>Почему это инвестиции, а не затраты?</strong> Вложения в IT и маркетплейсы создают масштабируемые активы, которые будут генерировать прибыль годами после завершения трансформации.
                </p>
              </div>
              <Finance />
           </div>
         )}
      </div>
    </div>
  );
};