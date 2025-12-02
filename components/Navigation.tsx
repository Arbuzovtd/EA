import React from 'react';
import { Section, NavItem } from '../types';
import { 
  AlertCircle, 
  Lightbulb, 
  Target, 
  Map, 
  Scale, 
  ShieldAlert, 
  Rocket, 
  Users 
} from 'lucide-react';

interface NavigationProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

const navItems: NavItem[] = [
  { id: Section.PROBLEMS, label: '1. Проблемы', icon: AlertCircle, group: 'Анализ' },
  { id: Section.SOLUTION, label: '2. Решение', icon: Lightbulb, group: 'Анализ' },
  { id: Section.VALUE, label: '3. Ценность', icon: Target, group: 'Стратегия' },
  { id: Section.PLAN, label: '4. План и Ресурсы', icon: Map, group: 'Стратегия' },
  { id: Section.LEGAL, label: '5. Юридические аспекты', icon: Scale, group: 'Обеспечение' },
  { id: Section.RISKS, label: '6. Риски', icon: ShieldAlert, group: 'Обеспечение' },
  { id: Section.REQUEST, label: '7. Запрос (Пилот)', icon: Rocket, group: 'Финал' },
  { id: Section.ROLES, label: '8. Роли и Шаги', icon: Users, group: 'Финал' },
];

export const Navigation: React.FC<NavigationProps> = ({ activeSection, onNavigate }) => {
  return (
    <aside className="w-full md:w-64 bg-slate-900 text-white flex-shrink-0 flex flex-col h-screen sticky top-0 overflow-hidden">
      <div className="p-6 border-b border-slate-700 flex-shrink-0">
        <h1 className="text-xl font-bold tracking-tight text-blue-400">DoorCo <span className="text-white">Pitch</span></h1>
        <p className="text-xs text-slate-400 mt-1">Трансформация 2025</p>
      </div>
      
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto custom-scrollbar">
        {['Анализ', 'Стратегия', 'Обеспечение', 'Финал'].map((group) => (
          <div key={group} className="mb-6">
            <h3 className="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              {group}
            </h3>
            <div className="space-y-1">
              {navItems.filter(item => item.group === group).map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`w-full flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group
                      ${isActive 
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' 
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                  >
                    <Icon className={`mr-3 h-5 w-5 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'}`} />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800 flex-shrink-0">
        <div className="bg-slate-800 rounded-lg p-3">
          <p className="text-xs text-slate-400">Команда проекта</p>
          <p className="text-sm font-semibold text-white">РЭУ им. Плеханова</p>
        </div>
      </div>
    </aside>
  );
};