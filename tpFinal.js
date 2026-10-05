// =============== Etape 1 : Modelisation des données ===============

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

bolt = new Athlete("Bolt", "Usain", 30, "Jamaique", "Lightning");
console.log(bolt.toString());

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

  classementScores() {
    const sens = this.sensTri === "ASC" ? 1 : -1;
    return [...this.resultats.entries()].sort((a, b) => sens * (a[1] - b[1]));
  }

  classement() {
    return this.classementScores().map(([athlete]) => athlete);
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

  afficherResultatsEpreuve(nomEpreuve) {}
}

// =============== Etape 2 : Gestion des scores ===============

// Création comptétition
const compet = new Competition("Olympics", 2030);

// Créer 8 athletes de 4 pays : 2 equipes
const athletes = [
  bolt,
  new Athlete("Blake", "Yohan", 28, "Jamaique", "Thunder"),
  new Athlete("Gatlin", "Justin", 33, "USA", "Lightning"),
  new Athlete("Coleman", "Christian", 25, "USA", "Thunder"),
  new Athlete("Lemaitre", "Christophe", 27, "France", "Lightning"),
  new Athlete("Vicaut", "Jimmy", 29, "France", "Thunder"),
  new Athlete("Su", "Bingtian", 26, "Chine", "Lightning"),
  new Athlete("Xie", "Zhenye", 24, "Chine", "Thunder"),
];

// Créer 3 epreuves
const epreuves = [
  (m100 = new Epreuve("100m", "individuel", "secondes", "ASC")),
  (sautLong = new Epreuve("Saut en longueur", "individuel", "metres", "DESC")),
  (lancePoids = new Epreuve("Lancer du poids", "individuel", "metres", "DESC")),
];

// ajout athletes et epreuves dans la competition
athletes.forEach((a) => compet.ajouterAthlete(a));
epreuves.forEach((e) => compet.ajouterEpreuve(e));

// scores
const m100Score = [9.58, 9.74, 9.69, 9.89, 10.06, 9.32, 9.84, 9.77];
const sautLongScore = [4.32, 4.21, 5.17, 5.32, 4.62, 5.75, 6.02, 5.89];
const lancePoidsScore = [18.2, 20.3, 22.8, 17.2, 18.4, 19.3, 17.6, 17.1];
