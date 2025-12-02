import React from 'react';
import { RoadmapPhase } from '../types';
import { ArrowRight } from 'lucide-react';

const phases: RoadmapPhase[] = [
  {
    quarter: "Q1",
    name: "ФУНДАМЕНТ",
    focus: "Подготовка базы и старт диверсификации",
    color: "bg-blue-500",
    deliverables: [
      "Запуск продаж на WB и Ozon (тест)",
      "Закрытие 100% вакансий",
      "Начало внедрения WMS",
      "Пилот в отделе продаж (Офлайн метрики)"
    ]
  },
  {
    quarter: "Q2",
    name: "РОСТ",
    focus: "Технологическое внедрение и расширение",
    color: "bg-emerald-500",
    deliverables: [
      "Снижение доли основного поставщика до 45%",
      "Полный запуск WMS и CRM",
      "500 карточек на маркетплейсах",
      "Интерактивные стенды во всех точках"
    ]
  },
  {
    quarter: "Q3",
    name: "ОПТИМИЗАЦИЯ",
    focus: "Эффективность и Омниканальность",
    color: "bg-amber-500",
    deliverables: [
      "15% выручки с маркетплейсов",
      "Рост конверсии офлайн на 25%",
      "Запуск омниканальных сценариев",
      "Синхронизация остатков Real-time"
    ]
  },
  {
    quarter: "Q4",
    name: "ЗАКРЕПЛЕНИЕ",
    focus: "Масштабирование и высокий сезон",
    color: "bg-purple-500",
    deliverables: [
      "Успешное проведение 11.11 и Black Friday",
      "eNPS 40+, Текучесть ≤10%",
      "Стратегическая сессия 2026",
      "Фиксация ROI +36%"
    ]
  }
];

export const Roadmap: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-bold text-slate-900">Дорожная карта 2025</h2>
        <p className="text-slate-500 mt-2">Поэтапный план реализации стратегии</p>
      </div>

      <div className="relative">
        {/* Vertical line for mobile, hidden on desktop */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200 lg:hidden"></div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {phases.map((phase, index) => (
            <div key={index} className="relative pl-14 lg:pl-0 flex flex-col h-full">
              
              {/* Timeline Connector for Desktop */}
              {index < phases.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-1/2 w-full h-1 bg-slate-200 -z-10"></div>
              )}

              {/* Node Marker */}
              <div className={`absolute left-4 top-6 w-4 h-4 rounded-full border-2 border-white lg:left-1/2 lg:-translate-x-1/2 lg:top-4 lg:w-5 lg:h-5 z-10 shadow-sm ${phase.color}`}></div>

              {/* Card */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex-1 flex flex-col mt-4 lg:mt-12 relative overflow-hidden group">
                {/* Quarter Badge */}
                <div className={`absolute top-0 right-0 px-3 py-1 text-xs font-bold text-white rounded-bl-lg ${phase.color}`}>
                  {phase.quarter}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mt-2 uppercase tracking-wide">{phase.name}</h3>
                <p className="text-sm font-medium text-slate-500 mb-4">{phase.focus}</p>
                
                <div className="w-full h-px bg-slate-100 mb-4"></div>

                <ul className="space-y-2.5 flex-1">
                  {phase.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-700">
                      <ArrowRight className={`w-4 h-4 mr-2 flex-shrink-0 mt-0.5 ${phase.color.replace('bg-', 'text-')}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};