import React from 'react';
import { AlertTriangle, ShieldCheck, Lock, FileText, Scale } from 'lucide-react';

export const Risks: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-bold text-slate-900">Риски и Юридическая защита</h2>
        <p className="text-slate-500 mt-2">Анализ угроз и меры митигации</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Risk 1 */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
          <div className="bg-red-50 p-4 border-b border-red-100">
            <div className="flex items-center text-red-700 font-bold">
              <AlertTriangle className="w-5 h-5 mr-2" />
              Разрыв контракта поставщиком
            </div>
            <p className="text-xs text-red-600 mt-1">Влияние: Высокое | Вероятность: Средняя</p>
          </div>
          <div className="p-5 flex-1">
            <p className="text-slate-700 text-sm mb-4">
              Основной поставщик может отреагировать негативно на диверсификацию.
            </p>
            <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100">
              <div className="flex items-center text-emerald-800 font-bold text-sm mb-1">
                <ShieldCheck className="w-4 h-4 mr-2" />
                Митигация (Решение)
              </div>
              <ul className="list-disc list-inside text-xs text-emerald-700 space-y-1">
                <li>Стратегия плавного снижения доли до 45%</li>
                <li>Переговоры о новых условиях</li>
                <li>Контракты с 3 новыми заводами (Q2)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Risk 2 */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
          <div className="bg-amber-50 p-4 border-b border-amber-100">
            <div className="flex items-center text-amber-700 font-bold">
              <AlertTriangle className="w-5 h-5 mr-2" />
              Нехватка экспертизы (MP)
            </div>
            <p className="text-xs text-amber-600 mt-1">Влияние: Высокое | Вероятность: Высокая</p>
          </div>
          <div className="p-5 flex-1">
            <p className="text-slate-700 text-sm mb-4">
              Риск провала запуска на маркетплейсах из-за отсутствия опыта.
            </p>
            <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100">
              <div className="flex items-center text-emerald-800 font-bold text-sm mb-1">
                <ShieldCheck className="w-4 h-4 mr-2" />
                Митигация (Решение)
              </div>
              <ul className="list-disc list-inside text-xs text-emerald-700 space-y-1">
                <li>Найм профильного менеджера (130k)</li>
                <li>Привлечение агентства на старт</li>
                <li>Обучение 100% сотрудников (KR 6.2)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Risk 3 */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
          <div className="bg-amber-50 p-4 border-b border-amber-100">
            <div className="flex items-center text-amber-700 font-bold">
              <AlertTriangle className="w-5 h-5 mr-2" />
              Кассовый разрыв
            </div>
            <p className="text-xs text-amber-600 mt-1">Влияние: Высокое | Вероятность: Средняя</p>
          </div>
          <div className="p-5 flex-1">
            <p className="text-slate-700 text-sm mb-4">
              Нехватка средств на пике инвестиций (Q2).
            </p>
            <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100">
              <div className="flex items-center text-emerald-800 font-bold text-sm mb-1">
                <ShieldCheck className="w-4 h-4 mr-2" />
                Митигация (Решение)
              </div>
              <ul className="list-disc list-inside text-xs text-emerald-700 space-y-1">
                <li>Кредитная линия 20 млн ₽</li>
                <li>Собственные средства 15 млн ₽</li>
                <li>Поэтапное внедрение инициатив</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Protection Section */}
      <div className="bg-slate-900 rounded-xl p-6 text-white mt-8">
        <h3 className="text-lg font-bold mb-4 flex items-center">
          <Scale className="w-5 h-5 mr-2" />
          Юридическое Обеспечение
        </h3>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div className="bg-slate-800 p-4 rounded-lg">
            <div className="flex items-center text-blue-400 font-semibold mb-2">
              <Lock className="w-4 h-4 mr-2" /> NDA
            </div>
            <p className="text-slate-400">Срок конфиденциальности 5 лет. Защита коммерческой тайны и бюджета.</p>
          </div>
          <div className="bg-slate-800 p-4 rounded-lg">
            <div className="flex items-center text-blue-400 font-semibold mb-2">
              <FileText className="w-4 h-4 mr-2" /> Интеллектуальная собственность
            </div>
            <p className="text-slate-400">Запрет на копирование и модификацию материалов стратегии.</p>
          </div>
          <div className="bg-slate-800 p-4 rounded-lg">
            <div className="flex items-center text-blue-400 font-semibold mb-2">
              <Scale className="w-4 h-4 mr-2" /> Ответственность
            </div>
            <p className="text-slate-400">Регулируется ГК РФ и УК РФ. Лицензия только для внутреннего использования.</p>
          </div>
        </div>
      </div>
    </div>
  );
};