import React from 'react';
import { Sparkles, Phone, ShieldCheck, Clock, UserCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/marcenariaData';
import { WhatsAppIcon } from './WhatsAppFloat';

export const CtaBanner = ({ onOpenQuoteModal }) => {
  const openWhatsApp = () => {
    const url = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent("Olá! 'Seu projeto começa aqui.' Gostaria de solicitar um orçamento para móveis sob medida com a AMB Design.")}`;
    window.open(url, '_blank');
  };

  return (
    <section
      id="orcamento"
      style={{
        position: 'relative',
        paddingTop: '6rem',
        paddingBottom: '6rem',
        backgroundColor: '#1C1512',
        backgroundImage: `
          radial-gradient(ellipse at center, rgba(184, 115, 51, 0.22) 0%, transparent 70%),
          linear-gradient(180deg, rgba(28, 21, 18, 0.88) 0%, rgba(18, 13, 11, 0.94) 100%),
          url('/9.webp')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
        overflow: 'hidden'
      }}
    >
      {/* Decorative Golden Ambient Lines */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.5), transparent)'
      }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 5 }}>
        <div style={{
          maxWidth: '840px',
          margin: '0 auto',
          textAlign: 'center',
          backgroundColor: 'rgba(22, 16, 13, 0.88)',
          border: '1px solid rgba(212, 175, 55, 0.35)',
          borderRadius: '16px',
          padding: ' clamp(2rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3.5rem)',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6), 0 0 35px rgba(212, 175, 55, 0.12)'
        }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'rgba(184, 115, 51, 0.15)',
            border: '1px solid rgba(212, 175, 55, 0.4)',
            padding: '0.4rem 1.2rem',
            borderRadius: '30px',
            marginBottom: '1.75rem'
          }}>
            <Sparkles size={14} color="#E5C378" />
            <span style={{
              fontFamily: 'var(--font-accent)',
              fontSize: '0.75rem',
              letterSpacing: '0.18em',
              color: '#F7F3EE',
              fontWeight: '600',
              textTransform: 'uppercase'
            }}>
              Consultoria & Projeto Exclusivo
            </span>
          </div>

          {/* Mandatory Text */}
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)',
            color: '#FAF7F2',
            fontWeight: '600',
            lineHeight: 1.12,
            marginBottom: '1.5rem'
          }}>
            Seu projeto começa <span className="text-gold-gradient">aqui</span>.
          </h2>

          <p style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
            color: '#D8CCBA',
            lineHeight: 1.6,
            fontWeight: '300',
            maxWidth: '680px',
            margin: '0 auto 2.5rem auto'
          }}>
            Conte-nos sua ideia ou compartilhe a planta do seu imóvel. Nossa equipe de arquitetos e projetistas especializados entrará em contato para transformar seus ambientes em obras de arte funcionais.
          </p>

          {/* Action CTAs */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '2.5rem'
          }}>
            <button
              onClick={openWhatsApp}
              className="btn-luxury-primary"
              style={{
                fontSize: '1.05rem',
                padding: '1.15rem 2.8rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}
            >
              <WhatsAppIcon size={20} color="#120D0B" />
              <span>Solicitar Orçamento no WhatsApp</span>
            </button>
          </div>

          {/* Reassurance points */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1.75rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '1.75rem',
            fontSize: '0.84rem',
            color: '#A89E92'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Clock size={15} color="#E5C378" />
              <span>Retorno em até 2 horas</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <ShieldCheck size={15} color="#E5C378" />
              <span>Garantia de 5 Anos em Contrato</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <UserCheck size={15} color="#E5C378" />
              <span>Equipe Própria do Início ao Fim</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
