import './assets/styles/style.scss';
import 'regenerator-runtime/runtime';
import Table from './TableForTheEntirePeriod';
import CountriesList from './CountriesList';
import GlobalCases from './GlobalCases';
import Graph from './Graph';

const tableListAll = document.querySelector('.tabs__item-all');
const tableList = document.querySelector('.table__list');
const tableItemLast = document.querySelector('.tabs__item-last');
const tableItem100Thousand = document.querySelector('.tabs__item-100');
const tableItemAbsolute = document.querySelector('.tabs__item-absolute');
const absolute = document.querySelector('.tabs__item-active-absolute');
const for100Thousand = document.querySelector('.tabs__item-active-100');

const countiesList = new CountriesList();
const globalCases = new GlobalCases();
const graph = new Graph();

const table = new Table();

countiesList.init();
globalCases.init();
graph.init();
table.viewData();

tableListAll.addEventListener('click', () => {
  tableList.innerHTML = '';
  table.viewData();
  tableItemLast.classList.remove('active');
  tableListAll.classList.add('active');
});
tableItemLast.addEventListener('click', () => {
  tableList.innerHTML = '';
  table.viewDataLastDay();
  tableItemLast.classList.add('active');
  tableListAll.classList.remove('active');
  tableItem100Thousand.addEventListener('click', () => {
    tableList.innerHTML = '';
    table.viewDataFor100ThousandLast();
  });
});
tableItem100Thousand.addEventListener('click', () => {
  tableList.innerHTML = '';
  table.viewDataFor100ThousandAll();
  absolute.classList.remove('active');
  for100Thousand.classList.add('active');
});

tableItemAbsolute.addEventListener('click', () => {
  tableList.innerHTML = '';
  table.viewData();
  tableItemLast.classList.remove('active');
  tableListAll.classList.add('active');
  absolute.classList.add('active');
  for100Thousand.classList.remove('active');
});
