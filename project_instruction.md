# Przegląd Projektu

Aplikacja webowa z możliwością przeskalowania na aplikację natywną, służąca do generowania dokumentów prawnych, takich jak:

- Umowy NDA
- Umowy dla freelancerów
- Polityki prywatności
- Regulaminy stron internetowych

Główne cechy systemu:

- **Nowoczesny UI**: Estetyczny i intuicyjny interfejs użytkownika.
- **Model subskrypcji**: Trzy plany finansowe: Mini, Standard, Maks.
- **Integracja płatności**: Możliwość płatności za pomocą [EasyPay](https://www.easy.tools/) lub Stripe.
- **Generowanie dokumentów**: Formularze dynamiczne do wprowadzania danych i tworzenia dokumentów na podstawie gotowych szablonów.
- **Eksport dokumentów**: Możliwość pobrania plików w formatach PDF i DOCX.
- **Konto użytkownika**: Logowanie, zapisywanie historii dokumentów.

Technologie:

- **Frontend**: React.js / Next.js
- **Backend**: Node.js / Express
- **Baza danych**: PostgreSQL / MongoDB
- **Autoryzacja**: Firebase Auth / NextAuth.js
- **Płatności**: Stripe / EasyPay API
- **Generowanie dokumentów**: Puppeteer / pdf-lib / Docx.js

---

## Główne Funkcjonalności

### 1. Rejestracja i Logowanie

- **Opis**: Użytkownicy muszą mieć możliwość tworzenia kont i logowania.
- **Funkcje**:
  - Logowanie przez e-mail + hasło (Firebase Auth lub NextAuth.js)
  - Logowanie przez Google i Facebooka
  - Zapisywanie użytkowników w bazie danych z informacją o ich subskrypcji
- **Przykładowe pola użytkownika**:
  - `email`
  - `password (hashowane)`
  - `subscription_plan` (mini/standard/maks)

**Instrukcje wdrożenia**:

1. Skonfiguruj Firebase Auth lub NextAuth.js.
2. Dodaj obsługę logowania e-mail + hasło oraz OAuth (Google/Facebook).
3. Stwórz model użytkownika w bazie danych.
4. Dodaj middleware do autoryzacji na backendzie.

### 2. System Płatności

- **Opis**: Użytkownik wybiera jeden z trzech planów i dokonuje płatności.
- **Integracja**: Stripe lub EasyPay API.
- **Plany**:
  - **Mini**: Dostęp do 3 dokumentów miesięcznie.
  - **Standard**: Dostęp do 10 dokumentów miesięcznie.
  - **Maks**: Nielimitowany dostęp.

**Instrukcje wdrożenia**:

1. Skonfiguruj Stripe lub EasyPay API.
2. Stwórz modele planów w bazie danych.
3. Obsłuż webhooki płatności i aktualizuj status subskrypcji użytkownika.
4. Dodaj UI wyboru planu oraz przycisk płatności.

### 3. Kreator Dokumentów Prawnych

- **Opis**: Użytkownik wypełnia formularz i generuje gotowy dokument.
- **Funkcjonalności**:
  - Dynamiczne formularze z opcją zapisu danych.
  - Szablony dokumentów w formatach `.docx` i `.pdf`.
  - Możliwość edycji przed finalnym wygenerowaniem.

**Instrukcje wdrożenia**:

1. Stwórz system formularzy dynamicznych.
2. Załaduj szablony dokumentów i połącz je z danymi użytkownika.
3. Wykorzystaj Puppeteer / pdf-lib / Docx.js do generowania plików.
4. Udostępnij opcję pobrania wygenerowanego dokumentu.

### 4. Eksport Dokumentów

- **Opis**: Użytkownik może pobrać wygenerowany dokument w formacie `.pdf` lub `.docx`.
- **Funkcje**:
  - Możliwość wyboru formatu eksportu.
  - Pobieranie wygenerowanego pliku.
  - Historia pobranych dokumentów.

**Instrukcje wdrożenia**:

1. Dodaj przycisk „Pobierz" w UI.
2. Skonfiguruj generowanie plików `.pdf` i `.docx`.
3. Zapewnij zapis historii wygenerowanych plików w bazie danych.

### 5. Panel Użytkownika

- **Opis**: Miejsce do zarządzania subskrypcją i przeglądania historii dokumentów.
- **Funkcje**:
  - Podgląd aktualnej subskrypcji.
  - Historia wygenerowanych dokumentów.
  - Możliwość anulowania subskrypcji.

**Instrukcje wdrożenia**:

1. Stwórz panel użytkownika z informacjami o subskrypcji.
2. Połącz panel z bazą danych w celu wyświetlania historii dokumentów.
3. Dodaj funkcję anulowania subskrypcji.

---

## Dokumentacja API i Bibliotek

### 1. Firebase Auth / NextAuth.js

- **Biblioteka**: Firebase Auth / NextAuth.js
- **Dokumentacja**:
  - [Firebase Auth Docs](https://firebase.google.com/docs/auth)
  - [NextAuth.js Docs](https://next-auth.js.org/)

### 2. Stripe API / EasyPay API

- **Biblioteka**: Stripe / EasyPay API
- **Dokumentacja**:
  - [Stripe API Docs](https://stripe.com/docs/api)
  - [EasyPay API Docs](https://www.easy.tools/docs)

### 3. Generowanie Dokumentów

- **Biblioteki**:
  - Puppeteer ([Dokumentacja](https://pptr.dev/))
  - pdf-lib ([Dokumentacja](https://pdf-lib.js.org/))
  - Docx.js ([Dokumentacja](https://github.com/voltraco/docx))

---

## Ważne Uwagi

- **Rozszerzalność**: Kod powinien być modularny, aby łatwo dodać kolejne szablony dokumentów.
- **Skalowalność**: Backend powinien wspierać API REST/GraphQL dla przyszłych aplikacji natywnych.
- **UX/UI**: Aplikacja powinna być dostosowana do urządzeń mobilnych.
