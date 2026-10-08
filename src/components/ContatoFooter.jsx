import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  ArrowUp,
  Building2,
  CalendarCheck
} from 'lucide-react';
import { COMPANY_INFO, PROJETOS_DATA } from '../data/marcenariaData';

export const ContatoFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contato"
      style={{
        backgroundColor: '#0E0A08',
        color: '#D8CCBA',
        paddingTop: '4.5rem',
        paddingBottom: '2rem',
        position: 'relative',
        borderTop: '1px solid rgba(212, 175, 55, 0.15)'
      }}
    >
      <div className="container-custom">
        {/* Contact Info Header & Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            marginBottom: '4rem'
          }}
        >
          {/* Brand & Factory Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '6px',
                  background: 'linear-gradient(135deg, #2C2018 0%, #17110E 100%)',
                  border: '1px solid rgba(212, 175, 55, 0.45)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-accent)',
                    fontSize: '1.35rem',
                    fontWeight: '700',
                    color: '#E5C378'
                  }}
                >
                  A
                </span>
              </div>
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-accent)',
                    fontSize: '1.3rem',
                    fontWeight: '700',
                    letterSpacing: '0.14em',
                    color: '#FAF7F2',
                    display: 'block'
                  }}
                >
                  AMB DESIGN
                </span>
                <span
                  style={{
                    fontSize: '0.65rem',
                    letterSpacing: '0.22em',
                    color: '#C49767',
                    textTransform: 'uppercase'
                  }}
                >
                  Marcenaria Sob Medida
                </span>
              </div>
            </div>

            {/* Fábrica Própria details */}
            <div
              style={{
                backgroundColor: 'rgba(24, 18, 15, 0.6)',
                border: '1px solid rgba(212, 175, 55, 0.15)',
                borderRadius: '8px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#E5C378', fontWeight: '600', fontSize: '1rem' }}>
                <Building2 size={18} />
                <span>Fábrica Própria</span>
              </div>
              <p style={{ margin: 0, color: '#FAF7F2', fontSize: '0.95rem', lineHeight: 1.5 }}>
                {COMPANY_INFO.addressStreet}<br />
                {COMPANY_INFO.addressCity}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginTop: '0.25rem', color: '#C49767', fontSize: '0.85rem' }}>
                <CalendarCheck size={14} />
                <span>{COMPANY_INFO.addressNote}</span>
              </div>
            </div>
          </div>

          {/* Contact Direct Info */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.25rem' }}>
            <h4
              style={{
                fontSize: '1.05rem',
                color: '#FAF7F2',
                fontFamily: 'var(--font-accent)',
                letterSpacing: '0.05em',
                marginBottom: '0.25rem'
              }}
            >
              Canais de Atendimento
            </h4>

            {/* Telefone */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(212, 175, 55, 0.1)',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Phone size={18} color="#E5C378" />
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#8C8276', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block' }}>
                  Telefone / WhatsApp
                </span>
                <a
                  href={`https://wa.me/${COMPANY_INFO.phoneRaw}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: '#FAF7F2',
                    textDecoration: 'none',
                    fontWeight: '500',
                    fontSize: '1.05rem',
                    transition: 'color 0.2s'
                  }}
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>

            {/* E-mail */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(212, 175, 55, 0.1)',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Mail size={18} color="#E5C378" />
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#8C8276', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block' }}>
                  E-mail
                </span>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  style={{
                    color: '#FAF7F2',
                    textDecoration: 'none',
                    fontWeight: '500',
                    fontSize: '1.05rem',
                    transition: 'color 0.2s'
                  }}
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(212, 175, 55, 0.1)',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Instagram size={18} color="#E5C378" />
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#8C8276', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block' }}>
                  Instagram
                </span>
                <a
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: '#FAF7F2',
                    textDecoration: 'none',
                    fontWeight: '500',
                    fontSize: '1.05rem',
                    transition: 'color 0.2s'
                  }}
                >
                  {COMPANY_INFO.instagramHandle}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery / Instagram Mini Showcase (Matching user reference photo) */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '2.5rem',
            paddingBottom: '2.5rem',
            marginBottom: '1rem'
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1.25rem',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Instagram size={18} color="#E5C378" />
              <span style={{ fontSize: '0.92rem', color: '#FAF7F2', fontWeight: '500' }}>
                Siga nosso atelier no Instagram:{' '}
                <a
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#E5C378', textDecoration: 'none', fontWeight: '600' }}
                >
                  {COMPANY_INFO.instagram}
                </a>
              </span>
            </div>
            <a
              href={COMPANY_INFO.instagramUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                color: '#C49767',
                fontSize: '0.85rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem'
              }}
            >
              Ver mais bastidores e obras →
            </a>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '0.75rem'
            }}
          >
            {PROJETOS_DATA.slice(0, 6).map((proj) => (
              <div
                key={proj.id}
                className="img-zoom-wrap"
                style={{ height: '110px', borderRadius: '6px', overflow: 'hidden' }}
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Copyright & Back to Top (CNPJ removed as requested) */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.82rem',
            color: '#7A6E64'
          }}
        >
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.fullName}. Todos os direitos reservados.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span>Marcenaria Sob Medida de Luxo</span>
            <button
              onClick={scrollToTop}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                color: '#E5C378',
                padding: '0.4rem 0.8rem',
                borderRadius: '4px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.8rem',
                fontFamily: 'inherit',
                transition: 'all 0.2s'
              }}
            >
              <span>Topo</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
