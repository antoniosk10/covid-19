class Utils {
  infoForAllPeriod() {
    this.url = 'https://corona.lmao.ninja/v2/countries';
    return fetch(this.url)
      .then((response) => response.json())
      .then((data) => data);
  }
}
export default Utils;
