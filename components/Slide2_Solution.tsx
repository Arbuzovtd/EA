import React from 'react';
import { Lightbulb, CheckCircle2, ArrowRight } from 'lucide-react';

export const Slide2_Solution: React.FC = () => {
  return (
    <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
      <header>
        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wide">
          2. Решение
        </span>
        <h2 className="text-3xl font-bold text-slate-900 mt-2">Омниканальная Стратегия 2025</h2>
        <p className="text-lg text-slate-600 mt-2">
          Трансформация дистрибутора в технологичного игрока с диверсифицированной базой.
        </p>
      </header>

      {/* Concept Card */}
      <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-lg">
        <div className="flex items-start">
          <Lightbulb className="w-10 h-10 text-yellow-400 mr-4 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold mb-2">Суть Решения</h3>
            <p className="text-slate-300 leading-relaxed">
              Комплексный переход на <strong>Омниканальную модель</strong>: единый сток для офлайна и маркетплейсов, 
              снижение доли основного поставщика до 45% за счет ввода новых брендов, и цифровизация клиентского опыта через WMS и CRM.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Pain Relievers */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-blue-600 mb-4 flex items-center">
            <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-sm">A</span>
            Снимает Боли (Pain Relievers)
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start group">
               <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
               <span className="text-slate-700">
                 <strong>Диверсификация:</strong> Контракты с 3 новыми заводами устраняют риск остановки бизнеса при сбое у главного поставщика.
               </span>
            </li>
            <li className="flex items-start group">
               <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
               <span className="text-slate-700">
                 <strong>WMS Система:</strong> Автоматизирует склад, устраняя ошибки комплектации и задержки отгрузок.
               </span>
            </li>
             <li className="flex items-start group">
               <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
               <span className="text-slate-700">
                 <strong>CRM:</strong> Убирает рутину менеджеров, позволяя фокусироваться на продажах, а не на оформлении бумаг.
               </span>
            </li>
          </ul>
        </div>

        {/* Gain Creators */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-emerald-600 mb-4 flex items-center">
            <span className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-3 text-sm">B</span>
            Создает Выгоды (Gain Creators)
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start group">
               <ArrowRight className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
               <span className="text-slate-700">
                 <strong>Маркетплейсы:</strong> Доступ к миллионной аудитории WB и Ozon дает +15% к выручке уже в первый год.
               </span>
            </li>
            <li className="flex items-start group">
               <ArrowRight className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
               <span className="text-slate-700">
                 <strong>Интерактив:</strong> Цифровые стенды в шоурумах увеличивают конверсию посетителей в покупателей на 25%.
               </span>
            </li>
            <li className="flex items-start group">
               <ArrowRight className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
               <span className="text-slate-700">
                 <strong>Единый профиль:</strong> Клиент узнаваем во всех каналах, что повышает LTV и повторные покупки.
               </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};