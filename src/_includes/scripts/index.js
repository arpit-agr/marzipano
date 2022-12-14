/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

import Marzipano from "marzipano";

let panoElement = document.getElementById('pano');
let imgUrlPrefix = "/images/";
let imgTitle = panoElement.getAttribute("data-image");
let imgYaw = panoElement.getAttribute("data-yaw");
let imgPitch = panoElement.getAttribute("data-pitch");
let imgFov = panoElement.getAttribute("data-fov");

// Create viewer.
var viewer = new Marzipano.Viewer(panoElement);

// Create source.
var source = Marzipano.ImageUrlSource.fromString(
  imgUrlPrefix + imgTitle
);

var initialView = {
  yaw: imgYaw * Math.PI/180,
  pitch: imgPitch * Math.PI/180,
  fov: imgFov * Math.PI/180
};

// Create geometry.
var geometry = new Marzipano.EquirectGeometry([{ width: 4000 }]);

// Create view.
var limiter = Marzipano.RectilinearView.limit.traditional(1024, 120*Math.PI/180);
var view = new Marzipano.RectilinearView(initialView, limiter);

// Create scene.
var scene = viewer.createScene({
  source: source,
  geometry: geometry,
  view: view,
  pinFirstLevel: true
});

// Display scene.
scene.switchTo();