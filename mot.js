const RandomWord = ['Mots', 'Messi', 'Momo', 'Gare', 'Location', 'Simple', 'Cool', 'Akha', 'None', 'Violon'];
var word = RandomWord[Math.floor(Math.random() * RandomWord.length)];
console.log(word);
console.log(word.length);
console.log(word[0]);
console.log(word[1]);
console.log(word[2]);
console.log(word[3]);
console.log(word[4]);
console.log(word[5]);
console.log(word[6]);
console.log(word[7]);
var devine = document.getElementById("devine1");
function displayemptyword() {
    for (var i = 0; i < word.length; i++) {
        // crée un nouvel élément div    
        var newDiv = document.createElement("span");
         newDiv.setAttribute('id', `letter${ i }`)
        // et lui donne un peu de contenu     
        var newContent = document.createTextNode("_ ");
        // ajoute le nœud texte au nouveau div créé    
        newDiv.appendChild(newContent);
        // ajoute le nouvel élément créé et son contenu dans le DOM     
        var currentDiv = document.getElementById('');
         document.body.insertBefore(newDiv, currentDiv);
    }
    }

    displayemptyword()
    var NbEssais = 0;
    function Devine() {
        var choisi = document.form1.devine1.value;
        NbEssais++;
        status = "Nombre d'essais : " + NbEssais;
        document.getElementById('nbessaie').innerHTML =  8 - NbEssais;
        if (choisi < word)
            document.getElementById('indice').innerHTML = "Non, le mot est n'est pas celui-ci";
        if (choisi == word) {
            window.alert("Correct ! Vous avez trouvé en " + NbEssais + "essais.");
            location.reload();
            document.getElementById('nbessaie').innerHTML = 8;

        }
        if (NbEssais == 8) {
            window.alert("Désolé, c'est fini. Le  correct était : " + word);
            location.reload();
            document.getElementById('nbessaie').innerHTML = 8;

        }
    }