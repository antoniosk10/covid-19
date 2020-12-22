import Utils from './Utils';

const utils = new Utils();

class GlobalCases {
  constructor() {
    this.innerContainer = document.querySelector('.global-cases .section__inner');
    this.btnExpand = this.innerContainer.querySelector('[data-btn-expand]');
    this.globalQuantity = document.querySelector('.global-cases__quantity');
  }

  init() {
    utils.infoForAllPeriod().then((data) => {
      this.setGlobalCases(data);
    }).catch(() => { this.createMessageError(); });
    this.setEventBtnExpand();
  }

  setEventBtnExpand() {
    this.btnExpand.addEventListener('click', () => {
      this.innerContainer.classList.toggle('expanded');
    });
  }

  setGlobalCases(data) {
    this.globalQuantity.textContent = data.Global.TotalConfirmed;
  }

  createMessageError() {
    this.globalQuantity.textContent = 'Try Later :(';
  }
}

export default GlobalCases;
