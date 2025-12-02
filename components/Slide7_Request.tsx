import React from 'react';
import { Rocket, CheckSquare, Database, DollarSign } from 'lucide-react';

export const Slide7_Request: React.FC = () => {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <header>
        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wide">
          7. Запрос
        </span>
        <h2 className="text-3xl font-bold text-slate-900 mt-2">Что нам нужно для старта?</h2>
        <p className="text-lg text-slate-600 mt-2">
          Мы просим не просто деньги, а возможность создать работающее решение.
        </p>
      </header>

      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white">
           <h3 className="text-2xl font-bold mb-2">Авторизация Пилота</h3>
           <p className="text-blue-100">
             Официальное разрешение на запуск 3-месячного теста в отделе продаж (Q1 2025).
           </p>
        </div>

        <div className="p-8 grid md:grid-cols-3 gap-8">
          
          {/* Item 1 */}
          <div className="flex flex-col items-center text-center p-4 border border-slate-100 rounded-xl bg-slate-50">
             <div className="p-3 bg-white rounded-full shadow-sm mb-4 text-emerald-600">
               <CheckSquare size={32} />
             </div>
             <h4 className="font-bold text-slate-900 text-lg mb-2">Согласие</h4>
             <p className="text-sm text-slate-600">
               Утверждение стратегии и старт работ с 15 января.
             </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center text-center p-4 border border-slate-100 rounded-xl bg-slate-50">
             <div className="p-3 bg-white rounded-full shadow-sm mb-4 text-blue-600">
               <DollarSign size={32} />
             </div>
             <h4 className="font-bold text-slate-900 text-lg mb-2">Ресурсы</h4>
             <p className="text-sm text-slate-600">
               Выделение бюджета <strong>3.5 млн ₽</strong> на Q1 и назначение куратора со стороны ЛПР.
             </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center text-center p-4 border border-slate-100 rounded-xl bg-slate-50">
             <div className="p-3 bg-white rounded-full shadow-sm mb-4 text-purple-600">
               <Database size={32} />
             </div>
             <h4 className="font-bold text-slate-900 text-lg mb-2">Доступ</h4>
             <p className="text-sm text-slate-600">
               Доступ к CRM, данным по продажам и складским остаткам для аналитики.
             </p>
          </div>

        </div>
        
        <div className="px-8 pb-8">
           <div className="bg-yellow-50 border border-yellow-100 p-4 rounded-lg text-center">
             <p className="text-yellow-800 text-sm font-semibold">
               Цель Пилота: Установить базовые метрики и подготовить инфраструктуру к масштабированию в Q2.
             </p>
           </div>
        </div>
      </div>
    </div>
  );
};