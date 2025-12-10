# Provacclean Website

## WhatsApp Nummer Aanpassen

Het WhatsApp-nummer staat op de volgende locatie:
- **Bestand**: `preview.html`
- **Regel**: 419
- **Huidige code**: `<a href="https://wa.me/+3187846448" target="_blank" class="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition inline-flex items-center">`

Om het nummer te wijzigen, verander je het deel `+3187846448` naar het gewenste nummer. Zorg ervoor dat je het internationale formaat behoudt (met de landcode).

## Teksten Aanpassen

### In preview.html
Alle teksten in de website zijn beschikbaar in twee talen (Turks en Engels) en worden gemarkeerd met `data-lang` attributen:

- Turkse teksten: `<span data-lang="tr">Turkse tekst</span>`
- Engelse teksten: `<span data-lang="en">Engelse tekst</span>`

Om teksten aan te passen, zoek je de betreffende sectie in `preview.html` en wijzig je de tekst binnen de `<span>` tags.

### Belangrijke secties:
- **Header menu**: regels 30-65
- **Hero sectie**: regels 70-95
- **Diensten sectie**: begint rond regel 100
- **Sectoren sectie**: midden in het bestand
- **Contact sectie**: tegen het einde van het bestand

## Foto's Aanpassen

Alle afbeeldingen staan in de map `public/images/`. Om een afbeelding te vervangen:

1. Plaats je nieuwe afbeelding in deze map
2. Zoek in `preview.html` naar de afbeelding die je wilt vervangen
3. Wijzig het `src` attribuut naar het pad van je nieuwe afbeelding

### Belangrijke afbeeldingen:
- **Logo**: `./public/images/WhatsApp Image 2025-09-19 at 09.57.07 - Bewerkt.png` (regel 28 en 547)
- **Hero afbeelding**: `./public/images/Canva turkiye.png` (regel 115)
- **Service iconen**: diverse SVG bestanden in de `public/images/` map

### Afmetingen van de hoofdfoto
De hoofdfoto (hero afbeelding) wordt weergegeven met de volgende eigenschappen:
- **Hoogte**: De container heeft een hoogte van 80% van de viewport hoogte (`h-[80vh]`)
- **Breedte**: De afbeelding neemt de volledige breedte van de container in
- **Weergave**: De afbeelding wordt geschaald om de container te vullen (`object-cover`) met een opacity van 80%

Voor het beste resultaat, gebruik een afbeelding met een hoge resolutie en een aspect ratio van ongeveer 16:9 of 4:3.

## Deployment met Vercel

Voor deployment met Vercel:
1. Zorg ervoor dat je `vercel.json` bestand correct is ingesteld
2. Gebruik "Static Site" als Framework Preset
3. Stel de Root Directory in op `.`

## Mobiel Menu

Het mobiele menu is nu volledig functioneel. De code hiervoor staat in:
- HTML structuur: regels 67-104 in `preview.html`
- JavaScript functionaliteit: in het `<script>` gedeelte aan het einde van het bestand

## Vercel Analytics

Vercel Web Analytics is toegevoegd zodat je verkeer kunt meten zonder extra cookies.

- Toegevoegd in `preview.html`: vlak voor `</body>` staat een duidelijk gemarkeerd blok:
  - `<!-- Vercel Analytics: eenvoudig terug te vinden block -->`
  - `<script defer src="/_vercel/insights/script.js"></script>`
- Toegevoegd in `public/index.html`: hetzelfde blok staat direct boven `</body>`.

Op Vercel werkt deze script automatisch. Lokaal doet het niets en veroorzaakt geen fouten. Wil je Analytics verwijderen of aanpassen, zoek dan naar de bovenstaande comment.
