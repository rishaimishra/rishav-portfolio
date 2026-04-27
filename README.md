# Modern Personal Portfolio (Next.js 15 + Prisma + Tailwind v4)

A high-converting, SEO-optimized personal portfolio with a dynamic admin panel.

## Features
- **Ultra-Modern UI**: Dark/Light mode, neon accents, glassmorphism.
- **Next.js 15 (App Router)**: Latest features and performance.
- **Tailwind CSS v4**: CSS-first styling.
- **Framer Motion**: Smooth entrance and interactive animations.
- **Prisma + PostgreSQL**: Robust database management.
- **NextAuth.js v5**: Secure admin authentication.
- **Admin Panel**: Manage projects and client leads.

## Setup
1. **Clone the repo**
2. **Install dependencies**: \`npm install\`
3. **Setup Database**: Update \`.env\` with your \`DATABASE_URL\`.
4. **Push Schema**: \`npx prisma db push\`
5. **Seed Admin**: \`npx ts-node prisma/seed.ts\`
6. **Run Dev**: \`npm run dev\`

## Admin Credentials
- **Email**: \`admin@portfolio.com\`
- **Password**: \`admin123\`

## Project Structure
- \`src/app\`: Application routes and pages.
- \`src/components\`: Reusable UI and shared components.
- \`src/lib\`: Database and Auth utilities.
- \`prisma/\`: Database schema and seeds.

Built with ❤️ by Claude.
