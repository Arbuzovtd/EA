import React from 'react';
import { AlertCircle, TrendingDown, DollarSign, Frown } from 'lucide-react';

export const Slide1_Problems: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header>
        <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold uppercase tracking-wide">
          1. Проблематика
        </span>
        <h2 className="text-3xl font-bold text-slate-900 mt-2">Текущие Вызовы Бизнеса</h2>
        <p className="text-lg text-slate-600 mt-2">
          Анализ негативного влияния зависимости от поставщика и отставания в Digital.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        
        {/* Customer Pain */}
        <div className="bg-white p-6 rounded-xl border-l-4 border-blue-500 shadow-sm">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-blue-100 rounded-lg mr-3">
              <Frown className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-bold text-slate-900">Боли Клиента</h3>
          </div>
          <p className="text-sm text-slate-600 mb-3 italic">
            "В шоуруме маленький выбор, а ждать заказ долго. Почему я не могу купить ваши двери на Ozon с доставкой завтра?"
          </p>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start"><span className="mr-2 text-blue-500">•</span>Ограниченный ассортимент в точках</li>
            <li className="flex items-start"><span className="mr-2 text-blue-500">•</span>Отсутствие удобного онлайн-заказа</li>
            <li className="flex items-start"><span className="mr-2 text-blue-500">•</span>Долгое обслуживание в офлайне</li>
          </ul>
        </div>

        {/* Corporate Pain */}
        <div className="bg-white p-6 rounded-xl border-l-4 border-amber-500 shadow-sm">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-amber-100 rounded-lg mr-3">
              <AlertCircle className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="font-bold text-slate-900">Вред Компании</h3>
          </div>
          <p className="text-sm text-slate-600 mb-3 italic">
            Критическая зависимость делает бизнес уязвимым перед диктатом цен и сбоями.
          </p>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start"><span className="mr-2 text-amber-500">•</span><strong>70% ассортимента</strong> зависит от 1 поставщика</li>
            <li className="flex items-start"><span className="mr-2 text-amber-500">•</span>Падение офлайн-трафика на фоне роста конкурентов в e-com</li>
            <li className="flex items-start"><span className="mr-2 text-amber-500">•</span>Риск потери бизнеса при разрыве 1 контракта</li>
          </ul>
        </div>

        {/* Financial Damage */}
        <div className="bg-white p-6 rounded-xl border-l-4 border-red-500 shadow-sm">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-red-100 rounded-lg mr-3">
              <DollarSign className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="font-bold text-slate-900">Фин. и Опер. Ущерб</h3>
          </div>
          <p className="text-sm text-slate-600 mb-3 italic">
            Прямые потери выручки и заморозка оборотных средств.
          </p>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start"><span className="mr-2 text-red-500">•</span>Потеря <strong>15% выручки</strong> из-за отсутствия на маркетплейсах</li>
            <li className="flex items-start"><span className="mr-2 text-red-500">•</span>Кассовый разрыв до <strong>21 млн ₽</strong> при текущей модели</li>
            <li className="flex items-start"><span className="mr-2 text-red-500">•</span>Неэффективная логистика "съедает" 5% маржи</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-red-50 border border-red-100 p-4 rounded-lg flex items-center justify-center text-center">
        <p className="text-red-800 font-medium">
          <TrendingDown className="inline-block w-5 h-5 mr-2 -mt-1" />
          Вывод: Сохранение статуса-кво грозит потерей конкурентоспособности к 2026 году.
        </p>
      </div>
    </div>
  );
};