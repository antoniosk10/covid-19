import './assets/styles/style.scss';
import EnglishTrain from './EnglishTrain';
import * as control from './controlElements';
import { getData, setData } from './localStorageUtil';

const englishTrain = new EnglishTrain(control.gameField);
const { body } = document;

const setCurrentActiveMenuItem = (category) => {
  const previousActiveItem = document.querySelector('.menu-item-btn.active');
  const currentActiveItem = document.querySelector(`.menu-item-btn[data-category="${category}"]`);
  previousActiveItem.classList.remove('active');
  currentActiveItem.classList.add('active');
};

const setActiveMenuItem = (item) => {
  const previousActiveItem = document.querySelector('.menu-item-btn.active');
  previousActiveItem.classList.remove('active');
  item.classList.add('active');
};

const toggleConditionField = (condition) => {
  if (condition === 'prePlay') {
    control.mainField.classList.add('main-field--prePlay');
    control.mainField.classList.remove('main-field--play');
  } else if (condition === 'play') {
    control.mainField.classList.remove('main-field--prePlay');
    control.mainField.classList.add('main-field--play');
  } else if (condition === 'train') {
    control.mainField.classList.remove('main-field--prePlay');
    control.mainField.classList.remove('main-field--play');
  }
};

const hideButtons = () => {
  control.startGameBtn.style.display = 'none';
  control.repeatWordBtn.style.display = 'none';
};

const cleanCards = () => {
  const passedCards = Array.prototype.slice.call(document.querySelectorAll('.game-card.passed'));
  passedCards.forEach((card) => {
    card.classList.remove('passed');
  });
};

const goToMain = () => {
  control.gameField.innerHTML = '';
  control.categoriesBlock.style.display = 'flex';
  control.togglePlay.classList.add('switch--hidden');
  control.switchCheckbox.checked = false;
  toggleConditionField('train');
  hideButtons();
  englishTrain.isPlay = false;
  cleanCards();
  control.answersBlock.innerHTML = '';
  englishTrain.isTrainDifficult = false;
};

const toggleSwitch = () => {
  englishTrain.isPlay = !englishTrain.isPlay;
  if (englishTrain.isPlay) {
    toggleConditionField('prePlay');
    control.startGameBtn.style.display = 'flex';
  } else {
    toggleConditionField('train');
    hideButtons();
    cleanCards();
    control.answersBlock.innerHTML = '';
  }
};

const createHeadTable = () => `<tr>
  <th>Word</th>
  <th>Translate</th>
  <th>Category</th>
  <th>Train click</th>
  <th>Right click</th>
  <th>Wrong click</th>
  <th>Percent right click, %</th>
  </tr>`;

const createRowTable = (obj) => {
  const percent = (obj.right * 100) / (obj.right + obj.wrong);

  return `<tr>
  <td>${obj.word}</td>
  <td>${obj.translation}</td>
  <td>${obj.category}</td>
  <td>${obj.countTrainClick}</td>
  <td>${obj.right}</td>
  <td>${obj.wrong}</td>
  <td>${Number.isNaN(percent) ? 0 : Math.floor(percent)}</td>
  </tr>`;
};

const sortStatistics = (arr, sortValue, typeSort) => {
  if (typeSort === 'min') {
    arr.sort((a, b) => (a[sortValue] > b[sortValue] ? 1 : -1));
  } else {
    arr.sort((a, b) => (a[sortValue] < b[sortValue] ? 1 : -1));
  }
};

const hasPercentWrong = (element) => ((element.wrong * 100) / (element.right + element.wrong)) > 0;

const sortMostDifficult = (arr) => {
  arr.sort((a, b) => {
    const checkA = Number.isNaN((a.wrong * 100) / (a.right + a.wrong));
    const checkB = Number.isNaN((b.wrong * 100) / (b.right + b.wrong));
    const percentWrongA = checkA ? 0 : (a.wrong * 100) / (a.right + a.wrong);
    const percentWrongB = checkB ? 0 : (b.wrong * 100) / (b.right + b.wrong);
    return percentWrongA < percentWrongB ? 1 : -1;
  });
};

const createEmptyTrain = () => {
  control.gameField.innerHTML = '<p class=\'no-words\'>No difficult words.</p>';
};

const getTypeSort = () => control.selectSort.selectedOptions[0].dataset.typeSort;

const createTable = () => {
  const table = document.createElement('table');
  const objStatistics = getData('englishStatistics');
  const newStatArr = [];
  table.innerHTML += createHeadTable();

  Object.keys(objStatistics).forEach((elem) => {
    Object.keys(objStatistics[elem]).forEach((el) => {
      newStatArr.push(objStatistics[elem][el]);
    });
  });

  sortStatistics(newStatArr, control.selectSort.value, getTypeSort());

  newStatArr.forEach((el) => {
    table.innerHTML += createRowTable(el);
  });

  control.statisticsTable.innerHTML = '';
  control.statisticsTable.append(table);
};

const goToDifficultTrain = () => {
  const arrStatMostDifficult = [];
  const objStatistics = getData('englishStatistics');
  const mostDifficult = [];

  control.togglePlay.classList.add('switch--hidden');
  control.switchCheckbox.checked = false;
  toggleConditionField('train');
  hideButtons();
  englishTrain.isPlay = false;
  cleanCards();
  control.answersBlock.innerHTML = '';

  Object.keys(objStatistics).forEach((elem) => {
    Object.keys(objStatistics[elem]).forEach((el) => {
      arrStatMostDifficult.push(objStatistics[elem][el]);
    });
  });
  sortMostDifficult(arrStatMostDifficult);
  for (let i = 0; i < 8; i += 1) {
    if (hasPercentWrong(arrStatMostDifficult[i])) mostDifficult.push(arrStatMostDifficult[i]);
  }
  englishTrain.difficultWords = mostDifficult;
  englishTrain.isTrainDifficult = true;
  control.categoriesBlock.style.display = 'none';
  control.togglePlay.classList.remove('switch--hidden');
  control.statistics.style.display = 'none';
  if (mostDifficult.length) englishTrain.createDifficultField();
  else {
    createEmptyTrain();
  }
};

control.startGameBtn.addEventListener('click', () => {
  control.startGameBtn.style.display = 'none';
  control.repeatWordBtn.style.display = 'flex';
  toggleConditionField('play');
  englishTrain.startGame();
});

control.repeatWordBtn.addEventListener('click', () => {
  englishTrain.repeatWord();
});

control.switchCheckbox.addEventListener('change', () => {
  toggleSwitch();
});

control.categoriesBlock.addEventListener('click', (event) => {
  const card = event.target.closest('.categories-card');
  if (card) {
    control.categoriesBlock.style.display = 'none';
    control.togglePlay.classList.remove('switch--hidden');
    englishTrain.createTrainField(card.dataset.category);
    setCurrentActiveMenuItem(card.dataset.category);
  }
});

const closeMenu = () => {
  body.classList.remove('menu-opened');
  control.menuBtn.style.visibility = 'visible';
};

const openMenu = () => {
  body.classList.add('menu-opened');
  control.menuBtn.style.visibility = 'hidden';
};

control.menuBtn.addEventListener('click', () => {
  openMenu();
});

control.menu.addEventListener('click', (event) => {
  if (!event.target.classList.contains('menu')) {
    const menuItem = event.target.closest('.menu-item-btn');
    if (menuItem) {
      if (menuItem.dataset.category === 'main') {
        goToMain();
        setActiveMenuItem(menuItem);
      } else if (menuItem.dataset.category === 'statistics') {
        createTable();
        setActiveMenuItem(menuItem);
        control.statistics.style.display = 'block';
      } else if (menuItem.dataset.category === 'difficult') {
        goToDifficultTrain();
        setActiveMenuItem(menuItem);
      } else {
        control.togglePlay.classList.add('switch--hidden');
        control.switchCheckbox.checked = false;
        toggleConditionField('train');
        hideButtons();
        englishTrain.isPlay = false;
        cleanCards();
        control.answersBlock.innerHTML = '';
        control.categoriesBlock.style.display = 'none';
        control.togglePlay.classList.remove('switch--hidden');
        englishTrain.createTrainField(menuItem.dataset.category);
        setCurrentActiveMenuItem(menuItem.dataset.category);
      }
    }
    closeMenu();
  }
});

body.addEventListener('click', (e) => {
  if (e.target.classList.contains('menu-opened')) {
    closeMenu();
  }
});

control.btnCloseStatistics.addEventListener('click', () => {
  control.statistics.style.display = 'none';
});

control.resetStatistics.addEventListener('click', () => {
  englishTrain.statistics = EnglishTrain.createStatistics();
  setData('englishStatistics', englishTrain.statistics);
  createTable();
});

control.selectSort.addEventListener('change', () => {
  createTable();
});

control.repeatWords.addEventListener('click', () => {
  goToDifficultTrain();
});
