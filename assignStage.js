
function findArtistIndex(artists, name) {
  for (let i = 0; i < artists.length; i++) {
    if (artists[i].name === name) {
      return artists[i].id;
    }
  }
  return -1;
}

//Recherche dichotomique comme binarySearch (possible car liste trié dans l'ordre alphabétique)
function findArtistIndex2(artists, name) {
    let left = 0; // Début de la liste
    let right = artists.length - 1; // Fin de la liste
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2); // On prend le milieu de la liste
  
      if (artists[mid].name === name) {
        return artists[mid].id; // l'artiste est au milieu et donc on l'a trouvé

        //Si le milieu est inférieur à name ça veut dire que le nom rechercher est avant dans l'alphabet on cherche dans la partie droite
      } else if (artists[mid].name < name) {
        left = mid + 1; 
      } else {
        right = mid - 1; // On cherche dans la partie gauche (plus petit)
      }
    }
  
    return -1; //Pas d'artiste
  }

/*// Jeu de données
const artists = [
  { id: "1", name: "Adele" },
  { id: "2", name: "Beyoncé" },
  { id: "3", name: "Coldplay" },
  { id: "4", name: "Drake" },
  { id: "5", name: "Ed Sheeran" },
  { id: "6", name: "Foo Fighters" },
  { id: "7", name: "Green Day" },
  { id: "8", name: "Harry Styles" },
  { id: "9", name: "Imagine Dragons" },
  { id: "10", name: "Jay-Z" }
];*/

/*// Tests
console.log(findArtistIndex2(artists, "Drake")); // renvoie 4 ?
console.log(findArtistIndex2(artists, "Adele")); // 1
console.log(findArtistIndex2(artists, "Jay-Z")); // 10
console.log(findArtistIndex2(artists, "The Beatles")); //-1*/

//un grand nombre d'artistes pour voir la différence
const artists = [];
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let id = 1;

//Création de plusieurs nom d'artiste aléatoire (ici on test avec des noms qui ne veulent rien dire)
for (let i = 0; i < 100000; i++) {
  let randomName = letters[Math.floor(Math.random() * letters.length)] + id; //Créer le nom aléatoire
  artists.push({ id: id.toString(), name: randomName }); //Ajoute au tableau d'artiste
  id++; //Incrémente l'id
}

// Tri par ordre alphabétique pour que on puisse utilisé la recherche dichotomique
artists.sort((a, b) => a.name.localeCompare(b.name));

// Artiste à rechercher
const searchName = artists[Math.floor(Math.random() * artists.length)].name; // Prendre un nom existant dans le tableau artist créer aléatoirement

// Mesure du temps pour la recherche linéaire
const start = performance.now();
const result1 = findArtistIndex(artists, searchName);
const end = performance.now();
console.log(`findArtistIndex: ${end - start} ms`);

// Mesure du temps pour la recherche dichotomique
const start2 = performance.now();
const result2 = findArtistIndex2(artists, searchName);
const end2 = performance.now();
console.log(`findArtistIndex2 (dichotomique) ${end2 - start2} ms`);



