import React from 'react';
import { TrendingUp, Users, Truck, Globe } from 'lucide-react';

export const Overview: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="mb-10">
        <h2 className="text-3xl font-bold text-slate-900">Стратегия трансформации 2025</h2>
        <p className="text-lg text-slate-600 mt-2 max-w-3xl">
          Комплексный план перехода от традиционной дистрибуции к омниканальной экосистеме. 
          Решение критической зависимости от поставщиков и масштабирование через цифровые каналы.
        </p>
      </header>

      {/* Hero Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-md transition-shadow">
          <div className="p-3 bg-blue-50 rounded-lg text-blue-600 mb-4">
            <TrendingUp size={24} />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">+30%</h3>
          <p className="text-sm text-slate-500">Цель роста выручки (195M ₽)</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-md transition-shadow">
          <div className="p-3 bg-emerald-50 rounded-lg text-emerald-600 mb-4">
            <Globe size={24} />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">15%</h3>
          <p className="text-sm text-slate-500">Доля продаж на маркетплейсах</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-md transition-shadow">
          <div className="p-3 bg-indigo-50 rounded-lg text-indigo-600 mb-4">
            <Users size={24} />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">50+</h3>
          <p className="text-sm text-slate-500">Целевой NPS клиентов</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-md transition-shadow">
          <div className="p-3 bg-amber-50 rounded-lg text-amber-600 mb-4">
            <Truck size={24} />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">-40%</h3>
          <p className="text-sm text-slate-500">Время обработки заказа</p>
        </div>
      </div>

      {/* Value Proposition Canvas Summary */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-slate-900 p-6">
          <h3 className="text-xl font-bold text-white">Уникальное Ценностное Предложение</h3>
        </div>
        <div className="p-8 grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-red-500 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              Боли Клиента (Проблемы)
            </h4>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Критическая зависимость от 1 поставщика (70% ассортимента).
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Отсутствие товаров на удобных маркетплейсах.
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Устаревший сервис в офлайн-точках.
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-emerald-600 flex items-center">
              <span className="w-2 h-2 bg-emerald-600 rounded-full mr-2"></span>
              Наше Решение (Выгоды)
            </h4>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <strong>Диверсификация:</strong> Контракты с 3-5 новыми производителями.
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <strong>Омниканальность:</strong> Единый опыт в шоуруме и на Wildberries/Ozon.
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <strong>Инновации:</strong> Интерактивные стенды и быстрая логистика (WMS).
              </li>
            </ul>
          </div>
        </div>
        <div className="px-8 pb-8">
           <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 text-center">
              <p className="text-blue-800 italic font-medium">
                "Мы — ваш надежный партнер в мире дверей: стабильные поставки широчайшего ассортимента через удобные омниканальные решения — от традиционных шоурумов до маркетплейсов."
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};