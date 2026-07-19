const getIconUrl = (icon?: string) => {
	return icon ? `url("/Wireframes/icons/${icon}.svg")` : '';
};

export { getIconUrl };
