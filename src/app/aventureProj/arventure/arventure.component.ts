import { Component, OnInit } from '@angular/core';
import { ArventureFeature } from 'src/app/class/ArventureFeature';


@Component({
  selector: 'app-arventure',
  templateUrl: './arventure.component.html',
  styleUrls: ['./arventure.component.css','../../../assets/css/bootstrap.min.css','../../../assets/fonts/font-awesome.min.css']
})
export class ArventureComponent implements OnInit {
arventure:ArventureFeature;
  constructor() {
     this.arventure = new ArventureFeature();
     
   }
  
  ngOnInit(): void {
  
    this.arventure.start();
  }
  
  
}
