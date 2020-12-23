import Utils from './Utils';

const utils = new Utils();

class Table {
  constructor() {
    this.populationEarth = 7827000000;
    this.oneHundredThousand = 100000;
    this.innerContainer = document.querySelector('.table .section__inner');
    this.btnExpand = this.innerContainer.querySelector('[data-btn-expand]');
  }

  setEventBtnExpand() {
    this.btnExpand.addEventListener('click', () => {
      this.innerContainer.classList.toggle('expanded');
    });
  }

  viewData() {
    const tableList = document.querySelector('.table__list');
    this.data = utils.infoForAllPeriod().then((data) => {
      data.forEach((element) => {
        const li = document.createElement('li');
        li.className = 'table__list-item';
        li.innerHTML = `<div class="table__item table__item--name">
            ${element.country}
        </div>
        <div class="table__item table__item--cases">
          ${element.cases}
        </div>
        <div class="table__item table__item--death">
            ${element.deaths}
        </div>
        <div class="table__item table__item--recovered">
          ${element.recovered}
        </div>`;
        tableList.append(li);
      });
    });
  }

  viewDataLastDay() {
    const tableList = document.querySelector('.table__list');
    this.data = utils.infoForAllPeriod().then((data) => {
      data.forEach((element) => {
        const li = document.createElement('li');
        li.className = 'table__list-item';
        li.innerHTML = `<div class="table__item table__item--name">
                ${element.country}
            </div>
            <div class="table__item table__item--cases">
              ${element.todayCases}
            </div>
            <div class="table__item table__item--death">
                ${element.todayDeaths}
            </div>
            <div class="table__item table__item--recovered">
              ${element.todayRecovered}
            </div>`;
        tableList.append(li);
      });
    });
  }

  viewDataFor100ThousandAll() {
    const tableList = document.querySelector('.table__list');
    this.data = utils.infoForAllPeriod().then((data) => {
      data.forEach((element) => {
        const li = document.createElement('li');
        li.className = 'table__list-item';
        li.innerHTML = `<div class="table__item table__item--name">
          ${element.country}
          </div>
          <div class="table__item table__item--cases">
            ${Math.round((element.cases * this.oneHundredThousand) / element.population)}
          </div>
          <div class="table__item table__item--death">
              ${Math.round((element.deaths * this.oneHundredThousand) / element.population)}
          </div>
          <div class="table__item table__item--recovered">
            ${Math.round((element.recovered * this.oneHundredThousand) / element.population)}
          </div>`;
        tableList.append(li);
      });
    });
  }

  viewDataFor100ThousandLast() {
    const tableList = document.querySelector('.table__list');
    this.data = utils.infoForAllPeriod().then((data) => {
      data.forEach((element) => {
        const li = document.createElement('li');
        li.className = 'table__list-item';
        li.innerHTML = `<div class="table__item table__item--name">
          ${element.country}
          </div>
          <div class="table__item table__item--cases">
            ${Math.round((element.todayCases * this.oneHundredThousand) / element.population)}
          </div>
          <div class="table__item table__item--death">
              ${Math.round((element.todayDeaths * this.oneHundredThousand) / element.population)}
          </div>
          <div class="table__item table__item--recovered">
            ${Math.round((element.todayRecovered * this.oneHundredThousand) / element.population)}
          </div>`;
        tableList.append(li);
      });
    });
  }
}

export default Table;
