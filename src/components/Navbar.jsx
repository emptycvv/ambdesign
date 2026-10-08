import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ChevronRight, Compass } from 'lucide-react';
import { COMPANY_INFO } from '../data/marcenariaData';

export const Navbar = ({ onOpenQuoteModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Processo', href: '#processo' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const url = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(COMPANY_INFO.whatsappDefaultMsg)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Main Floating / Sticky Navbar */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          backgroundColor: scrolled ? 'rgba(18, 13, 11, 0.94)' : 'rgba(18, 13, 11, 0.7)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(212, 175, 55, 0.22)' : '1px solid rgba(255, 255, 255, 0.06)',
          boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.5)' : 'none',
          padding: scrolled ? '0.75rem 0' : '1.1rem 0'
        }}
      >
        <div className="container-custom" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Brand Logo */}
          <a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); handleNavClick('#inicio'); }}
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem'
            }}
          >
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '6px',
              background: 'linear-gradient(135deg, #2C2018 0%, #17110E 100%)',
              border: '1px solid rgba(212, 175, 55, 0.45)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(0,0,0,0.4)'
            }}>
              <span style={{
                fontFamily: 'var(--font-accent)',
                fontSize: '1.25rem',
                fontWeight: '700',
                color: '#E5C378',
                letterSpacing: '0.05em'
              }}>A</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{
                fontFamily: 'var(--font-accent)',
                fontSize: '1.2rem',
                fontWeight: '700',
                letterSpacing: '0.14em',
                color: '#F7F3EE',
                lineHeight: 1.1
              }}>
                AMB DESIGN
              </span>
              <span style={{
                fontSize: '0.65rem',
                letterSpacing: '0.22em',
                color: '#C49767',
                textTransform: 'uppercase',
                fontWeight: '500'
              }}>
                Marcenaria de Alto Padrão
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '1.8rem'
            }}
            className="desktop-nav-container"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                style={{
                  color: '#D8CCBA',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  letterSpacing: '0.03em',
                  transition: 'color 0.2s ease',
                  position: 'relative',
                  padding: '0.25rem 0'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#E5C378')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#D8CCBA')}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div style={{ display: 'none', alignItems: 'center', gap: '1rem' }} className="desktop-nav-actions">
            <button
              onClick={onOpenQuoteModal}
              className="btn-luxury-primary"
              style={{
                padding: '0.7rem 1.4rem',
                fontSize: '0.88rem'
              }}
            >
              <span>Solicitar Orçamento</span>
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir Menu de Navegação"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(212, 175, 55, 0.25)',
              color: '#F7F3EE',
              padding: '0.6rem',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
            className="mobile-toggle-btn"
          >
            {mobileMenuOpen ? <X size={24} color="#E5C378" /> : <Menu size={24} color="#E5C378" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            top: '75px',
            backgroundColor: 'rgba(18, 13, 11, 0.98)',
            backdropFilter: 'blur(20px)',
            zIndex: 49,
            padding: '2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(212, 175, 55, 0.2)'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                style={{
                  color: '#F7F3EE',
                  textDecoration: 'none',
                  fontSize: '1.25rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: '600',
                  padding: '0.5rem 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span>{link.label}</span>
                <ChevronRight size={18} color="#C49767" />
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenQuoteModal(); }}
              className="btn-luxury-primary"
              style={{ width: '100%', padding: '0.9rem' }}
            >
              <span>Solicitar Orçamento Exclusivo</span>
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); openWhatsApp(); }}
              className="btn-luxury-outline"
              style={{ width: '100%', padding: '0.9rem', display: 'flex', gap: '0.5rem' }}
            >
              <MessageCircle size={18} color="#25D366" />
              <span>Falar no WhatsApp</span>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav-container {
            display: flex !important;
          }
          .desktop-nav-actions {
            display: flex !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
