---
title: "Artist Workshop"
layout: "layouts/home.html"
image:
  link: "artist-workshop.webp"
  alt: "Paintings lit with natural midday light in a workshop."
  credit:
    name: "Oliksiy Yakovlyev"
    link: "https://polyhaven.com/a/artist_workshop"
---

# {{ title | addNbsp | safe }}

{{ image.alt | addNbsp | safe }} Image&nbsp;credit:&nbsp;<a href="{{ image.credit.link }}">{{ image.credit.name | addNbsp | safe }}</a>
