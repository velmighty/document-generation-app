import Head from 'next/head';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { useAuth } from '@/contexts/AuthContext';

export default function Signup() {
  const router = useRouter();
  const { plan } = router.query;
  const { status } = useAuth();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Przekieruj zalogowanego użytkownika
  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/dashboard');
    }
  }, [status, router]);

  useEffect(() => {
    if (plan) {
      setSelectedPlan(plan as string);
    }
  }, [plan]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError('Hasła nie są identyczne');
      return;
    }
    
    setIsLoading(true);
    setError('');

    try {
      // Rejestracja użytkownika przez API
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
          plan: selectedPlan,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Wystąpił błąd podczas rejestracji');
      }

      // Automatyczne logowanie po rejestracji
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        setError('Rejestracja udana, ale wystąpił błąd podczas logowania. Proszę zalogować się ręcznie.');
        router.push('/login');
      } else {
        router.push('/dashboard');
      }
    } catch (err: any) {
      setError(err.message || 'Wystąpił błąd podczas rejestracji. Spróbuj ponownie.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    signIn('google', { callbackUrl: '/dashboard' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Rejestracja | DocuLegal</title>
        <meta name="description" content="Zarejestruj się i uzyskaj dostęp do DocuLegal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <Link href="/" className="text-2xl font-bold text-primary-600">DocuLegal</Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-2xl font-bold text-center mb-6 text-gray-900">Utwórz konto</h1>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="form-label">
                Imię i nazwisko
              </label>
              <input
                type="text"
                id="name"
                className="input-field"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="form-label">
                Adres e-mail
              </label>
              <input
                type="email"
                id="email"
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Hasło
              </label>
              <input
                type="password"
                id="password"
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
              />
              <p className="mt-1 text-sm text-gray-500">
                Hasło musi zawierać co najmniej 8 znaków
              </p>
            </div>
            
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="form-label">
                Potwierdź hasło
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="input-field"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="form-label">
                Wybierz plan
              </label>
              <div className="grid grid-cols-3 gap-3">
                <div 
                  className={`border rounded-md p-3 text-center cursor-pointer transition-all ${selectedPlan === 'mini' ? 'border-primary-500 bg-primary-50' : 'border-gray-300 hover:border-primary-300'}`}
                  onClick={() => setSelectedPlan('mini')}
                >
                  <div className="font-bold">Mini</div>
                  <div className="text-sm text-gray-500">29 zł/mies.</div>
                </div>
                <div 
                  className={`border rounded-md p-3 text-center cursor-pointer transition-all ${selectedPlan === 'standard' ? 'border-primary-500 bg-primary-50' : 'border-gray-300 hover:border-primary-300'}`}
                  onClick={() => setSelectedPlan('standard')}
                >
                  <div className="font-bold">Standard</div>
                  <div className="text-sm text-gray-500">59 zł/mies.</div>
                </div>
                <div 
                  className={`border rounded-md p-3 text-center cursor-pointer transition-all ${selectedPlan === 'maks' ? 'border-primary-500 bg-primary-50' : 'border-gray-300 hover:border-primary-300'}`}
                  onClick={() => setSelectedPlan('maks')}
                >
                  <div className="font-bold">Maks</div>
                  <div className="text-sm text-gray-500">99 zł/mies.</div>
                </div>
              </div>
            </div>
            
            <button
              type="submit"
              className="btn-primary w-full"
              disabled={isLoading || !selectedPlan}
            >
              {isLoading ? 'Rejestracja...' : 'Zarejestruj się'}
            </button>
            
            <div className="mt-6 text-center">
              <p className="text-gray-700">
                Masz już konto?{' '}
                <Link href="/login" className="text-primary-600 hover:text-primary-700">
                  Zaloguj się
                </Link>
              </p>
            </div>
          </form>
          
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Lub zarejestruj się przez</span>
              </div>
            </div>
            
            <div className="mt-6">
              <button
                type="button"
                className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center justify-center transition duration-150 ease-in-out"
                onClick={handleGoogleSignIn}
                disabled={isLoading}
              >
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"
                  />
                </svg>
                Google
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t mt-12 py-6">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} DocuLegal. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  );
}
