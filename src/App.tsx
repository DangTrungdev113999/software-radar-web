import { HashRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { SalesKitPage } from './pages/SalesKitPage';
import { GlossaryPage } from './pages/GlossaryPage';

// HashRouter: deep-link (#/glossary) chạy ổn trên GitHub Pages mà không cần cấu hình 404 SPA.
export default function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<SalesKitPage />} />
        <Route path="/glossary" element={<GlossaryPage />} />
      </Routes>
    </HashRouter>
  );
}
