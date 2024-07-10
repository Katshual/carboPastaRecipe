
// je crée ma liste d'ingrédients
let recipe=["Pâtes", "Oeufs", "Sel", "Poivre", "Lardon", "Oignon", "Parmesan"];

//je classe mes ingrédients par ordre alphabétique
recipe=recipe.sort()       

//je crée la phrase qui indique le nombre d'ingrédients
let sentence=`Pour la recette des pâtes à la carbonara, nous avons besoin de ${recipe.length} ingrédients:`;

//j'intègre la phrase dans la balise <p> sur la page HTML
const paragraph=document.querySelector('p');
paragraph.innerHTML=sentence;

//Je récupère la balise <ol>
const ol=document.querySelector('ol')

//Je crée une boucle forEach pour parcourir ma liste d'ingrédients
recipe.forEach(item => {
    //Je crée une balise<li>
    const li=document.createElement('li');
    //J'ajoute le texte dans la balise <li>
    li.textContent=item;
    ol.appendChild(li);
});
