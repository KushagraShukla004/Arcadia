import React from 'react';
import { LAYERS, type Layer } from './layers';

const layerStyle: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
};

function SkyPlaceholder() {
  return (
    <div style={{
      ...layerStyle,
      background: 'linear-gradient(to bottom, #0d1b3e 0%, #1a3a6e 50%, #2e6fa8 100%)',
    }} />
  );
}

function MountainsPlaceholder() {
  return (
    <svg style={layerStyle} viewBox="0 0 1440 900" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
      <polygon points="0,900 0,600 180,340 360,560 520,280 700,520 860,300 1040,540 1200,360 1440,500 1440,900" fill="#1e2d40" />
    </svg>
  );
}

function CastlePlaceholder() {
  return (
    <svg style={layerStyle} viewBox="0 0 1440 900" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
      {/* main keep */}
      <rect x="620" y="480" width="200" height="260" fill="#1a1f2e" />
      {/* battlements */}
      <rect x="610" y="460" width="30" height="30" fill="#1a1f2e" />
      <rect x="650" y="460" width="30" height="30" fill="#1a1f2e" />
      <rect x="690" y="460" width="30" height="30" fill="#1a1f2e" />
      <rect x="730" y="460" width="30" height="30" fill="#1a1f2e" />
      <rect x="770" y="460" width="30" height="30" fill="#1a1f2e" />
      <rect x="790" y="460" width="30" height="30" fill="#1a1f2e" />
      {/* towers */}
      <rect x="580" y="500" width="80" height="240" fill="#151a26" />
      <rect x="780" y="500" width="80" height="240" fill="#151a26" />
      {/* tower tops */}
      <rect x="572" y="478" width="96" height="28" fill="#151a26" />
      <rect x="772" y="478" width="96" height="28" fill="#151a26" />
      {/* gate */}
      <rect x="685" y="630" width="70" height="110" fill="#0d1018" />
    </svg>
  );
}

function TownPlaceholder() {
  const buildings = [
    { x: 0,    w: 120, h: 140 },
    { x: 110,  w: 90,  h: 110 },
    { x: 190,  w: 140, h: 160 },
    { x: 320,  w: 80,  h: 100 },
    { x: 390,  w: 110, h: 130 },
    { x: 490,  w: 130, h: 150 },
    { x: 610,  w: 70,  h: 90  },
    { x: 670,  w: 100, h: 120 },
    { x: 760,  w: 150, h: 170 },
    { x: 900,  w: 90,  h: 110 },
    { x: 980,  w: 120, h: 140 },
    { x: 1090, w: 80,  h: 100 },
    { x: 1160, w: 140, h: 155 },
    { x: 1290, w: 100, h: 125 },
    { x: 1380, w: 120, h: 140 },
  ];
  return (
    <svg style={layerStyle} viewBox="0 0 1440 900" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
      {buildings.map((b, i) => (
        <rect key={i} x={b.x} y={900 - b.h} width={b.w} height={b.h} fill={i % 2 === 0 ? '#1c2535' : '#212b3a'} />
      ))}
    </svg>
  );
}

function ForegroundPlaceholder() {
  return (
    <svg style={layerStyle} viewBox="0 0 1440 900" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
      <polygon points="0,900 0,760 120,720 280,780 420,700 560,750 700,710 840,760 980,720 1120,770 1260,730 1440,760 1440,900" fill="#0f1820" />
    </svg>
  );
}

const PLACEHOLDERS: Record<string, () => React.ReactElement> = {
  sky:        SkyPlaceholder,
  mountains:  MountainsPlaceholder,
  castle:     CastlePlaceholder,
  town:       TownPlaceholder,
  foreground: ForegroundPlaceholder,
};

function LayerEl({ layer, index }: { layer: Layer; index: number }) {
  const style: React.CSSProperties = {
    ...layerStyle,
    zIndex: index,
  };

  if (layer.src) {
    return (
      <div style={style}>
        <img src={layer.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    );
  }

  const Placeholder = PLACEHOLDERS[layer.id];
  if (!Placeholder) return null;

  return (
    <div style={style}>
      <Placeholder />
    </div>
  );
}

export function Scene() {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {LAYERS.map((layer, i) => (
        <LayerEl key={layer.id} layer={layer} index={i} />
      ))}
    </div>
  );
}
