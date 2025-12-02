import React from 'react';
import { Rocket, Target, DollarSign, UserCheck } from 'lucide-react';

export const Pilot: React.FC = () => {
  return (
    <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
       <header className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-lg">
         <div className="flex items-center mb-4">
            <div className="p-2 bg-white/20 rounded-lg mr-3">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold">Пилотный проект Q1</h2>
         </div>
         <p className="text-blue-100 max-w-2xl">
           Официально авторизованный запуск 3-месячного пилота (Январь–Март 2025). 
           Цель: Установить базовые метрики и подготовить инфраструктуру.
         </p>
       </header>

       <div className="grid md:grid-cols-2 gap-8">
          {/* Key Metrics Setup */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
              <Target className="w-5 h-5 mr-2 text-blue-600" />
              Целевые Метрики (Сбор данных)
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                <span className="text-sm font-medium text-slate-700">Базовая конверсия</span>
                <span className="text-xs font-mono bg-white px-2 py-1 rounded border text-slate-500">KR 3.1</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                <span className="text-sm font-medium text-slate-700">Средний чек (Current)</span>
                <span className="text-xs font-mono bg-white px-2 py-1 rounded border text-slate-500">KR 3.4</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                <span className="text-sm font-medium text-slate-700">Время обработки заказа</span>
                <span className="text-xs font-mono bg-white px-2 py-1 rounded border text-slate-500">KR 5.2</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                <span className="text-sm font-medium text-slate-700">Точность комплектации</span>
                <span className="text-xs font-mono bg-white px-2 py-1 rounded border text-slate-500">KR 5.3</span>
              </div>
            </div>
          </div>

          {/* Budget & Resources */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
             <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
              <DollarSign className="w-5 h-5 mr-2 text-emerald-600" />
              Ресурсы Пилота
            </h3>
            <div className="mb-6">
              <p className="text-sm text-slate-500 mb-1">Бюджет пилота (часть Q1)</p>
              <p className="text-3xl font-bold text-slate-900">3 500 000 ₽</p>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                 <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></div>
                 <p className="text-sm text-slate-600"><strong>Персонал:</strong> Найм Sales Manager (80k) и старт поиска Product Manager (120k).</p>
              </div>
              <div className="flex items-start">
                 <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></div>
                 <p className="text-sm text-slate-600"><strong>IT:</strong> Старт внедрения CRM (1.6 млн) и интеграции.</p>
              </div>
              <div className="flex items-start">
                 <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></div>
                 <p className="text-sm text-slate-600"><strong>Обучение:</strong> Тренинги по техникам продаж.</p>
              </div>
            </div>
          </div>
       </div>

       <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div className="flex items-center">
             <div className="p-3 bg-slate-100 rounded-full mr-4">
               <UserCheck className="w-6 h-6 text-slate-600" />
             </div>
             <div>
               <h4 className="text-lg font-bold text-slate-900">Куратор проекта</h4>
               <p className="text-slate-500 text-sm">Директор по развитию / Старший Product Manager</p>
             </div>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-xs text-slate-400 uppercase font-bold mb-1">Фокус</p>
            <p className="text-sm font-semibold text-slate-700">Омниканальность + CRM</p>
          </div>
       </div>
    </div>
  );
};