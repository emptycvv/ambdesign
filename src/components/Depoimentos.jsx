import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { DEPOIMENTOS_DATA } from '../data/marcenariaData';

export const Depoimentos = () => {
  return (
    <section
      className="section-sand"
      style={{
        paddingTop: '4rem',
        paddingBottom: '5rem',
        position: 'relative'
      }}
    >
      <div className="container-custom">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <span className="section-subtitle">A Opinião de Quem Confia na AMB Design</span>
          <span className="gold-line-accent gold-line-center" style={{ marginTop: '0.6rem' }} />
          <h2 className="section-title" style={{ color: '#1D1612', marginTop: '0.5rem', marginBottom: '1.25rem' }}>
            Depoimentos de Clientes & Arquitetos
          </h2>
          <p style={{
            fontSize: '1.05rem',
            color: '#5C4E44',
            lineHeight: 1.6,
            fontWeight: '400'
          }}>
            A satisfação em cada entrega é nosso maior cartão de visitas. Confira relatos de quem transformou seus espaços com nossa marcenaria.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}
        >
          {DEPOIMENTOS_DATA.map((dep) => (
            <div
              key={dep.id}
              className="card-luxury-sand"
              style={{
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: '10px'
              }}
            >
              <div>
                {/* Quote Icon & Stars */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(184, 115, 51, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Quote size={20} color="#945D33" />
                  </div>

                  <div style={{ display: 'flex', gap: '3px' }}>
                    {[...Array(dep.rating)].map((_, i) => (
                      <Star key={i} size={17} fill="#D4AF37" color="#D4AF37" />
                    ))}
                  </div>
                </div>

                <p style={{
                  fontSize: '0.96rem',
                  color: '#4A3C34',
                  lineHeight: 1.7,
                  fontStyle: 'italic',
                  marginBottom: '2rem'
                }}>
                  "{dep.text}"
                </p>
              </div>

              <div style={{
                borderTop: '1px solid rgba(44, 34, 27, 0.08)',
                paddingTop: '1.25rem'
              }}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  color: '#1E1612'
                }}>
                  {dep.name}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#8E7D73', marginTop: '0.15rem' }}>
                  {dep.role}
                </div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  marginTop: '0.5rem',
                  fontSize: '0.75rem',
                  color: '#945D33',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  <CheckCircle size={12} color="#945D33" />
                  <span>{dep.project}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
