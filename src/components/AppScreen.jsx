import React from 'react';

// Recreación de la pantalla "Lectura actual" de app.cattechfuture.com (estilo actual de la app),
// con los datos de la prueba piloto. Se dibuja en código: nítida en cualquier tamaño y sin emojis.

const svg = {
  width: '1em',
  height: '1em',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true',
};

const Sprout = () => (
  <svg {...svg}><path d="M7 20h10" /><path d="M12 20v-8" /><path d="M12 12c0-4-3-6-7-6 0 4 3 6 7 6z" /><path d="M12 10c0-3.5 2.5-6 7-6 0 4-2.5 6-7 6" /></svg>
);
const Droplet = () => (
  <svg {...svg}><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" /></svg>
);
const Thermometer = () => (
  <svg {...svg}><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" /></svg>
);
const Chevron = () => (
  <svg {...svg}><polyline points="6 9 12 15 18 9" /></svg>
);
const TrendUp = () => (
  <svg {...svg}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
);
const TrendDown = () => (
  <svg {...svg}><polyline points="23 18 13.5 8.5 8.5 13.5 1 6" /><polyline points="17 18 23 18 23 12" /></svg>
);

const metrics = [
  {
    icon: <Droplet />,
    label: ['Humedad del suelo', 'Soil moisture'],
    value: '64',
    unit: '%',
    scale: [0, 100],
    range: [59, 81],
    avg: '70.5%',
    rangeText: '59 – 81%',
    trend: { up: true, text: '+4.0' },
  },
  {
    icon: <Thermometer />,
    label: ['Temperatura', 'Temperature'],
    value: '23',
    unit: '°C',
    scale: [0, 40],
    range: [11, 31],
    avg: '21.7 °C',
    rangeText: '11 – 31 °C',
    trend: { up: false, text: '−2.0' },
  },
];

const pct = (v, [min, max]) => `${((v - min) / (max - min)) * 100}%`;

const AppScreen = ({ t, label }) => (
  <div className="app-screen" role={label ? 'img' : undefined} aria-label={label}>
    <div className="app-screen-body">
      <div className="app-statusbar" aria-hidden="true">
        <span>16:48</span>
        <span className="app-statusbar-icons">
          <i /><i /><i />
          <b />
        </span>
      </div>
  
      <div className="app-header">
        <span className="app-logo"><Sprout /></span>
        <span className="app-title">{t('Sistema de Monitoreo', 'Monitoring System')}</span>
      </div>
  
      <div className="app-select">
        <span>{t('Invernadero Principal · Tomates', 'Main Greenhouse · Tomatoes')}</span>
        <Chevron />
      </div>
  
      <div className="app-section-head">
        <span>{t('Lectura actual', 'Current reading')}</span>
        <span className="app-live"><i />{t('En vivo · 16:48', 'Live · 16:48')}</span>
      </div>
  
      {metrics.map((m) => {
        const value = Number(m.value);
        return (
          <div className="app-card" key={m.label[0]}>
            <div className="app-card-head">
              <span className="app-card-icon">{m.icon}</span>
              <span className="app-card-label">{t(...m.label)}</span>
              <span className="app-pill">{t('Óptimo', 'Optimal')}</span>
            </div>
            <div className="app-value">
              {m.value}<small>{m.unit}</small>
            </div>
            <div className="app-range" aria-hidden="true">
              <span
                className="app-range-band"
                style={{ left: pct(m.range[0], m.scale), right: `calc(100% - ${pct(m.range[1], m.scale)})` }}
              />
              <span className="app-range-dot" style={{ left: pct(value, m.scale) }} />
            </div>
            <div className="app-stats">
              <span>
                <small>{t('Prom. 24 h', '24 h avg')}</small>
                {m.avg}
              </span>
              <span>
                <small>{t('Rango', 'Range')}</small>
                {m.rangeText}
              </span>
              <span className={m.trend.up ? 'app-trend-up' : 'app-trend-down'}>
                <small>{t('Tendencia', 'Trend')}</small>
                {m.trend.up ? <TrendUp /> : <TrendDown />} {m.trend.text}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default AppScreen;
