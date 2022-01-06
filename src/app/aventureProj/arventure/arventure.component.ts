import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArventureFeature } from 'src/app/class/ArventureFeature';

@Component({
  selector: 'app-arventure',
  templateUrl: './arventure.component.html',
  styleUrls: ['./arventure.component.css']
})
export class ArventureComponent implements OnInit {
arventure:ArventureFeature;
   id:string;
   cardList:any[]= [
      {id: 1, img: 'tempete_ok.webp', title: 'Tempête', alt: 'tempete'},
      {id: 2, img: 'moutains_ok.webp', title: 'Montagne', alt: 'montagne'},
      {id: 3, img: 'forestGood.webp', title: 'Forêt', alt: 'foret'},
      {id: 3, img: 'refuge_ok.webp', title: 'Refuge', alt: 'refuge'}
   ];

  constructor(private route:Router) {
     this.arventure = new ArventureFeature();
   }
 
  ngOnInit(): void {
    this.arventure.start();
  }
  
  isCollideOk(){
    if(localStorage.getItem("toto") == "1"){

      this.id = this.arventure.idCarteCollide();
      console.log("CArteId", this.id);
      
      this.route.navigateByUrl(`/genererHistoire/${this.id}`);
    }
    localStorage.setItem("toto", "0");
  }
  
}
