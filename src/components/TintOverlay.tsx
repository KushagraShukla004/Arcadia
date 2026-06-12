import { useTimeOfDay } from '../hooks/useTimeOfDay';

interface Props {
  overrideHour?: number;
}

export function TintOverlay({ overrideHour }: Props) {
  const { r, g, b, a } = useTimeOfDay(overrideHour);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: `rgba(${r},${g},${b},${a})`,
        mixBlendMode: 'soft-light',
        transition: 'background-color 2s linear',
        pointerEvents: 'none',
        zIndex: 1000,
      }}
    />
  );
}
