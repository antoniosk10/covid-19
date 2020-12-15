class Map {
  constructor() {
    this.innerContainer = document.querySelector('.map .section__inner');
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

export default Map;
