function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Utilisation
//La variable contient un nombre aléatoire compris entre 1 et 10
var entier = entierAleatoire(1, 100);
console.log(entier);
var gagné = false;
//*var util = prompt("Saisir un chiffre entre 1 et 100");


//function comparaison(entier, util){
  function comparaison() {
    var util = document.getElementById("nombre").value;
    console.log(util);
  //while (gagné == false) {
  if (util > entier) {
    document.getElementById("infos").innerHTML = "C'est moins";
  } else if (util < entier) {
    document.getElementById("infos").innerHTML = "C'est plus";
  }
  else if (isNaN(util)) {
    document.getElementById("infos").innerHTML = "Ce n'est pas un chiffre, ne triche pas";
    console.log(util);
  }
   else {
      document.getElementById("résultat").innerHTML = "C\'est gagné ";
      document.getElementById("résultat_2").innerHTML = '<img src="rsc/win.jpg" style="height: 50px; width: 60px;">';
    var gagné = true;
  }
//  }
}
