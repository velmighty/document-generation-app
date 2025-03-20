import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import prisma from '@/lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, password, name, plan } = req.body;

    // Sprawdź, czy użytkownik już istnieje
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ message: 'Użytkownik z tym adresem email już istnieje' });
    }

    // Zahaszuj hasło
    const hashedPassword = await bcrypt.hash(password, 10);

    // Utwórz użytkownika
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    // Utwórz subskrypcję
    if (plan) {
      await prisma.subscription.create({
        data: {
          userId: user.id,
          plan,
          status: 'active',
          endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 dni
        },
      });
    }

    return res.status(201).json({
      message: 'Użytkownik został zarejestrowany',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (error) {
    console.error('Błąd rejestracji:', error);
    return res.status(500).json({ message: 'Wystąpił błąd podczas rejestracji' });
  }
}
