import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { ArventureFeature } from '../../class/ArventureFeature';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']

})
export class CardsComponent implements OnInit {
 cardList:any[];
 arventure:ArventureFeature;
 id:string;
  constructor(private route:Router, private apiService:ApiServiceService) { 
    this.arventure = new ArventureFeature(this.apiService);
  }

  ngOnInit(): void {
    this.getDisplayCard();
  }
  suiteHistoire2(idcard:string):void{
    this.route.navigateByUrl(`/genererHistoire/carte${idcard}`);
    this.getDisplayCard();
}

  isCollideOk():any{
    if(localStorage.getItem("toto") == "1"){

      this.id = this.arventure.idCarteCollide();

      if(this.id){
        this.route.navigateByUrl(`/genererHistoire/${this.id}`);
      }else{
        localStorage.setItem("coucou", "0");
        this.route.navigateByUrl("/arventure");
      }
    }
    localStorage.setItem("toto", "0");
  }

  getDisplayCard(){ 
    this.apiService.getCarte().subscribe((data:any)=>{
        this.cardList = data;
    });
  }
}
