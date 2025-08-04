# Get Started

This guide will help you set up your development environment and get your first application running in minutes.

## Prerequisites

Before you begin, ensure your development environment meets these requirements:

- [Node.js](https://nodejs.org/)  version 18 or higher.
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)  browser extension (recommended)
- [VSCode](https://code.visualstudio.com/)  is recommended, along with the  [recommended extension](https://github.com/kriasoft/react-starter-kit/blob/main/.vscode/extensions.json).

::: info npm Optional
While many developers have `npm` installed, this template runs entirely on `pnpm`. You can use anything - `yarn, pnpm, npm`. 
:::

::: tip Quick Check
Verify your Node.js version by running `node --version` in your terminal. You should see `v18.0.0` or higher.
:::

## Installation
Choose one of the following methods to create your new project:

#### Method 1: GitHub Template (Recommended) {#github-template}
The easiest way to get started is by using the GitHub template feature:

1. Visit the [starter kit repository](https://github.com/wsameer/adonisjs-react-starter-kit)
2. Click **"Use this template"** button
3. Select "Create a new repository"
4. Choose a name for your project
5. Click "Create repository from template"

::: code-group

```bash [Clone-repo]
git clone https://github.com/YOUR_USERNAME/YOUR_PROJECT_NAME.git
cd YOUR_PROJECT_NAME
```

```bash [Install]
pnpm install
```
:::

::: tip Why Use GitHub Template?
Using the GitHub template creates a clean repository without the original commit history, making it perfect for starting your own project.
:::

#### Method 2: Git Clone

```bash
# Clone the template with a custom remote name
git clone -o seed -b master --single-branch \
  https://github.com/wsameer/adonisjs-react-starter-kit my-awesome-app

# Jump into your project
cd my-awesome-app
```

Remove Git History (Optional)

```bash rm -rf .git
git init
git add .
git commit -m "Initial commit"

# Install dependencies (Bun makes this blazing fast)
pnpm install
```

::: warning 

When using git clone, you'll inherit the entire commit history. Remove the .git folder if you want a clean start.
:::

## Environment Setup

1. Create Environment File
```bash
cp .env.example .env
```

2. Generate Application Key
```bash
node ace generate:key
```

### Database Setup
1. Run Migrations
```bash
ace migration:run 
```

2. Seed Database (Optional)
```bash
ace db:seed 
```


## Start Development Server

Run the development server to see your application in action:
```bash
pnpm run dev
```

## Next Steps

Now that you have your development environment set up:

- Explore the Project Structure - [Learn about the directory structure ->](./directory-structure.md)
- Understand the Workflow - [Development workflow guide ->](./development-workflow.md)
- Build something amazing - Begin customizing your application for your specific needs