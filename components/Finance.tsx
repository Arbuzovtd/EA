import React from 'react';
import { 
  PieChart, Pie, Cell, Tooltip as RechartsTooltip, Legend, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid
} from 'recharts';
import { BudgetItem } from '../types';
import { Wallet, TrendingUp, Clock } from 'lucide-react';

const budgetData: BudgetItem[] = [
  { name: 'Персонал (ФОТ)', value: 15.45, color: '#3b82f6' },
  { name: 'Маркетплейсы', value: 7.35, color: '#10b981' },
  { name: 'Высокий сезон', value: 6.30, color: '#f59e0b' },
  { name: 'Технологии (IT)', value: 5.65, color: '#8b5cf6' },
  { name: 'Офлайн модерн.', value: 3.20, color: '#ec4899' },
];

const growthData = [
  { name: '2024', value: 150, label: 'Факт' },
  { name: '2025', value: 195, label: 'План' },
];

export const Finance: React.FC = () => {
  return (
    <div className="space-y-8 animate-in zoom-in-95 duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Финансы и Бюджет</h2>
          <p className="text-slate-500 mt-2">Общий бюджет: 43.75 млн ₽ | ROI: +36%</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-3">
          <div className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-lg text-sm font-semibold flex items-center">
             <TrendingUp className="w-4 h-4 mr-2" />
             Окупаемость: 30 мес.
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Budget Allocation */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
            <Wallet className="w-5 h-5 mr-2 text-slate-500" />
            Структура Бюджета (млн ₽)
          </h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={budgetData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {budgetData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <RechartsTooltip formatter={(value) => `${value} млн ₽`} />
                <Legend layout="vertical" align="right" verticalAlign="middle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 text-xs text-slate-400 text-center">
            *Включает кассовый разрыв ~21M ₽ (требуется кред. линия)
          </div>
        </div>

        {/* Revenue Growth */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-slate-500" />
            Рост Выручки (млн ₽)
          </h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={growthData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <RechartsTooltip cursor={{fill: '#f1f5f9'}} />
                <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={60}>
                    {growthData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 1 ? '#10b981' : '#94a3b8'} />
                    ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 flex justify-between items-center bg-slate-50 p-3 rounded-lg">
             <span className="text-sm font-medium text-slate-600">Прирост EBITDA</span>
             <span className="text-lg font-bold text-emerald-600">+11.3 млн ₽</span>
          </div>
        </div>

        {/* Resource Plan */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Кадровые Ресурсы (Новые наймы)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
             <div className="p-4 border border-slate-100 rounded-lg bg-slate-50">
                <p className="text-xs text-slate-500 uppercase font-bold">Маркетплейсы</p>
                <p className="text-lg font-semibold text-slate-900 mt-1">Менеджер MP</p>
                <p className="text-sm text-slate-600">130K ₽/мес</p>
             </div>
             <div className="p-4 border border-slate-100 rounded-lg bg-slate-50">
                <p className="text-xs text-slate-500 uppercase font-bold">Продукт</p>
                <p className="text-lg font-semibold text-slate-900 mt-1">Product Manager</p>
                <p className="text-sm text-slate-600">120K ₽/мес x2</p>
             </div>
             <div className="p-4 border border-slate-100 rounded-lg bg-slate-50">
                <p className="text-xs text-slate-500 uppercase font-bold">Продажи</p>
                <p className="text-lg font-semibold text-slate-900 mt-1">Sales Manager</p>
                <p className="text-sm text-slate-600">80K ₽/мес</p>
             </div>
             <div className="p-4 border border-slate-100 rounded-lg bg-slate-50">
                <p className="text-xs text-slate-500 uppercase font-bold">Логистика</p>
                <p className="text-lg font-semibold text-slate-900 mt-1">Специалист</p>
                <p className="text-sm text-slate-600">70K ₽/мес</p>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};