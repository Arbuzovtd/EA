import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Slide1_Problems } from './components/Slide1_Problems';
import { Slide2_Solution } from './components/Slide2_Solution';
import { Slide3_Value } from './components/Slide3_Value';
import { Slide4_Plan } from './components/Slide4_Plan';
import { Slide5_Legal } from './components/Slide5_Legal';
import { Slide6_Risks } from './components/Slide6_Risks';
import { Slide7_Request } from './components/Slide7_Request';
import { Slide8_Roles } from './components/Slide8_Roles';
import { Section } from './types';
import { Menu } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>(Section.PROBLEMS);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case Section.PROBLEMS: return <Slide1_Problems />;
      case Section.SOLUTION: return <Slide2_Solution />;
      case Section.VALUE: return <Slide3_Value />;
      case Section.PLAN: return <Slide4_Plan />;
      case Section.LEGAL: return <Slide5_Legal />;
      case Section.RISKS: return <Slide6_Risks />;
      case Section.REQUEST: return <Slide7_Request />;
      case Section.ROLES: return <Slide8_Roles />;
      default: return <Slide1_Problems />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans text-slate-900">
      
      {/* Mobile Navigation Overlay */}
      {isMobileNavOpen && (
        <div className="fixed inset-0 z-40 bg-slate-900/50 md:hidden" onClick={() => setIsMobileNavOpen(false)}></div>
      )}
      
      {/* Sidebar Container - Hidden on mobile unless toggled */}
      <div className={`fixed inset-y-0 left-0 z-50 transform ${isMobileNavOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition-transform duration-300 ease-in-out md:w-64 flex-shrink-0`}>
         <Navigation 
            activeSection={activeSection} 
            onNavigate={(section) => {
              setActiveSection(section);
              setIsMobileNavOpen(false);
            }} 
         />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden min-w-0">
        {/* Mobile Header */}
        <div className="md:hidden bg-white border-b border-slate-200 p-4 flex items-center justify-between flex-shrink-0">
           <span className="font-bold text-slate-900">DoorCo Pitch</span>
           <button onClick={() => setIsMobileNavOpen(true)} className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
             <Menu size={24} />
           </button>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12 custom-scrollbar">
          <div className="max-w-5xl mx-auto pb-12">
             {renderSection()}
          </div>
          
          <footer className="max-w-5xl mx-auto border-t border-slate-200 pt-6 text-center md:text-left text-xs text-slate-400">
            <p>© 2025 Стратегия Трансформации. РЭУ им. Плеханова.</p>
          </footer>
        </div>
      </main>
    </div>
  );
}