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
    
    //S'il y a des données alors on affiche
    if(localStorage.getItem('nom') != null){
        ancien_nom.forEach(element => {
            /* document.getElementById('output').innerHTML = ancien_nom;  <== ça les affiche mais en ligne avec des virgules*/
            let elem = document.createElement('li');
            elem.innerHTML = element;
            document.body.appendChild(elem);
        });
        /* Là, je lui dis qu'il doit m'afficher dans des li toutes les données de mon tableau stocké dans le local Storage */
    }
}

/* ---------------------------------------------------------------------------------- */

/* Supprimer une valeur du tableau */
let elemTableau = document.getElementsByTagName('li');
//console.log(elemTableau);

for(let i = 0; i < elemTableau.length; i++){ /* boucle pour récupérer tous les li */
    elemTableau[i].addEventListener('click', supprimerUnElement); /* déclencher un évenement au clic d'un */
}

/* elemTableau.forEach(element => {
    element.addEventListener('click', supprimerUnElement);
}); */

function supprimerUnElement(this){
    console.log('la fonction démarre');
    //localStorage.removeItem(this);  
}

/* ---------------------------------------------------------------------------------- */

/* Supprimer tout le tableau */
let toutSupp = document.querySelector('.toutSupprimer'); /* bouton tout supprimer stocké dans la variable "toutSupp" */
//console.log(toutSupp)

toutSupp.addEventListener('click', toutSupprimer); /* Evenement au clic de "toutSupp" déclenche la fonction toutSupprimer() */

function toutSupprimer(){
    localStorage.clear(); /* Permet de vider le localStorage complètement */
    location.reload(); /* Permet de rafraîchir la page ensuite */
}

/* ---------------------------------------------------------------------------------- */

/* Générer les groupes aléatoirement */

let generer = document.querySelector('.generer'); /* bouton "generer" stocké dans une variable nommée 'generer'*/
//console.log(generer)

/* Evenement sur le bouton "generer" qui déclenche la fonction genererDesGroupes */
generer.addEventListener('click', genererDesGroupes);

function genererDesGroupes() {  
    //console.log('la fonction démarre')

}