import React from 'react';
import { UserCircle, Briefcase, HelpCircle, Lightbulb, CheckSquare } from 'lucide-react';

export const MyRole: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header>
        <div className="flex items-center space-x-3 mb-2">
           <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold uppercase tracking-wide">
            Контур 3
          </span>
          <span className="text-slate-400 text-sm font-medium">Я Сам</span>
        </div>
        <h2 className="text-3xl font-bold text-slate-900">Моя Роль и Рефлексия</h2>
        <p className="text-lg text-slate-600 mt-2">
          Анализ личного вклада и уроков, извлеченных в ходе проекта.
        </p>
      </header>

      {/* Roles Section */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
          <Briefcase className="mr-2 text-amber-600" />
          Мои Роли в Проекте
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
            <h4 className="font-bold text-slate-800 text-sm mb-2">Стратег-Консультант</h4>
            <p className="text-xs text-slate-600">Анализ рынка, выявление болей, формулирование целей и VPC.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
            <h4 className="font-bold text-slate-800 text-sm mb-2">Разработчик (Frameworks)</h4>
            <p className="text-xs text-slate-600">Создание структуры OKR, Дорожной карты и системы KPI.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
            <h4 className="font-bold text-slate-800 text-sm mb-2">Финансовый Планировщик</h4>
            <p className="text-xs text-slate-600">Расчет бюджета (43M ₽), ROI (+36%) и окупаемости.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
            <h4 className="font-bold text-slate-800 text-sm mb-2">Риск-Менеджер</h4>
            <p className="text-xs text-slate-600">Идентификация угроз и разработка планов митигации.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
            <h4 className="font-bold text-slate-800 text-sm mb-2">Архитектор Пилота</h4>
            <p className="text-xs text-slate-600">Запуск Q1 фундамент, определение базовых метрик.</p>
          </div>
        </div>
      </div>

      {/* Reflection Section (Timeline/Questions) */}
      <div className="bg-slate-900 text-white rounded-xl p-8">
         <h3 className="text-xl font-bold mb-8 flex items-center">
          <Lightbulb className="mr-2 text-amber-400" />
          Рефлексия (Timeline)
        </h3>
        
        <div className="space-y-8 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-700">
          
          {/* Question 1 */}
          <div className="relative pl-12">
            <div className="absolute left-0 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center border-4 border-slate-900 z-10">
              <HelpCircle size={16} />
            </div>
            <h4 className="text-lg font-bold text-blue-400">Что хотел сделать?</h4>
            <p className="text-slate-300 mt-2 text-sm">
              Создать полную стратегию трансформации консервативного дверного бизнеса в современного омниканального игрока, решив проблему зависимости от поставщика.
            </p>
          </div>

          {/* Question 2 */}
          <div className="relative pl-12">
            <div className="absolute left-0 top-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center border-4 border-slate-900 z-10">
              <Briefcase size={16} />
            </div>
            <h4 className="text-lg font-bold text-purple-400">Что делал?</h4>
            <p className="text-slate-300 mt-2 text-sm">
              Провел анализ VPC, разработал 6 Objective и 24 Key Results, построил Roadmap на 4 квартала, рассчитал бюджет и защитил юридическую сторону.
            </p>
          </div>

          {/* Question 3 */}
          <div className="relative pl-12">
            <div className="absolute left-0 top-0 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center border-4 border-slate-900 z-10">
              <CheckSquare size={16} />
            </div>
            <h4 className="text-lg font-bold text-emerald-400">Что получилось?</h4>
            <p className="text-slate-300 mt-2 text-sm">
              Готовая к внедрению стратегия с бюджетом 43.75 млн ₽ и ROI 36%. Авторизован пилот на Q1 с бюджетом 3.5 млн ₽.
            </p>
          </div>

           {/* Question 4 */}
           <div className="relative pl-12">
            <div className="absolute left-0 top-0 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center border-4 border-slate-900 z-10">
              <Lightbulb size={16} />
            </div>
            <h4 className="text-lg font-bold text-amber-400">Что выношу?</h4>
            <p className="text-slate-300 mt-2 text-sm">
              Трансформация требует не только технологий, но и изменения мышления команды. Критически важна юридическая защита интеллектуальной собственности проекта.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};