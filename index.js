// document.onload = getLocation();

document.getElementById("gL").addEventListener("click", getLocation);

const locat = document.getElementById("locat");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    locat.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
  console.log(position);
  locat.textContent = `
  Latitude: ${position.coords.latitude} 
  Longitude:${position.coords.longitude}  
  `;
  // const Installation = document.getElementById("watts").value || 1000;
}
