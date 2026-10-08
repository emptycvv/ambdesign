import React from 'react';
import {
  Sliders,
  Layers,
  Ruler,
  UserCheck,
  ShieldCheck,
  CheckCircle
} from 'lucide-react';
import { PROCESSO_STEPS, COMPANY_INFO } from '../data/marcenariaData';
import { WhatsAppIcon } from './WhatsAppFloat';

export const ProcessoArtesanal = ({ onOpenQuoteModal }) => {
  const openWhatsApp = () => {
    const url = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent("Olá! Gostaria de iniciar meu projeto sob medida com a AMB Design.")}`;
    window.open(url, '_blank');
  };

  const iconMap = {
    Sliders,
    Layers,
    Ruler,
    UserCheck,
    ShieldCheck
  };

  return (
    <section
      id="processo"
      className="section-dark"
      style={{
        paddingTop: 'clamp(3.5rem, 6vw, 5rem)',
        paddingBottom: 'clamp(4rem, 6vw, 5.5rem)',
        position: 'relative',
        backgroundColor: '#120D0B'
      }}
    >
      <div className="container-custom">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <span className="section-subtitle">Padrão Construtivo Superior</span>
          <span className="gold-line-accent gold-line-center" style={{ marginTop: '0.6rem' }} />
          <h2 className="section-title" style={{ color: '#FAF7F2', marginTop: '0.5rem', marginBottom: '1.25rem' }}>
            Excelência Construtiva em Cada Detalhe
          </h2>
          <p
            style={{
              fontSize: 'clamp(0.95rem, 1.4vw, 1.05rem)',
              color: '#C8BFB5',
              lineHeight: 1.65,
              fontWeight: '300'
            }}
          >
            Conheça os padrões técnicos e construtivos que garantem a máxima durabilidade, precisão milimétrica e acabamento impecável do seu mobiliário sob medida.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
            gap: '1.5rem',
            position: 'relative'
          }}
        >
          {PROCESSO_STEPS.map((step, idx) => {
            const Icon = iconMap[step.iconName] || ShieldCheck;
            return (
              <div
                key={idx}
                className="card-luxury-dark"
                style={{
                  padding: 'clamp(1.75rem, 2.5vw, 2.2rem) clamp(1.4rem, 2vw, 1.8rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '12px',
                  background: 'linear-gradient(160deg, rgba(38, 29, 24, 0.75) 0%, rgba(20, 14, 11, 0.95) 100%)',
                  border: '1px solid rgba(212, 175, 55, 0.22)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'
                }}
              >
                <div>
                  {/* Top Row: Icon Container + Badge */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '1.4rem',
                      gap: '0.5rem'
                    }}
                  >
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '10px',
                        backgroundColor: 'rgba(212, 175, 55, 0.12)',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <Icon size={22} color="#E5C378" strokeWidth={1.8} />
                    </div>

                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-accent)',
                        color: '#E5C378',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        padding: '0.35rem 0.75rem',
                        borderRadius: '20px',
                        backgroundColor: 'rgba(212, 175, 55, 0.1)',
                        border: '1px solid rgba(212, 175, 55, 0.25)',
                        fontWeight: '600',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {step.badge}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '1.25rem',
                      color: '#FAF7F2',
                      marginBottom: '0.65rem',
                      lineHeight: 1.25,
                      fontFamily: 'var(--font-display)',
                      fontWeight: '600'
                    }}
                  >
                    {step.title}
                  </h3>

                  <div
                    style={{
                      width: '32px',
                      height: '2px',
                      background: 'linear-gradient(90deg, #D4AF37, transparent)',
                      marginBottom: '1rem'
                    }}
                  />

                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: '#C8BFB5',
                      lineHeight: 1.65,
                      fontWeight: '300'
                    }}
                  >
                    {step.description}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: '1.75rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    paddingTop: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <CheckCircle size={14} color="#D4AF37" />
                  <span style={{ fontSize: '0.78rem', color: '#A89E92' }}>Padrão de Fábrica</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <button
            onClick={openWhatsApp}
            className="btn-luxury-primary"
            style={{
              padding: '1.05rem 2.6rem',
              fontSize: '1rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem'
            }}
          >
            <WhatsAppIcon size={19} color="#120D0B" />
            <span>Iniciar Meu Projeto com a AMB Design</span>
          </button>
        </div>
      </div>
    </section>
  );
};
