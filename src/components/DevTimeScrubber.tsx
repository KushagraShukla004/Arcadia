interface Props {
  value: number;
  onChange: (h: number) => void;
}

export function DevTimeScrubber({ value, onChange }: Props) {
  if (!import.meta.env.DEV) return null;

  const hh = String(Math.floor(value)).padStart(2, '0');
  const mm = String(Math.round((value % 1) * 60)).padStart(2, '0');

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999,
        background: 'rgba(0,0,0,0.55)',
        padding: '6px 16px',
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        color: 'white',
        fontFamily: 'monospace',
        fontSize: 12,
        userSelect: 'none',
      }}
    >
      <span style={{ opacity: 0.6 }}>time</span>
      <input
        type="range"
        min={0}
        max={24}
        step={0.25}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        style={{ width: 180, cursor: 'pointer' }}
      />
      <span style={{ minWidth: 40 }}>{hh}:{mm}</span>
    </div>
  );
}
