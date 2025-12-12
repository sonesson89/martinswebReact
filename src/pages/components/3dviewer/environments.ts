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
    path: 'https://storage.googleapis.com/donmccurdy-static/venice_sunset_1k.exr',
    format: '.exr',
  },
  FootprintCourt: {
    id: 'footprint-court',
    name: 'Footprint Court (HDR Labs)',
    path: 'https://storage.googleapis.com/donmccurdy-static/footprint_court_2k.exr',
    format: '.exr',
  },
} as const satisfies Record<string, Environment>;
