
const map = L.map('map').setView([-6.25, 106.8], 13);

// Basemap Variasi
const basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 70,
  attribution: '&copy; OpenStreetMap contributors'
});

const basemapSatellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/' +
  'World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  maxZoom: 70,
  attribution: 'Tiles &copy; Esri'
});

const basemapTopo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
  maxZoom: 70,
  attribution: 'Map data: &copy; OpenTopoMap (CC-BY-SA)'
});

const basemapCartoLight = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  maxZoom: 70,
  attribution: '&copy; CartoDB, OpenStreetMap contributors'
});

const basemapCartoDark = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  maxZoom: 70,
  attribution: '&copy; CartoDB, OpenStreetMap contributors'
});

const basemapGoogleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
  maxZoom: 70,
  subdomains:['mt0','mt1','mt2','mt3'],
  attribution: '&copy; Google'
});

const basemapGoogleSatellite = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
  maxZoom: 70,
  subdomains:['mt0','mt1','mt2','mt3'],
  attribution: '&copy; Google'
});

const basemapGoogleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
  maxZoom: 100,
  subdomains:['mt0','mt1','mt2','mt3'],
  attribution: '&copy; Google'
});

basemapOSM.addTo(map);

// WMS Layer
const layerTransmisi = L.tileLayer.wms("http://localhost:8080/geoserver/wms", {
  layers: 'pdam:pipa_transmisi',
  format: 'image/png',
  transparent: true,
  attribution: "PERUMDA Air Minum Giri Nawa Tirta"
}).addTo(map);

const layerDistribusi = L.tileLayer.wms("http://localhost:8080/geoserver/wms", {
  layers: 'pdam:pipa_distribusi',
  format: 'image/png',
  transparent: true,
  attribution: "PERUMDA Air Minum Giri Nawa Tirta"
}).addTo(map);

const layerSR = L.tileLayer.wms("http://localhost:8080/geoserver/wms", {
  layers: 'pdam:sambungan_rumah',
  format: 'image/png',
  transparent: true,
  attribution: "PERUMDA Air Minum Giri Nawa Tirta"
}).addTo(map);

// Layer kontrol
const baseMaps = {
  "Peta Jalan (OSM)": basemapOSM,
  "Citra Satelit (Esri)": basemapSatellite,
  "Peta Topografi": basemapTopo,
  "Carto Light": basemapCartoLight,
  "Carto Dark": basemapCartoDark,
  "Google Streets": basemapGoogleStreets,
  "Google Satellite": basemapGoogleSatellite,
  "Google Hybrid": basemapGoogleHybrid,
};

const overlayMaps = {
  "Teknik: Pipa Transmisi": layerTransmisi,
  "Teknik: Pipa Distribusi": layerDistribusi,
  "Hublang: Sambungan Rumah": layerSR
};

L.control.layers(baseMaps, overlayMaps).addTo(map);

// Geocoder / Search
L.Control.geocoder({
  defaultMarkGeocode: true,
  placeholder: "Cari lokasi atau alamat...",
  position: "topleft"
}).addTo(map);
