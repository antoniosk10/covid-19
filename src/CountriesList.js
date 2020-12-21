class CountriesList {
  constructor() {
    this.arrayCountries = Array.prototype.slice.call(document.querySelectorAll('.countries-cases__list-item'));
    this.search = document.querySelector('[data-search-country]');
    this.innerContainer = document.querySelector('.countries-cases .section__inner');
    this.btnExpand = this.innerContainer.querySelector('[data-btn-expand]');
  }

  init() {
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
      countryItem.style.display = 'block';
    });
  }
}

export default CountriesList;
