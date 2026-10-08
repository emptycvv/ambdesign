import React, { useState } from 'react';
import { Sparkles, Eye, ArrowUpRight, MapPin, Layers } from 'lucide-react';
import { PROJETOS_DATA } from '../data/marcenariaData';

export const ProjetosGaleria = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Todos os Projetos' },
    { id: 'cozinhas', label: 'Cozinhas & Gourmet' },
    { id: 'living', label: 'Living & Painéis Ripados' },
    { id: 'closets', label: 'Dormitórios & Closets' },
    { id: 'corporativo', label: 'Corporativo & Outros' }
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJETOS_DATA
    : PROJETOS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projetos"
      className="section-sand"
      style={{
        paddingTop: '4rem',
        paddingBottom: '5.5rem',
        position: 'relative'
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem auto' }}>
          <span className="section-subtitle">Portfólio de Obras Entregues</span>
          <span className="gold-line-accent gold-line-center" style={{ marginTop: '0.6rem' }} />
          <h2 className="section-title" style={{ color: '#1D1612', marginTop: '0.5rem', marginBottom: '1.25rem' }}>
            Galeria de Projetos Realizados
          </h2>
          <p style={{
            fontSize: '1.05rem',
            color: '#5C4E44',
            lineHeight: 1.6,
            fontWeight: '400'
          }}>
            Explore nossa curadoria de ambientes executados com excelência para clientes exigentes e escritórios renomados de arquitetura.
          </p>
        </div>

        {/* Filter Categories Chips (Modern Architectural Segmented Dock) */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 'clamp(2.5rem, 4vw, 3.5rem)'
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.4rem',
              backgroundColor: 'rgba(255, 255, 255, 0.75)',
              border: '1px solid rgba(196, 151, 103, 0.28)',
              borderRadius: '35px',
              padding: '0.35rem',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 8px 25px rgba(58, 40, 30, 0.05)'
            }}
          >
            {categories.map((cat) => {
              const count = cat.id === 'all'
                ? PROJETOS_DATA.length
                : PROJETOS_DATA.filter((p) => p.category === cat.id).length;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: '0.55rem 1.25rem',
                    borderRadius: '25px',
                    fontSize: '0.82rem',
                    fontFamily: 'var(--font-accent)',
                    fontWeight: isActive ? '600' : '500',
                    letterSpacing: '0.04em',
                    cursor: 'pointer',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    border: isActive ? '1px solid rgba(212, 175, 55, 0.45)' : '1px solid transparent',
                    background: isActive
                      ? 'linear-gradient(135deg, #221914 0%, #120D0B 100%)'
                      : 'transparent',
                    color: isActive ? '#FAF7F2' : '#68594E',
                    boxShadow: isActive ? '0 4px 15px rgba(18, 13, 11, 0.25), 0 0 10px rgba(212, 175, 55, 0.1)' : 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#1A130F';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#68594E';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  <span>{cat.label}</span>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      fontWeight: '700',
                      padding: '0.1rem 0.45rem',
                      borderRadius: '10px',
                      backgroundColor: isActive ? 'rgba(212, 175, 55, 0.22)' : 'rgba(184, 115, 51, 0.1)',
                      color: isActive ? '#E5C378' : '#8A5A35',
                      border: isActive ? '1px solid rgba(212, 175, 55, 0.3)' : '1px solid transparent'
                    }}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(1.25rem, 3vw, 2rem)'
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card-luxury-sand img-zoom-wrap project-card-item"
              style={{
                cursor: 'pointer',
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                background: 'linear-gradient(175deg, #FFFFFF 0%, #FAF8F5 65%, #F4ECE2 100%)',
                border: '1px solid rgba(196, 151, 103, 0.28)',
                boxShadow: '0 8px 25px rgba(58, 40, 30, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.95)',
                transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, border-color 0.35s ease',
                overflow: 'hidden'
              }}
              onClick={() => onSelectProject(project)}
            >
              {/* Image Container with Hover Overlay */}
              <div style={{ position: 'relative', height: '280px', width: '100%', overflow: 'hidden' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  loading="lazy"
                />

                {/* Subtle Gradient */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(0,0,0,0.04) 40%, rgba(18, 13, 11, 0.7) 100%)'
                }} />

                {/* Location Badge */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.92)',
                  border: '1px solid rgba(196, 151, 103, 0.3)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.35rem 0.8rem',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                }}>
                  <MapPin size={12} color="#945D33" />
                  <span style={{ fontSize: '0.74rem', fontWeight: '600', color: '#3A281E', fontFamily: 'var(--font-accent)' }}>
                    {project.location}
                  </span>
                </div>

                {/* Quick View Button Hint */}
                <div style={{
                  position: 'absolute',
                  bottom: '0.9rem',
                  right: '0.9rem',
                  backgroundColor: 'rgba(18, 13, 11, 0.85)',
                  border: '1px solid rgba(212, 175, 55, 0.4)',
                  color: '#FAF7F2',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.74rem',
                  fontWeight: '600',
                  fontFamily: 'var(--font-accent)',
                  letterSpacing: '0.04em',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)'
                }}>
                  <Eye size={13} color="#E5C378" />
                  <span>Ver Detalhes</span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div style={{
                padding: '1.6rem 1.6rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1
              }}>
                <div>
                  <div style={{
                    marginBottom: '0.55rem'
                  }}>
                    <span style={{
                      fontSize: '0.74rem',
                      fontFamily: 'var(--font-accent)',
                      color: '#9E6738',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      fontWeight: '600',
                      display: 'inline-block'
                    }}>
                      {project.categoryLabel}
                    </span>
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.28rem',
                    color: '#1A130F',
                    lineHeight: 1.3,
                    marginBottom: '0.75rem',
                    fontWeight: '600'
                  }}>
                    {project.title}
                  </h3>

                  <p style={{
                    fontSize: '0.9rem',
                    color: '#55463D',
                    lineHeight: 1.6,
                    marginBottom: '1.25rem',
                    fontWeight: '400'
                  }}>
                    {project.description}
                  </p>
                </div>

                {/* Materials Footer */}
                <div style={{
                  borderTop: '1px solid rgba(196, 151, 103, 0.2)',
                  paddingTop: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <Layers size={14} color="#945D33" style={{ flexShrink: 0 }} />
                  <span style={{
                    fontSize: '0.78rem',
                    color: '#75665C',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}>
                    {project.materials}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
