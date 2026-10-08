import React, { useState, useEffect } from 'react';
import { X, Send, Sparkles, CheckCircle2, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/marcenariaData';
import { WhatsAppIcon } from './WhatsAppFloat';

export const QuoteModal = ({ isOpen, onClose, initialService = '' }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState(initialService || 'Cozinha Gourmet');
  const [hasPlant, setHasPlant] = useState('Tenho planta/projeto 3D');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setProjectType(initialService);
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `*SOLICITAÇÃO DE ORÇAMENTO DETALHADO - AMB DESIGN*\n\n` +
      `👤 *Nome:* ${name}\n` +
      `📱 *WhatsApp:* ${phone}\n` +
      `✉️ *E-mail:* ${email || 'Não informado'}\n` +
      `🏠 *Ambiente de Interesse:* ${projectType}\n` +
      `📐 *Possui Projeto/Planta:* ${hasPlant}\n` +
      `📝 *Observações:* ${notes || 'Sem observações adicionais'}`;

    const url = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(10, 7, 5, 0.88)',
        backdropFilter: 'blur(16px)',
        zIndex: 110,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#1C1512',
          border: '1px solid rgba(212, 175, 55, 0.35)',
          borderRadius: '12px',
          maxWidth: '560px',
          width: '100%',
          maxHeight: '92vh',
          overflowY: 'auto',
          boxShadow: '0 25px 70px rgba(0, 0, 0, 0.85)',
          position: 'relative',
          padding: '2.5rem 2rem',
          color: '#FAF7F2'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar Janela"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#FAF7F2',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              backgroundColor: 'rgba(37, 211, 102, 0.15)',
              border: '1px solid rgba(37, 211, 102, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto'
            }}>
              <CheckCircle2 size={32} color="#25D366" />
            </div>

            <h3 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-display)', marginBottom: '0.75rem', color: '#FAF7F2' }}>
              Solicitação Encaminhada!
            </h3>

            <p style={{ fontSize: '0.95rem', color: '#C8BFB5', lineHeight: 1.6, marginBottom: '2rem' }}>
              Seu briefing foi estruturado e enviado ao nosso canal exclusivo de atendimento no WhatsApp. Nosso projetista técnico entrará em contato em breve.
            </p>

            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="btn-luxury-primary"
              style={{ width: '100%', padding: '0.9rem' }}
            >
              <span>Concluir e Fechar</span>
            </button>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Sparkles size={16} color="#E5C378" />
              <span style={{
                fontSize: '0.75rem',
                fontFamily: 'var(--font-accent)',
                letterSpacing: '0.14em',
                color: '#E5C378',
                textTransform: 'uppercase',
                fontWeight: '600'
              }}>
                Atendimento Personalizado
              </span>
            </div>

            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.85rem',
              color: '#FAF7F2',
              marginBottom: '0.5rem',
              lineHeight: 1.2
            }}>
              Solicitar Orçamento Sob Medida
            </h3>

            <p style={{ fontSize: '0.88rem', color: '#A89E92', marginBottom: '1.75rem', lineHeight: 1.5 }}>
              Preencha os campos abaixo para receber uma análise técnica preliminar com amostras e prazos.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: '#C8BFB5', marginBottom: '0.35rem', fontWeight: '500' }}>
                  Seu Nome *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Dra. Mariana Vasconcelos"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    backgroundColor: 'rgba(14, 10, 8, 0.85)',
                    border: '1px solid rgba(212, 175, 55, 0.25)',
                    borderRadius: '5px',
                    color: '#FAF7F2',
                    fontFamily: 'inherit',
                    fontSize: '16px'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: '#C8BFB5', marginBottom: '0.35rem', fontWeight: '500' }}>
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(11) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      backgroundColor: 'rgba(14, 10, 8, 0.85)',
                      border: '1px solid rgba(212, 175, 55, 0.25)',
                      borderRadius: '5px',
                      color: '#FAF7F2',
                      fontFamily: 'inherit',
                      fontSize: '16px'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: '#C8BFB5', marginBottom: '0.35rem', fontWeight: '500' }}>
                    E-mail
                  </label>
                  <input
                    type="email"
                    placeholder="email@exemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      backgroundColor: 'rgba(14, 10, 8, 0.85)',
                      border: '1px solid rgba(212, 175, 55, 0.25)',
                      borderRadius: '5px',
                      color: '#FAF7F2',
                      fontFamily: 'inherit',
                      fontSize: '16px'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: '#C8BFB5', marginBottom: '0.35rem', fontWeight: '500' }}>
                  Ambiente Principal
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    backgroundColor: 'rgba(14, 10, 8, 0.85)',
                    border: '1px solid rgba(212, 175, 55, 0.25)',
                    borderRadius: '5px',
                    color: '#FAF7F2',
                    fontFamily: 'inherit',
                    fontSize: '16px'
                  }}
                >
                  <option value="Cozinha Gourmet & Ilha">Cozinha Gourmet & Ilha</option>
                  <option value="Suíte Master & Closet Planejado">Suíte Master & Closet Planejado</option>
                  <option value="Living & Home Theater Ripado">Living & Home Theater Ripado</option>
                  <option value="Varanda Gourmet Integrada">Varanda Gourmet Integrada</option>
                  <option value="Escritório / Corporativo">Escritório / Corporativo</option>
                  <option value="Banheiros & Lavabos de Luxo">Banheiros & Lavabos de Luxo</option>
                  <option value="Apartamento / Casa Completa">Apartamento / Casa Completa</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: '#C8BFB5', marginBottom: '0.35rem', fontWeight: '500' }}>
                  Já possui projeto de arquitetura ou planta?
                </label>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  {['Sim, projeto pronto', 'Tenho apenas a planta', 'Preciso criar do zero'].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setHasPlant(opt)}
                      style={{
                        padding: '0.5rem 0.9rem',
                        borderRadius: '4px',
                        fontSize: '0.82rem',
                        cursor: 'pointer',
                        border: hasPlant === opt ? '1px solid #D4AF37' : '1px solid rgba(255, 255, 255, 0.12)',
                        backgroundColor: hasPlant === opt ? 'rgba(212, 175, 55, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                        color: hasPlant === opt ? '#E5C378' : '#C8BFB5'
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: '#C8BFB5', marginBottom: '0.35rem', fontWeight: '500' }}>
                  Observações ou Requisitos
                </label>
                <textarea
                  rows={2}
                  placeholder="Ex: Gostaria de usar lâmina de freijó e portas com vidro reflecta bronze..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    backgroundColor: 'rgba(14, 10, 8, 0.85)',
                    border: '1px solid rgba(212, 175, 55, 0.25)',
                    borderRadius: '5px',
                    color: '#FAF7F2',
                    fontFamily: 'inherit',
                    fontSize: '16px',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-luxury-primary"
                style={{
                  width: '100%',
                  padding: '0.95rem',
                  fontSize: '0.98rem',
                  marginTop: '0.5rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  justifyContent: 'center'
                }}
              >
                <WhatsAppIcon size={18} color="#120D0B" />
                <span>Enviar Orçamento Direto no WhatsApp</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
