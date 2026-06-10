# VitaData Solutions — React Landing Page

A production-grade, fully responsive React landing page for VitaData Solutions with:
- **React Three Fiber** 3D DNA helix in the hero section
- **Framer Motion** scroll-based animations throughout
- Strict palette adherence: `#FBEEEA`, `#F2C2B2`, `#EC8E60`, `#BB6C43`, `#5A311C`, `#2F170B`

## Project Structure

```
src/
├── App.jsx
├── index.js
├── index.css              ← Global design system (CSS variables, reset)
├── hooks/
│   └── useScrollReveal.js
└── components/
    ├── Navbar.jsx / .css
    ├── Hero.jsx / .css
    ├── DNA.jsx             ← React Three Fiber DNA molecule
    ├── About.jsx / .css
    ├── Services.jsx / .css
    ├── Contact.jsx / .css
    ├── Founders.jsx / .css
    └── Footer.jsx / .css
```

## Setup & Run

```bash
# Install dependencies
npm install

# Start dev server
npm start

# Build for production
npm run build
```

Requires **Node.js 16+**.

## Key Dependencies

| Package | Purpose |
|---|---|
| `react` + `react-dom` | UI framework |
| `@react-three/fiber` | React renderer for Three.js |
| `@react-three/drei` | Three.js helpers (OrbitControls) |
| `three` | 3D engine |
| `framer-motion` | Scroll & load animations |

## DNA Technical Details

The 3D DNA (`src/components/DNA.jsx`) is built with:
- Two `CatmullRomCurve3`-based `TubeGeometry` helices offset by `Math.PI`
- `CylinderGeometry` connecting rungs between both strands
- `SphereGeometry` backbone nodes every 4 segments
- `MeshStandardMaterial` with physically-based rendering + emissive tint (palette-only colors)
- `useFrame` for continuous Y-axis rotation + floating sine animation
- `AmbientLight` + `DirectionalLight` × 2 + `PointLight` for warm, soft illumination
- Transparent canvas background (alpha: true)

## Animations

- **Page load**: Navbar slides from top, hero text staggers in from bottom, DNA slides from right
- **Scroll**: All sections use Framer Motion's `whileInView` with `once: true` (no repeat)
- **Cards**: Staggered entrance + `whileHover` scale lift
- **Stats**: Animated counters trigger on scroll via `useInView`
- **Buttons**: `whileHover` y-lift + color transition within palette
