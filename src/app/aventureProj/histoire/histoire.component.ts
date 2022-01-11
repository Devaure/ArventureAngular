import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArventureFeature } from 'src/app/class/ArventureFeature';

@Component({
  selector: 'app-histoire',
  templateUrl: './histoire.component.html',
  styleUrls: ['./histoire.component.css']
})

export class HistoireComponent implements OnInit {
  arventure :ArventureFeature;

  constructor(private route:Router) { 
    this.arventure = new ArventureFeature();

  }

  ngOnInit(): void {
  
  }

  redirectPerso(){
    localStorage.setItem("toto", "0");
      this.route.navigateByUrl("/arventure");
  }
}
