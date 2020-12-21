i/* mport Utils from './Utils';

const utils = new Utils();

class Table {
  viewData() {
    this.data = utils.infoForAllPeriod().then((data) => {
      data.Countries.forEach((element) => {
        const tableList = document.querySelector('.table__list');
        const li = document.createElement('li');
        li.className = 'table__list-item';
        li.innerHTML = `<div class="table__item table__item--name">
            ${element.Country}
        </div>
        <div class="table__item table__item--cases">
          ${element.TotalConfirmed}
        </div>
        <div class="table__item table__item--death">
            ${element.TotalDeaths}
        </div>
        <div class="table__item table__item--recovered">
          ${element.TotalRecovered}
        </div>`;
        tableList.append(li);
      });
    });
  }
}

export default Table;
 */
