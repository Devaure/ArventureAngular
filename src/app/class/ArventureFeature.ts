export class ArventureFeature {

  perso:HTMLImageElement = document.getElementById("element") as HTMLImageElement; 
  pad: number = 75; //padding function isCollide
  comte:HTMLElement = document.getElementById('comte') as HTMLElement;
  circle:HTMLElement = document.querySelector("a.btn-circle") as HTMLElement;
  para:HTMLElement = document.querySelector(".paragraphe") as HTMLElement;
  findepluie: boolean = false;


  constructor() {
  }
  
  start(){
    this.perso = document.getElementById("element") as HTMLImageElement;
    this.circle = document.querySelector("a.btn-circle") as HTMLElement;
    this.para = document.querySelector(".paragraphe") as HTMLElement;
    this.comte= document.getElementById('comte') as HTMLElement;
    this.findepluie = false;
    //this.rainFall();
    this.resetPers();
    this.EventTouch();
    this.isCollide2();
    this.isCollide(this.sizeElemt('element'),this.sizeElements('img'));
    //this.type("");
    this.takeInformation(this.allInformationImg('img'), this.sizeElemt("element"));
    //this.recharger();
    
  }


  /**
 * Fonction qui permet de générer la pluie 
 */
  rainFall(): void {
    const waterDrop = document.createElement('i') as HTMLElement;
    let findepluie: boolean = false;

    if (findepluie) {
      waterDrop.classList.add('fas');
      waterDrop.classList.add('fa-tint');
      waterDrop.style.left = Math.random() * window.innerWidth + 'px';
      waterDrop.style.animationDuration = Math.random() * 2 + 's';
      waterDrop.style.opacity = (Math.random() + 0.4).toString();
      waterDrop.style.fontSize = Math.random() * 15 + 'px';
    }

    document.body.appendChild(waterDrop);

    setTimeout(() => {
      waterDrop.remove();
    }, 1000)

  }

  /**
   * Function qui permet le rechargement de la page
   */
  recharger(): void {
    let uuidv4 = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
    window.location.href = "./index.html?uuidv4=" + uuidv4 + "#presentationCartes";
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
   * 
   * @param suiteHistoire Réinitialiser l'emplacement du personnage
   */
  resetPers(suiteHistoire = ""): void {
     console.log(`${suiteHistoire.length} == ${this.comte?.innerHTML.length + 1}`)

    if (suiteHistoire.length == this.comte?.innerHTML.length + 1) {
      console.log("fin de l'histoire");
      this.circle.style.cssText = "transform: translateX(0vw) rotate(360deg); -webkit-transition: 1s 500ms;";
      this.para.style.overflowY = "visible";
      localStorage.setItem("coucou", "0");
      this.findepluie = true;
    }
    this.perso.style.removeProperty('bottom');
    this.perso.style.bottom = "150px;";
    this.perso.style.removeProperty('right');
    this.perso.style.removeProperty('left');
  }

  /**
   * 
   * @param lieu Function qui permet de générer l'histoire
   */
  genererHistoire(lieu: string) {
    this.comte.innerHTML = "";
    this.circle.style.cssText = "transform: translateX(-100vw) rotate(360deg); -webkit-transition: 1s 500ms;";

    let suiteHistoire: string = "";

    let mechant = new Array("loup", "ours"); // mechants éventuellements recontrés
    let mechant2 = mechant[this.getRandomInt(mechant.length)];

    let objetsListe = new Array("le pin's", "le téléphone", "le foulard", "la basket"); // objets trouvés
    let objetsListe2 = objetsListe[this.getRandomInt(objetsListe.length)];

    let directionChemin = new Array("droite", "gauche"); // chemin
    let directionChemin2 = directionChemin[this.getRandomInt(directionChemin.length)];

    let etatFille = new Array("affamée", "saine et sauve"); // etat de la fille
    let etatFille2 = etatFille[this.getRandomInt(etatFille.length)];

    var siAffame = (etatFille2 == "affamée") ? " Le petit garçon sorta donc les cookies restants pour lui les donner." : "";

    switch (lieu) {
      case 'montagne':
      case 'forêt':
         suiteHistoire += `.<br><br>Le petit garçon courageux décida de se diriger vers la ${lieu}`;
        break;
      case 'tempête':
        suiteHistoire += `malgré la tempête.`;
        break;
      case 'refuge':
        suiteHistoire += `en direction du ${lieu} situé à la pointe de la montagne.`;
        break;
      default:
        this.resetPers();
    }

    suiteHistoire += `<br><br>Durant le périple le petit garçon rencontra un méchant ${mechant2} qui avait faim. Fort heuresement, le petit garçon a sorti quelques cookies de son sac qu'il jeta en direction de l'animal affamé afin de se sauver discrétement des griffes de cette bête féroce.<br><br>C'est après de longues heures de marche que le petit garçon trouva un indice lui indiquant qu'il était sur le bon chemin. En effet, il trouva ${objetsListe2} de Lyla au sol. Par conséquent, le petit garçon continua son chemin longuement, jusqu'à attérir à une intersection. Un à droite et un à gauche. Le petit garçon choisissa de faire confiance à son intution: il pris le chemin de ${directionChemin2}.`;

    switch (lieu) {
      case 'montagne':
      case 'forêt':
        suiteHistoire += `<br><br>Perséverant, il décida de continuer malgré la nuit et le froid tombant. C'est grâce à ses efforts qu'il retrouva la petite fille ${etatFille2} sous une cabane de fortune perdu dans la ${lieu}. ${siAffame} Ils décidèrent tous les 2 de passer la nuit sur place, étant donné les vêtements chauds et le kit de survie que Lyla avait emporté.<br><br>C'est au levé du soleil, que les 2 petits aventuriers reprirent le chemin de la maison....`;
        break;
      case 'tempête':
        suiteHistoire += `<br><br>Le petit garçon décide de persister malgré l'arrivée de la tempête. C'est grâce à sa persévérance, que le petit garçon retrouvera la petite fille ${etatFille2} réfugiée dans une grotte. ${siAffame} Ils décidèrent de dormir sur place au chaud, grâce au petit feu que Lyla avait fait à l'aide du kit de secours qu'elle avait emporté.<br><br>C'est au petit matin, vers 6h, que les 2 aventuriers reprirent le chemin de la maison....`;
        break;
      case 'refuge':
        suiteHistoire += `<br><br>Le petit téméraire décida de se mettre à l'abri pour la nuit dans le refuge il qu'il a vu. C'est au moment où il ouvra la porte qu'il retomba sur la pauvre petite fille ${etatFille2}. ${siAffame}<br><br>C'est le lendemain que les 2 petits aventuriers retrouvèrent le chemin de leur domicile....`;
        break;
      default:
        this.resetPers();
    }
    this.type(suiteHistoire);
  }

  suiteHistoire(idCarte:string){
    switch(idCarte){
        case 'carte1':
            this.genererHistoire("tempête");
            break;

        case 'carte2':
            this.genererHistoire("montagne");
            break;

        case 'carte3':
            this.genererHistoire("forêt");
            break;

        case 'carte4':
            this.genererHistoire("refuge");
            break;
        default:
          this.recharger();
    }
  }

  /**
   * Effet machine à écrire 
   * @param str 
   * @returns 
   */
  type(str:string): void {
    let i: number = 0;
    let isTag: boolean = false;
    let text: string;

    text = str.slice(0, ++i);
    if (text === str) return;

    this.comte.innerHTML = text;

    /* ANIMATIONS */
    // déclenchement de la pluie
    let n: string[] = text.split(" "); // words array
    if (n[n.length - 1] == "tempête") {
      this.findepluie = false;
      
      setInterval(this.rainFall, 0.5); // déclenchement de la pluie sur le mot tempête
    }
    this.comte.scrollIntoView({ block: "end" }); // descente prompteur
    /* FIN ANIMATIONS */

    let char: string = text.slice(-1);
    if (char === '<') isTag = true;
    if (char === '>') isTag = false;

    if (isTag) return this.type(str);
    setTimeout(this.type, 72);
    this.resetPers();
  
  };

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
  
    


  isCollide(pers: DOMRect, img: DOMRect[]) {

    for (let i = 0; i < img.length; i++) {

      console.log(`img pos top/bottom:  ${img[i].y} , hauteur img: ${img[i].height}`);
      console.log(`img pos right/left:  ${img[i].x} , largeur img: ${img[i].width}`);
      console.log(`pers pos top/bottom:  ${pers.y} , hauteur pers: ${pers.height}`);
      console.log(`pers pos right/left:  ${pers.x} , largeur pers: ${pers.width}`);

      var pad = 70;
      if (pers.y + pers.height + img[i].height - pad < img[i].height) {

        this.resetPers();

      } else if (pers.y - pad > img[i].height) {

        console.log("en dehors en bas");

      } else if (pers.x + pers.height - pad < img[i].x || pers.x + pers.width > img[i].x) {
        console.log(this.takeInformation(this.allInformationImg('img'), this.sizeElemt("element")));
        console.log("coucou");

        if (localStorage.getItem("coucou") == "0") {

          localStorage.setItem("coucou", "1");
          let idHistoire = this.takeInformation(this.allInformationImg('img'), this.sizeElemt("element"));
          this.suiteHistoire(idHistoire);
          // NEW BACKGROUND:
          console.log(typeof document.querySelector(`img#${idHistoire}`));
          if (document.querySelector(`img#${idHistoire}`)) {
            let newBackground = document.querySelector(`img#${idHistoire}`)!.getAttribute("src");
            let headerElement = document.querySelector(".masthead") as HTMLHeadingElement;
            headerElement.style.cssText = `background:url(${newBackground}) no-repeat center/cover; background-position:bottom;`;
          }
        }
        
      }
    }
  }
}