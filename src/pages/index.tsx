import Head from 'next/head';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle navbar transparency on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>DocuLegal | Profesjonalne dokumenty prawne</title>
        <meta name="description" content="Twórz profesjonalne dokumenty prawne w kilka minut. Umowy NDA, umowy dla freelancerów, polityki prywatności i regulaminy." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary-600 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            DocuLegal
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><Link href="/" className={`font-medium hover:text-primary-600 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Strona główna</Link></li>
              <li><Link href="/documents" className={`font-medium hover:text-primary-600 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Dokumenty</Link></li>
              <li><Link href="/pricing" className={`font-medium hover:text-primary-600 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Cennik</Link></li>
              <li><Link href="/about" className={`font-medium hover:text-primary-600 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>O nas</Link></li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/login" className={`font-medium hover:text-primary-600 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              Logowanie
            </Link>
            <Link href="/signup" className="btn-primary">
              Rozpocznij za darmo
            </Link>
            <button className="md:hidden text-primary-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-primary-700 to-primary-900 text-white">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" viewBox="0 0 800 800">
              <defs>
                <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M0 40L40 0M0 0L40 40" stroke="currentColor" strokeWidth="1" fill="none" />
                </pattern>
              </defs>
              <rect width="800" height="800" fill="url(#grid-pattern)" />
            </svg>
          </div>
          
          {/* Content container */}
          <div className="relative pt-32 pb-32">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center">
                {/* Text Content - Left Side */}
                <div className="w-full lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                    Profesjonalne dokumenty prawne <span className="text-primary-300">w kilka minut</span>
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 text-white opacity-90 max-w-xl mx-auto lg:mx-0">
                    Generuj gotowe do użycia dokumenty prawne bez konieczności zatrudniania prawnika. Szybko, łatwo i bezpiecznie.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                    <Link href="/signup" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 text-lg">
                      Rozpocznij za darmo
                    </Link>
                    <Link href="/documents" className="btn-secondary bg-transparent border border-white hover:bg-white/10 text-white px-8 py-3 text-lg">
                      Zobacz dokumenty
                    </Link>
                  </div>
                </div>
                
                {/* Document Mockup - Right Side */}
                <div className="w-full lg:w-1/2 lg:pl-8">
                  <div className="relative mx-auto max-w-md">
                    {/* Main document */}
                    <div className="bg-white rounded-lg shadow-2xl p-4 transform rotate-1 relative z-20">
                      <div className="bg-gray-50 rounded-md p-6">
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                            <svg className="w-6 h-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">Umowa NDA</h3>
                            <p className="text-sm text-gray-600">Dokument gotowy w 3 minuty</p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="h-4 bg-gray-200 rounded w-full"></div>
                          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                          <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                          <div className="h-4 bg-gray-200 rounded w-full"></div>
                          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                        </div>
                        <div className="mt-6 flex justify-end">
                          <div className="w-32 h-8 bg-primary-100 rounded-md"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -top-6 -right-6 w-16 h-16 bg-primary-300 rounded-lg opacity-20 animate-pulse z-10"></div>
                    <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-primary-300 rounded-full opacity-20 animate-pulse z-10" style={{ animationDelay: '1s' }}></div>
                    
                    {/* Secondary document */}
                    <div className="bg-white rounded-lg shadow-xl p-3 transform -rotate-2 absolute -bottom-8 -left-4 w-32 z-10">
                      <div className="space-y-2">
                        <div className="h-2 bg-gray-200 rounded w-full"></div>
                        <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                        <div className="h-2 bg-gray-200 rounded w-4/6"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Wave divider */}
          <div className="relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
              <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-600 text-sm font-semibold mb-4">Funkcjonalności</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Dlaczego warto wybrać DocuLegal?</h2>
              <p className="text-xl text-gray-600">
                Nasza platforma oferuje kompleksowe rozwiązania dla wszystkich Twoich potrzeb związanych z dokumentami prawnymi.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {/* Feature 1 */}
              <div className="relative">
                <div className="absolute -top-10 left-0 w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="pl-6 pt-12">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Profesjonalne szablony</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Wszystkie nasze dokumenty są tworzone przez doświadczonych prawników i są zgodne z aktualnymi przepisami prawa polskiego i europejskiego.
                  </p>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="relative">
                <div className="absolute -top-10 left-0 w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="pl-6 pt-12">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Oszczędność czasu</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Generuj dokumenty w kilka minut, zamiast spędzać godziny na ich tworzeniu od podstaw lub płacić za drogie konsultacje prawne.
                  </p>
                </div>
              </div>
              
              {/* Feature 3 */}
              <div className="relative">
                <div className="absolute -top-10 left-0 w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="pl-6 pt-12">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Łatwy eksport</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Pobieraj dokumenty w formatach PDF i DOCX, gotowe do wydruku, edycji lub bezpiecznego przechowywania w chmurze.
                  </p>
                </div>
              </div>
              
              {/* Feature 4 */}
              <div className="relative">
                <div className="absolute -top-10 left-0 w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div className="pl-6 pt-12">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Bezpieczeństwo danych</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Wszystkie Twoje dane są szyfrowane i bezpiecznie przechowywane. Nigdy nie udostępniamy Twoich informacji osobom trzecim.
                  </p>
                </div>
              </div>
              
              {/* Feature 5 */}
              <div className="relative">
                <div className="absolute -top-10 left-0 w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div className="pl-6 pt-12">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Elastyczne plany</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Wybierz plan, który najlepiej odpowiada Twoim potrzebom. Od podstawowego planu dla okazjonalnych użytkowników po zaawansowane opcje dla firm.
                  </p>
                </div>
              </div>
              
              {/* Feature 6 */}
              <div className="relative">
                <div className="absolute -top-10 left-0 w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="pl-6 pt-12">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Wsparcie techniczne</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Nasz zespół wsparcia jest dostępny, aby pomóc Ci w każdej kwestii związanej z korzystaniem z naszej platformy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-600 text-sm font-semibold mb-4">Jak to działa</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Trzy proste kroki</h2>
              <p className="text-xl text-gray-600">
                Generowanie profesjonalnych dokumentów prawnych nigdy nie było tak proste.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-white rounded-xl shadow-md p-8 relative">
                <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold">1</div>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Wybierz szablon</h3>
                  <p className="text-gray-600">
                    Wybierz rodzaj dokumentu, który chcesz wygenerować z naszej bogatej biblioteki szablonów.
                  </p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="bg-white rounded-xl shadow-md p-8 relative">
                <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold">2</div>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Wypełnij formularz</h3>
                  <p className="text-gray-600">
                    Wprowadź wymagane informacje w intuicyjnym formularzu. Podpowiedzi pomogą Ci na każdym kroku.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="bg-white rounded-xl shadow-md p-8 relative">
                <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold">3</div>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Pobierz dokument</h3>
                  <p className="text-gray-600">
                    Wygeneruj i pobierz gotowy dokument w formacie PDF lub DOCX. Gotowe do użycia!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="section-title">Wybierz plan odpowiedni dla Ciebie</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="pricing-card">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold">Mini</h3>
                  <p className="text-gray-500 mt-2">Dla okazjonalnych użytkowników</p>
                  <p className="text-4xl font-bold mt-4">29 zł<span className="text-lg text-gray-500">/miesiąc</span></p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="pricing-feature">
                    <svg className="pricing-check" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Dostęp do 3 dokumentów miesięcznie
                  </li>
                  <li className="pricing-feature">
                    <svg className="pricing-check" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Eksport do PDF i DOCX
                  </li>
                  <li className="pricing-feature">
                    <svg className="pricing-check" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Podstawowe szablony
                  </li>
                </ul>
                <Link href="/signup?plan=mini" className="btn-primary w-full text-center block">
                  Wybierz plan
                </Link>
              </div>
              <div className="pricing-card-popular">
                <div className="pricing-badge">
                  Najpopularniejszy
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold">Standard</h3>
                  <p className="text-gray-500 mt-2">Dla małych firm</p>
                  <p className="text-4xl font-bold mt-4">59 zł<span className="text-lg text-gray-500">/miesiąc</span></p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="pricing-feature">
                    <svg className="pricing-check" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Dostęp do 10 dokumentów miesięcznie
                  </li>
                  <li className="pricing-feature">
                    <svg className="pricing-check" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Eksport do PDF i DOCX
                  </li>
                  <li className="pricing-feature">
                    <svg className="pricing-check" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Wszystkie szablony
                  </li>
                  <li className="pricing-feature">
                    <svg className="pricing-check" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Historia dokumentów
                  </li>
                </ul>
                <Link href="/signup?plan=standard" className="btn-primary w-full text-center block">
                  Wybierz plan
                </Link>
              </div>
              <div className="pricing-card">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold">Maks</h3>
                  <p className="text-gray-500 mt-2">Dla firm i kancelarii</p>
                  <p className="text-4xl font-bold mt-4">99 zł<span className="text-lg text-gray-500">/miesiąc</span></p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="pricing-feature">
                    <svg className="pricing-check" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Nieograniczona liczba dokumentów
                  </li>
                  <li className="pricing-feature">
                    <svg className="pricing-check" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Eksport do PDF i DOCX
                  </li>
                  <li className="pricing-feature">
                    <svg className="pricing-check" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Wszystkie szablony
                  </li>
                  <li className="pricing-feature">
                    <svg className="pricing-check" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Historia dokumentów
                  </li>
                  <li className="pricing-feature">
                    <svg className="pricing-check" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

        {/* CTA Section */}
        <section className="bg-primary-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Gotowy, aby zacząć?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Dołącz do tysięcy zadowolonych użytkowników, którzy oszczędzają czas i pieniądze dzięki naszej aplikacji.
            </p>
            <Link href="/signup" className="btn-primary px-8 py-3 text-lg">
              Utwórz konto za darmo
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">DocuLegal</h3>
              <p className="text-gray-300">
                Profesjonalne dokumenty prawne dostępne dla każdego.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-white">Dokumenty</h4>
              <ul className="space-y-2">
                <li><Link href="/documents/nda" className="text-gray-300 hover:text-white">Umowy NDA</Link></li>
                <li><Link href="/documents/freelance" className="text-gray-300 hover:text-white">Umowy dla freelancerów</Link></li>
                <li><Link href="/documents/privacy" className="text-gray-300 hover:text-white">Polityki prywatności</Link></li>
                <li><Link href="/documents/terms" className="text-gray-300 hover:text-white">Regulaminy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-white">Firma</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-300 hover:text-white">O nas</Link></li>
                <li><Link href="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white">Kontakt</Link></li>
                <li><Link href="/careers" className="text-gray-300 hover:text-white">Kariera</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-white">Pomoc</h4>
              <ul className="space-y-2">
                <li><Link href="/faq" className="text-gray-300 hover:text-white">FAQ</Link></li>
                <li><Link href="/support" className="text-gray-300 hover:text-white">Wsparcie</Link></li>
                <li><Link href="/privacy" className="text-gray-300 hover:text-white">Polityka prywatności</Link></li>
                <li><Link href="/terms" className="text-gray-300 hover:text-white">Warunki korzystania</Link></li>
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
