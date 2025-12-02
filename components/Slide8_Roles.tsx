import React from 'react';
import { Users, Clock, ArrowRight } from 'lucide-react';
import { TeamMember } from '../types';

const team: TeamMember[] = [
  {
    name: "Забиров Артем Сергеевич",
    role: "Стратегический Консультант",
    focus: "Лидер рабочей группы. Координация стратегии и коммуникация с ЛПР."
  },
  {
    name: "Кузьминов Павел Петрович",
    role: "Исполнитель-Разработчик",
    focus: "Разработка фреймворков (OKR, Roadmap), продукт и технологии."
  },
  {
    name: "Романенко Максим Владимирович",
    role: "Финансовый Планировщик",
    focus: "Бюджетирование, расчет ROI, контроль ресурсов и метрик."
  },
  {
    name: "Арбузов Тимур Денисович",
    role: "Риск-менеджер / Аналитик",
    focus: "Оценка рисков, митигация, аналитика рынка и конкурентов."
  }
];

export const Slide8_Roles: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header>
        <span className="px-3 py-1 bg-slate-800 text-white rounded-full text-xs font-bold uppercase tracking-wide">
          8. Команда и Шаги
        </span>
        <h2 className="text-3xl font-bold text-slate-900 mt-2">Ваши роли и Следующие шаги</h2>
        <p className="text-lg text-slate-600 mt-2">
          Кто реализует проект и с чего мы начнем.
        </p>
      </header>

      {/* Team Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {team.map((member, idx) => (
          <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start">
            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-slate-600 font-bold">
              {member.name.charAt(0)}
            </div>
            <div>
              <h3 className="font-bold text-slate-900">{member.name}</h3>
              <p className="text-xs text-blue-600 font-bold uppercase mt-1">{member.role}</p>
              <p className="text-sm text-slate-600 mt-2">{member.focus}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Next Steps */}
      <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-lg mt-8">
        <h3 className="text-xl font-bold mb-6 flex items-center">
          <Clock className="mr-3 text-emerald-400" />
          Следующие Шаги (при одобрении)
        </h3>
        
        <div className="space-y-6 relative border-l-2 border-slate-700 ml-3 pl-8">
           <div className="relative">
             <div className="absolute -left-[41px] top-1 w-5 h-5 bg-emerald-500 rounded-full border-4 border-slate-900"></div>
             <h4 className="font-bold text-lg">Шаг 1: Формирование рабочей группы</h4>
             <p className="text-slate-400 text-sm mt-1">
               Сбор команды в указанных ролях, установочная встреча с куратором.
             </p>
           </div>
           
           <div className="relative">
             <div className="absolute -left-[41px] top-1 w-5 h-5 bg-slate-700 rounded-full border-4 border-slate-900"></div>
             <h4 className="font-bold text-lg">Шаг 2: Детализация Пилота</h4>
             <p className="text-slate-400 text-sm mt-1">
               Подготовка детального плана на первые 2 недели, настройка доступов к данным.
             </p>
           </div>

           <div className="relative">
             <div className="absolute -left-[41px] top-1 w-5 h-5 bg-slate-700 rounded-full border-4 border-slate-900"></div>
             <h4 className="font-bold text-lg">Шаг 3: Старт работ</h4>
             <p className="text-slate-400 text-sm mt-1">
               Приступаем к работе с текущими метриками отдела продаж.
             </p>
           </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-700 flex items-start">
           <ArrowRight className="text-blue-400 w-5 h-5 mr-3 mt-1" />
           <p className="text-slate-300 text-sm">
             Для реализации нам потребуется выделение <strong>10 часов в неделю</strong> от каждого участника рабочей группы из общего рабочего времени.
           </p>
        </div>
      </div>
    </div>
  );
};