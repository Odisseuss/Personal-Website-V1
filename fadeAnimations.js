function hasClass(el, cls) {
  if (el.className.match("(?:^|\\s)" + cls + "(?!\\S)")) {
    return true;
  }
}
function addClass(el, cls) {
  if (!el.className.match("(?:^|\\s)" + cls + "(?!\\S)")) {
    el.className += " " + cls;
  }
}

function elementFromTop(elem, classToAdd, distanceFromTop, unit) {
  var winY = window.innerHeight || document.documentElement.clientHeight,
    distTop = elem.getBoundingClientRect().top,
    distPercent = Math.round((distTop / winY) * 100),
    distPixels = Math.round(distTop),
    distUnit;
  distUnit = unit == "percent" ? distPercent : distPixels;
  if (distUnit <= distanceFromTop) {
    if (!hasClass(elem, classToAdd)) {
      addClass(elem, classToAdd);
    }
  }
}

window.addEventListener(
  "scroll",
  function () {
    elementFromTop(
      document.getElementById("laptop"),
      "slide-in-top",
      600,
      "pixels"
    );
    elementFromTop(
      document.getElementById("phone"),
      "slide-in-top",
      600,
      "pixels"
    );
  },
  false
);
