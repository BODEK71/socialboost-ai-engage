
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n.ts'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n.ts'
import { LanguageProvider } from './contexts/LanguageContext'

createRoot(document.getElementById("root")!).render(
  <I18nextProvider i18n={i18n}>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </I18nextProvider>
);
