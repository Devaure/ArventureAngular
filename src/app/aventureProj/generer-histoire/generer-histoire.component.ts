import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArventureFeature } from 'src/app/class/ArventureFeature';

@Component({
  selector: 'app-generer-histoire',
  templateUrl: './generer-histoire.component.html',
  styleUrls: ['./generer-histoire.component.css', '../histoire/histoire.component.css']
})
export class GenererHistoireComponent implements OnInit {

  arventure:ArventureFeature;
  suiteHistoire:any;
  constructor(private route:ActivatedRoute, private router:Router) { 
    this.arventure = new ArventureFeature();
  }

  ngOnInit(): void {
    const id= this.route.snapshot.params['id'];
    this.suiteHistoire = this.arventure.startSuiteHistoire(id);
    this.arventure.stop();
  }

  redirectHome(){
    this.router.navigateByUrl("/histoire");
  }
  bground(){
    const id= this.route.snapshot.params['id'];
    let bg:any;
    if (id==="carte1"){
      bg='masthead tempete';
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

  son(){
    const id= this.route.snapshot.params['id'];
    let sn:any;
    if (id==="carte1"){
    sn = "../../../assets/audio/pluie.mp3";
    }
    else if (id==="carte2"){
      sn = "../../../assets/audio/montagne.mp3";
      }
    else if (id==="carte3"){
      sn = "../../../assets/audio/foret.mp3";
      }
    else{
      sn = "../../../assets/audio/refuge.mp3";
    }
  return sn;
}


}
