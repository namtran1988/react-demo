import { withAuth } from '@/app/lib/authMiddleware';
import { NextRequest } from 'next/server';
 
async function secretGET(request: NextRequest) {
  return new Response(JSON.stringify({ secret: 'Here be dragons' }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
 
export const GET = withAuth(secretGET);