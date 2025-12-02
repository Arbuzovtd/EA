import React from 'react';
import { Scale, Lock, FileText, BadgeCheck } from 'lucide-react';

export const Slide5_Legal: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header>
        <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-bold uppercase tracking-wide">
          5. Юридические аспекты
        </span>
        <h2 className="text-3xl font-bold text-slate-900 mt-2">Правовое обеспечение</h2>
        <p className="text-lg text-slate-600 mt-2">
          Защита интеллектуальной собственности и конфиденциальности проекта.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        
        {/* NDA */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
          <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 text-slate-700">
            <Lock size={24} />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">NDA (Соглашение)</h3>
          <p className="text-sm text-slate-600 mb-4">
            Для защиты коммерческой тайны и бюджета предусмотрено подписание соглашения о неразглашении.
          </p>
          <div className="bg-slate-50 p-2 rounded text-xs font-mono text-slate-500 border border-slate-100">
            Срок действия: 5 лет
          </div>
        </div>

        {/* IP Rights */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
          <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 text-slate-700">
            <FileText size={24} />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">Авторские права</h3>
          <p className="text-sm text-slate-600 mb-4">
            Стратегия является интеллектуальной собственностью разработчиков до момента полной передачи.
          </p>
          <div className="bg-slate-50 p-2 rounded text-xs font-mono text-slate-500 border border-slate-100">
            Запрет копирования и модификации
          </div>
        </div>

        {/* License */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
          <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 text-slate-700">
            <Scale size={24} />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">Условия использования</h3>
          <p className="text-sm text-slate-600 mb-4">
            Материалы могут быть использованы исключительно для внутренних целей компании-заказчика.
          </p>
          <div className="bg-slate-50 p-2 rounded text-xs font-mono text-slate-500 border border-slate-100">
            Ответственность по ГК РФ
          </div>
        </div>

      </div>

      <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg flex items-start">
         <BadgeCheck className="text-blue-600 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
         <p className="text-sm text-blue-800">
           Весь пакет документов, включая шаблоны NDA и договоров с новыми сотрудниками, подготовлен и прошел предварительную юридическую проверку.
         </p>
      </div>
    </div>
  );
};