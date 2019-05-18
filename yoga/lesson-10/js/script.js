window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  class options {
    constructor (width, height, bg, fontSize, textAlign) {
      this.width = width;
      this.height = height;
      this.bg = bg;
      this.fontSize = fontSize;
      this.textAlign = textAlign;
    }

    addBlock () {

      let element = document.createElement("div");

      element.textContent = " ТЕКСТ ";
      element.style.cssText = ` width: ${this.width}vw; 
                                height: ${this.height}vh; 
                                background-color: ${this.bg}; 
                                font-size: ${this.fontSize}px; 
                                text-align: ${this.textAlign}; `
      document.body.appendChild(element);
    }
  }
  let div = new options(100, 100, "red", 70, "center");
  div.addBlock();
});