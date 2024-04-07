const titlesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

let myMap = L.map('myMap').setView([-25.472611, -54.644778], 17)

L.tileLayer(titlesProvider, {
    attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18

}).addTo(myMap)

let marker = L.marker([-25.472611, -54.644778]).addTo(myMap)

marker.bindPopup( `<div><a href="https://www.google.com/maps/place/25%C2%B028'21.4%22S+54%C2%B038'41.2%22W/@-25.4728101,-54.6457257,17.42z/data=!4m9!1m2!10m1!1e2!3m5!1s0x94f684fb0f2fa9b7:0x0!7e2!8m2!3d-25.4726016!4d-54.6447686" target="_blank" style="text-decoration: none; text-align: center; color: black; font-weight: bold;"> Avda. Perú y Calle 15 de Agosto Nº. 64 - Barrio Don Bosco - Ciudad del Este - Alto Paraná - Paraguay</a></div>`).openPopup();

    