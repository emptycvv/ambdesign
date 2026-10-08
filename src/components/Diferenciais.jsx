import React from 'react';
import { Sparkles, Compass, ShieldCheck, Sliders, Cpu, UserCheck, ArrowRight } from 'lucide-react';
import { DIFERENCIAIS_DATA } from '../data/marcenariaData';

const iconMap = {
  Sparkles: Sparkles,
  Compass: Compass,
  ShieldCheck: ShieldCheck,
  Sliders: Sliders,
  Cpu: Cpu,
  UserCheck: UserCheck
};

export const Diferenciais = ({ onOpenQuoteModal }) => {
  return (
    <section
      id="diferenciais"
      className="section-sand"
      style={{
        paddingTop: 'clamp(3rem, 6vw, 5rem)',
        paddingBottom: 'clamp(3.5rem, 6vw, 5.5rem)',
        position: 'relative'
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}>
          <span className="section-subtitle">Diferenciais AMB Design</span>
          <span className="gold-line-accent" style={{ marginTop: '0.6rem' }} />
          <h2 className="section-title" style={{ color: '#1D1612', marginTop: '0.5rem', marginBottom: '1.25rem' }}>
            A Arte da Precisão e Excelência em Cada Detalhe
          </h2>
          <p style={{
            fontSize: 'clamp(0.95rem, 1.4vw, 1.08rem)',
            color: '#52433B',
            lineHeight: 1.65,
            fontWeight: '400'
          }}>
            Unimos o requinte da marcenaria artesanal clássica à tecnologia de engenharia moderna, entregando móveis exclusivos que valorizam seu patrimônio e refletem sua personalidade.
          </p>
        </div>

        {/* 6 Elegant Cards without enumerations */}
        <div className="diferenciais-grid">
          {DIFERENCIAIS_DATA.map((item) => {
            const IconComponent = iconMap[item.icon] || Sparkles;

            return (
              <div
                key={item.id}
                className="diferencial-card"
              >
                <div className="diferencial-content">
                  <div>
                    {/* Top Row: Icon Container + Highlight Badge */}
                    <div className="diferencial-header">
                      <div className="diferencial-icon-box">
                        <IconComponent size={24} color="#8C5A35" strokeWidth={1.8} />
                      </div>

                      <span className="diferencial-badge">
                        {item.highlight}
                      </span>
                    </div>

                    {/* Subtitle / Category */}
                    <span className="diferencial-subtitle">
                      {item.subtitle}
                    </span>

                    {/* Title */}
                    <h3 className="diferencial-title">
                      {item.title}
                    </h3>

                    {/* Golden subtle line */}
                    <div className="diferencial-mini-line" />

                    {/* Description */}
                    <p className="diferencial-description">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout for Architects & Designers */}
        <div
          style={{
            marginTop: 'clamp(2.5rem, 5vw, 4rem)',
            position: 'relative',
            background: 'linear-gradient(135deg, #1C1512 0%, #120D0B 100%)',
            border: '1px solid rgba(212, 175, 55, 0.35)',
            borderRadius: '14px',
            padding: 'clamp(1.75rem, 3.5vw, 2.75rem) clamp(1.5rem, 4vw, 3rem)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.75rem',
            boxShadow: '0 20px 50px rgba(18, 13, 11, 0.35), 0 0 30px rgba(212, 175, 55, 0.08)',
            overflow: 'hidden'
          }}
        >
          {/* Subtle Ambient Radial Glow */}
          <div
            style={{
              position: 'absolute',
              top: '-40%',
              left: '-10%',
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
              pointerEvents: 'none'
            }}
          />

          <div style={{ maxWidth: '660px', minWidth: 0, position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <span
                style={{
                  fontSize: '0.74rem',
                  fontFamily: 'var(--font-accent)',
                  color: '#E5C378',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  fontWeight: '600',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '20px',
                  backgroundColor: 'rgba(212, 175, 55, 0.12)',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <Compass size={13} color="#E5C378" />
                Canal Exclusivo para Profissionais
              </span>
            </div>

            <h4
              style={{
                fontSize: 'clamp(1.25rem, 2.2vw, 1.65rem)',
                color: '#FAF7F2',
                marginBottom: '0.65rem',
                fontFamily: 'var(--font-display)',
                lineHeight: 1.25,
                fontWeight: '600'
              }}
            >
              Possui projeto de arquiteto ou designer de interiores?
            </h4>

            <p style={{ fontSize: '0.95rem', color: '#D8CCBA', lineHeight: 1.65, fontWeight: '300', margin: 0 }}>
              Enviamos orçamento técnico detalhado e amostras de acabamento em até 24 horas. Atendemos arquitetos com precisão absoluta.
            </p>
          </div>

          <div style={{ position: 'relative', zIndex: 2 }}>
            <button
              onClick={onOpenQuoteModal}
              className="btn-luxury-primary"
              style={{
                padding: '1rem 2rem',
                fontSize: '0.95rem',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem'
              }}
            >
              <span>Enviar Projeto para Orçamento</span>
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        /* Responsive Balanced Grid */
        .diferenciais-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 640px) {
          .diferenciais-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .diferenciais-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 1.75rem;
          }
        }

        /* Card Styling - Refined Bespoke Luxury */
        .diferencial-card {
          position: relative;
          background: linear-gradient(170deg, #FFFFFF 0%, #FAF7F2 65%, #F4ECE1 100%);
          border: 1px solid rgba(196, 151, 103, 0.28);
          border-radius: 12px;
          padding: clamp(1.8rem, 2.5vw, 2.3rem) clamp(1.5rem, 2vw, 1.9rem);
          box-shadow: 0 8px 25px rgba(58, 40, 30, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9);
          display: flex;
          flex-direction: column;
          height: 100%;
          min-width: 0;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, border-color 0.35s ease;
        }

        .diferencial-content {
          display: flex;
          flex-direction: column;
          height: 100%;
          justifyContent: space-between;
          min-width: 0;
        }

        @media (hover: hover) {
          .diferencial-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 18px 45px rgba(58, 40, 30, 0.09), 0 0 25px rgba(212, 175, 55, 0.1);
            border-color: rgba(184, 115, 51, 0.5);
          }
          .diferencial-card:hover .diferencial-icon-box {
            transform: scale(1.05);
            border-color: rgba(212, 175, 55, 0.55);
            background: linear-gradient(135deg, rgba(212, 175, 55, 0.24) 0%, rgba(184, 115, 51, 0.14) 100%);
          }
        }

        /* Header Row: Icon and Badge */
        .diferencial-header {
          display: flex;
          justifyContent: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          gap: 0.75rem;
        }

        .diferencial-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.14) 0%, rgba(184, 115, 51, 0.07) 100%);
          border: 1px solid rgba(212, 175, 55, 0.35);
          display: flex;
          align-items: center;
          justifyContent: center;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(184, 115, 51, 0.08);
          transition: transform 0.3s ease, background 0.3s ease, border-color 0.3s ease;
        }

        .diferencial-icon-box svg {
          display: block;
          margin: auto;
        }

        .diferencial-badge {
          font-size: 0.72rem;
          font-family: var(--font-accent);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.35rem 0.85rem;
          border-radius: 20px;
          font-weight: 600;
          background: rgba(212, 175, 55, 0.09);
          color: #8A5228;
          border: 1px solid rgba(212, 175, 55, 0.28);
          white-space: nowrap;
        }

        .diferencial-subtitle {
          font-size: 0.76rem;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          font-weight: 600;
          color: #A36B3B;
          display: block;
          margin-bottom: 0.45rem;
          font-family: var(--font-accent);
        }

        .diferencial-title {
          font-size: clamp(1.25rem, 1.7vw, 1.42rem);
          color: #1A130F;
          margin-bottom: 0.65rem;
          font-family: var(--font-display);
          line-height: 1.25;
          font-weight: 600;
        }

        .diferencial-mini-line {
          width: 36px;
          height: 2px;
          background: linear-gradient(90deg, #D4AF37 0%, rgba(212, 175, 55, 0.2) 70%, transparent 100%);
          margin-bottom: 1.1rem;
        }

        .diferencial-description {
          font-size: 0.94rem;
          color: #52433B;
          line-height: 1.65;
          margin-bottom: 0.5rem;
          font-weight: 400;
        }
      `}</style>
    </section>
  );
};
