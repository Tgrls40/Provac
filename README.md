# Provacclean Website

A bilingual (Turkish/English) website for Provacclean industrial cleaning services.

## Setup Instructions

1. Install dependencies:
```
npm install
```

2. Create a `public/images` folder and add the following images:
   - provacclean-logo.jpg
   - hero-truck.jpg
   - service-vacuum.jpg
   - service-tank.jpg
   - service-waterjet.jpg
   - sector-cement.jpg
   - sector-petro.jpg
   - sector-food.jpg

3. Start the development server:
```
npm start
```

## Hoe u zelf foto's kunt uploaden

1. **Locatie voor afbeeldingen**:
   - Alle afbeeldingen moeten in de `public/images` map worden geplaatst
   - U kunt deze map vinden in de hoofdmap van het project

2. **Afbeeldingen toevoegen**:
   - Kopieer uw afbeeldingen (.jpg, .png, .svg, etc.) naar de `public/images` map
   - Gebruik duidelijke bestandsnamen zonder spaties (bijv. `mijn-foto.jpg`)
   - Voor de beste prestaties, optimaliseer uw afbeeldingen voordat u ze uploadt

3. **Afbeeldingen gebruiken in de website**:
   - In HTML/JSX: `<img src="./public/images/mijn-foto.jpg" alt="Beschrijving">`
   - In CSS: `background-image: url('./public/images/mijn-foto.jpg');`

## Hosting Instructions

### Option 1: Netlify (Recommended)

1. Create a Netlify account at [netlify.com](https://www.netlify.com/)
2. Build your project:
```
npm run build
```
3. Drag and drop the `build` folder to Netlify's upload area or connect your GitHub repository

### Option 2: Vercel

1. Install Vercel CLI:
```
npm install -g vercel
```
2. Deploy:
```
vercel
```

### Option 3: GitHub Pages

1. Install gh-pages:
```
npm install --save gh-pages
```
2. Add to package.json:
```json
"homepage": "https://yourusername.github.io/provacclean",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
3. Deploy:
```
npm run deploy
```"# Provac" 
