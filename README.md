# SmartLife NGO Platform

A modern web platform built with Next.js for managing youth development programs and community initiatives.

## Tech Stack & Architecture

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

```mermaid
flowchart TD
subgraph Frontend
N[Next.js 15.0.3] --> R[React 19 RC]
R --> TC[TailwindCSS]
R --> FM[Framer Motion]
R --> RHF[React Hook Form]
R --> L[Lucide Icons]
end
subgraph UI Components
TC --> RAD[Radix UI]
TC --> SD[Shadcn Components]
FM --> A[Animations]
end
subgraph State Management
RHF --> FV[Form Validation]
RHF --> Z[Zod Schema]
end
subgraph Build Tools
T[TypeScript] --> N
ESL[ESLint] --> N
TP[Turbopack] --> N
end
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

```mermaid
flowchart LR
subgraph Development
L[Local Development] --> T[TypeScript Checking]
T --> E[ESLint Validation]
E --> B[Build Process]
end
subgraph Deployment
B --> V[Vercel Platform]
V --> P[Production]
P --> M[Monitoring]
end
subgraph CI/CD
E --> A[Automated Testing]
A --> D[Deploy Preview]
D --> V
end
```

## Feature Architecture

```mermaid
flowchart TD
subgraph Core Features
P[Programs Management] --> YL[Youth Leadership]
P --> DS[Digital Skills]
P --> CS[Community Service]
P --> EW[Entrepreneurship]
P --> MP[Mentorship]
P --> EI[Environmental]
end
subgraph UI/UX
AN[Animations] --> LA[Layout Animations]
AN --> TA[Transition Animations]
AN --> HA[Hover Effects]
RE[Responsive Design] --> M[Mobile First]
RE --> T[Tablet]
RE --> D[Desktop]
end
subgraph Components
UI[UI Elements] --> BTN[Buttons]
UI --> CD[Cards]
UI --> NV[Navigation]
UI --> IC[Icons]
end
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Key Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Smooth Animations**: Powered by Framer Motion
- **Accessible Components**: Built on Radix UI primitives
- **Type Safety**: Full TypeScript support
- **Performance Optimized**: Using Next.js app router and Turbopack
- **Development Tools**: ESLint configuration for code quality

## Project Structure
smartlife_ngo/
├── app/
│ ├── programs/
│ │ ├── page.tsx
│ │ └── [program]/
│ │ └── page.tsx
│ └── page.tsx
├── components/
│ └── ui/
├── public/
└── styles/



## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## Deployment

The application is optimized for deployment on the [Vercel Platform](https://vercel.com).

## Contributing

Contributions are welcome! Please read our contributing guidelines for details.
