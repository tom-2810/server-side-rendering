<!-- > _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md) -->

# ⚙️ Toolgankelijk
Tool in checklist vorm om website toegankelijker te maken.

![image](https://user-images.githubusercontent.com/112861614/225776803-49c18e73-4257-42db-ad5a-83c4e93b9f2f.png)

<!--
## 📃 Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Gebruik](#gebruik)
  * [Licentie](#licentie)
  * [Bronnen](#bronnen)
 -->

## 🤔 Beschrijving
Samen met deze toegankelijkheids-tool maakt u eenvouding websites en apps toegankelijker via een checklist, geleidt door de WCAG principes en richtlijnen.
![image](https://user-images.githubusercontent.com/112861614/225774291-0bf30b5b-d8e8-4797-a4d1-63d580863663.png)
Live link gehost via Cyclic: https://puce-sleepy-gecko.cyclic.app/ 

## 💻 Kenmerken
Het Toolboard is tot stand gekomen met ejs en Node.
Door middel van een nested forEach-loop worden alle richtlijnen per principe uit de [Vervoerregio Amsterdam API](https://api.vervoerregio-amsterdam.fdnd.nl/api/v1/principles) gehaald.
```js
const url = 'https://api.vervoerregio-amsterdam.fdnd.nl/api/v1/principes'
```
Verder is navigatie mogelijk door middel van Express Routing.

Route in app.js
```js
app.get('/toolboard', function (request, response) {
  fetchJson(url).then((data) => {
  response.render('toolboard', {data: data, active: '/toolboard'})
  })
})
```

## ⬇️ Installatie
Fork het project en voer eerst `npm install` uit in de terminal om alle nodige packages en dependencies binnen te halen. Vervolgens maakt `npm start` een port vrij om de website te bekijken in de browser.

## 🙃 Gebruik
Werk met deze checklist de toegankelijkheidsrichtlijnen af per succescriteria om een website stap voor stap te beoordelen. Vervolgens kan je aan de hand van de onvoltooide richtlijnen verbeteringen aanbrengen aan de behandelde website.

<!-- ## Bronnen -->

## 👾 Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
