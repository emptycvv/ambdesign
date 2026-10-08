import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Sparkles, Building, Home, Shield, RefreshCw } from 'lucide-react';
import { COMPANY_INFO } from '../data/marcenariaData';
import { WhatsAppIcon } from './WhatsAppFloat';

export const SimuladorOrcamento = () => {
  const [selectedRooms, setSelectedRooms] = useState(['Cozinha Gourmet']);
  const [selectedFinish, setSelectedFinish] = useState('Lâmina Natural de Freijó + Laca');
  const [selectedHardware, setSelectedHardware] = useState(['Amortecimento Soft-Close Blum', 'Iluminação LED Oculta']);
  const [timeline, setTimeline] = useState('Em 30 a 60 dias (Imóvel em fase de entrega)');
  const [hasArchitectProject, setHasArchitectProject] = useState('Sim, já tenho projeto pronto');
  const [clientName, setClientName] = useState('');
  const [clientNeighborhood, setClientNeighborhood] = useState('');

  const roomOptions = [
    'Cozinha Gourmet',
    'Suíte Master & Closet',
    'Living & Home Theater Ripado',
    'Varanda Integrada / Churrasqueira',
    'Escritório / Home Office',
    'Banheiros & Lavabo',
    'Residência / Apartamento Inteiro'
  ];

  const finishOptions = [
    'Lâmina Natural Nobre (Freijó / Nogueira / Carvalho)',
    'Laca Acetinada Poliuretânica Italiana',
    'MDF Premium Naval com Texturas Exclusivas',
    'Combinação Mista (Madeira Natural + Laca + Vidros)'
  ];

  const hardwareOptions = [
    'Amortecimento Soft-Close Blum / Häfele',
    'Iluminação LED Oculta 3000K',
    'Portas com Perfis Bronze & Vidro Reflecta',
    'Gavetas com Divisores Forrados em Veludo',
    'Fechos Toque (Tip-On) Invisíveis'
  ];

  const timelineOptions = [
    'Imediato (Urgente / Imóvel Pronto)',
    'Em 30 a 60 dias (Imóvel em fase de entrega)',
    'Planejando para 3 a 6 meses',
    'Em fase de planta / reforma geral'
  ];

  const toggleRoom = (room) => {
    if (selectedRooms.includes(room)) {
      if (selectedRooms.length > 1) {
        setSelectedRooms(selectedRooms.filter((r) => r !== room));
      }
    } else {
      setSelectedRooms([...selectedRooms, room]);
    }
  };

  const toggleHardware = (hw) => {
    if (selectedHardware.includes(hw)) {
      setSelectedHardware(selectedHardware.filter((h) => h !== hw));
    } else {
      setSelectedHardware([...selectedHardware, hw]);
    }
  };

  const handleGenerateWhatsApp = (e) => {
    e.preventDefault();
    const roomsStr = selectedRooms.join(', ');
    const hwStr = selectedHardware.join(', ');

    let msg = `*SOLICITAÇÃO DE ORÇAMENTO EXCLUSIVO - AMB DESIGN*\n\n`;
    if (clientName) msg += `👤 *Nome:* ${clientName}\n`;
    if (clientNeighborhood) msg += `📍 *Região / Bairro:* ${clientNeighborhood}\n`;
    msg += `🏠 *Ambientes:* ${roomsStr}\n`;
    msg += `🪵 *Acabamento Principal:* ${selectedFinish}\n`;
    msg += `⚙️ *Acessórios & Ferragens:* ${hwStr || 'Padrão'}\n`;
    msg += `📐 *Projeto Existente:* ${hasArchitectProject}\n`;
    msg += `⏳ *Previsão de Início:* ${timeline}\n\n`;
    msg += `Gostaria de agendar uma consultoria técnica e receber um orçamento detalhado.`;

    const url = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <section
      id="simulador"
      className="section-sand"
      style={{
        paddingTop: '4.5rem',
        paddingBottom: '5.5rem',
        position: 'relative'
      }}
    >
      <div className="container-custom">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem auto' }}>
          <span className="section-subtitle">Simulador de Projeto</span>
          <span className="gold-line-accent gold-line-center" style={{ marginTop: '0.6rem' }} />
          <h2 className="section-title" style={{ color: '#1D1612', marginTop: '0.5rem', marginBottom: '1.25rem' }}>
            Planeje Seu Projeto Sob Medida
          </h2>
          <p style={{
            fontSize: '1.05rem',
            color: '#5C4E44',
            lineHeight: 1.6,
            fontWeight: '400'
          }}>
            Selecione os ambientes, acabamentos e detalhes que você deseja. Geramos uma especificação preliminar para agilizar sua consultoria com nosso projetista sênior.
          </p>
        </div>

        {/* Simulator Card Container */}
        <div
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            backgroundColor: '#FFFFFF',
            borderRadius: '12px',
            border: '1px solid rgba(184, 115, 51, 0.25)',
            boxShadow: '0 15px 45px rgba(58, 40, 30, 0.09)',
            padding: 'clamp(1.25rem, 3.5vw, 2.5rem)',
            position: 'relative'
          }}
        >
          <form onSubmit={handleGenerateWhatsApp}>
            {/* Step 1: Rooms */}
            <div style={{ marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <span style={{
                  display: 'inline-block',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#945D33',
                  boxShadow: '0 0 8px rgba(148, 93, 51, 0.4)'
                }}></span>
                <h3 style={{ fontSize: '1.2rem', color: '#1E1612', margin: 0 }}>
                  Quais ambientes você deseja planejar? <span style={{ fontSize: '0.85rem', color: '#8E8277', fontWeight: 'normal' }}>(Selecione um ou mais)</span>
                </h3>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                {roomOptions.map((room) => {
                  const isSelected = selectedRooms.includes(room);
                  return (
                    <button
                      type="button"
                      key={room}
                      onClick={() => toggleRoom(room)}
                      style={{
                        padding: '0.65rem 1.15rem',
                        borderRadius: '6px',
                        border: isSelected ? '1px solid #945D33' : '1px solid rgba(44, 34, 27, 0.15)',
                        backgroundColor: isSelected ? 'rgba(184, 115, 51, 0.12)' : '#FDFCFA',
                        color: isSelected ? '#804A26' : '#5C4E44',
                        fontWeight: isSelected ? '600' : '400',
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {isSelected && <Check size={14} color="#945D33" />}
                      <span>{room}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Finishes */}
            <div style={{ marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <span style={{
                  display: 'inline-block',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#945D33',
                  boxShadow: '0 0 8px rgba(148, 93, 51, 0.4)'
                }}></span>
                <h3 style={{ fontSize: '1.2rem', color: '#1E1612', margin: 0 }}>
                  Qual acabamento e estilo você prefere?
                </h3>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
                gap: '0.75rem'
              }}>
                {finishOptions.map((finish) => {
                  const isSelected = selectedFinish === finish;
                  return (
                    <div
                      key={finish}
                      onClick={() => setSelectedFinish(finish)}
                      style={{
                        padding: '0.9rem 1.2rem',
                        borderRadius: '6px',
                        border: isSelected ? '2px solid #945D33' : '1px solid rgba(44, 34, 27, 0.15)',
                        backgroundColor: isSelected ? 'rgba(184, 115, 51, 0.08)' : '#FFFFFF',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        border: isSelected ? '5px solid #945D33' : '2px solid #C8BFB5',
                        backgroundColor: '#FFFFFF',
                        flexShrink: 0
                      }} />
                      <span style={{
                        fontSize: '0.88rem',
                        color: isSelected ? '#1E1612' : '#5C4E44',
                        fontWeight: isSelected ? '600' : '400'
                      }}>
                        {finish}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Hardware & Accessories */}
            <div style={{ marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <span style={{
                  display: 'inline-block',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#945D33',
                  boxShadow: '0 0 8px rgba(148, 93, 51, 0.4)'
                }}></span>
                <h3 style={{ fontSize: '1.2rem', color: '#1E1612', margin: 0 }}>
                  Acessórios e Tecnologias de Destaque
                </h3>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                {hardwareOptions.map((hw) => {
                  const isSelected = selectedHardware.includes(hw);
                  return (
                    <button
                      type="button"
                      key={hw}
                      onClick={() => toggleHardware(hw)}
                      style={{
                        padding: '0.6rem 1.1rem',
                        borderRadius: '6px',
                        border: isSelected ? '1px solid #945D33' : '1px solid rgba(44, 34, 27, 0.15)',
                        backgroundColor: isSelected ? 'rgba(184, 115, 51, 0.12)' : '#FDFCFA',
                        color: isSelected ? '#804A26' : '#5C4E44',
                        fontWeight: isSelected ? '600' : '400',
                        fontSize: '0.88rem',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {isSelected && <Check size={14} color="#945D33" />}
                      <span>{hw}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Contact & Details */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem',
              marginBottom: '2.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(44, 34, 27, 0.08)'
            }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#1E1612', marginBottom: '0.4rem' }}>
                  Seu Nome
                </label>
                <input
                  type="text"
                  placeholder="Ex: Carlos Eduardo"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '6px',
                    border: '1px solid rgba(44, 34, 27, 0.2)',
                    fontSize: '16px',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#1E1612', marginBottom: '0.4rem' }}>
                  Bairro / Cidade do Imóvel
                </label>
                <input
                  type="text"
                  placeholder="Ex: Moema, São Paulo"
                  value={clientNeighborhood}
                  onChange={(e) => setClientNeighborhood(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '6px',
                    border: '1px solid rgba(44, 34, 27, 0.2)',
                    fontSize: '16px',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#1E1612', marginBottom: '0.4rem' }}>
                  Previsão de Início
                </label>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '6px',
                    border: '1px solid rgba(44, 34, 27, 0.2)',
                    fontSize: '16px',
                    fontFamily: 'inherit',
                    backgroundColor: '#FFFFFF'
                  }}
                >
                  {timelineOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Submit Bar */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(44, 34, 27, 0.08)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Sparkles size={16} color="#945D33" />
                <span style={{ fontSize: '0.85rem', color: '#7A6B60' }}>
                  Orçamento sem compromisso com resposta rápida
                </span>
              </div>

              <button
                type="submit"
                className="btn-luxury-primary"
                style={{
                  padding: '1rem 2.2rem',
                  fontSize: '0.96rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem'
                }}
              >
                <WhatsAppIcon size={18} color="#120D0B" />
                <span>Enviar Simulação no WhatsApp</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
