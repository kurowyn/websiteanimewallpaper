// ==UserScript==
// @name         Anime Background Image For Every Website
// @version      2026-11-06
// @description  Makes browsing a little more enjoyable, by making the websites you visit have an Anime background image. Currently a WIP!
// @author       Kurowyn
// @match        https://*/*
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const customBackgroundImageHTML = `
    <div id="customBackground">
<button id="backgroundToggleButton">Toggle Anime Background Image</button><style>
.hidden-image {
  display: none;
}

#customBackground {
  position: fixed;
  z-index: 3000;
  inset: 0;
  pointer-events: none;
}

#customBackground::before {
  position: absolute;
  content: "";
  inset: 0;
  opacity: 0.2;

  background-image: var(--bg-url);
  background-size: 100% auto;
  background-position: 0% 0%;
}

#backgroundToggleButton {
  pointer-events: auto;

  position: absolute;
  bottom: 5cqh;
  right: 2cqw;
  z-index: 4000;

  font-weight: 500;
  text-align: center;
  opacity: 0.1;
  overflow: scroll;
  padding: 10px;
  width: 100px;

  border: 2px solid dodgerblue;
  background-color: #ffffff11;
  color: #00ccff;

  transition: opacity 0.3s ease;
}

#backgroundToggleButton:hover {
  opacity: 1.0;
}
</style>
</div>
`
    document.body.insertAdjacentHTML('afterbegin', customBackgroundImageHTML)

    document.getElementById('backgroundToggleButton').addEventListener('click', () => {
        // You can change this to whatever you want!
        let backgroundURL = 'https://raw.githubusercontent.com/ThePrimeagen/anime/refs/heads/master/lose-control.png'

        let isBackgroundOn = document.getElementById('customBackground').style.getPropertyValue('--bg-url') !== ''

        let newBackground = isBackgroundOn ? '' : `url("${backgroundURL}")`

        document.getElementById('customBackground').style.setProperty('--bg-url', newBackground)
    })

    document.getElementById('backgroundToggleButton').click()
})();
