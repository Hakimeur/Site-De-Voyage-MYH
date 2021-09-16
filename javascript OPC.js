/* Javascript */
/* Travail sur les nombres */

let totalCDs = 67;
let totalVinyls = 34;
let totalMusic = totalCDs + totalVinyls;

let cookiesInJar = 10;
let cookiesRemoved = 2;
let cookiesLeftInJar = cookiesInJar - cookiesRemoved;

let cookiesInJar = 10;
/*manger deux cookies*/
cookiesInJar -= 2; //il reste 8 cookies
/* cuisson d'un nouveau lot de cookies */
cookiesInJar += 12; //il y a maintenant 20 cookies dans la boîte

let numberOfLikes = 10;
numberOfLikes++; // cela fait 11
numberOfLikes--; // on reviens à 10

let costPerProduct = 20;
let numberOfProducts = 5;
let totalCost = costPerProduct * numberOfProducts;
let averageCostPerProduct = totalCost / numberOfProducts;

let numberOfCats = 2;
numberOfCats *= 6; // numberOfCats vaut maintenant 2*6 = 12;
numberOfCats /= 3; // numberOfCats vaut maintenant 12/3 = 4;

/*Variables Mutables*/

let compteur = 0;
compteur++;
compteur = 10;

/*Constantes (Variables non Mutables */

const nombrePostParPage = 20;
nombrePostParPage = 30; // Retournera une erreur dans la console car on ne peut plus changer sa valeur

/* Les Types */

//Arithmétique en virgule flottante (number)

let integerCalculation = 1 + 2; // donne 3
let weirdCaculation = 0.1 + 0.2; //on attend 0.3, réponse réelle 0.30000000000000004

//Les valeurs logiques (boolean)

let userIsSignedIn = true;
let userIsAdmin = false;

//Les chaînes de caractères (string)

let firstName = "Will";
let lastName = 'Alexander';

let WholeName = firstName + " " + lastName ; // valeur: "Will Alexander" => chaînes concaténées (ajoutées à la fin l'une de l'autre)

const myName = 'Alexander';
const salutation = 'Bienvenue sur mon site ${myName}!';
console.log(salutation); //retournera "Bienvenue sur mon site Alexander !"

/* Les Objets */

//Les clés entre {}

let episode = {
    title: 'Scale-Up',
    duration: 48,
    hasBeenWatched: false
  }


  //Notation pointée (Dot Notation)

let episode = {
    title: 'Scale-Up',
    duration: 48,
    hasBeenWatched: false
  };
let episodeTitle = episode.title; // Titre de l'épisode
let episodeDuration = episode.duration // 48

//Notation Bracket (Bracket Notation)

//Pour accèder à un sous élément
let episode = {
    title: 'Scale-Up',
    duration: 48,
    hasBeenWatched: false
  };
  let episodeTitle = episode["title"];  //'Scale-Up'
  let episodeDuration = episode["duration"]  // 48

//Pour mettre entre bracket une variable en string avec la valeur

let episode = {
    title: 'Scale-Up',
    duration: 48,
    hasBeenWatched: false
  };
let propertyToAccess = "title"
let episodeTitle = episode[propertyToAccess]; // "Scale-Up"

/* Les Classes */

class Book {
constructor(title, author, pages){
this.title = title;
this.author = author;
this.pages = pages;   
}   
}
let myBook = new Book("Apprendre à coder", "Hakim Moi", 122);
//Cette ligne crée l'objet suivant :
{
title: "Apprendre à coder",
author: "Hakim Moi",
pages: 122
}

/* Les Tableaux */

let guests = []; //Tableau vide 
let guests = ["Blabla 1", "Blabla 2", "Blabla 3"]; // Tableau remplis d'éléments

//Pour accéder aux éléments du tableau par leur indice ! N'oubliez pas de démarrer à l'indice  0  !:
let firstGuest = guests[0]; // "Blabla 1"
let thirdGuest = guests[2]; // "Blabla 3"
let undefinedGuest = guests[12] // undefined

//Les valeurs s'appliquent au types primitifs (nombres,valeurs logiques et les chaînes) 

//Sur un type primitif :
let numberOfGuests = 20;
let totalNumberOfGuests = numberOfGuests; // 20

//Sur un tableau :
let artistProfile = {
    name: "Hakim Roi",
    age: 22,
    available: false
    };
    let allProfiles = [artistProfile]; // nouveau tableau contenant l'objet ci-dessus
    artistProfile.available = true; // modification de l'objet
    console.log(allProfiles) // affiche { nom: "Hakim Roi", âge: 22, disponible: true }
