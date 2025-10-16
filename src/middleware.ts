import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the user is trying to access admin dashboard
  if (pathname.startsWith('/admin/dashboard')) {
    // In a real app, you would check for a proper JWT token or session
    // For now, we'll just check if the user has the adminAuth in localStorage
    // This is a client-side check, so we'll handle it in the component instead
    
    // You could also check for a cookie or header here
    const adminAuth = request.cookies.get('adminAuth');
    
    if (!adminAuth) {
      // Redirect to admin login if not authenticated
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/dashboard/:path*',
  ],
};
