import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArventureFeature } from '../../class/ArventureFeature';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']

})
export class CardsComponent implements OnInit {
  cardList:any[]= [
    {id: 1, img: 'tempete_ok.webp', title: 'Tempête', alt: 'tempete'},
    {id: 2, img: 'moutains_ok.webp', title: 'Montagne', alt: 'montagne'},
    {id: 3, img: 'forestGood.webp', title: 'Forêt', alt: 'foret'},
    {id: 3, img: 'refuge_ok.webp', title: 'Refuge', alt: 'refuge'}
 ];
 arventure:ArventureFeature;
 id:string;
  constructor(private route:Router) { 
    this.arventure = new ArventureFeature();
  }

  ngOnInit(): void {
  }
  isCollideOk():any{
    if(localStorage.getItem("toto") == "1"){

      this.id = this.arventure.idCarteCollide();
      console.log("CArteId", this.id);
      if(this.id){
        this.route.navigateByUrl(`/genererHistoire/${this.id}`);
      }else{
        localStorage.setItem("coucou", "0");
        this.route.navigateByUrl("/arventure");
      }
     
    }
    localStorage.setItem("toto", "0");
  }
}
