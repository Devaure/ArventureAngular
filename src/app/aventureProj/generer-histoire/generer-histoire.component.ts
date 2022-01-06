import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArventureFeature } from 'src/app/class/ArventureFeature';

@Component({
  selector: 'app-generer-histoire',
  templateUrl: './generer-histoire.component.html',
  styleUrls: ['./generer-histoire.component.css', '../histoire/histoire.component.css']
})
export class GenererHistoireComponent implements OnInit {
  waterDrop = document.createElement('i') as HTMLElement;
  arventure:ArventureFeature;
  suiteHistoire:any;
  constructor(private route:ActivatedRoute, private router:Router) { 
    this.arventure = new ArventureFeature();
  }

  ngOnInit(): void {
    const id= this.route.snapshot.params['id'];
    this.suiteHistoire = this.arventure.startSuiteHistoire(id);
  }

  redirectHome(){
    this.router.navigateByUrl("/histoire");
  }

   /**
 * Fonction qui permet de générer la pluie 
 */
    rainFall(): void {

      let findepluie: boolean = false;
  

        this.waterDrop = document.createElement('i') as HTMLElement;
        this.waterDrop.classList.add('fas');
        this.waterDrop.classList.add('fa-tint');
        this.waterDrop.style.left = Math.random() * window.innerWidth + 'px';
        this.waterDrop.style.animationDuration = Math.random() * 2 + 's';
        this.waterDrop.style.opacity = (Math.random() + 0.4).toString();
        this.waterDrop.style.fontSize = Math.random() * 15 + 'px';

  
      document.body.appendChild(this.waterDrop);
  
      setTimeout(() => {
        this.waterDrop.remove();
      }, 1000)
  
    }
  
  bground(){
    const id= this.route.snapshot.params['id'];
    let bg:any;
    if (id==="carte1"){
      bg='masthead tempete';
      setInterval(this.rainFall, 0.5); // déclenchement de la pluie sur le mot tempête
    }
    else if (id==="carte2"){
      bg='masthead montagne'
    }
    else if (id==="carte3"){
      bg='masthead foret'
    }
    else if (id==="carte4"){
      bg='masthead refuge'
    }
    return bg
  }
}
