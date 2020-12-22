class Utils {
  infoForAllPeriod() {
    this.url = 'https://api.covid19api.com/summary';
    return fetch(this.url)
      .then((response) => response.json())
      .then((data) => data);
  }

  getCoordinatesCountries() {
    this.url = 'https://corona.lmao.ninja/v2/countries';
    return fetch(this.url)
      .then((response) => response.json())
      .then((data) => data);
  }
}
export default Utils;
