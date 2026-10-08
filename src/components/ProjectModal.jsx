import React, { useEffect } from 'react';
import { X, MapPin, Calendar, Layers, User, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/marcenariaData';
import { WhatsAppIcon } from './WhatsAppFloat';

export const ProjectModal = ({ project, onClose, onOpenQuoteModal }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  const openWhatsAppForProject = () => {
    const text = `Olá! Gostei muito do projeto "${project.title}" (${project.location}) e gostaria de um orçamento para um espaço semelhante com a AMB Design.`;
    const url = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(10, 7, 5, 0.88)',
        backdropFilter: 'blur(16px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#18120F',
          border: '1px solid rgba(212, 175, 55, 0.35)',
          borderRadius: '12px',
          maxWidth: '960px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 25px 70px rgba(0, 0, 0, 0.8)',
          position: 'relative',
          color: '#FAF7F2'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar Modal"
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            zIndex: 10,
            backgroundColor: 'rgba(18, 13, 11, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#FAF7F2',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            backdropFilter: 'blur(8px)'
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'
        }}>
          {/* Project Image */}
          <div style={{
            height: 'clamp(300px, 45vw, 520px)',
            backgroundColor: '#0F0B09',
            position: 'relative'
          }}>
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, transparent 60%, rgba(24, 18, 15, 0.95) 100%)'
            }} />
          </div>

          {/* Project Details */}
          <div style={{
            padding: '2.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ marginBottom: '0.75rem' }}>
                <span style={{
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-accent)',
                  color: '#E5C378',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fontWeight: '600'
                }}>
                  {project.categoryLabel}
                </span>
              </div>

              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.75rem',
                lineHeight: 1.25,
                color: '#FAF7F2',
                marginBottom: '1rem'
              }}>
                {project.title}
              </h2>

              <p style={{
                fontSize: '0.95rem',
                color: '#C8BFB5',
                lineHeight: 1.65,
                marginBottom: '1.75rem',
                fontWeight: '300'
              }}>
                {project.description}
              </p>

              {/* Specs Grid */}
              <div style={{
                backgroundColor: 'rgba(14, 10, 8, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '8px',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
                marginBottom: '2rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                  <MapPin size={16} color="#C49767" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#8E8277', display: 'block' }}>Localização</span>
                    <span style={{ fontSize: '0.88rem', color: '#FAF7F2', fontWeight: '500' }}>{project.location}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                  <User size={16} color="#C49767" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#8E8277', display: 'block' }}>Projeto / Autoria</span>
                    <span style={{ fontSize: '0.88rem', color: '#FAF7F2', fontWeight: '500' }}>{project.architect}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                  <Layers size={16} color="#C49767" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#8E8277', display: 'block' }}>Materiais & Especificações</span>
                    <span style={{ fontSize: '0.88rem', color: '#EAE1D3', lineHeight: 1.4 }}>{project.materials}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button
                onClick={openWhatsAppForProject}
                className="btn-luxury-primary"
                style={{ width: '100%', padding: '0.9rem' }}
              >
                <WhatsAppIcon size={18} color="#120D0B" />
                <span>Quero um projeto como este</span>
              </button>

              <button
                onClick={() => { onClose(); onOpenQuoteModal(); }}
                className="btn-luxury-outline"
                style={{ width: '100%', padding: '0.8rem', fontSize: '0.88rem' }}
              >
                <span>Solicitar Orçamento Geral</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
