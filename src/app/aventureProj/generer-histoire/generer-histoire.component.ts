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
  }

  redirectHome(){
    this.router.navigateByUrl("/histoire");
  }
  bground(){
    const id= this.route.snapshot.params['id'];
    let bg:any;
    if (id==="carte1"){
      bg='tempete'
    }
    else if (id==="carte2"){
      bg='montagne'
    }
    else if (id==="carte3"){
      bg='foret'
    }
    else if (id==="carte4"){
      bg='refuge'
    }
    return bg
  }
}
