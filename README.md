# Document Generation App

A web application for generating legal documents such as NDAs, freelancer agreements, privacy policies, and website terms of service.

## Features

- **Modern UI**: Aesthetic and intuitive user interface
- **Subscription Model**: Three pricing plans: Mini, Standard, Max
- **Payment Integration**: Payment processing via EasyPay or Stripe
- **Document Generation**: Dynamic forms for data entry and document creation based on templates
- **Document Export**: Download files in PDF and DOCX formats
- **User Account**: Login, document history storage

## Technologies

- **Frontend**: Next.js with React
- **Backend**: Node.js with Express
- **Database**: PostgreSQL / MongoDB
- **Authentication**: Firebase Auth / NextAuth.js
- **Payments**: Stripe / EasyPay API
- **Document Generation**: Puppeteer / pdf-lib / Docx.js

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Run the development server with `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
document-app/
├── src/
│   ├── components/    # Reusable UI components
│   ├── pages/         # Next.js pages
│   ├── styles/        # CSS and styling
│   ├── utils/         # Utility functions
│   ├── services/      # API and external service integrations
│   └── models/        # Data models
├── public/            # Static assets
└── README.md          # Project documentation
```

## License

MIT
