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
