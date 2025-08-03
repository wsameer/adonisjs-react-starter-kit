---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "AdonisJS + React"
  text: "A Fullstack Starter Kit"
  tagline: Everything you need to ship your AI-powered SaaS. 
  # Authentication, database migrations, tRPC, edge deployment, and cutting-edge React patterns all configured with industry best practices.
  actions:
    - theme: brand
      text: Getting Started
      link: /getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/wsameer/react-adonijs-starter-kit

features:
  # - icon: 🤖
  #   title: AI-First Development
  #   details: Code with AI from day one - LLM instructions, tool configurations, and project context pre-built for Claude Code, Cursor, and Gemini CLI
  - icon: ⚙️
    title: Modern Node.js framework
    details: AdonisJS - A TypeScript-first, ESM ready, feature rich framework with world-class testing experience
  - icon: ⚛️
    title: Modern React Stack
    details: React 19, ShadCN UI components with Tailwind CSS v4
  - icon: 🔐
    title: Complete Authentication
    details: Driver-based authentication layer with support for sessions, API tokens, basic auth, and much more.
  - icon: 🏢
    title: Multi-Tenant Database
    details: Lucid ORM, pre-built multi-tenant schema, migrations, and type-safe queries
  - icon: 🏢
    title: tRPC + VineJS
    details: Fully configured and End-to-end typesafe APIs with excellent developer experience
  - icon: ⚡
    title: Ship Faster
    details: Vite runtime for instant builds, hot reload, unified tooling, and comprehensive testing setup
---