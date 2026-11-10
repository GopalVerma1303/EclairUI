<div align="center">
  <img src="https://eclairui.gopalverma.com/eui-r.png" alt="EclairUI Logo" height="100">

### Eclair UI

Beautiful UI Components for Web at Your Fingertips
<br />

[![GitHub stars](https://img.shields.io/github/stars/GopalVerma1303/EclairUI.svg?style=social&label=Star)](https://github.com/GopalVerma1303/EclairUI)
[![GitHub forks](https://img.shields.io/github/forks/GopalVerma1303/EclairUI.svg?style=social&label=Fork)](https://github.com/GopalVerma1303/EclairUI/fork)
[![GitHub watchers](https://img.shields.io/github/watchers/GopalVerma1303/EclairUI.svg?style=social&label=Watch)](https://github.com/GopalVerma1303/EclairUI)

[![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React.js](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)](https://framer.com/motion)

</div>
<br />

## Overview

EclairUI is a comprehensive UI component library built with Next.js, React, and TailwindCSS. The project is structured as a Turborepo monorepo, providing a collection of beautiful, customizable components along with development tools and templates.

  <img src="https://eclairui.gopalverma.com/og.jpeg" alt="EclairUI OG Image">

## Repository Structure

```
.
├── apps/
│   ├── website/      # Main documentation and showcase website
│   ├── template/     # Collection of UI templates
│   └── playground/   # Component testing environment
├── packages/
│   ├── cli/          # EclairUI CLI tool
│   ├── config-eslint/     # Shared ESLint configuration
│   ├── config-tailwind/   # Shared Tailwind configuration
│   ├── config-typescript/ # Shared TypeScript configuration
│   └── ui/           # Core UI components package
└── [configuration files]
```

## Applications

- **Website** (`apps/website`): Main documentation and showcase site built with Next.js
- **Templates** (`apps/template`): Collection of pre-built UI templates and layouts
- **Playground** (`apps/playground`): Development environment for testing components

## Packages

- **CLI** (`packages/cli`): Command-line interface for EclairUI
- **UI** (`packages/ui`): Core UI components library
- **Configurations**:
  - `config-eslint`: Shared ESLint rules
  - `config-tailwind`: Shared Tailwind CSS configuration
  - `config-typescript`: Shared TypeScript configuration

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/GopalVerma1303/EclairUI.git
cd EclairUI
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

## Available Scripts

- `pnpm dev`: Start all applications in development mode
- `pnpm build`: Build all applications and packages
- `pnpm start`: Start all applications in production mode
- `pnpm lint`: Run ESLint across all projects
- `pnpm clean`: Clean all build outputs and caches

## Technology Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Monorepo Tool**: [Turborepo](https://turbo.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Linting**: [ESLint](https://eslint.org/)

## Development

### Prerequisites

- Node.js 16.x or higher
- pnpm 7.x or higher

### Local Development

1. Start the development server:

```bash
pnpm dev
```

2. Access the applications:

- Website: http://localhost:3000
- Templates: http://localhost:3001
- Playground: http://localhost:3002

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details on:

- Code of Conduct
- Development process
- How to submit pull requests
- Coding standards

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- 📫 Report bugs via [GitHub Issues](https://github.com/GopalVerma1303/EclairUI/issues)
- 💬 Ask questions in [GitHub Discussions](https://github.com/GopalVerma1303/EclairUI/discussions)
- 📦 Track releases in our [Changelog](CHANGELOG.md)
