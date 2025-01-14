## Tech Stack

- **Framework**: Vite + React + TypeScript
- **Styling**: TailwindCSS
- **Package Manager**: pnpm
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## Prerequisites

- Node.js 18 or later
- pnpm (recommended for better performance and disk space efficiency)

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/carletonai/cais-web.git
cd cais-web
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## Development Guidelines

- **Branch Naming Convention**:

  - Features: `feature/name`
  - Bugfixes: `bugfix/name`
  - Upgrade: `upgrade/name`

- **Branching Strategy**:

  - Main branch: Protected, requires pull request reviews
  - Feature branches: Created for specific features or sections
    - `feature/setup-initial-routes`: Initial page structure and routing
    - `feature/hero-section`: Hero section development
  - Create new feature branches for major components or sections
  - Keep changes focused and atomic

- **Code Quality**:
  - ESLint for code linting
  - Prettier for code formatting
  - Jest for testing

## Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm serve        # Start production server
pnpm test         # Run tests
pnpm lint         # Run linting
pnpm format       # Check formatting
```

## Contributing

1. Fork the repository
2. Create your feature branch following the naming convention
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## Project Structure

```
src/
├── components/   # Reusable UI components
├── app/          # Main application code
│   └── App.tsx   # Root application component
├── assets/       # Static assets
└── styles/       # Global styles and Tailwind config
```

### Pages Description

- **Home (/)**: Landing page showcasing CAIS's mission and latest updates
- **About (/about)**: Information about CAIS, our history, mission, and values
- **Events (/events)**: Upcoming and past events, workshops, and activities
- **Team (/team)**: Meet our executive team and contributors
- **Projects (/projects)**: Showcase of current and past projects
- **Contact (/contact)**: Get in touch with CAIS
