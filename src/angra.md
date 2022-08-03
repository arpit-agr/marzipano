---
title: "Angra"
layout: "layouts/home.html"
image:
  link: "angra.webp"
  alt: "Angra, Portugal is a UNESCO classified World Heritage Site."
  yaw: "180"
  pitch: "0"
  fov: "90"
  credit:
    name: "Marzipano"
    link: "https://www.marzipano.net/demos/equirect/"
---

# {{ title | addNbsp | safe }}

{{ image.alt | addNbsp | safe }} Image&nbsp;credit:&nbsp;<a href="{{ image.credit.link }}">{{ image.credit.name }}</a>
