const increase = document.querySelectorAll(".increase");
const decrease =  document.querySelectorAll(".decrease");
const oldQuant =  document.querySelectorAll(".quant");
const oldPrice = document.querySelectorAll(".price");
const totalInit  = document.querySelector(".total");
const recap = document.querySelector(".recap");
const basket = document.querySelector(".basket");
const comfirm = document.querySelector(".comfirm");
import { price } from './data.js';
let newQuant = 0;
let tab = [];
let tab2 = [];
let totalQuant = [];
 
//insertion des données prix avec €
function addprice(){
  for (let i = 0; i < price.length; i++) {
    price[i] += '€'; 
    oldPrice[i].innerHTML = `<p>${price[i]}</p>`; 
  }
}addprice();

// ici on recupere et on augmente la quantité et on fait le total du prix 
function maxQuant(){
  for (let i = 0; i < price.length; i++) {
    increase[i].addEventListener(
      "click", 
      function () {
      let newQuant = parseInt(oldQuant[i].textContent);
      newQuant++;
      //insertion de la nouvelle quantité 
      oldQuant[i].innerHTML = `${newQuant}`;

      let priceValue = price.map(price => price.replace("€", ""));
      let newPrice = newQuant * priceValue[i];

      tab[i] = newPrice; 
      tab2[i] = newQuant;

      let sum = tab.reduce((acc, valeur) => acc + parseFloat(valeur), 0);
      let sum2 = tab2.reduce((acc, valeur) => acc + parseFloat(valeur), 0);
      display(sum,sum2);
      exporting(tab,tab2);


       });
  }    
}maxQuant();

// ici on recupere et on diminue la quantité
function minQuant(){
for (let i = 0; i < price.length; i++) {
  decrease[i].addEventListener(
    "click",
   function () {
    
    let newQuant = parseInt(oldQuant[i].textContent);
    newQuant--;
    if(newQuant <= 0){
      newQuant = 0;
    }
    oldQuant[i].innerHTML = `${newQuant}`;
    //total du tableau 
    let priceValue = price.map(price => price.replace("€", ""));
      
    let newPrice = newQuant * priceValue[i];

      tab[i] = newPrice; 
      tab2[i] = newQuant;

        let sum = tab.reduce((acc, valeur) => acc + parseFloat(valeur), 0);
       let sum2 = tab2.reduce((acc, valeur) => acc + parseFloat(valeur), 0);

       display(sum,sum2);
       exporting(tab,tab2);

  });
  }
 }minQuant()
//afficher la div pour l'étape superieur 
function display(sum, sum2){

  if(sum > 0){
    basket.style.display= "block";
  }else{
    basket.style.display= "none";
  }
  sum = Math.round(sum*100)/100;
  totalInit.innerHTML = `${sum}`;

  recap.innerHTML = `${sum2}`;
}
//export des variables d'utilisateurs pour l'étape suivante


function exporting(tab, tab2) {
  const dataUser = {
    prices: tab,
    quantities: tab2
  };
  return dataUser;
}

export { exporting };
//