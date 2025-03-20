import Head from 'next/head';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Signup() {
  const router = useRouter();
  const { plan } = router.query;
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

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

    // W przyszłości tutaj będzie integracja z Firebase Auth lub NextAuth.js
    try {
      // Symulacja opóźnienia rejestracji
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Tutaj będzie prawdziwa rejestracja
      console.log('Rejestracja z:', email, password, selectedPlan);
      
      // Przekierowanie po rejestracji
      // router.push('/dashboard');
    } catch (err) {
      setError('Wystąpił błąd podczas rejestracji. Spróbuj ponownie.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
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
          <h1 className="text-2xl font-bold text-center mb-6">Utwórz konto</h1>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
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
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
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
              <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
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
              <label className="block text-gray-700 font-medium mb-2">
                Wybierz plan
              </label>
              <div className="grid grid-cols-3 gap-3">
                <div 
                  className={`border rounded-md p-3 text-center cursor-pointer ${selectedPlan === 'mini' ? 'border-primary-500 bg-primary-50' : 'border-gray-300'}`}
                  onClick={() => setSelectedPlan('mini')}
                >
                  <div className="font-bold">Mini</div>
                  <div className="text-sm text-gray-500">29 zł/mies.</div>
                </div>
                <div 
                  className={`border rounded-md p-3 text-center cursor-pointer ${selectedPlan === 'standard' ? 'border-primary-500 bg-primary-50' : 'border-gray-300'}`}
                  onClick={() => setSelectedPlan('standard')}
                >
                  <div className="font-bold">Standard</div>
                  <div className="text-sm text-gray-500">59 zł/mies.</div>
                </div>
                <div 
                  className={`border rounded-md p-3 text-center cursor-pointer ${selectedPlan === 'maks' ? 'border-primary-500 bg-primary-50' : 'border-gray-300'}`}
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
              <p className="text-gray-600">
                Masz już konto?{' '}
                <Link href="/login" className="text-primary-600 hover:underline">
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
            
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center justify-center"
              >
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"
                  />
                </svg>
                Google
              </button>
              
              <button
                type="button"
                className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center justify-center"
              >
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="#1877F2"
                    d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"
                  />
                </svg>
                Facebook
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
