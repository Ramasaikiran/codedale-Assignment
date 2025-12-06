# Codedale

A modern, responsive agency homepage built with React, Vite, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

1. **Clone the repository** (if applicable) or navigate to the project directory.

2. **Install dependencies**:
   ```bash
   npm install
   ```

### 💻 Development

To start the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### 📦 Build for Production

To create a production-ready build:

```bash
npm run build
```

The built files will be in the `dist` directory. You can preview the build locally using:

```bash
npm run preview
```

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utils**: `clsx` and `tailwind-merge` for class name management

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── layout/         # Layout components (Navbar, Footer)
│   ├── sections/       # Page sections (Hero, Services, etc.)
│   └── ui/             # Generic UI elements (Button, Card)
├── utils/              # Utility functions (cn helper)
├── App.tsx             # Main application component
├── main.tsx            # Entry point
└── index.css           # Global styles and Tailwind imports
```

## 📝 Notes

- **Path Aliases**: The project is configured to use `@` as an alias for the `src` directory.
- **Tailwind CSS v4**: This project uses the latest Tailwind CSS v4. Configuration is handled via `@tailwindcss/postcss` in `postcss.config.js` and CSS imports in `src/index.css`.
