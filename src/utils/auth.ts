// Admin authentication utilities

export const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'admin123'
};

export const isAdminAuthenticated = (): boolean => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('adminAuth') === 'true';
};

export const loginAdmin = (username: string, password: string): boolean => {
  if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
    localStorage.setItem('adminAuth', 'true');
    return true;
  }
  return false;
};

export const logoutAdmin = (): void => {
  localStorage.removeItem('adminAuth');
};

export const requireAuth = (): boolean => {
  if (!isAdminAuthenticated()) {
    if (typeof window !== 'undefined') {
      window.location.href = '/admin';
    }
    return false;
  }
  return true;
};
