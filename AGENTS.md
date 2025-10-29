# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 application using the App Router architecture, React 19, TypeScript, and Tailwind CSS v4. The project uses Bun as the package manager and Biome for linting and formatting.

## Development Commands

Development server:
```bash
bun dev
```

Build for production:
```bash
bun run build
```

Start production server:
```bash
bun start
```

Linting (using Biome):
```bash
bun run lint
```

Format code (using Biome):
```bash
bun run format
```

## Architecture

### Next.js App Router Structure

- `app/` - App Router directory containing routes and layouts
  - `layout.tsx` - Root layout with Geist font configuration
  - `page.tsx` - Home page route
  - `globals.css` - Global styles with Tailwind directives

### Key Configuration Files

- `next.config.ts` - Next.js configuration with React Compiler enabled (`reactCompiler: true`)
- `tsconfig.json` - TypeScript configuration with path alias `@/*` mapping to project root
- `biome.json` - Biome configuration with Next.js and React domain rules, auto import organization
- `postcss.config.mjs` - PostCSS configuration for Tailwind CSS v4

### Tooling Choices

- **Package Manager**: Bun (note: `bun.lock` file present)
- **Linter/Formatter**: Biome (not ESLint/Prettier)
- **React Compiler**: Enabled in Next.js config for automatic optimization
- **Styling**: Tailwind CSS v4 with PostCSS plugin
- **Fonts**: Next.js Font Optimization with Geist and Geist Mono

## Important Notes

- TypeScript strict mode is enabled
- Biome automatically organizes imports on save
- The project uses the latest React 19 and Next.js 16 features
- Path aliases use `@/*` for imports from the project root
