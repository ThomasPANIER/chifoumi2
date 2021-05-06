//pop-up d'affichage "bonjour"
alert("Bonjour noble guerrier !");

//Insertion d'une boucle pour que le joueur entre un nom dans le pop-up, minimum 1 caractère.
do {var playerName = prompt("Avant de pouvoir combattre,\n           entre ton nom: ");}
while (playerName === "");

//pop-up merci + nom du joueur.
alert("Merci " + playerName + "!");

// on declare les contantes de victoire, defaite ou egalité.
const equal = "Il n'y a pas de gagnant";
const win = "Bravo " + playerName + " tu as sauvé le monde !";
const lose = "L'ennemi a détruit le monde";

// on déclare la constante des choix.
const choices = ["pierre", "feuille", "ciseaux"];

// on désigne l'endroit du dom où sera affiffé les résultats de bataille.
let result = document.getElementById("gameShowResult");
// on assigne cette variable à vide
result.innerHTML = "";

// on déclare les variables de points et affichage resultat final.
let playerPoint = 0;
let iaPoint = 0;
let txtResult = "";

// fonction principale pour le lancement du jeu.
function game(player_choices) {

    // variable choix utilisateur sous forme de nombre.
    let player = Number(player_choices);
    // variable IA pour choix aléatoire sous forme de nombre.
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    };
    let ia = getRandomInt(3);

  // on relance le jeu tant que 3 points ne sont pas atteint.
  if (playerPoint < 3 && iaPoint < 3) {
    // phrase type pour le decompte du score.
    result.innerHTML += playerName + " a choisi : <b><i>" + choices[player] + " </i></b> VS  l'ennemi a choisi <b><i>" + choices[ia] + "</i></b> : ";
    // comparaison des choix et affichage du résultat du tour.
    if (player === ia) {
      result.innerHTML += "<span> égalité </span><br/>";
    } else if ((player === 0 && ia === 2) || (player === 1 && ia === 0) || (player === 2 && ia === 1)) {
      result.innerHTML += "<span> gagné </span><br/>";
      playerPoint++;
    } else {
      result.innerHTML += "<span> perdu </span><br/>";
      iaPoint++;
    }
    result.innerHTML += "Score : " + playerPoint + " - " + iaPoint + "<br/>";
  }
  
  // si 3 victoires affichage du résultat final.
  if ( (playerPoint >= 3 || iaPoint >= 3) 
        // txtResult doit etre à vide pour permettre de faire la condition sans effet de boucle.
        && txtResult === "" ) {
    if ( playerPoint === iaPoint ) {
      txtResult = "<span>" + equal + "</span><br/>";
    } else if ( playerPoint > iaPoint ) {
      txtResult = "<span>" + win + "</span><br/>";
    } else {
      txtResult = "<span>" + lose + "</span><br/>";
    }
    result.innerHTML += "<p>Résultat final : <b>" + txtResult + "</b></p>";
    // proposition pour rejouer.
    result.innerHTML += "<button onclick='gameReset();'> Rejouer ? </button><br/>";
  }
};

//on efface les <span> et on remet les compteurs à zero au "click" sur rejouer.
function gameReset() {
  txtResult = "";
  result.innerHTML = "";
  playerPoint = 0;
  iaPoint = 0;
};