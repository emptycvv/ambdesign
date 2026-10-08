import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2, Award, Play } from 'lucide-react';
import { COMPANY_INFO } from '../data/marcenariaData';
import { CurveDarkToSand } from './OrganicDividers';

export const Hero = ({ onOpenQuoteModal }) => {
  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const url = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent("Olá! Vi o site da AMB Design e gostaria de solicitar um orçamento para meu projeto sob medida.")}`;
    window.open(url, '_blank');
  };

  return (
    <section
      id="inicio"
      style={{
        position: 'relative',
        backgroundColor: '#120D0B',
        backgroundImage: `
          radial-gradient(ellipse at 80% 20%, rgba(184, 115, 51, 0.18) 0%, transparent 60%),
          radial-gradient(ellipse at 20% 80%, rgba(212, 175, 55, 0.12) 0%, transparent 60%),
          linear-gradient(180deg, rgba(18, 13, 11, 0.72) 0%, rgba(18, 13, 11, 0.88) 70%, #120D0B 100%),
          url('/10.webp')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
        paddingTop: 'clamp(3rem, 5vw, 4.5rem)',
        paddingBottom: '0',
        overflow: 'hidden'
      }}
    >
      {/* Decorative ambient subtle wood lines */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 0)',
          backgroundSize: '32px 32px',
          opacity: 0.7,
          pointerEvents: 'none'
        }}
      />

      <div className="container-custom" style={{ position: 'relative', zIndex: 5, margin: '0 auto', paddingBottom: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
        <div style={{ maxWidth: '880px' }}>
          {/* High-end badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              backgroundColor: 'rgba(38, 28, 23, 0.75)',
              border: '1px solid rgba(212, 175, 55, 0.35)',
              backdropFilter: 'blur(12px)',
              padding: '0.45rem 1.1rem',
              borderRadius: '30px',
              marginBottom: '1.75rem',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
            }}
          >
            <Sparkles size={14} color="#E5C378" />
            <span style={{
              fontFamily: 'var(--font-accent)',
              fontSize: '0.75rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#F7F3EE',
              fontWeight: '600'
            }}>
              Marcenaria Sob Medida de Alto Padrão
            </span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="hero-title" style={{ color: '#FAF7F2', marginBottom: '1.5rem' }}>
            Móveis Sob Medida Que <span className="text-gold-gradient">Transformam</span> Seus Espaços
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 'clamp(1.05rem, 1.8vw, 1.3rem)',
            color: '#D8CCBA',
            lineHeight: 1.6,
            fontWeight: '300',
            maxWidth: '720px',
            marginBottom: '2.5rem'
          }}>
            Design autoral, matérias-primas nobres e precisão milimétrica. Desenvolvemos projetos exclusivos em 3D fotorrealista para residências e espaços corporativos de alto padrão.
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: 'clamp(2rem, 3.5vw, 3rem)'
          }}>
            <button
              onClick={onOpenQuoteModal}
              className="btn-luxury-primary"
              style={{
                fontSize: '1rem',
                padding: '1.05rem 2.2rem'
              }}
            >
              <span>Solicitar Orçamento</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => scrollToSection('#projetos')}
              className="btn-luxury-outline"
              style={{
                fontSize: '1rem',
                padding: '1.05rem 2rem'
              }}
            >
              <span>Ver Portfólio de Obras</span>
            </button>
          </div>
        </div>

        {/* Floating Trust Metrics Bar */}
        <div
          style={{
            backgroundColor: 'rgba(28, 21, 18, 0.85)',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            backdropFilter: 'blur(16px)',
            borderRadius: '12px',
            padding: 'clamp(1.2rem, 2.5vw, 1.6rem) clamp(1rem, 3vw, 2rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
            gap: 'clamp(1rem, 2vw, 1.5rem)',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.5)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '8px',
              backgroundColor: 'rgba(184, 115, 51, 0.18)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Award size={22} color="#E5C378" />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-accent)', fontSize: '1.35rem', fontWeight: '700', color: '#FAF7F2' }}>
                15+ Anos
              </div>
              <div style={{ fontSize: '0.8rem', color: '#A89E92', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                De Tradição & Excelência
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '8px',
              backgroundColor: 'rgba(184, 115, 51, 0.18)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <CheckCircle2 size={22} color="#E5C378" />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-accent)', fontSize: '1.35rem', fontWeight: '700', color: '#FAF7F2' }}>
                +1.200
              </div>
              <div style={{ fontSize: '0.8rem', color: '#A89E92', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Ambientes Entregues
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '8px',
              backgroundColor: 'rgba(184, 115, 51, 0.18)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <ShieldCheck size={22} color="#E5C378" />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-accent)', fontSize: '1.35rem', fontWeight: '700', color: '#FAF7F2' }}>
                5 Anos
              </div>
              <div style={{ fontSize: '0.8rem', color: '#A89E92', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Garantia Estrutural Total
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '8px',
              backgroundColor: 'rgba(184, 115, 51, 0.18)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Sparkles size={22} color="#E5C378" />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-accent)', fontSize: '1.35rem', fontWeight: '700', color: '#FAF7F2' }}>
                100% Sob Medida
              </div>
              <div style={{ fontSize: '0.8rem', color: '#A89E92', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Design Autoral & Nobre
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Organic Curved Transition: Inside Hero section for 100% background continuity */}
      <CurveDarkToSand />
    </section>
  );
};
