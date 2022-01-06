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
