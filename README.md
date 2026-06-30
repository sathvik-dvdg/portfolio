# Sathvik T Devadiga - Portfolio

A high-performance, responsive personal portfolio built to showcase backend engineering, cloud infrastructure, and machine learning projects. 

The application utilizes a custom particle animation engine, semantic HTML, and JSON-LD structured data for SEO optimization, completely bypassing heavy CSS frameworks in favor of optimized, raw CSS with CSS variables.

## Tech Stack

*   **Framework:** Next.js (App Router)
*   **Language:** TypeScript
*   **Styling:** Custom CSS (`globals.css`)
*   **Icons:** Lucide React
*   **Deployment:** Vercel (Recommended)

## Key Features

*   **Data-Driven Content:** All portfolio content (projects, skills, education) is centralized in `src/data/portfolio.ts`, allowing for quick updates without touching the UI components.
*   **Custom Particle Canvas:** A lightweight, vanilla JavaScript particle animation running on a `<canvas>` element, optimized with `requestAnimationFrame` and a `prefers-reduced-motion` media query check.
*   **Intersection Observer Navigation:** The navigation bar automatically highlights the active section as the user scrolls through the page.
*   **Accessible & Responsive:** Fully responsive grid layouts using CSS Grid and Flexbox, with ARIA labels and semantic tags for screen readers.

## Getting Started

### Prerequisites

Ensure you have Node.js (v18.17 or later) installed on your local machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sathvik-dvdg/portfolio.git
   ```

2. Navigate into the project directory:
   ```bash
   cd portfolio
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

*   `/src/app`: Contains the Next.js App Router layouts, pages, and global stylesheet.
*   `/src/components`: Reusable UI components (`Nav.tsx`, `ProjectCard.tsx`, `ParticleCanvas.tsx`, etc.).
*   `/src/data/portfolio.ts`: The single source of truth for all text, links, and assets displayed on the site. Update this file to modify portfolio content.
*   `/public`: Static assets, including the resume PDF, favicon, and `robots.txt`.
