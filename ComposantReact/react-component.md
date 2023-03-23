# How to test the existence of a file in Javascript

## Table of contents

1. React ?
2. Le composant
3. Le composant (pour débutant)
4. Tips

-------------------

## 1 - React ?

Si vous vous trouvez sur ce post c'est que React ne vous est pas inconnu..
L'un des frameworks (ou librairie pour les intimes) les plus utilisés depuis quelque années et qui se ressent aussi sur le marché et les demandes d'emplois.
React, de ce que j'ai compris, base sa puissance dans 3 choses :

1) Sa communauté, qui permet d'avoir des ressources pour vraiment énormément de points.
2) Son écosysteme, toutes les bibliothèques qui l'entourent et complète son scope dans le developpement front, ce point est en fait un sous point du premier si on prends du recul.
3) La gestion des états, le fait que React rende les éléments d'une page réactif (d'où son nom ?), qui s'actualise de manière automatisée sans impacter le user qui n'y voit absolument rien, et qui ne voit pas les performances de son navigateur baisser, et encore moins un quelconque chargement qui pourrait le frustrer dans sa promenade sur la toile d'Internet (ou de l'Internet ? les grammairien nous corrigerons).

-------------------

## 2 - Le composant de React

Qu'est-ce qu'un composant React ?
Il y a énormément de manières de le décrire ou de l'expliquer, en voici une de plus :
Le composant React est un composant, une partie de l'interface utilisateur, donc de ce que voit l'utilisateur derrière son écran (un CTA, un formulaire, une card,...).
Son avantage ? Le fait que l'on puisse le ré-utiliser partout dans le projet.

Je vous l'ai faites très courte pour le coup...

-------------------

## 3 - Le composant React pour un developpeur débutant sur la techno

On arrive à un sujet moins évident... C'est comprendre un composant React en tant que developpeur (moins drôle et évident pour beaucoup).

Et pourtant on va découper ça en 3 parties pour vulgariser un maximum.

1) Le state (un état, une donnée)
2) Le comportement (le traitement, les fonctions)
3) Le render (l'affichage)

Prenons l'exemple suivant pour illustrer nos propos et rentrer dans des explications un peu plus poussées :

```js
function App() {

    //(1) le state
    const [compteur, setCompteur] = useState(1);

    //(2) le comportement
    const handleClick = () => {
        setCompteur(compteur+1);
    }

    //(3) le render
    return (
        <div>
            <h1{compteur}</h1>
            <button onClick={handleClick}> Incrémentez </button>
        </div>
    )
}
```

On a premièrement notre compteur défini à 1 (le bloc de code n°1) qui est un state, donc une donnée qui est vouée à évoluer par le biais de nos actions sur l'interface.

Notre page va donc traiter la partie 3 directement pour l'affichage des informations avec simplement un texte et un bouton

Et le partie 2 du code ne sera executé que lorsque l'évènement sur le bouton sera déclenché (au click).

Ce qui est interessé de noté, c'est qu'à ce moment là, notre bloc 2 va juste mettre à jour notre donnée en l'incrémentant, on passera de 1 à 2.
Et React va automatiquement gérer le fait de repasser par le bloc n°3 pour "rafraichir" l'affichage, le terme technique ici sera "re-render", sans que l'utilisateur n'y voit quoi que se soit.
Donc, pas de rafraichissement de page, mais un rafraichissement de composant, car en fin de compte pourquoi rafraîchir une page complête si le seul élément sur lequel on veut agir est notre variable qui passe de 1 à 2 ?

Voilà l'un des piliers de React.

Practice makes progress ! :muscle:
  
[~SemihGKL](https://dev.to/semihgkl)
