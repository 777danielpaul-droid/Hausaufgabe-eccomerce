# 🛒 E-Commerce React App

![React 19](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black&style=for-the-badge)
![TypeScript 5](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white&style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-6.3.4-646CFF?logo=vite&logoColor=white&style=for-the-badge)
![React Router 7](https://img.shields.io/badge/React%20Router-v7.18%207-CA4245?logo=reactrouter&logoColor=white&style=for-the-badge)
![TailwindCSS v4](https://img.shields.io/badge/TailwindCSS-v4-065D44?logo=tailwindcss&logoColor=white&style=for-the-badge)
![DaisyUI v5](https://img.shields.io/badge/DaisyUI-v5-5A00E0?logo=daisyui&logoColor=white&style=for-the-badge)
![Render](https://img.shields.io/badge/Deployed%20on-Render-000000?logo=render&logoColor=white&style=for-the-badge)

> Eine moderne E-Commerce Landing Page mit React 19, TypeScript, TailwindCSS v4 + DaisyUI v5 und React Router 7. Baut auf dem Vanilla-JS-Prototype auf und erweitert es mit professioneller State-Verwaltung.

---

## 🚀 Features

- **Produktkatalog** von [FakeStoreAPI](https://fakestoreapi.com)
- **Warenkorb** mit localStorage-Persistenz
- **Kategorie-Filterung** via dynamischer Routen
- **Produkt-Detailseiten** mit Bildern & Beschreibungen
- **Live-Warenkorb-Anzeige** (Anzahl + Summe) in der Navbar
- **Responsive Design** (Mobile First)

---

## 🛠️ Tech Stack

| Layer | Technologie |
|-------|-------------|
| **Framework** | React 19 + Vite |
| **Sprache** | TypeScript 5 |
| **Routing** | React Router 7 |
| **Styling** | TailwindCSS v4 + DaisyUI v5 |
| **State** | React Context API |
| **Persistenz** | localStorage |
| **API** | fetch() to FakeStoreAPI |
| **Deployment** | Render.com |

---

## 📁 Projektstruktur

```
src/
├── components/
│   ├── Navbar.tsx       # Persistent nav mit Warenkorb-Badge
│   └── ProductCard.tsx  # Wiederverwendbare Karte mit +/- Controls
├── contexts/
│   └── CartContext.tsx  # Globaler Context für Warenkorb-State
├── layouts/
│   └── Layout.tsx       # Wrapper für alle Seiten
├── pages/
│   ├── Home.tsx         # Kategorien + Produktliste
│   ├── Cart.tsx         # Tabellarische Warenkorb-Ansicht
│   ├── Category.tsx     # Dynamische Kategorie-Route
│   └── Product.tsx      # Detailseite
├── types/
│   └── product.ts       # TypeScript Interfaces
├── utils/
│   ├── api.ts           # API Calls + Price-Formatter
│   └── cartStorage.ts   # localStorage Wrapper
└── style.css            # TailwindCSS Base
```

---

## 🔧 Entwicklung

```bash
npm install
npm run dev        # Dev Server auf http://localhost:8100
npm run build      # Produktiv-Build
```

---

## 🏗️ Deployment

Deployt auf **Render.com** via `render.yaml`:

- **Build**: `npm install && npm run build`
- **Publish**: `dist/`

---

## 💡 Hintergrund

Entstanden im Rahmen des 🧩 **Multi-module Exercises** — migriert von Vanilla-JS/ES-Modulen zu React mit TypeScript. Behält die ursprüngliche API-Anbindung und Warenkorb-Logik bei, aber erweitert sie um:

- React Context statt localStorage-Direktzugriff
- Typed Contracts statt plain JS
- DaisyUI-Komponenten statt manuelles CSS
