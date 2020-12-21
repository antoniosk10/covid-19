import './assets/styles/style.scss';
import 'regenerator-runtime/runtime';
import Table from './TableForTheEntirePeriod';
import CountriesList from './CountriesList';
import GlobalCases from './GlobalCases';
import Graph from './Graph';
import Map from './Map';

const countiesList = new CountriesList();
const globalCases = new GlobalCases();
const graph = new Graph();
const map = new Map();
const table = new Table();
countiesList.init();
globalCases.init();
graph.init();
map.init();
table.viewData();
