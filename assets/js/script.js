/* ---------------------------------------------------------------------------------- */
/* Ajout des noms dans le Local Storage */

let ajouter = document.querySelector('.ajouter'); /* bouton "ajouter" stocké dans une variable nommée 'ajouter'*/
//console.log(ajouter)
let input = document.querySelector('.input'); /* input stocké dans une variable nommée 'input' */
//console.log(input)

/* Evenement sur le bouton "ajouter" qui déclenche la fonction ajouterUnePersonne() */
ajouter.addEventListener('click', ajouterUnePersonne) 

function ajouterUnePersonne(){
    
    //récuperer la donnée entrée dans l'input (grâce au ".value") et on la stocke dans nouveau_nom
    let nouveau_nom = input.value;

    //S'il n'y a rien de sauvegardé au début alors on sauvegarde un tableau vide dans le localStorage
    if(localStorage.getItem('nom') == null){
        localStorage.setItem('nom', '[]');
    }

    // récupérer l'ancienne donnée et l'ajouter à la nouvelle (grâce au ".push")
    let ancien_nom = JSON.parse(localStorage.getItem('nom'));
    ancien_nom.push(nouveau_nom);

    //enregistrer l'ancienne donnée + la nouvelle donnée dans le local storage
    localStorage.setItem('nom', JSON.stringify(ancien_nom));

    //Effacer l'input au clic "ajouter" pour qu'il redevienne vierge jusqu'à la prochaine entrée
    input.value = "";


        afficher()// voir fonction ajouter()
    
}

/* ---------------------------------------------------------------------------------- */

/* Supprimer une valeur du tableau */

function supprimerUnElement(e){
    let ancien_nom = JSON.parse(localStorage.getItem('nom')); //je récup mon tableau ancien_nom
    let newArray = ancien_nom.splice(e.target.dataset.id, 1); // je définis une variable qui va stocker le retrait de mon <li> grâce à son id et le 1 est le nombre d'élément à retirer
    localStorage.setItem('nom', JSON.stringify(ancien_nom)); // je renvoie tout dans le local storage
    afficher() // j'affiche (voir fonction afficher)
}

/* ---------------------------------------------------------------------------------- */

/* Afficher : elle va me permettre d'afficher le visuel de mon tableau*/
function afficher(){ 
    let ancien_nom = JSON.parse(localStorage.getItem('nom')); // je récupère mon tableau JSON
    let ul = document.getElementById("output");//je récupère mon élément ul de mon html
    ul.innerHTML=""; //remet le contenu de ma balise ul à chaque changement 
    
    //S'il y a des données alors on affiche:
    if(localStorage.getItem('nom') != null){
        /* boucle forEach pour mon tableau ancien_nom */
            ancien_nom.forEach((element, index) => { //elle prend en paramètre mon element et son index
           /*  document.getElementById('output').innerHTML = ancien_nom;  */ /* <== ça les affiche mais en ligne avec des virgules */
            let elem = document.createElement('li');
            elem.innerHTML = element; // change le contenu de mon élément (li)
            elem.className = "monLi"; // ajoute une classe à mon élément qui s'appelle ".monLi"
            elem.dataset.id = index; // ajoute un id à mon élément qui sera "index"
            elem.addEventListener('click', supprimerUnElement);// ajoute un évenement au clic d'un li
            ul.appendChild(elem); // dans le ul, je veux faire apparaitre mon <li>
            /* Là, je lui dis qu'il doit m'afficher dans des li toutes les données de mon tableau stocké dans le local Storage */
        });
        
    }
}

    window.addEventListener('DOMContentLoaded', afficher)

/* Supprimer tout le tableau */
let toutSupp = document.getElementsByClassName('toutSupprimer'); /* bouton tout supprimer stocké dans la variable "toutSupp" */
//console.log(toutSupp);

toutSupp[0].addEventListener('click', toutSupprimer); /* Evenement au clic de "toutSupp" déclenche la fonction toutSupprimer() */

function toutSupprimer(){
    localStorage.clear(); /* Permet de vider le localStorage complètement */
    location.reload(); /* Permet de rafraîchir la page ensuite */
}

/* ---------------------------------------------------------------------------------- */

/* Générer les groupes aléatoirement */

let generer = document.querySelector('.generer'); /* bouton "generer" stocké dans une variable nommée 'generer'*/
//console.log(generer)
let nombre = document.querySelector('.nombre'); /* input type nombre stocké dans une variable nommée 'nombre' */
//console.log(nombre)
let listeNom = JSON.parse(localStorage.getItem('nom')); // On récupère l'array stocké dans le local storage et on le met dans une variable nommée listeNom

let valeurNombre = nombre.value // la valeur entrée dans l'input de type nombre est récupérée et stockée dans la variable valeurNombre

/* Evenement sur le bouton "generer" qui déclenche la fonction genererDesGroupes */
generer.addEventListener('click', genererDesGroupes);

function genererDesGroupes(){
    
}



