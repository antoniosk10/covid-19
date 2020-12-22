import L from './assets/plugins/Leaflet/leaflet';
import Utils from './Utils';

const utils = new Utils();

class Map {
  constructor() {
    this.innerContainer = document.querySelector('.map .section__inner');
    this.btnExpand = this.innerContainer.querySelector('[data-btn-expand]');
    this.markerImgSrc = './src/assets/images/marker.png';
  }

  init() {
    this.setEventBtnExpand();
    this.createMap();
    utils.getCoordinatesCountries().then((data) => {
      this.setMarkersMap(data);
    }).catch(() => { this.createMessageError(); });
  }

  setEventBtnExpand() {
    this.btnExpand.addEventListener('click', () => {
      this.innerContainer.classList.toggle('expanded');
      this.map.invalidateSize();
    });
  }

  createMap() {
    // eslint-disable-next-line new-cap
    this.map = new L.map('map', {
      center: [0, 0],
      zoom: 2,
    });
    const layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    this.map.addLayer(layer);
  }

  setMarkersMap(data) {
    data.forEach((el) => {
      const marker = L.marker([el.countryInfo.lat, el.countryInfo.long], {
        title: el.country,
        clickable: false,
        draggable: false,
        icon: L.icon({
          iconUrl: this.markerImgSrc,
          iconSize: [50, 50],
        }),
      });
      marker.bindPopup(`Cases: ${el.cases} <br> Deaths: ${el.deaths} <br> Recovered: ${el.recovered} <br>`);
      marker.addTo(this.map);
    });
  }
}

const map = new Map();
map.init();
export default map;
