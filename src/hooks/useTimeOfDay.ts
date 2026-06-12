import { useState, useEffect } from 'react';
import { lerp } from '../lib/lerp';

export interface RGBA { r: number; g: number; b: number; a: number }

const STOPS: { h: number; rgba: [number, number, number, number] }[] = [
  { h: 5,  rgba: [255, 180, 140, 0.25] },
  { h: 9,  rgba: [255, 255, 255, 0.00] },
  { h: 17, rgba: [255, 150,  70, 0.20] },
  { h: 20, rgba: [ 60,  40, 110, 0.30] },
  { h: 23, rgba: [ 10,  20,  60, 0.45] },
];

const NIGHT: RGBA = { r: 10, g: 20, b: 60, a: 0.45 };

function getTint(hour: number): RGBA {
  if (hour <= STOPS[0].h || hour >= STOPS[STOPS.length - 1].h) return NIGHT;

  for (let i = 0; i < STOPS.length - 1; i++) {
    const lo = STOPS[i];
    const hi = STOPS[i + 1];
    if (hour >= lo.h && hour <= hi.h) {
      const t = (hour - lo.h) / (hi.h - lo.h);
      return {
        r: Math.round(lerp(lo.rgba[0], hi.rgba[0], t)),
        g: Math.round(lerp(lo.rgba[1], hi.rgba[1], t)),
        b: Math.round(lerp(lo.rgba[2], hi.rgba[2], t)),
        a: lerp(lo.rgba[3], hi.rgba[3], t),
      };
    }
  }
  return NIGHT;
}

function getHour(): number {
  const now = new Date();
  return now.getHours() + now.getMinutes() / 60;
}

export function useTimeOfDay(overrideHour?: number): RGBA {
  const [tint, setTint] = useState<RGBA>(() => getTint(overrideHour ?? getHour()));

  useEffect(() => {
    if (overrideHour !== undefined) {
      setTint(getTint(overrideHour));
      return;
    }
    const update = () => setTint(getTint(getHour()));
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, [overrideHour]);

  return tint;
}
