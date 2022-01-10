export class ArventureFeature {

  perso: HTMLImageElement = document.getElementById("element") as HTMLImageElement;
  pad: number = 70; //padding function isCollide
  comte: HTMLElement = document.getElementById('comte') as HTMLElement;
  circle: HTMLElement = document.querySelector("a.btn-circle") as HTMLElement;
  para: HTMLElement = document.querySelector(".paragraphe") as HTMLElement;
  //findepluie: boolean = false;
  waterDrop = document.createElement('i') as HTMLElement;
  interval: any;
  service: any;
  constructor(service: any) {
    this.service = service;
  }

  /**
   * Permet d'être appelé dans le component arventure et d'exécuter ces différentes methodes.
   */
  start() {
    this.waterDrop = document.createElement('i') as HTMLElement;
    this.perso = document.getElementById("element") as HTMLImageElement;
    this.circle = document.querySelector("a.btn-circle") as HTMLElement;
    this.para = document.querySelector(".paragraphe") as HTMLElement;
    this.comte = document.getElementById('comte') as HTMLElement;
    this.resetPers("");
    this.EventTouch();
    this.isCollide(this.sizeElemt('element'), this.sizeElements('img'));
    this.takeInformation(this.allInformationImg('img'), this.sizeElemt("element"));
    localStorage.setItem("findepluie", "1");
  }

  /**
   *Pemet d'être appeler dans le component generer histoire et de Recupèrer l'id de la carte 
   correspondant à la collision entre le personnage et l'image(carte)
   * @returns {string}
   */
  idCarteCollide(): string {
    return this.takeInformation(this.allInformationImg('img'), this.sizeElemt("element"));
  }

  /**
   * Pemet d'être appeler dans le component generer histoire 
   * et de générer l'histoire correspondant au choix de l'utilisateur 
   * @param id 
   * @returns {string | void}
   */
  startSuiteHistoire(id: string): string | void {

    if (id == "carte1") {
      this.waterDrop = document.createElement('i') as HTMLElement;
      localStorage.setItem("findepluie", "0");
      this.interval = setInterval(this.rainFall, 0.5);
    }
    this.perso = document.getElementById("element") as HTMLImageElement;
    this.circle = document.querySelector("a.btn-circle") as HTMLElement;
    this.comte = document.getElementById('comte') as HTMLElement;
    this.para = document.querySelector(".paragraphe") as HTMLElement;
    this.comte = document.getElementById('comte') as HTMLElement;
    this.EventTouch();
    return this.suiteHistoire(id);
  }

  /**
 * Fonction qui permet de générer la pluie et de la supprimer à la fin de l'histoire
 */
  rainFall(): void {
    if (localStorage.getItem("findepluie") != "1") {
      this.waterDrop = document.createElement('i') as HTMLElement;
      this.waterDrop.classList.add('fas');
      this.waterDrop.classList.add('fa-tint');
      this.waterDrop.style.left = Math.random() * window.innerWidth + 'px';
      this.waterDrop.style.animationDuration = Math.random() * 1 + 's';
      this.waterDrop.style.opacity = (Math.random() + 0.4).toString();
      this.waterDrop.style.fontSize = Math.random() * 15 + 'px';
    } else if (localStorage.getItem("findepluie") == "1") {
      clearInterval(this.interval);
      this.waterDrop.classList.remove('fas');
      this.waterDrop.classList.remove('fa-tint');
    }
    document.body.appendChild(this.waterDrop);
    setTimeout(() => {
      this.waterDrop.remove();
    }, 1000)
  }

  /**
   * Fonction qui permet de générer un nombre aléatoire
   * @param max 
   * @returns un random
   */
  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  isCollide2(): void {
    this.perso.style.transition = "all 100ms ease-in-out";
    this.isCollide(
      this.sizeElemt('element'),
      this.sizeElements('img')
    );
  }

  /**
   * Réinitialiser l'emplacement du personnage
   * @param suiteHistoire 
   */
  resetPers(suiteHistoire = ""): void {
    console.log(`${suiteHistoire.length} == ${this.comte?.innerHTML.length + 1}`)

    if (suiteHistoire.length == this.comte?.innerHTML.length + 1) {
      console.log("fin de l'histoire");
      this.circle.style.cssText = "transform: translateX(0vw) rotate(360deg); -webkit-transition: 1s 500ms;";
      this.para.style.overflowY = "visible !important";
      localStorage.setItem("coucou", "0");
      localStorage.setItem("findepluie", "1");
      this.waterDrop.classList.remove('fas');
      this.waterDrop.classList.remove('fa-tint');
    }
    if (this.perso) {
      this.perso.style.removeProperty('bottom');
      this.perso.style.bottom = "150px;";
      this.perso.style.removeProperty('right');
      this.perso.style.removeProperty('left');
    }
  }

  /**
   * Création d'un objet pour passer les informations liées à générer histoire
   */
  dataToPass = {
    lieu: "",
    objetTrouve: "",
    mechant: "",
    directionChemin: "",
    etat: "",
    textCookie: "",
  }

  /**
 * Passe l'objet trouvé de façon aléatoire
 * @param lieu
 */
  getApiServObjetsTrouves(lieu: string) {
    let objetsTrouves: any;
    let objetsTrouves2: string;
    this.dataToPass.lieu = lieu;
    this.service.getObjetsTrouves().subscribe((data: any) => {

      objetsTrouves = data;
      console.log("objets ", objetsTrouves);
      objetsTrouves2 = objetsTrouves[this.getRandomInt(objetsTrouves.length - 1)].objet;
      this.dataToPass.objetTrouve = objetsTrouves2;
      this.getApiServEtatPetiteFille();

    });
  }

  /**
   * Passe l'état de la petite fille de façon aléatoire
   * @param lieu 
   */
  getApiServEtatPetiteFille() {
    let etat: any;
    let etat2: string;
    this.service.getEtatPetiteFille().subscribe((data: any) => {
      etat = data;
      etat2 = etat[this.getRandomInt(etat.length - 1)].etat;
      this.dataToPass.etat = etat2;
      this.getApiservCheminDirection();
    });
  }

  /**
   * Passe le chemin que le petit garçon prend de façon aléatoire
   */
  getApiservCheminDirection() {
    let cheminDirection: any;
    let cheminDirection2: any;
    this.service.getDirectionChemin().subscribe((data: any) => {
      cheminDirection = data;
      cheminDirection2 = cheminDirection[this.getRandomInt(cheminDirection.length -1)].direction;
      this.dataToPass.directionChemin = cheminDirection2;
      console.log(this.dataToPass.directionChemin);
      this. getPlaceByName(this.dataToPass.lieu);
    });
  }

  /**
   * Permet de passer le lieu où se passe l'histoire 
   * @param lieu 
   */
  getPlaceByName(lieu:string){
    let lieuCarte: string;
    this.service.getPlaceCarte(lieu).subscribe((data:any)=>{
        lieuCarte = data;
        console.log("lieu dans fonction getPlace", data.lieu);
        this.dataToPass.lieu = lieuCarte;
        this.GetApiServHistoireCookies();
    });
  }

  /**
   * Permet de passer la bonne histoire en fonction de l'état de la petite fille 
   */
  GetApiServHistoireCookies(){
    let histoireCookie:any;
    this.service.getHistoireSiAffame().subscribe((data:any)=>{
      histoireCookie = data;
      console.log("histoireCookie", histoireCookie[0].content);
      
      this.dataToPass.textCookie = histoireCookie[0].content;
      this.getApiServMechant();
    });
  }

  /**
   * Passe le méchant de façon aléatoire 
   * @param data 
   */
  getApiServMechant() {
    let mechant: any;
    let mechant2: any;
    this.service.getMechant().subscribe((data: any) => {
      //mechants
      mechant = data;
      mechant2 = mechant[this.getRandomInt(mechant.length - 1)].nameMechant;
      // objets trouvés
      console.log("mechant", mechant2);
      this.dataToPass.mechant = mechant2;
      this.genererHistoire(this.dataToPass)
    });
  }

  

  /**
   * 
   * @param lieu Function qui permet de générer l'histoire
   */
  genererHistoire(data: any) {
    this.comte.innerHTML;
    this.circle.style.cssText = "transform: translateX(-100vw) rotate(360deg); -webkit-transition: 1s 500ms;";
    
    let suiteHistoire: string = "";

    var siAffame = (data.etat == "affamée") ? `${data.textCookie}` : "";

    switch (data.lieu.endroit) {
      case 'montagne':
      case 'forêt':
        suiteHistoire += `.<br><br>Le petit garçon courageux décida de se diriger vers la ${data.lieu.endroit}`;
        break;
      case 'tempête':
        suiteHistoire += `malgré la ${data.lieu.endroit}.`;
        break;
      case 'refuge':
        suiteHistoire += `en direction du ${data.lieu.endroit} situé à la pointe de la montagne.`;
        break;
    }
    console.log("chemin droite ou gauche", data.directionChemin);
    suiteHistoire += `<br><br>Durant le périple le petit garçon rencontra un méchant ${data.mechant} qui avait faim. Fort heuresement, le petit garçon a sorti quelques cookies de son sac qu'il jeta en direction de l'animal affamé afin de se sauver discrétement des griffes de cette bête féroce.<br><br>C'est après de longues heures de marche que le petit garçon trouva un indice lui indiquant qu'il était sur le bon chemin. En effet, il trouva ${data.objetTrouve} de Lyla au sol. Par conséquent, le petit garçon continua son chemin longuement, jusqu'à attérir à une intersection. Un à droite et un à gauche. Le petit garçon choisissa de faire confiance à son intution: il pris le chemin de ${data.directionChemin}.`;

    switch (data.lieu.endroit) {
      case 'montagne':
      case 'forêt':
        suiteHistoire += `<br><br>Perséverant, il décida de continuer malgré la nuit et le froid tombant. C'est grâce à ses efforts qu'il retrouva la petite fille ${data.etat} sous une cabane de fortune perdu dans la ${data.lieu.endroit}. ${siAffame} Ils décidèrent tous les 2 de passer la nuit sur place, étant donné les vêtements chauds et le kit de survie que Lyla avait emporté.<br><br>C'est au levé du soleil, que les 2 petits aventuriers reprirent le chemin de la maison....`;
        break;
      case 'tempête':
        suiteHistoire += `<br><br>Le petit garçon décide de persister malgré l'arrivée de la tempête. C'est grâce à sa persévérance, que le petit garçon retrouvera la petite fille ${data.etat} réfugiée dans une grotte. ${siAffame} Ils décidèrent de dormir sur place au chaud, grâce au petit feu que Lyla avait fait à l'aide du kit de secours qu'elle avait emporté.<br><br>C'est au petit matin, vers 6h, que les 2 aventuriers reprirent le chemin de la maison....`;
        break;
      case 'refuge':
        suiteHistoire += `<br><br>Le petit téméraire décida de se mettre à l'abri pour la nuit dans le refuge il qu'il a vu. C'est au moment où il ouvra la porte qu'il retomba sur la pauvre petite fille ${data.etat}. ${siAffame}<br><br>C'est le lendemain que les 2 petits aventuriers retrouvèrent le chemin de leur domicile....`;
        break;
    }
    // thas recupération du this
    let str: string = suiteHistoire, i: number = 0, isTag: boolean = false, text: string, thas = this;
    (function type(): void {
      text = str.slice(0, ++i);
      if (text === str) return;

      thas.comte.innerHTML = text;

      /* ANIMATIONS */

      thas.comte.scrollIntoView({ block: "end" }); // descente prompteur

      /* FIN ANIMATIONS */
      var char = text.slice(-1);
      if (char === '<') isTag = true;
      if (char === '>') isTag = false;

      if (isTag) return type();
      setTimeout(type, 70);

      thas.resetPers(suiteHistoire);
    }());

  }

  suiteHistoire(idCarte: string) {
    console.log("function suite histoire idCarte", idCarte);
    switch (idCarte) {
      case 'carte1':
        console.log("suite Histoire carte1");

        this.getApiServObjetsTrouves(`${this.getPlaceByName("tempête")}`);

        break;

      case 'carte2':
        console.log("suite Histoire carte2");
        this.getApiServObjetsTrouves(`${this.getPlaceByName("montagne")}`);
        break;

      case 'carte3':
        console.log("suite Histoire carte3");
        this.getApiServObjetsTrouves(`${this.getPlaceByName("forêt")}`);
        break;

      case 'carte4':
        console.log("suite Histoire carte4");
        this.getApiServObjetsTrouves(`${this.getPlaceByName("refuge")}`);
        break;

    }
  }

  /**
   * Permet de renvoyer un tableau contenant toutes les tailles des images et les positions 
   * @param query 
   * @returns un tableau de tailles de toutes les images 
   */
  sizeElements(query: string) {
    let elmsImg = document.getElementsByClassName(query) as HTMLCollectionOf<HTMLImageElement>;
    let allSizeElement = new Array();

    for (let i = 0; i < elmsImg.length; i++) {
      allSizeElement[i] = elmsImg[i].getBoundingClientRect();
    }
    return allSizeElement;
  }

  /**
   * Permet de récvupérer l'ensemble des id des images 
   * @param query 
   * @returns tous les id des images 
   */
  allInformationImg(query: string): number[] {
    let elmts = document.getElementsByClassName(query) as HTMLCollectionOf<HTMLImageElement>;
    let allInformation = new Array();
    for (let i = 0; i < elmts.length; i++) {

      allInformation[i] = elmts[i].getAttribute("id");
    }
    return allInformation;
  }

  /**
   * Permet d'obtenir les informations sur la taille d'un élément et sa position relative par rapport à la zone d'affichage
   * @param element 
   * @returns informations sur la taille d'un élément et sa position relative par rapport à la zone d'affichage.
   */
  sizeElemt(element: string): DOMRect {
    let elm = document.getElementById(element) as HTMLImageElement;
    let sizeElement = elm.getBoundingClientRect();
    return sizeElement;
  }

  /**
   * Permet de récupérer l'ensemble des informations sur la positions des images et la position du personnage 
   * @param imgInformation 
   * @param posPersonnage 
   * @returns 
   */
  takeInformation(imgInformation: number[], posPersonnage: DOMRect): any {
    for (let i = 0; i < imgInformation.length; i++) {
      let posImg = document.getElementById(`${imgInformation[i]}`)!.getBoundingClientRect() as DOMRect;
      if (posPersonnage.x > posImg.x && posPersonnage.x + posPersonnage.width < posImg.x + posImg.width) {
        return imgInformation[i];
      }
    }
  }

  /**
   * Gestion d'événement des touches afin de déplacer le personnage 
   */
  EventTouch(): void {
    localStorage.setItem("coucou", "0");
    let features = this;//recupération du this
    window.addEventListener("keydown", function (event) {

      switch (event.key) {
        case "ArrowDown":

          features.perso.style.bottom = (parseInt(`${features.perso.style.bottom || 150}`) - 10) + 'px';
          features.isCollide2();
          break;

        case "ArrowUp":
          features.perso.style.bottom = (parseInt(`${features.perso.style.bottom || 150}`) + 10) + 'px';
          features.isCollide2();
          break;

        case "ArrowLeft":
          features.perso.style.left = (parseInt(`${features.perso.style.left || 0}`) - 10) + 'px';
          features.isCollide2();
          break;

        case "ArrowRight":
          features.perso.style.left = (parseInt(`${features.perso.style.left || 0}`) + 10) + 'px';
          features.isCollide2();
          break;

        case "Enter":
          // Faire quelque chose pour les touches "enter" ou "return" pressées.
          break;
        case "Escape":
          // Faire quelque chose pour la touche "esc" pressée.
          break;
        default:
          return; // Quitter lorsque cela ne gère pas l'événement touche.
      }

      // Annuler l'action par défaut pour éviter qu'elle ne soit traitée deux fois.
      event.preventDefault();
    }, true);
  }


  /**
   * Détection de la colision entre le personnage et les cartes
   * @param pers 
   * @param img 
   */
  isCollide(pers: DOMRect, img: DOMRect[]): void {

    for (let i = 0; i < img.length; i++) {
      //récupération des informations img et pers 
      console.log(`img pos top/bottom:  ${img[i].y} , hauteur img: ${img[i].height}`);
      console.log(`img pos right/left:  ${img[i].x} , largeur img: ${img[i].width}`);
      console.log(`pers pos top/bottom:  ${pers.y} , hauteur pers: ${pers.height}`);
      console.log(`pers pos right/left:  ${pers.x} , largeur pers: ${pers.width}`);

      if (pers.y + pers.height + img[i].height - this.pad < img[i].height) {

        this.resetPers();

      } else if (pers.y - this.pad > img[i].height) {

        console.log("en dehors en bas");

      } else if (pers.x + pers.height - this.pad < img[i].x || pers.x + pers.width > img[i].x) {
        console.log("carteId", this.takeInformation(this.allInformationImg('img'), this.sizeElemt("element")));
        console.log("coucou");
        if (localStorage.getItem("coucou") == "0") {

          localStorage.setItem("toto", "1");
          localStorage.setItem("coucou", "1");
        }

      }
    }
  }
}