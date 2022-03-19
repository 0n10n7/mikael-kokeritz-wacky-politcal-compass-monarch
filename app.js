var Treassury = 65;
var Population = 50;
var Popularity = 25;
var Controll = 50;

var Xcord =0;
var Ycord =5;


const MerchantsText = "My Liege merchants have entered the capital and they are requesting that you allow them to set up a few shops at the market for the next three weeks. If you allow them to set up these shops you can expect an increase in treassury but you wont be able to fully controll whats being sold or bought";
const MerchantsAfirmRewards = [25,0,7,-5];
const MerchantsNegativeRewards = [25,0,7,-5];
const MerchantsCordsYes = [2,1];
const MerchantsCordsNo = [-2,-1];

const Food = "Sire there is wide spread famine ravaging these lands, if you buy some food from one of the neighboring countries you could probably ease the sufferingof the people";
const FoodAfirmRewards = [-25,5,15,0];
const FoodNegativeRewards = [-25,5,15,0];
const FoodCordsYes = [-2,-1];
const FoodCordsNo = [2,1];

const Riots = "I regret to inform you that some people arent to happy with the current situation and are rioting, we can either send in some soldiers to clear them out or pay 15 gold to solve their issues. (yes = soldiers no = 15 gold)"
const RiotsAfirmRewards = [0,-5,-15,10];
const RiotsNegativeRewards = [-15,0,15,0];
const RiotsCordsYes = [0,-2];
const RiotsCordsNo = [1,2];

const Policy = [MerchantsText, Food, Riots];
const PolicyARewards = [MerchantsAfirmRewards, FoodAfirmRewards, RiotsAfirmRewards];
const PolicyNRewards = [MerchantsNegativeRewards, FoodNegativeRewards, RiotsNegativeRewards];
const PolicyPosYes = [MerchantsCordsYes, FoodCordsYes, RiotsCordsYes];
const PolicyPosNo = [MerchantsCordsNo, FoodCordsNo, RiotsCordsNo];

// let UsedPolicies = [];
// let UsedPoliciesCounter = 0;
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
  PolicyDecider = Randomizer(1,Policy.length);
  //random number between 0 and the length of the policy array-1
  PrintOutPolicies();
  FieldsUpdater();
  Printout = '';
}
//Skrivs ut bokstav för bokstav för att senare kunna stoppa in funktionen att den långsamt skriver ut varje bokstav så att man läser varje ord när det skrivs ut 
function PrintOutPolicies(){
  while(Counter<=Policy[PolicyDecider].length){
    Printout = Policy[PolicyDecider]
    document.getElementById("policy").textContent+=Printout.charAt(Counter);
    Counter ++;
  }
  UpdateDaBoxes();
}

const GreenButton = document.querySelector("#GreenButton");
GreenButton.addEventListener("click", Yes);

const RedButton = document.querySelector("#RedButton");
RedButton.addEventListener("click", No);


function Yes(){
  Treassury += PolicyARewards[PolicyDecider][0];
  Population += PolicyARewards[PolicyDecider][1];
  Popularity += PolicyARewards[PolicyDecider][2];
  Controll += PolicyARewards[PolicyDecider][3];

  Xcord += PolicyPosYes[PolicyDecider][0];
  Ycord += PolicyPosYes[PolicyDecider][1];
  PolicyDecider = Randomizer(1,Policy.length);
  GameLoop()
  UpdateDaCompass()
}
function No(){
  Treassury += PolicyNRewards[PolicyDecider][0];
  Population += PolicyNRewards[PolicyDecider][1];
  Popularity += PolicyNRewards[PolicyDecider][2];
  Controll += PolicyNRewards[PolicyDecider][3];

  Xcord += PolicyPosYes[PolicyDecider][0];
  Ycord += PolicyPosYes[PolicyDecider][1];
  PolicyDecider = Randomizer(1,Policy.length);
  GameLoop()
  UpdateDaCompass()
}
//alert('This is all there is to this game so far');


//This function will be used later when implement a sleep function for PrintOutPolices, and this code doesnt work hehe

// function HideVoting(){
//   var x = document.getElementById("myDIV");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

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
//Det här är magisk kod som jag spenderade 3 timmar att skapa mellan 02:00 och 05:00 på morgonen 'thou shalt not toucheth the magic box'

var Indicator = document.querySelector('#Indicator');

function UpdateDaCompass() {
  if(Xcord >= 20){Xcord=20}
  if(Ycord >= 20){Ycord=20}
  if(Xcord<=0){Xcord=0}
  if(Ycord<=0){Ycord=0}
  Indicator.style.setProperty('--Auth', Ycord);
  Indicator.style.setProperty('--Econ', Xcord+10);
}

function Randomizer(number, cap) {
  let sum = 0;
  for(let i = 0; i < number; i++) {
      sum += Math.floor((Math.random() * cap));
  }
  return sum;
}

window.addEventListener('resize', UpdateDaBoxes);

UpdateDaBoxes();

UpdateDaCompass();

FieldsUpdater();

GameLoop();
