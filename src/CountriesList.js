import Utils from './Utils';

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
    utils.infoForAllPeriod().then((data) => {
      this.setCountryList(data);
    }).catch(() => { CountriesList.createMessageError(); });
    this.setEventSearchCountry();
    this.setEventBtnExpand();
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
    data.Countries.forEach((el) => {
      layout += `<li class="countries-cases__list-item">
      <span class="countries-cases__quantity">${el.TotalConfirmed}</span>
      <span class="countries-cases__country-name">${el.Country}</span>
      </li>`;
    });
    return layout;
  }

  static createMessageError() {
    this.countryList.innerHTML = 'Try Later :(';
  }
}

export default CountriesList;
