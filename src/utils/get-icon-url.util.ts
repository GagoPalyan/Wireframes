const getIconUrl = (icon?: string) => {
	if (!icon) return '';

	return `url('${new URL(`../assets/icons/${icon}.svg`, import.meta.url).href}')`;
};

export { getIconUrl };
