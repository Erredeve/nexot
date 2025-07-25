export const IMAGES = {
  hero: {
    background: '/images/hero/background.jpg',
    overlay: '/images/hero/overlay.png',
  },
  services: {
    basicProjects: '/images/services/basic-projects.jpg',
    accessStudies: '/images/services/access-studies.jpg',
    preOperational: '/images/services/pre-operational.jpg',
    r2Reports: '/images/services/r2-reports.jpg',
    sgbdit: '/images/services/sgbdit.jpg',
    renewableModeling: '/images/services/renewable-modeling.jpg',
  },
  about: {
    team: '/images/about/team.jpg',
    office: '/images/about/office.jpg',
  },
  logos: {
    light: '/images/logos/logo-light.svg',
    dark: '/images/logos/logo-dark.svg',
    symbol: '/images/logos/symbol.svg',
  },
} as const;

export const VIDEOS = {
  hero: {
    background: '/videos/hero-background.mp4',
  },
} as const;

// Tipos para garantir type-safety ao usar os assets
export type ImagePath = typeof IMAGES[keyof typeof IMAGES][keyof typeof IMAGES[keyof typeof IMAGES]];
export type VideoPath = typeof VIDEOS[keyof typeof VIDEOS][keyof typeof VIDEOS[keyof typeof VIDEOS]];
