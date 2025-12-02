import React from 'react';
import { Globe, TrendingUp, AlertTriangle, ArrowRight } from 'lucide-react';

export const Market: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header>
        <div className="flex items-center space-x-3 mb-2">
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wide">
            Контур 1
          </span>
          <span className="text-slate-400 text-sm font-medium">Отрасль и Рынок</span>
        </div>
        <h2 className="text-3xl font-bold text-slate-900">Тренды и Вызовы 2025</h2>
        <p className="text-lg text-slate-600 mt-2 max-w-3xl">
          Анализ внешней среды и ключевых изменений на рынке DIY и дверей.
        </p>
      </header>

      {/* Metro Map Style Visualization */}
      <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-xl overflow-hidden relative min-h-[400px]">
        <h3 className="text-xl font-bold mb-6 flex items-center">
          <Globe className="mr-2 text-blue-400" /> 
          Карта Трендов (Metro Map)
        </h3>
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Line 1: Digitalization */}
          <div className="relative group">
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-blue-500 rounded-full"></div>
            <div className="space-y-8 ml-8 py-2">
              <div className="relative">
                <div className="absolute -left-[25px] top-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-slate-900"></div>
                <h4 className="font-bold text-blue-300">Цифровизация</h4>
                <p className="text-xs text-slate-400 mt-1">Переход от традиционных шоурумов к цифровым экосистемам.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[25px] top-1 w-4 h-4 bg-white rounded-full border-2 border-blue-500"></div>
                <h4 className="font-bold text-white">E-commerce Бум</h4>
                <p className="text-xs text-slate-400 mt-1">Рост доли онлайн-продаж в категории DIY до 15%+</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[25px] top-1 w-4 h-4 bg-white rounded-full border-2 border-blue-500"></div>
                <h4 className="font-bold text-white">Маркетплейсы</h4>
                <p className="text-xs text-slate-400 mt-1">OZON и WB становятся основными точками входа.</p>
              </div>
            </div>
          </div>

          {/* Line 2: Consumer Behavior */}
          <div className="relative group">
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-emerald-500 rounded-full"></div>
            <div className="space-y-8 ml-8 py-2">
              <div className="relative">
                <div className="absolute -left-[25px] top-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-slate-900"></div>
                <h4 className="font-bold text-emerald-300">Поведение Клиента</h4>
                <p className="text-xs text-slate-400 mt-1">Смена поколений и привычек потребления.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[25px] top-1 w-4 h-4 bg-white rounded-full border-2 border-emerald-500"></div>
                <h4 className="font-bold text-white">Омниканальность</h4>
                <p className="text-xs text-slate-400 mt-1">Бесшовный переход между Online и Offline.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[25px] top-1 w-4 h-4 bg-white rounded-full border-2 border-emerald-500"></div>
                <h4 className="font-bold text-white">Сервис 2.0</h4>
                <p className="text-xs text-slate-400 mt-1">Требование быстрой доставки (24ч) и легкого возврата.</p>
              </div>
            </div>
          </div>

           {/* Line 3: Risks */}
           <div className="relative group">
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-red-500 rounded-full"></div>
            <div className="space-y-8 ml-8 py-2">
              <div className="relative">
                <div className="absolute -left-[25px] top-1 w-4 h-4 bg-red-500 rounded-full border-2 border-slate-900"></div>
                <h4 className="font-bold text-red-300">Риски Рынка</h4>
                <p className="text-xs text-slate-400 mt-1">Факторы, угрожающие стабильности.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[25px] top-1 w-4 h-4 bg-white rounded-full border-2 border-red-500"></div>
                <h4 className="font-bold text-white">Монополизация</h4>
                <p className="text-xs text-slate-400 mt-1">Зависимость от крупных поставщиков и площадок.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[25px] top-1 w-4 h-4 bg-white rounded-full border-2 border-red-500"></div>
                <h4 className="font-bold text-white">Логистический Кризис</h4>
                <p className="text-xs text-slate-400 mt-1">Рост стоимости последней мили.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
           <Globe size={300} />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center text-red-600 font-bold mb-3">
             <AlertTriangle className="mr-2" size={20} />
             Проблема Отрасли
          </div>
          <p className="text-slate-700">
            Традиционные дистрибьюторы теряют долю рынка из-за неспособности адаптироваться к цифровым каналам. 
            <strong> 70% продаж</strong> смещаются в онлайн, а офлайн точки становятся просто шоурумами.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
           <div className="flex items-center text-emerald-600 font-bold mb-3">
             <TrendingUp className="mr-2" size={20} />
             Потенциал Роста
          </div>
          <p className="text-slate-700">
            Компании, внедрившие <strong>WMS и Омниканальность</strong>, показывают рост выручки на 30% выше рынка. 
            Ключ к успеху — присутствие там, где клиент ищет товар (Маркетплейсы).
          </p>
        </div>
      </div>
    </div>
  );
};