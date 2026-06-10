export interface Layer {
  id: string;
  depth: number;
  src?: string;
}

export const LAYERS: Layer[] = [
  { id: "sky",        depth: 0.00 },
  { id: "mountains",  depth: 0.04 },
  { id: "castle",     depth: 0.08 },
  { id: "town",       depth: 0.14 },
  { id: "foreground", depth: 0.25 },
];
