import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Document Generation App</title>
        <meta name="description" content="Aplikacja do generowania dokumentów prawnych" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary-600">DocuLegal</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="/" className="text-gray-800 hover:text-primary-600">Strona główna</Link></li>
              <li><Link href="/pricing" className="text-gray-800 hover:text-primary-600">Cennik</Link></li>
              <li><Link href="/documents" className="text-gray-800 hover:text-primary-600">Dokumenty</Link></li>
              <li><Link href="/login" className="btn-primary">Logowanie</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-500 to-primary-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Twórz profesjonalne dokumenty prawne w kilka minut</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Nasza aplikacja umożliwia szybkie i łatwe generowanie dokumentów prawnych, takich jak umowy NDA, 
              umowy dla freelancerów, polityki prywatności i regulaminy stron internetowych.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/signup" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Rozpocznij za darmo
              </Link>
              <Link href="/documents" className="btn-secondary bg-transparent border border-white hover:bg-white/10 text-white px-8 py-3 text-lg">
                Zobacz dokumenty
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Dlaczego warto wybrać naszą aplikację?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card">
                <div className="text-primary-600 text-4xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Profesjonalne szablony</h3>
                <p className="text-gray-600">
                  Wszystkie nasze dokumenty są tworzone przez doświadczonych prawników i są zgodne z aktualnymi przepisami.
                </p>
              </div>
              <div className="card">
                <div className="text-primary-600 text-4xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Oszczędność czasu</h3>
                <p className="text-gray-600">
                  Generuj dokumenty w kilka minut, zamiast spędzać godziny na ich tworzeniu od podstaw.
                </p>
              </div>
              <div className="card">
                <div className="text-primary-600 text-4xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Łatwy eksport</h3>
                <p className="text-gray-600">
                  Pobieraj dokumenty w formatach PDF i DOCX, gotowe do wydruku lub edycji.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Wybierz plan odpowiedni dla Ciebie</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card border border-gray-200 hover:border-primary-500 hover:shadow-lg transition-all">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold">Mini</h3>
                  <p className="text-gray-500 mt-2">Dla okazjonalnych użytkowników</p>
                  <p className="text-4xl font-bold mt-4">29 zł<span className="text-lg text-gray-500">/miesiąc</span></p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Dostęp do 3 dokumentów miesięcznie
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Eksport do PDF i DOCX
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Podstawowe szablony
                  </li>
                </ul>
                <Link href="/signup?plan=mini" className="btn-primary w-full text-center block">
                  Wybierz plan
                </Link>
              </div>
              <div className="card border-2 border-primary-500 shadow-lg relative">
                <div className="absolute top-0 right-0 bg-primary-500 text-white px-4 py-1 text-sm font-bold rounded-bl">
                  Najpopularniejszy
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold">Standard</h3>
                  <p className="text-gray-500 mt-2">Dla małych firm</p>
                  <p className="text-4xl font-bold mt-4">59 zł<span className="text-lg text-gray-500">/miesiąc</span></p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Dostęp do 10 dokumentów miesięcznie
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Eksport do PDF i DOCX
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Wszystkie szablony
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Historia dokumentów
                  </li>
                </ul>
                <Link href="/signup?plan=standard" className="btn-primary w-full text-center block">
                  Wybierz plan
                </Link>
              </div>
              <div className="card border border-gray-200 hover:border-primary-500 hover:shadow-lg transition-all">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold">Maks</h3>
                  <p className="text-gray-500 mt-2">Dla firm i kancelarii</p>
                  <p className="text-4xl font-bold mt-4">99 zł<span className="text-lg text-gray-500">/miesiąc</span></p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Nielimitowana liczba dokumentów
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Eksport do PDF i DOCX
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Wszystkie szablony
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Historia dokumentów
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Priorytetowe wsparcie
                  </li>
                </ul>
                <Link href="/signup?plan=maks" className="btn-primary w-full text-center block">
                  Wybierz plan
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">DocuLegal</h3>
              <p className="text-gray-400">
                Profesjonalne dokumenty prawne dostępne dla każdego.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Dokumenty</h4>
              <ul className="space-y-2">
                <li><Link href="/documents/nda" className="text-gray-400 hover:text-white">Umowy NDA</Link></li>
                <li><Link href="/documents/freelance" className="text-gray-400 hover:text-white">Umowy dla freelancerów</Link></li>
                <li><Link href="/documents/privacy" className="text-gray-400 hover:text-white">Polityki prywatności</Link></li>
                <li><Link href="/documents/terms" className="text-gray-400 hover:text-white">Regulaminy stron</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Firma</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white">O nas</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Kontakt</Link></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Pomoc</h4>
              <ul className="space-y-2">
                <li><Link href="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
                <li><Link href="/support" className="text-gray-400 hover:text-white">Wsparcie</Link></li>
                <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white">Polityka prywatności</Link></li>
                <li><Link href="/terms-of-service" className="text-gray-400 hover:text-white">Warunki korzystania</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} DocuLegal. Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
