import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import {
  CurveDarkToSand,
  CurveSandToDark
} from './components/OrganicDividers';
import { Diferenciais } from './components/Diferenciais';
import { Servicos } from './components/Servicos';
import { ProjetosGaleria } from './components/ProjetosGaleria';
import { ProcessoArtesanal } from './components/ProcessoArtesanal';
import { CtaBanner } from './components/CtaBanner';
import { ContatoFooter } from './components/ContatoFooter';
import { ProjectModal } from './components/ProjectModal';
import { QuoteModal } from './components/QuoteModal';
import { WhatsAppFloat } from './components/WhatsAppFloat';

export function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteInitialService, setQuoteInitialService] = useState('');

  const handleOpenQuoteModal = (serviceName = '') => {
    setQuoteInitialService(serviceName);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="ambdesign-app">
      {/* 1. Header / Navbar */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* 2. Hero Section with integrated Organic Curve (Dark Luxury -> Sand) */}
      <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* 3. Diferenciais Section (Warm Sand) */}
      <Diferenciais onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Organic Curved Transition 2: Diferenciais (Sand) -> Serviços (Dark Wood) */}
      <CurveSandToDark />

      {/* 4. Serviços Section (Dark Wood) */}
      <Servicos
        onOpenQuoteModal={() => handleOpenQuoteModal()}
        onSelectServiceForQuote={(srv) => handleOpenQuoteModal(srv)}
      />

      {/* Organic Curved Transition 3: Serviços (Dark) -> Projetos (Light Sand) */}
      <CurveDarkToSand style={{ backgroundColor: '#150E0C' }} />

      {/* 5. Projetos Galeria (Light Sand) */}
      <ProjetosGaleria onSelectProject={(p) => setSelectedProject(p)} />

      {/* Organic Curved Transition 4: Projetos (Sand) -> Processo (Dark) */}
      <CurveSandToDark />

      {/* 6. Processo Artesanal / O Método (Dark) */}
      <ProcessoArtesanal onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* 7. CTA Principal: "Seu projeto começa aqui." */}
      <CtaBanner onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* 10. Footer com Formulário, Showroom & Contatos */}
      <ContatoFooter />

      {/* Modals & Overlays */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialService={quoteInitialService}
      />

      {/* Persistent Floating WhatsApp */}
      <WhatsAppFloat />
    </div>
  );
}

export default App;
