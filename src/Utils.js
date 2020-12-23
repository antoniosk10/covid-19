class Utils {
  infoForAllPeriod() {
    this.url = 'https://corona.lmao.ninja/v2/countries';
    return fetch(this.url)
      .then((response) => response.json())
      .then((data) => data);
  }

  static getCoordinatesCountries() {
    return fetch('https://corona.lmao.ninja/v2/countries')
      .then((response) => response.json())
      .then((data) => data);
  }

  static getLastFiveCases(from, to) {
    return fetch(`https://api.covid19api.com/world?from=${from}T00:00:00Z&to=${to}T00:00:00Z`)
      .then((response) => response.json())
      .then((data) => data);
  }
}
export default Utils;
