import Chart from './assets/plugins/ChartJS/Chart';
import Utils from './Utils';

class Graph {
  constructor() {
    this.innerContainer = document.querySelector('.graph .section__inner');
    this.btnExpand = this.innerContainer.querySelector('[data-btn-expand]');
    this.period = Graph.getPeriod();
  }

  init() {
    this.setEventBtnExpand();
    Utils.getLastFiveCases(this.period[this.period.length - 1], this.period[0]).then((data) => {
      this.period.pop();
      this.period.reverse();
      this.setGraph(data.map((el) => el.NewConfirmed));
    });
  }

  static getPeriod() {
    const arrPeriod = [];
    const DAY_IN_MILLISECONDS = 86400000;
    for (let i = 0; i < 6; i += 1) {
      const today = new Date(Date.now() - DAY_IN_MILLISECONDS * i);
      arrPeriod.push(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`);
    }
    return arrPeriod;
  }

  setEventBtnExpand() {
    this.btnExpand.addEventListener('click', () => {
      this.innerContainer.classList.toggle('expanded');
      this.chart.canvas.style.maxHeight = `${this.innerContainer.offsetHeight}px`;
    });
  }

  setGraph(arrData) {
    const ctx = document.getElementById('myChart').getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.period,
        datasets: [{
          label: 'New Cases in the last 5 days',
          data: arrData,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        }],
      },
      responsive: true,
    });
  }
}

export default Graph;
