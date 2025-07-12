const mainUrl = 'https://test-api.updivision.work/api';

export const authApi = {
  login: `${mainUrl}/login`,
  register: `${mainUrl}/register`,
  logout: `${mainUrl}/logout`,
};

export const productApi = {
  products: `${mainUrl}/products`,
  paginate: `${mainUrl}/products/paginate`,
};