import React from 'react';
import { OkrData } from '../types';
import { Target, CheckCircle2 } from 'lucide-react';

const okrs: OkrData[] = [
  {
    id: 1,
    objective: "Диверсифицировать базу поставщиков",
    tag: "MUST HAVE",
    krs: [
      "Снизить долю основного поставщика с 70% до 45% (Q2)",
      "Заключить договоры с 3 новыми производителями (Q2)",
      "Обеспечить наличие ТОП-100 SKU от альтернативных поставщиков"
    ]
  },
  {
    id: 2,
    objective: "Запустить продажи на маркетплейсах",
    tag: "GROWTH",
    krs: [
      "Достичь 15% общей выручки через маркетплейсы (Q4)",
      "Запустить активные продажи на Wildberries и Ozon (Q1)",
      "Масштабировать ассортимент до 500 карточек товаров (Q2)"
    ]
  },
  {
    id: 3,
    objective: "Возродить офлайн-каналы продаж",
    tag: "CORE",
    krs: [
      "Увеличить конверсию в офлайн-точках на 25%",
      "Увеличить средний чек на 20%",
      "Внедрить интерактивные стенды во все точки (Q2)"
    ]
  },
  {
    id: 4,
    objective: "Построить омниканальную экосистему",
    tag: "TECH",
    krs: [
      "Обеспечить 30% заказов через омниканальные сценарии",
      "Внедрить единую CRM-систему (Q2)",
      "Запустить программу лояльности (2000+ участников)"
    ]
  },
  {
    id: 5,
    objective: "Оптимизировать логистику",
    tag: "OPS",
    krs: [
      "Внедрить WMS систему (Q2)",
      "Сократить время обработки заказа на 40%",
      "Достичь 99% точности комплектации"
    ]
  },
  {
    id: 6,
    objective: "Развить команду",
    tag: "PEOPLE",
    krs: [
      "Закрыть 100% критических вакансий (Q1)",
      "Достичь eNPS 40+",
      "Снизить текучесть ключевых сотрудников до ≤10%"
    ]
  }
];

export const Okrs: React.FC = () => {
  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Система OKR 2025</h2>
          <p className="text-slate-500 mt-2">6 Стратегических целей, 24 Ключевых результата</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {okrs.map((okr) => (
          <div key={okr.id} className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
            <div className="p-6 pb-4 border-b border-slate-100 bg-slate-50/50 rounded-t-xl">
              <div className="flex justify-between items-start mb-3">
                <div className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wider
                  ${okr.tag === 'MUST HAVE' ? 'bg-red-100 text-red-700' : 
                    okr.tag === 'GROWTH' ? 'bg-emerald-100 text-emerald-700' :
                    'bg-blue-100 text-blue-700'}`}>
                  {okr.tag}
                </div>
                <Target className="text-slate-400 w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 leading-tight">
                {okr.objective}
              </h3>
            </div>
            
            <div className="p-6 pt-4 flex-1">
              <ul className="space-y-3">
                {okr.krs.map((kr, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-slate-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{kr}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};