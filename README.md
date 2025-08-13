# AdonisJS + React Full-Stack Starter Kit

## Introduction

A modern, production-ready full-stack web application starter kit built with the latest technologies for those who want to ship fast and ship great.

Designed for developers who value both speed and quality, this template provides a complete foundation for full-stack applications. From solo projects to team collaborations, it scales with your ambitions while maintaining the developer experience you deserve.

<img width="500" height="360" alt="login-1" src="https://github.com/user-attachments/assets/c344ffe2-0b93-47b3-82ae-85f07c8e28c0" />
<img width="500" height="360" alt="register-1" src="https://github.com/user-attachments/assets/603f7ef2-73fd-4cee-905e-b416a2238142" />



## Quick Start

### 1. Create Your Project

[Generate a new repository](https://github.com/wsameer/adonisjs-react-starter-kit/generate) from this template, then clone it locally:

```bash
git  clone  https://github.com/YOUR_USERNAME/YOUR_PROJECT_NAME.git

cd  YOUR_PROJECT_NAME
```

### 2. Install Dependencies

```bash
pnpm  install | yarn install | npm install
```

### 3. Environment Setup

1. Create Environment File

```bash
cp  .env.example  .env
```

2. Generate Application Key

```bash
node  ace  generate:key
```

### 4. Database Setup

1. Run Migrations

```bash
ace  migration:run
```

### 5. Start Development

Open a terminal and run the following command:

```bash
pn dev
```

Visit [localhost:3333](http://localhost:3333) and both your frontend and backend will be running together.

## Technology Stack

**Frontend & UI**

- [React 19](https://react.dev/) - Latest React with concurrent features

- [TypeScript](https://www.typescriptlang.org/) - Static type checking

- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework

- [ShadCN UI](https://ui.shadcn.com/) - Beautiful, accessible components

- [Vite](https://vite.dev/) - Fast build tool and dev server

- [Inertia.js](https://inertiajs.com/) - Modern monolithic approach

**Backend & API**

- [AdonisJS](https://docs.adonisjs.com/guides/preface/introduction) - Node.js framework with TypeScript-first approach

- [PostgreSQL](https://www.postgresql.org/) - Robust relational database

- [Session-based Authentication](https://docs.adonisjs.com/guides/authentication/session-guard) - Secure user authentication

**Development Tools**

- [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager

- Monorepo - Single repository for frontend and backend

- [TypeScript](https://www.typescriptlang.org/) - Full type safety across the stack

- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) - Code quality and formatting

## Prerequisites

- Node.js 18+

- PostgreSQL 12+

- pnpm 8+ (can be swapped with npm or yarn)
