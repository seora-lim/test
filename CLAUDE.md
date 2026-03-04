# Project Overview

## Tech Stack
- Framework: Next.js 14
- Language: TypeScript 5.2
- Styling: Tailwind CSS 3.4
- Database: PostgreSQL with Prisma ORM
- Testing: Jest + React Testing Library

## Project Structure
- `src/app`: Next.js App Router pages
- `src/components`: Reusable React components
- `src/lib`: Core utilities and API clients
- `src/hooks`: Custom React hooks

## Key Commands
- `npm run dev`: Start development server (port 3000)
- `npm run build`: Build for production
- `npm run test`: Run test suite
- `npm run lint`: Run ESLint
- `npm run type-check`: TypeScript type checking

## Code Style
- Use ES modules (import/export)
- All new components must be function components with Hooks
- Prefer arrow functions for component definitions
- Use descriptive variable names (no single letters except loops)
- Add JSDoc comments for all exported functions

## Testing Guidelines
- Write tests using Jest and React Testing Library
- Aim for 80% code coverage minimum
- Include edge cases and error handling
- Test files should be named `*.test.tsx`

## Do Not Section
- Do not edit any files in the `src/legacy` directory
- Do not commit directly to the `main` branch
- Do not use `any` type in TypeScript
- Do not skip writing tests for new features
