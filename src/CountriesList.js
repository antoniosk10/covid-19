import Utils from './Utils';
import map from './Map';

const utils = new Utils();

class CountriesList {
  constructor() {
    this.arrayCountries = Array.prototype.slice.call(document.querySelectorAll('.countries-cases__list-item'));
    this.search = document.querySelector('[data-search-country]');
    this.innerContainer = document.querySelector('.countries-cases .section__inner');
    this.btnExpand = this.innerContainer.querySelector('[data-btn-expand]');
    this.countryList = document.querySelector('.countries-cases__list');
  }

  init() {
    utils.getCoordinatesCountries().then((data) => {
      this.setCountryList(data);
    }).catch(() => { this.createMessageError(); });
    this.setEventSearchCountry();
    this.setEventBtnExpand();
    this.setEventItems();
  }

  setEventBtnExpand() {
    this.btnExpand.addEventListener('click', () => {
      this.innerContainer.classList.toggle('expanded');
    });
  }

  setEventSearchCountry() {
    this.search.addEventListener('input', () => {
      this.filterCountry(this.search.value);
    });
  }

  filterCountry(value) {
    this.arrayCountries = Array.prototype.slice.call(document.querySelectorAll('.countries-cases__list-item'));
    this.showAllCountry();
    this.arrayCountries.forEach((el) => {
      const countryItem = el;
      const countryName = countryItem.querySelector('.countries-cases__country-name').textContent;
      if (!countryName.match(`^${value}`)) {
        countryItem.style.display = 'none';
      }
    });
  }

  showAllCountry() {
    this.arrayCountries.forEach((el) => {
      const countryItem = el;
      countryItem.style.display = 'flex';
    });
  }

  setCountryList(data) {
    this.countryList.innerHTML = CountriesList.createCountryList(data);
  }

  static createCountryList(data) {
    let layout = '';
    data.forEach((el) => {
      layout += `<li class="countries-cases__list-item" data-lat='${el.countryInfo.lat}' data-long='${el.countryInfo.long}'>
      <span class="countries-cases__quantity">${el.cases}</span>
      <span class="countries-cases__country-name">${el.country}</span>
      </li>`;
    });
    return layout;
  }

  createMessageError() {
    this.countryList.innerHTML = 'Try Later :(';
  }

  setEventItems() {
    this.countryList.addEventListener('click', (e) => {
      const item = e.target.closest('.countries-cases__list-item');
      if (item) {
        map.map.panTo([+item.dataset.lat, +item.dataset.long]);
        map.map.setZoom(10);
      }
    });
  }
}

export default CountriesList;
