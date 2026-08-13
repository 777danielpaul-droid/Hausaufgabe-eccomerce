# 🛒 E-Commerce React App

Eine moderne E-Commerce Landing Page mit React 19, TypeScript, TailwindCSS v4 + DaisyUI v5 und React Router 8. Baut auf dem Vanilla-JS-Prototype auf und erweitert es mit professioneller State-Verwaltung.

## 🚀 Features

- **Produktkatalog** von [FakeStoreAPI](https://fakestoreapi.com)
- **Warenkorb** mit localStorage-Persistenz
- **Kategorie-Filterung** via dynamischer Routen
- **Produkt-Detailseiten** mit Bildern & Beschreibungen
- **Live-Warenkorb-Anzeige** (Anzahl + Summe) in der Navbar
- **Responsive Design** (Mobile First)

## 🛠️ Tech Stack

| Layer | Technologie |
|-------|-------------|
| **Framework** | React 19 + Vite |
| **Sprache** | TypeScript 5 |
| **Routing** | React Router 8 |
| **Styling** | TailwindCSS v4 + DaisyUI v5 |
| **State** | React Context API |
| **Persistenz** | localStorage |
| **API** | fetch() to FakeStoreAPI |
| **Deployment** | Render.com |

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

## 🔧 Entwicklung

```bash
# Repository clonen & Dependencies
git clone git@github.com:777danielpaul-droid/Hausaufgabe-eccomerce.git
cd Hausaufgabe-eccomerce
npm install

# Dev Server (Port 8100)
npm run dev

# Build
npm run build
```

## 🏗️ Deployment

Deployt auf [Render.com](https://render.com) via `render.yaml`:

```bash
# Build-Command: npm install && npm run build
# Publish Directory: dist
```

## 💡 Hintergrund

Entstanden im Rahmen des 🧩 Multi-module Exercises — migriert von Vanilla-JS/ES-Modulen zu React mit TypeScript. Behält die ursprüngliche API-Anbindung und Warenkorb-Logik bei, aber erweitert sie um:

- React Context statt localStorage-Direktzugriff
- Typed Contracts statt plain JS
- DaisyUI-Komponenten statt manuelles CSS
