import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { ensureDbConnected } from '@/lib/mongoose';
import { User } from 'db';

const SECRET = 'SECRET';

type Data = {
  token?: string,
  message?: string,
  error?: boolean,
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    await ensureDbConnected(); 
    console.log('Connected to the database');

    const { username, password, email } = req.body;
    const alreadyExists = await User.findOne({ email });

    if (!alreadyExists) {
      const newUser = new User({ username, email, password });
      await newUser.save();

      const token = jwt.sign({ username, role: 'user' }, SECRET, {
        expiresIn: '1h',
      });

      console.log('Signup success');
      res.status(200).json({ message: 'Signup Successful', token });
    } else {
      res
        .status(403)
        .json({ message: 'Cannot make more than one account with one email' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: true, message: 'Internal Server Error' });
  }
}
