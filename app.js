var Treassury = 65;
var Population = 50;
var Popularity = 25;
var Controll = 50;

var Xcord =0;
var Ycord =7;


const MerchantsText = "My Liege merchants have entered the capital and they are requesting that you allow them to set up a few shops at the market for the next three weeks. If you allow them to set up these shops you can expect an increase in treassury but you wont be able to fully controll whats being sold or bought";
const MerchantsRewards = [25,0,7,-5];
const MerchantsCordsYes = [2,-1];
const MerchantsCordsNo = [-2,1];

const Food = "Sire there is wide spread famine ravaging these lands, if you buy some food from one of the neighboring countries you could probably ease the sufferingof the people";
const FoodRewards = [-25,5,15,0]
const FoodCordsYes = [2,-1];
const FoodCordsNo = [-2,1];

const Policy = [MerchantsText, Food, 'BMW'];
let UsedPolicies = [];
let UsedPoliciesCounter = 0;
let Printout = '';
let PolicyDecider = 0;
let Counter = 0;

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

function GameLoop(){
  while(Policy[PolicyDecider] == UsedPolicies[UsedPoliciesCounter] ){
    PolicyDecider = Math.floor(Math.random() * Policy.length);
    if(PolicyDecider === UsedPoliciesCounter){
      break;
    }
  }

  //random number between 0 and the length of the policy array-1
  UsedPolicies[PolicyDecider] = Policy[1]
  UsedPoliciesCounter ++;
  PrintOutPolicies();
  FieldsUpdater();

}
function PrintOutPolicies(){
  while(Counter<=Policy[PolicyDecider].length){
    Printout = Policy[PolicyDecider]
    document.getElementById("policy").textContent+=Printout.charAt(Counter);
    Counter ++;
  }
  UpdateDaBoxes();
}

//alert('This is all there is to this game so far');


//This function will be used later when implement a sleep function for PrintOutPolices, and this code doesnt work hehe
function HideVoting(){
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
const Xbox = document.querySelectorAll(".InfoHUD");

function UpdateDaBoxes() {
  Xbox.forEach(box => {
    var Grogu = box.firstElementChild;
    var size = 100;
    Grogu.style.setProperty('--size', `${size}%`);

    while (Grogu.clientHeight > box.clientHeight - 15 && size >0){
      Grogu.style.setProperty('--size', `${size}%`);
        size --;
    }
    
  });
}


window.addEventListener('resize', UpdateDaBoxes);

UpdateDaBoxes();

FieldsUpdater();

GameLoop();
