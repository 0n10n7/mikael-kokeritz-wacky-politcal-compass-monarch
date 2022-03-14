var Treassury = 65;
var Population = 50;
var Popularity = 25;
var Controll = 50;

var Xcord =0;
var Ycord =7;

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

const Xbox = document.querySelectorAll(".InfoHUD");

function UpdateDaBoxes() {
  Xbox.forEach(box => {
    var Grogu = box.firstElementChild;
    var size = 100;
    Grogu.style.setProperty('--size', `${size}%`);

    while (Grogu.clientHeight > box.clientHeight - 5 && size >0){
      Grogu.style.setProperty('--size', `${size}%`);
        size --;
    }
    
  });
}

window.addEventListener('resize', UpdateDaBoxes);

UpdateDaBoxes();

FieldsUpdater();
