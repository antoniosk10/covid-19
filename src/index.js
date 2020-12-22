import './assets/styles/style.scss';
import 'regenerator-runtime/runtime';
import Table from './TableForTheEntirePeriod';
import CountriesList from './CountriesList';
import GlobalCases from './GlobalCases';
import Graph from './Graph';

const countiesList = new CountriesList();
const globalCases = new GlobalCases();
const graph = new Graph();

const table = new Table();
countiesList.init();
globalCases.init();
graph.init();
table.viewData();
