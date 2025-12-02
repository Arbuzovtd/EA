import React from 'react';
import { Target, TrendingUp, ShieldCheck, UserCheck } from 'lucide-react';

export const Slide3_Value: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header>
        <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-wide">
          3. Соответствие Стратегии
        </span>
        <h2 className="text-3xl font-bold text-slate-900 mt-2">Ценность для Компании</h2>
        <p className="text-lg text-slate-600 mt-2">
          Как проект помогает достичь стратегических KPI и решает задачи ЛПР.
        </p>
      </header>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
        <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">
          Прямое влияние на KPI
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
           <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4 text-blue-600">
                <TrendingUp size={32} />
              </div>
              <p className="text-sm font-bold text-slate-500 uppercase">Рост Выручки</p>
              <p className="text-3xl font-bold text-slate-900 mt-1">+30%</p>
              <p className="text-xs text-slate-400 mt-2">
                За счет выхода на маркетплейсы и роста конверсии офлайн.
              </p>
           </div>
           
           <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-emerald-50 rounded-full flex items-center justify-center mb-4 text-emerald-600">
                <ShieldCheck size={32} />
              </div>
              <p className="text-sm font-bold text-slate-500 uppercase">Снижение Рисков</p>
              <p className="text-3xl font-bold text-slate-900 mt-1">45%</p>
              <p className="text-xs text-slate-400 mt-2">
                Снижение доли основного поставщика с 70% до безопасного уровня.
              </p>
           </div>

           <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-purple-50 rounded-full flex items-center justify-center mb-4 text-purple-600">
                <UserCheck size={32} />
              </div>
              <p className="text-sm font-bold text-slate-500 uppercase">Лояльность (NPS)</p>
              <p className="text-3xl font-bold text-slate-900 mt-1">50+</p>
              <p className="text-xs text-slate-400 mt-2">
                За счет быстрого сервиса и омниканального опыта.
              </p>
           </div>
        </div>
      </div>

      {/* Alignment with LPR Pains */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <div className="flex items-center mb-3">
             <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-600 font-bold flex items-center justify-center mr-3">
               ГД
             </div>
             <div>
               <h4 className="font-bold text-slate-900">Генеральный директор</h4>
               <p className="text-xs text-slate-500">Алексей Смирнов</p>
             </div>
          </div>
          <p className="text-sm text-slate-700 italic mb-3">
            "Меня беспокоит, что мы зависим от одного завода. Если они встанут, мы встанем."
          </p>
          <div className="flex items-center text-sm font-bold text-blue-600">
            <Target className="w-4 h-4 mr-2" />
            Ответ проекта: Диверсификация базы поставщиков (OKR 1).
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <div className="flex items-center mb-3">
             <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-600 font-bold flex items-center justify-center mr-3">
               КД
             </div>
             <div>
               <h4 className="font-bold text-slate-900">Коммерческий директор</h4>
               <p className="text-xs text-slate-500">Мария Иванова</p>
             </div>
          </div>
          <p className="text-sm text-slate-700 italic mb-3">
            "Офлайн точки пустуют, все уходят в интернет, а у нас там ничего нет."
          </p>
          <div className="flex items-center text-sm font-bold text-blue-600">
            <Target className="w-4 h-4 mr-2" />
            Ответ проекта: Запуск продаж на MP и Digital-стенды (OKR 2, 3).
          </div>
        </div>
      </div>
    </div>
  );
};