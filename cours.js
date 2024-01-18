//Ceci est un commentaire en 1 ligne
/* commentaire
commentaire multiligne
*/
/**
 * commentaire
 */

// let car = "peugeot;"     windows => ctrl + /

//console.log ("Hello World"); //affiche dans la console
//alert ("Box");  // fais une pop-up alert
//prompt ("Comment ça va ? ");    // permet de mettre un input dans une pop-up
//console.info("Info");
//================================
// Les variables
/**
 * Trois déclaration de variable:
 * VAR  portée Globale dans le code 
 * LET  portée Locale 
 * CONST permet de vérouiller une valeur
 * on ne peux pas déclarer une variable deux fois
 */
var car ="peugot";
let bike = "suzuki";
//alert (bike);
const gender = "male";
console.info(gender);
car = "mercedes"
console.log (car);


/**
 * Camel Case:  ceciEStUnCamelCase
 * Pascal Case: CeciEstUnPascalCase
 * Snake case: ceci_est_un_snake_case
 * /!\ Flat case à éviter: ceciestcompletementilisible
 * le JS est Sensible à la casse 
 */

/**
 * TYPE DE VARIABLE:
 * string: chaîne de caractère
 * intenger:  int / float (nb entier, nb decimaux)
 * booleens : True / False
 */

/**
 * Fonction antive permet de connaître le type d'une variable: typeof()
 * console.log(typeof(car));
 */
/**
let string = "10";
let number = 10;
let vrai = true;
let faux = false;
console.log(string);*/
/**
 * Nota Bene: si let = 0; c'ets interpréter comme faux et si let = 1; c'est interprété comme vrai (tout comme autre valeurs)
 */

/**
 * LA CONCATENATION:
 * 
 */
/**let sayHi = "Bonjours je m'appelle Vincent !";
let sayHello = 'Bonjour je m\'appelle Vincent!';

let sayGday = `Bonjour je m'appelle Vincent !`;

let firstname = 'Vincent';*/

/**
 * EN JS le symbole de concatenation  est +
 */
//console.log ("Je m'applle" + firstname);

/**
 * EXERCICES:
 * 1) Créer une variable "prenom" et lui assigner la valeur de votre prenom
 * 2) créer une variable "age" et lui assigner votre age
 * 3) consoloe.log() ecrire "Bonjour je m'appelle (prenom) et j'ai (age) ans"
 */
/**
let prenom = "Arnaud";
let age = "18";*/
//======================================================================
/**
 * LES STRUCTURES CONDITIONNELLES
 */

// var question = prompt ("De quel sexe est-tu ?");
// if (question == masculin){
//     alert("tu es un homme");
// }
// else if (question == féminin){
//     alert("tu es une femme");
// console.info = informer un autre dev
// }
// else {
//     alert("tu es ni l'un ni l'autre ou les deux")
// }
//confirm("Bonjour ?") => être sûr de l'action de l'user\

/**let Age = 19;
if (Age >= 18 ){
    console.log("Tu es majeur");
} else {
    console.log("Tu es mineur");
}

var test = prompt ("Quel est ton âge ? ");
if (test >= 18){
    alert("Tu es majeur");
}else{
    alert("Tu es mineur");
}
*/
//==========================================================================
// LES OPERATEURS

/**
 * 
 */
// var question = prompt ("Quel est ton âge ? ");
// if (question >= 18){
//     alert("Tu es majeur");
// }else{
//     alert("Tu es mineur");
// }
// console.log (question);
// console.log ("L'utilisateur a " + question + " ans.");
// console.log (`L'utilisateur à ${question} ans.`);


/**
 * L'opérateur d'affectation: =
 *       Les opérateur de comparaison:
 * égal ==  même valeur
 * supérieur >
 * inférieur <
 * supérieur ou égale >=
 * inférieur ou égale <=
 * strictement égale ===        même valeur ET même type
 * différent de !=
 * strictement différent de !==
 */
// let a = 2;
// let b = 3;
// let c = "2";
// console.log(a == b);
// console.log(a == c);
// console.log(a === c);
// console.log(a !== c)
// console.log(a != b);



/** 
 * OPERATEUR LOGIQUE:
 * Ve sont des opérateurs qui viennenet se placer entre deux évaluations dans une condition
 * && = ET
 * || = ET/OU
 * ! = Inverse de
 */

/**
 * OPERATEUR &&:
 * true && true => true
 * true && false => false
 * false && true => false
 * false && false => false
 * NB: Si on fais plusieur comparaison et une seule est fausse alors la totalité est fausse.
 * false gagne sur le true
 */

/**
 * OPERATEUR ||:
 * true  ||  true => true
 * true  || false => true
 * false || true => true
 * false || false => false
 */
/**
 * OPERATEUR !:
 * !true => false
 * !false => true
L'inverse de true c'est false et l'inverse de false c'est true
 */

/** EXERCICE:
 * 1) Créer une variable age 
 * 2) lui assigner la valeur prompt pour demander à l'user son âge
 * 3) Afficher le résultat dans un console.log avec les conditions:
 * - Si l'âge est inférieur à 18 ans alors l'utilisateur est mineur 
 * - SI l'âge est compris entre 18 et 21 ans alors il n'a pas la majorité aux USA
 * - Si l'âge est supérieur à 21 ans alors il est majeur aux USA
 * Utiliser la concaténation
 */
// age = Number(age)
// var age = prompt ("Quel est ton âge ? ");
// if (age <= 18){
//     console.log("Tu es mineur aux USA");
// }
// else if (age >= 18 && age < 21){
//     console.log("Tu n'es pas majeur aux USA");
// }
// else if (age > 21){
//     console.log("Tu es majeur aux USA")
// }

/**
 * OPERATEUR ARITHEMETIQUE
 * addition + 
 * soustraction -
 * division /
 * multiplication *
 * modulo %
 * exposant **
 */
/**
 * EXERCICE
 */
// let prix = 0;
// if (prix == null){
//     console.log("Tarif éronée, valeur null")
// }
// else if (prix < 0){
//     console.log("Tarif éronée")
// }
// else if (prix === 0 || prix == "gratuit" ){
//     console.log("Tarif gratuit")
// }
// else if (prix >= 1 && prix <= 10){
//     console.log("Tarif discount")
// }
// else if(prix >= 10 && prix <= 100){
//     console.log("Tarif classique")
// }
// else if(prix >= 10 && prix <= 100 && prix %2 === 0){
//     console.log("pair")
// }
// else if (prix >= 10 && prix <= 100 && prix %2 === 1){
//     console.log("impair")
// }
// else if (prix >= 100){
//     console.log("Tarif VIP")
// }

/**
 * LE SWITCH
 * 
 */
// var color = prompt("Quelle est ta couleur préférer ? ");
// switch (color){
//     case "jaune":
//         console.log("couleur jaune");
//         break;
//     case "rouge":
//         console.log("Couleur rouge");
//         break;
//     case "bleu":
//         console.log("couleur bleu");
//         break;
// }
// let i =5;
// switch(true){
//     case(i ==5):
//     break;
//     case(i <5):
//         console.log(i);
//     break;
// }

/*let nombre = 100;
switch(true){
    case(nombre % 2==0):
        console.log(`${nombre} est un diviseur de 2`);
        break;
    case(nombre % 3==0):
        console.log(`${nombre} est un diviseur de 3`)
        break;
    case(nombre % 5==0):
        console.log(`${nombre} est un diviseur de 5`)
        break;
    case(nombre % 7==0):
        console.log(`${nombre} est un diviseur de 7`)
        break;
    case(nombre % 11==0):
        console.log(`${nombre} est un diviseur de 11`)
        break;
    default:
        console.log("aucun divisuer")
}
*/

// LES BOUCLES:
/**
 * Tant que la condition est rempli, le code s'éxécute
 * différent type de boucle:
 *  for():  souvent utiliser lorsqu'on sait précisément combien de fois on veut que le code se répète
 *  while(): Tant que la condition est vrai
 *  do .... while():execute le code au moins 1 fois même si la condition n'est pas rempli, puis reprend le Tant que la condition est vrai alors il s'execute
 *  forEach(): Permet de boucler dans des variables de type tableau
 */


/**
 * BOUCLE FOR()
 * Comprend 3 arguments:
 * 1) la valeur de départ
 * 2) le test
 * 3) l'incrémentation (++) et le décrémentation (--)
 * ATTENTION au sens de la comparaison du test de l'incrémentation / décrémentation sinon BOUCLE INFINI DONC FF
 */
/**for (let i =0; i<10; i++){
    console.log(i);
}*/
/**
 * Exercice: 
 * script acffichant des nombres de 50 à 10 et n'afficher que les nombres pairs
 */
/**for (let i=50; i>=10;i--){
    if (i %2 ===0){
         console.log(i);
    }
}*/

/**
 * BOUCLE WHILE:
 * 1) On déclare la variable qu'on souhaite tester
 * 2) on spécifie le test qu'on souhaite réaliser dans les paramètres
 * 3) on utilise un opérateur d'incrémentation / décrémentation
 */
/**let u = 10;
while(u>0){
    u--;
    console.log(u);
    if (u ===5){
        break;
    }
}*/

/**
 * EXERCICE
 * créer un script qui demande à l'utilisateur de déviner un nombre secret.
 * le programme génère un nombre aléatoirement entre 1 et 10
 * Utilisez la bouble while pour demander le nombre à l'user
 * Annoncer si le nb secret est plus ou moins granf que celui donner par l'user
 * Utilisez Math.floor() et Math.random pour générer un nombre aléatoire
 * perser à convertir l'entrée de l'user en nombre car avec prompt c'est une chaine de caractère
 * utilisez les conditions if ... else... pour comparer l'entrer de l'user
 */

/**let secret = Math.floor(Math.random() * 10)+1;
//Math c'est M majuscule sinon marche pas
let nb = parseInt(prompt("Devine le nombre secret entre 1 et 10: "));

while (nb !== secret) { 
	if (nb< secret) {
		nb = parseInt(prompt("Le nombre secret est plus grand. Devine à nouveau: "));
	} 
    if (nb > 10){
        nb = parseInt(prompt("Le nombre secret est compris entre 1 et 10: "));
    }
    else {
		nb = parseInt(prompt("Le nombre secret est plus petit. Devine à nouveau: "));
	}
}

alert("Bravo! Tu as deviné le nombre secret!");
*/


/**
 * la boucle DO ... WHILE
 * la diff se fait dans l'ordre dans lequel vont se dérouler les opérations
 * Lorsqu'on utilise do ... while, le code de la boucle est éxécuté une fois avant l'éxécution de la condition de sortie
 * Cela effectue un passage même si la condition n'a pas été vérifiée
 *
 */

/**let timer = 10;
do{
    console.log(timer);
    timer++;
}
while (timer <=5);*/

//EXERCICE:
/** 
 * Boite de dialogue demandant le nom de l'user, valider le prompt si son nom compte au moins 5 caractères 
 * Si ce n'est pas le cas réafficher le prompt
*/
/**let nom = prompt("Quels est votre nom ? ");
do{
    console.log("Votre nom est " + nom);
    console.log("")
}
while(prompt.length>=5){
    console.log("Votre nom contient au moins 5 caractère");

}
prompt("Résseyer");*/
// Correction:
/**
let username;
do{
    username = prompt("Nom d'utilisateur")
}while(username.length<=5);
console.log(username);
console.log("Bonjour je m'appelle "+ prenom + " et j'ai "+ age +" ans.")*/

 * LES TABLEAUX:
 * tableau => array est un élément de type objet en JS et permet de stocker plusieurs simultanément, ce qu'une simple variable ne peux pas faire
 * IL y a deux manière de déclarer un tableau:
 *  Utiliser l'objet global Array: let array = new Array();
 * let array [];
 * On peux y stocker n'importe quel type de donnée et autant de donnée que souhaiter
 * 
 */
let anime = new Array("Naruto", "Bleach", "Death Note", "Pokemon", "One piece", "Fullmetal alchemist", "Evangelion");
console.log(anime);


/**
 * Un tableau contient de paire "clé-valeur"
 * Un tableau commence toujours par la clé / l'index n°0 => La première valeur correspond à la N°0
 * Pour afficher le tableau il faut appeler le tableau en question et ajouter des crochet avce le n° de clé
 */

let game = ["Zelda", "The last of us", "Tetris", "The witcher", "Half life"];
let firstgame = game[0];
console.log(firstgame);


/**
 * Pour connaître le nombre d'élément dans un tableau, on utilise la fonction .length :
 */
let totalGames = games.length;
console.log(totalGames);

//Pour modifier une valeur se trouvant dans le tableau

anime[0] = "Samuraï Champloo";
console.log(anime);
// si on ajoute la valeur et que la clé n'existe pas, une nouvelle clé est créé
anime[10] = "Dragon Ball Z";
console.log(anime);



/**
 * LES TABLEAUX multidimentionnels:
 * IL s'agit simpelment d'imbrications de tableaux.
 * NB: IL est plus rare mais parfaitement possible de voir des tableaux avec plus de 3 niveaux d'imbrications.
 * 
 */

let user = ["Etudiant", ["Dupond", "Jean", 23], spécialité ["DevOps", "Groupe 1", "1ère année"], [27, "rue du progrès", 93100, "Montreuil", ["France", true]]];
console.log(user);

//let user = ["étudiant", ["Dupont", "Jean", 23], "spécialité",["Devops", "Groupe 1", "1ère année"], [27, "Rue du progrès", 93100, "Montreuil", ["France", true]]];

console.log(user[0]);
console.log(user[1][1]);
console.log(user[4][3]);
console.log(user[4][4][0]);


/**
 * LIMITATION: impossible de donner des "noms" à la place des clés, en JS la notion de tableau associatid n'existe pas pour contourner le problème
 * il faut créer un objet
 * LES FONCTIONS NATIVES autour des tableaux:
 * .push(): permet d'ajouter une ou plusieurs valeurs à la fin d'un tableau
 * .pop(): permet de supprimer le dernier élément un tableau (un seul élément)
 * .unshift(): permet d'ajouter un ou plusieurs éléments en début de tableau
 * .shift(): permet de supprimer la 1ère valeur d'un tableau
 * .splice(clé, nb élément, option): permet d'ajouter, supprimer, modifier une portion du tableau
 * .slice(début, fin): permet de faire une copie complète ou partielle d'un tableau
 */
 
 //EXERCICE:
/**
 * variable client => tableau vide
 * attribuer la valeur Pierre en tant que 1er élément
 * ajouter un num de tel
 * remplacer le prenom pierre par robert
 * ajouter une adresse sous forme de tableau imbriqué (N°, nom de rue, code postale, ville)
 */
 
let client = [""];
client.unshift("Pierre");
console.log(client);
client.push("0603544371");
console.log(client);
client.splice(0, 1,"Robert");
console.log(client);
client.push([1, "rue du progrès", 93100, "Montreuil"]);
console.log(client);

//EXERCICE:
 * Créer un tableau avec valeur suivante: 1,2,3,4,5
 * suppr la 1ère valeur
 * suppr la 1ère valeur encore
 * surppr l'index 2
 * ajouter la valeur 6 à la fin du tab
 * insérer les valeur 10, 11,12, à partir de la 2ème position
 * déplacer le dernier élément au début
 * afficher le résultat
 * résultat attendu [9 ,10,11,12,3,5,6,7,8]



let tab = [1, 2, 3, 4, 5];
tab.shift(0);
console.log(tab);
tab.shift(0);
console.log(tab);
tab.splice(1,1);
console.log(tab);
tab.push(6);
console.log(tab);
tab.push(7,8,9);
console.log(tab);
tab.pop()
tab.unshift(9);
console.log(tab);
tab.splice(1,0,10,11,12)
console.log(tab);
/**
 * EXERCICE 3:
 * Déclarer un tab vide
 * avce une boucle for() peupler le tab avec la suite de nombre allant de 10 à 20
 * 
 */
/*
let tab = [];
for(i = 10; i<=20; i++){
    tab.push(i);
    console.log(tab);
}
*/

// BOUCLE DANS UN TABLEAU
/**
 * for(): utilisé pour parcourir le tableau avec un accès à l'indice de chaque élément
 * for .... of : utilisé pour parcourir les éléments d'un tableau sans se soucier de leurs clés
 * .forEach : boucle qui permet de prendre en compte plusieurs paramètre
 * .map(): comme forEach à l'exception qu'elle crée un nouvreau tableau avce les valeurs
 */
 
 let weekdays = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","samedi","dimanche"];
for(index = 0; index <weekdays.length; index++){
    console.log(weekdays[index]);
}
//For.... of
for(day of weekdays){
    console.log(day);
}
//.forEach
weekdays.forEach(function(day, index){
    console.log(index + " : " + day);
});


//.map
weekdays.map((day,index)=>{
    console.log(index + " : " + day);
});

// Autre fonction utile
/**
 * .join(): retourne une chaîne de caractère crée en cacaténant les différentse valeurs d'un tableau
 * Par défaut, le séparateur est la virgule
 * .concat(): permet de fusionner les diff tableaux entre eux et de créee un nouveau. Elle prend comme argument les tableaux sélectionner
 * .include(): permet de déterminer si un tableau contient une valeur qu'on va passer en argument, si c'est le cax true sinon false
 * 
 */
 const concat = user.concat(weekdays);
console.log(concat);
const members = ["Emilie", "Karim", "Justin", "Pierre"];
console.log(members.includes("Karim"));
const join = members.join(" / ");
console.log(join);





// LES OBJETS:
/**
 * On utilise les acolades pour définir un objet
 */

let pokemon ={};
let pikachu = {
    name: "Pikachu",
    type: "electric",
    level: 15,
    pv: 65,
    moves: [
        {
            name: "Thunder wave",
            description: "Paralyzes the oppenent"     ,  
        },
        {
            name: "Electro ball",
            description: "Deal damage",
        }
    ],
    caracteristics: {

    }
}


// pour accéder aux différentes valeur d'un objet on utilise le point (.)
console.log(pikachu.name);
console.log(pikachu.moves[0].name);


for(const pokemon in  pikachu){
    console.log(pokemon);
}


// LES DATES:
/**
 * Les dates sont des objets
 * JS stocke les dates sous forme de timestamp Unix exprimé en MS qui multiplier par 1000 donne des secondes écoulée depuis le 1er janvier 1970 UTC
 * C'est à dire l'heure de Londres.
 * Par convention on utilise les dates américaines c'est à dire, années / mois / jours / heures / minutes / secondes / milisecondes
 * Il s'agit du format internationnal ISO
 * IL est possible de créer une date à partir des 7 paramètres de l'objet date OU à partir d'une chaîne de caractères.
 * /!\ JavaScript compte les mois de 0 à 11 (janvier = 0 et décembre = 11)
 * 
 */

// Pour déclarer une date:
/**
 * On utilise le mot clé "new" et l'objet date:*/
/* 
let now = new Date();
console.log(now);
//NB: Les objets sont statics, ils ne bougent pas

let dateFromParams = new Date(2024, 0, 1, 5, 0, 0);
console.log(dateFromParams);

let dateFromString = new Date("01-01-2024 05:00:00");
console.log(dateFromString);*/

/**
 * En JS new Date() renvoie un objet avec la date actuelle et l'heure
 * Ce dernier possède un certain nombre de méthodes pour accéder et manipuler les composants d'une dates.
 * 
 * Les GETTERS:
 * getFullYear() : renvoie l'année (yyyy)
 * getMonth() : renvoie le mois (entre 0 et 11)
 * getDate() : renvoie le jour (entre 1 et 31)
 * getDay() : renvoie le jour de la semaine (entre 0 et 6)
 * getHours() : renvoie l'heure (entre 0 et 23)
 * getMinutes() : renvoie les minutes (entre 0 et 59)
 * getSecondes() : rnevoie les secondes (entre 0 et 59)
 * getMilisecondes() : renvoie les milisecondes
 * getTime() : renvoie le nombre de milisecondes écoulée depuis le 1er janvier 1970 
 */

/**
 * Les SETTERS: 
 * setFullYear() : règle l'année 
 * setMonth() : règle le mois (entre 0 et 11)
 * setDate() : règle le jour (entre 1 et 31)
 * setHours() : règle l'heure (entre 0 et 23)
 * setMinutes() : règles les minutes (entre 0 et 59)
 * setSecondes() : règles les secondes (entre 0 et 59)
 * setMilisecondes() : règles les milisecondes (entre 0 et 999)
 * setTime() :  règle l'heure en milisecondes depuis le 1er janvier 1970
 * 
 */
/**
 
L'objet date dispose également de méthodes pour convertir une date au format local :
.toLocaleDateString() : renvoie la partie "jour-mois-année" d'une date, formatée en fonction d'une "locale" et d'options
.toLocaleTimeString() : renvoie la partie "heure-minutes-secondes" d'une date, formaté en fonction d'une "locale" et d'options
.toLocaleString() : renvoie la date complète, formatée...
*/
/*
let newDate = new Date();
newDate.toLocaleString("fr-FR",{
 weekday: "long",
 year: "numeric",
 month: "long",
 hour: "numeric",
 minute: "numeric",
 second: "numeric",
});
console.log(newDate)
*/
/**
 * la "locale" sert à définir la langue dans laquelle la date doit être firmaté (france => "fr-FR")
 */

/**
 * weekday : "narrow", "short" ou "long"
 * day : "numeric" ou "2-digit"
 * month : "numeric" ou "2-digit"
 * year : "numeric" ou "2-digit"
 * hour : "numeric" ou "2-digit"
 * minutes : "numeric" ou "2-digit"
 * secondes : "numeric" ou "2-digit"
 * 
 */


// EXERCICE (BORING): 
/**
 * Calculer et afficher la différence en jours entre le 1 janvier 2024 et aujourd'hui
 */
/*
let today = new Date();
let janvier2024 = new Date(2024, 0, 1);

let diffMilliseconds = today - janvier2024;
let diffDays = diffMilliseconds / (1000 * 60 * 60 * 24); 

console.log(`la diff de jour entre le 1er janvier 2024 et aujourd'hui est de ${Math.floor(diffDays)} jours`);*/


/**
 * LES FONCTIONS: 
 * 
 * Anonyme:
 * une fonction qui est déclaré sans nom
 * 
 */
/*
 
LES FONCTIONS EN JS 
Une fonction contient des lignes de code qui peuvent etres utilisées plusieurs fois
Pour créer une fonction, on respecte deux etapes fondamentales:
declarer et creation de la fonction
appel de la fonction
*/
/*
(function () {alert("Ceci est une function anonyme")});
(function () {alert("Ceci est une function anonyme auto appeler")} ());*/
/*function name(){
    //code
}
name();*/
/*
let anonymousFct= function(){alert("Focntion anonyme stockée dans une variable")};
// anonymousFct();

// Appeller la fonction dans un evnement
document.addEventListener('DOMContentLoaded', anonymousFct());*/
// Appeller la fonction dans un evnement
// document.addEventListener('DOMContentLoaded', anonymousFct());
/*
function sayHi() { // On declare la fonction sans lui passser d'argument 
    return "Bonjour "; // On retourne le resultat de la fonctiion grace au mot clé "return"
}
console.log(sayHi());

//AVEC 1 PARAMETRE
function sayHiToUser(name="inconnu") {
    return "Bonjour " + name;
}
console.log(sayHiToUser("Pierre"));*/
/*
console.log(sayHi());
// S'il n'y a pas de parametre passé dans la fonction lorsqu'elle est appellée, deux cas possibles: soit "undefined" lorsqu'on a pas precisé de valeur par defaut, soit le parametre par defaut s'il a ete precisé

//AVEC 1 PARAMETRE
function sayHiToUser(name = "inconnu") {
    return "Bonjour" + name;
}
console.log(sayHiToUser("Pierre"));

// AVEC 2 PARAMETRE
function fullName(firstname = "Jean", lastname = "Dpond"){
    return "tu t'appelle" + firstname + "" + lastname
}
console.log(fullName("Jean", "Valjean"));
// 2 parametres separes par une virgule

// On peut stocker une fonction dans une variable 
let hello = sayHiToUser();
console.log(hello); */


// Si aucun argument n'est passé dans l'appel de la fonction, c'est alors soit la valeur par defaut, soit "undefined" qui est retournée
/*
let hello = sayHiToUser("Bernard");
console.log(hello);
*/
/**
 
EXO
créer une fonction nommée addition et lui passser deux parametre differents
créer une variable(locale) nommée "sum" a l'interieur de la fonction
faire le calcul des deux parametres en tant que valeur de la variable sum
retourner le resultat de la variable sum
appeler la fonction avc les parametre 20 et 10 comme arguments
stocker le resultats de la fonction dans une variable nommé "result"
afficher le resultat dans un console.log
le resultat attendu est: 30
*/ 
/*
function addition(vairable1, vairable2) {
    let sum = vairable1 + vairable2;
    return "Le résultat est " + sum;
}

let result = addition(20, 10);
console.log(result);
*/

