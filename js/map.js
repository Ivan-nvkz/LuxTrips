'use strict';

document.addEventListener('DOMContentLoaded', () => {

   // Карта ==========================================================
   const map = L.map('map-crimea-sev',
      {
         scrollWheelZoom: false
      })
      .setView({
         lat: 44.617538,
         lng: 33.527110,
      }, 13);
   // Add OSM tile leayer to the Leaflet map.
   L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      },
   ).addTo(map);

   const points = [
      {
         title: `
         LUX TRIPS LLC <br/>
         Адрес:  Крым, Балаклава, <br/>
         наб. Грибоедова, 9а, <br/>
         телефон: +7 (888) 888-88-88
                   `,
         lat: 44.617538,
         lng: 33.527110,

      },
   ];

   points.forEach(({ lat, lng, title }) => {
      const icon = L.icon({
         iconUrl: "images/icons/map-icon.svg",
         iconSize: [60, 60],
         iconAnchor: [30, 60],
      });

      const marker = L.marker(
         {
            lat,
            lng,
            title,
         },
         {
            icon,
         },
      );
      marker.addTo(map)
         .bindPopup(title);
   });

   // Карта ==========================================================


   // Карта ==========================================================
   const map2 = L.map('map-crimea-yalta',
      {
         scrollWheelZoom: false
      })
      .setView({
         lat: 44.487316,
         lng: 34.160634,


      }, 13);
   // Add OSM tile leayer to the Leaflet map.
   L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      },
   ).addTo(map2);

   const points2 = [
      {
         title: `
                  LUX TRIPS LLC <br/>
                  Адрес:  Крым, Ялта, <br/>
                  ул. Морская, 5, <br/>
                  телефон: +7 (888) 888-88-88
              `,
         lat: 44.487316,
         lng: 34.160634,


      },
   ];

   points2.forEach(({ lat, lng, title }) => {
      const icon = L.icon({
         iconUrl: "images/icons/map-icon.svg",
         iconSize: [60, 60],
         iconAnchor: [30, 60],
      });

      const marker = L.marker(
         {
            lat,
            lng,
            title,
         },
         {
            icon,
         },
      );
      marker.addTo(map2)
         .bindPopup(title);
   });

   // Карта ==========================================================


   // Карта ==========================================================
   const map3 = L.map('map-sochi',
      {
         scrollWheelZoom: false
      })
      .setView({
         lat: 43.613333,
         lng: 39.709999,
      }, 13);
   // Add OSM tile leayer to the Leaflet map.
   L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      },
   ).addTo(map3);

   const points3 = [
      {
         title: `
           LUX TRIPS LLC <br/>
           Адрес:    Сочи, , <br/>
           ул. Мытнинская, 1, <br/>
           телефон: +7 (888) 888-88-88
        `,
         lat: 43.613333,
         lng: 39.709999,
      },
   ];

   points3.forEach(({ lat, lng, title }) => {
      const icon = L.icon({
         iconUrl: "images/icons/map-icon.svg",
         iconSize: [60, 60],
         iconAnchor: [30, 60],
      });

      const marker = L.marker(
         {
            lat,
            lng,
            title,
         },
         {
            icon,
         },
      );
      marker.addTo(map3)
         .bindPopup(title);
   });

   // Карта ==========================================================









});








