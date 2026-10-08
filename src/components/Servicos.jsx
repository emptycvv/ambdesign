import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { SERVICOS_DATA, COMPANY_INFO } from '../data/marcenariaData';
import { WhatsAppIcon } from './WhatsAppFloat';

export const Servicos = ({ onOpenQuoteModal, onSelectServiceForQuote }) => {
  const [activeTab, setActiveTab] = useState(0);

  const requestServiceQuote = (serviceTitle) => {
    if (onSelectServiceForQuote) {
      onSelectServiceForQuote(serviceTitle);
    } else {
      onOpenQuoteModal();
    }
  };

  const openWhatsAppForService = (serviceTitle) => {
    const text = `Olá! Gostaria de um orçamento personalizado para o serviço de ${serviceTitle} com a AMB Design.`;
    const url = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section
      id="servicos"
      className="section-dark"
      style={{
        paddingTop: '4rem',
        paddingBottom: '5.5rem',
        position: 'relative',
        backgroundColor: '#120D0B'
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <span className="section-subtitle">Soluções Completas & Autorais</span>
          <span className="gold-line-accent gold-line-center" style={{ marginTop: '0.6rem' }} />
          <h2 className="section-title" style={{ color: '#FAF7F2', marginTop: '0.5rem', marginBottom: '1.25rem' }}>
            Serviços de Marcenaria Sob Medida
          </h2>
          <p style={{
            fontSize: '1.05rem',
            color: '#C8BFB5',
            lineHeight: 1.6,
            fontWeight: '300'
          }}>
            Da concepção volumétrica ao detalhamento milimétrico de ferragens, executamos projetos completos para todos os ambientes residenciais e corporativos.
          </p>
        </div>

        {/* 6 Services Grid with Rich Imagery and Details */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: 'clamp(1.25rem, 3vw, 2rem)'
          }}
        >
          {SERVICOS_DATA.map((servico, index) => (
            <div
              key={servico.id}
              className="card-luxury-dark"
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '10px'
              }}
            >
              {/* Image Preview */}
              <div className="img-zoom-wrap" style={{ height: '260px', width: '100%', position: 'relative' }}>
                <img
                  src={servico.image}
                  alt={servico.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  loading="lazy"
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(18, 13, 11, 0.1) 0%, rgba(18, 13, 11, 0.85) 100%)'
                }} />

                {/* Badge Top Left */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  backgroundColor: 'rgba(18, 13, 11, 0.85)',
                  border: '1px solid rgba(212, 175, 55, 0.4)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.35rem 0.8rem',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}>
                  <Sparkles size={13} color="#E5C378" />
                  <span style={{
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-accent)',
                    color: '#E5C378',
                    letterSpacing: '0.1em',
                    fontWeight: '600',
                    textTransform: 'uppercase'
                  }}>
                    {servico.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                justifyContent: 'space-between'
              }}>
                <div>
                  <span style={{
                    fontSize: '0.8rem',
                    color: '#C49767',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontWeight: '600',
                    display: 'block',
                    marginBottom: '0.4rem'
                  }}>
                    {servico.tagline}
                  </span>

                  <h3 style={{
                    fontSize: '1.45rem',
                    color: '#FAF7F2',
                    marginBottom: '0.9rem',
                    lineHeight: 1.25
                  }}>
                    {servico.title}
                  </h3>

                  <p style={{
                    fontSize: '0.92rem',
                    color: '#C8BFB5',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                    fontWeight: '300'
                  }}>
                    {servico.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.65rem',
                    marginBottom: '2rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    paddingTop: '1.25rem'
                  }}>
                    {servico.features.map((feat, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                        <div style={{
                          marginTop: '0.2rem',
                          width: '16px',
                          height: '16px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(212, 175, 55, 0.15)',
                          border: '1px solid rgba(212, 175, 55, 0.4)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <Check size={10} color="#E5C378" />
                        </div>
                        <span style={{ fontSize: '0.86rem', color: '#D8CCBA', lineHeight: 1.4 }}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Card Action Buttons */}
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => requestServiceQuote(servico.title)}
                    className="btn-luxury-primary"
                    style={{
                      flex: '1 1 auto',
                      padding: '0.75rem 1.2rem',
                      fontSize: '0.88rem'
                    }}
                  >
                    <span>Solicitar Projeto</span>
                    <ArrowRight size={15} />
                  </button>

                  <button
                    onClick={() => openWhatsAppForService(servico.title)}
                    className="btn-luxury-outline"
                    title="Orçar direto pelo WhatsApp"
                    style={{
                      padding: '0.75rem 1rem',
                      fontSize: '0.88rem'
                    }}
                  >
                    <WhatsAppIcon size={17} color="#25D366" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
