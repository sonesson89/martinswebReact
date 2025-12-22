export type Environment = {
  id: string;
  name: string;
  path: string | null;
  format?: string;
};

export const environments = {
  None: {
    id: 'none',
    name: 'None',
    path: null,
  },
  Neutral: {
    id: 'neutral',
    name: 'Neutral',
    path: null,
  },
  Venice: {
    id: 'venice-sunset',
    name: 'Venice Sunset',
    path: '/src/assets/3dmodels/environments/venice_sunset_1k.exr',
    format: '.exr',
  },
  FootprintCourt: {
    id: 'footprint-court',
    name: 'Footprint Court (HDR Labs)',
    path: '/src/assets/3dmodels/environments/footprint_court_2k.exr',
    format: '.exr',
  },
} as const satisfies Record<string, Environment>;
