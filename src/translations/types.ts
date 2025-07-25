export interface Translation {
  nav: {
    about: string;
    services: string;
    differentials: string;
    contact: string;
    cta: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
  };
  about: {
    title: string;
    description: string;
    experience: string;
    projects: string;
    clients: string;
    countries: string;
  };
  services: {
    title: string;
    description: string;
    basicProjects: {
      title: string;
      description: string;
    };
    accessStudies: {
      title: string;
      description: string;
    };
    preOperational: {
      title: string;
      description: string;
    };
    r2Reports: {
      title: string;
      description: string;
    };
    sgbdit: {
      title: string;
      description: string;
    };
    renewableModeling: {
      title: string;
      description: string;
    };
  };
  values: {
    title: string;
    description: string;
    mission: {
      title: string;
      description: string;
    };
    vision: {
      title: string;
      description: string;
    };
    values: {
      title: string;
      description: string;
    };
  };
  contact: {
    title: string;
    description: string;
    form: {
      name: string;
      email: string;
      phone: string;
      message: string;
      submit: string;
    };
  };
  footer: {
    company: {
      name: string;
      description: string;
    };
    links: {
      title: string;
      privacy: string;
      terms: string;
    };
    languages: {
      title: string;
    };
    social: string;
    copyright: string;
  };
}
