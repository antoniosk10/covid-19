class GlobalCases {
  constructor() {
    this.innerContainer = document.querySelector('.global-cases .section__inner');
    this.btnExpand = this.innerContainer.querySelector('[data-btn-expand]');
  }

  init() {
    this.setEventBtnExpand();
  }

  setEventBtnExpand() {
    this.btnExpand.addEventListener('click', () => {
      this.innerContainer.classList.toggle('expanded');
    });
  }
}

export default GlobalCases;
