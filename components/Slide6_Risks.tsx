import React from 'react';
import { AlertTriangle, ShieldCheck } from 'lucide-react';

export const Slide6_Risks: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header>
        <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold uppercase tracking-wide">
          6. Управление Рисками
        </span>
        <h2 className="text-3xl font-bold text-slate-900 mt-2">Ключевые Риски и Отработка</h2>
        <p className="text-lg text-slate-600 mt-2">
          Детализация 3 критических угроз и план действий.
        </p>
      </header>

      <div className="space-y-6">
        
        {/* Risk 1 */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row">
          <div className="bg-red-50 p-6 md:w-64 flex-shrink-0 flex flex-col justify-center border-r border-red-100">
            <div className="flex items-center text-red-700 font-bold mb-2">
              <AlertTriangle className="w-5 h-5 mr-2" />
              Риск #1
            </div>
            <h3 className="font-bold text-slate-900 leading-tight">Разрыв контракта поставщиком</h3>
            <div className="mt-4 text-xs font-medium text-red-600 bg-red-100 px-2 py-1 rounded w-fit">
              Влияние: Высокое
            </div>
          </div>
          <div className="p-6 flex-1">
            <p className="text-slate-600 text-sm mb-4">
              Основной поставщик может отреагировать негативно на диверсификацию и изменить условия или прекратить отгрузки.
            </p>
            <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
              <div className="flex items-center text-emerald-800 font-bold text-sm mb-2">
                <ShieldCheck className="w-4 h-4 mr-2" />
                План Митигации:
              </div>
              <ul className="list-disc list-inside text-sm text-emerald-900 space-y-1">
                <li>Постепенное снижение доли (не резкое) до 45%.</li>
                <li>Параллельные переговоры о сохранении объемов для спец. проектов.</li>
                <li>Заключение "спящих" контрактов с 3 новыми заводами заранее (Q2).</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Risk 2 */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row">
          <div className="bg-amber-50 p-6 md:w-64 flex-shrink-0 flex flex-col justify-center border-r border-amber-100">
             <div className="flex items-center text-amber-700 font-bold mb-2">
              <AlertTriangle className="w-5 h-5 mr-2" />
              Риск #2
            </div>
            <h3 className="font-bold text-slate-900 leading-tight">Сопротивление сотрудников</h3>
            <div className="mt-4 text-xs font-medium text-amber-600 bg-amber-100 px-2 py-1 rounded w-fit">
              Влияние: Среднее
            </div>
          </div>
          <div className="p-6 flex-1">
            <p className="text-slate-600 text-sm mb-4">
              Саботаж внедрения CRM и новых стандартов работы в офлайн-точках.
            </p>
            <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
              <div className="flex items-center text-emerald-800 font-bold text-sm mb-2">
                <ShieldCheck className="w-4 h-4 mr-2" />
                План Митигации:
              </div>
              <ul className="list-disc list-inside text-sm text-emerald-900 space-y-1">
                <li>Вовлечение лидеров мнений на этапе разработки (Q1).</li>
                <li>Изменение системы мотивации (KPI за использование CRM).</li>
                <li>Поддержка HR и геймификация обучения (KR 6.2).</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Risk 3 */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row">
          <div className="bg-amber-50 p-6 md:w-64 flex-shrink-0 flex flex-col justify-center border-r border-amber-100">
             <div className="flex items-center text-amber-700 font-bold mb-2">
              <AlertTriangle className="w-5 h-5 mr-2" />
              Риск #3
            </div>
            <h3 className="font-bold text-slate-900 leading-tight">Нехватка экспертизы (MP)</h3>
             <div className="mt-4 text-xs font-medium text-amber-600 bg-amber-100 px-2 py-1 rounded w-fit">
              Влияние: Высокое
            </div>
          </div>
          <div className="p-6 flex-1">
            <p className="text-slate-600 text-sm mb-4">
              Риск провала запуска на Wildberries из-за ошибок в контенте и логистике.
            </p>
            <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
              <div className="flex items-center text-emerald-800 font-bold text-sm mb-2">
                <ShieldCheck className="w-4 h-4 mr-2" />
                План Митигации:
              </div>
              <ul className="list-disc list-inside text-sm text-emerald-900 space-y-1">
                <li>Найм профильного менеджера с опытом (130k).</li>
                <li>Привлечение агентства-партнера на первые 3 месяца.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};