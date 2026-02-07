// Year in footer
const y = document.getElementById("y");
if (y) y.textContent = new Date().getFullYear();

// Option C: Apple Maps on iPhone/iPad, Google Maps everywhere else
const address = "3032 Calumet Ave, Valparaiso, IN 46383";
const encoded = encodeURIComponent(address);

const googleMaps = `https://www.google.com/maps/dir/?api=1&destination=${encoded}`;
const appleMaps  = `https://maps.apple.com/?daddr=${encoded}`;

const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
const mapsHref = isIOS ? appleMaps : googleMaps;
