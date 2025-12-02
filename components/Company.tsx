import React from 'react';
import { Building2, Users, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Stakeholder } from '../types';

const stakeholders: Stakeholder[] = [
  {
    name: "Алексей Смирнов",
    role: "Генеральный директор",
    description: "Опытный руководитель (15+ лет). Стратегическое мышление. Ищет пути диверсификации.",
    image: "AS"
  },
  {
    name: "Мария Иванова",
    role: "Директор по продажам",
    description: "В продажах 10+ лет. Сталкивается с вызовом падения эффективности офлайн-точек.",
    image: "MI"
  },
  {
    name: "Сергей Петров",
    role: "Менеджер по продукту",
    description: "Аналитик. Отвечает за ассортимент, но ограничен зависимостью от одного поставщика.",
    image: "SP"
  },
  {
    name: "Анна Кузнецова",
    role: "Маркетолог",
    description: "Креативный специалист digital-маркетинга. Недостаточно опыта с маркетплейсами.",
    image: "AK"
  },
  {
    name: "Виктор Громов",
    role: "Менеджер по логистике",
    description: "Организованный специалист. Сложности с адаптацией логистики под требования Ozon/WB.",
    image: "VG"
  }
];

export const Company: React.FC = () => {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <header>
        <div className="flex items-center space-x-3 mb-2">
          <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-wide">
            Контур 2
          </span>
          <span className="text-slate-400 text-sm font-medium">Компания и ЛПР</span>
        </div>
        <h2 className="text-3xl font-bold text-slate-900">Профиль Компании</h2>
        <p className="text-lg text-slate-600 mt-2">
          Дистрибьютор дверей (основан в 2005). Стадия зрелости, требующая трансформации.
        </p>
      </header>

      {/* Company Context */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
         <div className="flex items-center mb-4 text-slate-800 font-bold text-lg">
            <Building2 className="mr-2 text-indigo-600" />
            Контекст и Проблематика
         </div>
         <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-4 rounded-lg border border-red-100">
               <h4 className="font-bold text-red-800 mb-2 flex items-center">
                 <AlertCircle className="w-4 h-4 mr-2" />
                 Боли (Pain Points)
               </h4>
               <ul className="space-y-2 text-sm text-red-900">
                 <li>• <strong>Зависимость:</strong> 70% ассортимента от 1 поставщика.</li>
                 <li>• <strong>Падение офлайн:</strong> Традиционные методы продаж не работают.</li>
                 <li>• <strong>Отсутствие Online:</strong> Нет опыта работы с маркетплейсами.</li>
                 <li>• <strong>Логистика:</strong> Устаревшие процессы, не готовы к e-com.</li>
               </ul>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
               <h4 className="font-bold text-emerald-800 mb-2 flex items-center">
                 <CheckCircle2 className="w-4 h-4 mr-2" />
                 Возможности (Gains)
               </h4>
               <ul className="space-y-2 text-sm text-emerald-900">
                 <li>• <strong>База:</strong> Сильная репутация с 2005 года.</li>
                 <li>• <strong>Команда:</strong> Квалифицированный персонал, готовый к обучению.</li>
                 <li>• <strong>Рынок:</strong> Растущий спрос на омниканальные покупки.</li>
                 <li>• <strong>Активы:</strong> Наличие складской инфраструктуры для WMS.</li>
               </ul>
            </div>
         </div>
      </div>

      {/* Stakeholders Grid */}
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
           <Users className="mr-2 text-indigo-600" />
           ЛПР и Стейкхолдеры
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {stakeholders.map((person, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold text-sm mr-3">
                  {person.image}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{person.name}</h4>
                  <p className="text-xs text-indigo-600 font-medium">{person.role}</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed flex-1">
                {person.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};