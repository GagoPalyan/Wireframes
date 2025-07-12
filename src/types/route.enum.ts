export const RouteEnum = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
} as const

export type RouteEnum = typeof RouteEnum[keyof typeof RouteEnum]
