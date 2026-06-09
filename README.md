# InAmigos Foundation — Single Page Application (React)

A highly immersive, premium single page application (SPA) for the **InAmigos Foundation** built using **React 19**, **Vite**, and **React Router**. This application features stellar interactive canvas animations, count-up statistics, a 3D cylindrical gallery with touch gestures, and a live searchable volunteer roster.

## 🚀 Live Demo & Deployment
This application is fully optimized for **Vercel** deployment. It includes a `vercel.json` file configuring SPA routing rewrites to ensure clean URLs and page refreshes work flawlessly across all routes (`/`, `/blog`, `/contact`, `/volunteer`).

## ✨ Features & Architecture
- **Interactive Particle Starfield**: Powered by a custom `<VortexBackground />` canvas renderer that interacts dynamically with the mouse.
- **3D Cylindrical Gallery**: A custom React 3D physics-based dome gallery with auto-rotation drift, momentum throwing, touch drag support, and fullscreen portal lightbox view.
- **Live Search & Paginated Roster**: Real-time category-filtered search on a 34-member roster built into the homepage, paginated at 10 members per page.
- **Dynamic Category Sorting**: Filterable blog listing page supporting 6 custom-written news and event summaries.
- **Global Toast Notification Service**: A lightweight React context (`ToastProvider`) triggering custom animations for contact and newsletter submissions.
- **State Preservation**: Persists contact messages and volunteer applications locally using `localStorage`.

## 🛠️ Tech Stack
- **Core**: React 19, Vite
- **Routing**: React Router (v7)
- **Styling**: Vanilla CSS with HSL design variables
- **Icons**: FontAwesome v6 (loaded via CDN)

## 📦 Local Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Jaswanth-Reddy-2006/InAmigos-Foundation-React.git
   cd InAmigos-Foundation-React
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser.

4. **Build for Production**:
   ```bash
   npm run build
   ```

## 🔒 Vercel Config
To ensure Vercel does not return `404` errors when refreshing subpages, the `vercel.json` file redirects all traffic back to `index.html`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```
