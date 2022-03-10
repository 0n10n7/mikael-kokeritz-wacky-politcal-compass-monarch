var Treassury = 65;
var Population = 50;
var Popularity = 25;
var Controll = 50;

const TreassuryField = document.querySelector("[data-treassury]");
const PopulationField = document.querySelector("[data-population]");
const PopularityField = document.querySelector("[data-popularity]");
const ControllField = document.querySelector("[data-controll]");

function FieldsUpdater() {
  TreassuryField.innerHTML = Treassury;
  PopulationField.innerHTML = Population;
  PopularityField.innerHTML = Popularity;
  ControllField.innerHTML = Controll;
}

FieldsUpdater();
