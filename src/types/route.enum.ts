export const RouteEnum = {
	HOME: '/Wireframes/',
	LOGIN: '/Wireframes/login',
	REGISTER: '/Wireframes/register',
} as const;

export type RouteEnum = (typeof RouteEnum)[keyof typeof RouteEnum];
