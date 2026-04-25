import { NextApiRequest, NextApiResponse } from 'next'
import { signIn } from 'next-auth/react';
//import { signIn } from '@/auth'
export default async function POST(req: NextApiRequest, res: NextApiResponse) {
    // Parse the request body
    try{
      const { userName, password } = req.body;console.dir({test:"req.body", req: req.body});
      await signIn('credentials', { userName, password });
      res.status(200).json({ success: true });
    }
    catch (error) {console.dir("catch error",error);
      if (error.type === 'CredentialsSignin') {
        res.status(401).json({ error: 'Invalid credentials.' })
      } else {
        res.status(500).json({ error: 'Something went wrong.' })
      }
    }
  }