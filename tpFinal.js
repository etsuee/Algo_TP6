// Etape 1 : Modelisation des données

class Athlete {
  constructor(nom, prenom, age, pays, equipe) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.pays = pays;
    this.equipe = equipe;
  }

  nomComplet() {
    return this.prenom + " " + this.nom;
  }

  toString() {
    return `${this.nomComplet()} (${this.pays}, ${this.equipe})`;
  }
}

class Epreuve {
  constructor(nom, type, unite, sensTri, resultats) {
    this.nom = nom;
    this.type = type; // individuel ou equipe
    this.unite = unite; // secondes ou metres ou points
    this.sensTri = sensTri; // ASC (temps) ou DESC (distance)
    this.resultats = new Map();
  }

  enregistrerResultat(athlete, score) {
    this.resultats.set(athlete, score);
  }

  classement() {
    if (this.sensTri === "ASC") {
      let res = [];
      res.sort((a, b) => a - b);
    } else {
      res.sort((a, b) => b - a);
    }
  }
}

class Competition {
  constructor(nom, annee, athletes, epreuves) {
    this.nom = nom;
    this.annee = annee;
    this.athletes = [];
    this.epreuves = [];
  }

  ajouterAthlete(a) {
    this.athletes.push(a);
  }

  ajouterEpreuve(e) {
    this.epreuves.push(e);
  }
}

// Etape 2 : Gestion des scores

// Créer 8 athletes de 4 pays : 2 equipes
const bolt = new Athlete("Bolt", "Usain", 30, "Jamaique", "Lightning");
console.log(bolt.toString());
const blake = new Athlete("Blake", "Yohan", 28, "Jamaique", "Thunder");
const gatlin = new Athlete("Gatlin", "Justin", 33, "USA", "Lightning");
const coleman = new Athlete("Coleman", "Christian", 25, "USA", "Thunder");
const lem = new Athlete("Lemaitre", "Christophe", 27, "France", "Lightning");
const vicaut = new Athlete("Vicaut", "Jimmy", 29, "France", "Thunder");
const su = new Athlete("Su", "Bingtian", 26, "Chine", "Lightning");
const xie = new Athlete("Xie", "Zhenye", 24, "Chine", "Thunder");

// Créer 3 epreuves
const m100 = new Epreuve("100m", "individuel", "secondes", "ASC");
const sautLong = new Epreuve(
  "Saut en longueur",
  "individuel",
  "metres",
  "DESC",
);
const lancePoids = new Epreuve(
  "Lancer du poids",
  "individuel",
  "metres",
  "DESC",
);

// scores
const m100Score = [9.58, 9.74, 9.69, 9.89, 10.06, 9.32, 9.84, 9.77];
const sautLongScore = [];
