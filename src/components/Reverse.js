{/*import React from 'react';

function Reverse() {
  function reverseStyles() {
    var elements = document.querySelectorAll("*");
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var styles = window.getComputedStyle(element);
      for (var j = 0; j < styles.length; j++) {
        var styleName = styles[j];
        var styleValue = styles.getPropertyValue(styleName);
        element.style[styleName] = getReverseValue(styleName, styleValue);
      }
    }
  }

  function getReverseValue(styleName, styleValue) {
    if (styleValue === "") {
      return "";
    }
    if (styleName === "bg" || styleName === "text") {
      return getReverseColor(styleValue);
    }
    // Add additional style properties as needed
    return styleValue;
  }

  function getReverseColor(color) {
    if (color === "transparent") {
      return color;
    }
    var rgbValues = color.substring(4, color.length - 1).split(",");
    var r = parseInt(rgbValues[0]);
    var g = parseInt(rgbValues[1]);
    var b = parseInt(rgbValues[2]);
    var rHex = (255 - r).toString(16).padStart(2, "0");
    var gHex = (255 - g).toString(16).padStart(2, "0");
    var bHex = (255 - b).toString(16).padStart(2, "0");
    return "#" + rHex + gHex + bHex;
  }

  return (
    <div>
      <button onClick={reverseStyles}>Reverse Styles</button>
      
    </div>
  );
}

export default Reverse;
*/}