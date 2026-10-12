import { useState, useEffect } from 'react';
import { TEMPLATES_DATA } from './data/templates';
import type { Template, ToastNotification } from './types';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomeView } from './components/views/HomeView';
import { TemplatesGalleryView } from './components/views/TemplatesGalleryView';
import { CategoriesView } from './components/views/CategoriesView';
import { CollectionView } from './components/views/CollectionView';
import { TemplateDetailView } from './components/views/TemplateDetailView';
import { CommissionModal } from './components/modals/CommissionModal';
import { Check, Info } from 'lucide-react';
import './App.css';

export function App() {
  // Navigation State
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [initialDetailTab, setInitialDetailTab] = useState<'preview' | 'code' | 'prompt'>('preview');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // LocalStorage Persistence for Saved Templates
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('nector_saved_templates');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // LocalStorage Persistence for Theme
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const stored = localStorage.getItem('nector_theme');
      return stored === 'dark' ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  // Toast Notifications
  const [toasts, setToasts] = useState<ToastNotification[]>([]);

  // Commission Modal State
  const [isCommissionOpen, setIsCommissionOpen] = useState(false);
  const [commissionTemplateContext, setCommissionTemplateContext] = useState<Template | null>(null);

  // Sync theme to root HTML attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('nector_theme', theme);
  }, [theme]);

  // Sync saved items to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('nector_saved_templates', JSON.stringify(savedIds));
    } catch (e) {
      console.error(e);
    }
  }, [savedIds]);

  const addToast = (message: string, type: 'success' | 'info' | 'copied' = 'success') => {
    const id = Date.now().toString() + Math.random().toString().slice(2, 5);
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3200);
  };

  const handleToggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    addToast(`Switched to ${newTheme === 'light' ? 'Warm Light' : 'Crisp Dark'} mode`, 'info');
  };

  const handleToggleSave = (templateId: string) => {
    if (savedIds.includes(templateId)) {
      setSavedIds(prev => prev.filter(id => id !== templateId));
      addToast('Removed from your collection', 'info');
    } else {
      setSavedIds(prev => [...prev, templateId]);
      addToast('Saved to your collection', 'success');
    }
  };

  const isSaved = (templateId: string) => savedIds.includes(templateId);

  const handleNavigate = (view: string, categoryFilter?: string) => {
    setCurrentView(view);
    if (categoryFilter) {
      setSelectedCategory(categoryFilter);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTemplate = (template: Template, initialTab: 'preview' | 'code' | 'prompt' = 'preview') => {
    setSelectedTemplate(template);
    setInitialDetailTab(initialTab);
    setCurrentView('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCommission = (template?: Template) => {
    setCommissionTemplateContext(template || null);
    setIsCommissionOpen(true);
  };

  return (
    <div className="nector-app-root">
      {/* Global Header */}
      <Header
        activeNav={currentView}
        onNavigate={handleNavigate}
        savedCount={savedIds.length}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        searchQuery={searchQuery}
        onSearchChange={(q) => {
          setSearchQuery(q);
          if (currentView !== 'templates') setCurrentView('templates');
        }}
        onOpenCommissionModal={() => handleOpenCommission()}
      />

      {/* Main Content Router */}
      <main className="main-content">
        {currentView === 'home' && (
          <HomeView
            templates={TEMPLATES_DATA}
            onSelectTemplate={handleSelectTemplate}
            onNavigate={handleNavigate}
            onToggleSave={handleToggleSave}
            isSaved={isSaved}
          />
        )}

        {currentView === 'templates' && (
          <TemplatesGalleryView
            templates={TEMPLATES_DATA}
            onSelectTemplate={handleSelectTemplate}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            isSaved={isSaved}
            onToggleSave={handleToggleSave}
          />
        )}


        {currentView === 'categories' && (
          <CategoriesView
            templates={TEMPLATES_DATA}
            onSelectCategory={(cat) => handleNavigate('templates', cat)}
          />
        )}

        {currentView === 'collection' && (
          <CollectionView
            templates={TEMPLATES_DATA}
            savedIds={savedIds}
            onSelectTemplate={handleSelectTemplate}
            onToggleSave={handleToggleSave}
            onNavigateToGallery={() => handleNavigate('templates')}
            onClearCollection={() => {
              setSavedIds([]);
              addToast('Collection cleared', 'info');
            }}
          />
        )}

        {currentView === 'detail' && selectedTemplate && (
          <TemplateDetailView
            template={selectedTemplate}
            onBack={() => handleNavigate('templates')}
            isSaved={isSaved(selectedTemplate.id)}
            onToggleSave={() => handleToggleSave(selectedTemplate.id)}
            onToast={addToast}
            initialTab={initialDetailTab}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Commission Modal */}
      <CommissionModal
        isOpen={isCommissionOpen}
        onClose={() => setIsCommissionOpen(false)}
        selectedTemplate={commissionTemplateContext}
      />

      {/* Toast Notification Container */}
      <div className="toast-portal" aria-live="polite">
        {toasts.map(toast => (
          <div key={toast.id} className={`toast-item ${toast.type}`}>
            <div className="toast-icon">
              {toast.type === 'info' ? <Info size={15} /> : <Check size={15} />}
            </div>
            <span className="toast-msg">{toast.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
