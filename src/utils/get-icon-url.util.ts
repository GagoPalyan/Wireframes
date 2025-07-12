const getIconUrl = (icon?: string) => {
  return icon ? `url('/src/assets/icons/${icon}.svg')` : '';
};

export { getIconUrl };