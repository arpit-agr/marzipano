---
title: "Peppermint Powerplant"
layout: "layouts/home.html"
image:
  link: "powerplant.webp"
  alt: "Abandoned industrial peppermint powerplant covered in graffiti."
  yaw: "36"
  pitch: "0"
  fov: "90"
  credit:
    name: "Andreas Mischok"
    link: "https://polyhaven.com/a/peppermint_powerplant_2"
---

# {{ title | addNbsp | safe }}

{{ image.alt | addNbsp | safe }} Image&nbsp;credit:&nbsp;<a href="{{ image.credit.link }}">{{ image.credit.name | addNbsp | safe }}</a>
