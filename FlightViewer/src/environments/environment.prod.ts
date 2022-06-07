export const environment = {
  production: true,
  services: {
    airfrance_api:`http://${window.location.hostname}:4200/api/air/v1`,
    sncf_api:`http://${window.location.hostname}:4200/api/train/v1`
  }
};

// ${window.location.hostname}