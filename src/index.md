---
title: "Sunset on Cerro Paranal"
layout: "layouts/home.html"
image:
  link: "chile.webp"
  alt: "A 360º panorama of Cerro Paranal and the VLT at sunset, just before the mountain is vacated and observation begins."
  yaw: "80"
  pitch: "0"
  fov: "90"
  credit:
    name: "ESO"
    link: "https://www.eso.org/public/images/ESO_Paranal_360_Marcio_Cabral_Chile_08-CC/"
---

# {{ title | addNbsp | safe }}

{{ image.alt | addNbsp | safe }} Image&nbsp;credit:&nbsp;<a href="{{ image.credit.link }}">{{ image.credit.name }}</a>
